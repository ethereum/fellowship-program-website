import { Box, Flex } from '@chakra-ui/react'

import StarsImage from '@/public/images/stars.png'

import ContentContainer from '@/components/ContentContainer'
import { Image } from '@/components/Image'
import FellowLayoutHero from '@/components/Heroes/FellowLayoutHero'
import { MARKDOWN_CONTENT_MAX_WIDTH } from '@/utils/constants'
import TableOfContents from '@/components/TableOfContents'
import { H3 } from '@/components/Headings'

export const FellowLayout = ({ children, frontmatter, tocItems }) => {
  const { title, fellowName, country, tags, image } = frontmatter

  return (
    <>
      <Box pos='absolute' zIndex={-1} top={-4} left={0} right={0}>
        <Image src={StarsImage} alt="Stars" w='100%' />
      </Box>
      <ContentContainer>
        <FellowLayoutHero
          title={title}
          fellowName={fellowName}
          country={country}
          tags={tags}
          image={image}
        />
        <Flex
          px={{base: 6 , md: 16}}
          gap={16}
          pt={4}
          pb={16}
          justifyContent="space-between"
        >
          <Box w="auto" maxW={MARKDOWN_CONTENT_MAX_WIDTH} flex="1">
            {children}
          </Box>
          <Box
            w="300px"
            display={{ base: 'none', md: 'block' }}
            position="sticky"
            top="20px"
            alignSelf="start"
          >
            <TableOfContents tocItems={tocItems} />
          </Box>
        </Flex>
      </ContentContainer>
      <Box
        py={16}
        bg="backgroundHighlight"
      >
        <ContentContainer>
          <Box px={{base: 6 , md: 16}}>
            <H3 variant="action">Meet more fellows</H3>
            {/* TODO: Implement component for more fellows */}
          </Box>
        </ContentContainer>
      </Box>
    </>
  )
}