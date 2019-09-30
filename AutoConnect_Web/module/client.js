'use strict'

class Client {

    // ** leaveRDP
    // Farme la session courante
    // Structure :
    // Remarque : 
    static leaveRDP(licenceKey, eventEmitter) {
        if (licenceKey != "" && licenceKey != undefined) {

            // Modules
            const { spawn } = require('child_process');

            //Variables
            var returnValue;

            const bat = spawn('cmd.exe', ['/c', 'leaveSession.bat /forceBrut ' + licenceKey]);

            bat.on('exit', (code) => {
                if (code == 1) {
                    console.log('Une erreur est survenue lors de la fermeture de session du client.');

                    var answer = {
                        code: 1,
                        request: "leaveRDP",
                        data: "Une erreur est survenue lors de la fermeture de session du client.",
                        licenceKey: global.licenceKey
                    }

                    returnValue = {
                        code: 1,
                        data: "Une erreur est survenue lors de la fermeture de session du client.",
                        answer: answer
                    }
                    eventEmitter.emit('return_leaveRDP', returnValue);
                } else {
                    console.log('La session a correctement été fermé.');
                    var answer = {
                        code: 0,
                        request: "leaveRDP",
                        data: "La session a correctement été fermé.",
                        licenceKey: global.licenceKey
                    }

                    returnValue = {
                        code: 0,
                        data: "La session a correctement été fermé.",
                        answer: answer
                    }
                    eventEmitter.emit('return_leaveRDP', returnValue);
                }
            });
        }
    }

    static getCommandes() {
        console.log("Liste des commandes : ");
        console.log("- discord : Contact Discord");
        console.log("- git : Lien du dépot GIT");
        console.log("- leave : Permet de quitter une session RDP/Windows proprement");
    }

    // ** checkLicenceKey
    // Retourne si une clé un définie ou non
    // Structure :
    // Remarque : 
    static checkLicenceKey(eventEmitter) {

        // Modules :
        var fs = require('fs');

        // Variables
        var returnValue;

        fs.readFile("data/licencekey.txt", 'utf8', function (err, data) {
            if (data == "") {
                returnValue = {
                    code: 1,
                    data: "Aucune clé de licence spécifiée.",
                    licenceKey: licenceKey
                }
                eventEmitter.emit('return_checkLicenceKey', returnValue);
            } else {
                returnValue = {
                    code: 0,
                    data: "Clé de licence :" + data,
                    licenceKey: data
                }
                eventEmitter.emit('return_checkLicenceKey', returnValue);
            }
        });
    }

    // ** createConfigFile
    // Retourne si la création des fichiers de configuration est un succès
    // Structure :
    // Remarque : 
    static createConfigFile(dataDirectory, eventEmitter) {

        // Modules :
        var fs = require('fs');

        // Variables
        var returnValue;

        for (var i = 0; i < 10; i++) {
            if (fs.existsSync(dataDirectory + "slot" + i + ".txt")) {
            } else {
                var tempo = {
                    account: "undefined",
                    pw: "undefined",
                    pathTrajet: "undefined",
                    pathIA: "undefined",
                    pseudo: "undefined"
                }
                fs.appendFileSync(dataDirectory + "slot" + i + ".txt", JSON.stringify(tempo), function (err) {
                    if (err) {
                        returnValue = {
                            code: 1,
                            data: "Une erreur est survenue lors de la création des fichiers de configuration.",
                            licenceKey: global.licenceKey
                        }
                        eventEmitter.emit('return_createConfigFile', returnValue);
                    } else {

                    }
                })
            }
        }
        returnValue = {
            code: 0,
            data: "Fichiers de configuration créés avec succès."
        }
        eventEmitter.emit('return_createConfigFile', returnValue);
    }

    // ** askConnection
    // Retourne si requête à envoyer au socket pour se connecter
    // Structure :
    // Remarque : 
    static askConnection(licenceKey, eventEmitter) {

        var returnValue;

        if (licenceKey == "") {
            returnValue = {
                code: 1,
                data: "Licence invalide"
            }
            eventEmitter.emit('return_askConnection', returnValue);
        } else {
            var answer = {
                request: "connect",
                licenceKey: licenceKey
            }

            returnValue = {
                code: 0,
                data: "Envoie de la demande d'authentification",
                answer: answer,
                licenceKey: global.licenceKey
            }
            eventEmitter.emit('return_askConnection', returnValue);
        }
    }

