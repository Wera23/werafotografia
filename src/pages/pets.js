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
        <div className={styles.galleryMountains}>
          <div className={styles.gallery}>
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.miya1.childImageSharp.fluid} alt="" />
                <Img fluid={data.miya2.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.miya6.childImageSharp.fluid} alt="" />
                <Img fluid={data.miya3.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.miya8.childImageSharp.fluid} alt="" />
                <Img fluid={data.miya7.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.miya11.childImageSharp.fluid} alt="" />
                <Img fluid={data.cat1.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.miya9.childImageSharp.fluid} alt="" />
                <Img fluid={data.miya16.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.miya13.childImageSharp.fluid} alt="" />
                <Img fluid={data.miya12.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.miya14.childImageSharp.fluid} alt="" />
                <Img fluid={data.miya5.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>
          </div>
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
    cat1: file(relativePath: { eq: "images/pets/cat1.jpg" }) {
      ...fluidImage
    }

    miya1: file(relativePath: { eq: "images/pets/miya1.png" }) {
      ...fluidImage
    }

    miya2: file(relativePath: { eq: "images/pets/miya2.jpg" }) {
      ...fluidImage
    }

    miya3: file(relativePath: { eq: "images/pets/miya3.jpg" }) {
      ...fluidImage
    }

    miya4: file(relativePath: { eq: "images/pets/miya4.jpg" }) {
      ...fluidImage
    }

    miya5: file(relativePath: { eq: "images/pets/miya5.jpg" }) {
      ...fluidImage
    }

    miya6: file(relativePath: { eq: "images/pets/miya6.jpg" }) {
      ...fluidImage
    }

    miya7: file(relativePath: { eq: "images/pets/miya7.jpg" }) {
      ...fluidImage
    }

    miya8: file(relativePath: { eq: "images/pets/miya8.jpg" }) {
      ...fluidImage
    }

    miya9: file(relativePath: { eq: "images/pets/miya9.png" }) {
      ...fluidImage
    }

    miya10: file(relativePath: { eq: "images/pets/miya10.png" }) {
      ...fluidImage
    }

    miya11: file(relativePath: { eq: "images/pets/miya11.jpg" }) {
      ...fluidImage
    }

    miya12: file(relativePath: { eq: "images/pets/miya12.jpg" }) {
      ...fluidImage
    }

    miya13: file(relativePath: { eq: "images/pets/miya13.jpg" }) {
      ...fluidImage
    }
    miya14: file(relativePath: { eq: "images/pets/miya14.jpg" }) {
      ...fluidImage
    }

    miya16: file(relativePath: { eq: "images/pets/miya16.png" }) {
      ...fluidImage
    }
  }
`
