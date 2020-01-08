Yo, 

[AutoConnect]

Voici un programme qui permet de connecter tout vos bots, pour ceux que ça intéresse.
L'interface est minimaliste, si quelqu'un veut en développer une nouvelle je suis preneur.
Le programme est fonctionnel sur la version 2.0.7 de FlatyBot.
Aucune installation ni droit Admin nécessaire (à ma connaissance).

Installation : 
- Extraire l'archive dans le dossier FlatyBot
- FlatyBot doit déjà être configuré (Connexion, prérequis)
- Les dossiers des bots doivent déjà avoir été créé
- Si vous souhaitez configurer les trajets/IA avec le programme il faut penser à les placer dans dans PATH sans espace dans le nom (j'utilise l'espace pour parser le fichier de config)
- Le client Dofus doit être configuré pour se connecter directement au personnage après avoir rentré les ID

Les champs du programme (de gauche à droite) :
- Nom de compte
- Mot de passe
- PATH Trajet (Obligatoire si vous souhaitez utiliser la fonction de configuration)
- PATH IA (Obligatoire si vous souhaitez utiliser la fonction de configuration)
- CheckBox : les comptes associés aux checkbox (en ligne) seront connectés en cliquant sur "Connect Selected"
- CheckBox : Active la fonction de configuration du compte associé (en ligne)
Lorsque vous cliquez sur "Connect Selected" ou "Connect All" le programme va kill toute les instances FlatyBot.exe, FlatyVore.exe et Dofus.exe. Cela permet de détruire les déchets laissé par un crash.

La fonction de configuration permet de changer le trajet et l'ia du compte associé.

Le programme n'utilise aucune ressource réseau. Aucun KeyLogger du coup. 
Les PATH prennent en compte les chemins réseaux (toujours sans espace !) de la même façon que Flaty de base.
Le programme a été testé sur une machine performante avec GPU et sur VM sans GPU. En théorie vous ne devriez pas avoir de soucis à se niveau.
Il a également été testé depuis une connexion RDP sur téléphone avec une résolution moindre

Si vous rencontrez des bugs ou des problèmes dites le moi pour que je puisse essayer de les corriger.
Je ne prévois pas de développer plus que ça ce programme, juste de le maintenir. Il y aura cependant une interface web permettant de démarrer Flaty, changer les Trajet/IA dans quelques temps.

Dans quelques jours je pense aussi ajouter les versions sans UI du programme (pour être lancer depuis une tâche planifiée avec des arguments pour modifier les trajets/IA par exemple). 

(Ce message est susceptible de changer beaucoup durant les prochains jours)

PS : Je ne souhaite pas partager le programme sur le forum pour que seul les personnes ayant eu l'abonnement Flaty puissent en profiter.

PS 2 : Il faut cliquer plusieurs fois des fois pour que les boutons fonctionnent

PS 3 : Pour certaines personnes il faut désactiver le pare-feu