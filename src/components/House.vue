<template>
  <div class="house">
    <router-link class="house-item" :to="`houses/${house.id}`">
    <div class="house-container-1">
      <img class="house-image" :src="house.image" />
    <div class="details">
      <span class="detail-heading">{{ house.location.street }}</span>
      <span class="detail-text">€ {{ house.price }}</span>
      <span class="detail-text text-location">{{ house.location.zip }} {{ house.location.city }}</span>
      <div class="details-space">
        <div class="details-space-icon-container">
          <img src="../../public/Frontend_Internship_Test_Slices/ic_bed@3x.png" class="details-space-icon" />
          <span class="detail-text">{{ house.rooms.bedrooms }}</span>
        </div>
        <div class="details-space-icon-container">
          <img src="../../public/Frontend_Internship_Test_Slices/ic_bath@3x.png" class="details-space-icon" />
          <span class="detail-text">{{ house.rooms.bathrooms }}</span>
        </div>
        <div class="details-space-icon-container">
          <img src="../../public/Frontend_Internship_Test_Slices/ic_size@3x.png" class="details-space-icon" />
          <span class="detail-text">{{ house.size }} m2</span>
        </div>
      </div>
    </div>
  </div>
</router-link>
  <div class="house-container-2">
    <router-link :to="`edit/${house.id}`" class="utility">
      <img class="house-icon" src="../../public/Frontend_Internship_Test_Slices/ic_edit@3x.png" />
    </router-link>
    <a class="utility" @click="deleteItem(house.id)">
      <img class="house-icon" src="../../public/Frontend_Internship_Test_Slices/ic_delete@3x.png" />
    </a>
  </div>
    </div>
</template>
  
<script>
export default {
  name: 'House',
  props: ['house'],
  data() {
    return {
      ShowModal: false
    }
  },  
  methods: {
    deleteItem(id) {
      this.$emit('deleteHouse', id)
    },
    setShowModal() {
      this.ShowModal = true
      this.$emit('setShowModal', this.ShowModal)
    }
  }
}
</script>

<style scoped>
.house {
  background-color: var(--background-2);
  display: flex;
  padding: 1rem;
  justify-content: space-between;
}

.house-item {
  text-decoration: none;
  color: black;
  width: 90%;
}

.house-container-1 {
  display: flex;
  align-items: center;
}

.house-image {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 1rem;
}

.details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 1rem;
  height: 150px;
}

.detail-heading {
  font-size: 1.5rem;
  font-weight: 800;
  text-transform: capitalize;
}

.text-location {
  color: var(--tertiary-2);
}

.details-space {
  display: flex;
  justify-content: space-between;
  width: 13rem;
}
.details-space-icon-container {
  display: flex;
  align-items: center;
}

.details-space-icon {
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 10px;
}

.house-icon {
  width: 1.5rem;
  height: 1.5rem;
  object-fit: contain;
  margin-left: 1rem;
}

.utility {
  cursor: pointer;
}
</style>
