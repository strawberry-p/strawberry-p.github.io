let charList = []

class Character {
    constructor(uniqID,name,spec,level,race,HP) {
        this.ID = uniqID
        this.name = name
        this.spec = spec //array of classes
        this.lvl = level
        this.race = race
        this.HP = HP
        this.spslots = [0,0,0,0,0] //number of spell slots currently held by the character
    }
}

function char_placeholder() {
    charList[0] = new Character(0,"Orpheus",["Paladin"],6,"Dinosaur",100)
    charList[1] = new Character(1,"Goober",["Wizard"],3,"Tabaxi",14)
    charList[1].cantrips = ["Light","Prestidigation"]
    charList[1].sp1 = ["Fireball"]
    charList[1].spslots[0] = 2
    charList[1].spslots[1] = 1
}

function inject_character(obj) {
    const div = document.getElementById("list-container")
    const strID = toString(obj.ID)
    nameID = strID+"name"
    spID = [strID+"ct",strID+"sp1",strID+"sp2",strID+"sp3",strID+"sp4"]
    classDivID = strID+"classdiv"
    raceID = strID+"race"

}

char_placeholder()