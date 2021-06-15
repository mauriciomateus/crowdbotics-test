<template>
  <AuthLayout>
    <RegisterAndLoginContainer
      title="Check your email"
    >
      <p class="text-md mt-5 text-center">
        We have sent you an e-mail. Please <a
          href="mailto:support@crowdbotics.com"
          class="text-brand-color font-bold hover:underline"
        >contact us</a> if you do not receive it within a few minutes.
      </p>
      <template v-slot:footer>
        <p class="text-center">
          <router-link
            :to="{name:'Login'}"
            class="text-brand-color font-semibold hover:underline"
            redirect-route-name="Login"
          >
            <i class="fas fa-arrow-left mr-2" /> Go Back to Login
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
    AuthLayout,
    RegisterAndLoginContainer
  }
}
</script>
