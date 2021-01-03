import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
// import { withPrefix } from 'gatsby'

// favicons
import appleTouch from '../../static/img/apple-touch-icon.png'
import thirtyTwo from '../../static/img/favicon-32x32.png'
import sixteen from '../../static/img/favicon-16x16.png'
import safariPinned from '../../static/img/safari-pinned-tab.svg'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="apple-touch-icon" sizes="180x180" href={appleTouch} />
        <link rel="icon" type="image/png" sizes="32x32" href={thirtyTwo} />
        <link rel="icon" type="image/png" sizes="16x16" href={sixteen} />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href={safariPinned} color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
      </Helmet>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
