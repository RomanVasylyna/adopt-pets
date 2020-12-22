<template>
    <div>
     {{ $route.params.species }}
     {{ $route.params.id }}
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

computed: {
...mapState([
'cats',
'dogs'
])
},

methods: {
pet() {
//
let animals = this[this.$route.params.species];

}
}


}
</script>
