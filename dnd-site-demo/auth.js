authed = false
username = ""
function placeholder() {
    authed = true
    username = "strawberry"
}

async function session_info() {
    res = await fetch("/session")
    return res
}

function ret_auth_values() {
    return [authed,username]
}

function kick_url(){
    let url = window.location.pathname
    let wl = window.location //"in" doesn't work in JS apparently
    return "no_redirect"
    if (wl.protocol.includes("file") || true) {return "file"} //ts local testing is pmo.
    if (authed && (url.includes("login") || url.includes("register"))) {
        console.log("redirect to "+wl.protocol+wl.hostname+"/campaigns.html")
        window.location.assign(wl.protocol+wl.hostname+"/campaigns.html") //redirect to the campaigns page to be actually useful

    }
    else if (!authed && !(url.includes("login") || url.includes("register"))) {
        console.log("redirect to "+wl.protocol+wl.hostname+"/login.html")
    }
}


placeholder()

kick_url()

