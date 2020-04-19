<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-btn icon :to="$url('/')" title="Home">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-toolbar-title>{{ $static.metadata.siteName }}</v-toolbar-title>
      <v-spacer />

      <v-btn
        v-for="link in links"
        :key="`${link.label}-header-link`"
        text
        rounded
        :to="link.url"
      >
        {{ link.label }}
      </v-btn>
      <v-btn icon @click="toggleTheme" text rounded>
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container>
        <slot />
      </v-container>
    </v-content>

    <v-footer color="primary lighten-1" padless>
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in links"
          :key="`${link.label}-footer-link`"
          :to="link.url"
          color="white"
          text
          rounded
          class="my-2"
        >
          {{ link.label }}
        </v-btn>
        <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} —
          <strong>{{ $static.metadata.siteName }}</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<static-query>
  query {
    metadata {
      siteName
    }
  }
</static-query>

<script>
export default {
  data() {
    return {
      links: [
        {
          label: 'Vacatures',
          url: '/',
        },
        {
          label: 'Blog',
          url: '/blog',
        },
      ],
    }
  },
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
  },
}
</script>

<style>
div {
  font-family: 'Manrope';
}
</style>
