<template>
  <v-container>
    <v-row class="text-center mb-6" justify="center">
      <div class="d-flex flex-row">
        <v-img
          :src="require('../assets/satudatakalteng.png')"
          contain
          height="50"
        />
        <h3>SATU DATA KALTENG</h3>
      </div>
      <v-col cols="12" sm="6" md="6" lg="6">
        <v-text-field
          label="Pian handak mencari data? Ketik disini ja!"
          placeholder="ketik nama data yang pian cari"
          solo-inverted
          rounded
          prepend-inner-icon="mdi-magnify"
          clear-icon="mdi-close-circle"
          clearable
          color="orange"
          :value="keyword"
          flat
        >
        </v-text-field>
      </v-col>
    </v-row>
    <v-row>
        <v-subheader>{{header}}</v-subheader>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card 
          flat
        >
          <v-list v-if="itemsCount>0" three-line>
            <template v-for="(item, index) in items">
              <v-divider
                v-if="index>0 || index==item.length-1"
                :key="index"
              ></v-divider>
              <v-list-item :key="index">
                <!-- <v-list-item-avatar>
                <v-img :src="item.avatar"></v-img>
                </v-list-item-avatar> -->

                <v-list-item-content>
                  <router-link class="text-decoration-none" :to="'/package-details-page/'+ item.id">
                    <v-list-item-title v-html="item.title"></v-list-item-title>
                  </router-link>
                  <v-list-item-subtitle
                    v-html="item.notes" class="mb-2"
                  ></v-list-item-subtitle>
                  <v-list-item-subtitle class="d-flex flex-row">
                    <p class="text-caption mr-3">tersedia dalam format: </p>
                    <div v-for="resource in item.resources" :key="resource.id">
                      <v-chip 
                        x-small 
                        :color="getColor(resource.format)"
                        class="mr-1"
                        dark
                      >
                        <p class="ma-n1 text-lowercase">.{{resource.format}}</p>
                      </v-chip>
                    </div>
                    <!-- <v-row v-for="resource in item.resources" :key="resource.id" justify="left">
                      <v-col cols="2" class="text-caption" align-self="end" >
                        available format: 
                      </v-col>
                      <v-col cols="1">
                        <v-chip x-small color="success">
                          {{resource.format}}
                        </v-chip>
                      </v-col>
                    </v-row> -->
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>
          <v-row v-else class="text-center">
            <v-col>
              <p class="font-weight-thin">kadeda data yang pian cari</p>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  name: "ResultPage",
  props: ["keyword"],
  data: () => ({
    header: "Hasil Pencarian",
    items: [],
    // itemsResources: [],
    itemsCount: 0,
    divider: true,
    inset: true,
  }),

  mounted() {
      axios
        .get('https://ckan62.bpskalteng.web.id/api/3/action/package_search?q='+ this.keyword)
        .then((response) => {
            // this.loading = false
            this.itemsCount = response.data.result.count
            this.items = response.data.result.results
            // this.itemsResources = response.data.result.results
            // console.log(this.itemsResources)
        })
        .catch((e) => { console.log(e) })
  },
  
  methods: {
    getColor (frmt) {
      if (frmt === 'XLSX') return 'success'
      else if (frmt === 'PDF') return 'red'
      else if (frmt === 'JSON') return 'orange'
      else if (frmt === 'CSV') return 'teal lighten-1'
      else return 'grey'
    },
  }
}
</script>
