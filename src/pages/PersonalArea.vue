<!-- Страница "личного кабинета пользователя" -->
<template>
  <div class="personal-area__body">
    <div class="container">
      <div class="personal-area-top-container">
        <h1 class="personal-area-top-title title">Личный кабинет</h1>
      </div>
      <h2 class="personal-area__name">Здравствуйте,
        <span><router-link class="personal-area__title" :to="{name: 'userProfile'}">{{ currentUser.username }}</router-link></span>
        &nbsp;
        <span><router-link class="personal-area__title" :to="{name: 'surnameProfile'}">{{ currentUser.surname }}</router-link></span>
        !
      </h2>

      <h4>Номер телефона:
        &nbsp;
        <router-link :to="{name: 'userProfile'}">{{ currentUser.telephone }}</router-link>
      </h4>

      <div class="personal-area-container-btn">
        <reg-btn>Входящие</reg-btn>
        <reg-btn>Закрытые</reg-btn>
        <reg-btn>
          <router-link to="{name: ''}">
            Мои претензии
          </router-link>
        </reg-btn>
      </div>

    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

import RegBtn from "../components/UI/RegBtn";

export default {
  name: 'personalArea',
  components:{
    RegBtn
  },
  computed: {
    ...mapState({
      currentUser: state => state.auth.currentUser,
      isLoggedIn: state => state.auth.isLoggedIn
    })
  }
}
</script>

<style scoped>
.personal-area__body{
  height: 88vh;
}

.personal-area-top-container{
  display: flex;
}

.personal-area-top-title{
  margin-top: 74px;
}

.reg-btn{
  border-radius: 0 0 0 0;
}

.reg-btn:first-child{
  border-radius: 10px 0 0 10px;
}

.reg-btn:last-child{
  border-radius: 0 10px 10px 0;
}

.personal-area__name{
  font-size: 35px;
  margin: 30px 0 30px 0;
}
</style>