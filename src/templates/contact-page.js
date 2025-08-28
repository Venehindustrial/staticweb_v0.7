import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import RecaptchaProvider from '../components/RecaptchaProvider'
import Layout from '../components/Layout'
import ContactPageTemplate from '../components/ContactPageTemplate'

const ContactPage = (props) => {
  const { data: { markdownRemark: { frontmatter: { title, subtitle, meta_title, meta_description, directions, contact_email, contact_phone } } } } = props

  return (
    <RecaptchaProvider>
      <Layout>
        <ContactPageTemplate
          title={title}
          subtitle={subtitle}
          meta_title={meta_title}
          meta_description={meta_description}
          directions={directions}
          contact_email={contact_email}
          contact_phone={contact_phone}
        />
      </Layout>
    </RecaptchaProvider>
  )
}

ContactPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ContactPage

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        meta_title
        meta_description
        directions
        contact_email
        contact_phone
        heading
      }
    }
  }
`
