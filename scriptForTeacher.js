// скрипт для появления букв
let classmap = {
    a5: "65c7a2ffdc74654018a2f6f5",
    b5: "65e35932266cfc3fde9234a5",
    v5: "65e359651f5677401f374835",
    g5: "65e35987266cfc3fde9234c2",
    a6: "65e8a7721f5677401f396885",
    b6: "65e8a789dc74654018aed574",
    v6: "65e8a7a2266cfc3fde945399",
    g6: "65e8a7b11f5677401f3968a0",
    a7:"65e8a7c01f5677401f3968a7",
    b7:"65e8a7d0266cfc3fde9453b2",
    v7:"65e8a7e3266cfc3fde9453bb",
    g7:"65e8a7ee1f5677401f3968be",
    a8:"65e8a7fa266cfc3fde9453c6",
    b8:"65e8a809266cfc3fde9453ca",
    v8:"65e8a819266cfc3fde9453d5",
    g8:"65e8a8241f5677401f3968ea",
    a9:"65e8a8311f5677401f3968f1",
    b9:"65e8a840266cfc3fde9453f5",
    v9:"65e8a84d1f5677401f3968fe",
    g9:"65e8a861266cfc3fde945400"
}
let binId = classmap.a5
document.querySelector(".a5").onclick = function () {
    binId = classmap.a5
}



document.querySelector(".b5").onclick = function () {
    binId = classmap.b5
}


document.querySelector(".v5").onclick = function () {
    binId = classmap.v5
}


document.querySelector(".g5").onclick = function () {
    binId = classmap.g5
}

document.querySelector(".a6").onclick = function () {
    binId = classmap.a6
}



document.querySelector(".b6").onclick = function () {
    binId = classmap.b6
}


document.querySelector(".v6").onclick = function () {
    binId = classmap.v6
}


document.querySelector(".g6").onclick = function () {
    binId = classmap.g6
}

document.querySelector(".a7").onclick = function () {
    binId = classmap.a7
}



document.querySelector(".b7").onclick = function () {
    binId = classmap.b7
}


document.querySelector(".v7").onclick = function () {
    binId = classmap.v7
}


document.querySelector(".g7").onclick = function () {
    binId = classmap.g7
}

document.querySelector(".a8").onclick = function () {
    binId = classmap.a8
}



document.querySelector(".b8").onclick = function () {
    binId = classmap.b8
}


document.querySelector(".v8").onclick = function () {
    binId = classmap.v8
}


document.querySelector(".g8").onclick = function () {
    binId = classmap.g8
}

document.querySelector(".a9").onclick = function () {
    binId = classmap.a9
}



document.querySelector(".b9").onclick = function () {
    binId = classmap.b9
}


document.querySelector(".v9").onclick = function () {
    binId = classmap.v9
}


document.querySelector(".g9").onclick = function () {
    binId = classmap.g9
}









let buttons = document.querySelectorAll(".grade")
let rightbutton = document.querySelector(".right")
let leftbutton = document.querySelector(".left")
let menu = document.querySelector(".menu")
let gradefiveb = true
let logIn = document.querySelector(".logIn")
buttons.forEach(e => {
    e.onclick = t => {
        if (gradefiveb === true) {
            e.querySelector(".letters").style.display = "flex"
            gradefiveb = false
        }
        else {
            e.querySelector(".letters").style.display = "none"
            gradefiveb = true

        }
    }
})

