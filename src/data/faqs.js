export const faqData = [
  {
    category: "Chauffage",
    icon: "🔥",
    questions: [
      {
        id: "heat-1",
        question: "Ma thermopompe Moov MI n'affiche plus de température. Que faire ?",
        answer: "Vérifie d'abord si la pompe de circulation fonctionne et si l'eau passe bien à travers l'appareil. S'il y a un code E3 ou E6, ça indique un manque de débit."
      },
      {
        id: "heat-2",
        question: "Que veut dire le code E3 sur une Moov MI ?",
        answer: "Code E3 = Pas de débit d'eau détecté. Vérifie la pompe, les filtres, et que toutes les vannes soient ouvertes."
      }
    ]
  },
  {
    category: "Pompe & Circulation",
    icon: "🌀",
    questions: [
      {
        id: "pump-1",
        question: "Ma pompe Moov Ai est installée mais ne tire pas d'eau. Que faire ?",
        answer: "Passe en mode GPM et pousse temporairement à 100 GPM. Cela permet de forcer l'amorçage. Vérifie aussi le niveau d'eau et l'ouverture des vannes."
      },
      {
        id: "pump-2",
        question: "Ma pompe fait du bruit mais ne pompe rien.",
        answer: "Vérifie s'il y a de l'air dans le système. Ouvre le couvercle du panier, remplis d'eau, referme, puis redémarre."
      }
    ]
  },
  {
    category: "Éclairage",
    icon: "💡",
    questions: [
      {
        id: "light-1",
        question: "Ma lumière SP1000 ne fonctionne plus.",
        answer: "Vérifie si elle est bien branchée (AC ou DC selon modèle), et si le transformateur est actif. Certaines versions ont une télécommande."
      },
      {
        id: "light-2",
        question: "Je veux changer la couleur de ma lampe Moov.",
        answer: "La lampe Moov se contrôle par séquence d'allumage/extinction rapide. Éteins et rallume pour changer de couleur."
      }
    ]
  },
  {
    category: "Plomberie & Fuites",
    icon: "💧",
    questions: [
      {
        id: "plumb-1",
        question: "J'ai une fuite au niveau du drain de fond.",
        answer: "Inspecte les raccords visibles. Une fuite à ce niveau peut nécessiter une pression d'air (test) pour confirmer l'endroit exact."
      },
      {
        id: "plumb-2",
        question: "Ma pompe perd de la pression, est-ce une fuite ?",
        answer: "Pas forcément. Ça peut venir d'une prise d'air, d'un panier vide ou d'un joint mal serré. Vérifie tous les raccords."
      }
    ]
  },
  {
    category: "Eau & Chloration",
    icon: "🧪",
    questions: [
      {
        id: "water-1",
        question: "Mon eau sent fort le chlore, est-ce dangereux ?",
        answer: "Non, c'est souvent un manque d'oxygène et la présence de chloramines. Aère la piscine et fais un traitement choc sans stabilisant."
      },
      {
        id: "water-2",
        question: "Puis-je combiner du chlore et un électrolyseur au sel ?",
        answer: "Non recommandé. Ça peut endommager la cellule de sel. Choisis un seul mode de désinfection à la fois."
      }
    ]
  },
  {
    category: "Garantie",
    icon: "🛡️",
    questions: [
      {
        id: "warr-1",
        question: "Est-ce que ma coque de piscine est garantie ?",
        answer: "Oui, les coques AFI sont garanties 25 ans pour la structure. Il faut une preuve d'achat et des photos en cas de fissure."
      },
      {
        id: "warr-2",
        question: "Comment fonctionne la garantie pour une pompe Moov ?",
        answer: "AFI transmet la pièce au fabricant. Si accepté, la pièce est remplacée, mais le client paie la livraison. La main-d'œuvre n'est jamais incluse."
      }
    ]
  },
  {
    category: "Clavier & Interface",
    icon: "⚙️",
    questions: [
      {
        id: "key-1",
        question: "Mon clavier in.k450 ne s'allume plus. Que faire ?",
        answer: "Coupe le courant au disjoncteur, attends 30 secondes, puis rallume. Si le clavier reste noir, vérifie le câble entre le in.k450 et l'in.xe."
      },
      {
        id: "key-2",
        question: "Comment modifier l'heure ou le mode filtration sur un clavier in.k600 ?",
        answer: "Appuie sur Light + Up pour accéder au menu. Navigue avec les flèches. Mode : Filtration, Eco, Auto."
      }
    ]
  },
  {
    category: "Commande & Livraison",
    icon: "📦",
    questions: [
      {
        id: "order-1",
        question: "Comment fonctionne la livraison des couvertures de spa ?",
        answer: "Dans un rayon de 75 km, livraison forfaitaire de 150 $. Au-delà, on facture 2 $ par km jusqu'à 350 km maximum."
      },
      {
        id: "order-2",
        question: "Puis-je venir chercher ma commande moi-même ?",
        answer: "Oui, la cueillette est gratuite sur rendez-vous à notre entrepôt. Tu dois payer la commande au complet avant."
      }
    ]
  }
];

export const allFAQs = faqData.flatMap(category =>
  category.questions.map(q => ({
    ...q,
    category: category.category,
    categoryIcon: category.icon
  }))
);