import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import {getIcon} from '../config/Functions'

import './header.scss'

const Header = ({ siteMetaData, isHomepage }) => (
  <header>
    <div className="navbar">
    <Link to="/"><h1>{siteMetaData.title}</h1></Link>
    <div className="social">
        <ul>
          {siteMetaData.social.map((item, key)=> {
            return (
              <li key={key}><a href={item.url} target="_blank" without rel="noopener noreferrer">{getIcon(item.name)} <span>{item.name}</span></a></li>
            )
          })}
          </ul>
      </div>
    </div>
    {isHomepage === 1 && <div className="about-me">
      <div className="inner-about-me">
      <div className="picture"><img src="https://github.com/mddanishyusuf.png" width="120" alt="Mohd Danish"/></div>
      <div className="decription"><p>{siteMetaData.description}</p></div>
    </div></div>}
    
    
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
