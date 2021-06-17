<template>
  <DashboardLayout>
    <div>
      <div class="dashboard-panel">
        <div class="flex justify-between items-center">
          <h2 class="dashboard-panel-title">
            App list
          </h2>
          <AppCrudModalOpenButton />
        </div>
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Type</td>
              <td>Framework</td>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="app in apps"
              :key="app.id"
            >
              <td>{{ app.id }}</td>
              <td>{{ app.name }}</td>
              <td>{{ app.type }}</td>
              <td>{{ app.framework }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <AppCrudModal />
  </DashboardLayout>
</template>

<script>
// @vue/component
import DashboardLayout from './DashboardLayout'
import AppCrudModal from './AppCrudModal'
import AppCrudModalOpenButton from './AppCrudModalOpenButton'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  name: 'AppIndex',
  components: {
    DashboardLayout,
    AppCrudModal,
    AppCrudModalOpenButton
  },
  computed: {
    apps () {
      return this.$store.getters['apps/getAppIndex']
    }
  },
  mounted () {
    this.$store.dispatch('apps/fetchAppIndex')
  },
  methods: {
    // ...mapActions(['apps/getAppIndex'])
  }
}
</script>
