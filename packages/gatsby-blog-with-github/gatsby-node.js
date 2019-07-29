const getSlug = require('speakingurl')
const _ = require('lodash')

const BLOG_PAGE_SIZE = 16

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    const postTemplate = require.resolve('./src/templates/post.js')
    const postsTemplate = require.resolve('./src/templates/posts.js')

    return new Promise((resolve, reject) => {
        resolve(
            graphql(
                `
                    query {
                        blogPosts: allGithubIssue {
                            nodes {
                                title
                                body
                                created_at
                                id
                            }
                        }
                    }
                `
            ).then(result => {
                if (result.errors) {
                    reject(result.errors)
                }

                const chunks = _.chunk(result.data.blogPosts.nodes, BLOG_PAGE_SIZE)
                const TOTAL_OBJECT = result.data.blogPosts.nodes.length

                chunks.forEach((chunk, index) => {
                    if (index === 0) {
                        createPage({
                            path: `/`,
                            component: postsTemplate,
                            context: {
                                first: BLOG_PAGE_SIZE / 2,
                                skip: BLOG_PAGE_SIZE * index,
                                limit: BLOG_PAGE_SIZE,
                                pageNumber: index + 1,
                                hasNextPage: index !== chunks.length - 1,
                                hasPreviousPage: index !== 0,
                                total: TOTAL_OBJECT,
                            },
                        })
                    }
                    createPage({
                        path: `/page/${index + 1}`,
                        component: postsTemplate,
                        context: {
                            first: BLOG_PAGE_SIZE / 2,
                            skip: BLOG_PAGE_SIZE * index,
                            limit: BLOG_PAGE_SIZE,
                            pageNumber: index + 1,
                            hasNextPage: index !== chunks.length - 1,
                            hasPreviousPage: index !== 0,
                            total: TOTAL_OBJECT,
                        },
                    })
                })

                result.data.blogPosts.nodes.forEach(x => {
                    // loop over split pages
                    createPage({
                        path: `/${getSlug(x.title)}`,
                        component: postTemplate,
                        context: {
                            post_id: x.id,
                        },
                    })
                })
            })
        )
    })
}