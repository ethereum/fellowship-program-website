import fs from 'fs'
import { join } from "path"

import { CONTENT_DIR } from '@/utils/constants'

const CURRENT_CONTENT_DIR = join(process.cwd(), CONTENT_DIR)

export const getContentPaths = (dirName: string) => {
  let files: string[] = []
  const filesPath = join(CURRENT_CONTENT_DIR, dirName)
  const fileList = fs.readdirSync(filesPath, { withFileTypes: true })

  for (const file of fileList) {
    if (file.isDirectory()) {
      files = [...files, ...getContentPaths(`${dirName}/${file.name}`)]
    } else {
      files.push(`/${dirName}/${file.name}`)
    }
  } 

  return files
    .map(file => file.replace('.md', ''))
    .map(file => file.replace('/index', ''))
    .map(file => file.replace(/\/+/g, '/'))
};