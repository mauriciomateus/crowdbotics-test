<template>
  <div class="bg-auth-pages bg-no-repeat bg-cover w-full h-screen flex justify-center items-center">
    <div class="absolute inset-0 bg-gray-500 opacity-25" />
    <div class="rounded-xl bg-white flex w-5/12 grid grid-cols-12 overflow-hidden z-10">
      <LoginText />
      <slot />
    </div>
  </div>
</template>

<script>
// @vue/component
import LoginText from './LoginText'
export default {
  components: {
    LoginText
  }
}
</script>
