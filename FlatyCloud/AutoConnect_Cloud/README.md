# AutoConnect FlatyCloud

## Fonctionnalités

- Connexion d'un ensemble de bots
- Configuration d'un proxy par bot
- Débugueur configuration
- Gestion des machines lentes
- Start automatique des trajets
- Planification des démarrages
- Anti-blocage des bots

## Utilisation

Pour utiliser AutoConnect pour FlatyCloud il suffit de télécharger l'exécutable et de la placer dans le dossier FlatyCloud.
Ensuite, lancer le fichier pour qu'il génère les fichiers de configurations nécessaires. 
Vous pouvez ensuite ajouté votre clé de licence.

![alt text](https://github.com/TheScylla/AutoConnect/blob/master/FlatyCloud/AutoConnect_Cloud/exemple.png "Exemple configuration")

**Renseignement des informations**

| Champ | Description |
|-------|-------------|
| CheckBox "Connexion" | Fonctionne avec le bouton "Connect Selected" |
| Identifiant | Identifiant Dofus |
| Mot de passe | Mot de passe Dofus |
| Proxy:IP | IP du proxy |
| Proxy:PORT | Port du proxy |
| Proxy:ID | Identifiant du Proxy |
| Proxy:MDP | Mot de passe du proxy |
| Licence AutoConnect | Numéro de licence |
| Flaty_ID | Identifiant FlatyCloud |
| Flaty_PW | Mot de passe FlatyCloud |
| CheckBox "Fermer les instances" | Fermera les anciennes instances en cours |
| CheckBox "Démarrer Trajet" | Lancera les trajets après la connexion des bots |

**Utilisation des boutons**

| Bouton | Description |
|--------|-------------|
| Save   | Sauvegarde la configuration actuelle (Checkbox + TextInput) |
| Connect Selected | Connecte seulement les bots configurés ET cochés |
| Connect All | Connecte l'ensemble des bots configurés |



## Configuration


| Champ | Valeurs | Description |
|-------|---------|-------------|
| Debug | 0 à 2   | Niveau d'affichage des erreurs et des alertes |
| Latence | 0 à X | Niveau de latence lors de la connexion des comptes |

**_Remarque_** :

<dl>
  <dt>Machine physique ou VM réactive</dt>
  <dd>-> LATENCE = 0</dd>
  <dt>VM ou machine physique limitée</dt>
  <dd>-> LATENCE >= 1</dd>

### Planification

Pour utiliser la planification des démarrages il vous suffit de créer un script .bat.
Dans celui-ci pour devrez préciser les arguments de lancement.

Exemple en ligne de commande :

> AutoConnect_FlatyCloud.exe < /noDebug> < /startTrajet> < /closeOld> < /startAll> <0 - 19>

Les arguments peuvent être ajoutés dans n'importe quel ordre.
Les arguments entre <> sont optionnels.

/noDebug        : permet de ne pas afficher les fenêtres de débug

/startTrajet    : démarre les trajets à la fin des connexions de bots

/closeOld       : ferme les anciennes instances de bots (dofus+flatyvore)

/startAll       : démarre tout les bots (seulement ceux configurés)

0 - 19          : spécifie quel bot connecter

Une fois votre ligne de commande prête et fonctionnelle. Il vous suffit de l'ajouter à une tâche planifié de windows (voir google si besoin).

## Licence

Pour obtenir une licence mensuelle il faut me contacter sur Discord (Scylla#8361). 
La licence est liée lors de la première utilisation.

Prix actuel : 5€/mois

