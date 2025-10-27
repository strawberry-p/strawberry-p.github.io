let storyList = []
class Campaign {
    constructor (ID,name,memberCount,characterName,charID,charClass) {
        this.ID = ID
        this.name = name
        this.memberCount = memberCount
        this.charName = characterName
        this.charID = charID
        this.charClass = charClass
    }
}

function story_placeholder() {
    res = []
    res[0] = new Campaign(0,"bleh",3,"Meeple",0,"Barbarian")
    res[1] = new Campaign(1,"dragoons",5,"Orpheus",1,"Paladin")
    storyList = res
    return res
}
story_placeholder()