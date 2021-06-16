<template>
  <DashboardLayout>
    <div>
      <div class="dashboard-panel">
        <div class="flex justify-between items-center">
          <h2 class="dashboard-panel-title">
            Apps list
          </h2>
          <AppCrudModalOpenButton />
        </div>
      </div>
    </div>
    <AppCrudModal />
  </DashboardLayout>
</template>

<script>
// @vue/component
import DashboardLayout from './DashboardLayout'
import axios from 'axios'
import AppCrudModal from './AppCrudModal'
import AppCrudModalOpenButton from './AppCrudModalOpenButton'

export default {
  components: {
    DashboardLayout,
    AppCrudModal,
    AppCrudModalOpenButton
  },

  mounted () {
    axios.get('/api/v1/apps/')
      .then(response => console.log(response))
      .catch(error => {
        if (error.response.status === 401) {
          this.$router.push({ name: 'Login' })
          return
        }
        console.log(error.response)
      })
  },
  methods: {
    openModal () {
    }
  }
}
</script>
