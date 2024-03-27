import { Box, Text } from '@chakra-ui/react'

import ImageHero from '@/components/Heroes/ImageHero'
import {
  H1,
  H2
} from "@/components/Headings"
import ContentContainer from '@/components/ContentContainer'
import ImageSplitContent from '@/components/ImageSplitContent'

import TempImage from '@/public/images/temp.png'

const AboutPage = () => {
  return (
    <> 
      <ImageHero />
      <Box>
        <H1>AboutPage</H1>
      </Box>
      <ContentContainer mb={8}>
        <ImageSplitContent
          image={TempImage}
          imageBorder='round'
          imageSide='right'
        >
          <Box gap={8}>
            <H2>Stories over narrative</H2>
            <Text>
              Protocols like Ethereum are often explained in the context of Big Narratives about human ingenuity, collaboration, and society. But it’s hard to imagine a future in those heroic terms.
            </Text>
            <Text>
              It’s the small stories that provide perspective into the soul of that protocol, and allow us to see what human coordination might look like someday.
            </Text>
          </Box>
        </ImageSplitContent>
        <ImageSplitContent
          image={TempImage}
          imageBorder='round'
          imageSide='left'
        >
          <Box>
            <H2>Earnest Exploration</H2>
            <Text>
              Much good can come from the meeting of worlds. Different perspectives provide new insights; new contexts create different designs.
            </Text>
            <Text>
              Small World(s) initiatives reflect Ethereum’s culture of mutual discovery, exchange, learning, and teaching.
            </Text>
          </Box>
        </ImageSplitContent>
        <ImageSplitContent
          image={TempImage}
          imageBorder='round'
          imageSide='right'
        >
          <Box>
            <H2>Representation</H2>
            <Text>
              Resilience is built from diversity. From core protocol to end user, Ethereum’s community should grow and evolve to better reflect the diversity of the world-at-large. Mechanisms that help achieve this outcome are paramount to human flourishing. 
            </Text>
          </Box>
        </ImageSplitContent>
      </ContentContainer>
    </>
  )
}

export default AboutPage