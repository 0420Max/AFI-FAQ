# FAQ Chauffage – Thermopompes Piscine

Ce module couvre les principales thermopompes utilisées avec les piscines AFI, incluant la Moov MI (Inverter), les chauffe-eau à gaz (Hayward UHS) et les systèmes électriques intégrés (Gecko in.xe, in.ye).

---

## 1. ⚠️ Sécurité avant toute intervention

- Toujours couper l’alimentation électrique au disjoncteur.
- Ne jamais intervenir sans avoir drainé l’eau si risque de gel.
- Installer dans un espace bien ventilé, jamais en zone confinée ou sous toiture basse.
- Garder les enfants à l’écart.

---

## 2. 🔥 Moov MI (MI500 à MI1400)

### Fonctionnement
- Chauffe ou refroidit automatiquement selon le mode sélectionné : **Auto, Heating, Cooling**.
- Échangeur en titane, compatible avec produits d’assainissement piscine.
- Silencieuse (≤ 50 dB à 3 m).

### Réglage de température
- Température recommandée : **85 °F (29.5 °C)**
- Mode SPA : fixe à **104 °F (40 °C)**
- Convertir °C/°F : appuyer **5 sec sur flèches haut + bas**.

### Détection automatique
- Si débit insuffisant, la thermopompe affiche un code **E3** ou **E6**.
- Démarrage différé : le ventilateur démarre **1 min** avant le compresseur.

---

## 3. 🔥 Chauffe-eau Hayward UHS (H‑Series FD)

### Alimentation électrique
- **240 VAC par défaut** (configurable)
- Autres options :
  - 110–130 VAC, 2A, 50/60 Hz
  - 220–250 VAC, 1A, 50/60 Hz
- Toujours vérifier la fiche de tension avant l'installation.

### Pressions de gaz (manifold / entrée)
| Type de gaz   | Pression Manifold | Entrée Min | Entrée Max |
|---------------|-------------------|------------|-------------|
| Gaz naturel   | 4.5"              | 2.0"       | 10.5"       |
| Propane       | 10.0"             | 7.0"       | 13.0"       |

### Débit minimal requis
| Modèle         | Débit min. recommandé |
|----------------|------------------------|
| H150FD/200FD   | 20 GPM                |
| H250FD/300FD   | 25 GPM                |
| H350FD/400FD   | 30 GPM                |
| H500FD         | 40 GPM                |

- Débit max recommandé : **125 GPM**

### By-pass électronique (mode bo)
- Activation : **MODE + flèche bas pendant 3 sec**
- Nécessite mode Spa ou Piscine actif

### Codes d’erreur (extraits)
| Code | Signification                  |
|------|--------------------------------|
| IF   | Ignition Failure               |
| IO   | Igniter Open                   |
| AO   | Air Flow Open                  |
| LO   | Limit Open                     |
| CE   | Communication Error            |
| EE   | External Error                 |
| PF   | Pressure Fault                 |
| HF   | High Flame Detected            |
| Sb   | Standby                        |
| bd   | Board Detection Fault          |

> Pour tous les autres codes, consulter le guide technique Hayward UHS.

---

## 4. 📊 Codes d’erreur Moov MI

| Code | Signification            | Action recommandée                         |
|------|--------------------------|---------------------------------------------|
| E1   | Pression haute           | Vérifier circulation et obstructions        |
| E2   | Pression basse           | Vérifier le circuit de gaz                  |
| E3   | Pas de débit d’eau       | Vérifier pompe / filtre / vanne             |
| E6   | Différence T° élevée     | Débit insuffisant                           |
| E8   | Surchauffe gaz           | Appeler un technicien                       |
| Ed   | Antigel activé           | Température trop basse                      |
| P1–P9| Problèmes de sondes      | Contacter AFI ou technicien                 |

---

## 5. 🧪 Diagnostic – Pas de chauffage

| Symptôme                      | Causes possibles                            |
|------------------------------|---------------------------------------------|
| Eau froide malgré fonctionnement | Mode incorrect, mauvaise température réglée |
| Aucune chaleur détectée      | Circuit fermé, vanne bloquée, pompe arrêtée |
| Appareil se coupe rapidement | Obstruction air/eau, surchauffe             |
| Code E3/E6/E1                | Voir section codes ci-dessus                |

---

## 6. 🧰 Installation & bon usage

- Connexion : 208–230 V / 60 Hz / 1 Ph
- Eau en circulation obligatoire avant/pendant/après chauffage
- Tuyauterie ≤ 10 m recommandée
- Installer pompe annexe si pression faible
- Vidange obligatoire avant l’hiver

---

## 7. 🧼 Entretien saisonnier

- Nettoyer la bobine extérieure à l’eau douce
- Vérifier ventilateur et fixations
- Procédure d’hivernage Moov MI :
  - Couper l’alimentation
  - Ouvrir robinets de vidange
  - Protéger avec housse

---

## 8. 🆘 Assistance

- Ne jamais ouvrir ou démonter soi-même
- Pour aide ou codes non listés : **Contact AFI ou fabricant**
- Garantie valide **uniquement si installée par professionnel**

---

## 9. 🔥 Chauffage intégré Gecko (in.xe, in.ye, heat.wav™)

### Description générale
- Le système de contrôle Gecko (in.xe, in.ye) peut intégrer un chauffe-eau électrique de type **heat.wav™**.
- Ce chauffage est souvent utilisé dans les spas, contrôlé via clavier (ex. in.k450, in.k600).
- **Le chauffage ne démarre que si le débit d’eau est suffisant.**

### Conditions pour activer la chauffe
- Le **chauffage est bloqué** si :
  - Débit insuffisant (**FLO**)
  - Pompe arrêtée
  - Filtre obstrué
- L’eau circule obligatoirement pendant la chauffe.

### Réglage de température
- La température se règle via le clavier.
- Deux modes :
  - **Standard (ST)** : maintien constant de la température
  - **Économie (ECO)** : chauffe seulement durant les cycles de filtration

### Codes d’erreur Gecko liés au chauffage
| Code | Signification              | Action recommandée                    |
|------|----------------------------|----------------------------------------|
| FLO  | Débit insuffisant          | Vérifier pompe, filtre, circulation    |
| HL   | Haute température détectée | Éteindre, vérifier circulation         |
| OH   | Surchauffe                 | Éteindre, attendre, corriger le débit  |
| DR   | Détection à sec            | Remplir spa, purger l’air              |