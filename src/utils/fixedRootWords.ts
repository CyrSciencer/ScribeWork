export enum DivineRootWords {
  DIO = "DIO (diɵ)", // d-i-o /di.ɵ/ the source of being
  KYO = "K'YO (k'jɵ)", // k'-y-o /k'j.ɵ/ the source of non-being

  SKAN = "SKAN (skã)", // s-k-an /skã/ essence
  XIO = "XIO (ʂiɵ)", // c-i-o /ʂi.ɵ/ life cycle
  WÈI = "WÈI (wɛi)", // w-è-i /wɛ.i/ the all

  TÈON = "TÈON (tɛɔ̃)", // t-è-on /tɛ.ɔ̃/ ethereal field
  FIIN = "FIIN (fiɛ̃)", // f-i-in /fi.ɛ̃/ physical field

  ʇRI = "ʇRI (ʇri)", // ʇ-x-i /ʇri/ birth
  GLO = "GLO (ɢlɵ)", // g-l-o /ɢlo/ growth
  ZBA = "ZBA (zba)", // z-b-a /zba/ decline
  ɲAI = "ɲAI (ɲai)", // q-a-i /ɲa.i/ death

  VʁÉ = "VʁÉ (vʁe)", // v-ʁ-é /vʁe/ underlying truth
  TʁAN = "TʁAN (tʁã)", // t-ʁ-an /tʁã/ the ever-changing
  ʗSO = "ʗSO (ʗsɵ)", // ʗ-s-o /ʗso/ understanding of the inner and outer realities

  PLAN = "P'LAN (p'lã)", // p'-l-an /p'lã/ Plants/Bone/root/structure/Permanence
  FNO = "FNO (fnɵ)", // f-n-o /fno/ Fungus/Flesh/Network/expansion/Flux
  NMA = "NMA (nma)", // n-m-a /nma/ Animal/Blood/Movement/Vitality/Process
}
export enum DivineRootWordsForFont {
  // Pattern CVV: consonne-voyelle-voyelle (IPA) → voyelle1M-voyelle2B-consonne (Font)
  DIO = "iMoBd", // d-i-ɵ → iM-oB-d
  KYO = "oMkky", // k'-j-ɵ → oM-kk-y (k'=kk, j=y)
  XIO = "iMoBx", // ʂ-i-ɵ → iM-oB-x (ʂ=x)
  WÈI = "eaMiBw", // w-ɛ-i → eaM-iB-w (ɛ=ea)

  // Pattern CCV: consonne-consonne-voyelle (IPA) → voyelleM-cons1-cons2 (Font)
  SKAN = "aaMsk", // s-k-ã → aaM-s-k (ã=aa)
  TÈON = "eaMooBt", // t-è-on /tɛ.ɔ̃/ ethereal field
  FIIN = "iMeeBf", // f-i-ɛ̃ → iM-eeB-f (ɛ̃=ee)

  // Birth-Death cycle (CCV pattern)
  ʇRI = "iM!rr", // ʇ-r-i → iM-!-rr (ʇ=!, rolling r=rr)
  GLO = "oMgl", // g-l-ɵ → oM-g-l
  ZBA = "aMzb", // z-b-a → aM-z-b
  ɲAI = "aMiBq", // ɲ-a-i → aM-iB-q (ɲ=q)

  // Truth and Change (CCV pattern)
  VʁÉ = "eiMvr", // v-ʁ-e → eiM-v-r (e=ei, ʁ=r)
  TʁAN = "aaMtr", // t-ʁ-ã → aaM-t-r (ã=aa, ʁ=r)
  ʗSO = "oM|s", // ʗ-s-ɵ → oM-|-s (ʗ=|)

  // Life forms (CCV pattern)
  PLAN = "aaMppl", // p'-l-ã → aaM-pp-l (p'=pp, ã=aa)
  FNO = "oMfn", // f-n-ɵ → oM-f-n
  NMA = "aMnm", // n-m-a → aM-n-m
}
