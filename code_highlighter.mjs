import { codeToHtml } from 'shiki'

const code =
`
let rec simp_bool e = match e with
| Const a -> Const a
| Var v -> Var v
| Not m ->
  begin match simp_bool m with
  | Not (Const c) -> Const c
  | Const c -> Const (not c)
  | e -> Not e
  end
| Or (a,b) -> begin let or_res = (simp_bool a, simp_bool b) in
  match or_res with
  | (Const true,_) -> Const true
  | (_,Const true) -> Const true
  | (Const false, Const false) -> Const false
  | (Const false,_) -> snd or_res
  | (_,Const false) -> fst or_res
  | _ -> Or (fst or_res, snd or_res)
  end
| And (a,b) -> begin let and_res = (simp_bool a, simp_bool b) in
  match and_res with
  | (Const true,Const true) -> Const true
  | (Const false,_) -> Const false
  | (_,Const false) -> Const false
  | (Const true,_) -> snd and_res
  | (_,Const true) -> fst and_res
  | _ -> And (fst and_res, snd and_res)
  end`

const html = await codeToHtml (code, { lang: 'ocaml', theme: 'github-light'})

console.log(html)