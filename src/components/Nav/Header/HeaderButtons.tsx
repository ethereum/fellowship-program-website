import { useRouter } from 'next/router'
import { Center, Flex } from '@chakra-ui/react'

import Link from '@/components/Link'

import {
  ABOUT_PAGE,
  BLOG_PAGE,
  FELLOWSHIP_PAGE,
  SCHOLAR_PAGE
} from '@/utils/constants'

const HeaderButtons = () => {
  const router = useRouter()
  const path = router.asPath

  return (
    <Center
      as={Flex}
      direction={{ base: 'column', md: 'row' }}
      gap={{ base: 8, md: 4 }}
      mt={{ base: 40, md: 0 }}
    >
      <Link
        href={'/'}
        textStyle={{ 
          base: path === `/` 
            ? "drawer-link-active"
            : "drawer-link",
          md: path === `/`
            ? 'header-link-active'
            : 'header-link'
        }}
      >
        Home
      </Link>
      <Link
        href={FELLOWSHIP_PAGE}
        textStyle={{ 
          base: path === FELLOWSHIP_PAGE 
            ? "drawer-link-active"
            : "drawer-link",
          md: path === FELLOWSHIP_PAGE
            ? 'header-link-active'
            : 'header-link'
        }}
      >
        Fellowship
      </Link>
      <Link
        href={SCHOLAR_PAGE}
        textStyle={{ 
          base: path === SCHOLAR_PAGE
            ? "drawer-link-active"
            : "drawer-link",
          md: path === SCHOLAR_PAGE
            ? 'header-link-active'
            : 'header-link'
        }}
      >
        Scholar
      </Link>
      <Link
        href={ABOUT_PAGE}
        textStyle={{ 
          base: path === ABOUT_PAGE
            ? "drawer-link-active"
            : "drawer-link",
          md: path === ABOUT_PAGE
            ? 'header-link-active'
            : 'header-link'
        }}
      >
        About
      </Link>
      <Link
        href={BLOG_PAGE}
        textStyle={{ 
          base: path === BLOG_PAGE
            ? "drawer-link-active"
            : "drawer-link",
          md: path === BLOG_PAGE
            ? 'header-link-active'
            : 'header-link'
        }}
      >
        Blog
      </Link>
    </Center>
  )
}

export default HeaderButtons