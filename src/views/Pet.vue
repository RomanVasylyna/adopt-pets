<template>
    <div>
        <h1>{{ animal.name }} ({{ firstCharUpper($route.params.species) }})</h1>
        <p>Age : {{ animal.age }}</p>
        <p>Breed : {{ firstCharUpper(animal.breed) }}</p>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
//Map state is the same as
//But this syntax is not standard
// cats() {
// return this.$store.state.cats
// }

data() {
return {
animal : {},
}
},

computed: {
...mapState([
'cats',
'dogs'
])
},

mounted() {
let selectedAnimal = this[this.$route.params.species][this.$route.params.id];
this.animal = selectedAnimal;
},

methods: {
firstCharUpper(str) {
let arr = str.split(' '); //Split String into two words
for(let i=0; i < arr.length; i++) {
arr[i] = arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
}
return arr.join(' ');
}
},


}
</script>
