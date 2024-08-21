data Prop = Const Bool | Var Int | Neg Prop | And Prop Prop | Or Prop Prop | Imp Prop Prop

newtype Context = Context [Prop]


addContext (Context a) (Context b) = Context (a ++ b)


data Entails = Entails Context Prop
newtype Proof = Proof Entails

assumptionRule a = Entails (Context [a]) a


conjI (Entails r p) (Entails s q) = Entails (addContext r s) (And p q)

conjEL (Entails r (And a b)) = Entails r a
conjER (Entails r (And a b)) = Entails r b


m a b = Proof (let h = conjI (assumptionRule a) (assumptionRule b) in conjI (conjER h) (conjEL h))

