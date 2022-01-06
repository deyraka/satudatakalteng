<template>
  <v-container>
    <v-row class="text-center mb-6" justify="space-around">
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
              <v-list-item :key="index">
                <!-- <v-list-item-avatar>
                <v-img :src="item.avatar"></v-img>
                </v-list-item-avatar> -->

                <v-list-item-content>
                  <v-list-item-title v-html="item.title"></v-list-item-title>
                  <v-list-item-subtitle
                    v-html="item.notes"
                  ></v-list-item-subtitle>
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
    itemsCount: 0,
    divider: true,
    inset: true,
    /* items: [
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        title: "Brunch this weekend?",
        subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        title: "Oui oui",
        subtitle:
          '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        title: "Birthday gift",
        subtitle:
          '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
        title: "Recipe to try",
        subtitle:
          '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
      },
    ] */
  }),

  mounted() {
      axios
        .get('https://ckan62.bpskalteng.web.id/api/3/action/package_search?q='+ this.keyword)
        .then((response) => {
            // this.loading = false
            this.itemsCount = response.data.result.count
            this.items = response.data.result.results
            console.log('https://ckan62.bpskalteng.web.id/api/3/action/package_search?q='+ this.keyword)
        })
        .catch((e) => { console.log(e) })
  },
}
</script>
