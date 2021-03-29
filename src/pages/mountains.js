import React from "react"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import classnames from "classnames"


import { graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Layout from "../components/layout"

import styles from "./Galleries.module.scss"

const MountainsGallery = ({ data }) => {
  const gutter = "30px"

  return (
    <>
      <SEO title={"Wera Chodanionek Fotografia: Góry"} />
      <Layout>
        <div className={styles.galleryMountains}>
          <div className={styles.gallery}>
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.mountains4.childImageSharp.fluid} alt="" />
                <Img fluid={data.mountains52.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.mountains1.childImageSharp.fluid} alt="" />
                <Img fluid={data.mountains5.childImageSharp.fluid} alt="" />
                <Img fluid={data.mountains2.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.mountains9.childImageSharp.fluid} alt="" />
                <Img fluid={data.mountains10.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.mountains11.childImageSharp.fluid} alt="" />
                <Img fluid={data.mountains14.childImageSharp.fluid} alt="" />
                <Img
                  className={styles.photoMobileHidden}
                  fluid={data.mountains13.childImageSharp.fluid}
                  alt=""
                />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img  fluid={data.mountains26.childImageSharp.fluid} alt="" />
                <Img
                  className={styles.photoMobileHidden}
                  fluid={data.mountains25.childImageSharp.fluid}
                  alt=""
                />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.diff1.childImageSharp.fluid} alt="" />
                <Img fluid={data.diff2.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
              className={classnames(styles.partOfgallery, styles.photoMobileHidden)}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.mountains18.childImageSharp.fluid} alt="" />
                <Img
                 
                  fluid={data.mountains17.childImageSharp.fluid}
                  alt=""
                />
                <Img  fluid={data.mountains19.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.mountains48.childImageSharp.fluid} alt="" />
                <Img fluid={data.mountains7.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img
                  className={styles.photoMobileHidden}
                  fluid={data.mountains8.childImageSharp.fluid}
                  alt=""
                />
                <Img fluid={data.mountains20.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
              className={classnames(styles.partOfgallery, styles.photoMobileBottom0)}

            >
              <Masonry gutter={gutter}>
                <Img fluid={data.mountains21.childImageSharp.fluid} alt="" />
                <Img fluid={data.diff11.childImageSharp.fluid} alt="" />
                <Img
                  className={styles.photoMobileHidden}
                  fluid={data.mountains22.childImageSharp.fluid}
                  alt=""
                />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={classnames(styles.partOfgallery, styles.photoMobileTop0)}

            >
              <Masonry gutter={gutter}>
                <Img fluid={data.places8.childImageSharp.fluid} alt="" />
                <Img fluid={data.places9.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.places10.childImageSharp.fluid} alt="" />
                <Img
                  className={styles.photoMobileHidden}
                  fluid={data.places11.childImageSharp.fluid}
                  alt=""
                />
                <Img
                  className={styles.photoMobileHidden}
                  fluid={data.places12.childImageSharp.fluid}
                  alt=""
                />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.mountains33.childImageSharp.fluid} alt="" />
                <Img fluid={data.places4.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.mountains27.childImageSharp.fluid} alt="" />
                <Img fluid={data.mountains29.childImageSharp.fluid} alt="" />
                <Img fluid={data.mountains32.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.mountains34.childImageSharp.fluid} alt="" />
                <Img fluid={data.mountains35.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.mountains36.childImageSharp.fluid} alt="" />
                <Img fluid={data.mountains38.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.diff7.childImageSharp.fluid} alt="" />
                <Img fluid={data.mountains53.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.mountains43.childImageSharp.fluid} alt="" />
                <Img fluid={data.mountains42.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.mountains44.childImageSharp.fluid} alt="" />
                <Img fluid={data.mountains45.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.mountains50.childImageSharp.fluid} alt="" />
                <Img fluid={data.mountains51.childImageSharp.fluid} alt="" />
                <Img fluid={data.mountains30.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.mountains59.childImageSharp.fluid} alt="" />
                <Img fluid={data.mountains60.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>
            
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.mountains65.childImageSharp.fluid} alt="" />
                <Img fluid={data.mountains62.childImageSharp.fluid} alt="" />
                <Img fluid={data.mountains61.childImageSharp.fluid} alt="" />

              </Masonry>
            </ResponsiveMasonry>       

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.mountains63.childImageSharp.fluid} alt="" />
                <Img fluid={data.mountains64.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            {/* <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.mountains67.childImageSharp.fluid} alt="" />
                <Img fluid={data.mountains66.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry> */}


          </div>
        </div>
      </Layout>
    </>
  )
}

