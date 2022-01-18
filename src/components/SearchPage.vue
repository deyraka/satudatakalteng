<template>
  <v-container fill-height align-center>
    <v-row class="text-center" justify="center" align="center">
      <div class="d-flex ma-2">
        <v-img
          :src="require('../assets/satudatakalteng.png')"
          contain
          height="70"
          width="70"
        />
        <v-layout class="ml-3 text-h5" align-center>SATU DATA KALTENG</v-layout>
      </div>
    </v-row>
    <v-row class="text-center mt-n16" justify="center">
      <v-col>
        <v-form ref="form" @submit.prevent="submit">
          <v-row justify="center">
            <!-- <v-col cols="12">
                <v-img
                  :src="require('../assets/satudatakalteng.png')"
                  class="my-3"
                  contain
                  height="100"
                  width="100"
                />
                <h3>SATU DATA KALTENG</h3>
              </v-col> -->
            <v-col cols="12" sm="6" md="6">
              <v-text-field
                v-model="form.search"
                label="Pian handak mencari data? Ketik disini ja!"
                placeholder="ketik nama data yang pian cari"
                solo-inverted
                rounded
                prepend-inner-icon="mdi-magnify"
                clear-icon="mdi-close-circle"
                clearable
                color="orange"
                flat
              ></v-text-field>
            </v-col>
          </v-row>
        </v-form>
        <v-snackbar v-model="snackbar" absolute color="red" timeout="2000">
          <span>Masukkan kata kunci pencarian dulu! </span>
          <template v-slot:action="{ attrs }">
            <v-btn color="white" icon v-bind="attrs" @click="snackbar = false">
              <v-icon>mdi-close-circle</v-icon>
            </v-btn>
          </template>
        </v-snackbar>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "SearchPage",

  data() {
    const defaultForm = Object.freeze({
      search: "",
    });

    return {
      form: Object.assign({}, defaultForm),
      snackbar: false,
      defaultForm,
    };
  },

  computed: {
    formIsValid() {
      return this.form.search;
    },
  },

  methods: {
    resetForm() {
      this.form = Object.assign({}, this.defaultForm);
      this.$refs.form.reset();
    },
    submit() {
      // this.snackbar = true,
      // alert(this.form.search + " is suksess")
      if (this.form.search.length > 0) {
        window.location.href = "/catalog/result-page/s=" + this.form.search;
        this.resetForm();
      } else {
        this.snackbar = true;
      }
    },
  },
};
</script>
