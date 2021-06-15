<template>
  <DashboardLayout>
    <div>
      <div class="dashboard-panel">
        <h2 class="dashboard-panel-title">
          Apps list
        </h2>
      </div>
    </div>
  </DashboardLayout>
</template>

<script>
// @vue/component
import DashboardLayout from './DashboardLayout'
import axios from 'axios'

export default {
  components: {
    DashboardLayout
  },
  mounted () {
    const accessToken = localStorage.getItem('accessToken')
    axios.get('/api/v1/apps/', {
      headers: {
        Authorization: `token ${accessToken}`
      }
    })
      .then(response => console.log(response))
      .catch(error => {
        if (error.response.status === 401) {
          this.$router.push({ name: 'Login' })
          return
        }
        console.log(error.response)
      })
  }
}
</script>
