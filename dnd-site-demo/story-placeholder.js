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
    res[1] = new Campaign(1,"Siege of Zach Latta's left hand",5,"Orpheus",1,"Paladin")
    storyList = res
    return res
}
function storypage_placeholder() {
    storyList = []
    storyList[0] = new Campaign(1,"Siege of Zach Latta's left hand",5,"Orpheus",1,"Paladin")
    storyList[0].characterList = charList //story.html loads char placeH before story placeH
}
story_placeholder()