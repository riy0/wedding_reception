<template>
  <form class="Form" @submit.prevent="validate">
    <div class="md-layout md-gutter">
      <div class="md-layout-item md-medium-size-40">
        <md-field class="first_name">
          <label>姓</label>
          <md-input id="first_name" v-model="form.firstName" @input="first_phonetic" @keyup="first_phonetic" required :disabled="sending"></md-input>
          <span class="md-error" v-if="!$v.form.first_name.required">必須項目です</span>
        </md-field>
        <md-field class="last_name">
          <label>名</label>
          <md-input id="last_name" v-model="form.lastName" @input="last_phonetic" @keyup="last_phonetic" required :disabled="sending"></md-input>
          <span class="md-error" v-if="!$v.form.last_name.required">必須項目です</span>
        </md-field>
      </div>
    </div>
    <div class="attendance">
      <md-radio v-model="form.attendance" value="true" :disabled="sending">出席</md-radio>
      <md-radio v-model="form.attendance" value="false" :disabled="sending">欠席</md-radio>
      <span class="md-error" v-if="!$v.form.attendance.required">必須項目です</span>
    </div>
    <md-button class="md-raised md-primary" type="submit" :disabled="sending">送信</md-button>
    <md-progress-bar md-mode="indeterminate" v-if="sending" />
    <md-snackbar :md-active.sync="userSaved">登録ありがとうございました！</md-snackbar>
  </form>
</template>

<script>
import { validationMixin } from 'validate'
import { db } from '../main'

export default {
  name: 'Form',
  mixins: [validationMixin],
  data () {
    return {
      form: {
        first_name: '',
        last_name: '',
        attendance: true
      },
      first_history: [],
      last_history: [],
      userSaved: false,
      sending: false
    }
  },
  validations: {
    form: {
      first_name: {
        required
      },
      last_name: {
        required
      },
      attendance: {
        required
      }
    }
  },
  methods: {
    validate () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.sending = true
        db.collection('attendances').add(this.form).then(() => {
          this.userSaved = true
          this.sending = false
        }).error(() => {
          this.sending = false
        })
      }
    },
    clearForm () {
      this.$v.$reset()
      this.form = null
    }
  }
}
</script>

<style scoped>
</style>
