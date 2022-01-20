<template>
  <v-container>
    <!-- <template v-for="(item, index) in items"> -->
    <v-row v-for="(item, index) in items" :key="index">
      <v-col cols="12">
        <v-card flat>
          <v-col cols="12" class="text-h5">
            {{ item.packages.result.title }}
          </v-col>
          <v-col cols="12" class="text-subtitle-1">
            <p class="text-caption mb-n1 font-italic">Deskripsi dataset :</p>
            {{ item.packages.result.notes }}
          </v-col>
          <v-col cols="12" class="text-caption font-italic mt-n2">
            <p>sumber : {{ item.packages.result.organization.title }}</p>
          </v-col>
        </v-card>
      </v-col>
      <v-col cols="12">
        <resource-list :resources="item.resources"></resource-list>
      </v-col>
      <v-col cols="12">
        <package-additional-info
          :general="item.packages"
          :org-name="item.packages.result.organization.title"
          :org-img="item.packages.result.organization.image_url"
        ></package-additional-info>
      </v-col>
    </v-row>
    <!-- </template> -->
  </v-container>
</template>

<script>
import axios from "axios";
import ResourceList from "@/components/ResourceList";
import PackageAdditionalInfo from "@/components/PackageAdditionalInfo";

export default {
  components: {
    ResourceList,
    PackageAdditionalInfo,
  },
  name: "PackageDetailsPage",
  props: ["fk"],
  data: () => ({
    tab: null,
    tabItems: ["Tabel", "Grafik", "Peta"],
    items: [],
    resources: [],
  }),

  mounted() {
    axios
      .get(
        "https://ckan62.bpskalteng.web.id/api/3/action/package_show?id=" +
          this.fk +
          "&include_tracking=True"
      )
      .then((response) => {
        // this.items = response.data
        // this.resources = response.data.result.resources
        // console.log(this.resources)
        const tempArray = {
          packages: response.data,
          resources: response.data.result.resources,
        };
        this.items.push(tempArray);
        console.log(this.items);
      })
      .catch((errors) => {
        console.log(errors);
      });
  },
};
</script>