    // ** getConfig
    // Retourne la configuration des comptes Dofus dans un tableau de JSON
    // Structure :
    // - account -> identifiant
    // - pw -> Mot de passe
    // - pathTrajet -> Chemin vers le fichier trajet.lua
    // - pathIA -> Chemin vers le fichier IA.lua
    // Remarque : Si champ == undefined alors vide
    static getConfig(dataDirectory, eventEmitter) {

        // Modules :
        var fs = require('fs');

        // Variables
        var returnValue; // Valeur retourné
        var config = []; // Configuration des comptes
        var notif = "";  // Clé de notifications
        var character = [];

        var fs = require('fs'),
            files = fs.readdirSync(dataDirectory);

        files.forEach(function (file) {
            if (file.substring(0, 4) == "slot") {
                var contents = fs.readFileSync(dataDirectory + file, 'utf8');
                var json = JSON.parse(contents);
                config.push(json);
            } else if (file == "config_NotifKey.txt") {
                var contents = fs.readFileSync(dataDirectory + file, 'utf8');
                notif = contents;
            }
        })

        var fs = require('fs'),
            files = fs.readdirSync(dataDirectory + "character/");

        files.forEach(function (file) {
            var contents = fs.readFileSync(dataDirectory + "character/" + file, 'utf8');
            var json = JSON.parse(contents);
            character.push(json);
        })

        var data = {
            config: config,
            notif: notif,
            character: character
        }

        returnValue = {
            code: 0,
            data: data,
            licenceKey: global.licenceKey
        }

        eventEmitter.emit('return_getConfig', returnValue);
    }


