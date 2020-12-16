import React from "react"

import styles from "./overview.module.scss"

import { graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "../../components/seo"
import Layout from "../../components/layout"

const OverviewMobile = ({ data }) => {
  return (
    <>
      <SEO title={"Porfolio fotograficzne"} />
      <Layout>
        <div className={styles.overviewFull}>
          <Img
            fluid={data.places4.childImageSharp.fluid}
            className={styles.imageMobile}
            alt=""
          />
          <Img
            fluid={data.diff12.childImageSharp.fluid}
            className={styles.imageMobile}
            alt=""
          />
          <Img
            fluid={data.cat2.childImageSharp.fluid}
            className={styles.imageMobile}
            alt=""
          />
          <Img
            fluid={data.cat16.childImageSharp.fluid}
            className={styles.imageMobile}
            alt=""
          />
          <Img
            fluid={data.portugalia3.childImageSharp.fluid}
            className={styles.imageMobile}
            alt=""
          />
          <Img
            fluid={data.macedonia1.childImageSharp.fluid}
            className={styles.imageMobile}
            alt=""
          />
          <Img
            fluid={data.portugalia5.childImageSharp.fluid}
            className={styles.imageMobile}
            alt=""
          />
          <Img
            fluid={data.portugalia21.childImageSharp.fluid}
            className={styles.imageMobile}
            alt=""
          />
          <Img
            fluid={data.macedonia2.childImageSharp.fluid}
            className={styles.imageMobile}
            alt=""
          />
          <Img
            fluid={data.macedonia7.childImageSharp.fluid}
            className={styles.imageMobile}
            alt=""
          />
          <Img
            fluid={data.mountains48.childImageSharp.fluid}
            className={styles.imageMobile}
            alt=""
          />
          <Img
            fluid={data.mountains20.childImageSharp.fluid}
            className={styles.imageMobile}
            alt=""
          />
          <Img
            fluid={data.mountains26.childImageSharp.fluid}
            className={styles.imageMobile}
            alt=""
          />
          <Img
            fluid={data.mountains2.childImageSharp.fluid}
            className={styles.imageMobile}
            alt=""
          />
          <Img
            fluid={data.mountains32.childImageSharp.fluid}
            className={styles.imageMobile}
            alt=""
          />
          <Img
            fluid={data.mountains4.childImageSharp.fluid}
            className={styles.imageMobile}
            alt=""
          />

          <Img
            fluid={data.zagle16.childImageSharp.fluid}
            className={styles.imageMobile}
            alt=""
          />
          <Img
            fluid={data.zagle20.childImageSharp.fluid}
            className={styles.imageMobile}
            alt=""
          />
          <Img
            fluid={data.zagle14.childImageSharp.fluid}
            className={styles.imageMobile}
            alt=""
          />

          <Img
            fluid={data.husky4.childImageSharp.fluid}
            className={styles.imageMobile}
            alt=""
          />
          <Img
            fluid={data.husky1.childImageSharp.fluid}
            className={styles.imageMobile}
            alt=""
          />
          <Img
            fluid={data.teatr4.childImageSharp.fluid}
            className={styles.imageMobile}
            alt=""
          />

          <Img
            fluid={data.diff6.childImageSharp.fluid}
            className={styles.imageMobile}
            alt=""
          />
          <Img
            fluid={data.diff4.childImageSharp.fluid}
            className={styles.imageMobile}
            alt=""
          />
          <Img
            fluid={data.polska8.childImageSharp.fluid}
            className={styles.imageMobile}
            alt=""
          />

          <Img
            fluid={data.mazury3.childImageSharp.fluid}
            className={styles.imageMobile}
            alt=""
          />
          {/*<Img fluid={data.places5.childImageSharp.fluid} className={styles.imageMobile} /> */}

          <Img
            fluid={data.cat10.childImageSharp.fluid}
            className={styles.imageMobile}
            alt=""
          />
          <Img
            fluid={data.cat13.childImageSharp.fluid}
            className={styles.imageMobile}
            alt=""
          />
        </div>
      </Layout>
    </>
  )
}

export default OverviewMobile

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
    places4: file(relativePath: { eq: "images/places/places4.jpg" }) {
      ...fluidImage
    }
    places5: file(relativePath: { eq: "images/places/places5.jpg" }) {
      ...fluidImage
    }
    diff12: file(relativePath: { eq: "images/diff/dif12.jpg" }) {
      ...fluidImage
    }
    diff6: file(relativePath: { eq: "images/diff/dif6.jpg" }) {
      ...fluidImage
    }
    diff4: file(relativePath: { eq: "images/diff/dif4.jpg" }) {
      ...fluidImage
    }
    cat2: file(relativePath: { eq: "images/cat/cat2.jpg" }) {
      ...fluidImage
    }
    cat3: file(relativePath: { eq: "images/cat/cat3.jpg" }) {
      ...fluidImage
    }
    cat16: file(relativePath: { eq: "images/cat/cat16.jpg" }) {
      ...fluidImage
    }
    cat10: file(relativePath: { eq: "images/cat/cat10.jpg" }) {
      ...fluidImage
    }
    cat13: file(relativePath: { eq: "images/cat/cat13.jpg" }) {
      ...fluidImage
    }
    portugalia3: file(
      relativePath: { eq: "images/portugalia/portugalia3.jpg" }
    ) {
      ...fluidImage
    }
    portugalia5: file(
      relativePath: { eq: "images/portugalia/portugalia5.jpg" }
    ) {
      ...fluidImage
    }
    portugalia21: file(
      relativePath: { eq: "images/portugalia/portugalia21.jpg" }
    ) {
      ...fluidImage
    }
    macedonia1: file(relativePath: { eq: "images/macedonia/macedonia1.jpg" }) {
      ...fluidImage
    }
    macedonia2: file(relativePath: { eq: "images/macedonia/macedonia2.jpg" }) {
      ...fluidImage
    }
    macedonia7: file(relativePath: { eq: "images/macedonia/macedonia7.jpg" }) {
      ...fluidImage
    }
    mountains48: file(
      relativePath: { eq: "images/mountains/mountains48.jpg" }
    ) {
      ...fluidImage
    }
    mountains20: file(
      relativePath: { eq: "images/mountains/mountains20.jpg" }
    ) {
      ...fluidImage
    }
    mountains26: file(
      relativePath: { eq: "images/mountains/mountains26.jpg" }
    ) {
      ...fluidImage
    }
    mountains2: file(relativePath: { eq: "images/mountains/mountains2.jpg" }) {
      ...fluidImage
    }
    mountains32: file(
      relativePath: { eq: "images/mountains/mountains32.jpg" }
    ) {
      ...fluidImage
    }
    mountains4: file(relativePath: { eq: "images/mountains/mountains4.jpg" }) {
      ...fluidImage
    }
    zagle16: file(relativePath: { eq: "images/zagle/zagle16.jpg" }) {
      ...fluidImage
    }
    zagle20: file(relativePath: { eq: "images/zagle/zagle20.jpg" }) {
      ...fluidImage
    }
    zagle14: file(relativePath: { eq: "images/zagle/zagle14.jpg" }) {
      ...fluidImage
    }
    mazury3: file(relativePath: { eq: "images/mazury/mazury3.jpg" }) {
      ...fluidImage
    }
    husky4: file(relativePath: { eq: "images/husky/husky4.jpg" }) {
      ...fluidImage
    }
    husky1: file(relativePath: { eq: "images/husky/husky1.jpg" }) {
      ...fluidImage
    }
    polska8: file(relativePath: { eq: "images/polska/Polska8.jpg" }) {
      ...fluidImage
    }
    teatr4: file(relativePath: { eq: "images/teatr/teatr4.jpg" }) {
      ...fluidImage
    }
  }
`
