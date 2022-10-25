import React from "react"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/seo"
import Layout from "../components/layout"

import styles from "./Galleries.module.scss"

const CatsGallery = ({ data }) => {
  const gutter = "2px";
  
  return (
    <>
      <SEO title={"Wera Chodanionek Fotografia: Koty"} />
      <Layout>
          <div className={styles.gallery}>
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.cat1.childImageSharp.fluid} alt="" />
                <Img fluid={data.cat18.childImageSharp.fluid} alt="" />
                <Img fluid={data.cat2.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.cat7.childImageSharp.fluid} alt="" />
                <Img fluid={data.cat10.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.cat3.childImageSharp.fluid} alt="" />
                <Img fluid={data.cat20.childImageSharp.fluid} alt="" />
                <Img fluid={data.cat19.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.cat8.childImageSharp.fluid} alt="" />
                <Img fluid={data.cat13.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img
                  className={styles.photoMobileHidden}
                  fluid={data.cat11.childImageSharp.fluid}
                  alt=""
                />
                <Img fluid={data.cat17.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.cat6.childImageSharp.fluid} alt="" />
                <Img
                  className={styles.photoMobileHidden}
                  fluid={data.cat5.childImageSharp.fluid}
                  alt=""
                />
                <Img fluid={data.cat12.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.cat9.childImageSharp.fluid} alt="" />
                <Img fluid={data.cat14.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.cat22.childImageSharp.fluid} alt="" />
                <Img fluid={data.cat24.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.cat15.childImageSharp.fluid} alt="" />
                <Img fluid={data.cat16.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.cat23.childImageSharp.fluid} alt="" />
                <Img fluid={data.cat28.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.cat26.childImageSharp.fluid} alt="" />
                {/* <Img fluid={data.cat27.childImageSharp.fluid} alt="" /> */}
              </Masonry>
            </ResponsiveMasonry>
          </div>  
      </Layout>
    </>
  )
}

export default CatsGallery

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
    cat1: file(relativePath: { eq: "images/cat/cat1.jpg" }) {
      ...fluidImage
    }

    cat2: file(relativePath: { eq: "images/cat/cat2.jpg" }) {
      ...fluidImage
    }

    cat3: file(relativePath: { eq: "images/cat/cat3.jpg" }) {
      ...fluidImage
    }

    cat4: file(relativePath: { eq: "images/cat/cat4.jpg" }) {
      ...fluidImage
    }

    cat5: file(relativePath: { eq: "images/cat/cat5.jpg" }) {
      ...fluidImage
    }

    cat6: file(relativePath: { eq: "images/cat/cat6.jpg" }) {
      ...fluidImage
    }

    cat7: file(relativePath: { eq: "images/cat/cat7.jpg" }) {
      ...fluidImage
    }

    cat8: file(relativePath: { eq: "images/cat/cat8.jpg" }) {
      ...fluidImage
    }

    cat9: file(relativePath: { eq: "images/cat/cat9.jpg" }) {
      ...fluidImage
    }

    cat10: file(relativePath: { eq: "images/cat/cat10.jpg" }) {
      ...fluidImage
    }

    cat11: file(relativePath: { eq: "images/cat/cat11.jpg" }) {
      ...fluidImage
    }

    cat12: file(relativePath: { eq: "images/cat/cat12.jpg" }) {
      ...fluidImage
    }

    cat13: file(relativePath: { eq: "images/cat/cat13.jpg" }) {
      ...fluidImage
    }

    cat14: file(relativePath: { eq: "images/cat/cat14.jpg" }) {
      ...fluidImage
    }

    cat15: file(relativePath: { eq: "images/cat/cat15.jpg" }) {
      ...fluidImage
    }

    cat16: file(relativePath: { eq: "images/cat/cat16.jpg" }) {
      ...fluidImage
    }

    cat17: file(relativePath: { eq: "images/cat/cat17.jpg" }) {
      ...fluidImage
    }

    cat18: file(relativePath: { eq: "images/cat/cat18.jpg" }) {
      ...fluidImage
    }

    cat19: file(relativePath: { eq: "images/cat/cat19.jpg" }) {
      ...fluidImage
    }

    cat20: file(relativePath: { eq: "images/cat/cat20.jpg" }) {
      ...fluidImage
    }

    cat22: file(relativePath: { eq: "images/cat/cat22.jpg" }) {
      ...fluidImage
    }

    cat23: file(relativePath: { eq: "images/cat/cat23.jpg" }) {
      ...fluidImage
    }


    cat24: file(relativePath: { eq: "images/cat/cat24.jpg" }) {
      ...fluidImage
    }

    cat25: file(relativePath: { eq: "images/cat/cat25.jpg" }) {
      ...fluidImage
    }

    cat26: file(relativePath: { eq: "images/cat/cat26.jpg" }) {
      ...fluidImage
    }

    cat27: file(relativePath: { eq: "images/cat/cat27.jpg" }) {
      ...fluidImage
    }
    cat28: file(relativePath: { eq: "images/cat/cat28.jpg" }) {
      ...fluidImage
    }
  }
`
