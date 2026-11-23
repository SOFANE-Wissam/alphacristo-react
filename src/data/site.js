// All the site's text lives here, so you can edit content without touching components.

export const company = {
  name: 'Alpha Cristo',
  legalName: 'SARL Alpha Cristo Industrial',
  group: 'groupe Amouri',
  tagline: 'Votre source de plâtre haut de gamme pour des constructions durables et esthétiques.',
  address: ['R/N N46, Ouled Djellal', 'Biskra, Algérie'],
  addressOneLine: 'R/N N46, Ouled Djellal, Biskra, Algérie',
  emails: ['alpha.cristo.ind@gmail.com', 'contact@alphacristo.com'],
  whatsapp: { label: '+213 770 891 117', tel: '+213770891117', wa: '213770891117' },
  mobile: { label: '+213 669 393 364', tel: '+213669393364' },
  hours: [
    { days: 'Dimanche à jeudi', time: '8h00 – 17h00' },
    { days: 'Vendredi et samedi', time: 'Fermé' },
  ],
  mapEmbed: 'https://maps.google.com/maps?q=F3H2%2BC7%20Ouled%20Djellal&t=m&z=11&output=embed&iwloc=near',
  mapLink:
    'https://www.google.com/maps/place/F3H2%2BC7,+Ouled+Djellal,+Alg%C3%A9rie/@34.478562,5.050688,11z/data=!4m5!3m4!1s0x12f555334961d459:0x310a7f4cd2474965!8m2!3d34.4785625!4d5.0506875?hl=fr-FR',
  facebook: 'https://www.facebook.com/alphacristo',
}

export const nav = [
  { to: '/', label: 'Accueil', end: true },
  { to: '/a-propos-de-nous', label: 'À propos' },
  { to: '/nos-produits-fiches-techniques', label: 'Nos produits' },
  { to: '/devenir-client', label: 'Devenir client' },
  { to: '/nous-contacter', label: 'Contact' },
]

export const presentation = [
  "SARL Alpha Cristo Industrial, fièrement affiliée au groupe Amouri, est une entreprise leader dans la production et la distribution de gypse et de ses dérivés en Algérie. Notre engagement envers l'excellence se reflète dans nos produits de haute qualité, conçus pour répondre aux exigences rigoureuses des normes internationales.",
  "Avec une capacité de production de 450 tonnes par jour, notre équipe d'environ 100 employés dévoués travaille sans relâche pour offrir des solutions innovantes et fiables à nos clients. Nos produits se distinguent par leur blancheur éclatante, leur facilité d'application et leur durabilité exceptionnelle, faisant de nous un choix privilégié pour les projets de construction et d'aménagement intérieur.",
  "Nous sommes présents dans les 58 wilayas d'Algérie, assurant une couverture nationale complète, et nous avons également une forte orientation vers l'exportation, desservant des marchés clés tels que le Mali, le Niger, la Côte d'Ivoire, le Sénégal et la Libye. Chez SARL Alpha Cristo Industrial, nous nous engageons à l'innovation continue et à l'amélioration de nos processus pour garantir la satisfaction totale de nos clients.",
]

export const mission = [
  'Notre mission chez SARL Alpha Cristo Industrial est de fournir des produits de gypse de la plus haute qualité, répondant aux besoins diversifiés de nos clients.',
  "Nous nous engageons à l'innovation constante et à l'amélioration continue de nos produits et services pour garantir satisfaction et excellence. Nous visons à être un partenaire fiable pour tous vos projets de construction et d'aménagement.",
]

export const strengths = [
  {
    title: 'Qualité supérieure',
    text: 'Nos produits sont fabriqués selon des spécifications internationales strictes, garantissant une qualité fiable.',
  },
  {
    title: "Facilité d'utilisation",
    text: "Plâtres faciles à manipuler et à appliquer, adaptés à une large gamme d'applications.",
  },
  {
    title: 'Durabilité',
    text: 'Des résultats solides et durables pour tous vos projets, assurant une longévité exceptionnelle.',
  },
  {
    title: 'Service client',
    text: 'Une équipe dédiée à répondre à vos besoins et à vos questions, offrant un support client de haute qualité.',
  },
]

export const commitments = [
  {
    title: 'Qualité et innovation',
    text: 'Produire des matériaux de construction sûrs et durables, tout en innovant continuellement pour répondre aux besoins changeants du marché.',
  },
  {
    title: 'Développement durable',
    text: 'Soutenir le développement durable en utilisant des pratiques respectueuses de l\'environnement et en minimisant notre empreinte écologique.',
  },
  {
    title: 'Service exceptionnel',
    text: 'Fournir un service client exceptionnel pour assurer la satisfaction de nos clients, avec une approche proactive et réactive à leurs besoins.',
  },
]

