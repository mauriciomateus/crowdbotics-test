<template>
  <AuthLayout>
    <RegisterAndLoginContainer
      title="Login to Dashboard"
    >
      <AuthForm
        end-point="/rest-auth/login/"
        button-text="Login"
        redirect-route-name="Dashboard.AppsIndex"
      />
      <template v-slot:footer>
        <p>
          Don't have an account?
          <router-link
            :to="{name:'Register'}"
            class="text-brand-color font-semibold hover:underline"
          >
            Register Now
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
