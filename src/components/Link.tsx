import { useMemo } from "react"
import NextLink from "next/link"
import {
  Icon,
  Link as ChakraLink,
  VisuallyHidden,
} from "@chakra-ui/react"
import { RxExternalLink } from "react-icons/rx"

import { isExternal } from "@/utils/url"

const Link = ({ children, href, ...props }) => {
  const isExternalValue = useMemo(() => isExternal(href), [href])

  return (
    <ChakraLink
      display="inline-flex"
      isExternal={isExternalValue}
      href={href}
      as={NextLink}
      textStyle="link-text"
      {...props}
    >
      {children}
      <VisuallyHidden>(opens in a new tab)</VisuallyHidden>
      {
        isExternalValue && (
          <Icon
            as={RxExternalLink}
            boxSize="6"
            p="1"
            verticalAlign="middle"
            me="-1"
          />
        )
      }
    </ChakraLink>
  )
}

export default Link