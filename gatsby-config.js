/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Wera Chodanionek Fotografia`,
    description: `Portfolio fotograficzne Wery Chodanionek`,
    author: `Wera Chodanionek`,
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 80,
        webQuality: 80,
        maxWidth: 1200,
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/about/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      loader: "sass-resources-loader",
      options: {
        cssLoaderOptions: {
          camelCase: false,
          resources: "./src/assets/styles/sass-resources.scss",
          // data: `@import "${__dirname}/src/styles/sass-resources.scss";`,
        },
      },
    },

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it.
        trackingId: "UA-82874229-1",
        // Optional parameter (default false) - Enable analytics in development mode.
        enableDevelopment: true, // default false
        // Optional parameter (default true) - Some countries (such as Germany) require you to use the _anonymizeIP function for Google Analytics. Otherwise you are not allowed to use it.
        anonymizeIP: true,
        head: true,
        anonymize: true,
        // Optional parameter (default false) - Starts google analytics with cookies enabled. In some countries (such as Germany) this is not allowed.
        autoStartWithCookiesEnabled: false,
        // Optional parameter - Configuration for react-ga and google analytics
        reactGaOptions: {
          debug: true,
          gaOptions: {
            sampleRate: 10,
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-react-css-modules`,
      options: {
        // *.css files are included by default.
        // To support another syntax (e.g. SCSS),
        // add `postcss-scss` to your project's devDependencies
        // and add the following option here:
        filetypes: {
          ".scss": { syntax: `postcss-scss` },
        },

        // Exclude global styles from the plugin using a RegExp:
        exclude: `\/global\/`,
        // For all the options check babel-plugin-react-css-modules README link provided above
      },
    },
  ],
}
