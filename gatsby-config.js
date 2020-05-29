/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    '@msallent/gatsby-theme-skeleton-core',
    '@msallent/gatsby-theme-skeleton-seo',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
    'gatsby-transformer-sharp',
    'paths',
    'translation',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/assets`,
        name: 'assets',
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: [
            'Oxygen:n4,n5,n7',
          ],
          urls: [
            'https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap',
          ],
        },
      }
    }
  ],
};
