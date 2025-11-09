
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
    if (false) {HTML = "<div class='story-card' id='"+divID+"'><a href='story/"+strID+"'><p class='entitled' style='font-size: 1.1em; text-align: center' id='"+entitledId+"'></p> <p><span id='"+charTextID+"'></span> <span id='"+charClassID+"'></span> <span class='member-count' id='"+memberCountID+"'></span></p></a></div>"} //what the helly is this. i hate JS.
    else {HTML = "<div class='story-card' id='"+divID+"'><a href='story'><p class='entitled' style='font-size: 1.1em; text-align: center' id='"+entitledId+"'></p> <p><span id='"+charTextID+"'></span> <span id='"+charClassID+"'></span> <span class='member-count' id='"+memberCountID+"'></span></p></a></div>"}
    if (true) {console.log(HTML)}
    parentDiv.innerHTML = parentDiv.innerHTML+HTML
    document.getElementById(entitledId).innerText = obj.name
    document.getElementById(charTextID).innerText = obj.charName
    document.getElementById(memberCountID).innerText = obj.memberCount+" players"
    document.getElementById(charClassID).innerText = "("+obj.charClass+")   "
}
console.log("inject started")
for (let i=0;i<storyList.length;i++) {
    console.log(storyList[i])
    console.log(storyList[i].ID)
    insert_campaign(storyList[i])
}
console.log(storyList.length) //why is this not just len()