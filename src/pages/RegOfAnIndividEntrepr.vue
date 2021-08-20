<!-- Страница "регистрации ООО, ИП, Самозанятость" -->
<template>
  <div>
    <div class="container">
      <div class="regIndividual-entrepr-top-container">
        <h1 class="regIndividual-entrepr-title title">Продавец</h1>
        <div class="regIndividual-entrepr-container-btn">
          <reg-btn>
            <router-link class="router-link" to="/registration-of-an-individual">Физическое лицо</router-link>
          </reg-btn>
          <reg-btn class="active">
            <router-link class="router-link" to="/registration-of-an-individual-entrepreneur">Юридическое лицо</router-link>
          </reg-btn>
        </div>
      </div>
      <div class="d-lawyer-line"></div>
      <div class="container-form">
        <div class="subtitle-container">
          <h4 class="subtitle-container__subtitle-legal-status subtitle">Юридический статус</h4>
          <div class="d-lawyer-line d-lawyer-line1"></div>
          <h4 class="subtitle-container__subtitle-contact subtitle">Контактные данные</h4>
          <div class="d-lawyer-line d-lawyer-line2"></div>
          <h4 class="subtitle-container__subtitle-address subtitle">Адреса в интернете</h4>
          <div class="d-lawyer-line d-lawyer-line3"></div>
          <h4 class="subtitle-container__subtitle-product-category subtitle">Товарная категория</h4>
          <div class="d-lawyer-line d-lawyer-line4"></div>
          <h4 class="subtitle-container__subtitle-password subtitle">Пароль</h4>
        </div>
        <!-- Третья версия формы -->
        <form @submit.prevent="onSubmit">

          <validation-errors
              v-if="validationErrors"
              :validation-errors="validationErrors"
          ></validation-errors>

          <!-- Юридический статус -->
          <div class="legal-status-container">
            <div class="legal-status-container__legal-check check">
              <input class="legal-check__input" id="legal-status-check1" type="radio" name="accessories-check1">
              <label class="legal-check__text" for="legal-status-check1">ООО</label>
            </div>

            <div class="legal-status-container__legal-check check">
              <input class="legal-check__input" id="legal-status-check2" type="radio" name="accessories-check1">
              <label class="legal-check__text" for="legal-status-check2">ИП</label>
            </div>

            <div class="legal-status-container__legal-check check">
              <input class="legal-check__input" id="legal-status-check3" type="radio" name="accessories-check1">
              <label class="legal-check__text" for="legal-status-check3">Самозанятость</label>
            </div>
          </div>

          <div class="d-lawyer-line d-lawyer-line5"></div>

          <!-- Контактные данные -->
          <!-- Наименование -->
          <div class="label-box__input-container">
            <label class="label-box__label d-lawyer-label" for="nameCompany">Наименование</label>
            <input
                type="text"
                name="nameCompany"
                id="nameCompany"
                placeholder="Введите фамилию..."
                class="d-lawyer-input"
                v-model="nameCompany"
            >
          </div>

          <!-- ИНН -->
          <div class="label-box__input-container">
            <label class="label-box__label d-lawyer-label" for="inn">ИНН</label>
            <input
                type="text"
                name="inn"
                id="inn"
                placeholder="Введите ИНН..."
                class="d-lawyer-input"
                v-model="inn"
            >
          </div>

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
            <label class="label-box__label d-lawyer-label" for="emailCompany">Э/почта</label>
            <input
                type="email"
                name="emailCompany"
                id="emailCompany"
                placeholder="Введите электронную почту..."
                class="d-lawyer-input"
                v-model="emailCompany"
            >
          </div>

          <!-- Руководитель -->
          <div class="label-box__input-container">
            <label class="label-box__label d-lawyer-label" for="middle-name">Руководитель (ФИО)</label>
            <input
                type="text"
                name="middle-name"
                id="middle-name"
                placeholder="Введите имя, фамилию и отчества руководителя..."
                class="d-lawyer-input"
                v-model="middleName"
            >
          </div>

          <!-- Адрес проживания -->
          <div class="label-box__input-container">
            <label class="label-box__label d-lawyer-label" for="address">Адрес компании</label>
            <input
                type="text"
                name="address"
                id="address"
                placeholder="Введите адрес компании..."
                class="d-lawyer-input"
                v-model="address"
            >
          </div>

          <div class="d-lawyer-line d-lawyer-line7"></div>

          <!-- Адреса в интернете -->

          <div class="label-box__input-container">
            <label class="label-box__label d-lawyer-label" for="onlineStoreAddress">Сайт интернет-магазина</label>
            <input
                type="text"
                name="onlineStoreAddress"
                id="onlineStoreAddress"
                class="d-lawyer-input"
                v-model="onlineStoreAddress"
            >
          </div>

          <div class="label-box__input-container">
            <label class="label-box__label d-lawyer-label" for="socialNetworkAddress1">Страницы магазина в соцсетях</label>
            <input
                type="text"
                name="socialNetworkAddress"
                id="socialNetworkAddress1"
                class="d-lawyer-input"
                v-model="socialNetworkAddress"
            >
          </div>

          <div class="label-box__input-container label-box__input-container1">
            <input
                type="text"
                name="socialNetworkAddress"
                id="socialNetworkAddress2"
                class="d-lawyer-input"
                v-model="socialNetworkAddress"
            >
          </div>

          <div class="label-box__input-container label-box__input-container2">
            <input
                type="text"
                name="socialNetworkAddress"
                id="socialNetworkAddress3"
                class="d-lawyer-input"
                v-model="socialNetworkAddress"
            >
          </div>

          <div class="d-lawyer-line d-lawyer-line8"></div>

          <!-- Товарная категория -->
          <div class="product-category-container">
            <div class="product-category-container__legal-check check">
              <input class="product-category-check__input" id="product-category-check1" type="radio" name="accessories-check1">
              <label class="product-category-check__text" for="product-category-check1">Одежда, обувь, аксессуары</label>
            </div>

            <div class="legal-status-container__legal-check check">
              <input class="product-category-check__input" id="product-category-check2" type="radio" name="accessories-check1">
              <label class="product-category-check__text" for="product-category-check2">Техника и электроника</label>
            </div>

            <div class="legal-status-container__legal-check check">
              <input class="product-category-check__input" id="product-category-check3" type="radio" name="accessories-check1">
              <label class="product-category-check__text" for="product-category-check3">Красота и здоровье</label>
            </div>

            <div class="legal-status-container__legal-check check">
              <input class="product-category-check__input" id="product-category-check4" type="radio" name="accessories-check1">
              <label class="product-category-check__text" for="product-category-check4">Продукты питания</label>
            </div>
          </div>

          <div class="d-lawyer-line d-lawyer-line9"></div>

          <!-- Пароль -->
          <div class="label-box__input-container label-box__input-container-password">
            <label class="label-box__label d-lawyer-label" for="passwordCompany">Пароль (не менее 6 символов a–Z, 0–9)</label>
            <input
                type="passwordCompany"
                name="passwordCompany"
                id="passwordCompany"
                placeholder="Введите пароль (не менее 6 символов a–Z, 0–9)"
                class="d-lawyer-input"
                v-model="passwordCompany"
            >
            <button class="lawyer-btn" :disabled="isSubmitting"> Создать учётную запись покупателя</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import RegBtn from "../components/UI/RegBtn";
