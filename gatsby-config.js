module.exports = {
  siteMetadata: {
    title: `Anduin Web Development | Websites for growing businesses in professional sectors.`,
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
