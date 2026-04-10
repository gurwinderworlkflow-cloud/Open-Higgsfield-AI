export interface HiggsModel {
  id: string
  name: string
  category: "standard-model" | "beyond-standard" | "cosmological" | "experimental"
  shortDescription: string
  fullDescription: string
  keyEquation: string
  equationDescription: string
  parameters: ModelParameter[]
  implications: string[]
  experiments: string[]
  status: "confirmed" | "theoretical" | "under-investigation"
  year: number
  contributors: string[]
  relatedModels: string[]
  difficulty: "beginner" | "intermediate" | "advanced"
  tags: string[]
  learningContent: LearningContent
}

export interface ModelParameter {
  name: string
  symbol: string
  value: string
  unit: string
  description: string
}

export interface LearningContent {
  overview: string
  prerequisites: string[]
  keyInsights: string[]
  commonMisconceptions: string[]
  furtherReading: string[]
}

export interface Experiment {
  id: string
  name: string
  facility: string
  year: number
  description: string
  relatedModels: string[]
  significance: string
  status: "completed" | "ongoing" | "planned"
}

export const experiments: Experiment[] = [
  {
    id: "atlas-cms-2012",
    name: "ATLAS & CMS Higgs Discovery",
    facility: "CERN LHC",
    year: 2012,
    description:
      "The ATLAS and CMS experiments independently observed a new particle consistent with the Standard Model Higgs boson at a mass of approximately 125 GeV, achieving a statistical significance of 5 sigma.",
    relatedModels: ["standard-higgs", "brout-englert-higgs"],
    significance:
      "Confirmed the existence of the Higgs boson and validated the Brout-Englert-Higgs mechanism for electroweak symmetry breaking.",
    status: "completed",
  },
  {
    id: "lhc-run2",
    name: "LHC Run 2 Precision Measurements",
    facility: "CERN LHC",
    year: 2018,
    description:
      "Run 2 of the LHC (2015-2018) at 13 TeV center-of-mass energy measured Higgs boson couplings to fermions and bosons with unprecedented precision, including observation of Higgs-to-bottom-quark decay.",
    relatedModels: ["standard-higgs", "yukawa-coupling"],
    significance:
      "Confirmed the Higgs coupling to third-generation fermions and tightened constraints on beyond-Standard-Model physics.",
    status: "completed",
  },
  {
    id: "lhc-run3",
    name: "LHC Run 3 Higgs Studies",
    facility: "CERN LHC",
    year: 2022,
    description:
      "Run 3 began collecting data at a record 13.6 TeV to study rare Higgs decay channels, search for di-Higgs production, and probe the Higgs self-coupling.",
    relatedModels: ["standard-higgs", "higgs-self-coupling", "two-higgs-doublet"],
    significance:
      "Aims to measure the Higgs trilinear self-coupling and search for additional Higgs bosons predicted by extended models.",
    status: "ongoing",
  },
  {
    id: "hl-lhc",
    name: "High-Luminosity LHC (HL-LHC)",
    facility: "CERN",
    year: 2029,
    description:
      "The HL-LHC upgrade will increase the integrated luminosity by a factor of 10, enabling precision measurements of the Higgs self-coupling, rare decays, and searches for exotic Higgs signatures.",
    relatedModels: ["higgs-self-coupling", "two-higgs-doublet", "composite-higgs"],
    significance:
      "Will provide definitive tests of the Higgs potential shape and most BSM Higgs sector models.",
    status: "planned",
  },
  {
    id: "fcc-ee",
    name: "Future Circular Collider (FCC-ee)",
    facility: "CERN (proposed)",
    year: 2045,
    description:
      "A proposed electron-positron collider that would serve as a Higgs factory, producing millions of Higgs bosons in a clean environment for sub-percent-level coupling measurements.",
    relatedModels: ["standard-higgs", "composite-higgs", "higgs-portal"],
    significance:
      "Would achieve the most precise Higgs coupling measurements ever, sensitive to new physics at energy scales of 10+ TeV.",
    status: "planned",
  },
]

