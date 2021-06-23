<template>
  <div
    v-if="modalIsOpen"
    class="absolute inset-0 bg-modal-backdrop-bg flex justify-center items-center"
    @click.self="closeModal"
  >
    <div class="bg-white dashboard-panel w-1/2">
      <div class="flex justify-between">
        <h1
          class="dashboard-panel-title"
          :class="modal.titleClasses"
          v-text="modal.title"
        />
        <ModalCloseButton />
      </div>

      <form @submit.prevent="handleForm">
        <FormField
          form-module-name="apps"
          field-label="App Name *"
          field-name="name"
          :default-value="currentApp.name"
          :disabled="modal.disableFormFields"
        />
        <AppTypePicker
          default-value="defaultvaluetest"
        />
        <!--        <FormField-->
        <!--          form-module-name="apps"-->
        <!--          field-label="Type *"-->
        <!--          field-name="type"-->
        <!--        />-->
        <FrameworkPicker
          default-value="defaultvaluetest"
        />
        <div>
          <button
            type="submit"
            class="uppercase py-3 px-20 bg-brand-bg text-white rounded-3xl font-bold mt-4 focus:outline-none focus:ring-4 focus:ring-green-200 flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
            :disabled="appFormBeingSent"
          >
            {{ modal.submitButtonText }}
            <i
              v-if="appFormBeingSent"
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

import ModalCloseButton from './ModalCloseButton'
import { setFormField } from '../helpers'
import AppTypePicker from './AppTypePicker'
import FrameworkPicker from './FrameworkPicker'
const { mapGetters } = createNamespacedHelpers('apps')
const { mapActions } = createNamespacedHelpers('apps')
const { mapMutations } = createNamespacedHelpers('apps')

export default {
  components: {
    FormField,
    ModalCloseButton,
    AppTypePicker,
    FrameworkPicker
  },
  props: {
    formAction: {
      type: String,
      default: String,
      required: true
    },
    disableFormFields: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      modal_is_visible: false,
      sending: false
    }
  },
  computed: {
    ...mapGetters(['appFormSending', 'getCurrentApp']),
    ...mapGetters({ modal: 'getModalInfo' }),
    modalIsOpen () {
      return this.modal.isOpen
    },
    appFormBeingSent () {
      return this.appFormSending
    },
    currentApp () {
      return this.getCurrentApp
    },
    modalInfo () {
      return this.modal
    }
  },
  created () {
    this.modal_is_visible = true
    this.closeModalOnEscapeKey()
  },
  mounted () {
    console.log('modal info', this.modalInfo)
  },
  methods: {
    ...mapActions(['createApp']),
    ...mapMutations(['setModalInfo', 'setFormField']),
    handleForm () {
      this.createApp()
    },
    closeModal () {
      this.setModalInfo({ isOpen: false })
    },
    closeModalOnEscapeKey () {
      window.addEventListener('keydown', (event) => {
        if (event.key.toLowerCase() === 'escape') {
          this.closeModal()
        }
      })
    }
  }
}
</script>
