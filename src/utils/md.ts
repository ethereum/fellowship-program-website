import fs from 'fs'
import { join } from 'path'

import matter from "gray-matter"

import { CONTENT_DIR } from '@/utils/constants'

export const getContentBySlug = (slug: string) => {
  const fullPath = join(process.cwd(), CONTENT_DIR, slug, 'index.md')
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  return {
    slug,
    content,
    frontmatter: data,
  }
}