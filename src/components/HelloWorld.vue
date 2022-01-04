<template>
  <v-container fill-height class="mx-auto">
    <v-row class="text-center">
      <v-col cols="12">
        <!-- <span> -->
          <v-img
            :src="require('../assets/logo.svg')"
            class="my-3"
            contain
            height="50"
          />
          <h3>Satu Data Kalteng</h3>
        <!-- </span> -->
      </v-col>

      <v-col cols="6">
        <v-text-field
            label="Search"
            placeholder="Cari Data? Ketik disini aja!"
            solo
            rounded
          ></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    
  }),
};
</script>
