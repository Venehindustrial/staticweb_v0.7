//  import React, { useState } from 'react'
//  import { Formik, Field, useField } from 'formik'
//  import { navigate } from 'gatsby'
//  import validationSchema from './validationSchema'
//  import { GoogleReCaptchaProvider, GoogleReCaptcha } from 'react-google-recaptcha-v3'

//  const encode = (data) => {
//  return Object.keys(data)
//    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
//    .join('&')
// }

//  const MyCheckbox = ({ children, ...props }) => {
//  const [field, meta] = useField({ ...props, type: 'checkbox' })
//  return (
//    <>
//      <label className='checkbox'>
//        <input {...field} {...props} type='checkbox' />
//        {children}
//      </label>
//      {meta.touched && meta.error ? (
//        <div className='error'>{meta.error}</div>
//      ) : null}
//    </>
//    )
//  }

//  const ContactForm = () => {
//  const [token, setToken] = useState()

//  return (
  //    <Formik
  //      initialValues={{ firstName: '', lastName: '', email: '', message: '', acceptedTerms: false, acceptedContact: false }}
  //      validationSchema={validationSchema}
  //      onSubmit={(values, { setSubmitting }) => {
  //        fetch("/?no-cache=1", {                                 //eslint-disable-line
  //          method: 'POST',
  //          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  //          body: encode({
  //            // 'form-name': Event.target.getAttribute('name'),
  //            'g-recaptcha-response': token,
  //            ...values,
  //          }),
  //        })
  //          .then(() => {
  //            navigate('/contact/success')
  //            setSubmitting(false)
  //          })
  //          .catch(error => {
  //            console.log(error)
  //            alert("Error: Please Try Again!");                 //eslint-disable-line
  //            setSubmitting(false)
  //          })
  //      }}
  //      render={({
  //        errors,
  //        touched,
  //        isSubmitting,
  //        handleSubmit,
  //        handleReset,
  //      }) => (<GoogleReCaptchaProvider reCaptchaKey='6LfSJOoUAAAAACo5FptLy5inFhJmhIPF9E9ekwsN'>
  //        <form
  //          name='contact'
  //          onSubmit={handleSubmit}
  //          onReset={handleReset}
  //          netlify='true'
  //          // data-netlify='true'
  //          data-netlify-honeypot='bot-field'
  //          data-netlify-recaptcha='true'
  //        >
  //          <div className='field'>
  //            <div className='control'>
  //              <Field className='input' type='hidden' name='form-name' id='form-name' value='contact' />
  //            </div>
  //          </div>
  //
  //          <div className='field'>
  //            <div className='control is-invisible'>
  //              <Field className='input' type='text' name='bot-field' id='bot-field' />
  //            </div>
  //          </div>
  //
  //          <div className='field is-horizontal'>
  //            <div className='field-body'>
  //              <div className='field'>
  //                <label className='label'>First Name</label>
  //                <div className='control'>
  //                  <Field className='input' type='text' placeholder='First Name' name='firstName' id='firstName' />
  //                </div>
  //                {touched.firstName && errors.firstName && <small className='has-text-danger'>{errors.firstName}</small>}
  //              </div>
  //
  //              <div className='field'>
  //                <label className='label'>Last Name</label>
  //                <div className='control'>
  //                  <Field className='input' type='text' placeholder='Last Name' name='lastName' id='lastName' />
  //                </div>
  //                {touched.lastName && errors.lastName && <small className='has-text-danger'>{errors.lastName}</small>}
  //              </div>
  //            </div>
  //          </div>
  //
  //          <div className='field'>
  //            <label className='label'>Email</label>
  //            <div className='control'>
  //              <Field className='input' type='email' placeholder='Email' name='email' id='email' />
  //            </div>
  //            {touched.email && errors.email && <small className='has-text-danger'>{errors.email}</small>}
  //          </div>
  //
  //          <div className='field'>
  //            <label className='label'>Message</label>
  //            <div className='control'>
  //              <Field className='textarea' component='textarea' placeholder='Message' name='message' id='message' rows='6' />
  //            </div>
  //            {touched.message && errors.message && <small className='has-text-danger'>{errors.message}</small>}
  //          </div>
  //
  //          <div className='field'>
  //            <div className='control'>
  //              <MyCheckbox name='acceptedTerms'>
  //                &nbsp;&nbsp;I accept the <a href='https://www.iubenda.com/privacy-policy/67983109' target='_blank' rel='noreferrer'>terms and conditions</a>
  //              </MyCheckbox>
  //            </div>
  //          </div>
  //
  //          <div className='field'>
  //            <div className='control'>
  //              <MyCheckbox name='acceptedContact'>
  //                &nbsp;&nbsp;I agree that VeneHindustrial may contact me regarding products and services provided by them.
  //              </MyCheckbox>
  //            </div>
  //          </div>
  //
  //          <div className='field is-grouped is-pulled-right'>
  //            <div className='control'>
  //              <button className='button' type='reset'>Reset</button>
  //            </div>
  //            <div className='control'>
  //              <button className='button is-primary' type='submit' disabled={isSubmitting}>Submit</button>
  //            </div>
  //          </div>
  //
  //          <GoogleReCaptcha
  //            onVerify={token => {
  //              setToken(token)
  //            }}
  //          />
  //        </form>
