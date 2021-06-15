<template>
  <form
    class="w-full relative pb-20"
    @submit.prevent="handleFormSubmit"
  >
    <div class="w-full mt-3">
      <label
        for="email"
        class="block w-full text-gray-700"
      >Email*</label>
      <!--Type set as text just to see the api validation -->
      <input
        id="email"
        v-model="form.email"
        type="text"
        name="email"
        class="w-full rounded-lg border-gray-500"
      >
      <AuthError :error="errors['email']" />
    </div>
    <div class="w-full mt-3">
      <label
        for="password"
        class="block w-full text-gray-700"
      >Password*</label>
      <input
        id="password"
        v-model="form.password"
        type="password"
        name="password"
        class="w-full rounded-lg border-gray-500"
      >
      <AuthError :error="errors['password']" />
    </div>
    <!--        <div class="w-full mt-3">-->
    <!--          <label-->
    <!--            for="password_confirm"-->
    <!--            class="block w-full text-gray-700"-->
    <!--          >Repeat Password*</label>-->
    <!--          <input-->
    <!--            id="password_confirm"-->
    <!--            type="password"-->
    <!--            name="password_confirm"-->
    <!--            class="w-full rounded-lg border-gray-500"-->
    <!--          >-->
    <!--          <AuthError :error="errors['password_confirm']" />-->
    <!--        </div>-->
    <div class="flex justify-center w-full">
      <button
        type="submit"
        class="uppercase py-3 px-20 bg-brand-bg text-white rounded-3xl font-bold mt-4 focus:outline-none focus:ring-4 focus:ring-green-200 flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
        :disabled="sending"
      >
        {{ buttonText }} <i
          v-if="sending"
          class="fas fa-spinner mr-1 animate animate-spin ml-3 flex w-8 h-8 justify-center items-center absolute text-4xl"
        />
      </button>
    </div>
    <div
      v-if="errors['non_field_errors']"
      class="flex absolute bottom-0 bg-red-500 text-white rounded-sm flex flex-col"
    >
      <div class="flex justify-end">
        <i
          class="fas fa-window-close mr-1 p-1 cursor-pointer"
          @click="clearErrors"
        />
      </div>
      <div class="p-2">
        {{ errors['non_field_errors'][0] }}
      </div>
    </div>
  </form>
</template>

<script>
// @vue/component
import AuthError from './AuthError'
import axios from 'axios'

export default {
  components: {
    AuthError
  },
  props: {
    endPoint: {
      type: String,
      default: String
    },
    buttonText: {
      type: String,
      default: 'Submit'
    },
    redirectRouteName: {
      type: String,
      default: String
    }
  },
  data () {
    return {
      form: {},
      errors: {},
      sending: false
    }
  },
  methods: {
    handleFormSubmit () {
      this.sending = true
      axios.post(this.endPoint, this.form)
        .then(response => {
          this.sending = false
          console.log(response)
          this.handleRedirect()
        })
        .catch(error => {
          this.errors = error.response.data
          this.sending = false
          // Temporary just to test redirect without creating an account
          // this.handleRedirect()
        })
    },
    clearErrors () {
      this.errors = {}
    },
    handleRedirect () {
      this.$router.push({ name: this.redirectRouteName })
    }
  }
}
</script>
