const listDiv = document.getElementById("list-container")
function inject_character(obj) {
    let strID = obj.ID
    nameID = strID+"name"
    spID = [strID+"ct",strID+"sp1",strID+"sp2",strID+"sp3",strID+"sp4"]
    classID = strID+"class"
    raceID = strID+"race"
    strLevel = obj.lvl
    divID = strID+"div"
    listDiv.innerHTML = listDiv.innerHTML + "<div data-img='img/"+obj.race+".png' class='character-card' id='"+divID+"'></div>"
    let div = document.getElementById(divID)
    div.innerHTML = div.innerHTML+"<p id='"+nameID+"'></p>"+"<p><span id='"+raceID+"'></span> <span id='"+classID+"'></span> (lvl "+strLevel+")</p>"
    if (typeof obj.campaigns[0] != 'undefined') {
    strCampaignLinks = ""
    for (let i=0;i<obj.campaigns.length;i++) {
        let num = obj.campaigns[i][0]
        let campaignName = obj.campaigns[i][1]
        if (false) {
        strCampaignLinks = strCampaignLinks+"<a class='campaign-links link' href='"+rootURL+''+"story/"+num+"'>"+campaignName+"</a>, "} else {
        strCampaignLinks = strCampaignLinks+"<a class='campaign-links link' href='"+rootURL+''+"story'>"+campaignName+"</a>, "} //replace the numbered links with a link to the placeholder page before i set up the actual generated content
    }
    if (strCampaignLinks != "") {strCampaignLinks = strCampaignLinks.slice(0,strCampaignLinks.length-2)}
    console.log(strCampaignLinks)
    div.innerHTML = div.innerHTML+"<p>"+strCampaignLinks+"</p>"
    } else {console.log("no campaign links in "+obj.name)} //protected against objects with nonexistent campaign links
    strClass = ""
    for (let i=0; i<obj.spec.length; i++) {
        strClass = strClass+obj.spec[i]+"-"
    }
    console.log(strClass)
    strClass = strClass.slice(0,obj.spec.length-2)
    console.log(strClass)
    const nameSpan = document.getElementById(nameID)
    nameSpan.innerText = obj.name
    const classSpan = document.getElementById(classID)
    classSpan.innerText = strClass
    const raceSpan = document.getElementById(raceID)
    raceSpan.innerText = obj.race
}
user_char_placeholder()
console.log("hello")
console.log(charList)
for (let j = 0 ; j < charList.length; j++) {inject_character(charList[j])}
