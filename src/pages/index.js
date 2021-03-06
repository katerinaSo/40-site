import React from "react"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
export default ({ data }) => (
  <Layout>
    <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
      <Banner
        title="sander sorok"
        info=" "
      >
        {/* <AniLink fade to="/tours" className="btn-white">
          view
        </AniLink> */}
      </Banner>
    </StyledHero>
    <About />
    {/* <Services /> */}
  </Layout>
)
export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "sanderRacer.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
