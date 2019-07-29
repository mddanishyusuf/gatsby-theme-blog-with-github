import React from 'react'
import { graphql } from 'gatsby'
import Markdown from 'markdown-to-jsx'
import moment from 'moment'

import Layout from '../components/layout'
import SEO from '../components/seo'

import './style/blog-post.scss'

const HyperLink = ({ children, ...props }) => (
    <a href={props.href} target="_blank" rel="noopener noreferrer">
        {children}
    </a>
)

function BlogPostPage({ data, pageContext }) {
    const blogPost = data.blogPost.edges[0].node
    const summary = blogPost.body.split(/\r?\n/)[0]
    return (
        <Layout>
            <SEO title={`${blogPost.title}`} description={summary} />
            <div className="post-container">
                <div className="post-header">
                    <div className="post-header-inner">
                        <div className="title">{blogPost.title}</div>
                        <div className="post-published">
                            {moment(blogPost.created_at).fromNow()} {' | '}
                            {`${blogPost.comments} comments`}
                            {/* {showReadingTime && getReadingTime(post.body)} */}
                        </div>
                    </div>
                </div>
                <div className="post-body">
                    <Markdown
                        className="body-markdown"
                        options={{
                            overrides: {
                                a: {
                                    component: HyperLink,
                                },
                            },
                        }}
                    >
                        {blogPost.body}
                    </Markdown>
                    <hr />
                    <h5>Thanks for reading...</h5>
                    <h5>Follow me at Twitter <a href="https://twitter.com/mddanishyusuf" target="_blank" without rel="noopener noreferrer">@mddanishyusuf</a></h5>
                </div>
            </div>
        </Layout>
    )
}

export default BlogPostPage

export const pageQuery = graphql`
    query BlogPostQuery($post_id: String) {
        blogPost: allGithubIssue(filter: { id: { eq: $post_id } }) {
            edges {
                node {
                    title
                    body
                    created_at
                    comments
                    number
                    user {
                        avatar_url
                        login
                    }
                }
            }
        }
    }
`
