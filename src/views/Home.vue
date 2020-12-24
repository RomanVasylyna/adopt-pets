<template>
  <div class="home">

  <h1>Adopt a new best friend</h1>
  
  <!-- Form Toggler -->
  <button class="btn btn-primary" @click="togglePetForm">Add New Pet</button>
   
   <!-- Form itself -->
   <b-form @submit.prevent="handleSubmit" v-if="showPetForm">
      
      <!-- Pet's name -->
      <b-form-group
        id="input-group-1"
        label="Pet's name:"
        label-for="input-1"
        description="Choose the pet you want to adopt"
      >
        <b-form-input
          id="input-1"
          v-model="formData.name"
          type="text"
          placeholder="Enter Pet's name"
          required
        ></b-form-input>

      </b-form-group>

      
      <!-- Select With Species (Cats/Dogs) -->
      <b-form-group id="input-group-3" label="Species:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="formData.species"
          :options="['cats', 'dogs']"
          required
        ></b-form-select>
      </b-form-group>

      <!-- Pet's age -->
      <b-form-group
        id="input-group-2"
        label="Pet's Age:"
        label-for="input-2"
        description="Pet's age"
      >
        <b-form-input
          id="input-2"
          v-model="formData.age"
          type="number"
          placeholder="Enter Pet's age"
          required
        ></b-form-input>

      </b-form-group>
      
      <!-- Buttons -->
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>

      <!-- Form ends -->
    </b-form>

  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Home',

  data() {
   return {
   showPetForm : false,
   formData : {
   name : '',
   age : 0,
   species : null,
   },
   } 
  },

  methods: {
  ...mapActions([
  'addPet'  
  ]),  
  togglePetForm() { 
  this.showPetForm = !this.showPetForm; //toggles a boolean
  },
  handleSubmit() {
  let { species, age, name } = this.formData;  
  let payload = {
  species,
  pet : {
  name,
  age
  },
  };  
  this.addPet(payload);
  
  //Reset Form After Submit
  this.formData = {
  name : '',
  age : 0,
  species : null,  
  }; 

  }
  },

}
</script>
