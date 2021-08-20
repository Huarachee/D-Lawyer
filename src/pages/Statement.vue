<!-- Страница заявление -->
<template>
  <div class="statement-body">
    <div class="container">
      <h1 class="statement__title title">С каким товаром возникла проблема</h1>

      <div class="statement__btn-container">
        <div class="container__btn-box">
          <button
              class="btn-container__clothes-btn btn-container__button"
              :class="{'btn-container__clothes-btn--active' : clothesContent}"
              @click="toggleClothesContent"
          ></button>
          <h3
              class="btn-box__clothes-subtitle btn-box__subtitle"
              :class="{'btn-box__clothes-subtitle--active' : clothesContent}"
          >Одежда и обувь</h3>
        </div>
        <div class="container__btn-box">
          <button
              class="btn-container__technique-btn btn-container__button"
              :class="{'btn-container__technique-btn--active' : techniqueContent}"
              @click="toggleTechniqueContent"
          ></button>
          <h3
              class="btn-box__technique-subtitle btn-box__subtitle"
              :class="{'btn-box__technique-subtitle--active' : techniqueContent}"
          >Техника и электроника</h3>
        </div>
        <div class="container__btn-box">
          <button
              class="btn-container__accessories-btn btn-container__button"
              :class="{'btn-container__accessories-btn--active' : accessoriesContent}"
              @click="toggleAccessoriesContent"
          ></button>
          <h3
              class="btn-box__accessories-subtitle btn-box__subtitle"
              :class="{'btn-box__accessories-subtitle--active' : accessoriesContent}"
          >Аксессуары</h3>
        </div>
      </div>


      <div class="statement__content-container">
        <!-- Страница "Одежда и обувь" -->
        <div class="content-container__clothes-content" v-if="clothesContent">
          <div class="clothes-content__btn-box">
            <button
                class="reg-btn"
                :class="{'reg-btn--active' : clothesBtn}"
                @click="clickClothes"
            >
              Одежда
            </button>
            <button
                class="reg-btn"
                :class="{'reg-btn--active' : shoesBtn}"
                @click="clickShoes"
            >
              Обувь
            </button>
            <button
                class="reg-btn"
                :class="{'reg-btn--active' : handBagsBtn}"
                @click="clickHandBags"
            >
              Сумки
            </button>
          </div>
          <form action="" class="clothes-form">
            <div class="clothes-content__clothes-body">
              <div class="d-lawyer-line d-lawyer-line1"></div>

              <h4 class="clothes-content__subtitle subtitle">Какая возникла проблема</h4>
              <div class="clothes-check check">
                <input class="clothes-check__input" id="clothes-check1" type="radio" name="clothes-check1">
                <label class="clothes-check__text" for="clothes-check1">Не подошёл по цвету, размеру</label>
              </div>
              <div class="clothes-check check">
                <input class="clothes-check__input" id="clothes-check2" type="radio" name="clothes-check1">
                <label class="clothes-check__text" for="clothes-check2">Не устраивает качество товара</label>
              </div>

              <div class="d-lawyer-line d-lawyer-line2"></div>

              <h4 class="clothes-content__subtitle subtitle">Сколько времени прошло с момента покупки</h4>
              <div class="clothes-check check">
                <input class="clothes-check__input" id="clothes-check3" type="radio" name="clothes-check2">
                <label class="clothes-check__text" for="clothes-check3">Прошло 13 дней или меньше</label>
              </div>
              <div class="clothes-check check">
                <input class="clothes-check__input" id="clothes-check4" type="radio" name="clothes-check2">
                <label class="clothes-check__text" for="clothes-check4">Прошло 14 дней или более дней</label>
              </div>

              <div class="d-lawyer-line d-lawyer-line3"></div>

              <h4 class="clothes-content__subtitle subtitle">Сохранены ли бирки (ярлыки товара)</h4>
              <div class="clothes-check check">
                <input class="clothes-check__input" id="clothes-check5" type="radio" name="clothes-check3">
                <label class="clothes-check__text" for="clothes-check5">Да</label>
              </div>
              <div class="clothes-check check">
                <input class="clothes-check__input" id="clothes-check6" type="radio" name="clothes-check3">
                <label class="clothes-check__text" for="clothes-check6">Прошло 14 дней или более дней</label>
              </div>

              <div class="d-lawyer-line d-lawyer-line4"></div>

              <h4 class="clothes-content__subtitle subtitle">Был ли товар в употреблении</h4>
              <div class="clothes-check check">
                <input class="clothes-check__input" id="clothes-check7" type="radio" name="clothes-check4">
                <label class="clothes-check__text" for="clothes-check7">Да</label>
              </div>
              <div class="clothes-check check">
                <input class="clothes-check__input" id="clothes-check8" type="radio" name="clothes-check4">
                <label class="clothes-check__text" for="clothes-check8">Прошло 14 дней или более дней</label>
              </div>
            </div>
            <div class="d-lawyer-line d-lawyer-line5"></div>

            <!-- Юридическая информация -->
            <div class="clothes-content__clothes-info">
              <p class="clothes-info__title info-title">
                В соответствии со ст. 25 Закона РФ «О защите прав потребителей» товар может быть возвращён
                или обменен при соблюдении следующих условий:
              </p>
              <div class="clothes-info__container-info">
                <ul class="container-info__info-list">
                  <li class="info-list__point">Товар ещё никем не употреблялся;</li>
                  <li class="info-list__point">Нет следов нарушения ярлыков;</li>
                  <li class="info-list__point">Сохранены все свойства продукта;</li>
                  <li class="info-list__point">Товарный вид в целости;</li>
                  <li class="info-list__point">
                    Имеется чек (не обязательно, если имеются свидетельские показания или иные
                    доказательства покупки товара, например, банковский чек об оплате).
                  </li>
                </ul>
                <p class="container-info__text-info">
                  Если на вещи имеются следы носки (остатки крема, потожировых следов, запах, потёртости)
                  или стирки, продавец вправе отказать в приёме этой вещи и будет абсолютно прав по закону.
                  Факт того, что Вы носили вещь, продавец определяет визуально.
                  Если продавец заявляет, что вещь ношена, а Вы её не носили, Вы вправе провести экспертизу.
                </p>
              </div>
            </div>
            <!-- Заявка -->
            <div class="statement__statement-container">
              <h4 class="statement-container__title">Заявка</h4>
              <div class="statement-container__input-container">
                <div class="input-container__input-box">
                  <label class="input-box__label d-lawyer-label" for="statement-input1">Магазин или продавец</label>
                  <input class="d-lawyer-input" type="text" id="statement-input1"
                         placeholder="Введите название магазина или продавца">
                </div>
                <div class="input-container__input-box">
                  <label class="input-box__label d-lawyer-label" for="statement-input2">Название товара</label>
                  <input class="d-lawyer-input" type="text" id="statement-input2" placeholder="Введите название тавара">
                </div>
                <div class="input-container__input-box">
                  <label class="input-box__label d-lawyer-label" for="statement-input3">Дата покупки</label>
                  <input class="d-lawyer-input" type="date" id="statement-input3">
                </div>
                <div class="input-container__input-box">
                  <label class="input-box__label d-lawyer-label">Причина возврата, комментарии</label>
                  <textarea class="statement-textarea" name="statement-textarea" cols="67" rows="4"></textarea>
                </div>
                <div class="input-container__input-box">
                  <label class="input-box__label d-lawyer-label">Товарный чек</label>
                  <input class="d-lawyer-input" type="file" id="statement-input4">
                </div>
                <div class="d-lawyer-line d-lawyer-line16"></div>
                <button class="input-box__btn lawyer-btn">Отправить</button>
              </div>
            </div>
          </form>
        </div>
        <!-- Страница "Техника и электроника" -->
        <div class="content-container__technique-content" v-if="techniqueContent">
          <div class="technique-content__btn-box">
            <button
              class="reg-btn"
              :class="{'reg-btn--active' : appliancesBtn}"
              @click="clickAppliances"
            >
              Бытовая техника
            </button>
            <button
              class="reg-btn"
              :class="{'reg-btn--active' : digitalTechnologyBtn}"
              @click="clickDigitalTechnology"
            >
              Цифровая техника
            </button>
            <button
              class="reg-btn"
              :class="{'reg-btn--active' : constructionEquipmentBtn}"
              @click="clickConstructionEquipment"
            >
              Техника для строительства
            </button>
          </div>
          <form action="" class="technique-form">
            <div class="technique-content__technique-body">
              <div class="d-lawyer-line d-lawyer-line6"></div>

              <h4 class="technique-content__subtitle subtitle">Какая возникла проблема</h4>
              <div class="technique-check check">
                <input class="technique-check__input" id="technique-check1" type="radio" name="technique-check1">
                <label class="technique-check__text" for="technique-check1">Не подошёл по цвету, размеру</label>
              </div>
              <div class="technique-check check">
                <input class="technique-check__input" id="technique-check2" type="radio" name="technique-check1">
                <label class="technique-check__text" for="technique-check2">Не устраивает качество товара</label>
              </div>

              <div class="d-lawyer-line d-lawyer-line7"></div>

              <h4 class="technique-content__subtitle subtitle">Сколько времени прошло с момента покупки</h4>
              <div class="technique-check check">
                <input class="technique-check__input" id="technique-check3" type="radio" name="technique-check2">
                <label class="technique-check__text" for="technique-check3">Прошло 13 дней или меньше</label>
              </div>
              <div class="technique-check check">
                <input class="technique-check__input" id="technique-check4" type="radio" name="technique-check2">
                <label class="technique-check__text" for="technique-check4">Прошло 14 дней или более дней</label>
              </div>

              <div class="d-lawyer-line d-lawyer-line8"></div>

              <h4 class="technique-content__subtitle subtitle">Сохранены ли бирки (ярлыки товара)</h4>
              <div class="technique-check check">
                <input class="technique-check__input" id="technique-check5" type="radio" name="technique-check3">
                <label class="technique-check__text" for="technique-check5">Да</label>
              </div>
              <div class="technique-check check">
                <input class="technique-check__input" id="technique-check6" type="radio" name="technique-check3">
                <label class="technique-check__text" for="technique-check6">Прошло 14 дней или более дней</label>
              </div>

              <div class="d-lawyer-line d-lawyer-line9"></div>

              <h4 class="technique-content__subtitle subtitle">Был ли товар в употреблении</h4>
              <div class="technique-check check">
                <input class="technique-check__input" id="technique-check7" type="radio" name="technique-check4">
                <label class="technique-check__text" for="technique-check7">Да</label>
              </div>
              <div class="technique-check check">
                <input class="technique-check__input" id="technique-check8" type="radio" name="technique-check4">
                <label class="technique-check__text" for="technique-check8">Прошло 14 дней или более дней</label>
              </div>

            </div>
            <div class="d-lawyer-line d-lawyer-line10"></div>

            <!-- Юридическая информация -->
            <div class="technique-content__technique-info">
              <p class="technique-info__title info-title">
                В соответствии со ст. 25 Закона РФ «О защите прав потребителей» товар может быть возвращён
                или обменен при соблюдении следующих условий:
              </p>
              <div class="technique-info__container">
                <ul class="container-info__info-list">
                  <li class="info-list__point">Товар ещё никем не употреблялся;</li>
                  <li class="info-list__point">Нет следов нарушения ярлыков;</li>
                  <li class="info-list__point">Сохранены все свойства продукта;</li>
                  <li class="info-list__point">Товарный вид в целости;</li>
                  <li class="info-list__point">
                    Имеется чек (не обязательно, если имеются свидетельские показания или иные
                    доказательства покупки товара, например, банковский чек об оплате).
                  </li>
                </ul>
                <p class="container-info__text-info">
                  Если на вещи имеются следы носки (остатки крема, потожировых следов, запах, потёртости)
                  или стирки, продавец вправе отказать в приёме этой вещи и будет абсолютно прав по закону.
                  Факт того, что Вы носили вещь, продавец определяет визуально.
                  Если продавец заявляет, что вещь ношена, а Вы её не носили, Вы вправе провести экспертизу.
                </p>
              </div>
            </div>
            <!-- Заявка -->
            <div class="statement__statement-container">
              <h4 class="statement-container__title">Заявка</h4>
              <div class="statement-container__input-container">
                <div class="input-container__input-box">
                  <label class="input-box__label d-lawyer-label" for="statement-input1">Магазин или продавец</label>
                  <input class="d-lawyer-input" type="text" id="statement-input5"
                         placeholder="Введите название магазина или продавца">
                </div>
                <div class="input-container__input-box">
                  <label class="input-box__label d-lawyer-label" for="statement-input2">Название товара</label>
                  <input class="d-lawyer-input" type="text" id="statement-input6" placeholder="Введите название тавара">
                </div>
                <div class="input-container__input-box">
                  <label class="input-box__label d-lawyer-label" for="statement-input3">Дата покупки</label>
                  <input class="d-lawyer-input" type="date" id="statement-input7">
                </div>
                <div class="input-container__input-box">
                  <label class="input-box__label d-lawyer-label">Причина возврата, комментарии</label>
                  <textarea class="statement-textarea" name="statement-textarea" cols="67" rows="4"></textarea>
                </div>
                <div class="input-container__input-box">
                  <label class="input-box__label d-lawyer-label">Товарный чек</label>
                  <input class="d-lawyer-input" type="file" id="statement-input8">
                </div>
                <div class="d-lawyer-line d-lawyer-line16"></div>
                <button class="input-box__btn lawyer-btn">Отправить</button>
              </div>
            </div>
          </form>
        </div>
        <!-- Страница "Аксессуары" -->
        <div class="content-container__accessories-content" v-if="accessoriesContent">
          <form action="" class="accessories-form">
            <div class="accessories-content__accessories-body">
              <div class="d-lawyer-line d-lawyer-line11"></div>

              <h4 class="accessories-content__subtitle subtitle">Какая возникла проблема</h4>
              <div class="accessories-check check">
                <input class="accessories-check__input" id="accessories-check1" type="radio" name="accessories-check1">
                <label class="accessories-check__text" for="accessories-check1">Не подошёл по цвету, размеру</label>
              </div>
              <div class="accessories-check check">
                <input class="accessories-check__input" id="accessories-check2" type="radio" name="accessories-check1">
                <label class="accessories-check__text" for="accessories-check2">Не устраивает качество товара</label>
              </div>

              <div class="d-lawyer-line d-lawyer-line12"></div>

              <h4 class="accessories-content__subtitle subtitle">Сколько времени прошло с момента покупки</h4>
              <div class="accessories-check check">
                <input class="accessories-check__input" id="accessories-check3" type="radio" name="accessories-check2">
                <label class="accessories-check__text" for="accessories-check3">Прошло 13 дней или меньше</label>
              </div>
              <div class="accessories-check check">
                <input class="accessories-check__input" id="accessories-check4" type="radio" name="accessories-check2">
                <label class="accessories-check__text" for="accessories-check4">Прошло 14 дней или более дней</label>
              </div>

              <div class="d-lawyer-line d-lawyer-line13"></div>

              <h4 class="accessories-content__subtitle subtitle">Сохранены ли бирки (ярлыки товара)</h4>
              <div class="accessories-check check">
                <input class="accessories-check__input" id="accessories-check5" type="radio" name="accessories-check3">
                <label class="accessories-check__text" for="accessories-check5">Да</label>
              </div>
              <div class="accessories-check check">
                <input class="accessories-check__input" id="accessories-check6" type="radio" name="accessories-check3">
                <label class="accessories-check__text" for="accessories-check6">Прошло 14 дней или более дней</label>
              </div>

              <div class="d-lawyer-line d-lawyer-line14"></div>

              <h4 class="accessories-content__subtitle subtitle">Был ли товар в употреблении</h4>
              <div class="accessories-check check">
                <input class="accessories-check__input" id="accessories-check7" type="radio" name="accessories-check4">
                <label class="accessories-check__text" for="accessories-check7">Да</label>
              </div>
              <div class="accessories-check check">
                <input class="accessories-check__input" id="accessories-check8" type="radio" name="accessories-check4">
                <label class="accessories-check__text" for="accessories-check8">Прошло 14 дней или более дней</label>
              </div>

            </div>
            <div class="d-lawyer-line d-lawyer-line15"></div>

            <!-- Юридическая информация -->
            <div class="accessories-content__accessories-info">
              <p class="accessories-info__title info-title">
                В соответствии со ст. 25 Закона РФ «О защите прав потребителей» товар может быть возвращён
                или обменен при соблюдении следующих условий:
              </p>
              <div class="accessories-info__container">
                <ul class="container-info__info-list">
                  <li class="info-list__point">Товар ещё никем не употреблялся;</li>
                  <li class="info-list__point">Нет следов нарушения ярлыков;</li>
                  <li class="info-list__point">Сохранены все свойства продукта;</li>
                  <li class="info-list__point">Товарный вид в целости;</li>
                  <li class="info-list__point">Имеется чек (не обязательно, если имеются свидетельские показания или
                    иные
                    доказательства покупки товара, например, банковский чек об оплате).
                  </li>
                </ul>
                <p class="container-info__text-info">
                  Если на вещи имеются следы носки (остатки крема, потожировых следов, запах, потёртости)
                  или стирки, продавец вправе отказать в приёме этой вещи и будет абсолютно прав по закону.
                  Факт того, что Вы носили вещь, продавец определяет визуально.
                  Если продавец заявляет, что вещь ношена, а Вы её не носили, Вы вправе провести экспертизу.
                </p>
              </div>
            </div>
            <!-- Заявка -->
            <div class="statement__statement-container">
              <h4 class="statement-container__title">Заявка</h4>
              <div class="statement-container__input-container">
                <div class="input-container__input-box">
                  <label class="input-box__label d-lawyer-label" for="statement-input1">Магазин или продавец</label>
                  <input class="d-lawyer-input" type="text" id="statement-input9"
                         placeholder="Введите название магазина или продавца">
                </div>
                <div class="input-container__input-box">
                  <label class="input-box__label d-lawyer-label" for="statement-input2">Название товара</label>
                  <input class="d-lawyer-input" type="text" id="statement-input10"
                         placeholder="Введите название тавара">
                </div>
                <div class="input-container__input-box">
                  <label class="input-box__label d-lawyer-label" for="statement-input3">Дата покупки</label>
                  <input class="d-lawyer-input" type="date" id="statement-input11">
                </div>
                <div class="input-container__input-box">
                  <label class="input-box__label d-lawyer-label">Причина возврата, комментарии</label>
                  <textarea class="statement-textarea" name="statement-textarea" cols="67" rows="4"></textarea>
                </div>
                <div class="input-container__input-box">
                  <label class="input-box__label d-lawyer-label">Товарный чек</label>
                  <input class="d-lawyer-input" type="file" id="statement-input12">
                </div>
                <div class="d-lawyer-line d-lawyer-line16"></div>
                <button class="input-box__btn lawyer-btn">Отправить</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RegBtn from "../components/UI/RegBtn";

