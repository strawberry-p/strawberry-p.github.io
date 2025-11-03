themeRes = localStorage.getItem('theme')
if (themeRes == null) {localStorage.setItem('theme','light')}
else if (themeRes == "dark") {document.getElementsByTagName("body").className = "darkmode"}
