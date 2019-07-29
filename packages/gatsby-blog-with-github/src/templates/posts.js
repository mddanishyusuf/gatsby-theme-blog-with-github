import React from 'react'
import { Link, graphql } from 'gatsby'
import moment from 'moment'
import getSlug from 'speakingurl'
// import { Feather, User, Twitter, Archive } from 'react-feather'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { getReadingTime } from '../config/Functions'
import Pagination from '../components/pagination'

import './style/blog-posts.scss'

function BlogPage({ data, pageContext }) {
    console.log(pageContext)
    const blogPosts = data.blogPosts.nodes
    return (
        <Layout isHomepage={pageContext.pageNumber}>
            <SEO
                title="Mohd Danish"
            />
            <div className="posts-container">
                {blogPosts.map((item, index) =>
                    {
                        const summary = item.body.split(/\r?\n/)[0]
                        return (
                            <div className="blog-post-item" key={index}>
                                <div className="post-card">
                                    <div className="post-title">
                                        <Link to={`/${getSlug(item.title)}`}>{item.title}</Link>
                                    </div>
                                    <small className="post-date">
                                        {moment(item.created_at).fromNow()} {' | '}
                                        {getReadingTime(item.body)}
                                    </small>
                                    <div className="summary">
                                    <p>{summary}</p>
                                    </div>
                                    {/* <div className="post-summary">{item.body.substr(0, 200)} </div> */}
                                </div>
                            </div>
                        )
                    }
                )}
                <Pagination {...pageContext} />
            </div>
        </Layout>
    )
}

export default BlogPage

export const pageQuery = graphql`
    query BlogQuery($skip: Int, $limit: Int) {
        blogPosts: allGithubIssue(skip: $skip, limit: $limit) {
            nodes {
                title
                body
                created_at
                labels {
                    id
                    name
                }
            }
        }
    }
`
