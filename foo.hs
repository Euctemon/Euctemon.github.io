data Prop = Const Bool | Var Int | Neg Prop | And Prop Prop | Or Prop Prop | Imp Prop Prop





bobo = Or (Const True) (Var 2)