let schedual = document.querySelector(".schedual")
let weekdays = ["seva", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"]

let monthdata = [
    {
        name: "Января",
        days: 31,
        firstday: 1
    },
    {
        name: "Февраля",
        days: 29,
        firstday: 4
    },
    {
        name: "Марта",
        days: 31,
        firstday: 5
    },
    {
        name: "Апреля",
        days: 30,
        firstday: 1
    },
    {
        name: "Мая",
        days: 31,
        firstday: 3
    },
    {
        name: "Июня",
        days: 30,
        firstday: 6
    },
    {
        name: "Июля",
        days: 31,
        firstday: 1
    },
    {
        name: "Августа",
        days: 31,
        firstday: 4
    },
    {
        name: "Сентября",
        days: 30,
        firstday: 7
    },
    {
        name: "Октября",
        days: 31,
        firstday: 2
    },
    {
        name: "Ноября",
        days: 30,
        firstday: 5
    },
    {
        name: "Декабря",
        days: 31,
        firstday: 7
    },
]
let weeksformonths = []
function createcalendar(month) {
    schedual.innerHTML = ""
    weeksformonths = []
    fillweek(month)

    console.log(weeksformonths)
    for (let index = 1; index <= month.days; index++) {
        schedual.innerHTML += `<div class="day">
  <p class="weekday">${weeksformonths[index - 1]}</p>
  <p class="monthday">${index} ${month.name}</p>
</div>`

    }
}
function fillweek(month) {
    for (let index = month.firstday; weeksformonths.length < month.days; index++) {
        if (index > 7) {
            index = 1
        }
        weeksformonths.push(weekdays[index])
        console.log(index)
    }
}
let monthnumber = 0
let close = document.querySelector(".close")
rightbutton.onclick = function () {
    if (monthnumber <= 10) {
        monthnumber += 1
        createcalendar(monthdata[monthnumber])
    }
}

leftbutton.onclick = function () {
    if (monthnumber >= 1) {
        monthnumber -= 1
        createcalendar(monthdata[monthnumber])
    }
}
function createtimes() {
    return (
        `<div class="time">
        <img class="close" src="delete.png">
        <div class="timeItem">
            <p class="timeName">08:45</p>
            <input class="timeInput" type="text">
        </div>
        <div class="timeItem">
            <p class="timeName">09:45</p>
            <input class="timeInput" type="text">
        </div>
        <div class="timeItem">
            <p class="timeName">10:45</p>
            <input class="timeInput" type="text">
        </div>
        <div class="timeItem">
            <p class="timeName">11:50</p>
            <input class="timeInput" type="text">
        </div>
        <div class="timeItem">
            <p class="timeName">12:45</p>
            <input class="timeInput" type="text">
        </div>
        <div class="timeItem">
            <p class="timeName">13:40</p>
            <input class="timeInput" type="text">
        </div>
        <div class="timeItem">
            <p class="timeName">14:40</p>
            <input class="timeInput" type="text">
        </div>
        <div class="timeItem">
            <p class="timeName">15:40</p>
            <input class="timeInput" type="text">
        </div>
        <button class="safe">сохранить</button>
    </div>`
    )
}





schedual.addEventListener("click", e => {
    if ( e.target.classList.contains("monthday")) {
        e.target.innerHTML += createtimes()

        let req2 = new XMLHttpRequest();

        req2.onreadystatechange = async () => {
            if (req2.readyState == XMLHttpRequest.DONE) {
                let data = await JSON.parse(req2.responseText).record
                console.log(e.target)
                let delement = e.target
                let d
                if(delement){
                 d = delement.innerHTML.match(/^.*(?=(\<))/)[0]
                }else{
                    console.log("monthday не найден")
                }
                // проблема
               await data.forEach((j) => {
                    if (j.month == d) {
                        document.querySelectorAll(".timeInput").forEach((k, i) => {
                            k.value = j.data[i]
                        })
                    }
                })
            }
        };

        req2.open("GET", `https://api.jsonbin.io/v3/b/${binId}/latest`, true);
        req2.setRequestHeader("X-Master-Key", "$2a$10$BzwDOsGODxRLXbGtVftZB.UZq8ekecg96E/luNR45NupQyrr2LE5m");
        req2.send();





        document.querySelector(".safe").onclick = function () {
            let inputs = document.querySelectorAll(".timeInput")
            let values = {
                data: [],
                month: e.target.parentElement.querySelector(".monthday").innerHTML.match(/^.*(?=(\<))/)[0]
            }
            inputs.forEach((i) => {
                values.data.push(i.value)
                //    values.day=e.target.querySelector(".weekday").innerHTML
            })
            console.log(e.target.parentElement.querySelector(".monthday").innerHTML.match(/^.*(?=(\<))/)[0])
            let req = new XMLHttpRequest();

            req.onreadystatechange = () => {
                if (req.readyState == XMLHttpRequest.DONE) {
                    console.log(req.responseText);
                    let data = JSON.parse(req.responseText).record
                    data.forEach(i => {
                        if (i.month === e.target.parentElement.querySelector(".monthday").innerHTML.match(/^.*(?=(\<))/)[0]) {
                            i.data = values.data
                            let req = new XMLHttpRequest();

                            req.onreadystatechange = () => {
                                if (req.readyState == XMLHttpRequest.DONE) {
                                    console.log(req.responseText);
                                }
                            };

                            req.open("PUT", `https://api.jsonbin.io/v3/b/${binId}`, true);
                            req.setRequestHeader("Content-Type", "application/json");
                            req.setRequestHeader("X-Master-Key", "$2a$10$BzwDOsGODxRLXbGtVftZB.UZq8ekecg96E/luNR45NupQyrr2LE5m");
                            req.send(JSON.stringify(data));
                        }
                    })
                }
            };

            req.open("GET", `https://api.jsonbin.io/v3/b/${binId}/latest`, true);
            req.setRequestHeader("X-Master-Key", "$2a$10$BzwDOsGODxRLXbGtVftZB.UZq8ekecg96E/luNR45NupQyrr2LE5m");
            req.send();
        }
    }
})







schedual.addEventListener("click", e => {
    if (e.target.classList.contains("close")) {
        e.target.parentElement.remove()
    }
})
createcalendar(monthdata[monthnumber])
let lvlnumber = 5
menu.addEventListener("click", e => {
    if (e.target.classList.contains("lvl")) {
        lvlnumber = e.target.innerHTML.match(/\d/g)[0]
        console.log(lvlnumber)
    }
})