export default {
  components: {RegBtn},
  data() {
    return {
      clothesContent: false,
      techniqueContent: false,
      accessoriesContent: false,
      clothesBtn: false,
      shoesBtn: false,
      handBagsBtn: false,
      appliancesBtn: false,
      digitalTechnologyBtn: false,
      constructionEquipmentBtn: false
    }
  },
  methods: {
    toggleClothesContent() {
      this.clothesContent = !this.clothesContent
      this.techniqueContent = false
      this.accessoriesContent = false
    },
    toggleTechniqueContent() {
      this.techniqueContent = !this.techniqueContent
      this.clothesContent = false
      this.accessoriesContent = false
    },
    toggleAccessoriesContent() {
      this.accessoriesContent = !this.accessoriesContent
      this.clothesContent = false
      this.techniqueContent = false
    },
    clickClothes() {
      this.clothesBtn = !this.clothesBtn
      this.shoesBtn = false
      this.handBagsBtn = false
    },
    clickShoes() {
      this.shoesBtn = !this.shoesBtn
      this.clothesBtn = false
      this.handBagsBtn = false
    },
    clickHandBags() {
      this.handBagsBtn = !this.handBagsBtn
      this.shoesBtn = false
      this.clothesBtn = false
    },
    clickAppliances() {
      this.appliancesBtn = !this.appliancesBtn
      this.digitalTechnologyBtn = false
      this.constructionEquipmentBtn = false
    },
    clickDigitalTechnology() {
      this.digitalTechnologyBtn = !this.digitalTechnologyBtn
      this.appliancesBtn = false
      this.constructionEquipmentBtn = false
    },
    clickConstructionEquipment() {
      this.constructionEquipmentBtn = !this.constructionEquipmentBtn
      this.appliancesBtn = false
      this.digitalTechnologyBtn = false
    }
  }
}
</script>

