import React from "react"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/seo"
import Layout from "../components/layout"

import styles from "./Galleries.module.scss"

const PolskaGallery = ({ data }) => {
  const gutter = "30px"

  return (
    <>
      <SEO title={"Kadry z Polski"} />
      <Layout>
        <div className={styles.galleryPoland}>
          <div className={styles.gallery}>
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.polska14.childImageSharp.fluid} alt="" />
                <Img fluid={data.polska15.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.polska16.childImageSharp.fluid} alt="" />
                <Img fluid={data.polska17.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.polska1.childImageSharp.fluid} alt="" />
                <Img fluid={data.polska2.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.diff4.childImageSharp.fluid} alt="" />
                <Img fluid={data.diff6.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.mazury3.childImageSharp.fluid} alt="" />
                <Img fluid={data.mazury4.childImageSharp.fluid} alt="" />
                <Img fluid={data.mazury5.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.mazury1.childImageSharp.fluid} alt="" />
                <Img fluid={data.mazury2.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.mazury6.childImageSharp.fluid} alt="" />
                <Img fluid={data.mazury7.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img
                  className={styles.photoMobileHidden}
                  fluid={data.mazury8.childImageSharp.fluid}
                  alt=""
                />
                <Img fluid={data.mazury12.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img
                  className={styles.photoMobileHidden}
                  fluid={data.mazury9.childImageSharp.fluid}
                  alt=""
                />
                <Img fluid={data.mazury10.childImageSharp.fluid} alt="" />
                <Img fluid={data.mazury11.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.places1.childImageSharp.fluid} alt="" />
                <Img fluid={data.places2.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img
                  className={styles.photoMobileHidden}
                  fluid={data.places3.childImageSharp.fluid}
                  alt=""
                />
                <Img fluid={data.places4.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.places5.childImageSharp.fluid} alt="" />
                <Img fluid={data.places6.childImageSharp.fluid} alt="" />
                <Img fluid={data.places7.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.polska4.childImageSharp.fluid} alt="" />
                <Img fluid={data.polska5.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.polska10.childImageSharp.fluid} alt="" />
                <Img
                  className={styles.photoMobileHidden}
                  fluid={data.polska11.childImageSharp.fluid}
                  alt=""
                />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.sea3.childImageSharp.fluid} alt="" />
                <Img fluid={data.sea2.childImageSharp.fluid} alt="" />
                <Img fluid={data.sea1.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.polska21.childImageSharp.fluid} alt="" />
                <Img fluid={data.polska22.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.polska18.childImageSharp.fluid} alt="" />
                <Img fluid={data.polska19.childImageSharp.fluid} alt="" />
                <Img fluid={data.polska20.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.polska6.childImageSharp.fluid} alt="" />
                <Img fluid={data.polska7.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.polska8.childImageSharp.fluid} alt="" />
                <Img
                  className={styles.photoMobileHidden}
                  fluid={data.polska9.childImageSharp.fluid}
                  alt=""
                />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.polska13.childImageSharp.fluid} alt="" />
                <Img fluid={data.mountains40.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

          </div>
        </div>
      </Layout>
    </>
  )
}

export default PolskaGallery

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
    polska1: file(relativePath: { eq: "images/polska/Polska1.jpg" }) {
      ...fluidImage
    }

    polska2: file(relativePath: { eq: "images/polska/Polska2.jpg" }) {
      ...fluidImage
    }

    polska3: file(relativePath: { eq: "images/polska/Polska3.jpg" }) {
      ...fluidImage
    }

    polska4: file(relativePath: { eq: "images/polska/Polska4.jpg" }) {
      ...fluidImage
    }

    polska5: file(relativePath: { eq: "images/polska/Polska5.jpg" }) {
      ...fluidImage
    }

    polska6: file(relativePath: { eq: "images/polska/Polska6.jpg" }) {
      ...fluidImage
    }

    polska7: file(relativePath: { eq: "images/polska/Polska7.jpg" }) {
      ...fluidImage
    }

    polska8: file(relativePath: { eq: "images/polska/Polska8.jpg" }) {
      ...fluidImage
    }

    polska9: file(relativePath: { eq: "images/polska/Polska9.jpg" }) {
      ...fluidImage
    }

    polska10: file(relativePath: { eq: "images/polska/Polska10.jpg" }) {
      ...fluidImage
    }

    polska11: file(relativePath: { eq: "images/polska/Polska11.jpg" }) {
      ...fluidImage
    }

    polska12: file(relativePath: { eq: "images/polska/Polska12.jpg" }) {
      ...fluidImage
    }

    polska13: file(relativePath: { eq: "images/polska/Polska13.jpg" }) {
      ...fluidImage
    }

    polska14: file(relativePath: { eq: "images/polska/Polska14.jpg" }) {
      ...fluidImage
    }

    polska15: file(relativePath: { eq: "images/polska/Polska15.jpg" }) {
      ...fluidImage
    }

    polska16: file(relativePath: { eq: "images/polska/Polska16.jpg" }) {
      ...fluidImage
    }

    polska17: file(relativePath: { eq: "images/polska/Polska17.jpg" }) {
      ...fluidImage
    }

    polska18: file(relativePath: { eq: "images/polska/Polska18.jpg" }) {
      ...fluidImage
    }

    polska19: file(relativePath: { eq: "images/polska/Polska19.jpg" }) {
      ...fluidImage
    }

    polska20: file(relativePath: { eq: "images/polska/Polska20.jpg" }) {
      ...fluidImage
    }

    polska21: file(relativePath: { eq: "images/polska/Polska21.jpg" }) {
      ...fluidImage
    }

    polska22: file(relativePath: { eq: "images/polska/Polska22.jpg" }) {
      ...fluidImage
    }

    diff4: file(relativePath: { eq: "images/diff/dif4.jpg" }) {
      ...fluidImage
    }

    diff6: file(relativePath: { eq: "images/diff/dif6.jpg" }) {
      ...fluidImage
    }

    mazury1: file(relativePath: { eq: "images/mazury/mazury1.jpg" }) {
      ...fluidImage
    }

    mazury1: file(relativePath: { eq: "images/mazury/mazury1.jpg" }) {
      ...fluidImage
    }

    mazury2: file(relativePath: { eq: "images/mazury/mazury2.jpg" }) {
      ...fluidImage
    }

    mazury3: file(relativePath: { eq: "images/mazury/mazury3.jpg" }) {
      ...fluidImage
    }

    mazury4: file(relativePath: { eq: "images/mazury/mazury4.jpg" }) {
      ...fluidImage
    }

    mazury5: file(relativePath: { eq: "images/mazury/mazury5.jpg" }) {
      ...fluidImage
    }

    mazury6: file(relativePath: { eq: "images/mazury/mazury6.jpg" }) {
      ...fluidImage
    }

    mazury7: file(relativePath: { eq: "images/mazury/mazury7.jpg" }) {
      ...fluidImage
    }

    mazury8: file(relativePath: { eq: "images/mazury/mazury8.jpg" }) {
      ...fluidImage
    }

    mazury9: file(relativePath: { eq: "images/mazury/mazury9.jpg" }) {
      ...fluidImage
    }

    mazury10: file(relativePath: { eq: "images/mazury/mazury10.jpg" }) {
      ...fluidImage
    }

    mazury11: file(relativePath: { eq: "images/mazury/mazury11.jpg" }) {
      ...fluidImage
    }
    mazury12: file(relativePath: { eq: "images/mazury/mazury12.jpg" }) {
      ...fluidImage
    }

    places1: file(relativePath: { eq: "images/places/places1.jpg" }) {
      ...fluidImage
    }

    places2: file(relativePath: { eq: "images/places/places2.jpg" }) {
      ...fluidImage
    }

    places3: file(relativePath: { eq: "images/places/places3.jpg" }) {
      ...fluidImage
    }

    places4: file(relativePath: { eq: "images/places/places4.jpg" }) {
      ...fluidImage
    }

    places5: file(relativePath: { eq: "images/places/places5.jpg" }) {
      ...fluidImage
    }

    places6: file(relativePath: { eq: "images/places/places6.jpg" }) {
      ...fluidImage
    }

    places7: file(relativePath: { eq: "images/places/places7.jpg" }) {
      ...fluidImage
    }

    sea1: file(relativePath: { eq: "images/sea/sea1.jpg" }) {
      ...fluidImage
    }

    sea2: file(relativePath: { eq: "images/sea/sea2.jpg" }) {
      ...fluidImage
    }

    sea3: file(relativePath: { eq: "images/sea/sea3.jpg" }) {
      ...fluidImage
    }

    mountains40: file(
      relativePath: { eq: "images/mountains/mountains40.jpg" }
    ) {
      ...fluidImage
    }
  }
`
