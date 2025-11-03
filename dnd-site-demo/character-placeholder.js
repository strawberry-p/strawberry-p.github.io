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

function user_char_placeholder() {
    charList = []
    charList[0] = new Character(3,"Napstablook",["Artificer"],3,"Ghost",20)
    charList[1] = new Character(0,"Orpheus",["Paladin"],6,"Dinosaur",100)
    charList[2] = new Character(4,"Explosions Girlie",["Wizard"],2,"Dragonborn",12)
    charList[1].cantrips = ["Light","Prestidigation"]
    charList[1].sp1 = ["Fireball"]
    charList[1].spslots[0] = 2
    charList[1].spslots[1] = 1
    charList[2].cantrips = ["Chaos Bolt"]
    charList[2].sp1 = ["Fireball"]
    //add links to respective story pages
    charList[0].campaigns = [[1,"Overlegend"]]
    charList[1].campaigns = [[0,"Siege of Zach Latta's left hand"]]
    charList[2].campaigns = [[1,"Overlegend"]]
}

char_placeholder()