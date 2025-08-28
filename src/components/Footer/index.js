import React from 'react'
import SocialNetwork from '../SocialNetwork'

const Footer = (props) => {
  const { copyright, emaccount, ldaccount, twaccount, fbaccount, intaccount, tikaccount } = props

  return (
    <footer className='footer'>
      <div className='container'>
        <div className='content has-text-centered'>
          <p>
            {copyright}
          </p>
          <p>Powered by <a target='_blank' rel='noopener noreferrer' href='https://www.venehsoftw.site'>VeneHsoftw</a> using <a target='_blank' rel='noopener noreferrer' href='https://www.gatsbyjs.com/'>Gatsby</a></p>
        </div>
        <div className='content has-text-centered'>
          <p>
            <SocialNetwork
              emaccount={emaccount}
              ldaccount={ldaccount}
              twaccount={twaccount}
              fbaccount={fbaccount}
              intaccount={intaccount}
              tikaccount={tikaccount}
            />
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
