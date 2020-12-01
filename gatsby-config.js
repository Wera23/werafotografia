/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  rules: [
    // TODO:
    //
    // Define loaders for files test: /\.module\.scss$/ in common
    // here, we need only disable sourceMap for "css-loader"
    {
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            modules: true,
            sourceMap: false,
          },
        },
        "sass-loader",
        // Share SASS variables, mixins and functions with all .sass files
        {
          loader: "sass-resources-loader",
          options: {
            resources: path.resolve(__dirname, "src/assets/styles/sass-resources.scss"),
          },
        },
      ],
      test: /\.module\.scss$/,
    },
  ],
  /* Your site config here */
  plugins: [
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
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          camelCase: false,
        },
      },
    },
  ],
}
