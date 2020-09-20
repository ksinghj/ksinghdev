import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import Content, { HTMLContent } from '../components/Content'

export const IndexPageTemplate = ({ title, description, intro, html }) => (
  <div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{description}</h3>
                  </div>
                </div>

                <HTMLContent content={html} />

                <Features gridItems={intro.blurbs} />

                {
                  //   <div className="columns">
                  //   <div className="column is-12 has-text-centered">
                  //     <Link className="btn" to="/products">
                  //       See all products
                  //     </Link>
                  //   </div>
                  // </div>
                }
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">Latest stories</h3>

                  <BlogRoll />

                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate title={frontmatter.title} description={frontmatter.description} intro={frontmatter.intro} html={html} />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
        }
      }
      html
    }
  }
`
