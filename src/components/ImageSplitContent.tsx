import { Box, Center, Flex } from '@chakra-ui/react'
import { StaticImageData } from 'next/image'

import { Image } from '@/components/Image'


type ImageSplitContentProps = {
  image: StaticImageData,
  imageBorder: 'round' | 'left' | 'right' | 'none',
  imageSide: 'left' | 'right',
  children: React.ReactNode
}

const ImageSplitContent = ({
  image,
  imageBorder,
  imageSide,
  children
}: ImageSplitContentProps) => {
  const imageBorderRadiusOptions = {
    round: 180,
    left: '120px 400px',
    right: '400px 120px',
    none: 'none'
  }

  const wrapperStyle = {
    'left': {
      position: 'relative',
      display: 'inline-block',
      borderRadius: imageBorderRadiusOptions[imageBorder],
      '::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        borderRadius: imageBorderRadiusOptions[imageBorder],
        border: '7px solid #034057', // Adjust based on your color needs
        mixBlendMode: 'multiply',
        boxSizing: 'border-box',
        opacity: 0.1
      }
    },
    'right': {
      position: 'relative',
      display: 'inline-block',
      borderRadius: imageBorderRadiusOptions[imageBorder],
      '::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        borderRadius: imageBorderRadiusOptions[imageBorder],
        border: '7px solid #034057', // Adjust based on your color needs
        mixBlendMode: 'multiply',
        boxSizing: 'border-box',
        opacity: 0.1
      }
    },
    round: {},
    none: {},
  }

  return (
    <Flex
      gap={16}
      py={8}
      px={{ base: 8, md: 16 }}
      flexDir={{
        base: 'column',
        md: imageSide === 'left' ? 'row' : 'row-reverse'
      }}
    >
      <Center w='380px' margin='auto'>
        <Box sx={wrapperStyle[imageBorder]}>
          <Image
            src={image}
            alt=""
            borderRadius={imageBorderRadiusOptions[imageBorder]}
          />
        </Box>
      </Center>
      <Center w="auto" flex={1}>
        {children}
      </Center>
    </Flex>
  )
}

export default ImageSplitContent