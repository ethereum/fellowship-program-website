import { Heading } from "@chakra-ui/react";

export const H1 = ({ children, ...props }) => {
  return (
    <Heading
      as="h1"
      textStyle="h1"
      wordBreak="break-word"
      {...props}
    >
      {children}
    </Heading>
  )
}

export const H2 = ({ children, ...props }) => {
  return (
    <Heading
      as="h2"
      textStyle="h2"
      wordBreak="break-word"
      {...props}
    >
      {children}
    </Heading>
  )
}

export const H3 = ({ children, ...props }) => {
  return (
    <Heading
      as="h3"
      textStyle="h3"
      wordBreak="break-word"
      {...props}
    >
      {children}
    </Heading>
  )
}

export const H4 = ({ children, ...props }) => {
  return (
    <Heading
      as="h4"
      textStyle="h4"
      wordBreak="break-word"
      {...props}
    >
      {children}
    </Heading>
  )
}

export const H5 = ({ children, ...props }) => {
  return (
    <Heading
      as="h5"
      textStyle="h5"
      wordBreak="break-word"
      {...props}
    >
      {children}
    </Heading>
  )
}

export const H6 = ({ children, ...props }) => {
  return (
    <Heading
      as="h6"
      textStyle="h6"
      wordBreak="break-word"
      {...props}
    >
      {children}
    </Heading>
  )
}