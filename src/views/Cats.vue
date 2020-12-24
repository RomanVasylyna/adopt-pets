<template>
    <div id="app">
    <h1>Cats for adoption</h1>

     <!-- Table -->
     <b-table striped hover :items="cats">
      <template #cell(name)="data">

        <!--Router Links  -->
        <router-link :to="`/pets/cats/${data.index}`">
        {{ data.value }}
        </router-link>

      </template>
     </b-table>

    </div>
</template>


<script>
// Importing Cats Array from a file
// @ directs to a root folder so you don't have to do ../../data etc.

import { mapState } from 'vuex'

export default {

// Using computed to get array our of vuex store
computed: {
...mapState([
'cats'
])
}

}
</script>
