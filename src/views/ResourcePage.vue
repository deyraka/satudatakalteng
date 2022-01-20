<template>
  <v-container>
    <!-- <template v-for="(item, index) in items"> -->
    <v-row>
      <v-col cols="12">
        <v-card flat>
          <v-col cols="12" class="text-h5">
            {{ idRes }}
          </v-col>
          <!-- <v-col cols="12" class="text-subtitle-1">
            <p class="text-caption mb-n1 font-italic">Deskripsi dataset :</p>
            {{ descriptionPackage }}
          </v-col>
          <v-col cols="12" class="text-caption font-italic mt-n2">
            <p>sumber : {{ sourcePackage }}</p>
          </v-col> -->
        </v-card>
      </v-col>
    </v-row>
    <!-- </template> -->
  </v-container>
</template>

<script>
// import axios from "axios";
export default {
  name: "PackageDetailsPage",
  props: {
    idRes: String,
  },
  data: () => ({
    items: [],
  }),

  mounted() {},
};
</script>