export const higgsModels: HiggsModel[] = [
  {
    id: "standard-higgs",
    name: "Standard Model Higgs Mechanism",
    category: "standard-model",
    shortDescription:
      "The foundational mechanism by which fundamental particles acquire mass through interaction with the Higgs field, a scalar field permeating all of space.",
    fullDescription:
      "The Standard Model Higgs mechanism describes how the Higgs field, a complex scalar doublet with a non-zero vacuum expectation value (VEV), spontaneously breaks the electroweak SU(2)_L x U(1)_Y symmetry down to U(1)_EM. The W and Z bosons acquire mass by absorbing three of the four degrees of freedom of the Higgs doublet (the Goldstone bosons), while the remaining degree of freedom manifests as the physical Higgs boson with mass ~125 GeV. Fermion masses arise from Yukawa coupling terms between the Higgs field and fermion fields.",
    keyEquation: "V(\\phi) = \\mu^2 \\phi^\\dagger \\phi + \\lambda (\\phi^\\dagger \\phi)^2",
    equationDescription:
      "The Higgs potential with mu-squared negative leads to spontaneous symmetry breaking. The field settles at v = sqrt(-mu^2/lambda) ~ 246 GeV.",
    parameters: [
      {
        name: "Vacuum Expectation Value",
        symbol: "v",
        value: "246.22",
        unit: "GeV",
        description: "The VEV of the Higgs field that sets the electroweak scale",
      },
      {
        name: "Higgs Boson Mass",
        symbol: "m_H",
        value: "125.25 +/- 0.17",
        unit: "GeV",
        description: "The measured mass of the Higgs boson",
      },
      {
        name: "Self-coupling",
        symbol: "lambda",
        value: "~0.13",
        unit: "",
        description: "The quartic self-coupling of the Higgs field",
      },
      {
        name: "Mu-squared",
        symbol: "mu^2",
        value: "~-(88.4)^2",
        unit: "GeV^2",
        description: "The negative mass-squared parameter that triggers symmetry breaking",
      },
    ],
    implications: [
      "All fundamental fermions acquire mass proportional to their Yukawa couplings",
      "W and Z bosons gain mass via the Higgs mechanism while the photon remains massless",
      "The Higgs boson is the physical excitation of the Higgs field around its VEV",
      "The hierarchy problem: why is the Higgs mass so much lighter than the Planck scale?",
    ],
    experiments: ["ATLAS (CERN)", "CMS (CERN)", "Tevatron (Fermilab)"],
    status: "confirmed",
    year: 1964,
    contributors: [
      "Peter Higgs",
      "Francois Englert",
      "Robert Brout",
      "Gerald Guralnik",
      "C.R. Hagen",
      "Tom Kibble",
    ],
    relatedModels: ["brout-englert-higgs", "yukawa-coupling", "higgs-self-coupling"],
    difficulty: "intermediate",
    tags: ["electroweak", "symmetry-breaking", "mass-generation", "scalar-field"],
    learningContent: {
      overview:
        "The Higgs mechanism is the cornerstone of the Standard Model, explaining how particles that should be massless acquire mass. Think of the Higgs field as an invisible medium filling all of space. Particles interact with this field differently - the stronger the interaction, the heavier the particle.",
      prerequisites: [
        "Basic quantum field theory",
        "Gauge symmetry and gauge bosons",
        "Spontaneous symmetry breaking concept",
      ],
      keyInsights: [
        "The Higgs field is not zero in empty space - it has a constant background value",
        "Mass is not an intrinsic property of particles but arises from their interaction with the Higgs field",
        "The famous 'Mexican hat' potential shape is what causes the field to settle at a non-zero value",
        "The 2012 discovery at CERN confirmed a 48-year-old prediction",
      ],
      commonMisconceptions: [
        "The Higgs boson does not 'give' mass - the Higgs FIELD does; the boson is just an excitation",
        "The Higgs mechanism does NOT explain most of the mass in the universe (that comes from QCD binding energy)",
        "The Higgs field is not responsible for gravitational mass directly",
      ],
      furtherReading: [
        "An Introduction to the Standard Model of Particle Physics - Cottingham & Greenwood",
        "The Higgs Hunter's Guide - Gunion, Haber, Kane, Dawson",
        "Gauge Theory of Elementary Particle Physics - Cheng & Li",
      ],
    },
  },
  {
    id: "brout-englert-higgs",
    name: "Brout-Englert-Higgs (BEH) Mechanism",
    category: "standard-model",
    shortDescription:
      "The gauge-invariant formulation of spontaneous symmetry breaking in Yang-Mills theories, showing how gauge bosons acquire mass without violating renormalizability.",
    fullDescription:
      "The BEH mechanism demonstrates that when a gauge symmetry is spontaneously broken by a scalar field acquiring a VEV, the would-be Goldstone bosons are 'eaten' by the gauge bosons, providing them their longitudinal polarization components and hence mass. This occurs without explicitly breaking gauge invariance, preserving the renormalizability of the theory. The mechanism was independently proposed by Englert & Brout and by Higgs in 1964, with Guralnik, Hagen & Kibble providing a complementary formulation.",
    keyEquation: "\\mathcal{L} = (D_\\mu \\phi)^\\dagger (D^\\mu \\phi) - V(\\phi) - \\frac{1}{4}F_{\\mu\\nu}F^{\\mu\\nu}",
    equationDescription:
      "The Lagrangian includes the kinetic term with covariant derivative coupling the scalar to gauge fields, the Mexican hat potential, and the gauge field strength.",
    parameters: [
      {
        name: "Gauge Coupling (SU(2))",
        symbol: "g",
        value: "~0.653",
        unit: "",
        description: "The weak isospin gauge coupling constant",
      },
      {
        name: "Gauge Coupling (U(1))",
        symbol: "g'",
        value: "~0.350",
        unit: "",
        description: "The weak hypercharge gauge coupling constant",
      },
      {
        name: "W Boson Mass",
        symbol: "M_W",
        value: "80.377 +/- 0.012",
        unit: "GeV",
        description: "Mass of the W boson from the BEH mechanism: M_W = gv/2",
      },
      {
        name: "Z Boson Mass",
        symbol: "M_Z",
        value: "91.1876 +/- 0.0021",
        unit: "GeV",
        description: "Mass of the Z boson: M_Z = v*sqrt(g^2 + g'^2)/2",
      },
    ],
    implications: [
      "Proves that gauge boson masses are compatible with renormalizable quantum field theory",
      "Predicts a specific relationship between W and Z boson masses (the rho parameter)",
      "The photon remains massless because U(1)_EM is unbroken",
      "Provides the theoretical foundation for the entire electroweak sector",
    ],
    experiments: ["UA1/UA2 W,Z discovery (1983)", "LEP precision tests", "LHC Higgs discovery (2012)"],
    status: "confirmed",
    year: 1964,
    contributors: ["Francois Englert", "Robert Brout", "Peter Higgs"],
    relatedModels: ["standard-higgs", "goldstone-theorem"],
    difficulty: "advanced",
    tags: ["gauge-theory", "symmetry-breaking", "renormalization", "electroweak"],
    learningContent: {
      overview:
        "The BEH mechanism solved a critical puzzle: how can gauge bosons have mass without destroying the mathematical consistency (renormalizability) of the theory? The key insight is that the symmetry is not truly broken but 'hidden' - it is still present in the equations but not manifest in the ground state.",
      prerequisites: [
        "Yang-Mills gauge theory",
        "Goldstone theorem",
        "Renormalization in quantum field theory",
        "Covariant derivatives and gauge fields",
      ],
      keyInsights: [
        "The Goldstone bosons become the longitudinal modes of massive gauge bosons",
        "In unitary gauge, the Goldstone bosons disappear and the gauge bosons are manifestly massive",
        "The mechanism preserves all the Ward identities needed for renormalizability",
        "The 2013 Nobel Prize was awarded to Englert and Higgs for this theoretical prediction",
      ],
      commonMisconceptions: [
        "The symmetry is not destroyed - it is hidden (spontaneously broken)",
        "The BEH mechanism works for any gauge theory, not just the Standard Model",
        "The Goldstone bosons do not vanish - they become physical degrees of freedom of the massive gauge bosons",
      ],
      furtherReading: [
        "Broken Symmetry and the Mass of Gauge Vector Mesons - Englert & Brout (1964)",
        "Broken Symmetries and the Masses of Gauge Bosons - Higgs (1964)",
        "Global Conservation Laws and Massless Particles - Guralnik, Hagen & Kibble (1964)",
      ],
    },
  },
  {
    id: "yukawa-coupling",
    name: "Yukawa Coupling Model",
    category: "standard-model",
    shortDescription:
      "Describes how fermions (quarks and leptons) acquire mass through their coupling to the Higgs field, with coupling strength proportional to particle mass.",
    fullDescription:
      "In the Standard Model, fermion masses arise from Yukawa coupling terms that couple left-handed and right-handed fermion fields to the Higgs doublet. After electroweak symmetry breaking, these terms generate fermion mass terms proportional to the Higgs VEV and the Yukawa coupling constant. The wide range of fermion masses (from the electron at 0.511 MeV to the top quark at 173 GeV) corresponds to Yukawa couplings spanning six orders of magnitude, which remains unexplained - this is the 'flavor puzzle'.",
    keyEquation: "\\mathcal{L}_Y = -y_f \\bar{\\psi}_L \\phi \\psi_R + \\text{h.c.} \\quad \\Rightarrow \\quad m_f = \\frac{y_f v}{\\sqrt{2}}",
    equationDescription:
      "The Yukawa Lagrangian couples fermion fields to the Higgs; after SSB the fermion mass is proportional to coupling y_f times the VEV v.",
    parameters: [
      {
        name: "Top Yukawa Coupling",
        symbol: "y_t",
        value: "~0.995",
        unit: "",
        description: "Nearly unity - the top quark couples most strongly to the Higgs",
      },
      {
        name: "Bottom Yukawa Coupling",
        symbol: "y_b",
        value: "~0.024",
        unit: "",
        description: "Bottom quark Yukawa coupling",
      },
      {
        name: "Electron Yukawa Coupling",
        symbol: "y_e",
        value: "~2.94e-6",
        unit: "",
        description: "Extremely small - reflecting the tiny electron mass",
      },
      {
        name: "Top Quark Mass",
        symbol: "m_t",
        value: "172.69 +/- 0.30",
        unit: "GeV",
        description: "The heaviest known fundamental particle",
      },
    ],
    implications: [
      "Fermion masses span six orders of magnitude with no known explanation (flavor puzzle)",
      "The Higgs decay rate to each fermion is proportional to the fermion mass squared",
      "Neutrino masses (if Dirac) would require extremely tiny Yukawa couplings",
      "The top quark Yukawa coupling is uniquely close to 1, hinting at special physics",
    ],
    experiments: ["LHC H->bb observation", "LHC H->tau-tau", "LHC ttH production"],
    status: "confirmed",
    year: 1967,
    contributors: ["Steven Weinberg", "Abdus Salam", "Sheldon Glashow"],
    relatedModels: ["standard-higgs", "flavor-physics"],
    difficulty: "intermediate",
    tags: ["fermion-mass", "yukawa", "flavor-puzzle", "coupling"],
    learningContent: {
      overview:
        "Yukawa couplings are the connection between the Higgs field and matter particles. Each fermion type has its own Yukawa coupling strength that determines how strongly it interacts with the Higgs field and hence how heavy it is. The top quark, with a Yukawa coupling near 1, is the heaviest and interacts most strongly.",
      prerequisites: [
        "Fermion chirality (left-handed vs right-handed)",
        "The Higgs mechanism basics",
        "Standard Model particle content",
      ],
      keyInsights: [
        "The Higgs coupling to fermions has been directly measured for top, bottom, and tau",
        "The linear relationship between mass and coupling strength is a key SM prediction",
        "Why the Yukawa couplings span such a huge range remains one of the great unsolved puzzles",
        "Neutrino masses may require a different mechanism (seesaw mechanism)",
      ],
      commonMisconceptions: [
        "Not all mass comes from the Higgs - proton mass is mostly from QCD binding energy",
        "The Yukawa couplings are free parameters in the SM - they are not predicted",
        "Massless photons and gluons do not couple to the Higgs field directly",
      ],
      furtherReading: [
        "A Model of Leptons - Weinberg (1967)",
        "The Flavor Problem - Feruglio (2015)",
        "Higgs boson couplings measurements - PDG Review",
      ],
    },
  },
  {
    id: "higgs-self-coupling",
    name: "Higgs Self-Coupling and Potential",
    category: "standard-model",
    shortDescription:
      "The self-interaction of the Higgs field that determines the shape of the Higgs potential and governs di-Higgs production at colliders.",
    fullDescription:
      "The Higgs potential includes cubic and quartic self-interaction terms. The trilinear coupling (lambda_3) controls di-Higgs boson production (HH) and is a direct probe of the shape of the Higgs potential near its minimum. Measuring this coupling is crucial to verify whether electroweak symmetry breaking occurs as predicted. Deviations from the SM prediction could signal new physics, additional scalar fields, or a first-order electroweak phase transition relevant to baryogenesis.",
    keyEquation: "V(H) = \\frac{m_H^2}{2}H^2 + \\lambda_3 v H^3 + \\frac{\\lambda_4}{4} H^4, \\quad \\lambda_3^{SM} = \\frac{m_H^2}{2v^2}",
    equationDescription:
      "The Higgs potential expanded around the VEV, with trilinear (lambda_3) and quartic (lambda_4) self-couplings.",
    parameters: [
      {
        name: "Trilinear Coupling",
        symbol: "lambda_3",
        value: "~0.13 (SM prediction)",
        unit: "",
        description: "The Higgs cubic self-coupling, key target for HL-LHC",
      },
      {
        name: "Quartic Coupling",
        symbol: "lambda_4",
        value: "~0.13 (SM prediction)",
        unit: "",
        description: "The quartic self-coupling, extremely difficult to measure",
      },
    ],
    implications: [
      "Determines whether the electroweak vacuum is stable, metastable, or unstable",
      "A modified self-coupling could enable a first-order electroweak phase transition",
      "Di-Higgs production is the primary experimental probe",
      "Vacuum stability analysis suggests our universe may be metastable",
    ],
    experiments: ["LHC Run 3 HH searches", "HL-LHC di-Higgs program", "FCC-hh"],
    status: "under-investigation",
    year: 1964,
    contributors: ["Peter Higgs"],
    relatedModels: ["standard-higgs", "electroweak-phase-transition", "vacuum-stability"],
    difficulty: "advanced",
    tags: ["self-coupling", "di-higgs", "vacuum-stability", "potential"],
    learningContent: {
      overview:
        "The Higgs self-coupling tells us about the shape of the Higgs potential - the energy landscape that drives symmetry breaking. While we have confirmed the Higgs boson exists, we still need to map out the potential by measuring how the Higgs interacts with itself. This is one of the top priorities of future collider experiments.",
      prerequisites: [
        "Higgs mechanism and spontaneous symmetry breaking",
        "Scalar field theory and potentials",
        "Collider physics and cross-sections",
      ],
      keyInsights: [
        "The SM predicts a very specific relationship between the Higgs mass and its self-coupling",
        "Di-Higgs production is incredibly rare - about 1000x less common than single Higgs production",
        "The shape of the potential determines the nature of the electroweak phase transition",
        "Current measurements only constrain the self-coupling to within a factor of ~6 of SM prediction",
      ],
      commonMisconceptions: [
        "The Higgs self-coupling is NOT the same as the Yukawa coupling",
        "Measuring the Higgs mass alone does NOT determine the potential shape",
        "Vacuum metastability does not mean the universe will collapse anytime soon",
      ],
      furtherReading: [
        "Measuring the Higgs Self-Coupling at the LHC - de Florian & Zurita",
        "Vacuum Stability in the Standard Model - Degrassi et al.",
        "The Electroweak Phase Transition - Morrissey & Ramsey-Musolf",
      ],
    },
  },
  {
    id: "two-higgs-doublet",
    name: "Two-Higgs-Doublet Model (2HDM)",
    category: "beyond-standard",
    shortDescription:
      "Extends the Standard Model by adding a second Higgs doublet, predicting five physical Higgs bosons: h, H, A, H+, and H-.",
    fullDescription:
      "The Two-Higgs-Doublet Model (2HDM) is one of the simplest and most well-motivated extensions of the SM Higgs sector. By introducing a second SU(2) doublet scalar field, the model predicts five physical Higgs particles after symmetry breaking: two CP-even neutral scalars (h, H), one CP-odd neutral scalar (A), and two charged scalars (H+/H-). The model is naturally incorporated in supersymmetry (MSSM) and addresses several SM shortcomings. Different Types (I-IV) are classified by how the doublets couple to fermions.",
    keyEquation: "V = m_{11}^2 |\\Phi_1|^2 + m_{22}^2 |\\Phi_2|^2 - m_{12}^2 (\\Phi_1^\\dagger \\Phi_2 + \\text{h.c.}) + \\frac{\\lambda_1}{2}|\\Phi_1|^4 + \\ldots",
    equationDescription:
      "The 2HDM potential involves two scalar doublets Phi_1, Phi_2 with mass and coupling parameters determining the physical spectrum.",
    parameters: [
      {
        name: "Mixing Angle",
        symbol: "alpha",
        value: "Free parameter",
        unit: "rad",
        description: "Mixing angle between the two CP-even Higgs bosons",
      },
      {
        name: "Ratio of VEVs",
        symbol: "tan(beta)",
        value: "Free parameter",
        unit: "",
        description: "Ratio of the two Higgs doublet VEVs: v2/v1",
      },
      {
        name: "Charged Higgs Mass",
        symbol: "m_{H^+}",
        value: "> ~80 GeV",
        unit: "GeV",
        description: "Mass of the charged Higgs boson (experimentally constrained)",
      },
    ],
    implications: [
      "Predicts charged Higgs bosons that would be revolutionary to discover",
      "Can accommodate CP violation in the Higgs sector",
      "Provides a dark matter candidate in certain variants (Inert Doublet Model)",
      "The alignment limit reproduces SM-like Higgs phenomenology",
    ],
    experiments: ["LHC H+/- searches", "LHC heavy Higgs searches", "B-physics constraints"],
    status: "theoretical",
    year: 1973,
    contributors: ["T.D. Lee"],
    relatedModels: ["standard-higgs", "mssm-higgs", "inert-doublet"],
    difficulty: "advanced",
    tags: ["bsm", "extended-higgs-sector", "charged-higgs", "supersymmetry"],
    learningContent: {
      overview:
        "The 2HDM is like having two Higgs fields instead of one. This is the minimal extension of the SM Higgs sector and it naturally appears in supersymmetric theories. It predicts a rich phenomenology with five Higgs particles, some of which could be within reach of the LHC.",
      prerequisites: [
        "Standard Model Higgs mechanism",
        "Scalar field theory",
        "Basic group theory for SU(2) representations",
      ],
      keyInsights: [
        "The 125 GeV Higgs could be either h or H in this model",
        "Natural flavor conservation requires specific coupling patterns (Type I-IV)",
        "The alignment limit cos(beta-alpha) -> 0 makes h behave exactly like the SM Higgs",
        "Supersymmetry (MSSM) requires exactly a Type II 2HDM",
      ],
      commonMisconceptions: [
        "Having more Higgs bosons does not automatically violate existing measurements",
        "The charged Higgs would NOT be the antiparticle of itself",
        "The 2HDM is not just theoretical curiosity - it is well-motivated by SUSY and baryogenesis",
      ],
      furtherReading: [
        "A Discrete Symmetry and CP Violation - T.D. Lee (1973)",
        "Theory and Phenomenology of 2HDM - Branco, Grimus, Lavoura",
        "2HDM review - PDG",
      ],
    },
  },
  {
    id: "composite-higgs",
    name: "Composite Higgs Models",
    category: "beyond-standard",
    shortDescription:
      "Proposes that the Higgs boson is not a fundamental particle but a composite bound state arising from a new strong interaction at the TeV scale.",
    fullDescription:
      "Composite Higgs models address the hierarchy problem by positing that the Higgs boson is a pseudo-Nambu-Goldstone boson (pNGB) of a spontaneously broken global symmetry in a new strongly-interacting sector at the ~TeV scale. Just as pions are composite particles bound by QCD, the Higgs would be a composite bound by a new 'technicolor-like' force. The key advantage is that the Higgs mass is naturally light (protected by the Goldstone symmetry), solving the fine-tuning problem. These models predict modifications to Higgs couplings and new resonances at the TeV scale.",
    keyEquation: "\\xi = \\frac{v^2}{f^2}, \\quad g_{hVV} = g_{hVV}^{SM} \\sqrt{1-\\xi}",
    equationDescription:
      "The compositeness parameter xi controls the deviation of Higgs couplings from SM values. f is the global symmetry breaking scale.",
    parameters: [
      {
        name: "Compositeness Scale",
        symbol: "f",
        value: "> ~800 GeV",
        unit: "GeV",
        description: "The global symmetry breaking scale of the composite sector",
      },
      {
        name: "Compositeness Parameter",
        symbol: "xi = v^2/f^2",
        value: "< ~0.1",
        unit: "",
        description: "Measures degree of compositeness; xi=0 recovers the SM",
      },
    ],
    implications: [
      "Resolves the hierarchy problem without supersymmetry",
      "Predicts new composite resonances (vector, fermion) at the TeV scale",
      "Higgs couplings are modified by O(v^2/f^2) corrections",
      "Links to the concept of partial compositeness for fermion mass generation",
    ],
    experiments: ["LHC heavy resonance searches", "Higgs coupling precision measurements", "Top quark compositeness tests"],
    status: "theoretical",
    year: 1984,
    contributors: ["David Kaplan", "Howard Georgi", "Savas Dimopoulos"],
    relatedModels: ["technicolor", "little-higgs", "standard-higgs"],
    difficulty: "advanced",
    tags: ["bsm", "composite", "hierarchy-problem", "strong-dynamics"],
    learningContent: {
      overview:
        "Composite Higgs models propose that the Higgs is not truly elementary but is made of smaller constituents bound by a new force, similar to how protons are made of quarks. This elegantly explains why the Higgs mass is so much lighter than the Planck scale.",
      prerequisites: [
        "Goldstone theorem and pseudo-Goldstone bosons",
        "The hierarchy problem",
        "Non-linear sigma models",
        "Basics of strongly-coupled field theories",
      ],
      keyInsights: [
        "The lightness of the Higgs is naturally explained as a pseudo-Goldstone boson",
        "Deviations in Higgs couplings are the smoking gun for compositeness",
        "These models predict a rich spectrum of new resonances at the TeV scale",
        "Partial compositeness provides a natural mechanism for fermion mass hierarchies",
      ],
      commonMisconceptions: [
        "Composite Higgs is NOT the same as old technicolor models (no scalar remains in technicolor)",
        "Compositeness does not mean the Higgs has detectable substructure at LHC energies",
        "The model is not ruled out - current bounds still allow compositeness scales around 1 TeV",
      ],
      furtherReading: [
        "The Higgs as a Composite Nambu-Goldstone Boson - Panico & Wulzer",
        "A Composite Pseudo-Goldstone Higgs - Agashe, Contino, Pomarol",
        "Composite Higgs review - Bellazzini, Csaki, Serra",
      ],
    },
  },
  {
    id: "higgs-portal",
    name: "Higgs Portal Dark Matter",
    category: "cosmological",
    shortDescription:
      "Uses the Higgs boson as a mediator ('portal') connecting the visible Standard Model sector to a hidden dark matter sector.",
    fullDescription:
      "The Higgs portal model is one of the simplest and most compelling frameworks for dark matter. It assumes dark matter is a new neutral, stable particle (scalar, fermion, or vector) that has no direct interactions with SM particles except through the Higgs boson. The Higgs acts as a 'portal' - it couples to DM particles through a renormalizable interaction |H|^2 S^2 (for scalar DM S) or similar. This automatically provides the correct DM relic abundance for DM masses near half the Higgs mass (resonant annihilation) and at higher masses around 500 GeV-1 TeV.",
    keyEquation: "\\mathcal{L} \\supset \\lambda_{HS} |H|^2 S^2 + \\frac{m_S^2}{2} S^2",
    equationDescription:
      "The portal coupling lambda_HS connects the Higgs doublet H to a real scalar singlet dark matter candidate S.",
    parameters: [
      {
        name: "Portal Coupling",
        symbol: "lambda_HS",
        value: "Constrained by direct detection",
        unit: "",
        description: "Coupling strength between the Higgs and dark matter",
      },
      {
        name: "DM Mass",
        symbol: "m_S",
        value: "~62.5 or 500-1000",
        unit: "GeV",
        description: "Preferred mass ranges from relic abundance constraints",
      },
    ],
    implications: [
      "Provides a minimal dark matter candidate with testable predictions",
      "Invisible Higgs decays constrain low-mass dark matter scenarios",
      "Direct detection experiments (XENON, LZ) strongly constrain the portal coupling",
      "Could explain the observed dark matter relic abundance",
    ],
    experiments: ["XENON1T/XENONnT", "LUX-ZEPLIN (LZ)", "LHC invisible Higgs width"],
    status: "under-investigation",
    year: 2000,
    contributors: ["Burgess, Pospelov, ter Veldhuis", "Silveira, Zee"],
    relatedModels: ["standard-higgs", "dark-matter-models"],
    difficulty: "intermediate",
    tags: ["dark-matter", "portal", "invisible-decays", "cosmology"],
    learningContent: {
      overview:
        "Imagine the Higgs boson as a doorway between our visible world and a hidden dark sector. The Higgs portal model is the simplest way to connect dark matter to the Standard Model - through the only SM particle (the Higgs) that can have a renormalizable coupling to new singlet particles.",
      prerequisites: [
        "Standard Model Higgs mechanism",
        "Basics of dark matter (relic abundance, WIMP miracle)",
        "Basics of direct detection experiments",
      ],
      keyInsights: [
        "The Higgs is unique among SM particles in allowing renormalizable couplings to singlets",
        "Resonant annihilation at m_DM ~ m_H/2 can explain the relic abundance",
        "Direct detection experiments have excluded most of the low-mass parameter space",
        "Invisible Higgs decay measurements at the LHC set independent constraints",
      ],
      commonMisconceptions: [
        "The Higgs portal is not the only dark matter model, but it is the simplest",
        "Direct detection limits do not completely rule out Higgs portal DM",
        "Dark matter does not need to be a WIMP - but the Higgs portal naturally produces one",
      ],
      furtherReading: [
        "Scalar Dark Matter and the Higgs Portal - Cline et al.",
        "The Higgs Portal and Cosmology - Lebedev & Mambrini",
        "Direct Detection of Dark Matter - Schumann review",
      ],
    },
  },
  {
    id: "electroweak-phase-transition",
    name: "Electroweak Phase Transition",
    category: "cosmological",
    shortDescription:
      "Describes how the Higgs field 'turned on' in the early universe, transitioning from a symmetric phase (zero VEV) to the broken phase (non-zero VEV).",
    fullDescription:
      "In the early universe, at temperatures above ~160 GeV, the Higgs field had zero VEV and the electroweak symmetry was unbroken - all particles were massless. As the universe cooled, it underwent the electroweak phase transition (EWPT), with the Higgs field settling into its non-zero VEV. In the SM, this transition is a smooth crossover. However, many BSM models (2HDM, singlet extensions, composite Higgs) predict a first-order phase transition with bubbles of broken phase nucleating and expanding - this could explain the matter-antimatter asymmetry through electroweak baryogenesis and would produce gravitational waves detectable by future space-based interferometers.",
    keyEquation: "V_{\\text{eff}}(\\phi, T) = D(T^2 - T_0^2)\\phi^2 - ET\\phi^3 + \\frac{\\lambda(T)}{4}\\phi^4",
    equationDescription:
      "The finite-temperature effective potential. A cubic term (E) can produce a barrier between the symmetric and broken phases, enabling a first-order transition.",
    parameters: [
      {
        name: "Critical Temperature",
        symbol: "T_c",
        value: "~160",
        unit: "GeV",
        description: "Temperature at which the phase transition occurs",
      },
      {
        name: "Transition Strength",
        symbol: "v(T_c)/T_c",
        value: "> 1 needed for baryogenesis",
        unit: "",
        description: "Ratio of VEV at critical temp to critical temp; must be >1 for strong first-order",
      },
    ],
    implications: [
      "Could explain the observed matter-antimatter asymmetry (baryogenesis)",
      "A first-order transition would produce gravitational waves detectable by LISA",
      "Constrains modifications to the Higgs potential at high temperatures",
      "Links particle physics to cosmological observations",
    ],
    experiments: ["LISA gravitational wave observatory", "LHC di-Higgs measurements", "Future colliders"],
    status: "under-investigation",
    year: 1972,
    contributors: ["Kirzhnits", "Linde", "Kuzmin, Rubakov, Shaposhnikov"],
    relatedModels: ["higgs-self-coupling", "two-higgs-doublet", "baryogenesis"],
    difficulty: "advanced",
    tags: ["cosmology", "phase-transition", "baryogenesis", "gravitational-waves"],
    learningContent: {
      overview:
        "About 10 picoseconds after the Big Bang, the universe underwent the electroweak phase transition. The Higgs field 'switched on', particles acquired mass, and the electroweak force split into the electromagnetic and weak forces. Understanding whether this was a smooth crossover or a dramatic first-order transition is key to explaining why we exist (matter-antimatter asymmetry).",
      prerequisites: [
        "Finite temperature field theory basics",
        "The Higgs potential and spontaneous symmetry breaking",
        "Cosmological timeline and thermal history",
      ],
      keyInsights: [
        "The SM predicts a smooth crossover, but BSM physics could make it first-order",
        "A first-order EWPT is necessary for electroweak baryogenesis",
        "Gravitational waves from the transition could be detected by LISA around 2037",
        "The Higgs self-coupling is intimately connected to the transition order",
      ],
      commonMisconceptions: [
        "The EWPT is NOT the same as the QCD phase transition (which happened later)",
        "A crossover is not a true phase transition in the thermodynamic sense",
        "The SM already fails to explain baryogenesis - we need new physics",
      ],
      furtherReading: [
        "Electroweak Baryogenesis - Morrissey & Ramsey-Musolf",
        "Gravitational Waves from First-Order Phase Transitions - Caprini et al.",
        "Cosmological Phase Transitions - Kolb & Turner",
      ],
    },
  },
  {
    id: "higgs-inflation",
    name: "Higgs Inflation Model",
    category: "cosmological",
    shortDescription:
      "Proposes that the Higgs field itself could have driven the exponential expansion of the early universe (inflation) through a non-minimal coupling to gravity.",
    fullDescription:
      "Higgs inflation, proposed by Bezrukov and Shaposhnikov in 2008, suggests that the Standard Model Higgs field, with a large non-minimal coupling xi to the Ricci scalar R, can serve as the inflaton. At large field values, the effective potential in the Einstein frame becomes exponentially flat, providing the slow-roll conditions needed for inflation. This model is remarkably economical - it uses the known Higgs field with no new particles. The predicted spectral index n_s ~ 0.97 and tensor-to-scalar ratio r ~ 0.003 are consistent with CMB observations by Planck.",
    keyEquation: "S = \\int d^4x \\sqrt{-g} \\left[ \\frac{M_P^2 + \\xi H^2}{2} R - \\frac{1}{2}(\\partial H)^2 - V(H) \\right]",
    equationDescription:
      "The action includes a non-minimal coupling xi*H^2*R between the Higgs and gravity. For xi ~ 10^4, this gives viable inflation.",
    parameters: [
      {
        name: "Non-minimal Coupling",
        symbol: "xi",
        value: "~47000 sqrt(lambda)",
        unit: "",
        description: "Must be large (~10^4) for successful inflation",
      },
      {
        name: "Spectral Index",
        symbol: "n_s",
        value: "~0.97",
        unit: "",
        description: "Predicted scalar spectral index, consistent with Planck data",
      },
      {
        name: "Tensor-to-Scalar Ratio",
        symbol: "r",
        value: "~0.003",
        unit: "",
        description: "Predicted to be small, within reach of future CMB experiments",
      },
    ],
    implications: [
      "No new particles needed beyond the Standard Model for inflation",
      "Links the electroweak scale to the inflationary scale",
      "Predictions are testable with next-generation CMB experiments",
      "Raises questions about unitarity at high field values",
    ],
    experiments: ["Planck CMB observations", "LiteBIRD (planned)", "CMB-S4 (planned)"],
    status: "under-investigation",
    year: 2008,
    contributors: ["Fedor Bezrukov", "Mikhail Shaposhnikov"],
    relatedModels: ["standard-higgs", "vacuum-stability"],
    difficulty: "advanced",
    tags: ["inflation", "cosmology", "gravity", "cmb"],
    learningContent: {
      overview:
        "What if the Higgs field is not only responsible for particle masses but also for the rapid expansion of the early universe? Higgs inflation proposes exactly this: with a strong coupling between the Higgs and gravity, the Higgs field can drive inflation. This is the most economical inflation model possible.",
      prerequisites: [
        "General relativity and the Ricci scalar",
        "Inflationary cosmology basics",
        "Slow-roll conditions",
        "CMB observables (n_s, r)",
      ],
      keyInsights: [
        "The large non-minimal coupling effectively flattens the Higgs potential at large field values",
        "Predictions match Planck CMB data remarkably well",
        "The model connects the electroweak scale to the inflationary energy scale",
        "Concerns about unitarity violation at high energies remain debated",
      ],
      commonMisconceptions: [
        "The large coupling xi does NOT mean the model is finely tuned",
        "Higgs inflation is NOT ruled out by current data",
        "The model does not require new particles but does require new gravitational couplings",
      ],
      furtherReading: [
        "The Standard Model Higgs boson as the inflaton - Bezrukov & Shaposhnikov (2008)",
        "Higgs inflation: consistency and generalisations - Bezrukov & Shaposhnikov (2009)",
        "Planck 2018 results: Inflation - Planck Collaboration",
      ],
    },
  },
  {
    id: "vacuum-stability",
    name: "Electroweak Vacuum Stability",
    category: "standard-model",
    shortDescription:
      "Analysis of whether our Higgs vacuum is truly stable or could quantum-tunnel to a lower-energy state, potentially destroying the universe.",
    fullDescription:
      "The stability of the electroweak vacuum depends on the behavior of the Higgs quartic coupling lambda at high energy scales. Renormalization group running shows that lambda decreases with energy and can turn negative around 10^10-10^12 GeV, suggesting that the current electroweak vacuum may not be the true ground state. However, the tunneling rate to the deeper vacuum is calculated to be extremely slow - much longer than the age of the universe - making our vacuum metastable. The exact stability boundary is exquisitely sensitive to the top quark mass and alpha_s.",
    keyEquation: "\\beta_\\lambda \\approx \\frac{1}{16\\pi^2}\\left(24\\lambda^2 - 6y_t^4 + \\ldots\\right)",
    equationDescription:
      "The beta function for the Higgs quartic coupling. The large top Yukawa (y_t) drives lambda negative at high scales.",
    parameters: [
      {
        name: "Instability Scale",
        symbol: "Lambda_I",
        value: "~10^{10}",
        unit: "GeV",
        description: "Energy scale where the quartic coupling turns negative",
      },
      {
        name: "Tunneling Lifetime",
        symbol: "tau",
        value: ">> 10^{100}",
        unit: "years",
        description: "Estimated vacuum tunneling lifetime - far exceeding the age of the universe",
      },
    ],
    implications: [
      "Our universe may exist in a metastable vacuum state",
      "The vacuum lifetime far exceeds the age of the universe",
      "Exquisitely sensitive to the top quark mass measurement",
      "New physics at intermediate scales could stabilize the vacuum",
    ],
    experiments: ["LHC top quark mass measurements", "Future precision Higgs measurements"],
    status: "under-investigation",
    year: 1979,
    contributors: ["Cabibbo, Maiani, Parisi, Petronzio", "Degrassi, Giardino et al."],
    relatedModels: ["standard-higgs", "higgs-self-coupling", "higgs-inflation"],
    difficulty: "advanced",
    tags: ["vacuum", "stability", "rge", "top-quark"],
    learningContent: {
      overview:
        "Is our universe living on borrowed time? Vacuum stability analysis shows that the Higgs potential may develop a deeper minimum at very high energies, meaning our current vacuum is only metastable. But don't panic - the estimated tunneling time is unimaginably longer than the age of the universe.",
      prerequisites: [
        "Renormalization group equations",
        "The Higgs quartic coupling and potential",
        "Quantum tunneling in field theory",
      ],
      keyInsights: [
        "The measured Higgs and top quark masses place us tantalizingly close to the stability boundary",
        "This 'near-criticality' may be hinting at deeper physics",
        "New physics at the TeV scale could easily stabilize the vacuum",
        "The analysis requires state-of-the-art multi-loop calculations",
      ],
      commonMisconceptions: [
        "Metastability does NOT mean the universe is about to end",
        "Quantum tunneling to the true vacuum would propagate at the speed of light",
        "We cannot observe whether tunneling has started somewhere in the observable universe",
      ],
      furtherReading: [
        "Investigating the near-criticality of the Higgs boson - Buttazzo et al.",
        "Higgs mass and vacuum stability in the SM at NNLO - Degrassi et al.",
        "Is the Standard Model stable? - Elias-Miro et al.",
      ],
    },
  },
]

