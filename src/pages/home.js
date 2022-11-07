import React from "react"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/seo"
import Layout from "../components/layout"

import styles from "./Galleries.module.scss"

const Home = ({ data }) => {
  const gutter = "2px"

  return (
    <>
      <SEO title={"Wera Chodanionek Fotografia"} />

      <Layout>
        <div className={styles.gallery}>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img fluid={data.dom3.childImageSharp.fluid} alt="" />
              <Img fluid={data.dom1.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img fluid={data.dom4.childImageSharp.fluid} alt="" />
              <Img fluid={data.dom2.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img fluid={data.dom6.childImageSharp.fluid} alt="" />
              <Img fluid={data.dom7.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              {/* <Img fluid={data.dom4.childImageSharp.fluid} alt="" /> */}
              <Img fluid={data.dom5.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </Layout>
    </>
  )
}

export default Home

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
    dom1: file(relativePath: { eq: "images/stories/dom1.jpg" }) {
      ...fluidImage
    }
    dom2: file(relativePath: { eq: "images/stories/dom2.jpg" }) {
      ...fluidImage
    }
    dom3: file(relativePath: { eq: "images/stories/dom3.jpg" }) {
      ...fluidImage
    }
    dom4: file(relativePath: { eq: "images/stories/dom4.jpg" }) {
      ...fluidImage
    }
    dom5: file(relativePath: { eq: "images/stories/dom5.jpg" }) {
      ...fluidImage
    }
    dom6: file(relativePath: { eq: "images/stories/dom6.jpg" }) {
      ...fluidImage
    }
    dom7: file(relativePath: { eq: "images/stories/dom7.jpg" }) {
      ...fluidImage
    }
  }
`