<style scoped>
.statement-body {
  min-height: 64vh;
}

.statement__title {
  margin: 74px 0 44px 0;
}

.statement__btn-container {
  display: flex;
  justify-content: space-around;
  padding-bottom: 47px;
}

.btn-container__button {
  width: 164px;
  height: 164px;
  background: transparent;
  border: 0;
  cursor: pointer;
}

/* Иконки одежды */
.btn-container__clothes-btn {
  width: 164px;
  height: 164px;
  background-image: url("../assets/images/clothes-icon.svg");
}

.btn-container__clothes-btn--active {
  width: 164px;
  height: 164px;
  background-image: url("../assets/images/clothes-icon--active.svg");
}

/* Иконки техники */
.btn-container__technique-btn {
  width: 164px;
  height: 164px;
  background-image: url("../assets/images/technique-icon.svg");
}

.btn-container__technique-btn--active {
  width: 164px;
  height: 164px;
  background-image: url("../assets/images/technique-icon--active.svg");
}

/* Иконки аксессуаров */
.btn-container__accessories-btn {
  width: 164px;
  height: 164px;
  background-image: url("../assets/images/accessories-icon.svg");
}

.btn-container__accessories-btn--active {
  width: 164px;
  height: 164px;
  background-image: url("../assets/images/accessories-icon--active.svg");
}

