import React from "react"
import styled from "styled-components"
import PageMetadata from "../components/PageMetadata"
import {
  PageBody,
  ButtonLink,
  Center,
  H2,
} from "../components/SharedStyledComponents"
// import { StaticImage } from "gatsby-plugin-image"
import horzLogo from "../images/fellowship-program-logo.svg"
import vertLogo from "../images/fellowship-program-logo-vertical.svg"
import BlogPosts from "../components/BlogPosts"
import { screenSizeS, colorGrayLight } from "../utils/styles"
import { graphql } from "gatsby"

const Header = styled.h3`
  text-align: center;
  margin-top: 8px;
  color: ${colorGrayLight};
  @media (max-width: 340px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`

const HorizontalLogo = styled.img`
  width: 80%;
  max-width: 450px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  @media (max-width: ${screenSizeS}) {
    display: none;
  }
`

const VerticalLogo = styled.img`
  display: none;
  @media (max-width: ${screenSizeS}) {
    /* width: 200px; */
    display: block;
    margin: 2rem auto;
  }
  @media (max-width: 340px) {
    width: 140px;
    display: block;
    margin: 2rem auto;
  }
`

const HeroIllustration = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background: radial-gradient(50% 50% at 50% 50%, #F9FFFC 0%, #DEF9FF 100%);
  border-radius: 30px;
  height: min(65vh, 600px);
  margin: 0px 15px;
  overflow: hidden;
`;

const Copy = styled.div`
  margin-bottom: 56px;
`
const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  line-height: 1.6em;
  margin-bottom: 60px;

  > .img {
    width: 50%;

    @media (max-width: ${styles.screenSizeM}) {
      min-width: 65%;
      margin-bottom: 16px;
    }

    @media (max-width: ${styles.screenSizeS}) {
      min-width: 100%;
    }
  }

  > .description {
    margin-left: 32px;
    flex-basis: 50%;
    flex-shrink: 1;
    margin: 0px;
    margin-left: 32px;

    @media (max-width: ${styles.screenSizeM}) {
      margin-left: 0px;
    }
  }

  @media (max-width: ${styles.screenSizeM}) {
    flex-direction: column;
  }

  > * {
    @media (max-width: ${styles.screenSizeM}) {
      width: 100%;
    }
  }
`

const Apply = styled.div`
  background: radial-gradient(50% 50% at 50% 50%, #F5FFFA 0%, #DEF9FF 100%);
  border-radius: 15px;
  padding: 32px 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`

const Section = styled.div`
  margin-bottom: 24px;
`

class IndexPage extends React.Component {
  render() {
    return (
      <>
        <PageMetadata
          title="Ethereum Next Billion Fellowship Program"
          useTitleTemplate={false}
          description="Make Ethereum a public good for the next Billion."
        />
        <div>
          <HeroIllustration>
            <HorizontalLogo
              src={horzLogo}
              alt="Ethereum Foundation Fellowship Program Horizontal Logo"
            />
            <VerticalLogo
              src={vertLogo}
              alt="Ethereum Foundation Fellowship Program Vertical Logo"
            />

            {/* 
              TODO: Add illustration when ready
              <StaticImage
              src="../images/fellowship_schoolyard.png"
              alt="Fellows World Map"
              placeholder="blurred"
              layout="constrained"
            /> */}
          </HeroIllustration>

          <PageBody>
            <Copy id="welcome">
              <Section>
                <p>
                  We believe that it's possible to use Ethereum to improve
                  the lives of billions of people. But we need more than just
                  technology -- we need new ways of thinking about how humans
                  interact with each other and with their environment.
                  We need new stories to tell, new visions for a better future,
                  and new ways of expressing our values in code.
                </p>
                <p>
                  The Next Billion Fellowship at the Ethereum Foundation is
                  a search for stories. Stories that inspire us to focus on
                  the important things, to find balance and fairness in the
                  way we go about solving our problems, to push deeper into
                  the mysteries of human cooperation. 
                </p>
                <p>
                  During the course of 6 months, Fellows receive support to
                  drive their own projects, and tell their own stories of
                  Ethereum-enabled public goods destined to help billions
                  coordinate and thrive.
                </p>

              </Section>
            <Section>
              <Center>
                <H2>Fellowship Program Cohort 3</H2>
             </Center>
             <Profile>
                <StaticImage
                  className="img"
                  src="../images/headshots/Brian.jpeg"
                  alt="Fellow: Brian Limiardi"
                  placeholder="blurred"
                  objectFit="contain"
                  layout="fixed"
                  width="300"
                />
                <p className="description">
                Brian Limiardi builds for financial inclusion in Indonesia as co-founder of Copra. 
                While access to personal loans is available through banks, there are many contexts 
                in which the only way to get a loan for business is through informal lenders (read: loan sharks). 
                For folks that choose to work and invoice in cryptocurrency, access to even simple 
                legacy financial tools like personal or small business loans can be an obstacle. For his Fellowship, 
                Brian will focus on researching the needs and realities of the growing demographic 
                of workers and small businesses who use crypto as a primary means 
                of invoicing and bookkeeping.
                </p>
              </Profile>
              <Profile>
                <StaticImage
                  className="img"
                  src="../images/headshots/Devansh.jpeg"
                  alt="Fellow: Devansh Mehta"
                  placeholder="blurred"
                  objectFit="contain"
                  layout="fixed"
                  width="300"
                />
                <p className="description">
                  Devansh Mehta, co-founder of VoiceDeck, is interested in mapping out public good impact space. 
                  Impact methodologies and markets for environmental use cases are well-documented mechanisms, 
                  but sometimes ‘impact’ wanders into more subjective territory: 
                  Investigative journalism, for example, is undoubtedly a public good. 
                  How can the real work of journalists be documented and valued in a way that fits into the right funding mechanism? 
                  Devansh will work with citizen journalism newsrooms to explore methodologies of impact documentation using the 
                  {" "}
                  <Link to="https://hypercerts.org/">hypercerts standard, </Link>
                  with an aim to find a good mechanism of retroactive funding for positive social outcomes. 
                </p>
              </Profile>
              <Profile>
                <StaticImage
                  className="img"
                  src="../images/headshots/Masa.jpeg"
                  alt="Fellow: Masa Fukuhara"
                  placeholder="blurred"
                  objectFit="contain"
                  layout="fixed"
                  width="300"
                />
                <p className="description">
                  Masahiro (Masa) Fukuhara wants to spread the spirit of ONGAESHI, (恩返し, "To return a favor") 
                  in the world of education. ONGAESHI DAO is exploring mechanisms of retroactive solidarity payments 
                  in education and employment. For his Fellowship, Masa and other ONGAESHI DAO team members will 
                  learn from pilot programs in which contributors to the public good of education like 
                  funders and teachers are rewarded when businesses hire their students.  
                </p>
              </Profile>
              <Profile>
                <StaticImage
                  className="img"
                  src="../images/headshots/Mulenga.jpeg"
                  alt="Fellow: Mulenga Kapwepwe"
                  placeholder="blurred"
                  objectFit="contain"
                  layout="fixed"
                  width="300"
                />
                <p className="description">
                  Mulenga Kapwepwe is co-founder of the Women’s History Museum of Zambia. 
                  There are many African artifacts in museums around the world, but rarely do those items 
                  have a tangible connection to the people and communities who created them. 
                  For her Fellowship, Mulenga is working with the Zambian web3 community to 
                  create a tokenized artifact registry, experimenting with museum revenue sharing for 
                  community documentation of art, customs, and crafting methodologies still practiced 
                  by the descendants of those items on display in museums around the world. 
                  Even if the items won’t return to their places of origin in the near future, 
                  it’s a small step toward bridging a gap of ownership that spans centuries.
                </p>
              </Profile>
              <Profile>
                <StaticImage
                  className="img"
                  src="../images/headshots/valeriia.jpeg"
                  alt="Fellow: Valeriia Panina"
                  placeholder="blurred"
                  objectFit="contain"
                  layout="fixed"
                  width="300"
                />
                <p className="description">
                Valeriia is a user experience specialist and an advisor to the 
                Ukraine's Ministry of Digital Transformation. 
                The war in Ukraine has shown that ingenuity and tenacity in human coordination is essential. 
                When understanding the potential of protocols like Ethereum to be useful in such a time, 
                pragmatism is wise. During her Fellowship, Ria will research the 
                real drivers and blockers of adoption of cryptocurrencies and other decentralized applications for 
                ordinary users to map emergent use cases and behaviors in Ukraine.
                </p>
              </Profile>

            </Section>
              <Section>
                <Center>
                  <H2>Eligibility of Projects and Candidates</H2>
                </Center>

                <p>
                  A Fellow is a leader committed to their own project that helps
                  Ethereum become a tool of and for the next billion. Their
                  project could be a decentralized app, a piece of research, an
                  organizational initiative, or something else entirely.
                  There are no strict requirements for Next Billion Fellowship
                  projects, save one: earnesty.
                </p>
                <p>
                  Whatever the project, whomever the Fellow, the program seeks to
                  enable the flourishing of populations, communities, or
                  individuals under-represented in the Ethereum ecosystem today.
                  The Fellowship is neither the beginning nor the end of
                  a Fellow's journey, but it may provide the support needed to
                  encourage more ambitious, long-term goals and mindset.
                </p>
              </Section>
            </Copy>

            <Apply>
              <p>
                Fellows are changemakers, visionaries, pragmatists, and creatives working on ambitious projects that seek to improve the lives of billions.
              </p>
              <p>
                Next Billion Fellows should be on a personal quest, and should be able to represent their project's context in public.
              </p>

              <ButtonLink to="TODO: put link">
                Subscribe to receive updates
              </ButtonLink>
            </Apply>
          </PageBody>

          <BlogPosts
            posts={this.props.data.allBlogPost.nodes}
          />

          <PageBody>
            <Section>
              <Center>
                <H2 id="contact">We want to hear from you!</H2>
                <p style={{ textAlign: 'center' }}>Stay tuned and get updates on the Next Billion Fellowship Program and related news!</p>


                <ButtonLink to="">
                  Sign me up.
                </ButtonLink>
              </Center>
            </Section>
          </PageBody>
        </div>
      </>
    )
  }
}

export default IndexPage

export const query = graphql`
  query BlogPostQuery {
    allBlogPost {
      nodes {
        body
        date
        description
        imageUrl
        id
        permaLink
        title
      }
    }
  }
`;
