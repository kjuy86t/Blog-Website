import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from "gatsby-link";
import Header from '../components/header'
import './index.css'
const ListLink = props =>
    <li style={{ display: `inline-block`, marginRight: `1rem`, color: 'white', }}>
        <Link to={props.to}>
            {props.children}
        </Link>
    </li>

const Layout = ({ children, data }) => (
    <div>
        <Helmet style="background-color:powderblue;"
             
            title={data.site.siteMetadata.title}
            meta={[
                { name: 'description', content: "Ryan Hoffmann's blog" },
                { name: 'keywords', content: "Ryan Hoffmann's blog" },
            ]}
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        <header style={{ marginBottom: `3rem`, color: 'white', ListLink: 'white', Link: 'white', }}>
           
            <ul style={{ listStyle: `none`, float: `left`, background: 'white', color: 'white', ListLink: 'white', Link: 'white', width: '100%', marginLeft: `0rem`, }}>
                
                <ListLink to="/">Home</ ListLink>
                <ListLink to="/intro-post/">About</ListLink>
                    <ListLink to="/contact/">Contact</ListLink>
                
            </ul>
        </header>
        <div
            style={{
                margin: '0 auto',
                maxWidth: 960,
                padding: '0px 1.0875rem 1.45rem',
                paddingTop: 0,
                background: '#57c3c5',
                border: '8px solid #f38e72',
                
       
}}

>
 
            {children()}
        </div>
        <footer>
            <footer style={{ marginBottom: `10rem`, position: 'absolute'}}/>
            <ul style={{ listStyle: `none`, float: `center` }}>
                <p>
                    <center>

                <a href="https://github.com/hoffay">
                    <img border="0" alt="W3Schools" src="https://i.ytimg.com/vi/OEGm7LXAN_c/maxresdefault.jpg" width="160" height="90">
                    </img>
                        </a>
                    </center>
            </p>
            </ul>

        </footer>
    </div>
)

Layout.propTypes = {
    children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`