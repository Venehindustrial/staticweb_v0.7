import React from 'react'
import Helmet from 'react-helmet'
import '../../assets/sass/styles.sass'
import config from '../../../config0'
import NavBar from '../NavBar'
import Popup from '../Popup'
import Footer from '../Footer'

// const [isOpen, setIsOpen] = useState(true)

// const togglePopup = () => {
//   setIsOpen(!isOpen)
// }

const Layout = (props) => {
  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: `en`,
          class: `has-navbar-fixed-top`,
        }}
        title={config.siteTitle}
        meta={[
          {
            name: `description`,
            content: config.siteDescription,
          },
          {
            name: `viewport`,
            content: `width=device-width, initial-scale=1`,
          },
          {
            name: `msapplication-TileColor`,
            content: config.themeColor,
          },
          {
            name: `theme-color`,
            content: config.themeColor,
          },
        ]}
        link={[
          {
            rel: `apple-touch-icon`,
            href: `/icons/apple-touch-icon.png`,
            sizes: `180x180`,
          },
          {
            rel: `icon`,
            type: `image/png`,
            href: `/favicon-32x32.png`,
            sizes: `32x32`,
          },
          {
            rel: `icon`,
            type: `image/png`,
            href: `/favicon-16x16.png`,
            sizes: `16x16`,
          },
          {
            rel: `mask-icon`,
            href: `/icons/safari-pinned-tab.svg`,
            color: config.themeColor,
          },
        ]}
      />
      <NavBar />
      <>{props.children}</>
      <Popup />
      <Footer copyright={config.copyright} emaccount={config.EmailAccount} ldaccount={config.LinkedInAccount} twaccount={config.TwitterAccount} fbaccount={config.FacebookAccount} intaccount={config.InstagramAccount} tikaccount={config.TiktokAccount} />
    </>
  )
}
// {isOpen && <Popup handleClose={togglePopup} />}

export default Layout
