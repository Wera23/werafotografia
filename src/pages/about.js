import React from "react"
import styles from "./about.module.scss"
import { graphql } from "gatsby"

import Img from "gatsby-image"
import SEO from "../components/seo"
import Layout from "../components/layout"

const About = ({ data }) => {
  return (
    <>
      <SEO title={"Koty"} />
      <Layout>
        <div className={styles.about}>
          <Img
            fluid={data.portret1.childImageSharp.fluid}
            className={styles.aboutPhoto}
            alt=""
          />
          <div className={styles.aboutContent}>
            <div className={styles.aboutDescripion}>
              <p>
               Fotografia podróżnicza, reportażowa, portretowa, kocia, sportowa.
              </p>
            </div>

            <div className={styles.aboutContact}>
              <div className={styles.aboutContactInside}>
                <h3>Kontakt:</h3>
                <a href="mailto:werachodanionek@gmail.com">
                  werachodanionek@gmail.com
                </a>
                <a href="tel:+48666204224">+48 666 204 224</a>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default About

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const query = graphql`
  query {
    portret1: file(relativePath: { eq: "images/about/wera1.jpg" }) {
      ...fluidImage
    }
  }
`
