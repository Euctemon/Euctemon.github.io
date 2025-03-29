import rehypeShiki from '@shikijs/rehype'
import rehypeParse from 'rehype-parse'
import rehypeStringify from 'rehype-stringify'
import { unified } from 'unified'
import fs from 'fs/promises'

const file = await unified()
  .use(rehypeParse)
  .use(rehypeShiki, {theme : 'github-light'})
  .use(rehypeStringify)
  .process(await fs.readFile('./about.html'))


await fs.writeFile('./output.html', String(file));