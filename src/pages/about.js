import React from "react"
import styles from "./About.module.scss"
import { graphql } from "gatsby"

import Img from "gatsby-image"
import SEO from "../components/seo"
import Layout from "../components/layout"

const About = ({ data }) => {
  return (
    <>
      <SEO title={"Wera Chodanionek Fotografia"} />
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
              Sed in risus non neque commodo viverra at et ante. Quisque egestas tortor at lacus aliquam tincidunt. Praesent et bibendum leo. Morbi viverra sollicitudin quam, sit amet feugiat eros auctor eu. Vestibulum suscipit dolor ut rutrum sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu odio ante. Sed blandit et mi a pharetra. Mauris lobortis lacus ut convallis suscipit. Vivamus vitae lectus et turpis iaculis venenatis. Integer id auctor lectus. Aliquam euismod in mi nec egestas.

Cras metus enim, cursus non mollis vitae, ultricies a lectus. Duis risus ligula, fermentum eu urna sed, placerat rhoncus massa. Morbi eros sem, commodo egestas nibh id, vulputate vehicula turpis.    </p>
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
