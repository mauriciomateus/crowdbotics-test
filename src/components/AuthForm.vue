<template>
  <form
    class="w-full relative pb-20"
    @submit.prevent="handleFormSubmit({formAction})"
  >
    <FormField
      form-module-name="auth"
      field-label="Email *"
      field-name="email"
      field-type="text"
      form-object-name="authForm"
    />
    <FormField
      form-module-name="auth"
      field-label="Password *"
      field-name="password"
      field-type="password"
      form-object-name="authForm"
    />
    <!--    <div class="w-full mt-3">-->
    <!--      <label-->
    <!--        for="email"-->
    <!--        class="block w-full text-gray-700"-->
    <!--      >Email*</label>-->
    <!--      &lt;!&ndash;Type set as text just to see the api validation &ndash;&gt;-->
    <!--      <input-->
    <!--        id="email"-->
    <!--        v-model="form.email"-->
    <!--        type="text"-->
    <!--        name="email"-->
    <!--        class="w-full rounded-lg border-gray-500"-->
    <!--      >-->
    <!--      <AuthError :error="errors['email']" />-->
    <!--    </div>-->
    <!--    <div-->
    <!--      v-if="showField('password')"-->
    <!--      class="w-full mt-3"-->
    <!--    >-->
    <!--      <label-->
    <!--        for="password"-->
    <!--        class="block w-full text-gray-700"-->
    <!--      >Password*</label>-->
    <!--      <input-->
    <!--        id="password"-->
    <!--        v-model="form.password"-->
    <!--        type="password"-->
    <!--        name="password"-->
    <!--        class="w-full rounded-lg border-gray-500"-->
    <!--      >-->
    <!--      <AuthError :error="errors['password']" />-->
    <!--    </div>-->

    <div class="flex justify-center w-full">
      <button
        type="submit"
        class="uppercase py-3 px-20 bg-brand-bg text-white rounded-3xl font-bold mt-4 focus:outline-none focus:ring-4 focus:ring-green-200 flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
        :disabled="formBeingSent"
      >
        {{ buttonText }} <i
          v-if="formBeingSent"
          class="fas fa-spinner mr-1 animate animate-spin ml-3 flex w-8 h-8 justify-center items-center absolute text-4xl"
        />
      </button>
    </div>
    <div
      v-if="nonFieldErrors && Object.keys(nonFieldErrors).length"
      class="flex absolute bottom-0 bg-red-500 text-white rounded-sm flex flex-col"
    >
      <div class="flex justify-end">
        <i
          class="fas fa-window-close mr-1 p-1 cursor-pointer"
          @click="clearValidationErrors"
        />
      </div>
      <div class="p-2">
        {{ nonFieldErrors }}
      </div>
    </div>
  </form>
</template>

<script>
// @vue/component
import FormField from './FormField'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions, mapGetters } = createNamespacedHelpers('auth')

export default {
  components: {
    // AuthError,
    FormField
  },
  props: {
    formAction: {
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
    },
    formFields: {
      type: Array,
      default: Array
    }
  },
  data () {
    return {
      ...mapState(['sending'])
    }
  },
  computed: {
    ...mapGetters(['nonFieldErrors', 'formBeingSent'])
  },
  created () {
    this.redirectIfAuthenticated()
  },
  methods: {
    ...mapActions(['redirectIfAuthenticated', 'handleFormSubmit', 'clearValidationErrors'])
  }
}
</script>
