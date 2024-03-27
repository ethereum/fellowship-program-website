import { Box, Text } from '@chakra-ui/react'

import ButtonLink from '@/components/Buttons/ButtonLink'
import {
  H1,
  H2
} from "@/components/Headings"
import ContentContainer from '@/components/ContentContainer'
import ImageSplitContent from '@/components/ImageSplitContent'

import TempImage from '@/public/images/temp.png'

const HomePage = () => {
  return (
    <>
      <Box>
        <H1>HomePage</H1>
      </Box>
      <ContentContainer mb={8}>
        <ImageSplitContent
          image={TempImage}
          imageBorder='right'
          imageSide='right'
        >
          <Box gap={8}>
            <H2>The Next Billion Fellowship</H2>
            <Text>
              The Next Billion Fellowship at the Ethereum Foundation is a search for stories. Stories that inspire us to focus on the important things, to find balance and fairness in the way we go about solving our problems, to push deeper into the mysteries of human cooperation.
            </Text>
            <Text>
              During the course of 6 months, Fellows receive support to drive their own projects, and tell their own stories of Ethereum-enabled public goods destined to help billions coordinate and thrive.
            </Text>
            <ButtonLink href='/about'>About the program</ButtonLink>
          </Box>
        </ImageSplitContent>
        <ImageSplitContent
          image={TempImage}
          imageBorder='left'
          imageSide='left'
        >
          <Box gap={8}>
            <H2>Devcon SEA Scholars</H2>
            <Text>
              Devcon is the Ethereum conference for developers, researchers, thinkers, and makers. Every year, the devcon scholars program provides dozens of full scholarships to connect, learn, and build together with the Ethereum community, wherever it is in the world. 
            </Text>
            <ButtonLink href='/scholars'>Learn more</ButtonLink>
          </Box>
        </ImageSplitContent>
      </ContentContainer>
    </>
  )
}

export default HomePage
