import React, { useState, useEffect } from 'react'
import { useLocation } from '@reach/router' // this helps tracking the location
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies'
import './styles.sass'
// Basic
// import CookieConsent from "react-cookie-consent";
// Option
import CookieConsent, { Cookies } from 'react-cookie-consent'

// const [isopen, setIsopen] = useState('False')

// useEffect(() => {
//  const handleWindowClose = () => setIsopen(false)

//  if (isopen) {
//    window.addEventListener('close', handleWindowClose)
//  } else {
//    window.removeEventListener('close', handleWindowClose)
//  }
//  return () => window.removeEventListener('close', handleWindowClose)
// }, [isopen, setIsopen])

const Popup = () => {
  const [IsOpen, setIsOpen] = useState(true)
  const locationb = useLocation()

  useEffect(() => {
    const handleWindowClose = () => window.close

    if (IsOpen) {
      window.addEventListener('Click', handleWindowClose)
    } else {
      window.removeEventListener('Click', handleWindowClose)
    }
    return () => window.removeEventListener('Click', handleWindowClose)
  }, [IsOpen, setIsOpen])

  // function useLocationInitialize () {
  //  const locationb = useLocation()
  //  initializeAndTrack(locationb)
  // }
  // const handleOnAccept = event => {
  //  const { value } = event.target
  //  Cookies.set('gatsby-gdpr-google-analytics', 'true')
  //  Cookies.set('gatsby-gdpr-facebook-pixel', 'true')
  //  Cookies.set('gatsby-gdpr-google-tagmanager', 'true')
  // }
  // const handleOnDecline = event => {
  //  const { value } = event.target
  //  Cookies.set('gatsby-gdpr-google-analytics', 'false')
  //  Cookies.set('gatsby-gdpr-facebook-pixel', 'false')
  //  Cookies.set('gatsby-gdpr-google-tagmanager', 'false')
  // }

  return (
    <div className='popup'>
      {/* Basic */}
      {/* <CookieConsent>
        This website uses cookies to enhance the user experience.
      </CookieConsent> */}

      {/* option */}
      <CookieConsent
        hideOnAccept
        onAccept={() => {
          // alert('Accept was triggered by clicking the Accept button')
          // console.log('Accept was triggered by clicking the Accept button')
          Cookies.set('gatsby-gdpr-google-analytics', 'true')
          Cookies.set('gatsby-gdpr-facebook-pixel', 'true')
          Cookies.set('gatsby-gdpr-google-tagmanager', 'true')
          // handleOnAccept()
          initializeAndTrack(locationb)
          setIsOpen(false)
        }}
        enableDeclineButton
        declineButtonText='Decline'
        onDecline={() => {
          // alert("Accept was triggered by clicking the Decline button")
          // console.log('Accept was triggered by clicking the Decline button')
          Cookies.set('gatsby-gdpr-google-analytics', 'false')
          Cookies.set('gatsby-gdpr-facebook-pixel', 'false')
          Cookies.set('gatsby-gdpr-google-tagmanager', 'false')
          // handleOnDecline()
          initializeAndTrack(locationb)
          setIsOpen(false)
        }}
        flipButtons
        disableStyles
        location='none'
        cookieName='CookieConsentVeneHind'
        buttonText='Accept All Cookies'
        buttonClasses='btn btn-primary'
        contentClasses='text-capitalize'
        overlay
        overlayClasses='overlayclass'
        expires={90}>
        By clicking “Accept All Cookies”, you agree to the storing of cookies on your device to enhance site
        navigation, analyze site usage, and assist in our marketing efforts.
        <span style={{ fontSize: '15px' }}>You can find our privacy policy <a target='_blank' rel='noopener noreferrer' href='https://www.iubenda.com/privacy-policy/67983109'>Click here</a></span>
      </CookieConsent>
    </div>
  )
}

export default Popup
