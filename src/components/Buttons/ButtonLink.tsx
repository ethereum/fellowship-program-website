import { Link } from '@chakra-ui/react'

const ButtonLink = ({ ...props }) => {
  return (
    <Link
      bg="action"
      px={10}
      py={2}
      borderRadius='3000px'
      textStyle='button-link'
      {...props}
    />
  )
}

export default ButtonLink