export const figures = [
  {
    value: 450,
    prefix: '',
    unit: 'tonnes par jour',
    text: 'Capacité de production, pour une fourniture continue et fiable de produits de haute qualité.',
  },
  {
    value: 100,
    prefix: '+',
    unit: 'employés',
    text: 'Environ 100 professionnels qualifiés et dévoués, qui travaillent ensemble pour atteindre l\'excellence.',
  },
  {
    value: 58,
    prefix: '',
    unit: 'wilayas',
    text: 'Présence dans les 58 wilayas d\'Algérie, pour une couverture nationale complète.',
  },
  {
    value: 6,
    prefix: '+',
    unit: 'pays',
    text: "Exportation vers le Mali, le Niger, la Côte d'Ivoire, le Sénégal et la Libye, avec une expansion continue vers d'autres marchés.",
  },
]

export const gallery = [
  { key: 'gallery1', alt: "Site de production Alpha Cristo, vue 1" },
  { key: 'gallery2', alt: "Site de production Alpha Cristo, vue 2" },
  { key: 'gallery3', alt: "Site de production Alpha Cristo, vue 3" },
  { key: 'gallery4', alt: "Site de production Alpha Cristo, vue 4" },
]

export const groupCompanies = [
  { name: 'Amouri Groupe', img: 'groupAmouri', href: 'https://dz.kompass.com/c/briqueterie-amouri-toufik-sarl/dz273285/' },
  { name: 'Alpha Cristo', img: 'groupAlphaCristo', href: 'https://dz.kompass.com/c/briqueterie-amouri-toufik-sarl/dz273285/' },
  { name: 'Biskria Ciment', img: 'groupBiskria', href: 'https://www.biskriaciment.com/' },
  { name: 'Sopre Oil', img: 'groupSopreOil', href: 'https://www.facebook.com/tophuile' },
  { name: 'El Kantara', img: 'groupKantara', href: 'https://1732601.site123.me/' },
  { name: 'Confort Ceram', img: 'groupConfortCeram', href: 'https://www.facebook.com/ConfortCeramBiskra' },
  { name: 'Sinotruk', img: 'groupSinotruk', href: 'https://www.facebook.com/profile.php?id=61555482353961' },
  { name: 'Reine des Ziban', img: 'groupZiban', href: 'https://rdz-aerosol.com/' },
  { name: 'Briqueterie Amouri', img: 'groupBriqueterie', href: 'https://dz.kompass.com/c/briqueterie-amouri-toufik-sarl/dz273285/' },
]

