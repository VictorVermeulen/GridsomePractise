<template>
  <Layout>
    <h1 class="text-center mb-3">Blog</h1>

    <div v-for="edge in $page.allContentfulBlogPost.edges" :key="edge.node.id">
      <v-card hover :to="`/blog/${edge.node.slug}`" class="pa-2 my-3">
        <h2>{{ edge.node.title }}</h2>
        <p>{{ edge.node.beschrijving }}</p>
      </v-card>
    </div>
  </Layout>
</template>

<page-query>
query {
  allContentfulBlogPost {
    edges{
      node{
        id
        slug
        title
        beschrijving
      }
    }
  }
}
</page-query>
