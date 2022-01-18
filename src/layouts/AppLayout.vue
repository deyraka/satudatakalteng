<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app temporary>
      <!--  -->
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>
        <div class="d-flex ma-2">
          <v-img
            :src="require('../assets/satudatakalteng.png')"
            contain
            height="35"
            width="35"
          />
          <v-layout class="ml-3 text-h6" align-center
            >SATU DATA KALTENG</v-layout
          >
        </div>
      </v-toolbar-title>
    </v-app-bar>
    <v-main class="grey lighten-4">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "AppLayout",
  data: () => ({ drawer: null }),
};
</script>
