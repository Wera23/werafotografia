import React from "react"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/seo"
import Layout from "../components/layout"
// import Gallery from "react-photo-gallery"

import styles from "./Galleries.module.scss"

// const photos = [
//   {
//     src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
//     width: 4,
//     height: 3
//   },
//   {
//     src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
//     width: 1,
//     height: 1
//   },
//   {
//     src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
//     width: 3,
//     height: 4
//   },
//   {
//     src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
//     width: 3,
//     height: 4
//   },
//   {
//     src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
//     width: 3,
//     height: 4
//   },
// ];

const Water = ({ data }) => {
  const gutter = "2px"

  return (
    <>
      <SEO title={"Wera Chodanionek Fotografia"} />

      <Layout>
        {/* <Gallery photos={photos} direction={"column"} /> */}
        <div className={styles.gallery}>

        <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img fluid={data.zywiec7.childImageSharp.fluid} alt="" />
              <Img fluid={data.zywiec8.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>

          
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img fluid={data.zywiec4.childImageSharp.fluid} alt="" />
              <Img fluid={data.zywiec2.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>

       

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img fluid={data.zywiec5.childImageSharp.fluid} alt="" />
              <Img fluid={data.zywiec6.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img fluid={data.zywiec1.childImageSharp.fluid} alt="" />
              <Img fluid={data.zywiec9.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img fluid={data.zywiec3.childImageSharp.fluid} alt="" />
              <Img fluid={data.zywiec10.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry>


          {/* <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
            className={styles.partOfgallery}
          >
            <Masonry gutter={gutter}>
              <Img fluid={data.katowice1.childImageSharp.fluid} alt="" />
              <Img fluid={data.katowice2.childImageSharp.fluid} alt="" />
            </Masonry>
          </ResponsiveMasonry> */}

 
        </div>
      </Layout>
    </>
  )
}

export default Water

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
    zywiec1: file(relativePath: { eq: "images/stories/zywiec1.jpg" }) {
      ...fluidImage
    }
    zywiec2: file(relativePath: { eq: "images/stories/zywiec2.jpg" }) {
      ...fluidImage
    }
    zywiec3: file(relativePath: { eq: "images/stories/zywiec3.jpg" }) {
      ...fluidImage
    }
    zywiec4: file(relativePath: { eq: "images/stories/zywiec4.jpg" }) {
      ...fluidImage
    }
    zywiec5: file(relativePath: { eq: "images/stories/zywiec5.jpg" }) {
      ...fluidImage
    }
    zywiec6: file(relativePath: { eq: "images/stories/zywiec6.jpg" }) {
      ...fluidImage
    }
    zywiec7: file(relativePath: { eq: "images/stories/zywiec7.jpg" }) {
      ...fluidImage
    }
    zywiec8: file(relativePath: { eq: "images/stories/zywiec8.jpg" }) {
      ...fluidImage
    }
    zywiec9: file(relativePath: { eq: "images/stories/zywiec9.jpg" }) {
      ...fluidImage
    }
    zywiec10: file(relativePath: { eq: "images/stories/zywiec10.jpg" }) {
      ...fluidImage
    }
    katowice1: file(relativePath: { eq: "images/stories/katowice1.jpg" }) {
      ...fluidImage
    }
    katowice2: file(relativePath: { eq: "images/stories/katowice2.jpg" }) {
      ...fluidImage
    }
  }
`
