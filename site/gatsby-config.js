module.exports = {
    plugins: [
      {
        resolve: "gatsby-theme-blog-with-github",
        options: {
          username: "mddanishyusuf", // your github username - required
          repositoryName: "blog-with-github-issues", // github public repository name that you will use as a CMS - required
          metaData: {
            title: `Mohd Danish`, // website name - required
            description: `Hey 👋, I'm Mohd Danish Yusuf and I'm 26y old Front-end Engineer, I build s public-apis.xyz, dailyhack.xyz, apiwithgithub.com, dynamic-template.xyz, react-index.com & Open Source Developer, Tech Writer, Foodie 🍳`, // cover letter - required
            author: `@mddanishyusuf`, // author name
            githubURL: `https://github.com/mddanishyusuf`, // your github url for photo - required
            social: [
              {
                name: `twitter`,
                url: `https://twitter.com/mddanishyusuf`,
              },
              {
                name: `github`,
                url: `https://github.com/mddanishyusuf`,
              },
            ]
          }
        }
      }
    ]
};