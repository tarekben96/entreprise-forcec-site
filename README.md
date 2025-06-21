# Force C Inc. - Services d'entretien extérieur

Site web statique pour l'entreprise Force C Inc.
Spécialisée dans le déneigement, la tonte de pelouse et l'entretien paysager à Sainte-Monique et environs (Québec).

## Aperçu

- Site vitrine **en français uniquement**, responsive et moderne.
- Présente les services saisonniers, l'équipe, les forfaits, la galerie, les témoignages et un formulaire de contact.
- Utilise TailwindCSS et Font Awesome.
- Intégration EmailJS pour la réception des demandes de contact.

## Démo

Ajoutez ici une capture d'écran ou [lien vers le site déployé](#).

## Structure des fichiers

- `index.html` : Page principale du site.
- `styles.css` : Styles personnalisés (en plus de TailwindCSS).
- `main.js` : Scripts JavaScript pour la navigation, les tabs, le formulaire, etc.
- `IMAGES.md` : Liste des images nécessaires.
- `images/` : Toutes les images utilisées (voir IMAGES.md).

## Installation & Déploiement

1. **Téléchargez** ou clonez ce dépôt.
2. **Placez** toutes les images nécessaires dans le dossier `images/`.
3. Le site peut être ouvert en local directement via un navigateur (`index.html`).
4. Pour utiliser le formulaire de contact :
    - Créez un compte sur [EmailJS](https://www.emailjs.com/), configurez votre service et modèle.
    - Remplacez les valeurs de `serviceID`, `templateID` et la clé publique dans `main.js` et `index.html` par vos propres paramètres.

## Sécurité

**Attention :**  
Les clés EmailJS présentes dans le code sont à titre d'exemple !  
Pour la production, NE JAMAIS exposer de clés privées/publiques sensibles dans un dépôt public.  
Utilisez des variables d'environnement ou configurez des règles de sécurité EmailJS.

## À faire / Améliorations possibles

- Rendre la galerie ou les témoignages dynamiques (via backend ou API).
- Ajouter la prise en charge d'autres langues (optionnel).
- Ajouter des tests automatisés.
- Améliorer l'accessibilité (contraste, navigation clavier, etc.).

## License

- All rights reserved © 2025 Tarek Benkhedim (tarekben96)

- This project and all its files are protected by copyright. No part of this project may be copied, used, distributed, or reproduced in any form without the express written permission of the owner.

## Auteur

- [Force C Inc.](mailto:info@forcec.ca)
- Développement web : Tarek Benkhedim



