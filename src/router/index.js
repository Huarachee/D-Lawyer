import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from "../pages/Main";
import ListOfSellers from "../pages/ListOfSellers";
import Tariffs from "../pages/Tariffs";
import LoginPage from "../pages/LoginPage";
import RegOfAnIndivid from "../pages/RegOfAnIndivid"
import RegOfAnIndividEntrepr from "../pages/RegOfAnIndividEntrepr";
import PersonalArea from "../pages/PersonalArea";
import BuyersOrderList from "../pages/BuyersOrderList";
import Statement from "../pages/Statement";


Vue.use(VueRouter)

const routes = [
  {
    path: '/', // Перенаправляет на главную страницу
    name: 'main',
    component: Main
  },
  {
    path: '/list-of-sellers', // Перенаправляет на страницу "Список продавцов"
    name: 'ListOfSellers',
    component: ListOfSellers
  },
  {
    path: '/login-page', // Перенаправляет на страницу "авторизация"
    name: 'loginPage',
    component: LoginPage
  },
  {
    path: '/registration-of-an-individual', // Перенаправляет на страницу "регистрация физического лица"
    name: 'registrationOfAnIndividual',
    component: RegOfAnIndivid
  },
  {
    path: '/registration-of-an-individual-entrepreneur', // Перенаправляет на страницу "регистрация юридического лица"
    name: 'registrationOfAnIndividualEntrepreneur',
    component: RegOfAnIndividEntrepr
  },
  {
    path: '/tariffs', // Перенаправляет на страницу "Тарифы"
    name: 'Tariffs',
    component: Tariffs
  },
  {
    path: '/personal-area', // Перенаправляет на страницу "Личный кабинет"
    name: 'personalArea',
    component: PersonalArea
  },
  {
    path: '/buyers-order-list', // Перенаправляет на страницу "Мои претензии"
    name: 'buyersOrderList',
    component: BuyersOrderList
  },
  {
    path: '/statement', // Перенаправляет на страницу "Заявление"
    name: 'statement',
    component: Statement
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
