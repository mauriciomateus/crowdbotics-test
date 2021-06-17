<template>
  <div
    v-if="appCrudModalIsOpen"
    class="absolute inset-0 bg-modal-backdrop-bg flex justify-center items-center"
    @click.self="closeCrudAppModal"
  >
    <div class="bg-white dashboard-panel w-1/2">
      <div class="flex justify-between">
        <h1 class="dashboard-panel-title">
          Create an app
        </h1>
        <AppCrudModalCloseButton />
      </div>

      <form @submit.prevent="handleForm">
        <FormField
          form-module-name="apps"
          field-label="App Name *"
          field-name="name"
        />
        <FormField
          form-module-name="apps"
          field-label="Type *"
          field-name="type"
        />
        <FormField
          form-module-name="apps"
          field-label="Framework *"
          field-name="framework"
        />
        <div>
          <button
            type="submit"
            class="uppercase py-3 px-20 bg-brand-bg text-white rounded-3xl font-bold mt-4 focus:outline-none focus:ring-4 focus:ring-green-200 flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
            :disabled="appFormSending"
          >
            Create App
            <i
              v-if="appFormSending"
              class="fas fa-spinner mr-1 animate animate-spin ml-3 flex w-8 h-8 justify-center items-center absolute text-4xl"
            />
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// @vue/component
import FormField from './FormField'
import { createNamespacedHelpers } from 'vuex'

import AppCrudModalCloseButton from './AppCrudModalCloseButton'
import { setFormField } from '../helpers'
const { mapGetters } = createNamespacedHelpers('apps')
const { mapActions } = createNamespacedHelpers('apps')
const { mapMutations } = createNamespacedHelpers('apps')

export default {
  components: {
    FormField,
    AppCrudModalCloseButton
  },
  data () {
    return {
      modal_is_visible: false,
      sending: false
    }
  },
  computed: {
    ...mapGetters(['appCrudModalIsOpen', 'appFormSending'])
  },
  created () {
    this.modal_is_visible = true
  },
  methods: {
    ...mapActions(['createApp']),
    ...mapMutations(['closeCrudAppModal', 'setFormField']),
    handleForm () {
      this.createApp()
    }
  }
}
</script>
