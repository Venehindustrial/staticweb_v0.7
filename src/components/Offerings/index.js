import React from 'react'
import PropTypes from 'prop-types'
import ProgressiveImageContainer from '../ProgressiveImageContainer'

const Offerings = (props) => {
  const { gridItems } = props
  return (
    <div className='columns is-multiline'>
      {gridItems.map((item, idx) => (
        <div key={idx} className='column is-6' style={{ borderRadius: '5px' }}>
          <section className='section'>
            <p className='has-text-centered'>
              <ProgressiveImageContainer
                image={item.image}
                alt={`venehindustrial-business-${idx}`}
              />
            </p>
            <p>{item.text}</p>
          </section>
        </div>
      ))}
    </div>
  )
}
Offerings.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      // image: PropTypes.any,  // Accept any type
      image: PropTypes.oneOfType([
        PropTypes.string,           // For regular image URLs
        PropTypes.shape({           // Gatsby processed image
          childImageSharp: PropTypes.shape({
            gatsbyImageData: PropTypes.object,
            fluid: PropTypes.object,
            fixed: PropTypes.object,
          }),
          publicURL: PropTypes.string,
          relativePath: PropTypes.string,
          name: PropTypes.string,
        }),
        PropTypes.shape({           // Simple file object
          publicURL: PropTypes.string,
          relativePath: PropTypes.string,
        })
      ]).isRequired,
      text: PropTypes.string,
    }),
  ),
}

export default Offerings