export function searchModels(query: string): HiggsModel[] {
  const lower = query.toLowerCase()
  return higgsModels.filter(
    (m) =>
      m.name.toLowerCase().includes(lower) ||
      m.shortDescription.toLowerCase().includes(lower) ||
      m.tags.some((t) => t.includes(lower)) ||
      m.category.toLowerCase().includes(lower) ||
      m.contributors.some((c) => c.toLowerCase().includes(lower))
  )
}

export function getModelById(id: string): HiggsModel | undefined {
  return higgsModels.find((m) => m.id === id)
}

export function getModelsByCategory(category: HiggsModel["category"]): HiggsModel[] {
  return higgsModels.filter((m) => m.category === category)
}

export function getRelatedModels(modelId: string): HiggsModel[] {
  const model = getModelById(modelId)
  if (!model) return []
  return model.relatedModels
    .map((id) => getModelById(id))
    .filter(Boolean) as HiggsModel[]
}

export const categoryLabels: Record<HiggsModel["category"], string> = {
  "standard-model": "Standard Model",
  "beyond-standard": "Beyond Standard Model",
  cosmological: "Cosmological",
  experimental: "Experimental",
}

export const categoryDescriptions: Record<HiggsModel["category"], string> = {
  "standard-model": "Established models within the Standard Model framework",
  "beyond-standard": "Theoretical extensions beyond the Standard Model",
  cosmological: "Models connecting the Higgs field to cosmology and the early universe",
  experimental: "Models under active experimental investigation",
}

export const statusLabels: Record<HiggsModel["status"], string> = {
  confirmed: "Experimentally Confirmed",
  theoretical: "Theoretical",
  "under-investigation": "Under Investigation",
}