import ValidationErrors from "../components/UI/ValidationErrors";
import {mapState} from "vuex";
import {actionTypes} from "../store/modules/auth";
export default {
  name: 'RegOfAnIndividEntrepr',
  components: {ValidationErrors, RegBtn},
  data() {
    return {
      nameCompany: '',
      inn: '',
      username: '',
      emailCompany: '',
      avatar: '',
      address: '',
      onlineStoreAddress: '',
      socialNetworkAddress: '',
      middleName: '',
      telephone: '',
      passwordCompany: '',
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
        nameCompany: this.nameCompany,
        inn: this.inn,
        emailCompany: this.emailCompany,
        username: this.username,
        avatar: this.avatar,
        telephone: this.telephone,
        address: this.address,
        onlineStoreAddress: this.onlineStoreAddress,
        socialNetworkAddress: this.socialNetworkAddress,
        middleName: this.middleName,
        passwordCompany: this.passwordCompany,
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
.regIndividual-entrepr-title {
  margin: 74px 72px 46px 0;
}

.regIndividual-entrepr-top-container{
  display: flex;
}

.regIndividual-entrepr-title{

}

.reg-btn{
  border-radius: 10px 0 0 10px;
}

.active{
  background-color: #222222;
  color: #ffffff;
}

.router-link{
  text-decoration: none;
  color: #000000;
}

.router-link:hover{
  color: #ffffff;
}

.router-link-exact-active { /* стили для того, чтобы показывалось визуально на какой страницы мы сейчас находимся */
  color: #ffffff;
}

.reg-btn:last-child{
  border-radius: 0 10px 10px 0;
}

.item__text{
  font-size: 16px;
  font-weight: 500;
  margin-left: 10px;
}

.legal-status-container{
  display: flex;
  flex-direction: column;
}

.label-box__input-container1,
.label-box__input-container2{
  margin-top: 20px;
}

.legal-status-container__legal-check{
  margin-top: 20px;
}

.d-lawyer-line5{
  margin-top: 20px;
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
  margin: 67px 0 0 0;
  background-color: #F4F4F4;
}

.d-lawyer-line1{
  margin-top: -75px;
}

.d-lawyer-line2{
  margin-top: 313px;
}

.d-lawyer-line3{
  margin-top: 102px;
}

.d-lawyer-line4{
  margin-top: 8px;
}

.d-lawyer-line7{
  margin: 20px 0 20px 0;
}

.d-lawyer-line8{
  margin: 20px 0 20px 0;
}

.d-lawyer-line9{
  margin-top: 20px;
}

.subtitle {
  padding: 50px 100px 147px 20px;
}

.d-lawyer-label {
  margin: 21px 0 10px 5px;
}

.label-box__input-container,
.product-category-container{
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