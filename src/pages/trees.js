import React from "react"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/seo"
import Layout from "../components/layout"

import styles from "./Galleries.module.scss"

const Trees = ({ data }) => {
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
              <Img fluid={data.trees1.childImageSharp.fluid} alt="" />
              <Img fluid={data.trees2.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img fluid={data.trees3.childImageSharp.fluid} alt="" />
              <Img fluid={data.trees4.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img fluid={data.trees5.childImageSharp.fluid} alt="" />
              <Img fluid={data.trees6.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </Layout>
    </>
  )
}

export default Trees

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
    trees1: file(relativePath: { eq: "images/stories/trees1.jpg" }) {
      ...fluidImage
    }
    trees2: file(relativePath: { eq: "images/stories/trees2.jpg" }) {
      ...fluidImage
    }
    trees3: file(relativePath: { eq: "images/stories/trees3.jpg" }) {
      ...fluidImage
    }
    trees4: file(relativePath: { eq: "images/stories/trees4.jpg" }) {
      ...fluidImage
    }
    trees5: file(relativePath: { eq: "images/stories/trees5.jpg" }) {
      ...fluidImage
    }
    trees6: file(relativePath: { eq: "images/stories/trees6.png" }) {
      ...fluidImage
    }
  }
`
