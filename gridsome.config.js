module.exports = {
  siteName: 'Job Agency',
  templates: {
    ContentfulBlogPost: '/blog/:slug',
    ContentfulVacature: '/vacatures/:slug',
    // Add templates for content types here.
    // Read more: https://gridsome.org/docs/templates/
  },
  plugins: [
    {
      use: '@gridsome/source-contentful',
      options: {
        space: process.env.CONTENTFUL_SPACE_ID, // required
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN, // required
        typeName: 'Contentful',
      },
    },
  ],
}
