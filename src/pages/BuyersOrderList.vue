<!-- Страница "Мои претензии" -->
<template>
  <div>
    <div class="container">
      <div class="regIndividual-top-container">
        <h1 class="regIndividual-title title">Мои претензии</h1>
        <div class="regIndividual-container-btn">
          <reg-btn>
              Входящие
          </reg-btn>
          <reg-btn>Все</reg-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RegBtn from "../components/UI/RegBtn";

export default {
  components: {RegBtn}
}
</script>

<style scoped>

</style>