    static sendCmd(cmdGet, dataDirectory, eventEmitter) {

        // Modules
        var execFile = require('child_process').execFile;
        var fs = require('fs');

        // Variables
        var cmd = cmdGet.split(" ");
        var returnValue;
        var answer;

        if (cmd[0] == "/config") {
            if (cmd[1] == undefined) {
                answer = {
                    code: 1,
                    licenceKey: global.licenceKey,
                    data: "La commande " + cmdGet + " n'est pas correcte.",
                    cmd: cmdGet
                }

                returnValue = {
                    code: 1,
                    data: "La commande " + cmdGet + " n'est pas correcte.",
                    answer: answer,
                    licenceKey: global.licenceKey
                }

                eventEmitter.emit('return_sendCmd', returnValue);
                return;
            } else {
                var slot = cmd[1];
            }

            var accountID;
            var password;
            var trajet;
            var IA;
            var pseudo;

            fs.readFile(dataDirectory + "slot" + slot + ".txt", { encoding: 'utf-8' }, function (err, data) {
                if (err) {
                    answer = {
                        code: 1,
                        request: "sendCmdReturn",
                        licenceKey: global.licenceKey,
                        data: "Une erreur est survenue lors de la lecture des données sur le slot #" + slot,
                        cmd: cmdGet
                    }

                    returnValue = {
                        code: 1,
                        data: "Une erreur est survenue lors de la lecture des données sur le slot #" + slot,
                        answer: answer,
                        licenceKey: global.licenceKey
                    }

                    eventEmitter.emit('return_sendCmd', returnValue);
                } else {
                    var content = JSON.parse(data);

                    accountID = content.account;
                    password = content.pw;
                    trajet = content.pathTrajet;
                    IA = content.pathIA;
                    pseudo = content.pseudo;

                    for (var i = 2; i < cmd.length; i++) {
                        if (cmd[i].charAt(0) == "/") {
                            if (cmd[i] == "/ID") {
                                accountID = cmd[i + 1]
                            }
                            else if (cmd[i] == "/PW") {
                                password = cmd[i + 1]
                            }
                            else if (cmd[i] == "/Trajet") {
                                trajet = cmd[i + 1]
                            }
                            else if (cmd[i] == "/IA") {
                                IA = cmd[i + 1]
                            }
                            else if (cmd[i] == "/PSEUDO") {
                                pseudo = cmd[i + 1]
                            }
                        }


                    }

                    var json = {
                        account: accountID,
                        pw: password,
                        pathTrajet: trajet,
                        pathIA: IA,
                        pseudo: pseudo
                    }

                    fs.writeFile(dataDirectory + "slot" + slot + ".txt", JSON.stringify(json), function (err) {
                        if (err) {
                            answer = {
                                code: 1,
                                request: "sendCmdReturn",
                                licenceKey: global.licenceKey,
                                data: "Une erreur est survenue lors de l'écriture des données sur le slot #" + slot,
                                cmd: cmdGet
                            }

                            returnValue = {
                                code: 1,
                                data: "Une erreur est survenue lors de l'écriture des données sur le slot #" + slot,
                                answer: answer,
                                licenceKey: global.licenceKey
                            }

                            eventEmitter.emit('return_sendCmd', returnValue);
                        } else {
                            answer = {
                                code: 0,
                                request: "sendCmdReturn",
                                licenceKey: global.licenceKey,
                                data: "Ecriture effectué avec succès sur le slot #" + slot,
                                cmd: cmdGet
                            }

                            returnValue = {
                                code: 0,
                                data: "Ecriture effectué avec succès sur le slot #" + slot,
                                answer: answer,
                                licenceKey: global.licenceKey
                            }

                            eventEmitter.emit('return_sendCmd', returnValue);
                        }
                    })

                }
            });

        } else if (cmd[0] == "/notif") {

            if (cmd[1] == undefined || cmd[1] == "" || cmd[1] == "undefined") {
                answer = {
                    code: 1,
                    request: "sendCmdReturn",
                    licenceKey: global.licenceKey,
                    data: "Une erreur est survenue lors de la modification de la clé de notification.",
                    cmd: cmdGet
                }

                returnValue = {
                    code: 1,
                    data: "Une erreur est survenue lors de la modification de la clé de notification.",
                    answer: answer,
                    licenceKey: global.licenceKey
                }

                eventEmitter.emit('return_sendCmd', returnValue);
                return;
            }

            fs.writeFile(dataDirectory + "config_NotifKey.txt", cmd[1], function (err) {
                if (err) {
                    answer = {
                        code: 1,
                        request: "sendCmdReturn",
                        licenceKey: global.licenceKey,
                        data: "Une erreur est survenue lors de la modification de la clé de notification.",
                        cmd: cmdGet
                    }

                    returnValue = {
                        code: 1,
                        data: "Une erreur est survenue lors de la modification de la clé de notification.",
                        answer: answer,
                        licenceKey: global.licenceKey
                    }

                    eventEmitter.emit('return_sendCmd', returnValue);
                } else {
                    answer = {
                        code: 0,
                        request: "sendCmdReturn",
                        licenceKey: global.licenceKey,
                        data: "Modification de la clé de notification effectuée avec succès",
                        cmd: cmdGet
                    }

                    returnValue = {
                        code: 0,
                        data: "Modification de la clé de notification effectuée avec succès",
                        answer: answer,
                        licenceKey: global.licenceKey
                    }

                    eventEmitter.emit('return_sendCmd', returnValue);
                }
            })

        } else {
            execFile('MainMacro_No_UI.exe', cmd, function (err, data) {
                if (err) {
                    answer = {
                        code: 1,
                        request: "sendCmdReturn",
                        data: "Une erreur est survenue lors de l'exécution de MainMacro_No_UI.exe " + cmdGet,
                        cmd: cmdGet,
                        licenceKey: global.licenceKey
                    }

                    returnValue = {
                        code: 1,
                        data: "Une erreur est survenue lors de l'exécution de MainMacro_No_UI.exe " + cmdGet,
                        answer: answer
                    }
                    eventEmitter.emit("return_sendCmd", returnValue)
                }
                else {
                    answer = {
                        code: 0,
                        request: "sendCmdReturn",
                        data: "Commande exécutée avec succès : MainMacro_No_UI.exe " + cmdGet,
                        cmd: cmdGet,
                        licenceKey: global.licenceKey
                    }

                    returnValue = {
                        code: 0,
                        data: "Commande exécutée avec succès : MainMacro_No_UI.exe " + cmdGet,
                        answer: answer,
                        licenceKey: global.licenceKey
                    }
                    eventEmitter.emit("return_sendCmd", returnValue)
                }
            });
        }
    }
}

module.exports = Client;
