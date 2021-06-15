<template>
  <AuthLayout>
    <div class="col-span-7 bg-white py-12 px-8 text-sm flex flex-col items-center">
      <h2 class="text-gray-700 text-2xl">
        Create account
      </h2>
      <form
        class="w-full"
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
          <RegistrationError :error="errors['email']" />
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
          <RegistrationError :error="errors['password']" />
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
        <!--          <RegistrationError :error="errors['password_confirm']" />-->
        <!--        </div>-->
        <div class="flex justify-center w-full">
          <button
            type="submit"
            class="uppercase py-3 px-20 bg-brand-bg text-white rounded-3xl font-bold mt-4 focus:outline-none focus:ring-4 focus:ring-green-200"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  </AuthLayout>
</template>

<script>
// @vue/component
import AuthLayout from './AuthLayout'
import RegistrationError from './RegistrationError'
import axios from 'axios'

export default {
  name: 'RegistrationForm',
  components: {
    AuthLayout,
    RegistrationError
  },
  data () {
    return {
      form: {},
      errors: {}
    }
  },
  methods: {
    handleFormSubmit () {
      axios.post('/rest-auth/registration/', this.form)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          this.errors = error.response.data
        })
    }
  }
}
</script>
