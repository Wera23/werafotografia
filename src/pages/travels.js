import React from "react"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/seo"
import Layout from "../components/layout"
import styles from "./galleries.module.scss"

const TravelGallery = ({ data }) => {
  const gutter = "30px"

  return (
    <>
      <SEO title={"Podróże"} />
      <Layout>
        <div className={styles.galleryTravels}>
          <div className={styles.gallery}>
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.portugalia1.childImageSharp.fluid} alt="" />
                <Img fluid={data.portugalia2.childImageSharp.fluid} alt="" />
                <Img fluid={data.portugalia3.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.portugalia4.childImageSharp.fluid} alt="" />
                <Img fluid={data.portugalia5.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.portugalia7.childImageSharp.fluid} alt="" />
                <Img fluid={data.portugalia6.childImageSharp.fluid} alt="" />
                <Img fluid={data.portugalia8.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.portugalia9.childImageSharp.fluid} alt="" />
                <Img fluid={data.portugalia10.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.portugalia16.childImageSharp.fluid} alt="" />
                <Img
                  className={styles.photoMobileHidden}
                  fluid={data.portugalia12.childImageSharp.fluid}
                  alt=""
                />
                <Img fluid={data.portugalia13.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.portugalia20.childImageSharp.fluid} alt="" />
                <Img fluid={data.portugalia15.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img
                  className={styles.photoMobileHidden}
                  fluid={data.portugalia19.childImageSharp.fluid}
                  alt=""
                />
                <Img fluid={data.portugalia21.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.macedonia3.childImageSharp.fluid} alt="" />
                <Img fluid={data.macedonia4.childImageSharp.fluid} alt="" />
                <Img fluid={data.macedonia5.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.macedonia1.childImageSharp.fluid} alt="" />
                <Img fluid={data.macedonia2.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.macedonia6.childImageSharp.fluid} alt="" />
                <Img fluid={data.macedonia7.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.macedonia8.childImageSharp.fluid} alt="" />
                <Img fluid={data.macedonia9.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            {/* <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
          className={styles.partOfgallery}
        >
          <Masonry gutter={gutter}>
            <Img fluid={data.macedonia10.childImageSharp.fluid} alt="" />
            <Img fluid={data.macedonia11.childImageSharp.fluid} alt="" />
          </Masonry>
        </ResponsiveMasonry> */}

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.diff5.childImageSharp.fluid} alt="" />
                <Img fluid={data.diff13.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.budapest1.childImageSharp.fluid} alt="" />
                <Img fluid={data.budapest2.childImageSharp.fluid} alt="" />
                <Img fluid={data.budapest3.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.diff14.childImageSharp.fluid} alt="" />
                <Img fluid={data.diff15.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.chorwacja2.childImageSharp.fluid} alt="" />
                <Img fluid={data.chorwacja3.childImageSharp.fluid} alt="" />
                <Img fluid={data.chorwacja4.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.slowenia1.childImageSharp.fluid} alt="" />
                <Img fluid={data.slowenia2.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.slowenia3.childImageSharp.fluid} alt="" />
                <Img fluid={data.slowenia4.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.wegry1.childImageSharp.fluid} alt="" />
                <Img fluid={data.wegry2.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.diff20.childImageSharp.fluid} alt="" />
                <Img fluid={data.diff21.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default TravelGallery

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
    portugalia1: file(
      relativePath: { eq: "images/portugalia/portugalia1.jpg" }
    ) {
      ...fluidImage
    }

    portugalia2: file(
      relativePath: { eq: "images/portugalia/portugalia2.jpg" }
    ) {
      ...fluidImage
    }
    portugalia3: file(
      relativePath: { eq: "images/portugalia/portugalia3.jpg" }
    ) {
      ...fluidImage
    }
    portugalia4: file(
      relativePath: { eq: "images/portugalia/portugalia4.jpg" }
    ) {
      ...fluidImage
    }
    portugalia5: file(
      relativePath: { eq: "images/portugalia/portugalia5.jpg" }
    ) {
      ...fluidImage
    }
    portugalia6: file(
      relativePath: { eq: "images/portugalia/portugalia6.jpg" }
    ) {
      ...fluidImage
    }

    portugalia7: file(
      relativePath: { eq: "images/portugalia/portugalia7.jpg" }
    ) {
      ...fluidImage
    }
    portugalia8: file(
      relativePath: { eq: "images/portugalia/portugalia8.jpg" }
    ) {
      ...fluidImage
    }
    portugalia9: file(
      relativePath: { eq: "images/portugalia/portugalia9.jpg" }
    ) {
      ...fluidImage
    }
    portugalia10: file(
      relativePath: { eq: "images/portugalia/portugalia10.jpg" }
    ) {
      ...fluidImage
    }
    portugalia11: file(
      relativePath: { eq: "images/portugalia/portugalia11.jpg" }
    ) {
      ...fluidImage
    }
    portugalia12: file(
      relativePath: { eq: "images/portugalia/portugalia12.jpg" }
    ) {
      ...fluidImage
    }
    portugalia13: file(
      relativePath: { eq: "images/portugalia/portugalia13.jpg" }
    ) {
      ...fluidImage
    }
    portugalia14: file(
      relativePath: { eq: "images/portugalia/portugalia14.jpg" }
    ) {
      ...fluidImage
    }
    portugalia15: file(
      relativePath: { eq: "images/portugalia/portugalia15.jpg" }
    ) {
      ...fluidImage
    }
    portugalia16: file(
      relativePath: { eq: "images/portugalia/portugalia16.jpg" }
    ) {
      ...fluidImage
    }
    portugalia17: file(
      relativePath: { eq: "images/portugalia/portugalia17.jpg" }
    ) {
      ...fluidImage
    }

    portugalia18: file(
      relativePath: { eq: "images/portugalia/portugalia18.jpg" }
    ) {
      ...fluidImage
    }
    portugalia19: file(
      relativePath: { eq: "images/portugalia/portugalia19.jpg" }
    ) {
      ...fluidImage
    }
    portugalia20: file(
      relativePath: { eq: "images/portugalia/portugalia20.jpg" }
    ) {
      ...fluidImage
    }

    portugalia21: file(
      relativePath: { eq: "images/portugalia/portugalia21.jpg" }
    ) {
      ...fluidImage
    }

    macedonia1: file(relativePath: { eq: "images/macedonia/macedonia1.jpg" }) {
      ...fluidImage
    }

    macedonia2: file(relativePath: { eq: "images/macedonia/macedonia2.jpg" }) {
      ...fluidImage
    }
    macedonia3: file(relativePath: { eq: "images/macedonia/macedonia3.jpg" }) {
      ...fluidImage
    }
    macedonia4: file(relativePath: { eq: "images/macedonia/macedonia4.jpg" }) {
      ...fluidImage
    }
    macedonia5: file(relativePath: { eq: "images/macedonia/macedonia5.jpg" }) {
      ...fluidImage
    }
    macedonia6: file(relativePath: { eq: "images/macedonia/macedonia6.jpg" }) {
      ...fluidImage
    }
    macedonia7: file(relativePath: { eq: "images/macedonia/macedonia7.jpg" }) {
      ...fluidImage
    }
    macedonia8: file(relativePath: { eq: "images/macedonia/macedonia8.jpg" }) {
      ...fluidImage
    }
    macedonia9: file(relativePath: { eq: "images/macedonia/macedonia9.jpg" }) {
      ...fluidImage
    }

    macedonia10: file(
      relativePath: { eq: "images/macedonia/macedonia10.jpg" }
    ) {
      ...fluidImage
    }
    macedonia11: file(
      relativePath: { eq: "images/macedonia/macedonia11.jpg" }
    ) {
      ...fluidImage
    }

    diff5: file(relativePath: { eq: "images/diff/dif5.jpg" }) {
      ...fluidImage
    }
    diff13: file(relativePath: { eq: "images/diff/dif13.jpg" }) {
      ...fluidImage
    }
    diff14: file(relativePath: { eq: "images/diff/dif14.jpg" }) {
      ...fluidImage
    }
    diff15: file(relativePath: { eq: "images/diff/dif15.jpg" }) {
      ...fluidImage
    }
    diff20: file(relativePath: { eq: "images/diff/dif20.jpg" }) {
      ...fluidImage
    }
    diff21: file(relativePath: { eq: "images/diff/dif21.jpg" }) {
      ...fluidImage
    }

    budapest1: file(relativePath: { eq: "images/budapest/budapest1.jpg" }) {
      ...fluidImage
    }
    budapest2: file(relativePath: { eq: "images/budapest/budapest2.jpg" }) {
      ...fluidImage
    }
    budapest3: file(relativePath: { eq: "images/budapest/budapest3.jpg" }) {
      ...fluidImage
    }
    budapest4: file(relativePath: { eq: "images/budapest/budapest4.jpg" }) {
      ...fluidImage
    }
    budapest5: file(relativePath: { eq: "images/budapest/budapest5.jpg" }) {
      ...fluidImage
    }

    chorwacja1: file(relativePath: { eq: "images/chorwacja/chorwacja1.jpg" }) {
      ...fluidImage
    }

    chorwacja2: file(relativePath: { eq: "images/chorwacja/chorwacja2.jpg" }) {
      ...fluidImage
    }

    chorwacja3: file(relativePath: { eq: "images/chorwacja/chorwacja3.jpg" }) {
      ...fluidImage
    }

    chorwacja4: file(relativePath: { eq: "images/chorwacja/chorwacja4.jpg" }) {
      ...fluidImage
    }

    chorwacja5: file(relativePath: { eq: "images/chorwacja/chorwacja5.jpg" }) {
      ...fluidImage
    }

    slowenia1: file(relativePath: { eq: "images/slowenia/slowenia1.jpg" }) {
      ...fluidImage
    }
    slowenia2: file(relativePath: { eq: "images/slowenia/slowenia2.jpg" }) {
      ...fluidImage
    }

    slowenia3: file(relativePath: { eq: "images/slowenia/slowenia3.jpg" }) {
      ...fluidImage
    }
    slowenia4: file(relativePath: { eq: "images/slowenia/slowenia4.jpg" }) {
      ...fluidImage
    }

    wegry1: file(relativePath: { eq: "images/wegry/wegry1.jpg" }) {
      ...fluidImage
    }

    wegry2: file(relativePath: { eq: "images/wegry/wegry2.jpg" }) {
      ...fluidImage
    }
  }
`
