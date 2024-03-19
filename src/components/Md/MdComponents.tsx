import {
  Box,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
} from '@chakra-ui/react'

import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
} from '@/components/Headings'
import Link from '@/components/Link'
import MarkdownImage from '@/components/Md/MarkdownImage'

const Header1 = (props) => {
  return (
    <H1 color="action" {...props} />
  )
}

const Header2 = (props) => {
  return (
    <H2 color="action" {...props} />
  )
}

const Header3 = (props) => {
  return (
    <H3 color="action" {...props} />
  )
}

const Header4 = (props) => {
  return (
    <H4 color="action" {...props} />
  )
}

const Header5 = (props) => {
  return (
    <H5 color="action" {...props} />
  )
}

const Header6 = (props) => {
  return (
    <H6 color="action" {...props} />
  )
}

const Paragraph = (props) => {
  return (
    <Text textStyle="base-text" {...props} />
  )
}

// All base html element components
export const htmlElements = {
  a: Link,
  div: Box,
  h1: Header1,
  h2: Header2,
  h3: Header3,
  h4: Header4,
  h5: Header5,
  h6: Header6,
  p: Paragraph,
  img: MarkdownImage,
  li: ListItem,
  ol: OrderedList,
  ul: UnorderedList,
  // pre: Pre,
  // hr: HR,
}

// All custom React components
export const reactComponents = {
  // ContentContainer,
  // Divider,
  // Page,
}

/**
 * All base markdown components as default export
 */
const MdComponents = {
  ...htmlElements,
  ...reactComponents,
}

export default MdComponents