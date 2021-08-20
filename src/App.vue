<template>
  <div class="app">
    <d-lawyer-navbar></d-lawyer-navbar>
    <router-view/>
    <lawyer-footer></lawyer-footer>
  </div>
</template>

<script>
import {actionTypes} from "./store/modules/auth";
import {mapState} from 'vuex'

import DLawyerNavbar from "./components/UI/DLawyerNavbar";
import LawyerFooter from "./components/UI/LawyerFooter";

export default {
  name: 'app',
  components: {
    LawyerFooter,
    DLawyerNavbar,
  },
  mounted() {
    console.log('hello app')
    this.$store.dispatch(actionTypes.getCurrentUser)
  }
}
</script>

<style>
*,
*::after,
*::before{
  margin: 0;
  padding: 0;
  font-family: 'Lato',sans-serif;
  font-weight: 400;
  box-sizing: border-box;
}

@font-face {
  font-family: 'Lato';
  src: local('Lato-Regular'), local('Lato-Regular'),
  url('./assets/fonts/Lato-Regular.ttf') format('woff');
  font-weight: 400;
  font-style: normal;
}

.container{
  width: 1230px;
  padding: 0 15px;
  margin: 0 auto;
}

.title{
  font-size: 34px;
  font-weight: 500;
}

.subtitle{
  font-size: 24px;
  letter-spacing: 1px;
}

.item__link{
  font-weight: 600;
  font-size: 14px;
  color: #006ECF;
  cursor: pointer;
}

/* reg-btn--start */
.reg-btn{
  font-size: 16px;
  color: #007FEF;
  padding: 8px 14px 10px 14px;
  margin-top: 80px;
  background: inherit;
  border: 1px solid #007FEF;
  border-radius: 10px 0 0 10px;
  cursor: pointer;
  transition: all .4s;
}

.reg-btn--active{
  font-size: 16px;
  color: #ffffff;
  padding: 8px 14px 10px 14px;
  margin-top: 80px;
  background: #000000;
  border: 1px solid #007FEF;
  border-radius: 10px 0 0 10px;
  cursor: pointer;
  transition: all .4s;
}

.reg-btn:hover{
  color: #ffffff;
  background-color: #222222;
}
/* reg-btn--end */

/* Глобальные стили кнопок -- НАЧАЛО */
.lawyer-btn{
  background-color: #007FEF;
  color: #ffffff;
  border: 0;
  outline: none;
  font-size: 16px;
  font-weight: 600;
  padding: 9px 30px;
  width: 230px;
  height: 40px;
  border-radius: 10px;
  cursor: pointer;
  transition: all .4s;
}

.lawyer-btn:hover{
  background-color: #0167c2;
}
/* Глобальные стили кнопок -- КОНЕЦ */

.d-lawyer-label{
  font-size: 14px;
  letter-spacing: 1px;
  opacity: 0.6;
}

.d-lawyer-line{
  width: 100%;
  height: 1px;
  background-color: #222222;
  opacity: 0.2;
}

/* d-lawyer-input--start */
.d-lawyer-input{
  width: 390px;
  font-size: 20px;
  border: 1px solid #666666;
  padding: 5px 10px 7px 10px;
  border-radius: 2px;
}
/* d-lawyer-input--end */

/* Изменяем скролл */
::-webkit-scrollbar{
  width: 11px;
}

::-webkit-scrollbar-thumb{
  background-color: #cdc8c8;
  border-radius: 20px;
}

::-webkit-scrollbar-thumb:hover{
  background-color: #a7a4a4;
}

.invalid-feedback{
  color: #f80a0a;
}

/* radio-check--start */
.check {
  display: inline-block;
  margin-right: 10px;
  transition: all .4s;
}

.check input[type=radio] {
  display: none;
}

.check label {
  cursor: pointer;
  padding: 10px;
  line-height: 34px;
  border-radius: 4px;
  user-select: none;
  border: 1px solid rgba(34,34,34, 0.3);
}

.check label:hover{
  background-color: #D5FFE0;
}

.check input[type=radio]:checked + label {
  background-color: #D5FFE0;
}
/* radio-check--end */
</style>
