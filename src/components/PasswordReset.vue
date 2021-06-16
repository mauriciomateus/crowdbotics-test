<template>
  <AuthLayout>
    <RegisterAndLoginContainer
      title="Reset your password"
    >
      <AuthForm
        form-action="passwordReset"
        button-text="Reset Password"
        redirect-route-name="PasswordResetMessage"
        :form-fields="['email']"
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
import AuthForm from './AuthForm'
import AuthLayout from './AuthLayout'
import RegisterAndLoginContainer from './RegisterAndLoginContainer'

export default {
  components: {
    AuthForm,
    AuthLayout,
    RegisterAndLoginContainer
  }
}
</script>
