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
        <table class="w-full mt-3">
          <thead>
            <tr>
              <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
                ID
              </td>
              <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
                Name
              </td>
              <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
                Type
              </td>
              <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
                Framework
              </td>
              <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
                Actions
              </td>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="app in apps"
              :key="app.id"
            >
              <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
                {{ app.id }}
              </td>
              <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
                {{ app.name }}
              </td>
              <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
                {{ app.type }}
              </td>
              <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
                {{ app.framework }}
              </td>
              <td class="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
                <button
                  class="bg-red-500 text-white rounded-md py-1 px-3 focus:outline-none focus:ring-4 focus:ring-green-200"
                  @click="deleteApp(app.id)"
                >
                  Delete
                </button>
              </td>
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
    deleteApp (id) {
      this.$store.dispatch('apps/deleteApp', id)
    }
  }
}
</script>
