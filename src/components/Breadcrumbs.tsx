import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Stack
} from '@chakra-ui/react'
import { useRouter } from 'next/router'

import Link from '@/components/Link'

export const Breadcrumbs = () => {
  const router = useRouter()
  const path = router.asPath.split('/').filter((x) => x)

  return (
    <Stack direction='row' spacing={2} pt={4}>
      <Breadcrumb color="body">
        {path.map((segment, index) => {
          const url = `/${path.slice(0, index + 1).join('/')}`

          return (
            <BreadcrumbItem key={url}>
                <BreadcrumbLink
                  as={Link}
                  href={url}
                  color={ router.asPath === url ? 'action' : 'body' }
                >
                  {segment}
                </BreadcrumbLink>
            </BreadcrumbItem>
          )
        })}
      </Breadcrumb>
    </Stack>
  )
}
