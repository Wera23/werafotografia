import React from "react"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/seo"
import Layout from "../components/layout"

import styles from "./Galleries.module.scss"

const PolskaGallery = ({ data }) => {
  const gutter = "2px"

  return (
    <>
      <SEO title={"Wera Chodanionek Fotografia: Kadry z Polski"} />
      <Layout>
        <div className={styles.gallery}>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img fluid={data.pol38.childImageSharp.fluid} alt="" />
              <Img fluid={data.pol1.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img fluid={data.pol48.childImageSharp.fluid} alt="" />
              <Img fluid={data.pol49.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img fluid={data.pol51.childImageSharp.fluid} alt="" />
              <Img fluid={data.pol23.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img fluid={data.pol54.childImageSharp.fluid} alt="" />
              <Img fluid={data.pol53.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img fluid={data.pol12.childImageSharp.fluid} alt="" />
              <Img fluid={data.pol10.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img fluid={data.pol44.childImageSharp.fluid} alt="" />
              <Img fluid={data.pol45.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img fluid={data.sea4.childImageSharp.fluid} alt="" />
              <Img fluid={data.sea5.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img fluid={data.pol4.childImageSharp.fluid} alt="" />
              <Img fluid={data.pol7.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img
                fluid={data.polska30.childImageSharp.fluid}
                alt=""
                className={styles.hiddenForMobile}
              />
              <Img
                className={styles.hiddenForMobile}
                fluid={data.polska31.childImageSharp.fluid}
                alt=""
              />
            </Masonry>
          </ResponsiveMasonry>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img
                className={styles.hiddenForMobile}
                fluid={data.pol24.childImageSharp.fluid}
                alt=""
              />
              <Img fluid={data.pol25.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>

          {/* <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.pol9.childImageSharp.fluid} alt="" />
                <Img fluid={data.pol5.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry> */}

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img fluid={data.pol18.childImageSharp.fluid} alt="" />
              <Img fluid={data.pol15.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img fluid={data.pol16.childImageSharp.fluid} alt="" />
              <Img
                className={styles.hiddenForMobile}
                fluid={data.pol17.childImageSharp.fluid}
                alt=""
              />
            </Masonry>
          </ResponsiveMasonry>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img
                className={styles.hiddenForMobile}
                fluid={data.pol11.childImageSharp.fluid}
                alt=""
              />
              <Img fluid={data.pol43.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img fluid={data.pol32.childImageSharp.fluid} alt="" />
              <Img fluid={data.pol37.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img fluid={data.pol2.childImageSharp.fluid} alt="" />
              <Img fluid={data.pol30.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img fluid={data.pol39.childImageSharp.fluid} alt="" />
              <Img fluid={data.sea10.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>

          {/* <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img
                  fluid={data.pol28.childImageSharp.fluid}
                  alt=""
                />
                <Img fluid={data.pol29.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry> */}

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img fluid={data.polska2.childImageSharp.fluid} alt="" />
              <Img fluid={data.pol52.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>

          {/* <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.polska1.childImageSharp.fluid} alt="" />
                <Img fluid={data.polska2.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry> */}

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
              <Img
                className={styles.hiddenForMobile}
                fluid={data.mazury4.childImageSharp.fluid}
                alt=""
              />
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
              <Img fluid={data.pol55.childImageSharp.fluid} alt="" />
              <Img fluid={data.pol56.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img
                className={styles.hiddenForMobile}
                fluid={data.pol57.childImageSharp.fluid}
                alt=""
              />
              <Img fluid={data.pol58.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>

          {/* <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img
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
                  fluid={data.mazury9.childImageSharp.fluid}
                  alt=""
                />
                <Img fluid={data.mazury10.childImageSharp.fluid} alt="" />
                <Img fluid={data.mazury11.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry> */}

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img fluid={data.pol20.childImageSharp.fluid} alt="" />
              <Img fluid={data.pol19.childImageSharp.fluid} alt="" />
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

          {/* 
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img
                  fluid={data.places3.childImageSharp.fluid}
                  alt=""
                />
                <Img fluid={data.places4.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry> */}

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img fluid={data.places5.childImageSharp.fluid} alt="" />
              <Img fluid={data.places6.childImageSharp.fluid} alt="" />
              <Img
                className={styles.hiddenForMobile}
                fluid={data.places7.childImageSharp.fluid}
                alt=""
              />
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
              <Img fluid={data.pol21.childImageSharp.fluid} alt="" />
              <Img
                className={styles.hiddenForMobile}
                fluid={data.pol22.childImageSharp.fluid}
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
              <Img
                className={styles.hiddenForMobile}
                fluid={data.sea1.childImageSharp.fluid}
                alt=""
              />
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
              <Img
                className={styles.hiddenForMobile}
                fluid={data.polska19.childImageSharp.fluid}
                alt=""
              />
              <Img
                className={styles.hiddenForMobile}
                fluid={data.polska20.childImageSharp.fluid}
                alt=""
              />
            </Masonry>
          </ResponsiveMasonry>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              {/* <Img fluid={data.polska6.childImageSharp.fluid} alt="" /> */}
              <Img
                className={styles.hiddenForMobile}
                fluid={data.polska7.childImageSharp.fluid}
                alt=""
              />
              <Img fluid={data.polska8.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img fluid={data.pol40.childImageSharp.fluid} alt="" />
              <Img
                className={styles.hiddenForMobile}
                fluid={data.pol41.childImageSharp.fluid}
                alt=""
              />
            </Masonry>
          </ResponsiveMasonry>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img fluid={data.pol8.childImageSharp.fluid} alt="" />
              <Img fluid={data.pol42.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>

          {/* <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.polska36.childImageSharp.fluid} alt="" />
                <Img fluid={data.polska32.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry> */}

          {/* <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.polska33.childImageSharp.fluid} alt="" />
                <Img fluid={data.polska34.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry> */}

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img fluid={data.pol31.childImageSharp.fluid} alt="" />
              <Img fluid={data.pol33.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img fluid={data.polska23.childImageSharp.fluid} alt="" />
              <Img fluid={data.polska27.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img fluid={data.pol26.childImageSharp.fluid} alt="" />
              <Img fluid={data.pol27.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img
                className={styles.hiddenForMobile}
                fluid={data.sea8.childImageSharp.fluid}
                alt=""
              />
              <Img fluid={data.sea7.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>

          {/* <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.polska28.childImageSharp.fluid} alt="" />
                <Img fluid={data.polska29.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry> */}

          {/* <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img
                  fluid={data.pol26.childImageSharp.fluid}
                  alt=""
                />
                <Img fluid={data.pol26.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry> */}

          {/* 
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.polska13.childImageSharp.fluid} alt="" />
                <Img fluid={data.mountains40.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.sea9.childImageSharp.fluid} alt="" />
                <Img fluid={data.sea11.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry>

            {/* <ResponsiveMasonry
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
            </ResponsiveMasonry> */}

          {/* <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 3 }}
              className={styles.partOfgallery}
            >
              <Masonry gutter={gutter}>
                <Img fluid={data.polska26.childImageSharp.fluid} alt="" />
                <Img fluid={data.polska24.childImageSharp.fluid} alt="" />
                <Img fluid={data.polska25.childImageSharp.fluid} alt="" />
              </Masonry>
            </ResponsiveMasonry> */}
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

    polska23: file(relativePath: { eq: "images/polska/Polska23.jpg" }) {
      ...fluidImage
    }

    polska24: file(relativePath: { eq: "images/polska/Polska24.jpg" }) {
      ...fluidImage
    }

    polska25: file(relativePath: { eq: "images/polska/Polska25.jpg" }) {
      ...fluidImage
    }

    polska26: file(relativePath: { eq: "images/polska/Polska26.jpg" }) {
      ...fluidImage
    }

    polska27: file(relativePath: { eq: "images/polska/Polska27.jpg" }) {
      ...fluidImage
    }

    polska28: file(relativePath: { eq: "images/polska/Polska28.jpg" }) {
      ...fluidImage
    }

    polska29: file(relativePath: { eq: "images/polska/Polska29.jpg" }) {
      ...fluidImage
    }

    polska30: file(relativePath: { eq: "images/polska/Polska30.jpg" }) {
      ...fluidImage
    }

    polska31: file(relativePath: { eq: "images/polska/Polska31.jpg" }) {
      ...fluidImage
    }

    polska32: file(relativePath: { eq: "images/polska/Polska32.jpg" }) {
      ...fluidImage
    }

    polska33: file(relativePath: { eq: "images/polska/Polska33.jpg" }) {
      ...fluidImage
    }

    polska34: file(relativePath: { eq: "images/polska/Polska34.jpg" }) {
      ...fluidImage
    }

    polska35: file(relativePath: { eq: "images/polska/Polska35.jpg" }) {
      ...fluidImage
    }

    polska36: file(relativePath: { eq: "images/polska/Polska36.jpg" }) {
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

    sea4: file(relativePath: { eq: "images/sea/sea4.jpg" }) {
      ...fluidImage
    }

    sea5: file(relativePath: { eq: "images/sea/sea5.jpg" }) {
      ...fluidImage
    }

    sea6: file(relativePath: { eq: "images/sea/sea6.jpg" }) {
      ...fluidImage
    }

    sea7: file(relativePath: { eq: "images/sea/sea7.jpg" }) {
      ...fluidImage
    }

    sea8: file(relativePath: { eq: "images/sea/sea8.jpg" }) {
      ...fluidImage
    }

    sea9: file(relativePath: { eq: "images/sea/sea9.jpg" }) {
      ...fluidImage
    }

    sea10: file(relativePath: { eq: "images/sea/sea10.jpg" }) {
      ...fluidImage
    }

    sea11: file(relativePath: { eq: "images/sea/sea11.jpg" }) {
      ...fluidImage
    }

    sea12: file(relativePath: { eq: "images/sea/sea12.jpg" }) {
      ...fluidImage
    }

    sea13: file(relativePath: { eq: "images/sea/sea13.jpg" }) {
      ...fluidImage
    }

    sea14: file(relativePath: { eq: "images/sea/sea14.jpg" }) {
      ...fluidImage
    }

    mountains40: file(
      relativePath: { eq: "images/mountains/mountains40.jpg" }
    ) {
      ...fluidImage
    }

    pol1: file(relativePath: { eq: "images/polska/pol1.jpg" }) {
      ...fluidImage
    }

    pol2: file(relativePath: { eq: "images/polska/pol2.png" }) {
      ...fluidImage
    }

    pol3: file(relativePath: { eq: "images/polska/pol3.jpg" }) {
      ...fluidImage
    }

    pol4: file(relativePath: { eq: "images/polska/pol4.jpg" }) {
      ...fluidImage
    }

    pol5: file(relativePath: { eq: "images/polska/pol5.jpg" }) {
      ...fluidImage
    }

    pol6: file(relativePath: { eq: "images/polska/pol6.jpg" }) {
      ...fluidImage
    }

    pol7: file(relativePath: { eq: "images/polska/pol7.jpg" }) {
      ...fluidImage
    }

    pol8: file(relativePath: { eq: "images/polska/pol8.png" }) {
      ...fluidImage
    }

    pol10: file(relativePath: { eq: "images/polska/pol10.png" }) {
      ...fluidImage
    }

    pol11: file(relativePath: { eq: "images/polska/pol11.png" }) {
      ...fluidImage
    }

    pol12: file(relativePath: { eq: "images/polska/pol12.png" }) {
      ...fluidImage
    }

    pol13: file(relativePath: { eq: "images/polska/pol13.png" }) {
      ...fluidImage
    }

    pol14: file(relativePath: { eq: "images/polska/pol14.jpg" }) {
      ...fluidImage
    }

    pol15: file(relativePath: { eq: "images/polska/pol15.jpg" }) {
      ...fluidImage
    }

    pol16: file(relativePath: { eq: "images/polska/pol16.jpg" }) {
      ...fluidImage
    }

    pol17: file(relativePath: { eq: "images/polska/pol17.jpg" }) {
      ...fluidImage
    }

    pol18: file(relativePath: { eq: "images/polska/pol18.jpg" }) {
      ...fluidImage
    }

    pol19: file(relativePath: { eq: "images/polska/pol19.jpg" }) {
      ...fluidImage
    }

    pol20: file(relativePath: { eq: "images/polska/pol20.jpg" }) {
      ...fluidImage
    }

    pol21: file(relativePath: { eq: "images/polska/pol21.jpg" }) {
      ...fluidImage
    }

    pol22: file(relativePath: { eq: "images/polska/pol22.jpg" }) {
      ...fluidImage
    }

    pol23: file(relativePath: { eq: "images/polska/pol23.jpg" }) {
      ...fluidImage
    }

    pol24: file(relativePath: { eq: "images/polska/pol24.jpg" }) {
      ...fluidImage
    }

    pol25: file(relativePath: { eq: "images/polska/pol25.png" }) {
      ...fluidImage
    }

    pol26: file(relativePath: { eq: "images/polska/pol26.jpg" }) {
      ...fluidImage
    }

    pol27: file(relativePath: { eq: "images/polska/pol27a.jpg" }) {
      ...fluidImage
    }

    pol28: file(relativePath: { eq: "images/polska/pol28.jpg" }) {
      ...fluidImage
    }

    pol29: file(relativePath: { eq: "images/polska/pol29.png" }) {
      ...fluidImage
    }

    pol30: file(relativePath: { eq: "images/polska/pol30.jpg" }) {
      ...fluidImage
    }

    pol31: file(relativePath: { eq: "images/polska/pol31.jpg" }) {
      ...fluidImage
    }

    pol32: file(relativePath: { eq: "images/polska/pol32.jpg" }) {
      ...fluidImage
    }

    pol33: file(relativePath: { eq: "images/polska/pol33.jpg" }) {
      ...fluidImage
    }

    pol37: file(relativePath: { eq: "images/polska/pol37.jpg" }) {
      ...fluidImage
    }

    pol38: file(relativePath: { eq: "images/polska/pol38.png" }) {
      ...fluidImage
    }
    pol39: file(relativePath: { eq: "images/polska/pol39.png" }) {
      ...fluidImage
    }
    pol40: file(relativePath: { eq: "images/polska/pol40.jpg" }) {
      ...fluidImage
    }
    pol41: file(relativePath: { eq: "images/polska/pol41.jpg" }) {
      ...fluidImage
    }

    pol42: file(relativePath: { eq: "images/polska/pol42.jpg" }) {
      ...fluidImage
    }
    pol43: file(relativePath: { eq: "images/polska/pol43.png" }) {
      ...fluidImage
    }

    pol44: file(relativePath: { eq: "images/polska/pol44.png" }) {
      ...fluidImage
    }

    pol45: file(relativePath: { eq: "images/polska/pol45.jpg" }) {
      ...fluidImage
    }

    pol45: file(relativePath: { eq: "images/polska/pol45.jpg" }) {
      ...fluidImage
    }

    pol48: file(relativePath: { eq: "images/polska/pol48.png" }) {
      ...fluidImage
    }

    pol49: file(relativePath: { eq: "images/polska/pol49.png" }) {
      ...fluidImage
    }

    pol50: file(relativePath: { eq: "images/polska/pol50.png" }) {
      ...fluidImage
    }

    pol51: file(relativePath: { eq: "images/polska/pol51.png" }) {
      ...fluidImage
    }
    pol52: file(relativePath: { eq: "images/polska/pol52.png" }) {
      ...fluidImage
    }
    pol53: file(relativePath: { eq: "images/polska/pol53.png" }) {
      ...fluidImage
    }
    pol54: file(relativePath: { eq: "images/polska/pol54.png" }) {
      ...fluidImage
    }
    pol55: file(relativePath: { eq: "images/polska/pol55.png" }) {
      ...fluidImage
    }
    pol56: file(relativePath: { eq: "images/polska/pol56.png" }) {
      ...fluidImage
    }

    pol57: file(relativePath: { eq: "images/polska/pol57.png" }) {
      ...fluidImage
    }

    pol58: file(relativePath: { eq: "images/polska/pol58.jpg" }) {
      ...fluidImage
    }
  }
`
