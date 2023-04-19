<template>
  <div class="mycontainer">
      <div class="houses-header">
        <h1>Houses</h1>
        <router-link class="create-link" to="/create">
          <img class="create-img" src="../../public/Frontend_Internship_Test_Slices/ic_plus_white@3x.png" />
          <span class="create-text">create new</span>
        </router-link>
        <router-link to="/create" class="create-img-mobile-link">
          <img class="create-img-mobile" src="../../public/Frontend_Internship_Test_Slices/ic_plus_grey@3x.png" />
        </router-link>
      </div>
      <div class="search-container">
        <div class="search-bar">
            <a class="searchBtn" @click="searchHouses">
              <img class="search-bar-icon" src="../../public/Frontend_Internship_Test_Slices/ic_search@3x.png" />
            </a>
          <input @input="hideClearIcon($event)"  class="search-bar-input" type="text" name="searchTerm" id="searchTerm" v-model="searchTerm" placeholder="Search houses" />
          <a v-if="showClear" class="searchBtn" @click="clearSearch">
              <img class="search-bar-icon" src="../../public/Frontend_Internship_Test_Slices/ic_clear@3x.png" />
            </a>
        </div>
        <ToggleButton @sizeClicked="sortBySize" @priceClicked="sortByPrice" />
      </div>
      <div class="houses-container" :key="house.id" v-for="house in houses">
        <House @deleteHouse="deletehouse" :house="house" />
      </div>

      <div v-if="showNoResults">
        <noResults />
      </div>
  </div>
    
  </template>
  
  <script>
import House from '@/components/House.vue';
import noResults from '@/components/NoResults.vue';
import ToggleButton from '@/components/ToggleButton.vue';
import DeleteModal from '@/components/DeleteModal.vue';

export default {
  name: 'Houses',
  data() {
    return {
      houses: [],
      filteredHouses: [],
      searchTerm: '',
      sortOption: 'price',
      house: '',
      showClear: false,
      showNoResults: false,
    };
  },
  components: {
    House,
    noResults,
    ToggleButton,
    DeleteModal
  },
  methods: {
    async hideClearIcon(event) {
      if(event.target.value) {
        this.showClear = true
      } else {
        this.showClear = false
        this.houses = await this.fetchHouses()
      }
    },
    async clearSearch() {
      this.searchTerm = "";
      this.showClear = false
      this.showNoResults = false
      this.houses = await this.fetchHouses()
    },
    async searchHouses() {
      if(this.searchTerm === "") {
        alert("Search Input Is Empty")
      } else {
        this.houses = this.houses.filter(house => house.location.street.toLowerCase().includes(this.searchTerm.toLowerCase()));
        this.showNoResults = false
        if(this.houses.length < 1) {
          this.showNoResults = true
        }
      }
    },
    sortBySize() {    
      this.houses = this.houses.sort((a, b) => {
        if(a.size < b.size) {
          return -1
        } else if(a.size > b.size) {
          return 1
        } else {
          return 0
        }
      })
    },  
    sortByPrice() {
      this.houses = this.houses.sort((a, b) => {
        if(a.price < b.price) {
          return -1
        } else if(a.price > b.price) {
          return 1
        } else {
          return 0
        }
      })
    },  
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
    async deletehouse(id) {
      if (confirm('Are you sure?')) {
        const res = await fetch(`https://api.intern.d-tt.nl/api/houses/${id}`, {
          method: 'DELETE',
          headers: {
          'X-Api-Key': '-Ip20SdRhJZQ46BxtEM_7HLXTgDCnKql'
        }
        })
        this.houses = this.houses.filter((house) => house.id !== id)
      }
    },
  },
  async created() {
    this.houses = await this.fetchHouses()
  },
}
</script>

<style scoped>
  .mycontainer{ 
    padding: 3rem 3rem
  }
.houses-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.create-link {
  background-color: var(--primary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 1.5rem;
  height: fit-content;
  border-radius: 10px;
  text-decoration: none;
}

.create-img {
  width: 20px;
  height: 20px;
  margin-right: 1rem;
}

.create-text {
  color: var(--tertiary-1);
  text-transform: uppercase;
}

.create-img-mobile-link {
  display: none;
} 
.create-img-mobile {
  display: none;
}

.search-container {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
}

.searchBtn {
  cursor: pointer;
}

.search-bar {
  background-color: #ededed;
  display: flex;
  align-items: center;
  padding: 0 10px;
  border-radius:10px;
}
.search-bar-input {
  width: 22rem;
  background-color: #ededed;
  border: none;
  padding: 1rem;
  font-size: 1rem;
}

.search-bar-input:focus {
  outline: none;
}

.search-bar-icon {
  width: 20px;
  height: 20px;
}

.filter-container {
  display: flex;
  width: 15rem;
  border: 1px solid #000;
}

.price {
  background-color: var(--primary);
}
.houses-container {
  margin-top: 2rem;
}

@media (max-width: 768px) {
  .create-text {
    display: none;
  }

  .houses-header {
   justify-content: center;
   align-items: center;
   position: relative;
  }

  .create-link {
 display: none
}

.create-img-mobile-link {
  display: block;
  position: absolute;
  left: 90%;
  top: 40%;
} 
.create-img-mobile {
  display: block;
  width: 20px;
  height: 20px;
}
.search-container {
  display: flex;
  flex-direction: column;
}

.no-results {
  display: flex;
  justify-content: center;
  border: 1px solid #000;
  width: 2000px
}
.popup {

	z-index: 99;
	background-color: red;
	width: 100vw;
  height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
}
.popup-inner {
		background: #FFF;
		padding: 32px;
	}
}
</style>
