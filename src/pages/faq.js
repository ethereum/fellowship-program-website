import React from "react"

import Link from "../components/Link"
import PageMetadata from "../components/PageMetadata"
import { useState } from "react"
import AccordionSection from "../components/Accordion"
import {
  PageBody,
  PageHeader,
  H1,
  H2,
  HR,
  FakeLink,
  TextHiddenMobile,
} from "../components/SharedStyledComponents"

const FAQPage = () => {
  // TODO simplify w/ Array... couldn't get it working
  const [expanded, setExpanded] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
    17: false,
    18: false,
    19: false,
    20: false,
    21: false,
    22: false,
    23: false,
    24: false,
    25: false,
    26: false,
  })

  let areAnyOpen = false

  Object.keys(expanded).forEach(i => {
    if (expanded[i]) {
      areAnyOpen = true
    }
  })

  const toggleAll = () => {
    const newState = {}
    const newStateItem = areAnyOpen ? false : true
    Object.keys(expanded).forEach(i => {
      newState[i] = newStateItem
    })
    setExpanded(newState)
  }

  const toggleAllText = areAnyOpen ? "Collapse all" : "Expand all"

  return (
    <>
      <PageMetadata title="FAQ" />
      <div>
        <PageHeader>
          <H1>
            <TextHiddenMobile>Fellowship</TextHiddenMobile> Program FAQ
          </H1>
        </PageHeader>
        <PageBody>
          <FakeLink onClick={toggleAll}>{toggleAllText}</FakeLink>
          <H2>About the Program</H2>
          <HR />

          <AccordionSection
            key={10}
            i={10}
            expanded={expanded}
            setExpanded={setExpanded}
            headerText="What is the Next Billion Fellowship Program?"
          >
            <p>
              The Ethereum Next Billion Fellowship Program is focused on
              identifying and supporting unique and talented individuals helping
              to demystify Ethereum's relevance and break down barriers to entry
              for people and communities not currently part of the Ethereum
              ecosystem.
            </p>
            <p>
              Fellows will be part of a small forum for leaders who, during the
              course of six months, drive their own projects that address a
              particular enabler or blocker for Ethereum becoming a public good
              that acts as a foundational layer for other public goods.
            </p>
            <p>
              While there are some cohort-wide activities, it is a
              self-directed, self-driven program. Depending on the needs of each
              Fellow and their project, different support is provided, including
              financial support, PR opportunities, mentorship, technical advice,
              and access to the Ethereum Foundation network. Fellows’ work will
              be highlighted to showcase the impact and value of Ethereum and
              its community.
            </p>
          </AccordionSection>

          <HR />
          <AccordionSection
            key={18}
            i={18}
            expanded={expanded}
            setExpanded={setExpanded}
            headerText="What kinds of projects qualify?"
          >
            <p>
              The project can be just an idea, in early stages, or already ongoing. 
		    It can be building an application, conducting research, building a community, 
		    or organizational program/initiative. Whatever it is, the project must enable the 
		    flourishing of regions, populations, or communities that are underrepresented in 
			    the Ethereum ecosystem. The project should also be open-source so that others can benefit 
			    from your learnings and outcomes. 
            </p>
            <p>
              Through your tangible story, we hope to tell part of the bigger Ethereum narrative and how it is reaching the
		wider community.
            </p>
          </AccordionSection>
          <HR />

           <AccordionSection
            key={20}
            i={20}
            expanded={expanded}
            setExpanded={setExpanded}
            headerText="I am building on an L2. Should I apply?"
          >
            <p>
	  	Yes, Layer 2 (and even in some cases side-chain) projects are eligible.
            </p>
          </AccordionSection>
          <HR />

         <AccordionSection
            key={8}
            i={8}
            expanded={expanded}
            setExpanded={setExpanded}
            headerText="What are the key dates of the program?"
          >
            <p>Program Duration: Program Duration: April 2024 - October 2024</p>
            <p>While the official duration of the fellowship is six months, we expect 
              and hope fellows remain consistent contributors to the Ethereum community as alumni.
We will help you define what milestones you can accomplish for the 6 months of the Fellowship.
            </p>

          </AccordionSection>
          <HR />
          <AccordionSection
            key={12}
            i={12}
            expanded={expanded}
            setExpanded={setExpanded}
            headerText="What is the time commitment?"
          >
            <p>
              Fellows are not required to work on their project full-time, but
              Fellows commit to:
            </p>
            <ul>
              <li>
                Defining goals for their project and driving it forward in a
                measurable way during the 6 month program period.
              </li>
              <li>
                Documenting their journey, and writing a reflective blogpost
                after the fellowship is complete
              </li>
              <li>
                Participating in cohort-wide activities on a monthly basis and engage frequently with the team and the Fellows
              </li>
              <li>
                Sharing their projects/research in relevant local, regional, or
                global conferences
              </li>
            <p>
              Regarding time commitment, 
              expect to dedicate around 20 hours per month to the Fellowship program and its activities.
            </p>
            </ul>
          </AccordionSection>
          <HR />
          <AccordionSection
            key={14}
            i={14}
            expanded={expanded}
            setExpanded={setExpanded}
            headerText="What are some examples of Fellowship projects?"
          >
            <p>
              There are no boundaries to what a Fellowship project can look like. 
              Here you can find examples of projects from previous cohorts. 
            </p>
            <ul>
              <li>
                Implementing blockchain in{" "}
                <Link to="https://acreafrica.com/">
                  agricultural microinsurance
                </Link>{" "}
                in Kenya
              </li>
              <li>
                Accelerating the{" "}
                <Link to="https://os.city/">
                  meaningful adoption of blockchain in governments
                </Link>{" "}
                with a focus on the Latin America region
              </li>
              <li>
                Tackling{" "}
                <Link to="https://www.brac.net/">blockchain strategy</Link>{" "}
                within the world’s largest development agency
              </li>
              <li>
                {" "}
                <Link to="https://bru.finance/">Harvest-time loans</Link>{" "}
                that utilize decentralized liquidity to smooth out farmer income
              </li>
              <li>
                {" "}
                <Link to="https://zefi.com/en">Researching how blockchains can solve problems</Link>{" "} 
                in conflict and humanitarian settings
              </li>
              <li>
                {" "}
                <Link to="https://marcus.am/mint">Exploring the real-world barriers</Link>{" "}
                to physical asset financing in LatAm
              </li>
              <li>Exploring the trustless transfer of assets after death through a legal lens</li>
              <li>
                Using smart contracts for {" "}
                <Link to="https://bloinx.io/">informal savings circles</Link>{" "}
                in Latin America
              </li>
               <li>
                Bringing web3 to {" "}
                <Link to="https://www.scout.org/">the global scouting movement</Link>{" "}
              </li>
		<li>
		Digital repatriation of art and revenue sharing
		</li>
		
		<li>
blockchain solutions in war-torn countries
		</li>
<li>
impact certificates for investigative journalists
	</li>
<li> 
bringing DeFi loans to those receiving crypto
</li>
<li> 			
retroactive solidarity payments in education and employment
</li>

			
           </ul>
          </AccordionSection>
          <HR />
          <AccordionSection
            key={15}
            i={15}
            expanded={expanded}
            setExpanded={setExpanded}
            headerText="What is included in the Fellowship?"
          >
            <ul>
              <li>Networking and community-building</li>
              <li>Advisory and strategic guidance</li>
              <li>Technical and practical mentorship</li>
              <li>A modest stipend for travel and project expenses</li>
              <li>Exposure to Ethereum and domain-specific events</li>
            </ul>
            <p>
            The Fellowship is not a venture capital or incubator program. 
            Direct project funding will be considered on a case-by-case basis, 
            but in most cases will be referred to the <Link to="https://esp.ethereum.foundation">
              the Ecosystem Support Program.
            </Link>
            </p>
          </AccordionSection>
          <HR />

          <AccordionSection
            key={13}
            i={13}
            expanded={expanded}
            setExpanded={setExpanded}
            headerText="What makes a good Fellow? Do I need to be a developer? Do I need to have an organization?"
          >
            <p>
              There is no formal criteria for becoming a Fellow. All applicants
              will be reviewed based on the content of the materials submitted.
              Final candidates will be asked for a short follow-up interview
              following selection.
            </p>
            <p>
              Applications from all technical and non-technical backgrounds are
              encouraged. Some familiarity with web3/Ethereum concepts is
              expected, but not required.
            </p>
            <p>
              Fellows need not be affiliated with any organization or team.
              Independent individuals are welcome to apply.
            </p>
          </AccordionSection>
          <HR />

	<AccordionSection
            key={13}
            i={13}
            expanded={expanded}
            setExpanded={setExpanded}
            headerText="When do I find out about the selection process?"
          >
            <p>
             Applications will be reviewed on a rolling basis. Interviews will
		take place with short-listed candidates, and we expect the 
		selection process to be finalized before mid-April.
		Independent of their selection, all candidates will be informed about the outcome. 
            </p>
          </AccordionSection>
          <HR />


		<AccordionSection
             key={9}
            i={9}
            expanded={expanded}
            setExpanded={setExpanded}
            headerText="How can I clarify any questions about the process?"
          >
            <p>
              We will run two office hours sessions: 

1st Session: Dec 6th, 2023 at 4 pm UTC
2nd Session: Jan 9th, 2024 at 6 am UTC
Please apply to attend one of the office hours by submitting
	your information and questions <Link to="https://officehours-nxbnfp4.paperform.co">here.</Link>
            </p>
          </AccordionSection>
          <HR />

          <AccordionSection
             key={9}
            i={9}
            expanded={expanded}
            setExpanded={setExpanded}
            headerText="I want to stay in the loop about the Next Billion Fellows and related news. How can I find out more about it?"
          >
            <p>
              You can subscribe to receive updates from our <Link to="https://groups.google.com/a/ethereum.org/g/nextbillion-fellowship-updates?pli=1"> Google group</Link>
            </p>
          </AccordionSection>
          <HR />

          <AccordionSection
            key={11}
            i={11}
            expanded={expanded}
            setExpanded={setExpanded}
            headerText="I would like to get more involved with the Ethereum community. Where can I start?"
          >
            <p>
            You can start by visiting the Ethereum.org - a public, open-source resource for the Ethereum community that anyone can contribute to. 
            There you’ll also find <Link to="https://ethereum.org/en/community/get-involved/">ways to get involved.</Link>
            </p>
            <p>
              Devconnect is happening this year in Istanbul, from 13th to 19th November. 
              Anyone can organize or attend an event - view the full schedule <Link to="https://devconnect.org/">here.</Link>
            </p>
          </AccordionSection>
          <HR />
          
          <H2>About Ethereum</H2>
          <HR />
          <AccordionSection
            key={0}
            i={0}
            expanded={expanded}
            setExpanded={setExpanded}
            headerText="What is Ethereum?"
          >
            <p>
              Ethereum is a general-purpose blockchain that has become a global,
              open-source platform for decentralized applications. On Ethereum,
              you can write code that controls digital value, runs exactly as
              programmed, and is accessible anywhere in the world.
            </p>
          </AccordionSection>
          <HR />
          <AccordionSection
            key={1}
            i={1}
            expanded={expanded}
            setExpanded={setExpanded}
            headerText="Where can I learn more about Ethereum?"
          >
            <p>
              If you wish to find out more about Ethereum, please visit{" "}
              <Link to="https://ethereum.org">Ethereum.org</Link>.
            </p>
          </AccordionSection>
          <HR />
          <AccordionSection
            key={23}
            i={23}
            expanded={expanded}
            setExpanded={setExpanded}
            headerText="What is Ethereum?"
          >
            <p>
              Ethereum is a general-purpose blockchain that has become a global,
              open-source platform for decentralized applications. On Ethereum,
              you can write code that controls digital value, runs exactly as
              programmed, and is accessible anywhere in the world.
            </p>
          </AccordionSection>
          <HR />
 	  <AccordionSection
            key={2}
            i={2}
            expanded={expanded}
            setExpanded={setExpanded}
            headerText="What is the Ethereum Foundation?"
          >
            <p>
              The Ethereum Foundation (EF) is a non-profit organization
              dedicated to supporting Ethereum and related technologies. As part
              of a large community of organizations, individuals, and companies
              that support the network, our mission is to do what only we can to
              help ensure success for Ethereum in the long-term. The
              Foundation's role is to allocate resources to critical projects,
              to be a valued voice within the Ethereum ecosystem, and to
              advocate for Ethereum to the outside world.
            </p>
          </AccordionSection>
          <HR />
          <AccordionSection
            key={3}
            i={3}
            expanded={expanded}
            setExpanded={setExpanded}
            headerText="How is Ethereum currently being used?"
          >
            <p>
              Ethereum is used for impactful cases such as identity solutions,
              international record-keeping & decentralized finance, as well as
              more entertaining cases such as collectibles and games. If you are
              interested in learning more, please visit{" "}
              <Link to="https://ethereum.org">Ethereum.org</Link>.
            </p>
          </AccordionSection>
          <HR />
      <AccordionSection
            key={4}
            i={4}
            expanded={expanded}
            setExpanded={setExpanded}
            headerText="What is a public good?"
          >
          <p>
  	  <Link to="https://en.wikipedia.org/wiki/Public_good_(economics)">
  	  The full definition of a public good is complicated.</Link> 
  	  But in the context of Ethereum and the Fellowship Program, we can say that 
  	  public goods solve a problem or benefit a community by providing value that can be 
  	  used by anyone, and that can be reproduced/replicated in a wide variety of places/contexts. 
	  </p>
          </AccordionSection>
          <HR />

          <H2>Media</H2>

          <HR />
          <AccordionSection
            key={26}
            i={26}
            expanded={expanded}
            setExpanded={setExpanded}
            headerText="I am a journalist looking to interview someone in the Ethereum Foundation's leadership."
          >
            <p>
              For interview requests, please fill out{" "}
              <Link to="https://effellowship.paperform.co/">this form</Link>.
            </p>
          </AccordionSection>
          <HR />
        </PageBody>
      </div>
    </>
  )
}

export default FAQPage
