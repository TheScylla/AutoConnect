# AutoConnect For FlatyBot 2

**AutoConnect Web**
Pour utiliser l'interface Web vous devez posséder une licence AutoConnect valide. 
Contacter moi sur discord pour en obtenir une.
*Discord: Scylla#8361*


## Introduction

AutoConnect est un programme interagissant avec FlatyBot 2. Il permet la connexion, la configuration et l'automatisation de vos bots Dofus 2.
**Il existe en trois versions :**

* AutoConnect UI
* AutoConnect No UI
* AutoConnect Web (fonctionnant avec la version No UI)

**AutoConnect UI**

&nbsp;&nbsp;&nbsp;&nbsp;Cette version permet de connecter et de configurer les bots grâce à une interface utilisateur directement sur l'hôte exécutant FlatyBot.<br />
&nbsp;&nbsp;&nbsp;&nbsp;Cette version sera maintenu fonctionnelle mais aucune nouveauté ne devrait y être apportée_

**AutoConnect No UI**

&nbsp;&nbsp;&nbsp;&nbsp;Cette version, comme son nom l'indique, fonctionne sans interface utilisateur. Elle possède les mêmes fonctionnalités que la version UI mais les commandes se lancent depuis un terminal. <br />
Elle a l'avantage de permettre la planification des tâches depuis le planificateur de tâches Windows.<br />
&nbsp;&nbsp;&nbsp;&nbsp;Cette version sera maintenu fonctionnelle mais aucune nouveauté ne devrait y être apportée

**AutoConnect Web**

&nbsp;&nbsp;&nbsp;&nbsp;Cette version permet au utilisateur de gérer leurs bots Flaty depuis une interface Web. Elle possède les mêmes fonctionnalités que les deux versions précédentes tout-en en ajoutant de nouvelles.

## Fonctionnalités

**AutoConnect UI/No UI**

- Connexion automatisée des bots
- Modification du fichier de configuration
- Configuration des identifiants, trajets et IA pour chaque slots
- Planification des tâches (reservé à No UI)

**AutoConnect Web**

_Depuis l'interface Web_

- Connexion/déconnexion automatisée des bots
- Modification des fichiers de configuration
- Visualisation des informations de status de chaque Slot
- Lancement de commande AutoConnect

*_Prochainement :_*

_- Gestion des tâches planifiées relatives à AutoConnect_

_- Création et modification des trajets/IA_

_- Visualisation des bots (fenêtre Dofus)_

_- Contrôle à distance des bots_

_- Gestion des actions automatisées (réponse aux messages privées)_


## Prérequis 

_Chez certains utilisateurs l'anti-virus peut bloquer le programme car il contrôle la souris et simule des touches clavier. Penser à autoriser le programme ou à désactiver l'anti-virus si vous rencontrez ce problème_

**AutoConnect UI**

Aucun prérequis particulier hormis le contenu de l'archive.

**AutoConnect No UI**

Aucun prérequis particulier hormis le contenu de l'archive. 
Il faut cependant passer par un fichier .bat pour lancer les tâches automatisées (corrigé dans une prochaine version)

**AutoConnect Web**

L'hôte doit être connecté à internet. Le programme (fichier exécutable) doit également avoir accès à internet pour communiquer avec le serveur AutoConnect.
La configuration des dossiers doit être respecté sans quoi, certaines fonctionnalités ne pourront pas être utilisées.
Le client AutoConnect doit être démarré pour que l'interface Web fonctionne.

**IMPORTANT**

Pour les version Web et No UI, une session Windows doit être ouverte pour que le programme fonctionne. Si vous utilisez une connexion à distance (RDP par exemple) sur un VPS vous devez quitter votre session en utilisant le script prévu à cet effet sans quoi les tâches ne pourront pas être exécuter correctement.

## Installation et Utilisation

### **AutoConnect UI**

- Extraire l'archive AutoConnect_UI dans le dossier FlatyBot (où se trouve FlatyBot.exe)
- Lancer le programme avec les droits nécessaires
- Remplir les champs nécessaires
- Sauvegarder la configuration
- Connecter les bots

**_Save_**

Permet de sauvegarder la configuration (Nom de nom, mot de passe, trajet et IA) dans un fichier pour ne pas avoir à remplir les champs à chaque utilisation.

**_connect_Selected_**

Permet de connecter les slots cochés. Permet également de configurer/reconfigurer les trajets, IA et clé de notifications PushBullet. Enfin vous pouvez activer les notifications PushBullet.

**_connect_All_**

Permet de connecter l'ensemble des comptes configurés.

### **AutoConnect No UI**

- Extraire l'archive AutoConnect_No_UI dans le dossier FlatyBot (où se trouve FlatyBot.exe)

