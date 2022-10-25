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
              <Img fluid={data.husky1.childImageSharp.fluid} alt="" />
              <Img fluid={data.husky2.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img fluid={data.husky4.childImageSharp.fluid} alt="" />
              <Img fluid={data.husky3.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img fluid={data.husky9.childImageSharp.fluid} alt="" />
              <Img fluid={data.husky10.childImageSharp.fluid} alt="" />
              <Img fluid={data.husky11.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img fluid={data.husky7.childImageSharp.fluid} alt="" />
              <Img fluid={data.husky8.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img fluid={data.teatr9.childImageSharp.fluid} alt="" />
              <Img fluid={data.teatr10.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img fluid={data.teatr1.childImageSharp.fluid} alt="" />
              <Img fluid={data.teatr2.childImageSharp.fluid} alt="" />
              <Img fluid={data.teatr3.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img fluid={data.teatr6.childImageSharp.fluid} alt="" />
              <Img fluid={data.teatr7.childImageSharp.fluid} alt="" />
              <Img fluid={data.teatr8.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img fluid={data.teatr5.childImageSharp.fluid} alt="" />
              <Img fluid={data.teatr4.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img fluid={data.zagle12.childImageSharp.fluid} alt="" />
              <Img fluid={data.zagle16.childImageSharp.fluid} alt="" />
              <Img fluid={data.zagle14.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img fluid={data.zagle13.childImageSharp.fluid} alt="" />
              <Img fluid={data.zagle10.childImageSharp.fluid} alt="" />
              <Img fluid={data.zagle11.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img fluid={data.zagle15.childImageSharp.fluid} alt="" />
              <Img fluid={data.zagle9.childImageSharp.fluid} alt="" />
              <Img fluid={data.zagle17.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img fluid={data.zagle1.childImageSharp.fluid} alt="" />
              <Img fluid={data.zagle2.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img fluid={data.zagle6.childImageSharp.fluid} alt="" />
              <Img fluid={data.zagle7.childImageSharp.fluid} alt="" />
              <Img fluid={data.zagle8.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img fluid={data.zagle20.childImageSharp.fluid} alt="" />
              <Img fluid={data.zagle21.childImageSharp.fluid} alt="" />
              <Img fluid={data.zagle22.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img fluid={data.zagle23.childImageSharp.fluid} alt="" />
              <Img fluid={data.zagle24.childImageSharp.fluid} alt="" />
              <Img fluid={data.zagle25.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img fluid={data.zagle3.childImageSharp.fluid} alt="" />
              <Img fluid={data.zagle4.childImageSharp.fluid} alt="" />
              <Img fluid={data.zagle5.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img fluid={data.mdk2.childImageSharp.fluid} alt="" />
              <Img fluid={data.mdk7.childImageSharp.fluid} alt="" />
              <Img fluid={data.mdk3.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>

          {/* <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.mdk4.childImageSharp.fluid} alt="" />

                <Img fluid={data.mdk8.childImageSharp.fluid} alt="" />
                <Img fluid={data.mdk9.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry> */}
        </div>
      </Layout>
    </>
  )
}

export default SituationsGallery

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
    husky1: file(relativePath: { eq: "images/husky/husky1.jpg" }) {
      ...fluidImage
    }

    husky2: file(relativePath: { eq: "images/husky/husky2.jpg" }) {
      ...fluidImage
    }

    husky3: file(relativePath: { eq: "images/husky/husky3.jpg" }) {
      ...fluidImage
    }

    husky4: file(relativePath: { eq: "images/husky/husky4.jpg" }) {
      ...fluidImage
    }

    husky5: file(relativePath: { eq: "images/husky/husky5.jpg" }) {
      ...fluidImage
    }
    husky6: file(relativePath: { eq: "images/husky/husky6.jpg" }) {
      ...fluidImage
    }

    husky7: file(relativePath: { eq: "images/husky/husky7.jpg" }) {
      ...fluidImage
    }
    husky8: file(relativePath: { eq: "images/husky/husky8.jpg" }) {
      ...fluidImage
    }
    husky9: file(relativePath: { eq: "images/husky/husky9.jpg" }) {
      ...fluidImage
    }

    husky10: file(relativePath: { eq: "images/husky/husky10.jpg" }) {
      ...fluidImage
    }

    husky11: file(relativePath: { eq: "images/husky/husky11.jpg" }) {
      ...fluidImage
    }

    teatr1: file(relativePath: { eq: "images/teatr/teatr1.jpg" }) {
      ...fluidImage
    }

    teatr2: file(relativePath: { eq: "images/teatr/teatr2.jpg" }) {
      ...fluidImage
    }

    teatr3: file(relativePath: { eq: "images/teatr/teatr3.jpg" }) {
      ...fluidImage
    }
    teatr4: file(relativePath: { eq: "images/teatr/teatr4.jpg" }) {
      ...fluidImage
    }

    teatr5: file(relativePath: { eq: "images/teatr/teatr5.jpg" }) {
      ...fluidImage
    }

    teatr6: file(relativePath: { eq: "images/teatr/teatr6.jpg" }) {
      ...fluidImage
    }

    teatr7: file(relativePath: { eq: "images/teatr/teatr7.jpg" }) {
      ...fluidImage
    }

    teatr8: file(relativePath: { eq: "images/teatr/teatr8.jpg" }) {
      ...fluidImage
    }

    teatr9: file(relativePath: { eq: "images/teatr/teatr9.jpg" }) {
      ...fluidImage
    }

    teatr10: file(relativePath: { eq: "images/teatr/teatr10.jpg" }) {
      ...fluidImage
    }

    zagle1: file(relativePath: { eq: "images/zagle/zagle1.jpg" }) {
      ...fluidImage
    }

    zagle2: file(relativePath: { eq: "images/zagle/zagle2.jpg" }) {
      ...fluidImage
    }

    zagle3: file(relativePath: { eq: "images/zagle/zagle3.jpg" }) {
      ...fluidImage
    }

    zagle4: file(relativePath: { eq: "images/zagle/zagle4.jpg" }) {
      ...fluidImage
    }

    zagle5: file(relativePath: { eq: "images/zagle/zagle5.jpg" }) {
      ...fluidImage
    }
    zagle6: file(relativePath: { eq: "images/zagle/zagle6.jpg" }) {
      ...fluidImage
    }
    zagle7: file(relativePath: { eq: "images/zagle/zagle7.jpg" }) {
      ...fluidImage
    }
    zagle8: file(relativePath: { eq: "images/zagle/zagle8.jpg" }) {
      ...fluidImage
    }

    zagle9: file(relativePath: { eq: "images/zagle/zagle9.jpg" }) {
      ...fluidImage
    }
    zagle10: file(relativePath: { eq: "images/zagle/zagle10.jpg" }) {
      ...fluidImage
    }
    zagle11: file(relativePath: { eq: "images/zagle/zagle11.jpg" }) {
      ...fluidImage
    }

    zagle12: file(relativePath: { eq: "images/zagle/zagle12.jpg" }) {
      ...fluidImage
    }

    zagle13: file(relativePath: { eq: "images/zagle/zagle13.jpg" }) {
      ...fluidImage
    }

    zagle14: file(relativePath: { eq: "images/zagle/zagle14.jpg" }) {
      ...fluidImage
    }
    zagle15: file(relativePath: { eq: "images/zagle/zagle15.jpg" }) {
      ...fluidImage
    }
    zagle16: file(relativePath: { eq: "images/zagle/zagle16.jpg" }) {
      ...fluidImage
    }
    zagle17: file(relativePath: { eq: "images/zagle/zagle17.jpg" }) {
      ...fluidImage
    }
    zagle18: file(relativePath: { eq: "images/zagle/zagle18.jpg" }) {
      ...fluidImage
    }
    zagle19: file(relativePath: { eq: "images/zagle/zagle19.jpg" }) {
      ...fluidImage
    }
    zagle20: file(relativePath: { eq: "images/zagle/zagle20.jpg" }) {
      ...fluidImage
    }
    zagle21: file(relativePath: { eq: "images/zagle/zagle21.jpg" }) {
      ...fluidImage
    }
    zagle22: file(relativePath: { eq: "images/zagle/zagle22.jpg" }) {
      ...fluidImage
    }
    zagle23: file(relativePath: { eq: "images/zagle/zagle23.jpg" }) {
      ...fluidImage
    }

    zagle24: file(relativePath: { eq: "images/zagle/zagle24.jpg" }) {
      ...fluidImage
    }

    zagle25: file(relativePath: { eq: "images/zagle/zagle25.jpg" }) {
      ...fluidImage
    }
    zagle26: file(relativePath: { eq: "images/zagle/zagle26.jpg" }) {
      ...fluidImage
    }

    mdk1: file(relativePath: { eq: "images/mdk/mdk1.jpg" }) {
      ...fluidImage
    }
    mdk2: file(relativePath: { eq: "images/mdk/mdk2.jpg" }) {
      ...fluidImage
    }
    mdk3: file(relativePath: { eq: "images/mdk/mdk3.jpg" }) {
      ...fluidImage
    }
    mdk4: file(relativePath: { eq: "images/mdk/mdk4.jpg" }) {
      ...fluidImage
    }
    mdk5: file(relativePath: { eq: "images/mdk/mdk5.jpg" }) {
      ...fluidImage
    }
    mdk6: file(relativePath: { eq: "images/mdk/mdk6.jpg" }) {
      ...fluidImage
    }
    mdk7: file(relativePath: { eq: "images/mdk/mdk7.jpg" }) {
      ...fluidImage
    }
    mdk8: file(relativePath: { eq: "images/mdk/mdk8.jpg" }) {
      ...fluidImage
    }
    mdk9: file(relativePath: { eq: "images/mdk/mdk9.jpg" }) {
      ...fluidImage
    }
  }
`
