import React from "react"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

import { graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/seo"
import Layout from "../components/layout"

import styles from "./Galleries.module.scss"

const SituationsGallery = ({ data }) => {
  const gutter = "2px"

  return (
    <>
      <SEO title={"Wera Chodanionek Fotografia: Akcje"} />
      <Layout>
        <div className={styles.gallery}>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img fluid={data.baltic1.childImageSharp.fluid} alt="" />
              <Img fluid={data.baltic2.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img fluid={data.baltic3.childImageSharp.fluid} alt="" />
              <Img fluid={data.baltic4.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img fluid={data.baltic6.childImageSharp.fluid} alt="" />
              <Img fluid={data.baltic7.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img fluid={data.baltic10.childImageSharp.fluid} alt="" />
              <Img fluid={data.baltic12.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img fluid={data.baltic8.childImageSharp.fluid} alt="" />
              <Img fluid={data.baltic9.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img fluid={data.baltic13.childImageSharp.fluid} alt="" />
              <Img fluid={data.baltic14.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img fluid={data.baltic16.childImageSharp.fluid} alt="" />
              <Img fluid={data.baltic15.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img fluid={data.baltic5.childImageSharp.fluid} alt="" />
              <Img fluid={data.baltic17.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </Layout>
    </>
  )
}

export default SituationsGallery

// export const fluidImage = graphql`
//   fragment fluidImage on File {
//     childImageSharp {
//       fluid {
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }
// `

export const query = graphql`
  query {
    baltic1: file(relativePath: { eq: "images/baltic/baltic1.jpg" }) {
      ...fluidImage
    }

    baltic2: file(relativePath: { eq: "images/baltic/baltic2.jpg" }) {
      ...fluidImage
    }

    baltic3: file(relativePath: { eq: "images/baltic/baltic3.jpg" }) {
      ...fluidImage
    }

    baltic4: file(relativePath: { eq: "images/baltic/baltic4.jpg" }) {
      ...fluidImage
    }

    baltic5: file(relativePath: { eq: "images/baltic/baltic5.jpg" }) {
      ...fluidImage
    }

    baltic6: file(relativePath: { eq: "images/baltic/baltic6.jpg" }) {
      ...fluidImage
    }

    baltic7: file(relativePath: { eq: "images/baltic/baltic7.jpg" }) {
      ...fluidImage
    }

    baltic8: file(relativePath: { eq: "images/baltic/baltic8.jpg" }) {
      ...fluidImage
    }

    baltic9: file(relativePath: { eq: "images/baltic/baltic9.jpg" }) {
      ...fluidImage
    }

    baltic10: file(relativePath: { eq: "images/baltic/baltic10.jpg" }) {
      ...fluidImage
    }

    baltic11: file(relativePath: { eq: "images/baltic/baltic11.jpg" }) {
      ...fluidImage
    }

    baltic12: file(relativePath: { eq: "images/baltic/baltic12.jpg" }) {
      ...fluidImage
    }

    baltic13: file(relativePath: { eq: "images/baltic/baltic13.jpg" }) {
      ...fluidImage
    }

    baltic14: file(relativePath: { eq: "images/baltic/baltic14.jpg" }) {
      ...fluidImage
    }

    baltic15: file(relativePath: { eq: "images/baltic/baltic15.jpg" }) {
      ...fluidImage
    }

    baltic16: file(relativePath: { eq: "images/baltic/baltic16.jpg" }) {
      ...fluidImage
    }

    baltic17: file(relativePath: { eq: "images/baltic/baltic17.jpg" }) {
      ...fluidImage
    }
  }
`
