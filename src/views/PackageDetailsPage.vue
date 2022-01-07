<template>
    <v-container>
        <template v-for="(item, index) in items">
            <v-row :key="index">
                <v-col>
                    {{item.title}}
                </v-col>
            </v-row>
        </template>
    </v-container>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "PackageDetailsPage",
        props: ["id"],
        data: () => ({
            items: [],
        }),

        mounted() {
            axios
                .get('https://ckan62.bpskalteng.web.id/api/3/action/package_show?use_default_schema=true&id='+ this.id)
                .then((response) => {
                    this.items = response.data
                    console.log(this.items)
                })
                .catch((errors) => {console.log(errors)})
        },

    }
</script>