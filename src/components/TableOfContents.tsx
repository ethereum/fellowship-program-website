import {
  List,
  ListItem
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'

import Link from '@/components/Link'

const TableOfContents = ({ tocItems }) => {
  const [ activeHeaderId, setActiveHeaderId ] = useState(null)

  const titleIds = tocItems.map((item) => item.url.substring(1))
  useEffect(() => {
    const checkActiveHeader = () => {
      for (const id of titleIds) {
        const header = document.getElementById(id);
        if (header) {
          const rect = header.getBoundingClientRect();
          if (rect.top >= 0 && rect.bottom <= window.innerHeight-(window.innerHeight/3)) {
            setActiveHeaderId(id)
            break; // Stop checking once the active header is found
          }
        }
      }
    };

    // Listen for scroll events
    window.addEventListener('scroll', checkActiveHeader);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', checkActiveHeader);
    };
  }, [titleIds]); // Depend on headerIds to re-run if they change


  return (
    <List>
      {tocItems.map((item) => (
        <ListItem
          key={item.title}
          mb={2.5}
          ps={2.5}
          borderLeft='4px solid'
          borderColor={
            activeHeaderId === item.url.substring(1)
            ? 'actionHighlight'
            : "transparent"
          }
        >
          <Link href={item.url}>{item.title}</Link>
        </ListItem>
      ))}
    </List>
  )
}

export default TableOfContents   