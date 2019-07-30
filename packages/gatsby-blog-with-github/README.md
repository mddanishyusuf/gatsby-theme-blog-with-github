<h1 align="center">
  Gatsby + GitHub issues system = Blog
</h1>

<h3 align="center">
  DEMO
</h3>
<p align="center">
  <a href="https://apiwithgithub.com" target="_blank">https://blog.mohddanish.me</a><br/>
<br/>
 I build this gatsby theme plugin for themejam.gatsbyjs.org and now I'm using as my personal blog. I'm using github issues system as a CMS. where I write my blog post and gatsby get the data from github source and build static pages and it's so fast.
</p>

<a href="https://apiwithgithub.com" target="_blank"><img src="https://raw.githubusercontent.com/mddanishyusuf/gatsby-theme-blog-with-github/master/gatsby-theme-blog-with-github-preview.png"/></a>


## Steps:

- [Setup GitHub Repository as CMS](#-setup-github-repository-as-cms)
- [Setup Gatsby Project & add Plugin](#-setup-gatsby-project-&-add-plugin)

<br/>

## Setup GitHub Repository as CMS

This the cool hack to use GitHub issues system as a Content Management System(aka CMS) for your blog and you can use this in many ways.

 1. `Make a public GitHub repository with README.md file`
 2. `Go to issues tab`
 3. `Make new issue as a new blog post`
 4. `Submit issue`

So, now you can easily write blog post in markdown style.

## ✍ Setup Gatsby Project & add plugin

1. `mkdir <my-blog>`
2. `cd <my-blog>`
3. `yarn init -y`
4. `yarn add react react-dom gatsby`
5. `yarn add gatsby-theme-blog-with-github`

Now you have to add some script to config the github issues as CMS into gatsby. `make file **gatsby-config.js**` in to root directory. and paste this code.

    module.exports = {
        plugins: [{
            resolve: "gatsby-theme-blog-with-github",
            options: {
	            // your github username - required
                username: "",
                
				// github public repository name that you will use as a CMS - required
                repositoryName: "",
                
                metaData: {
	                // website name - required
                    title: ``,
                    
					// cover letter - required
                    description: ``,

					// author name
                    author: ``, 

					// your github url for photo - required
                    githubURL: ``, 
                    social: [{
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
        }]
    };


Now run the command `gatsby develop` 



## 🤝 ToDo

 - [ ] Dark Theme
 - [ ] Component Shadowing

Mohd Danish `<https://twitter.com/mddanishyusuf>`
