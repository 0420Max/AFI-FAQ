## Module – Pompes & Circulation d’eau

> ⚠️ *Ce module couvre uniquement les problèmes relatifs aux pompes centrifuges de piscine et spa et à la circulation de l’eau.*  
>   • **Pompes traditionnelles** : monovitesse, multivitesse  
>   • **Pompes inverter / à vitesse variable** : ex. Moov Ai (MP10AI, MP15AI, MP165AI, MP2AI)

> Pour les fuites, fissures et problèmes d’étanchéité, consulter le fichier **faq_plomberie.md**.

keywords: pompe, amorçage, désamorçage, pompe bruyante, bruit pompe, pompe ne démarre pas, condensateur pompe, moov ai, pas de débit, gpm

---

### 🛠️ Problème : Ma pompe ne démarre pas

**Symptômes possibles** :
- Aucun bruit
- Pas de vibration
- Disjoncteur saute

**Actions recommandées** :
1. Vérifier que le disjoncteur est bien enclenché.
2. Vérifier si le condensateur de démarrage est gonflé ou défectueux.
3. Écouter un bourdonnement : si la pompe bourdonne mais ne tourne pas, le condensateur est probablement en cause.
4. Couper immédiatement le courant pour éviter de brûler le moteur.

---

### 🔊 Problème : Ma pompe est bruyante

**Types de bruits** :
- Grincement (roulement à bille)
- Gargarisme (air dans la pompe)
- Vibration anormale

**Actions recommandées** :
1. Vérifier si la pompe est bien amorcée.
2. Vérifier les fixations : la pompe vibre-t-elle contre la base ?
3. Vérifier le niveau d’eau et les prises d’air possibles.

💡 Un bruit de grincement métallique = roulement défectueux → pompe à remplacer.

---

### 💨 Problème : Ma pompe fonctionne, mais il n’y a pas de débit

**Symptômes** :
- Le moteur tourne, mais aucune circulation d’eau
- Le panier de la pompe est vide ou plein d’air

**Causes fréquentes** :
- Pompe non amorcée
- Air dans le système
- Tuyau d’aspiration partiellement bouché
- Niveau d’eau trop bas

**Étapes de vérification** :
1. S’assurer que le panier de pompe est plein d’eau.
2. Refermer hermétiquement le couvercle avec le joint en bon état.
3. Vérifier que toutes les vannes sont ouvertes (surtout à l’aspiration).
4. Attendre 2–3 minutes après démarrage pour laisser la pompe s’amorcer.

---

### 🔄 Comment amorcer une pompe correctement ?

1. Couper le courant
2. Ouvrir le couvercle de la pompe
3. Remplir le panier de pompe avec un seau d’eau (jusqu’en haut)
4. Refermer solidement le couvercle
5. Remettre le courant et attendre que la pompe tire (2–3 min max)

💡 Si ça ne fonctionne pas après 2 tentatives → suspicion de fuite d’air ou problème d’aspiration.

---

### ⚠️ Pompe désamorcée à répétition (perte de pression soudaine)

- Vérifier la présence de bulles d’air dans le retour d’eau → signe d’une fuite d’air à l’aspiration.
- Vérifier si le niveau d’eau dans la piscine/spa est suffisamment haut (au-dessus du skimmer).
- Inspecter le tuyau transparent d’aspiration si présent.

---

### 🤖 5.3 Désamorçage forcé pour Moov Ai (mode GPM)

**Contexte**  
Lorsque la pompe à vitesse variable **Moov Ai** (et non la thermopompe Inverter MI) est active mais qu’aucun débit n’est visible (période d’ouverture ou changement de mode), un désamorçage forcé peut débloquer le circuit.

#### Procédure  
1. **Basculer en mode GPM**  
   Appuyer sur le bouton *Mode* jusqu’à voir « GPM ».  
2. **Forcer le débit à 100 GPM**  
   Utiliser les flèches ↑/↓ pour régler temporairement sur **100 GPM**.  
   Ce réglage génère une pression de tirage maximale pour amorcer le circuit.  
3. **Vérifier vannes & niveau d’eau**  
   - Avant : s’assurer que toutes les vannes sont ouvertes.  
   - Après : vérifier qu’aucune vanne ne s’est refermée et que le bassin est correctement rempli.  

#### Pourquoi ça marche  
En mode GPM, la pompe cible un débit réel ; la pousser à 100 GPM la force à compenser l’air ou la pression insuffisante et à réamorcer le système.

#### Précautions  
- Ne pas maintenir 100 GPM trop longtemps (max. 1–2 min),  
- Redescendre à un débit normal une fois la circulation rétablie,  
- Toujours contrôler le niveau d’eau pour éviter le fonctionnement à sec.

---

### 🔍 Gestion des fuites, fissures & étanchéité

**Contexte** : Les problèmes de fuite ou de craques relèvent de la **faq_plomberie.md** et nécessitent souvent un bris d'équipement couvert par garantie.

**Procédure recommandée** :
1. **Demander des photos/vidéos** du point de fuite via le chat.
2. **Si l’utilisateur ne peut pas envoyer** directement les médias, proposer d’« envoyer un résumé par email » pour collecter ces pièces jointes.
   - 💬 « Pour compléter le diagnostic, je peux vous envoyer un email pour rassembler vos photos/vidéos. Vous êtes d’accord ? »
   - **Bouton de confirmation** : « Oui, envoyer un email » (nécessite le consentement explicite avant d’envoyer).
3. Après consentement, générer un wrap email spécifique incluant les champs : nom, description de la fuite, emplacement, photos/vidéos.

**Important** : **Jamais envoyer d’email sans consentement explicite**. Toujours valider via le bouton de confirmation avant d’initier l’envoi.

---

### 📌 À inclure dans un wrap SAV si le client appelle :

"La pompe Moov Ai semble fonctionner, mais y’a pas de débit ? Mets-la en mode GPM avec le bouton *Mode*, puis pousse à 100 GPM avec les flèches. Attends 1 à 2 minutes. Si ça tire l’eau, redescends ensuite vers ton niveau normal. Sinon, appelle-nous — il y a peut-être de l’air ou un amorçage à refaire."

---
