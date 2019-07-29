/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children, isHomepage }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          githubURL
          social {
            name
            url
          }
        }
      }
    }
  `)

  return (
    <>
      <Header siteMetaData={data.site.siteMetadata} isHomepage={isHomepage} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 800,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
          backgroundColor: 'var(--bg)',
          color: 'var(--textNormal)'
        }}
      >
        <main>{children}</main>
        {/* <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
