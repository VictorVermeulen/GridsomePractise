<template>
  <Layout>
    <h1 class="text-center" v-html="$page.contentfulVacature.title" />
    <p><v-icon>mdi-city</v-icon> {{ $page.contentfulVacature.plaats }}</p>
    <p>
      <v-icon>mdi-clock</v-icon>Uren per week:
      {{ $page.contentfulVacature.uren }}
    </p>
    <p>
      <v-icon>mdi-currency-eur</v-icon>Salaris:
      {{ $page.contentfulVacature.salaris }}
    </p>
    <p>
      <v-icon>mdi-account-circle</v-icon
      >{{ $page.contentfulVacature.vastTijdelijk }}
    </p>
    <div v-html="$page.contentfulVacature.body" class="makeup"></div>
    <h2 class="mt-4">We ask</h2>
    <div v-html="$page.contentfulVacature.wijVragen" class="makeup"></div>
    <h2 class="mt-4">We offer</h2>
    <div v-html="$page.contentfulVacature.wijBieden" class="makeup"></div>
    <h2 class="mt-4">Interest?</h2>
    <p>
      Please contact me on +1298323574 or email me at 123@gmail.com
    </p>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  contentfulVacature (id: $id ) {
    title
    body
    wijVragen
    wijBieden
    uren
    plaats
    salaris
    vastTijdelijk
    }
  }

</page-query>

<script>
export default {}
</script>

<style scoped>
.makeup {
  white-space: pre-wrap;
}
</style>
