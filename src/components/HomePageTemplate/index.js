import React from 'react'
import Helmet from 'react-helmet'
import Offerings from '../Offerings'
import Testimonials from '../Testimonials'
import { SubscriptionForm } from '../forms'
import Carousel from '../Carousel'
import '../Carousel/styles.css'
import ProgressiveImageContainer from '../ProgressiveImageContainer'
import PropTypes from 'prop-types'

const HomePageTemplate = (props) => {
  const { title, heading, description, offerings, meta_title, meta_description, testimonials } = props

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
                  <div>
                    <h3 className='has-text-weight-semibold is-size-2'>
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                  <Offerings gridItems={offerings.blurbs} />
                  <h2 className='has-text-weight-semibold is-size-2'>Testimonials</h2>
                  <Testimonials testimonials={testimonials} />
                  <h2 className='has-text-weight-semibold is-size-2'>Our business partners</h2>
                  <div>
                    <Carousel
                      show={3}
                      infiniteLoop
                      withIndicator
                    >
                      <div>
                        <div style={{ padding: 8 }}>
                          <ProgressiveImageContainer
                            image='/img/enersol.jpg'
                            alt='venehindustrial-business-enersol'
                            className='image-display'
                            style={{ width: '100%' }}
                          />
                        </div>
                      </div>
                      <div>
                        <div style={{ padding: 8 }}>
                          <ProgressiveImageContainer
                            image='/img/exertherm24x7_01.jpg'
                            alt='venehindustrial-business-exertherm'
                            className='image-display'
                            style={{ width: '100%' }}
                          />
                        </div>
                      </div>
                      <div>
                        <div style={{ padding: 8 }}>
                          <ProgressiveImageContainer
                            image='/img/powerside01.jpg'
                            alt='venehindustrial-business-powerside'
                            className='image-display'
                            style={{ width: '100%' }}
                          />
                        </div>
                      </div>
                      <div>
                        <div style={{ padding: 8 }}>
                          <ProgressiveImageContainer
                            image='/img/ohuiLighting02.jpg'
                            alt='venehindustrial-business-ohuiLighting'
                            style={{ width: '100%' }}
                          />
                        </div>
                      </div>
                      <div>
                        <div style={{ padding: 8 }}>
                          <ProgressiveImageContainer
                            image='/img/frako01.jpg'
                            alt='venehindustrial-business-frako'
                            className='image-display'
                            style={{ width: '100%' }}
                          />
                        </div>
                      </div>
                      <div>
                        <div style={{ padding: 8 }}>
                          <ProgressiveImageContainer
                            image='/img/Denso01.jpg'
                            alt='venehindustrial-business-denso'
                            className='image-display'
                            style={{ width: '100%' }}
                          />
                        </div>
                      </div>
                    </Carousel>
                  </div>
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
HomePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  offerings: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  testimonials: PropTypes.array,

}

export default HomePageTemplate
