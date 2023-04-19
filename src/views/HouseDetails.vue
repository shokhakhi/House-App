<template>
  <div class="mycontainer">
    <BackButton />
    <div class="main">
      <div class="content">
        <img class="main-img" :src="house.image" alt="house-image">
        <div class="detail-text-container">
          <div class="heading-container">
            <h2>{{ house.location.street }}</h2>
            <div class="icon-container">
              <img class="heading-icon" src="../../public/Frontend_Internship_Test_Slices/ic_edit@3x.png" alt="edit">
              <img class="heading-icon" src="../../public/Frontend_Internship_Test_Slices/ic_delete@3x.png" alt="delete">
            </div>
          </div>
          <span class="detail-item">{{ house.location.zip }} {{ house.location.city }}</span>
          <div class="currency-container">
            <div class="details-others">
              <img src="../../public/Frontend_Internship_Test_Slices/ic_price@3x.png" alt="price" class="currency-icon">
              <span class="details-text">{{ house.price }}</span>
            </div>
            <div class="details-others">
              <img src="../../public/Frontend_Internship_Test_Slices/ic_size@3x.png" alt="size" class="currency-icon">
              <span class="details-text">{{ house.size }} m2</span>
            </div>
            <div class="details-others">
              <img src="../../public/Frontend_Internship_Test_Slices/ic_construction_date@3x.png" alt="construction"
                class="currency-icon">
              <span class="details-text">Built in {{ house.constructionYear }}</span>
            </div>
          </div>
          <div class="rooms-container">
            <div class="details-others">
              <img src="../../public/Frontend_Internship_Test_Slices/ic_bed@3x.png" alt="price" class="currency-icon">
              <span class="details-text">{{ house.rooms.bedrooms }}</span>
            </div>
            <div class="details-others">
              <img src="../../public/Frontend_Internship_Test_Slices/ic_bath@3x.png" alt="size" class="currency-icon">
              <span class="details-text">{{ house.rooms.bathrooms }}</span>
            </div>
            <div class="details-others">
              <img src="../../public/Frontend_Internship_Test_Slices/ic_garage@3x.png" alt="construction"
                class="currency-icon">
              <span class="details-text">{{ house.hasGarage }}</span>
            </div>
          </div>
          <p>
            {{ house.description }}
          </p>
        </div>
      </div>
      <div class="recommendations">
        <h2>Recommended for you</h2>
        <div v-for="recommendedHouse in recommendedHouses">
          <RecommendedHouse :recommendedHouse="recommendedHouse" />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import BackButton from '@/components/BackButton.vue';
import RecommendedHouse from '@/components/RecommendedHouse.vue';
export default {
  name: 'HouseDetails',
  components: {
    BackButton,
    RecommendedHouse
  },
  data() {
    return {
      id: this.$route.params.id,
      houses: [],
      house: {},
      recommendedHouses: []
    }
  },
  methods: {
    async fetchHouses() {
      const res = await fetch('https://api.intern.d-tt.nl/api/houses', {
        method: 'GET',
        headers: {
          'X-Api-Key': '-Ip20SdRhJZQ46BxtEM_7HLXTgDCnKql'
        }
      })
      const data = res.json()
      return data
    },

    getRecommendedHouses() {
      let allHouses = this.houses.filter(house => house.id !== this.house.id)
      this.recommendedHouses = allHouses.filter(house => house.location.street == this.house.location.street).slice(0, 3)

      if (this.recommendedHouses.length == 0) {
        this.recommendedHouses = allHouses.slice(0, 3)
      }
    }
  },
  watch: {
    '$route.params.id': {
      async handler(newValue) {
        this.house = this.houses.find(house => house.id == newValue)
      },
      immediate: true,
    }
  },
  async created() {
    this.houses = await this.fetchHouses()
    this.house = this.houses.find(house => house.id == this.id)
    this.getRecommendedHouses()
  },
}
</script>

<style scoped>
.mycontainer {
  padding: 3rem 3rem;
}
.main {
  display: flex;
  justify-content: space-between;
}

.content {
  flex-basis: 65%;
  background-color: var(--background-2);
}

.detail-text-container {
  padding: 0 2rem;
}

.details-others {
  display: flex;
  align-items: center;
}

.main-img {
  width: 100%;
}

.heading-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.heading-icon {
  width: 20px;
  height: 20px;
  margin-left: 1rem;
}

.currency-container {
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
  width: 50%;
}

.rooms-container {
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
  width: 30%;
}

.currency-icon {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

.recommendations {
  flex-basis: 30%;
}
</style>