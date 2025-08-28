import React from 'react'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

const RecaptchaProvider = ({ children }) => {
  const recaptchaSiteKey = process.env.GATSBY_RECAPTCHA_SITE_KEY

  if (!recaptchaSiteKey) {
    console.warn('reCAPTCHA site key is not configured')
    return children
  }

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={recaptchaSiteKey}
      scriptProps={{
        async: false,
        defer: false,
        appendTo: 'head',
        nonce: undefined,
      }}
    >
      {children}
    </GoogleReCaptchaProvider>
  )
}

export default RecaptchaProvider