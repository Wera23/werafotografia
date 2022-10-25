import React from "react"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/seo"
import Layout from "../components/layout"

import styles from "./Galleries.module.scss"

const Themes = ({ data }) => {
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
              <Img fluid={data.theme1.childImageSharp.fluid} alt="" />
              <Img fluid={data.theme2.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img fluid={data.theme3.childImageSharp.fluid} alt="" />
              <Img fluid={data.theme4.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </Layout>
    </>
  )
}

export default Themes

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
    theme1: file(relativePath: { eq: "images/portugalia/portugalia5.jpg" }) {
      ...fluidImage
    }

    theme2: file(relativePath: { eq: "images/polska/Polska1.jpg" }) {
      ...fluidImage
    }

    theme3: file(relativePath: { eq: "images/diff/dif7.jpg" }) {
      ...fluidImage
    }

    theme4: file(relativePath: { eq: "images/mountains/mountains39.jpg" }) {
      ...fluidImage
    }
  }
`
