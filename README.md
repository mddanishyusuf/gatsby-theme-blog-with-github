# Gatsby Blog with GitHUb

This repo have demo and theme code in `packages/` folder and based on github issues system. So, you can write your blog post on github issues and gatsby will build site with these issues.

![Blog With GitHub issues](https://raw.githubusercontent.com/mddanishyusuf/gatsby-theme-blog-with-github/master/gatsby-theme-blog-with-github-preview.png)

See the [live demo](https://blog.mohddanish.me)

## Installation

To use this theme in your Gatsby sites, follow these instructions:

1.  Install the theme
    ```sh
    npm install --save gatsby-theme-blog-with-github
    ```

2.  Add the theme to your `gatsby-config.js`:
    ```js
    module.exports = {
      plugins: [
        resolve: "gatsby-theme-blog-with-github",
        options: {
          username: "mddanishyusuf",
          repositoryName: "blog-with-github-issues",
          siteMetadata: {
            title: `<website title>`,
            description: `<about yourself>`,
            author: ``,
            githubURL: `https://github.com/<username>`,
            social: [
              {
                name: `twitter`,
                url: `https://twitter.com/<username>`,
              },
              {
                name: `github`,
                url: `https://github.com/<username>`,
              },
            ]
          }
        }
      ]
    }
    ```

3.  Start your site
    ```sh
    gatsby develop
    ```