verboze = true      -- False to disable verboze
dataWriter = true   -- False to disable data writing for AutoConnect Web
AutoConnectVersion = "0.1"

if verboze AND dataWriter then
    global:printMessage("Vous avez activé l'écriture des données pour la visualisation AutoConnect Web [Version : V"..AutoConnectVersion.."]")
    global:printMessage("Vous pouvez accéder à vos données en vous connectant sur le site officiel d'AutoConnect :")
    global:printMessage("- 78.233.131.224:XXXXX")
    global:printMessage("- (Un nom de domaine arrivera par la suite)")

end

function writeData()

    characterDataPath = "data/character/"

    io:open(characterDataPath..character.name()..'.txt', 'a+'):close()
    dataFile = io.open(characterDataPath..character.name()..'.txt', 'a+')

    if not MyFile then 
        if verboze then
            global:printMessage('Impossible de créer le fichier'..character:name()..'.txt')
            global:printMessage("L'affichage des informations de AutConnect Web de fonctionnera pas.")
        end
    end

    dataFile:write('{"pseudo":"'..character:name()..'",', "\n")
    dataFile:write('"level":"'..character:level()..'",', "\n")
    dataFile:write('"sex":"'..character:sex()..'",', "\n")
    dataFile:write('"lifePoints":"'..character:lifePoints()..'",', "\n")
    dataFile:write('"maxLifePoints":"'..character:maxLifePoints()..'",', "\n")
    dataFile:write('"kamas":"'..character:kamas()..'",', "\n")
    dataFile:write('"pods":"'..character:pods()..'",', "\n")
    dataFile:write('"podsP":"'..character:podsP()..'",', "\n")
    dataFile:write('"podsMax":"'..character:podsMax()..'",', "\n")
    dataFile:write('"cellID":"'..character:cellId()..'",', "\n")
    dataFile:write('"mapID":"'..character:currentMapId()..'",', "\n")
    dataFile:write('"map":"'..character:currentPos()..'",', "\n")
    dataFile:write('"area":"'..character:area()..'",', "\n")
    dataFile:write('"subArea":"'..character:subArea()..'"', "\n")
    dataFile:write('}')

    dataFile:close()

end