export default MountainsGallery

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
    mountains1: file(relativePath: { eq: "images/mountains/mountains1.jpg" }) {
      ...fluidImage
    }

    mountains2: file(relativePath: { eq: "images/mountains/mountains2.jpg" }) {
      ...fluidImage
    }

    mountains3: file(relativePath: { eq: "images/mountains/mountains3.jpg" }) {
      ...fluidImage
    }

    mountains4: file(relativePath: { eq: "images/mountains/mountains4.jpg" }) {
      ...fluidImage
    }

    mountains5: file(relativePath: { eq: "images/mountains/mountains5.jpg" }) {
      ...fluidImage
    }

    mountains6: file(relativePath: { eq: "images/mountains/mountains6.jpg" }) {
      ...fluidImage
    }

    mountains7: file(relativePath: { eq: "images/mountains/mountains7.jpg" }) {
      ...fluidImage
    }

    mountains8: file(relativePath: { eq: "images/mountains/mountains8.jpg" }) {
      ...fluidImage
    }

    mountains9: file(relativePath: { eq: "images/mountains/mountains9.jpg" }) {
      ...fluidImage
    }

    mountains10: file(
      relativePath: { eq: "images/mountains/mountains10.jpg" }
    ) {
      ...fluidImage
    }

    mountains11: file(
      relativePath: { eq: "images/mountains/mountains11.jpg" }
    ) {
      ...fluidImage
    }

    mountains12: file(
      relativePath: { eq: "images/mountains/mountains12.jpg" }
    ) {
      ...fluidImage
    }

    mountains13: file(
      relativePath: { eq: "images/mountains/mountains13.jpg" }
    ) {
      ...fluidImage
    }

    mountains14: file(
      relativePath: { eq: "images/mountains/mountains14.jpg" }
    ) {
      ...fluidImage
    }

    mountains15: file(
      relativePath: { eq: "images/mountains/mountains15.jpg" }
    ) {
      ...fluidImage
    }

    mountains16: file(
      relativePath: { eq: "images/mountains/mountains16.jpg" }
    ) {
      ...fluidImage
    }

    mountains17: file(
      relativePath: { eq: "images/mountains/mountains17.jpg" }
    ) {
      ...fluidImage
    }

    mountains18: file(
      relativePath: { eq: "images/mountains/mountains18.jpg" }
    ) {
      ...fluidImage
    }

    mountains19: file(
      relativePath: { eq: "images/mountains/mountains19.jpg" }
    ) {
      ...fluidImage
    }

    mountains20: file(
      relativePath: { eq: "images/mountains/mountains20.jpg" }
    ) {
      ...fluidImage
    }

    mountains21: file(
      relativePath: { eq: "images/mountains/mountains21.jpg" }
    ) {
      ...fluidImage
    }

    mountains22: file(
      relativePath: { eq: "images/mountains/mountains22.jpg" }
    ) {
      ...fluidImage
    }

    mountains23: file(
      relativePath: { eq: "images/mountains/mountains23.jpg" }
    ) {
      ...fluidImage
    }

    mountains24: file(
      relativePath: { eq: "images/mountains/mountains24.jpg" }
    ) {
      ...fluidImage
    }

    mountains25: file(
      relativePath: { eq: "images/mountains/mountains25.jpg" }
    ) {
      ...fluidImage
    }
    mountains26: file(
      relativePath: { eq: "images/mountains/mountains26.jpg" }
    ) {
      ...fluidImage
    }

    mountains27: file(
      relativePath: { eq: "images/mountains/mountains27.jpg" }
    ) {
      ...fluidImage
    }

    mountains28: file(
      relativePath: { eq: "images/mountains/mountains28.jpg" }
    ) {
      ...fluidImage
    }

    mountains29: file(
      relativePath: { eq: "images/mountains/mountains29.jpg" }
    ) {
      ...fluidImage
    }

    mountains30: file(
      relativePath: { eq: "images/mountains/mountains30.jpg" }
    ) {
      ...fluidImage
    }

    mountains31: file(
      relativePath: { eq: "images/mountains/mountains31.jpg" }
    ) {
      ...fluidImage
    }

    mountains32: file(
      relativePath: { eq: "images/mountains/mountains32.jpg" }
    ) {
      ...fluidImage
    }

    mountains33: file(
      relativePath: { eq: "images/mountains/mountains33.jpg" }
    ) {
      ...fluidImage
    }

    mountains34: file(
      relativePath: { eq: "images/mountains/mountains34.jpg" }
    ) {
      ...fluidImage
    }

    mountains35: file(
      relativePath: { eq: "images/mountains/mountains35.jpg" }
    ) {
      ...fluidImage
    }

    mountains36: file(
      relativePath: { eq: "images/mountains/mountains36.jpg" }
    ) {
      ...fluidImage
    }

    mountains37: file(
      relativePath: { eq: "images/mountains/mountains37.jpg" }
    ) {
      ...fluidImage
    }

    mountains38: file(
      relativePath: { eq: "images/mountains/mountains38.jpg" }
    ) {
      ...fluidImage
    }
    mountains39: file(
      relativePath: { eq: "images/mountains/mountains39.jpg" }
    ) {
      ...fluidImage
    }

    mountains40: file(
      relativePath: { eq: "images/mountains/mountains40.jpg" }
    ) {
      ...fluidImage
    }

    mountains41: file(
      relativePath: { eq: "images/mountains/mountains41.jpg" }
    ) {
      ...fluidImage
    }

    mountains42: file(
      relativePath: { eq: "images/mountains/mountains42.jpg" }
    ) {
      ...fluidImage
    }

    mountains43: file(
      relativePath: { eq: "images/mountains/mountains43.jpg" }
    ) {
      ...fluidImage
    }

    mountains44: file(
      relativePath: { eq: "images/mountains/mountains44.jpg" }
    ) {
      ...fluidImage
    }

    mountains45: file(
      relativePath: { eq: "images/mountains/mountains45.jpg" }
    ) {
      ...fluidImage
    }

    mountains46: file(
      relativePath: { eq: "images/mountains/mountains46.jpg" }
    ) {
      ...fluidImage
    }

    mountains47: file(
      relativePath: { eq: "images/mountains/mountains47.jpg" }
    ) {
      ...fluidImage
    }

    mountains48: file(
      relativePath: { eq: "images/mountains/mountains48.jpg" }
    ) {
      ...fluidImage
    }

    mountains49: file(
      relativePath: { eq: "images/mountains/mountains49.jpg" }
    ) {
      ...fluidImage
    }

    mountains50: file(
      relativePath: { eq: "images/mountains/mountains50.jpg" }
    ) {
      ...fluidImage
    }

    mountains51: file(
      relativePath: { eq: "images/mountains/mountains51.jpg" }
    ) {
      ...fluidImage
    }

    mountains52: file(
      relativePath: { eq: "images/mountains/mountains52.jpg" }
    ) {
      ...fluidImage
    }

    mountains53: file(
      relativePath: { eq: "images/mountains/mountains53.jpg" }
    ) {
      ...fluidImage
    }

    mountains54: file(
      relativePath: { eq: "images/mountains/mountains54.jpg" }
    ) {
      ...fluidImage
    }

    mountains55: file(
      relativePath: { eq: "images/mountains/mountains55.jpg" }
    ) {
      ...fluidImage
    }

    mountains56: file(
      relativePath: { eq: "images/mountains/mountains56.jpg" }
    ) {
      ...fluidImage
    }

    mountains57: file(
      relativePath: { eq: "images/mountains/mountains57.jpg" }
    ) {
      ...fluidImage
    }

    mountains58: file(
      relativePath: { eq: "images/mountains/mountains58.jpg" }
    ) {
      ...fluidImage
    }

    mountains59: file(
      relativePath: { eq: "images/mountains/mountains59.jpg" }
    ) {
      ...fluidImage
    }

    mountains60: file(
      relativePath: { eq: "images/mountains/mountains60.jpg" }
    ) {
      ...fluidImage
    }

    mountains61: file(
      relativePath: { eq: "images/mountains/mountains61.jpg" }
    ) {
      ...fluidImage
    }

    mountains62: file(
      relativePath: { eq: "images/mountains/mountains62.jpg" }
    ) {
      ...fluidImage
    }

    mountains63: file(
      relativePath: { eq: "images/mountains/mountains63.jpg" }
    ) {
      ...fluidImage
    }

    mountains64: file(
      relativePath: { eq: "images/mountains/mountains64.jpg" }
    ) {
      ...fluidImage
    }

    
    mountains65: file(
      relativePath: { eq: "images/mountains/mountains65.jpg" }
    ) {
      ...fluidImage
    }

    mountains66: file(
      relativePath: { eq: "images/mountains/mountains66.jpg" }
    ) {
      ...fluidImage
    }

    mountains67: file(
      relativePath: { eq: "images/mountains/mountains67.jpg" }
    ) {
      ...fluidImage
    }

    mountains68: file(
      relativePath: { eq: "images/mountains/mountains68.jpg" }
    ) {
      ...fluidImage
    }

    places4: file(relativePath: { eq: "images/places/places4.jpg" }) {
      ...fluidImage
    }

    places8: file(relativePath: { eq: "images/places/places8.jpg" }) {
      ...fluidImage
    }

    places9: file(relativePath: { eq: "images/places/places9.jpg" }) {
      ...fluidImage
    }

    places10: file(relativePath: { eq: "images/places/places10.jpg" }) {
      ...fluidImage
    }

    places11: file(relativePath: { eq: "images/places/places11.jpg" }) {
      ...fluidImage
    }

    places12: file(relativePath: { eq: "images/places/places12.jpg" }) {
      ...fluidImage
    }

    diff1: file(relativePath: { eq: "images/diff/dif1.jpg" }) {
      ...fluidImage
    }

    diff2: file(relativePath: { eq: "images/diff/dif2.jpg" }) {
      ...fluidImage
    }

    diff7: file(relativePath: { eq: "images/diff/dif7.jpg" }) {
      ...fluidImage
    }

    diff11: file(relativePath: { eq: "images/diff/dif11.jpg" }) {
      ...fluidImage
    }
  }
`
