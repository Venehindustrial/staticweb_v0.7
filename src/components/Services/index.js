import React from 'react'
import PropTypes from 'prop-types'

const Services = (props) => {
  const { data } = props

  return (
    <div className='columns is-multiline'>
      {data.map(service => (
        <div key={service.plan} className='column' style={{ border: '1px solid #eaecee' }}>
          <section className='section'>
            <h4 className='has-text-centered has-text-weight-semibold'>
              {service.plan}
            </h4>
            <h2 className='is-size-1 has-text-weight-bold has-text-primary has-text-centered'>
              {service.price}
            </h2>
            <p className='has-text-weight-semibold'>{service.description}</p>
            <ul>
              {service.items.map(item => (
                <li key={item} className='is-size-5'>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>
      ))}
    </div>
  )
}

Services.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      plan: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      description: PropTypes.string,
      items: PropTypes.array,
    }),
  ),
}

export default Services
