<template>
  <Layout>
    <h1 class="text-center">{{ $page.contentfulBlogPost.title }}</h1>
    <div
      elevation="4"
      v-html="richtextToHTML($page.contentfulBlogPost.richArticle)"
    ></div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  contentfulBlogPost (id: $id ) {
    title
    richArticle
    }
  }

</page-query>

<script>
import { BLOCKS } from '@contentful/rich-text-types'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

export default {
  methods: {
    richtextToHTML(content) {
      return documentToHtmlString(content, {
        renderNode: {
          [BLOCKS.EMBEDDED_ASSET]: (node) => {
            return `<img width="200" height="200" quality="70" src="${node.data.target.fields.file.url}" alt="${node.data.target.fields.title}" />`
          },
        },
      })
    },
  },
}
</script>

<style scoped></style>
