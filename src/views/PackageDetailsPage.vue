<template>
    <v-container>
        <!-- <template v-for="(item, index) in items"> -->
            <v-row v-for="(item, index) in items" :key="index">
                <v-col cols="12">
                    <v-card flat>
                        <v-col cols="12" class="text-h5">
                            {{item.packages.result.title}}
                        </v-col>
                        <v-col cols="12" class="text-subtitle-1">
                            {{item.packages.result.notes}}
                        </v-col>
                        <v-col cols="12" class="text-caption font-italic mt-n6">
                            <p>sumber : {{item.packages.result.organization.title}}</p>
                        </v-col>
                    </v-card>
                </v-col>
                <v-col cols="12">
                    <v-card flat>
                        <v-tabs
                            background-color="blue darken-1"
                            center-active
                            dark
                        >
                            <v-tab v-for="tabItem in tabItems"
                                :key="tabItem"
                            >{{tabItem}}
                            </v-tab>

                            <v-tab-item>
                                <v-container fluid>
                                    <v-row v-for="res in item.resources" :key="res.id">
                                        <p>{{res.name}}</p>
                                    </v-row>
                                </v-container>
                            </v-tab-item>
                            <v-tab-item>
                                <v-container fluid>
                                    <v-row>
                                        <p>Ini halaman Grafik</p>
                                    </v-row>
                                </v-container>
                            </v-tab-item>
                            <v-tab-item>
                                <v-container fluid>
                                    <v-row>
                                        <p>Ini halaman Peta</p>
                                    </v-row>
                                </v-container>
                            </v-tab-item>
                        </v-tabs>
                        <!-- <v-tabs-items v-model="tab"> -->
                            <!-- <v-tab-item
                                v-for="tabItem in tabItems"
                                :key="tabItem"
                            > -->
                        <!-- </v-tabs-items> -->
                    </v-card>
                </v-col>
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
            tab: null,
            tabItems: ['Tabel', 'Grafik', 'Peta'],
            items: [],
            resources: [],
        }),

        mounted() {
            axios
                .get('https://ckan62.bpskalteng.web.id/api/3/action/package_show?id='+ this.fk +'&include_tracking=True')
                .then((response) => {
                    // this.items = response.data
                    // this.resources = response.data.result.resources
                    // console.log(this.resources)
                    const tempArray = {
                        packages: response.data,
                        resources: response.data.result.resources
                    }
                    this.items.push(tempArray)
                    console.log(this.items)
                })
                .catch((errors) => {console.log(errors)})
        },

    }
</script>