.container__btn-box{
  width: 164px;
}

.btn-box__subtitle{
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  margin-top: 10px;
  color: #007FEF;
}

.btn-box__clothes-subtitle--active,
.btn-box__technique-subtitle--active,
.btn-box__accessories-subtitle--active
{
  color: #000000;
}

.btn-box__clothes-subtitle--active:before,
.btn-box__technique-subtitle--active:before,
.btn-box__accessories-subtitle--active:before{
  content: "";
  position: absolute;
  background-image: url("../assets/images/point-active.svg");
  width: 20px;
  height: 20px;
}

.btn-box__clothes-subtitle--active:before{
  left: 277px;
}

.btn-box__technique-subtitle--active:before{
  left: 701px;
}

.btn-box__accessories-subtitle--active:before{
  left: 1090px;
}

.d-lawyer-line {
  margin-top: 30px;
}

.clothes-content__btn-box,
.technique-content__btn-box,
.accessories-content__btn-box {
  width: 286px;
  margin: 0 auto 40px;
}

.reg-btn--active{
  background-color: #000;
  color: #ffffff;
}

.technique-content__btn-box {
  width: 554px;
}

.reg-btn {
  border-radius: 0 0 0 0;
}

.reg-btn:first-child {
  border-radius: 10px 0 0 10px;
}

