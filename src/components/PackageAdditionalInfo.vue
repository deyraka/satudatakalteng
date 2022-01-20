<template>
  <v-card flat>
    <v-subheader>Info Tentang Dataset ini</v-subheader>
    <v-list two-line>
      <template>
        <v-list-item>
          <v-list-item-avatar>
            <img :src="orgImg" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-html="orgName"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "PackageAdditionalInfo",
  props: {
    general: [],
    orgName: String,
    orgImg: String,
  },
};
</script>
