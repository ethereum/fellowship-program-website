
import { toc } from "mdast-util-toc"
import { visit } from "unist-util-visit"

const remarkInferToc = (options) => {
  const { callback, maxDepth } = {
    maxDepth: 6,
    ...options,
  }

  const processToC = (
    node,
    current
  ) => {
    if (!node) {
      return {}
    }

    switch (node.type) {
      case `paragraph`: {
        const typedCurrent = current

        visit(node, (item) => {
          if (item.type === `link`) {
            typedCurrent.url = item.url
          }
          if (item.type === `text` || item.type === `inlineCode`) {
            if (typedCurrent.title) {
              typedCurrent.title += item.value
            } else {
              typedCurrent.title = item.value
            }
          }
        })

        return current
      }

      case `list`: {
        const typedCurrent = current as { items }

        typedCurrent.items = node.children.map((item) => processToC(item, {}))

        return typedCurrent
      }

      case `listItem`: {
        if (node.children.length) {
          const heading = processToC(node.children[0], {})

          if (node.children.length > 1) {
            processToC(node.children[1], heading)
          }

          return heading
        }
      }

      default:
        return {}
    }
  }

  return (tree) => {
    const generatedToC = toc(tree, { maxDepth })

    if (generatedToC.map) {
      const processedToC = processToC(generatedToC.map, {})
      callback(processedToC)
    }
  }
}

export default remarkInferToc