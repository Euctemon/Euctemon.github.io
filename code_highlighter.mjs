import { codeToHtml } from 'shiki'

const code =
`
data Prop = Const Bool | Var Int | Neg Prop | And Prop Prop | Or Prop Prop | Imp Prop Prop
`

const html = await codeToHtml (code, { lang: 'haskell', theme: 'github-light'})

console.log(html)