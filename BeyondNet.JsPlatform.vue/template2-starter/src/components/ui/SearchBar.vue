<template>
    <v-form>
        <v-container>
            <v-row>
                <v-col cols="12">
                    <v-text-field v-model="input" outlined clearable label="Search" type="text" @input="onInput">
                        <template v-slot:append>
                            <v-fade-transition leave-absolute>
                                <v-progress-circular
                                    v-if="loading"
                                    size="24"
                                    color="info"
                                    indeterminate
                                ></v-progress-circular>
                                <img
                                    v-else
                                    width="24"
                                    height="24"
                                    src="https://cdn.vuetifyjs.com/images/logos/v-alt.svg"
                                    alt=""
                                />
                            </v-fade-transition>
                        </template>
                    </v-text-field>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'SearchBar',
    methods: {
        onInput: function (event: InputEvent) {
            this.$emit('termChange', event);
        },
    },
    data: () => ({
        input: '',
        loading: false,
    }),
});
</script>
