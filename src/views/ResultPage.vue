<template>
    <v-container>
        <v-row class="text-center mb-6" justify="space-around">
            <v-col cols="12" sm=6 md=6 lg=6>
                <v-text-field
                    label="Pian handak mencari data? Ketik disini ja!"
                    placeholder="ketik nama data yang pian cari"
                    solo
                    rounded
                    prepend-inner-icon="mdi-magnify"
                    clear-icon="mdi-close-circle"
                    clearable
                    color="red"
                    :value="keyword"
                    >
                </v-text-field>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "ResultPage",
    props: ['keyword'],
}
</script>