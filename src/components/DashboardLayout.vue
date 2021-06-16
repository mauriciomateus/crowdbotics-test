<template>
  <div class="flex flex-col">
    <div class="h-8 bg-gray-900 h-12 px-5 flex justify-between items-center">
      <router-link
        :to="{name:'Dashboard.AppsIndex'}"
        class="flex overflow-hidden h-5"
      >
        <img
          src="https://cb-dash.s3.amazonaws.com/img/cb-footer.png"
          alt="Dashboard Home"
          class="block h-full w-auto"
        >
      </router-link>
      <button
        type="button"
        title="Log Out"
        @click="logOut"
      >
        <i class="fas fa-power-off mr-1 text-white" />
      </button>
    </div>
    <div class="p-4">
      <slot />
    </div>
  </div>
</template>

<script>
// @vue/component
import axios from 'axios'

export default {
  methods: {
    logOut () {
      axios.post('/rest-auth/logout/')
        .then(response => {
          localStorage.removeItem('accessToken')
          if (this.$route.name === 'Login') {
            return
          }
          this.$router.push({ name: 'Login' })
        })
        .catch(error => {
          console.log(error.response.data)
          this.$router.push({ name: 'Login' })
        }
        )
    }
  }
}
</script>
