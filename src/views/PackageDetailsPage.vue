<template>
    <v-container>
        <!-- <template v-for="(item, index) in items"> -->
            <v-row v-for="(item) in items" :key="item.id">
                <v-col cols="12" class="text-h5">
                    {{item.title}}
                </v-col>
                <v-col cols="12" class="text-subtitle-1">
                    {{item.author}}
                </v-col>
                {{item}}
            </v-row>
        <!-- </template> -->
    </v-container>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "PackageDetailsPage",
        props: ["fk"],
        data: () => ({
            items: [],
        }),

        mounted() {
            axios
                .get('https://ckan62.bpskalteng.web.id/api/3/action/package_show?id='+ this.fk +'&include_tracking=True')
                .then((response) => {
                    this.items = response.data
                    console.log(this.items)
                })
                .catch((errors) => {console.log(errors)})
        },

    }
</script>