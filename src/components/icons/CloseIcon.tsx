import { createIcon } from '@chakra-ui/react';

export const CloseIcon = createIcon({
  displayName: 'CloseIcon',
  viewBox: '0 0 24 24',
  path: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M23 1L1 23" stroke="#9DCE64"/>
      <path d="M1 1L23 23" stroke="#9DCE64"/>
    </svg>
  )
})