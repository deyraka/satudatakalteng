<template>
  <v-container>
    <v-snackbar v-model="snackbar" absolute color="red">
      <span>Masukkan kata Kunci pencarian dulu!</span>
      <v-icon dark> mdi-checkbox-marked-circle </v-icon>
    </v-snackbar>
    <v-form ref="form" @submit.prevent="submit">
      <!-- <v-container fill-height class="mx-auto"> -->
      <v-container fill-height class="mx-auto">
        <v-row class="text-center mb-6" justify="space-around">
          <v-col cols="12">
            <!-- <span> -->
            <v-img
              :src="require('../assets/satudatakalteng.png')"
              class="my-3"
              contain
              height="100"
            />
            <h3>SATU DATA KALTENG</h3>
            <!-- </span> -->
          </v-col>
          <v-col cols="12" sm="6" md="6" lg="6">
            <v-text-field
              v-model="form.search"
              label="Pian handak mencari data? Ketik disini ja!"
              placeholder="ketik nama data yang pian cari"
              solo
              rounded
              prepend-inner-icon="mdi-magnify"
              clear-icon="mdi-close-circle"
              clearable
              color="red"
              flat
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <p>atau</p>
            <!-- <v-btn
              class="text-capitalize"
              depressed
              color="error"
              
            >
              Lihat etalase data kami
            </v-btn> -->
          </v-col>
          <v-col cols="12">
            <v-btn color="primary">
              <v-img
                :src="require('../assets/heart.gif')"
                height="25"
                contain
              />
              cek all data
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
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
        window.location.href = "/result-page/s=" + this.form.search;
        this.resetForm();
      } else {
        this.snackbar = true;
      }
    },
  },
};
</script>