/* ---------------------------------------------------------------------------
   Products. `specs` is null for the two products whose figures are not yet
   published on the current site (Extra Fin, Gypse Agricole).
--------------------------------------------------------------------------- */
export const products = [
  {
    id: 'crystal-plus',
    name: 'Plâtre Crystal Plus',
    image: 'crystalPlus',
    category: 'Finition intérieure',
    short: "Solution 3 en 1 pour l'enduisage, la dureté et la malléabilité des murs et plafonds.",
    intro:
      "Plâtre semi-hydraté β issu d'un gypse naturel de haute pureté supérieure à 91 %, destiné à l'enduit de parachèvement des murs et plafonds.",
    usage:
      "Travaux d'aménagement intérieur, murs et plafonds. Les supports doivent être dépoussiérés et humidifiés avant application.",
    application:
      "Mélanger pendant 3 à 8 minutes. Un sac de 40 kg nécessite 40 L d'eau propre. Conserver au sec, à l'abri de l'humidité et sans contact direct avec le sol.",
    specs: [
      ['Conditionnement', 'Sac polyéthylène de 40 kg'],
      ['Consommation', '6 à 7,5 m² par sac de 40 kg'],
      ['Densité apparente', '0,70 à 0,75'],
      ['Aspect', 'Poudre blanche'],
      ['Granulométrie ≤ 100 μm', '72 % à 75 %'],
      ['Norme', 'Algérienne B1 / NF EN 13279-1'],
      ['Temps de prise', 'Début : 10–20 min · Fin : 40–50 min'],
      ['Rapport eau/plâtre', '40 L / 40 kg'],
      ['Résistance à la flexion à 7 j', '≥ 3 MPa'],
      ['Résistance à la compression à sec', '≥ 8 MPa'],
    ],
  },
  {
    id: 'moulage',
    name: 'Plâtre de Moulage',
    image: 'moulage',
    category: 'Moulage et décoration',
    short: 'Conçu pour le staff, les faux plafonds, colonnes, rosaces et éléments décoratifs.',
    intro:
      "Plâtre semi-hydraté β blanc, issu d'un gypse naturel de haute pureté supérieure à 91 %, destiné aux applications manuelles.",
    usage: 'Staff, faux plafonds, colonnes, rosaces et éléments décoratifs réalisés par coulage ou modelage.',
    application: 'Mélanger pendant 2 à 3 minutes selon l\'application. Conserver au sec et sans contact direct avec le sol.',
    specs: [
      ['Conditionnement', 'Sac polyéthylène de 40 kg'],
      ['Rendement', '6 à 7 plaques de plâtre'],
      ['Densité apparente', '0,88 à 0,90'],
      ['Aspect', 'Poudre blanche'],
      ['Granulométrie ≤ 100 μm', '45 % à 55 %'],
      ['Norme', 'Algérienne / NF EN 13279-1'],
      ['Temps de prise', 'Début : 5–7 min · Fin : 12–15 min'],
      ['Fluidité anneau Vicat', '22–27 cm'],
      ['Rapport eau/plâtre', '32 L / 40 kg'],
      ['Résistance à la flexion à 7 j', '≥ 2,8 MPa'],
      ['Résistance à la compression à sec', '≥ 8 MPa'],
    ],
  },
  {
    id: 'construction',
    name: 'Plâtre de Construction',
    image: 'construction',
    category: 'Construction',
    short: "Pour les travaux de stuc, de staff, de décoration et d'aménagement intérieur.",
    intro: "Plâtre fin semi-hydraté β, blanc, issu d'un gypse naturel de haute pureté supérieure à 91 %.",
    usage: "Stuc, staff, éléments décoratifs et travaux d'aménagement intérieur sur murs et plafonds.",
    application:
      'Sur support propre et humidifié, mélanger pendant 2 à 4 minutes. Conserver au sec et sans contact direct avec le sol.',
    specs: [
      ['Conditionnement', 'Sac polyéthylène de 40 kg'],
      ['Consommation', "9 kg / m² / cm d'épaisseur"],
      ['Densité apparente', '0,70 à 0,75'],
      ['Aspect', 'Poudre blanche'],
      ['Granulométrie ≤ 100 μm', '75 % à 85 %'],
      ['Norme', 'Algérienne B1 / NF EN 13279-1'],
      ['Temps de prise', 'Début : 8–10 min · Fin : 20–30 min'],
      ['Fluidité anneau Vicat', '22–27 cm'],
      ['Rapport eau/plâtre', '31–35 L / 40 kg'],
      ['Résistance à la flexion à 7 j', '≥ 2,5 MPa'],
      ['Résistance à la compression à sec', '≥ 8 MPa'],
    ],
  },
  {
    id: 'construction-pro',
    name: 'Plâtre de Construction PRO',
    image: 'constructionPro',
    category: 'Performance professionnelle',
    short: 'Une formulation professionnelle offrant une meilleure résistance et un temps de travail maîtrisé.',
    intro: "Plâtre fin semi-hydraté β destiné aux professionnels, issu d'un gypse naturel de haute pureté supérieure à 91 %.",
    usage: 'Stuc, staff, éléments décoratifs, murs et plafonds. Appliquer sur des supports dépoussiérés et humidifiés.',
    application: 'Mélanger pendant 2 à 4 minutes. Conserver dans un endroit sec et sans contact direct avec le sol.',
    specs: [
      ['Conditionnement', 'Sac polyéthylène de 40 kg'],
      ['Consommation', '5 à 7 m² par sac de 40 kg'],
      ['Densité apparente', '0,65 à 0,70'],
      ['Aspect', 'Poudre blanche'],
      ['Granulométrie ≤ 100 μm', '72 % à 80 %'],
      ['Norme', 'Algérienne B1 / NF EN 13279-1'],
      ['Temps de prise', 'Début : 15–20 min · Fin : 30–40 min'],
      ['Fluidité anneau Vicat', '22–25 cm'],
      ['Rapport eau/plâtre', '26–30 L / 40 kg'],
      ['Résistance à la flexion à 7 j', '≥ 3 MPa'],
      ['Résistance à la compression à sec', '≥ 8,5 MPa'],
    ],
  },
  {
    id: 'extra-fin',
    name: 'Plâtre de Construction Extra Fin',
    image: 'extraFin',
    category: 'Haute précision',
    short: 'Pour les finitions lisses, les moulures, les ornements et les travaux de restauration.',
    intro:
      "Produit destiné aux projets exigeant une finition précise, lisse et homogène. Il convient aux enduits intérieurs, moulures, ornements, travaux de stuc, rénovation et restauration.",
    usage:
      'Sa texture fine facilite la préparation des surfaces avant peinture et les finitions décoratives de haute précision.',
    application: null,
    specs: null,
    onRequest: 'Les valeurs techniques détaillées de ce produit sont disponibles auprès de notre service technique.',
  },
  {
    id: 'gypse-agricole',
    name: 'Gypse Agricole',
    image: 'gypseAgricole',
    category: 'Agriculture',
    short: "Améliore la structure, la perméabilité et la rétention d'eau des sols agricoles.",
    intro: 'Source de calcium et de soufre destinée à améliorer la qualité et la structure des sols agricoles.',
    usage:
      "Réduction de la salinité, meilleure perméabilité, amélioration de l'infiltration de l'eau et des nutriments, augmentation de la rétention d'eau et contribution à la réhabilitation des sols dégradés.",
    usageTitle: 'Principaux avantages',
    application: null,
    specs: null,
    onRequest: 'Dosage recommandé par type de sol, conditionnement et précautions d\'emploi : demandez conseil à notre équipe.',
  },
]

