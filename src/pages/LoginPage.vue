<!-- Страница "авторизации пользователя" -->
<template>
  <div>
    <div class="container">
      <div class="modal-window">
        <div class="logo" @click="$router.push('/')">
          <img src="@/assets/images/logo.svg" alt="" class="logo__img" width="24" height="20" @click="$router.push('/')">
          <div class="logo__title">
            DIGITAL LAWYER
          </div>
        </div>
        <h1 class="modal-window__title title">Авторизация</h1>
        <form class="form" @submit.prevent="onSubmit">

          <div class="form-group">
            <label class="auth-label d-lawyer-label" for="emailLogin">Почта</label>
              <input
                  type="email"
                  name="emailLogin"
                  id="emailLogin"
                  class="d-lawyer-input"
                  v-model="email"
                  placeholder="Введите почту..."
              >
<!--              <ValidationErrors-->
<!--                  v-if="validationErrors"-->
<!--                  :validation-errors="validationErrors"-->
<!--              >-->
<!--                Нужно ввести почту-->
<!--              </ValidationErrors>-->
          </div>

          <div class="form-group">
            <label class="auth-label d-lawyer-label" for="passwordLogin">Пароль</label>
              <input
                  type="password"
                  name="passwordLogin"
                  id="passwordLogin"
                  class="d-lawyer-input"
                  v-model="password"
                  placeholder="Введите пароль..."
              >
<!--              <ValidationErrors-->
<!--                  v-if="validationErrors"-->
<!--                  :validation-errors="validationErrors"-->
<!--              >-->
<!--                Нужно ввести Пароль-->
<!--              </ValidationErrors>-->
          </div>

          <button class="auth-btn lawyer-btn" :disabled="isSubmitting"> Авторизация</button>
          <p class="btn-subtitle">Нет аккаунта? Зарегистрируйтесь!</p>
          <button class="reg-btn lawyer-btn" @click="$router.push('/registration-of-an-individual')">Зарегистрироваться</button>
        </form>

      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

import ValidationErrors from "../components/UI/ValidationErrors";
import {actionTypes} from "../store/modules/auth";

export default {
  name: 'login',
  components: {
    ValidationErrors
  },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    ...mapState({
      isSubmitting: state => state.auth.isSubmitting,
      validationErrors: state => state.auth.validationErrors
    })
    // isSubmitting() {
    //   return this.$store.state.auth.isSubmitting
    // },
    // validationErrors() {
    //   return this.$store.state.auth.validationErrors
    // }
  },
  methods: {
    onSubmit() {
      this.$store
          .dispatch(actionTypes.login, {
            email: this.email,
            password: this.password
          })
          .then(() => {
            this.$router.push({name: 'personalArea'}) // Когда пользователь зарегистрировался, то мы его отправляем на главную страницу (или любую другую, по желанию)
          })
    }
  }
}
</script>

<style scoped>
.modal-window{
  width: 500px;
  height: 550px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  margin: 40px auto;
}

.logo{
  display: flex;
  justify-content: center;
  padding-top: 50px;
  cursor: pointer;
}

.logo__title{
  margin-left: 5px;
}

.modal-window__title{
  text-align: center;
  padding: 20px 0 45px;
}

.form{
  margin: 0 auto;
  padding: 0 45px;
}

.form-group{
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.auth-label{
  margin: 0 0 6px 7px;
}

.d-lawyer-input {
  width: 410px;
}

.label-box__input-container{
  display: flex;
}


.lawyer-btn{
  width: 410px;
}

.auth-btn{
  margin: 20px auto 10px auto;
  background-color: #14BD5B;
}

.auth-btn:hover{
  background-color: #0f8d41;
}

.btn-subtitle{
  text-align: center;
  font-size: 16px;
  margin-bottom: 10px;
}
</style>