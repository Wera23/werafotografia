import React from "react"
import styles from "./About.module.scss"
import classnames from "classnames"
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
          <div className={styles.aboutContent}>
            <Img
              fluid={data.portret1.childImageSharp.fluid}
              className={styles.aboutPhoto}
              alt=""
            />
          </div>
          <div className={styles.aboutContent}>
            <div>
              <p>Katowice, Śląsk</p>

              <p>
                <a
                  className={styles.aboutInfContact}
                  href="mailto:werachodanionek@gmail.com"
                >
                  werachodanionek@gmail.com
                </a>
              </p>
              <p>
                <a className={styles.aboutInfContact} href="tel:+48666204224">
                  +48 666 204 224
                </a>
              </p>

              <div className={styles.aboutSocial}>
                <a
                  className={styles.menuLink}
                  href="https://www.facebook.com/profile.php?id=100008104848404"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i
                    className={classnames(
                      "icon-facebook-circled",
                      styles.aboutSocialIcon
                    )}
                  />
                </a>

                <a
                  className={styles.menuLink}
                  href="https://www.instagram.com/werachodanionek/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i
                    className={classnames(
                      "icon-instagram",
                      styles.aboutSocialIcon
                    )}
                  />
                </a>
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
    portret1: file(relativePath: { eq: "images/about/wera.png" }) {
      ...fluidImage
    }
  }
`
