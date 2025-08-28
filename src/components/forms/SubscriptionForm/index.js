import React from 'react'
// import { ExtLink } from "./atoms";
import MailchimpForm from "../MailchimpForm";
// import { Revue } from '../Revue'

const SubscriptionForm = () => {
  return (
    <div className='columns is-mobile'>
      <div className='column is-half is-offset-one-quarter'>
        <h2 className='title is-dark is-2'>Subscribe to our Newsletter.
        </h2>
        <p className='subtitle is-4'>
          Subscribe to receive more quality articles in your mailbox.
        </p>
          <MailchimpForm />
        <p className='sub__tag'>We will not send you Spam and you are free to unsubscribe at any time.</p>
      </div>
    </div>
  )
}

export { SubscriptionForm }
