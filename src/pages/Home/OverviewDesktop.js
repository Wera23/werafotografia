import React from "react"
import classnames from "classnames"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

import styles from "./Overview.module.scss"

import { graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "../../components/seo"
import Layout from "../../components/layout"

const OverviewDesktop = ({ data }) => {
  const gutter = "50px"

  return (
    <>
      <SEO title={"Portfolio fotograficzne"} />
      <Layout>
        <div className={styles.overviewFull}>
          <div className={styles.overviewScreen}>
            <div className={styles.overviewElement}>
              <Img
                className={styles.overviewImg100H}
                fluid={data.diff12.childImageSharp.fluid}
                alt=""
              />
            </div>
            <div
              className={classnames(
                styles.overviewElement,
                styles.overviewElName
              )}
            >
              <h4>Naturaaaa</h4>
              <Img
                className={styles.overviewImgSmall}
                fluid={data.places4.childImageSharp.fluid}
                alt=""
              />
            </div>
          </div>

          <div className={styles.HPGallery}>
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.mountains44.childImageSharp.fluid} alt="" />
                <Img fluid={data.mountains48.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>
          </div>

          <div className={styles.overviewScreen}>
            <div
              className={classnames(
                styles.overviewElement,
                styles.overviewElName
              )}
            >
              <h4>Koty</h4>
              <Img
                className={styles.overviewImgSmall}
                fluid={data.cat7.childImageSharp.fluid}
                alt=""
              />
            </div>
            <div className={styles.overviewElement}>
              <Img
                className={styles.overviewImg100H}
                fluid={data.cat2.childImageSharp.fluid}
                alt=""
              />
            </div>
          </div>

          <div className={styles.HPGallery}>
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.cat10.childImageSharp.fluid} alt="" />
                <Img fluid={data.cat13.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>
          </div>

          <div
            className={classnames(
              styles.overviewScreen,
              styles.overviewElmPadding
            )}
          >
            <div className={styles.overviewElement}>
              <Img
                className={styles.overviewImg100H}
                fluid={data.husky4.childImageSharp.fluid}
                alt=""
              />
            </div>

            <div
              className={classnames(
                styles.overviewElement,
                styles.overviewElName
              )}
            >
              <h4>Sytuacje</h4>
              <Img
                className={styles.overviewImgSmall}
                fluid={data.teatr4.childImageSharp.fluid}
                alt=""
              />
            </div>
          </div>

          <div
            className={classnames(
              styles.overviewScreen,
              styles.overviewElmPadding
            )}
          >
            <div
              className={classnames(
                styles.overviewElement,
                styles.overviewElName
              )}
            >
              <h4>Góry</h4>
              <Img
                className={styles.overviewImgSmall}
                fluid={data.mountains26.childImageSharp.fluid}
                alt=""
              />
            </div>

            <div className={styles.overviewElement}>
              <Img
                className={styles.overviewImg100H}
                fluid={data.mountains20.childImageSharp.fluid}
                alt=""
              />
            </div>
          </div>

          <div className={styles.HPGallery}>
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.mountains32.childImageSharp.fluid} alt="" />
                <Img fluid={data.mountains2.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>
          </div>

          <div className={styles.overviewScreen}>
            <div className={styles.overviewElement}>
              <Img
                className={styles.overviewImg100H}
                fluid={data.zagle19.childImageSharp.fluid}
                alt=""
              />
            </div>

            <div
              className={classnames(
                styles.overviewElement,
                styles.overviewElName
              )}
            >
              <h4>Żeglarstwo</h4>
              <Img
                className={styles.overviewImgSmall}
                fluid={data.zagle18.childImageSharp.fluid}
                alt=""
              />
            </div>
          </div>

          <div
            className={classnames(
              styles.overviewScreen,
              styles.overviewElmPadding
            )}
          >
            <div
              className={classnames(
                styles.overviewElement,
                styles.overviewElName
              )}
            >
              <h4>Podróże</h4>
              <Img
                className={styles.overviewImgSmall}
                fluid={data.macedonia1.childImageSharp.fluid}
                alt=""
              />
            </div>

            <div className={styles.overviewElement}>
              <Img
                className={styles.overviewImg100H}
                fluid={data.portugalia3.childImageSharp.fluid}
                alt=""
              />
            </div>
          </div>

          <div className={styles.HPGallery}>
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.portugalia21.childImageSharp.fluid} alt="" />
                <Img fluid={data.macedonia2.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>
          </div>

          <div className={styles.HPGallery}>
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.macedonia6.childImageSharp.fluid} alt="" />
                <Img fluid={data.macedonia7.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>
          </div>

          <div
            className={classnames(
              styles.overviewScreen,
              styles.overviewElmPadding
            )}
          >
            <div className={styles.overviewElement}>
              <Img
                className={styles.overviewImg100H}
                fluid={data.diff6.childImageSharp.fluid}
                alt=""
              />
            </div>

            <div
              className={classnames(
                styles.overviewElement,
                styles.overviewElName
              )}
            >
              <h4>Polska</h4>
              <Img
                className={styles.overviewImgSmall}
                fluid={data.polska2.childImageSharp.fluid}
                alt=""
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

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
    polska2: file(relativePath: { eq: "images/polska/Polska2.jpg" }) {
      ...fluidImage
    }
    diff12: file(relativePath: { eq: "images/diff/dif12.jpg" }) {
      ...fluidImage
    }
    diff6: file(relativePath: { eq: "images/diff/dif6.jpg" }) {
      ...fluidImage
    }
    macedonia2: file(relativePath: { eq: "images/macedonia/macedonia2.jpg" }) {
      ...fluidImage
    }
    macedonia6: file(relativePath: { eq: "images/macedonia/macedonia6.jpg" }) {
      ...fluidImage
    }
    macedonia7: file(relativePath: { eq: "images/macedonia/macedonia7.jpg" }) {
      ...fluidImage
    }
    mountains2: file(relativePath: { eq: "images/mountains/mountains2.jpg" }) {
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
    mountains32: file(
      relativePath: { eq: "images/mountains/mountains32.jpg" }
    ) {
      ...fluidImage
    }
    mountains44: file(
      relativePath: { eq: "images/mountains/mountains44.jpg" }
    ) {
      ...fluidImage
    }
    mountains48: file(
      relativePath: { eq: "images/mountains/mountains48.jpg" }
    ) {
      ...fluidImage
    }
    portugalia3: file(
      relativePath: { eq: "images/portugalia/portugalia3.jpg" }
    ) {
      ...fluidImage
    }
    portugalia21: file(
      relativePath: { eq: "images/portugalia/portugalia21.jpg" }
    ) {
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
    zagle19: file(relativePath: { eq: "images/zagle/zagle19.jpg" }) {
      ...fluidImage
    }
    zagle18: file(relativePath: { eq: "images/zagle/zagle18.jpg" }) {
      ...fluidImage
    }

    husky4: file(relativePath: { eq: "images/husky/husky4.jpg" }) {
      ...fluidImage
    }
    teatr4: file(relativePath: { eq: "images/teatr/teatr4.jpg" }) {
      ...fluidImage
    }
  }
`

export default OverviewDesktop
