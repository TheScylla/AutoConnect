# AutoConnect FlatyCloud

## Fonctionnalités

- Connexion d'un ensemble de bots
- Configuration d'un proxy par bot
- Débugueur
- Gestion des machines lentes
- Start automatique des trajets
- Planification des démarrages

## Utilisation

Pour utiliser AutoConnect pour FlatyCloud il suffit de télécharger l'exécutable et de la placer dans le dossier FlatyCloud.
Ensuite, lancer le fichier pour qu'il génère les fichiers de configurations nécessaires. 
Vous pouvez ensuite ajouté votre clé de licence.

## Configuration

### Debug

**_Valeurs_** : 0 à 2

**_Description_** : Contrôle le niveau d'affichage des erreurs et des alertes

### Latence

**_Valeurs_** : 0 à X

**_Description_** : Contrôle le niveau de latence lors de la connexion des comptes

**_Remarque_** :

Machine physique ou VM réactive -> LATENCE = 0

VM ou machine physique limitée  -> LATENCE >= 1

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

