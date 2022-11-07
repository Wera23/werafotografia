import React from "react"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/seo"
import Layout from "../components/layout"

import styles from "./Galleries.module.scss"

const Jura = ({ data }) => {
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
              <Img fluid={data.jura1.childImageSharp.fluid} alt="" />
              <Img fluid={data.jura4.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img fluid={data.jura5.childImageSharp.fluid} alt="" />
              <Img fluid={data.jura3.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img fluid={data.jura6.childImageSharp.fluid} alt="" />
              <Img fluid={data.jura7.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img fluid={data.jura8.childImageSharp.fluid} alt="" />
              <Img fluid={data.jura11.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>

      

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img fluid={data.jura12.childImageSharp.fluid} alt="" />
              <Img fluid={data.jura10.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img fluid={data.jura13.childImageSharp.fluid} alt="" />
              <Img fluid={data.jura9.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img fluid={data.pol54.childImageSharp.fluid} alt="" />
              <Img fluid={data.pol53.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </Layout>
    </>
  )
}

export default Jura

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
    jura1: file(relativePath: { eq: "images/stories/jura1.jpg" }) {
      ...fluidImage
    }
    jura4: file(relativePath: { eq: "images/stories/jura4.jpg" }) {
      ...fluidImage
    }
    jura3: file(relativePath: { eq: "images/stories/jura3.jpg" }) {
      ...fluidImage
    }
    jura5: file(relativePath: { eq: "images/stories/jura5.jpg" }) {
      ...fluidImage
    }
    jura6: file(relativePath: { eq: "images/stories/jura6.jpg" }) {
      ...fluidImage
    }

    jura7: file(relativePath: { eq: "images/stories/jura7.png" }) {
      ...fluidImage
    }
    jura8: file(relativePath: { eq: "images/stories/jura8.jpg" }) {
      ...fluidImage
    }

    jura9: file(relativePath: { eq: "images/stories/jura9.jpg" }) {
      ...fluidImage
    }

    jura10: file(relativePath: { eq: "images/stories/jura10.jpg" }) {
      ...fluidImage
    }

    jura11: file(relativePath: { eq: "images/stories/jura11.jpg" }) {
      ...fluidImage
    }
    jura12: file(relativePath: { eq: "images/stories/jura12.jpg" }) {
      ...fluidImage
    }
    jura13: file(relativePath: { eq: "images/stories/jura13.jpg" }) {
      ...fluidImage
    }
    pol53: file(relativePath: { eq: "images/polska/pol53.png" }) {
      ...fluidImage
    }
    pol54: file(relativePath: { eq: "images/polska/pol54.png" }) {
      ...fluidImage
    }
  }
`
