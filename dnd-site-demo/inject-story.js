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
function placeholder() {
    res = []
    res[0] = new Campaign(0,"bleh",3,"meeple",0)
    res[1] = new Campaign(1,"dragoons",5,"orpheus",1)
    storyList = res
    return res
}

function insert_campaign(obj) {
    let parentDiv = document.getElementById("list-container")
    let dummyDiv = document.getElementById("dummy-list-item")
    //child = dummyDiv.insertAdjacentElement()
    strID = new String(obj.ID)
    entitledId = strID+"ent"
    charTextID = strID+"character"
    memberCountID = strID+"count"
    charClassID = strID+"charclass"
    divID = strID+"div"
    HTML = "<div class='story-card' id='"+divID+"'><p class='entitled' id='"+entitledId+"'></p> <p><span id='"+charTextID+"'></span> <span id='"+charClassID+"'></span> <span id='"+memberCountID+"'></span></p>" //what the helly is this. i hate JS.
    if (true) {console.log(HTML)}
    parentDiv.innerHTML = parentDiv.innerHTML+HTML
    document.getElementById(entitledId).innerText = obj.name
    document.getElementById(charTextID).innerText = obj.charName
    document.getElementById(memberCountID).innerText = obj.memberCount
    document.getElementById(charClassID).innerText = obj.charClass
}
console.log("inject started")
placeholder()
for (let i=0;i<storyList.length;i++) {
    console.log(storyList[i])
    console.log(storyList[i].ID)
    insert_campaign(storyList[i])
}
console.log(storyList.length) //why is this not just len()