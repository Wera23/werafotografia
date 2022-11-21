import React from "react"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/seo"
import Layout from "../components/layout"
// import Gallery from "react-photo-gallery"

import styles from "./Galleries.module.scss"

const Stories = ({ data }) => {
  const gutter = "2px"

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

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
              <a
                className={styles.projectElLink}
                href="/trees"
                onClick={scrollToTop}
              >
                <Img fluid={data.story4.childImageSharp.fluid} alt="" />
              </a>
              <a
                className={styles.projectElLink}
                href="/home"
                onClick={scrollToTop}
              >
                <Img fluid={data.story1.childImageSharp.fluid} alt="" />
              </a>
            </Masonry>
          </ResponsiveMasonry>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <a
                className={styles.projectElLink}
                href="/water"
                onClick={scrollToTop}
              >
                <Img fluid={data.story2.childImageSharp.fluid} alt="" />
              </a>
              <a
                className={styles.projectElLink}
                href="/jura"
                onClick={scrollToTop}
              >
                <Img fluid={data.story3.childImageSharp.fluid} alt="" />
              </a>
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </Layout>
    </>
  )
}

export default Stories

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
    story1: file(relativePath: { eq: "images/stories/story1.jpg" }) {
      ...fluidImage
    }
    story2: file(relativePath: { eq: "images/stories/story2.jpg" }) {
      ...fluidImage
    }
    story3: file(relativePath: { eq: "images/stories/story3.jpg" }) {
      ...fluidImage
    }
    story4: file(relativePath: { eq: "images/stories/story4.jpg" }) {
      ...fluidImage
    }
  }
`
