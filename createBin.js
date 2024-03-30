let data=[]
let months31=[ "Января", "Марта", "Майя",
"Июля", "Августа", "Октября", "Декабря" ];
let months30=[ "Апреля", "Июня",
"Сентября","Ноября"];
let months29=["Февраля"]
months31.forEach(e=>{
    for (let index = 1; index <=31; index++) {
        data.push(
            {
                data: [
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    ""
                  ],
                  month:`${index} ${e}`
            }
        )
    }
})
months30.forEach(e=>{
    for (let index = 1; index <=30; index++) {
        data.push(
            {
                data: [
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    ""
                  ],
                  month:`${index} ${e}`
            }
        )
    }
})
months29.forEach(e=>{
    for (let index = 1; index <=29; index++) {
        data.push(
            {
                data: [
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    "",
                    ""
                  ],
                  month:`${index} ${e}`
            }
        )
    }
})

function createBin(){
    let req = new XMLHttpRequest();

    req.onreadystatechange = () => {
      if (req.readyState == XMLHttpRequest.DONE) {
        console.log(req.responseText);
      }
    };
    
    req.open("PUT", "https://api.jsonbin.io/v3/b/65c7a2ffdc74654018a2f6f5", true);
    req.setRequestHeader("Content-Type", "application/json");
    req.setRequestHeader("X-Master-Key", "$2a$10$BzwDOsGODxRLXbGtVftZB.UZq8ekecg96E/luNR45NupQyrr2LE5m");
    req.send(JSON.stringify(data));
    
}
createBin()
console.log(data)

