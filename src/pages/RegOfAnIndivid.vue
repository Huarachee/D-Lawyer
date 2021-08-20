<!-- Страница регистрации физического лица -->
<template>
  <div>
    <div class="container">
      <div class="regIndividual-top-container">
        <h1 class="regIndividual-title title">Тип пользователя</h1>
        <div class="regIndividual-container-btn">
          <reg-btn class="active">
            <router-link class="router-link" to="/registration-of-an-individual">Покупатель</router-link>
          </reg-btn>
          <reg-btn>
            <router-link class="router-link" to="/registration-of-an-individual-entrepreneur">Продавец</router-link>
          </reg-btn>
        </div>
      </div>
      <div class="d-lawyer-line"></div>

      <div class="container-form">
        <div class="subtitle-container">
          <h4 class="subtitle-container__subtitle-contact subtitle">Контактные данные</h4>
          <h4 class="subtitle-container__subtitle-password subtitle">Пароль</h4>
        </div>
        <!-- Третья версия формы -->
        <form @submit.prevent="onSubmit">

          <validation-errors
              v-if="validationErrors"
              :validation-errors="validationErrors"
          ></validation-errors>


          <!-- Фамилия -->
          <div class="label-box__input-container">
            <label class="label-box__label d-lawyer-label" for="surname">Фамилия</label>
            <input
                type="text"
                name="surname"
                id="surname"
                placeholder="Введите фамилию..."
                class="d-lawyer-input"
                v-model="surname"
            >
          </div>

          <!-- Имя -->
          <div class="label-box__input-container">
            <label class="label-box__label d-lawyer-label" for="username">Имя</label>
            <input
                type="text"
                name="username"
                id="username"
                placeholder="Введите имя..."
                class="d-lawyer-input"
                v-model="username"
            >
          </div>

          <!-- Отчество -->
          <div class="label-box__input-container">
            <label class="label-box__label d-lawyer-label" for="middle-name">Отчество</label>
            <input
                type="text"
                name="middle-name"
                id="middle-name"
                placeholder="Введите имя..."
                class="d-lawyer-input"
                v-model="middleName"
            >
          </div>

          <!-- Аватар -->
<!--          <div class="label-box__input-container">-->
<!--            <label class="label-box__label d-lawyer-label" for="avatar">Аватар</label>-->
<!--            <input-->
<!--                type="file"-->
<!--                name="avatar"-->
<!--                id="avatar"-->
<!--                class="d-lawyer-input"-->
<!--                :v-model="avatar"-->
<!--            >-->
<!--          </div>-->

          <!-- Телефон -->
          <div class="label-box__input-container">
            <label class="label-box__label d-lawyer-label" for="telephone">Телефон</label>
            <input
                type="tel"
                name="telephone"
                id="telephone"
                placeholder="Введите телефон..."
                class="d-lawyer-input"
                v-model="telephone"
            >
          </div>

          <!-- Электронная почта -->
          <div class="label-box__input-container">
            <label class="label-box__label d-lawyer-label" for="email">Э/почта</label>
            <input
                type="email"
                name="email"
                id="email"
                placeholder="Введите электронную почту..."
                class="d-lawyer-input"
                v-model="email"
            >
          </div>

          <!-- Адрес проживания -->
          <div class="label-box__input-container">
            <label class="label-box__label d-lawyer-label" for="address">Адрес проживания</label>
            <input
                type="text"
                name="address"
                id="address"
                placeholder="Введите адрес проживания..."
                class="d-lawyer-input"
                v-model="address"
            >
          </div>

          <!-- Пароль -->
          <div class="label-box__input-container label-box__input-container-password">
            <label class="label-box__label d-lawyer-label" for="password">Пароль (не менее 6 символов a–Z, 0–9)</label>
            <input
                type="password"
                name="password"
                id="password"
                placeholder="Введите пароль (не менее 6 символов a–Z, 0–9)"
                class="d-lawyer-input"
                v-model="password"
            >
            <button class="lawyer-btn" :disabled="isSubmitting"> Создать учётную запись покупателя</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {actionTypes} from "../store/modules/auth";

import ValidationErrors from "../components/UI/ValidationErrors";
import RegBtn from "../components/UI/RegBtn";

export default {
  name: 'register',
  components: {
    RegBtn,
    ValidationErrors
  },
  data() {
    return {
      surname: '',
      firstName: '',
      username: '',
      email: '',
      avatar: '',
      address: '',
      middleName: '',
      telephone: '',
      password: '',
    }
  },
  computed: {
    ...mapState({
      isSubmitting: state => state.auth.isSubmitting,
      validationErrors: state => state.auth.validationErrors
    })
  },
  methods: {
    onSubmit() {
      this.$store.dispatch(actionTypes.register, {
        surname: this.surname,
        email: this.email,
        username: this.username,
        avatar: this.avatar,
        telephone: this.telephone,
        address: this.address,
        middleName: this.middleName,
        password: this.password,
        firstName: this.firstName
      })
          .then(user => {
            console.log('successfully register user', user)
            this.$router.push({name: 'personalArea'}) // Когда пользователь зарегистрировался, то мы его отправляем на главную страницу (или любую другую, по желанию)
          })
    }
  }
}
</script>

<style scoped>
.regIndividual-title {
  margin: 74px 72px 46px 0;
}

.reg-btn {
  border-radius: 10px 0 0 10px;
}

.reg-btn:last-child {
  border-radius: 0 10px 10px 0;
}

.router-link {
  text-decoration: none;
  color: #000000;
}

.router-link:hover {
  color: #ffffff;
}

.router-link-exact-active { /* стили для того, чтобы показывалось визуально на какой страницы мы сейчас находимся */
  color: #ffffff;
}

.regIndividual-top-container{
  display: flex;
}

.active {
  background-color: #222222;
  color: #ffffff;
}

.container-form{
  display: flex;
  margin-bottom: 70px;
}

.label-box__input-container-password{
  background-color: #F4F4F4;
  padding: 10px 453px 50px 0;
  margin-top: 67px;
}

.subtitle-container__subtitle-contact{
  padding-bottom: 350px;
}

.subtitle-container__subtitle-password{
  margin: 360px 0 0 0;
  background-color: #F4F4F4;
}

.subtitle {
  padding: 50px 100px 147px 20px;
}

.d-lawyer-label {
  margin: 21px 0 10px 5px;
}

.label-box__input-container {
  display: flex;
  flex-direction: column;
}

.lawyer-btn {
  width: 349px;
  height: 40px;
  border-radius: 4px;
  margin-top: 40px;
}
</style>