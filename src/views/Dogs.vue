<template>
    <div>
        <h1>Dogs for adoption</h1>
        <b-table striped hover :items="dogs">
        <template #cell(name)="data">

        <!--Router Links  -->
        <router-link :to="`/pets/dogs/${data.index}`">
        {{ data.value }}
        </router-link>

      </template>
        </b-table>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {

computed: {
...mapState([
'dogs'
])
}

}
</script>



