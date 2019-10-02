# AutoConnect For FlatyBot 2

**AutoConnect Web**<br />
Pour utiliser l'interface Web vous devez posséder une licence AutoConnect valide. <br />
Contacter moi sur discord pour en obtenir une.<br />
*Discord: Scylla#8361*

**Accès Web : 78.233.131.224**

**Aucune donnée n'est sauvegardée par les serveurs (hors licences et identifiants AutoConnect). Si vous écrasez un fichier de configuration, un trajet ou une IA je serais dans l'incapacité de restaurer les données**

## Introduction

AutoConnect est un programme interagissant avec FlatyBot 2. Il permet la connexion, la configuration et l'automatisation de vos bots Dofus 2.
J'ai développer ces programmes durant mon temps libre et j'ai décidé de vous les partager. Je fais du mieux que je peux pour les maintenir à jour et fonctionnel mais étant étudiant je peux prendre du retard lors d'une grosse mise à jour Dofus/FlatyBot.

Les programmes proposés sont en **BETA**, ils sont donc en cours de développement. Vous utilisez/achetez les programmes/scripts en connaissances de causes.

Deux des trois programmes sont gratuits. Le troisième est payant car il offre beaucoup plus de possibilités et a été plus long à mettre en place. Il nécessite également une maintenance plus lourde (logiciel et matériel).

**Un script permettant d'empêcher les sessions RDP de se fermer est proposé avec AutoConnect Web. Il a été testé sur Windows 10 et Windows Server 2016 (sans licence).**

Le développement d'AutoConnect Web et les fonctionnalités développées en priorités dépendront de l'avancement de FlatyCloud.

**Faites moi vos retours sur discord en précisant au mieux votre expérience. Vous pouvez également me soumettre des idées/demandes**

-----


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

L'utilisation d'AutoConnect Web est restreinte par des licences payantes. J'heberge personnellement l'ensemble des serveurs permettant le bon fonctionnement de la suite de programme.

**Le prix des licences dépend de l'encombrement des serveurs.**

Attention lors des rafraichissement répetées si vous ne voulez pas être banni automatiquement. Les serveurs Web et AutoConnect possèdent des protections anti-ddos.

## Fonctionnalités

**AutoConnect UI/No UI**

- Connexion automatisée des bots
- Modification du fichier de configuration
- Configuration des identifiants, trajets et IA pour chaque slots
- Planification des tâches (reservé à No UI)

---

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

Certaines des prochaines fonctionnalités présentées ci-dessus sont plus conséquentes pour mon infrastructure réseau et pour le serveur, c'est pourquoi je me réserve le droit de limiter l'accès à certaines licences.


## Prérequis 

_Chez certains utilisateurs l'anti-virus peut bloquer le programme car il contrôle la souris et simule des touches clavier. Penser à autoriser le programme ou à désactiver l'anti-virus si vous rencontrez ce problème_

**AutoConnect UI**

Aucun prérequis particulier hormis le contenu de l'archive.

---

**AutoConnect No UI**

Aucun prérequis particulier hormis le contenu de l'archive. 
Il faut cependant passer par un fichier .bat pour lancer les tâches automatisées (corrigé dans une prochaine version).

---

**AutoConnect Web**

L'hôte doit être connecté à internet. Le programme (fichier exécutable) doit également avoir accès à internet pour communiquer avec le serveur AutoConnect.
La configuration des dossiers doit être respecté sans quoi, certaines fonctionnalités ne pourront pas être utilisées.
Le client AutoConnect doit être démarré pour que l'interface Web fonctionne.

---

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

-----

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

-----

### **AutoConnect Web**

- Extraire l'archive AutoConnect_Web dans le dossier FlatyBot (où se trouve FlatyBot.exe)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Ne modifiez pas la structure des dossiers**
- Ouvrir le fichier licencekey.txt pour remplir votre clé de licence (contact discord pour obtenir une licence)
- Lancer le fichier client AutoConnect.exe

Si la session exécutant le client doit être fermée/mise en veille, vous devez utiliser la commande **/leave** pour garder le client fonctionnel !

Si vous souhaitez accéder aux informations de status depuis l'interface Web, vous devez ajouter la fonction fournis dans l'archive à chacun de vos trajets concernés.

Vous êtes désormais connecté au serveur AutoConnect. Vous pouvez lancer vos commandes depuis le terminal Windows ouvert lors du lancement d'AutoConnect ou bien gérer vos bots depuis l'interface Web.

__Console :__
Les commandes de la version No UI sont disponibles dans la console Web.
Certaines commandes ne peuvent pas être lancées directement de la manière suivante :

>_ MainMacro_no_UI.exe /config <args>_
    
Ne fonctionnera pas si vous utilisez le MainMacro_No_UI.exe de la version WEB !

Vous pouvez également utiliser la _/help_ pour obtenir la liste des commandes disponibles


###Script de gestion des sessions

Ce script permet d'empêcher l'arrêt des sessions sur les machines virtuelles (VPS). Il est proposé avec AutoConnect Web.

-----
### Listes des commandes

***[Les commandes sont susceptibles de changer rapidement !]***

>_\/config <FlatySlot#> \/ID <AccountID> \/PW <PassWord> \/Trajet <PathToTrajet> \/IA <PathToIA>_
    
-- Cette commande modifie le slot associé ou ajoute un compte au fichier de configuration si le slot n'existait pas

__Exemples :__

Les deux commandes suivante auront la même action :<br />
>_\/config 0 \/ID myAccount \/PW myPassWord \/Trajet c:\trajet.lua \/IA c:\IA.lua_
>_\/config 0 \/PW myPassWord \/Trajet c:\trajet.lua \/IA c:\IA.lua \/ID myAccount_

Il est possible de configurer un seul paramètre :
>_\/config 0 /Trajet c:\Trajet.lua_

Cette commande ne modifiera que le trajet du slot 0.

-----

>_/notif <notifKey>_

&nbsp;&nbsp;&nbsp;&nbsp;-- Cette commande permet de modifier la clé de notification PushBullet dans le fichier de configuration.

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

-----
## Changelog

###BETA

**V0.1**<br />
&nbsp;&nbsp;&nbsp;&nbsp;- Premier déploiement AutoConnect Web<br />
&nbsp;&nbsp;&nbsp;&nbsp;- Connexion(all+selected)/Configuration FlatyBot<br />
&nbsp;&nbsp;&nbsp;&nbsp;- Arrêt FlatyBot/FlatyVore/Dofus<br />
&nbsp;&nbsp;&nbsp;&nbsp;- Visualisation des retours d'erreur<br />
&nbsp;&nbsp;&nbsp;&nbsp;- Visualisation primaire des informations de status des bots<br />
&nbsp;&nbsp;&nbsp;&nbsp;- Lancement de commandes depuis la console Web<br />
&nbsp;&nbsp;&nbsp;&nbsp;- Fonction .lua de mise à jour des informations de status des bots<br />
&nbsp;&nbsp;&nbsp;&nbsp;- Script de gestion des sessions inactives<br />
&nbsp;&nbsp;&nbsp;&nbsp;- Mise en place d'un serveur AutoConnect unique et permanent<br />
