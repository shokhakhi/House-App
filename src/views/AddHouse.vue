<template>
  <div class="backgroundImage">
    <div class="container">
      <BackButton />
    <h1>Create New Listing</h1>
    <form @submit="onSubmit" action="submit-form.php" method="POST">

      <div class="form-group">
        <label class="form-label" for="streetName">Street Name*</label>
        <input placeholder="Enter the street name" class="form-text-input" v-model="streetName" type="text"
          name="streetName" id="streetName">
      </div>

      <div class="form-group-container">
        <div class="form-group form-input-duo">
          <label class="form-label" for="houseNumber">House Number*</label>
          <input placeholder="Enter house number" class="form-text-input" v-model="houseNumber" type="number"
            name="houseNumber" id="houseNumber">
        </div>

        <div class="form-group form-input-duo">
          <label class="form-label" for="numberAddition">Addition (optional)</label>
          <input placeholder="e.g. A" class="form-text-input" v-model="numberAddition" type="number" name="numberAddition"
            id="numberAddition">
        </div>
      </div>


      <div class="form-group">
        <label class="form-label" for="zip">Postal code*</label>
        <input placeholder="e.g. 1000 AA" class="form-text-input" v-model="zip" type="text" name="zip" id="zip">
      </div>

      <div class="form-group">
        <label class="form-label" for="city">City*</label>
        <input placeholder="e.g. Utrecht" class="form-text-input" v-model="city" type="text" name="city" id="city">
      </div>

      <div class="form-group">
        <label class="form-label" for="city">Upload picture (PNG or JPG)</label>
        <div class="input-container">
          <input class="form-text-file" type="file">
          <img class="form-text-icon" src="../../public/Frontend_Internship_Test_Slices/ic_plus_grey@3x.png" />
        </div>
      </div>


      <div class="form-group">
        <label class="form-label" for="price">Price*</label>
        <input placeholder="e.g. €150.000" class="form-text-input" v-model="price" type="number" name="price" id="price">
      </div>

      <div class="form-group-container">
        <div class="form-group form-input-duo">
          <label class="form-label" for="size">Size*</label>
          <input placeholder="e.g. 60m2" class="form-text-input" v-model="size" type="number" name="size" id="size">
        </div>

        <div class="form-group form-input-duo">
          <label class="form-label" for="hasGarage">Has Garage*</label>
          <select v-model="hasGarage" class="form-text-input">
            <option selected disabled value="xx">-Select</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
      </div>

      <div class="form-group-container">
        <div class="form-group form-input-duo">
          <label class="form-label" for="bedrooms">Bedrooms*</label>
          <input placeholder="Enter amount" class="form-text-input" v-model="bedrooms" type="number" name="bedrooms"
            id="bedrooms">
        </div>

        <div class="form-group form-input-duo">
          <label class="form-label" for="bathrooms">Bathrooms*</label>
          <input placeholder="Enter amount" class="form-text-input" v-model="bathrooms" type="number" name="bathrooms"
            id="bathrooms">
        </div>
      </div>


      <div class="form-group">
        <label class="form-label" for="constructionYear">Construction date*</label>
        <input placeholder="e.g. 1990" class="form-text-input" v-model="constructionYear" type="number"
          name="constructionYear" id="constructionYear">
      </div>


      <div class="form-group">
        <label class="form-label" for="description">Description*</label>
        <textarea placeholder="Enter description" res class="form-text-input" v-model="description" rows="10"
          name="description" id="description"></textarea>
      </div>

      <div class="form-group-btn-container">
        <button type="submit" class="form-group-btn">Post</button>
      </div>

    </form>
    </div>
   
  </div>
</template>
<script>
import BackButton from '../components/BackButton.vue';

export default {
  name: 'AddHouse',
  components: {
    BackButton
  },
  data() {
    return {
      price: '',
      description: '',
      constructionYear: '',
      hasGarage: '',
      houseNumber: '',
      numberAddition: '',
      streetName: '',
      city: '',
      zip: '',
      bathrooms: '',
      bedrooms: '',
      size: '',
      image: null,
    }
  },
  methods: {
    async postHouse(house) {
      const res = await fetch('https://api.intern.d-tt.nl/api/houses', {
        method: 'POST',
        headers: {
          'X-Api-Key': '-Ip20SdRhJZQ46BxtEM_7HLXTgDCnKql'
        },
        body: house
      })
      const data = await res.json()
      return data
    },
    onSubmit(e) {
      e.preventDefault()

      var formdata = new FormData();
      formdata.append("price", this.price);
      formdata.append("bedrooms", this.bedrooms);
      formdata.append("bathrooms", this.bathrooms);
      formdata.append("size", this.size);
      formdata.append("streetName", this.streetName);
      formdata.append("houseNumber", this.houseNumber);
      formdata.append("numberAddition", this.numberAddition);
      formdata.append("zip", this.zip);
      formdata.append("city", this.city);
      formdata.append("constructionYear", this.constructionYear);
      formdata.append("hasGarage", this.hasGarage);
      formdata.append("description", this.description);

      this.postHouse(formdata)
    },
  },
}
</script>

<style scoped>
.container {
  padding: 3rem 3rem;
}

form {
  max-width: 46%;
  margin-top: 3rem;
}

.form-label {
  font-weight: 600;
  margin-bottom: 10px;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin: 10px 0;
}

.form-group-container {
  display: flex;
  justify-content: space-between;
}

.form-text-input {
  padding: 1.5rem;
  border-radius: 10px;
  border: none;
  resize: none;
  font-size: 1.2rem;
}

.form-text-input:focus {
  outline: none;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  display: none;
}

.form-input-duo {
  flex-basis: 48%;
}

.form-group-btn-container {
  display: flex;
  justify-content: flex-end;
  margin-top: 3rem;
}

.form-group-btn {
  padding: 1rem 6rem;
  border: none;
  border-radius: 10px;
  font-size: 25px;
  text-transform: uppercase;
  background-color: var(--primary);
  opacity: 0.7;
  color: var(--background-1);
  cursor: pointer;
  font-weight: 600;
}

.input-container {
  width: 100px;
  height: 100px;
  outline: dashed;
  outline-color: var(--text-secondary);
  position: relative;
}

.form-text-file {
  width: fit-content;
  width: 100px;
  height: 100px;
  opacity: 0;
  cursor: pointer;
}

.form-text-icon {
  position: absolute;
  width: 30px;
  height: 30px;
  top: 35%;
  left: 35%;
}

.backgroundImage {
  background-image: url("../../public/Frontend_Internship_Test_Slices/img_background@3x.png");
  background-size: 100% 100%;
}
</style>