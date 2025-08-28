import React from 'react'
// import {
//  FacebookShareButton,
//  LinkedinShareButton,
//  TwitterShareButton,
//  TelegramShareButton,
//  RedditShareButton,
//  FacebookIcon,
//  TwitterIcon,
//  TelegramIcon,
//  LinkedinIcon,
//  RedditIcon,
// } from 'react-share'
import { SocialIcon } from 'react-social-icons'
import './styles.sass'

const SocialNetwork = (props) => {
  const { mobile, emaccount, ldaccount, twaccount, fbaccount, intaccount, tikaccount } = props
  // const realPrefix = pathPrefix === '/' ? '' : pathPrefix
  // const url = siteUrl + realPrefix + slug

  const heighticonSize = mobile ? 25 : 50
  const widhticonSize = mobile ? 25 : 50
  // FacebookShareCount,
  //  RedditShareCount,
  //
  // const filter = count => (count > 0 ? count : '')
  // <RedditShareCount url={url}>
  //        {count => <div className='share-count'>{filter(count)}</div>}
  // </RedditShareCount>
  // <FacebookShareCount url={url}>
  //        {count => <div className='share-count'>{filter(count)}</div>}
  // </FacebookShareCount>
  //   <RedditShareButton url={reddaccount}>
  //      <RedditIcon round size={iconSize} />
  //    </RedditShareButton>
  //    <TwitterShareButton url={twaccount}>
  //      <TwitterIcon round size={iconSize} />
  //    </TwitterShareButton>
  //    <FacebookShareButton url={fbaccount}>
  //      <FacebookIcon round size={iconSize} />
  //    </FacebookShareButton>
  //    <LinkedinShareButton
  //      url={ldaccount}
  //    >
  //      <LinkedinIcon round size={iconSize} />
  //    </LinkedinShareButton>
  //    <TelegramShareButton url={intaccount}>
  //      <TelegramIcon round size={iconSize} />
  //    </TelegramShareButton>

  return (
    <div className='social-links'>
      <SocialIcon 
        url={emaccount} 
        network='email' 
        style={{ height: heighticonSize, width: widhticonSize, transition: 'transform 0.3s ease, opacity 0.3s ease' }} 
        target='_blank' 
        rel='noopener noreferrer'
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.1)'
          e.target.style.opacity = '0.8'
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)'
          e.target.style.opacity = '1'
        }}
      />
      <SocialIcon 
        url={ldaccount} 
        network='linkedin' 
        style={{ height: heighticonSize, width: widhticonSize, transition: 'transform 0.3s ease, opacity 0.3s ease' }} 
        target='_blank'
        rel='noopener noreferrer' 
      />
      <SocialIcon 
        url={twaccount} 
        network='twitter'
        style={{ height: heighticonSize, width: widhticonSize, transition: 'transform 0.3s ease, opacity 0.3s ease' }} 
        target='_blank' 
        rel='noopener noreferrer' 
      />
      <SocialIcon
        url={fbaccount} 
        network='facebook' 
        style={{ height: heighticonSize, width: widhticonSize, transition: 'transform 0.3s ease, opacity 0.3s ease' }} 
        target='_blank' 
        rel='noopener noreferrer' 
      />
      <SocialIcon 
        url={intaccount} 
        network='instagram' 
        style={{ height: heighticonSize, width: widhticonSize, transition: 'transform 0.3s ease, opacity 0.3s ease' }} 
        target='_blank'
        rel='noopener noreferrer' 
      />
      <SocialIcon 
        url={tikaccount} 
        network='tiktok'
        style={{ height: heighticonSize, width: widhticonSize, transition: 'transform 0.3s ease, opacity 0.3s ease' }} 
        target='_blank'
        rel='noopener noreferrer' 
      />
    </div>
  )
}
// <SocialIcon url={twaccount} network='twitter' style={{ height: { heighticonSize }, width: { widhticonSize } }} />
// <SocialIcon url={ldaccount} network='linkedin' style={{ height: { heighticonSize }, width: { widhticonSize } }} />
// <SocialIcon url={intaccount} network='instagram' style={{ height: { heighticonSize }, width: { widhticonSize } }} />
// <SocialIcon url={reddaccount} network='reddit' style={{ height: { heighticonSize }, width: { widhticonSize } }} />
export default SocialNetwork
