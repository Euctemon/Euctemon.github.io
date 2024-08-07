import { codeToHtml } from 'shiki'

const code =
`
let rec to_cnf_type (e : prop) : comp_prop = match e with
  | Const a -> Const a
  | Var a -> Var a
  | Not a -> Not (to_cnf_type a)
  | And (a,b) -> And (to_cnf_type a, to_cnf_type b)
  | Or (a,b) -> Or (to_cnf_type a, to_cnf_type b)
  | Impl (a,b) -> Or (Not (to_cnf_type a), to_cnf_type b)
  | Equiv (a,b) -> And (to_cnf_type (Impl (a,b)),to_cnf_type (Impl (b,a)))`


const foo =
`

let rec to_cnf_type (e : prop) : comp_prop = match e with
| Const a -> Const a
| Var a -> Var a
| Not a -> Not (to_cnf_type a)
| And (a,b) -> And (to_cnf_type a, to_cnf_type b)
| Or (a,b) -> Or (to_cnf_type a, to_cnf_type b)
| Impl (a,b) -> Or (Not (to_cnf_type a), to_cnf_type b)
| Equiv (a,b) -> And (to_cnf_type (Impl (a,b)),to_cnf_type (Impl (b,a)))
`

const html = await codeToHtml (code, { lang: 'ocaml', theme: 'github-light'})

console.log(html)