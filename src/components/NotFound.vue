<template>
  <div>
    <h1>Not found</h1>
    <div>
      <router-link
        :to="{name:'Register'}"
        class="text-brand-color font-semibold hover:underline"
      >
        Register
      </router-link>
      <router-link
        :to="{name:'Login'}"
        class="text-brand-color font-semibold hover:underline"
      >
        Login
      </router-link>
      <br>
    </div>
  </div>
</template>

<script>
// @vue/component
export default {}
</script>