__Utilisation :__

- Lancer un terminal Windows dans le dossier FlatyBot
- Taper : AutoConnect_No_UI.exe _</commande>_

__Planification des tâches :__

- Créer un fichier batch (.bat) _Facultatif_
- Ajouter la/les commande(s) à effectuer durant la tâche (avec un délais entre chaque si nécessaire) _Facultatif_
- Ouvrir le planificateur de tâches Windows
- Créer une nouvelle tâches
- Ajouter la tâche (dans action):

&nbsp;&nbsp;&nbsp;&nbsp;Programme/script : votre fichier .bat ou l'exécutable AutoConnect_no_ui.exe
&nbsp;&nbsp;&nbsp;&nbsp;Arguments : _</commande>_ (seulement si vous ne passer pas par un fichier .bat)
&nbsp;&nbsp;&nbsp;&nbsp;Commencer dans : le chemin vers l'exécutable AutoConnect_no_ui.exe


#### Listes des commandes

>_\/config <FlatySlot#> \/ID <AccountID> \/PW <PassWord> \/Trajet <PathToTrajet> \/IA <PathToIA>_
    
-- Cette commande modifie le slot associé ou ajoute un compte au fichier de configuration si le slot n'existait pas

__Exemples :__

Les deux commandes suivante auront la même action :<br />
>_\/config 0 \/ID myAccount \/PW myPassWord \/Trajet c:\trajet.lua \/IA c:\IA.lua_
>_\/config 0 \/PW myPassWord \/Trajet c:\trajet.lua \/IA c:\IA.lua \/ID myAccount_

Il est possible de configurer un seul paramètre :
>_\/config 0 /Trajet c:\Trajet.lua_
-----
>_/connect <AccountNumber> </configTrajet> </configIA> </configNotif> </notif>_

&nbsp;&nbsp;&nbsp;&nbsp;-- Cette commande permet de connecter les bots et de lancer les trajets.

**[ATTENTION]**
Cette commande ferme toute les instances de FlatyBot, FlatyVore et Dofus lorsqu'elle est lancée

__Deux utilisations possibles :__

- Connecter tout les bots :
>_/connect_ 

&nbsp;&nbsp;&nbsp;&nbsp;-- Cette commande connectera tout les bots sans les reconfigurer

>_/connect /configIA_

&nbsp;&nbsp;&nbsp;&nbsp;-- Cette commande connectera tout les bots en reconfigurant l'IA de chaque compte par rapport au fichier de configuration

>_/connect /configTrajet /configIA /configNotif /notif_

&nbsp;&nbsp;&nbsp;&nbsp;-- Cette commande connectera tout les bots en les reconfigurant complètement d'après le fichier de configuration et activera les notifiactions sur chacun d'eux

- Connecter seulement les bots sélectionner :
>_/connect 0 1 5 6_

&nbsp;&nbsp;&nbsp;&nbsp;-- Cette commande connectera les comptes 0,1,5 et 6 sur les slots 0,1,2 et 3

>_/connect 0 /configTrajet /notif 4 /configNotif /notif_

&nbsp;&nbsp;&nbsp;&nbsp;-- Cette commande connectera le bot 0 en reconfigurant le trajet et en activant les notifications. Elle connectera également le bot 4 en reconfigurant les notifications et en les activants.

-----
>_/kill_FlatyBot_

&nbsp;&nbsp;&nbsp;&nbsp;-- Cette commande termine toute les instances de FlatyBot

-----
>_/kill_FlatyVore_

&nbsp;&nbsp;&nbsp;&nbsp;-- Cette commande termine toute les instances de FlatyVore

-----
>_/kill_Dofus_

&nbsp;&nbsp;&nbsp;&nbsp;-- Cette commande termine toute les instances de Dofus

### **AutoConnect Web**

- Extraire l'archive AutoConnect_Web dans le dossier FlatyBot (où se trouve FlatyBot.exe)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Ne modifiez pas la structure des dossiers**
- Ouvrir le fichier licencekey.txt pour remplir votre clé de licence
- Lancer le fichier client AutoConnect.exe

Si vous souhaitez accéder aux informations de status depuis l'interface Web, vous devez ajouter la fonction fournis dans l'archive à chacun de vos trajets concernés.

Vous êtes désormais connecté au serveur AutoConnect. Vous pouvez lancer vos commandes depuis le terminal Windows ouvert lors du lancement d'AutoConnect ou bien gérer vos bots depuis l'interface Web.

__Console :__
Les commandes de la version No UI sont disponibles dans la console Web.
Vous pouvez également utiliser la _/help_ pour obtenir la liste des commandes disponibles


## Changelog
