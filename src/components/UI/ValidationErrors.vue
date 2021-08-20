<template>
  <div class="d-lawyer-validation-errors--container">
    <img class="d-lawyer-validation-errors--container__img" src="@/assets/images/warning-icon.svg" width="20" height="20" alt="warning-icon">
    <p class="d-lawyer-validation-errors--container__text"><slot></slot></p>
  </div>
</template>

<script>
export default {
  name: 'DLawyerValidationErrors',
  props: {
    validationErrors: {
      type: Object,
      required: true
    }
  },
  computed: {
    // errorMessages() {
    //   return Object.keys(this.validationErrors).map(name => {
    //     const message = this.validationErrors[name].join(', ')
    //     return `${name} ${message}`
    //   })
    // }

    errorMessages() {
      return Object.keys(['Email cant be blank', 'Password cant be blank']).map(name => {
        const messages = this.validationErrors[name].join(', ')
        return `${name} ${messages}`
      })
    }
  }
}
</script>

<style scoped>
.d-lawyer-validation-errors--container{
  display: flex;
  margin: 8px 0 0 15px;
}

.d-lawyer-validation-errors--container__text{
  padding: 2px 0 0 10px;
  font-size: 14px;
  color: #222222;
  letter-spacing: 1px;
  opacity: 0.6;
}
</style>