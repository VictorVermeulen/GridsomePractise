<template>
  <Layout>
    <h1 class="text-center">Jobs</h1>

    <v-container>
      <v-row dense>
        <v-col
          v-for="edge in $page.allContentfulVacature.edges"
          :key="edge.node.id"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <v-card hover :to="`/vacatures/${edge.node.slug}`">
            <v-card-title>{{ edge.node.title }}</v-card-title>

            <p class="ml-3"><v-icon>mdi-city</v-icon> {{ edge.node.plaats }}</p>
            <p class="ml-3">
              <v-icon>mdi-clock</v-icon>Hours per week: {{ edge.node.uren }}
            </p>
            <p class="ml-3">
              <v-icon>mdi-currency-eur</v-icon>Salary: {{ edge.node.salaris }}
            </p>
            <p class="ml-3">
              <v-icon>mdi-account-circle</v-icon>{{ edge.node.vastTijdelijk }}
            </p>

            <v-card-text
              >{{ edge.node.body.substring(0, 200) }} ...
            </v-card-text>

            <v-btn color="success" class="ma-4">More info</v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </Layout>
</template>

<page-query>
query {
  allContentfulVacature {
    edges{
      node{
        id
        title
        uren
        plaats
        salaris
        vastTijdelijk
        body
        slug
      }
    }
  }
}
</page-query>

<script>
export default {
  data() {
    return {
      quote: 'I want to be single quote',
    }
  },
}
</script>

<style scoped>
.icon {
  margin: 0 auto;
}
.makeup {
  white-space: pre-wrap;
}
</style>
