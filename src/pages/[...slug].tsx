import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

import remarkGfm from "remark-gfm"
import { join } from 'path'

import { CookieLayout } from '@/layouts/CookieLayout'
import { FellowLayout } from '@/layouts/FellowLayout'

import MdComponents from '@/components/Md/MdComponents'

import { getContentPaths } from '@/utils/getContentPaths'
import { getContentBySlug } from '@/utils/md'
import rehypeHeadingIds from "@/utils/rehypeHeadingIds"
import rehypeImg from "@/utils/rehypeImg"
import remarkInferToc from '@/utils/remarkInferToc'
import { remapTableOfContents } from "@/utils/toc"

export const layoutMapping = {
  fellow: FellowLayout,
  cookie: CookieLayout
}
 
interface Props {
  mdxSource: MDXRemoteSerializeResult
}

export const getStaticPaths = () => {
  const paths = getContentPaths('/')

  return { paths: paths, fallback: true }
}

export const getStaticProps = async (context) => {
  const slug = `/${context.params.slug.join("/")}/`
  const markdown = getContentBySlug(slug)

  let tocNodeItems = []
  const tocCallback = (toc): void => {
    tocNodeItems = "items" in toc ? toc.items : []
  }

  const mdPath = join("/content", slug)
  const mdDir = join("public", mdPath)
  
  const mdxSource = await serialize(markdown.content,  {
    mdxOptions: {
      remarkPlugins: [
        remarkGfm,
        [remarkInferToc, { callback: tocCallback }],
      ],
      rehypePlugins: [
        [rehypeImg, { dir: mdDir, srcPath: mdPath }],
        [rehypeHeadingIds]
      ],
    },
  })

  const tocItems = remapTableOfContents(tocNodeItems, mdxSource.compiledSource)

  return {
    props: {
      frontmatter: markdown.frontmatter,
      layout: markdown.frontmatter.layout,
      mdxSource,
      slug,
      tocItems,
    }
  }
}

const ContentPage = ({ mdxSource }: Props) =>  {
  return <MDXRemote {...mdxSource} components={MdComponents} />
}

ContentPage.getLayout = (page) => {
  const {
    slug,
    frontmatter,
    layout,
    tocItems,
  } = page.props
  const layoutProps = {
    slug,
    frontmatter,
    tocItems,
  }
  const Layout = layoutMapping[layout]

  return <Layout {...layoutProps}>{page}</Layout>
}

export default ContentPage