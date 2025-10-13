authed = false
username = ""
function placeholder() {
    authed = true
    username = "strawberry"
}

async function session_info() {
    res = await fetch("/session")
}

function auth_values() {
    return [authed,username]
}

function kick_url(){
    let url = window.location.pathname
    let wl = window.location //"in" doesn't work in JS apparently
    if (authed && (url.includes("login") || url.includes("register")) {
        console.log("redirect to "+wl.protocol+wl.hostname+"/story.html")
        window.location.assign(wl.protocol+wl.hostname+"/story.html") //redirect to the campaigns page to be actually useful

    }
    else if (!authed && !(url.includes("login") || url.includes("register"))) {
        console.log("redirect to "+wl.protocol+wl.hostname+"/login.html")
    }
}


placeholder()
kick_url()