export const clientFiles = [
  {
    title: 'Entreprises de réalisation',
    items: [
      "Pièce d'identité",
      'Registre de commerce légalisé par le CNRC',
      "NIF (numéro d'identification fiscale) ou NIS (numéro d'identification statistique)",
      "Certificat d'activité (C20)",
      'Statuts pour les personnes morales',
      'Contrat de marché',
      'Ordre de service',
      'Attestation de besoin originale',
      'Permis de construire',
    ],
  },
  {
    title: 'Entreprises de transformation et revendeurs',
    items: [
      "Pièce d'identité",
      'Registre de commerce légalisé par le CNRC',
      "NIF (numéro d'identification fiscale) ou NIS (numéro d'identification statistique)",
      "Certificat d'activité (C20)",
      'Carte fiscale',
      "Déclaration d'existence",
    ],
  },
]

export const privacy = {
  updated: '14 juillet 2026',
  intro:
    'Alpha Cristo respecte la confidentialité des visiteurs et traite uniquement les données nécessaires au fonctionnement du site et au suivi des demandes.',
  sections: [
    {
      title: '1. Responsable du site',
      text: [
        'Le présent site est exploité par SARL Alpha Cristo Industrial, R/N N46, Ouled Djellal, Biskra, Algérie. Pour toute question relative à vos données : contact@alphacristo.com.',
      ],
    },
    {
      title: '2. Données collectées',
      text: [
        "Lorsque vous utilisez le formulaire de contact ou demandez à devenir client, nous pouvons recueillir votre nom, adresse e-mail, numéro de téléphone, société et le contenu de votre message. Le serveur peut également enregistrer des données techniques comme l'adresse IP, le navigateur, les pages consultées et la date de visite.",
      ],
    },
    {
      title: '3. Finalités du traitement',
      list: [
        'Répondre aux demandes de renseignements, devis et partenariat.',
        "Assurer le fonctionnement, la sécurité et l'amélioration du site.",
        "Établir des statistiques d'audience lorsque les outils correspondants sont activés.",
        'Respecter les obligations légales applicables.',
      ],
    },
    {
      title: '4. Cookies',
      text: [
        "Le site peut utiliser des cookies nécessaires à son fonctionnement ainsi que, selon les services activés, des cookies de mesure d'audience ou de contenu tiers. Vous pouvez limiter ou supprimer les cookies depuis les réglages de votre navigateur. Le refus de certains cookies peut réduire certaines fonctionnalités.",
      ],
    },
    {
      title: '5. Destinataires et sous-traitants',
      text: [
        "Les données sont accessibles aux personnes autorisées d'Alpha Cristo et aux prestataires techniques indispensables à l'hébergement, à la maintenance, à la sécurité et à la messagerie. Elles ne sont pas vendues. Elles peuvent être communiquées si la loi l'exige.",
      ],
    },
    {
      title: '6. Durée de conservation',
      text: [
        'Les données sont conservées pendant la durée nécessaire au traitement de votre demande, puis archivées ou supprimées conformément aux obligations légales et aux besoins légitimes de sécurité et de suivi commercial.',
      ],
    },
    {
      title: '7. Sécurité',
      text: [
        "Des mesures techniques et organisationnelles raisonnables sont appliquées pour protéger les données contre l'accès non autorisé, la perte, l'altération ou la divulgation. Aucun système connecté à Internet ne peut toutefois garantir une sécurité absolue.",
      ],
    },
    {
      title: '8. Vos droits',
      text: [
        "Vous pouvez demander l'accès, la rectification ou la suppression de vos données, ainsi que vous opposer à certains traitements dans les limites prévues par la réglementation applicable. Envoyez votre demande à contact@alphacristo.com en précisant l'objet de votre demande.",
      ],
    },
    {
      title: '9. Liens externes',
      text: [
        "Le site peut contenir des liens vers des services externes. Alpha Cristo n'est pas responsable de leurs pratiques de confidentialité ; nous vous invitons à consulter leurs propres politiques.",
      ],
    },
    {
      title: '10. Modifications',
      text: [
        "Cette politique peut être mise à jour pour refléter l'évolution du site, des services ou des règles applicables. La date affichée en haut de cette page indique la dernière révision.",
      ],
    },
  ],
}
