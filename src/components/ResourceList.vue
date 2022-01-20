<template>
  <v-card flat>
    <!-- <v-container fluid>
        <v-row>
            <v-col>
                <p class="text-subtitle-2">Daftar Resources</p>
            </v-col>
        </v-row>
        <v-row class="mt-n6" v-for="(res, index) in resources" :key="res.id">
            <v-divider
                :key="index"
            ></v-divider>
            <v-col cols="12">
                <router-link
                    class="text-decoration-none"
                    :to="res.url"
                >
                    {{ res.name }}
                </router-link>
            </v-col>
            <v-col class="d-flex flex-row mt-n3">
                <p class="text-caption mr-3">format:</p>
                <v-chip
                    x-small
                    :color="getColor(res.format)"
                    class="mr-1"
                    dark
                >
                    <p class="ma-n1 text-lowercase">
                        .{{ res.format }}
                    </p>
                </v-chip>
            </v-col>
        </v-row>
      </v-container> -->

    <v-subheader>Daftar Tabel</v-subheader>
    <v-list two-line>
      <template v-for="(res, index) in resources">
        <v-divider
          v-if="index > 0 || index == res.length - 1"
          :key="index"
        ></v-divider>
        <v-list-item :key="res.id">
          <v-list-item-content>
            <router-link
              class="text-decoration-none"
              :to="{
                name: 'resourcePage',
                params: {
                  idRes: res.id,
                },
              }"
            >
              <v-list-item-title v-html="res.name"></v-list-item-title>
            </router-link>
            <v-list-item-subtitle class="d-flex flex-row">
              <p class="text-caption mr-3">format:</p>
              <v-chip x-small :color="getColor(res.format)" class="mr-1" dark>
                <p class="ma-n1 text-lowercase">.{{ res.format }}</p>
              </v-chip>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "ResourceList",
  props: {
    resources: [],
  },
  //   data: function () {
  //     return {
  //       resources: [],
  //     };
  //   },

  methods: {
    getColor(frmt) {
      if (frmt === "XLSX") return "success";
      else if (frmt === "PDF") return "red";
      else if (frmt === "JSON") return "orange";
      else if (frmt === "CSV") return "teal lighten-1";
      else return "grey";
    },
  },
};
</script>
