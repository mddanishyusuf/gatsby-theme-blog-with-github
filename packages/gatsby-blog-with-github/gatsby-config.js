module.exports = ({username, repositoryName, siteMetadata}) => ({
  siteMetadata: siteMetadata,
  plugins: [
      {
        resolve: `gatsby-source-github-issue`,
        options: {
          owner: username,
          repo: repositoryName,
        },
      },
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-sass`,
      {
        resolve: `gatsby-plugin-prefetch-google-fonts`,
        options: {
          fonts: [
            {
              family: `Space Mono`,
              variants: [`400`, `700`]
            },
            {
              family: `Poppins`,
              variants: [`400`, `700`, `900`]
            },
            {
              family: `EB Garamond`,
              variants: [`500`, `600`, `700`]
            },
            {
              family: `Kaushan Script`,
              variants: [`400`]
            },
            {
              family: `Poppins`,
              variants: [`400`,`500`, `600`, `700`]
            }
          ],
        }
      }
    ]
})