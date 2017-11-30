module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    url: 'https://anduin.io',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-110166367-1',
        anonymize: true,
      },
    },
  ],
};
