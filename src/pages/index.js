import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import CardGrid from '../components/CardGrid'
import BlogRoll from '../components/BlogRoll'

// content
import { cards } from '../content/index-page/index'

const IndexPage = () => {
  return (
    <Layout>
      <div>
        <section className="section section--gradient">
          <div className="container">
            <div className="section">
              <div className="columns">
                <div className="column is-10 is-offset-1">
                  <div className="content">
                    <div className="content">
                      <div className="tile">
                        <h1 className="title">Welcome 😎️ I’m Kartar and this is my website.</h1>
                      </div>
                      <div className="tile">
                        <p>
                          Hi, so you have found my website. It’s still a work in progress but here you are anyway. Take a look around, I’m still
                          getting set up but there should be a few blog posts already. Hopefully you get a feel for what this is and why I’m doing it.
                        </p>
                      </div>
                      <p className="mt-4">Be sure to check back soon!</p>
                    </div>

                    <CardGrid gridItems={cards} />

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
    </Layout>
  )
}

export default IndexPage
