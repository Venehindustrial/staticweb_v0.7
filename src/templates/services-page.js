import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import ServicesPageTemplate from '../components/ServicesPageTemplate'
import Layout from '../components/Layout'

const ServicesPage = (props) => {
  const { data: { markdownRemark: { frontmatter: { title, meta_title, meta_description, services } } } } = props

  return (
    <Layout>
      <ServicesPageTemplate
        title={title}
        meta_title={meta_title}
        meta_description={meta_description}
        services={services}
      />
    </Layout>
  )
}

ServicesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ServicesPage

export const servicesPageQuery = graphql`
    query ServicesPage($id: String!) {
      markdownRemark(id: { eq: $id }) {
        frontmatter {
          title
          meta_title
          meta_description
          services {
            heading
            description
            plans {
              description
              items
              plan
              price
            }
          }
        }
      }
    }
  `
