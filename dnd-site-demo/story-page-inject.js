const nameHeader = document.getElementById("campaign-name")
const pageTitle = document.getElementById("campaign-title")
user_char_placeholder()
storypage_placeholder()
nameHeader.innerText = storyList[0].name
pageTitle.innerText = storyList[0].name
class Roll {
    constructor(stat,substat,rolled,bonus=0,reqs=[],dieType=6,dieCount=1) {
        this.stat = stat
        this.substat = substat
        this.dice = dieType
        this.dieCount = dieCount
        this.rolled = rolled
        this.bonus = bonus
    }
}

class Story_Event {
    constructor(source,desc,selfDmg=0,resDmg=[],rolls=[]) {
        this.src = source
        this.desc = desc
        this.selfDmg = selfDmg
        this.resDmg = resDmg
    }
}