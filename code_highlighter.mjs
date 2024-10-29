import { codeToHtml } from 'shiki'

const code =
`
let rec satisfiable f = match free_var f with
| None -> if (simp_formula f = Const true) then Sat else Unsat
| Some i ->
	let true_guess = simp_formula (assign_var f i true) in
	let false_guess = simp_formula (assign_var f i false) in
	if satisfiable true_guess = Sat || satisfiable false_guess = Sat then Sat else Unsat
`

const html = await codeToHtml (code, { lang: 'ocaml', theme: 'github-light-default'})

console.log(html)