<template>
  <AuthLayout>
    <RegisterAndLoginContainer
      title="Create account"
    >
      <AuthForm
        end-point="/rest-auth/registration/"
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
import AuthError from './AuthError'
import axios from 'axios'
import RegisterAndLoginContainer from './RegisterAndLoginContainer'
import AuthForm from './AuthForm'

export default {
  name: 'RegistrationForm',
  components: {
    AuthLayout,
    RegisterAndLoginContainer,
    AuthForm
  }
}
</script>
