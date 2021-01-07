import React from "react"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import classnames from "classnames"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/seo"
import Layout from "../components/layout"

import "../../fontello/css/fontello.css"

import styles from "./overview.module.scss"

const Home = ({ data }) => {
  const gutter = "30px"

  return (
    <>
      <SEO title={"Wera Chodanionek Fotografia"} />
      <Layout>
        <div className={classnames(styles.homepage)}>
          <div className={styles.displayDesktop}>
            <div className={styles.overviewFull}>
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

            
             
              <div className={styles.HPGallery}>
                <ResponsiveMasonry
                  columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
                  className={styles.partOfgallery}
                >
                  <Masonry gutter={gutter}>
                    {/* <Img
                      fluid={data.mountains44.childImageSharp.fluid}
                      alt=""
                    /> */}
                     <Img
                      fluid={data.mountains52.childImageSharp.fluid}
                      alt=""
                    />
                    <Img
                      fluid={data.mountains48.childImageSharp.fluid}
                      alt=""
                    />
                  </Masonry>
                </ResponsiveMasonry>
              </div>



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
                  <h4>Natura</h4>
                  <Img
                    className={styles.overviewImgSmall}
                    fluid={data.places4.childImageSharp.fluid}
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
                    <Img
                      fluid={data.portugalia21.childImageSharp.fluid}
                      alt=""
                    />
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
                    <Img
                      fluid={data.mountains32.childImageSharp.fluid}
                      alt=""
                    />
                    <Img fluid={data.mountains2.childImageSharp.fluid} alt="" />
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

              <div className={styles.HPGallery}>
                <ResponsiveMasonry
                  columnsCountBreakPoints={{ 350: 1, 750: 1, 900: 2 }}
                  className={styles.partOfgallery}
                >
                  <Masonry gutter={gutter}>
                    <Img fluid={data.polska14.childImageSharp.fluid} alt="" />
                    <Img fluid={data.polska16.childImageSharp.fluid} alt="" />
                  </Masonry>
                </ResponsiveMasonry>
              </div>
            </div>
          </div>

          <div className={styles.displayMobile}>
            <div className={styles.overviewFull}>
              <Img
                fluid={data.mountains48.childImageSharp.fluid}
                className={styles.imageMobile}
                alt=""
              />
              <Img
                fluid={data.mountains20.childImageSharp.fluid}
                className={styles.imageMobile}
                alt=""
              />
              <Img
                fluid={data.places4.childImageSharp.fluid}
                className={styles.imageMobile}
                alt=""
              />
              <Img
                fluid={data.diff12.childImageSharp.fluid}
                className={styles.imageMobile}
                alt=""
              />
              <Img
                fluid={data.cat2.childImageSharp.fluid}
                className={styles.imageMobile}
                alt=""
              />
              <Img
                fluid={data.cat16.childImageSharp.fluid}
                className={styles.imageMobile}
                alt=""
              />
              <Img
                fluid={data.portugalia3.childImageSharp.fluid}
                className={styles.imageMobile}
                alt=""
              />
              <Img
                fluid={data.macedonia1.childImageSharp.fluid}
                className={styles.imageMobile}
                alt=""
              />
              <Img
                fluid={data.portugalia5.childImageSharp.fluid}
                className={styles.imageMobile}
                alt=""
              />
              <Img
                fluid={data.portugalia21.childImageSharp.fluid}
                className={styles.imageMobile}
                alt=""
              />
              <Img
                fluid={data.macedonia2.childImageSharp.fluid}
                className={styles.imageMobile}
                alt=""
              />
              <Img
                fluid={data.macedonia7.childImageSharp.fluid}
                className={styles.imageMobile}
                alt=""
              />
              <Img
                fluid={data.mountains26.childImageSharp.fluid}
                className={styles.imageMobile}
                alt=""
              />
              <Img
                fluid={data.mountains2.childImageSharp.fluid}
                className={styles.imageMobile}
                alt=""
              />
              <Img
                fluid={data.mountains32.childImageSharp.fluid}
                className={styles.imageMobile}
                alt=""
              />
              <Img
                fluid={data.mountains4.childImageSharp.fluid}
                className={styles.imageMobile}
                alt=""
              />

              <Img
                fluid={data.zagle16.childImageSharp.fluid}
                className={styles.imageMobile}
                alt=""
              />
              <Img
                fluid={data.zagle20.childImageSharp.fluid}
                className={styles.imageMobile}
                alt=""
              />
              <Img
                fluid={data.zagle14.childImageSharp.fluid}
                className={styles.imageMobile}
                alt=""
              />

              <Img
                fluid={data.husky4.childImageSharp.fluid}
                className={styles.imageMobile}
                alt=""
              />
              <Img
                fluid={data.husky1.childImageSharp.fluid}
                className={styles.imageMobile}
                alt=""
              />
              <Img
                fluid={data.teatr4.childImageSharp.fluid}
                className={styles.imageMobile}
                alt=""
              />

              <Img
                fluid={data.diff6.childImageSharp.fluid}
                className={styles.imageMobile}
                alt=""
              />
              <Img
                fluid={data.diff4.childImageSharp.fluid}
                className={styles.imageMobile}
                alt=""
              />
              <Img
                fluid={data.polska8.childImageSharp.fluid}
                className={styles.imageMobile}
                alt=""
              />

              <Img
                fluid={data.mazury3.childImageSharp.fluid}
                className={styles.imageMobile}
                alt=""
              />
              {/*<Img fluid={data.places5.childImageSharp.fluid} className={styles.imageMobile} /> */}

              <Img
                fluid={data.cat10.childImageSharp.fluid}
                className={styles.imageMobile}
                alt=""
              />
              <Img
                fluid={data.cat13.childImageSharp.fluid}
                className={styles.imageMobile}
                alt=""
              />
            </div>
          </div>

          <div className={styles.homepageSeeMore}>
            <h2>
              Zobacz galerie
              <i
                className={classnames(
                  "icon-pagelines",
                  styles.homepageSeeMoreIcon
                )}
              />
            </h2>

            <div className={styles.homepageSeeGaleries}>
              <a href="/mountains" className={styles.homepageSeeMoreElement}>
                Góry
              </a>

              <a className={styles.homepageSeeMoreElement} href="/travels">
                Podróże
              </a>

              <a className={styles.homepageSeeMoreElement} href="/cats">
                Koty
              </a>

              <a className={styles.homepageSeeMoreElement} href="/poland">
                Polska
              </a>

              <a className={styles.homepageSeeMoreElement} href="/situations">
                Sytuacje
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Home

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
    places5: file(relativePath: { eq: "images/places/places5.jpg" }) {
      ...fluidImage
    }
    polska2: file(relativePath: { eq: "images/polska/Polska2.jpg" }) {
      ...fluidImage
    }
    polska8: file(relativePath: { eq: "images/polska/Polska8.jpg" }) {
      ...fluidImage
    }

    polska14: file(relativePath: { eq: "images/polska/Polska14.jpg" }) {
      ...fluidImage
    }

    polska16: file(relativePath: { eq: "images/polska/Polska16.jpg" }) {
      ...fluidImage
    }

    diff12: file(relativePath: { eq: "images/diff/dif12.jpg" }) {
      ...fluidImage
    }
    diff4: file(relativePath: { eq: "images/diff/dif4.jpg" }) {
      ...fluidImage
    }

    diff6: file(relativePath: { eq: "images/diff/dif6.jpg" }) {
      ...fluidImage
    }
    macedonia1: file(relativePath: { eq: "images/macedonia/macedonia1.jpg" }) {
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

    mountains4: file(relativePath: { eq: "images/mountains/mountains4.jpg" }) {
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
    
    mountains52: file(
      relativePath: { eq: "images/mountains/mountains52.jpg" }
    ) {
      ...fluidImage
    }

    portugalia3: file(
      relativePath: { eq: "images/portugalia/portugalia3.jpg" }
    ) {
      ...fluidImage
    }
    portugalia5: file(
      relativePath: { eq: "images/portugalia/portugalia5.jpg" }
    ) {
      ...fluidImage
    }
    portugalia21: file(
      relativePath: { eq: "images/portugalia/portugalia21.jpg" }
    ) {
      ...fluidImage
    }

    cat2: file(relativePath: { eq: "images/cat/cat2.jpg" }) {
      ...fluidImage
    }
    cat3: file(relativePath: { eq: "images/cat/cat3.jpg" }) {
      ...fluidImage
    }
    cat7: file(relativePath: { eq: "images/cat/cat7.jpg" }) {
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

    zagle14: file(relativePath: { eq: "images/zagle/zagle14.jpg" }) {
      ...fluidImage
    }
    zagle16: file(relativePath: { eq: "images/zagle/zagle16.jpg" }) {
      ...fluidImage
    }

    zagle19: file(relativePath: { eq: "images/zagle/zagle19.jpg" }) {
      ...fluidImage
    }
    zagle18: file(relativePath: { eq: "images/zagle/zagle18.jpg" }) {
      ...fluidImage
    }
    zagle20: file(relativePath: { eq: "images/zagle/zagle20.jpg" }) {
      ...fluidImage
    }

    husky4: file(relativePath: { eq: "images/husky/husky4.jpg" }) {
      ...fluidImage
    }
    husky1: file(relativePath: { eq: "images/husky/husky1.jpg" }) {
      ...fluidImage
    }
    teatr4: file(relativePath: { eq: "images/teatr/teatr4.jpg" }) {
      ...fluidImage
    }

    mazury3: file(relativePath: { eq: "images/mazury/mazury3.jpg" }) {
      ...fluidImage
    }
  }
`