.reg-btn:last-child {
  border-radius: 0 10px 10px 0;
}

.clothes-content__subtitle,
.technique-content__subtitle,
.accessories-content__subtitle {
  margin: 25px 0 17px 0;
}

.clothes-content__clothes-info,
.technique-content__technique-info,
.accessories-content__accessories-info {
  margin: 33px 0 67px;
}

.info-title {
  width: 640px;
  font-size: 16px;
  color: #222222;
}

.clothes-info__container-info,
.technique-info__container,
.accessories-info__container {
  display: flex;
}

.clothes-check__text,
.technique-check__text,
.accessories-check__text {
  font-size: 16px;
  font-weight: 600;
  margin-left: 10px;
}

.container-info__info-list {
  width: 570px;
  margin: 15px 76px 0 50px;
  line-height: 30px;
}

.info-list__point {
  font-size: 16px;
  color: #222222;
}

.container-info__text-info {
  width: 300px;
  margin-top: 15px;
  font-size: 12px;
  color: #222222;
  line-height: 20px;
}

.statement__statement-container {
  height: 600px;
  background-color: #F4F4F4;
  margin-bottom: 60px;
}

.input-box__label {
  margin: 20px 0 5px 7px;
}

.statement-container__title {
  font-size: 34px;
  font-weight: 500;
  color: #222222;
  margin: 50px 125px 0 50px;
}

.statement-textarea {
  font-size: 22px;
}

.statement__statement-container {
  display: flex;
}

.input-container__input-box {
  display: flex;
  flex-direction: column;
}

.input-box__btn {
  margin-top: 20px;
}
</style>