//    <GoogleReCaptchaProvider
//      reCaptchaKey='6LcXzbkcAAAAAInwGGprWnapc9WDKDiyxSSE4cnR'
//      scriptProps={{
//        async: true,
//        appendTo: 'head',
//      }}
//    >
//      <div id='ff-compose'>
//        <script async defer src='https://formfacade.com/include/103480858364088919435/form/1FAIpQLScnbxIQzEkLilS0dNatqwnWv2LOVMx9asREF9xJEh1i_fIpJQ/classic.js?div=ff-compose' />
//      </div>
//      <GoogleReCaptcha
//        onVerify={token => {
//          setToken(token)
//        }}
//      />
//    </GoogleReCaptchaProvider>// )}
  //    />
//  )
//}
// export { ContactForm }
import React, { useState } from 'react'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'

const ContactForm = () => {
  const { executeRecaptcha } = useGoogleReCaptcha()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState({ type: '', message: '' })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus({ type: '', message: '' })

    if (!executeRecaptcha) {
      setStatus({
        type: 'error',
        message: 'reCAPTCHA not loaded. Please refresh and try again.'
      })
      setIsLoading(false)
      return
    }

    try {
      // Execute reCAPTCHA with action
      const token = await executeRecaptcha('contact_form_submit')

      // Option 1: Send to Netlify Forms (if using Netlify)
      const formDataToSend = new FormData()
      formDataToSend.append('form-name', 'contact')
      formDataToSend.append('name', formData.name)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('subject', formData.subject)
      formDataToSend.append('message', formData.message)
      formDataToSend.append('g-recaptcha-response', token)

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataToSend).toString()
      })

      // Option 2: Send to your custom API endpoint
      /*
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken: token
        })
      })
      */

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully.'
        })
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus({
          type: 'error',
          message: 'Failed to send message. Please try again.'
        })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setStatus({
        type: 'error',
        message: 'An error occurred. Please try again later.'
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="contact-form">
      <div className="container">
        <h2>Contact Us</h2>
        
        {/* Form for Netlify Forms detection */}
        <form name="contact" onSubmit={handleSubmit} netlify netlify-recaptcha>
          <div className="field">
            <label htmlFor="name" className="label">Name *</label>
            <div className="control">
              <input 
                type="text" 
                name="name"
                className="input"
                value={formData.name}
                onChange={handleInputChange}
                required
                disabled={isLoading} 
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="email" className="label">Email *</label>
            <div className="control">
              <input 
                type="email" 
                name="email" 
                id="email"
                className="input"
                value={formData.email}
                onChange={handleInputChange}
                disabled={isLoading}
                required/>
            </div>
          </div>

          <div className="field">
            <label htmlFor="subject" className="label">Subject</label>
            <div className="control">
              <input 
                type="text" 
                name="subject"
                id="subject"
                className="input"
                value={formData.subject}
                onChange={handleInputChange}
                disabled={isLoading} 
              /> 
            </div>
          </div>

          <div className="field">
            <label htmlFor="message" className="label">Message *</label>
            <div className="control">
              <textarea 
                name="message"
                className="textarea"
                value={formData.message}
                onChange={handleInputChange}
                rows="6"
                required
                disabled={isLoading} 
              />
            </div>
          </div>
        {/* </form> */}

        {/* Actual form
        
        <form onSubmit={handleSubmit} className="contact-form-fields">
          <div className="field">
            <label htmlFor="name" className="label">Name *</label>
            <div className="control">
              <input
                type="text"
                id="name"
                name="name"
                className="input"
                value={formData.name}
                onChange={handleInputChange}
                required
                disabled={isLoading}
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="email" className="label">Email *</label>
            <div className="control">
              <input
                type="email"
                id="email"
                name="email"
                className="input"
                value={formData.email}
                onChange={handleInputChange}
                required
                disabled={isLoading}
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="subject" className="label">Subject</label>
            <div className="control">
              <input
                type="text"
                id="subject"
                name="subject"
                className="input"
                value={formData.subject}
                onChange={handleInputChange}
                disabled={isLoading}
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="message" className="label">Message *</label>
            <div className="control">
              <textarea
                id="message"
                name="message"
                className="textarea"
                value={formData.message}
                onChange={handleInputChange}
                rows="6"
                required
                disabled={isLoading}
              />
            </div>
          </div>
          */}

          <div className="field">
            <div className="control">
              <button 
                type="submit" 
                className={`button is-primary ${isLoading ? 'is-loading' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </div>
        </form>

        {status.message && (
          <div className={`notification ${status.type === 'success' ? 'is-success' : 'is-danger'}`}>
            {status.message}
          </div>
        )}

        <p className="recaptcha-notice has-text-grey is-size-7">
          This site is protected by reCAPTCHA and the Google{' '}
          <a 
            href="https://policies.google.com/privacy" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>{' '}
          and{' '}
          <a 
            href="https://policies.google.com/terms" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Terms of Service
          </a>{' '}
          apply.
        </p>
      </div>
    </div>
  )
}

export { ContactForm }