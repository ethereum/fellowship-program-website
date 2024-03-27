import { Box, Flex } from '@chakra-ui/react'

import StarsImage from '@/public/images/stars.png'

import ContentContainer from '@/components/ContentContainer'
import { Image } from '@/components/Image'
import { MARKDOWN_CONTENT_MAX_WIDTH } from '@/utils/constants'
import TableOfContents from '@/components/TableOfContents'
import { H1 } from '@/components/Headings'

export const CookieLayout = ({ children, frontmatter, tocItems }) => {
  const { title } = frontmatter

  return (
    <>
      <Box pos='absolute' zIndex={-1} top={-4} left={0} right={0}>
        <Image src={StarsImage} alt="Stars" w='100%' h='100vh' />
      </Box>
      <ContentContainer>
        <Box px={{base: 6 , md: 16}} pt={16} pb={8}>
          <H1 pt={6} pb={6} fontSize={58}>{title}</H1>
        </Box>
        <Flex
          px={{base: 6 , md: 16}}
          gap={16}
          pt={4}
          pb={16}
          justifyContent="space-between"
        >
          <Box
            w="auto"
            maxW={MARKDOWN_CONTENT_MAX_WIDTH}
            flex="1"
            gap={16}
            sx={{ '*:first-of-type': { marginTop: '0 !important' } }}
          >
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
    
    </>
  )
}