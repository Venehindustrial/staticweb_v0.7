import React from 'react'
import Helmet from 'react-helmet'
import Services from '../Services'
import { SubscriptionForm } from '../forms'
import PropTypes from 'prop-types'

const ServicesPageTemplate = (props) => {
  const { title, meta_title, meta_description, services } = props

  return (
    <div>
      <Helmet>
        <title>{meta_title}</title>
        <meta name='description' content={meta_description} />
      </Helmet>
      <section className='hero is-primary is-bold is-medium'>
        <div className='hero-body'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='section'>
                  <h1 className='title'>
                    {title}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section section--gradient'>
        <div className='container'>
          <div className='section'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='content'>
                  <h2 className='has-text-weight-semibold is-size-2'>
                    {services.heading}
                  </h2>
                  <p className='is-size-5'>{services.description}</p>
                  <Services data={services.plans} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section'>
        <div className='container'>
          <SubscriptionForm />
        </div>
      </section>
    </div>
  )
}
ServicesPageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  services: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
}

export default ServicesPageTemplate
