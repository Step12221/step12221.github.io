let teacher = document.querySelector(".teacher")
let apikey = "$2a$10$BzwDOsGODxRLXbGtVftZB.UZq8ekecg96E/luNR45NupQyrr2LE5m"
let teacherallowtopass=false
teacher.onclick = function () {
    document.querySelector(".autorization").style.display = "flex"
    document.querySelector(".stte").style.display = "none"
}
document.querySelector(".tl").onclick = function () {
    let logIn = document.querySelector(".login")
    let password = document.querySelector(".Password")
    let req = new XMLHttpRequest();

    req.onreadystatechange = () => {
        if (req.readyState == XMLHttpRequest.DONE) {
            let data = JSON.parse(req.responseText).record
            console.log(data)
            if (logIn.value != "" && password.value != "") {
                console.log(data.login)
                console.log(data.password)
                if (logIn.value == data.login && password.value == data.passoword) {
                    console.log("ok")
                    teacherallowtopass=true
                    window.location.href="https://step12221.github.io/indexForTeacher.html"
                    window.location.reload()
                } else {
                    console.log("no")
                }
            }
        }
    };

    req.open("GET", "https://api.jsonbin.io/v3/b/65be67a2266cfc3fde8543f5/latest", true);
    req.setRequestHeader("X-Master-Key", "$2a$10$BzwDOsGODxRLXbGtVftZB.UZq8ekecg96E/luNR45NupQyrr2LE5m");
    req.send();
}
