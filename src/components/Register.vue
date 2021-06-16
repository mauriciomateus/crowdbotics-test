<template>
  <AuthLayout>
    <RegisterAndLoginContainer
      title="Create account"
    >
      <span
        v-if="successfulRegistration"
        class="bg-green-500 text-white p-3 rounded-md mt-1"
      >Account created successfully!</span>
      <AuthForm
        form-action="register"
        button-text="Sign Up"
        :form-fields="['all']"
      />
      <template v-slot:footer>
        <p>
          Already have an account?
          <router-link
            :to="{name:'Login'}"
            class="text-brand-color font-semibold hover:underline"
            redirect-route-name="Login"
          >
            Login now
          </router-link>
        </p>
      </template>
    </RegisterAndLoginContainer>
  </AuthLayout>
</template>

<script>
// @vue/component
import AuthLayout from './AuthLayout'
import RegisterAndLoginContainer from './RegisterAndLoginContainer'
import AuthForm from './AuthForm'
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('auth')

export default {
  name: 'RegistrationForm',
  components: {
    AuthLayout,
    RegisterAndLoginContainer,
    AuthForm
  },
  computed: {
    ...mapState(['successfulRegistration'])
  }
}
</script>
