const sCity = "Karagandy,KZ";
let cityId = 0;
const appid = "70005441284456af362e05cc61f4296d";

let quantity = 0;

function httpRequest(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(JSON.parse(xhr.responseText));
            } else {
                reject(new Error(xhr.statusText));
            }
        };
        xhr.onerror = () => {
            reject(new Error('Network error'));
        };
        xhr.send(       );
    });
}

window.onload = function() {
    window.setInterval(async function() {
        try {
            const data = await httpRequest(`http://api.openweathermap.org/data/2.5/weather?q=${sCity}&units=metric&lang=ru&APPID=${appid}`);
            
            info.textContent = "Температура: " + Math.round(data.main.temp) + "℃";
            feels_like.textContent = " * Ощущается как: " + Math.round(data.main.feels_like) + "℃";
            clouds.textContent = " * Состояние: " + (data.weather[0].description)[0].toUpperCase() + (data.weather[0].description).slice(1);

            // Для вывода времени
            let date = new Date();
            let hou = date.getHours();
            let min = date.getMinutes();
            let sec = date.getSeconds();
            if(hou < 10){
                hou = "0" + hou;
            }
            if(min < 10){
                min = "0" + min;
            }
            if(sec < 10){
                sec = "0" + sec;
            }
            datee.textContent = hou + ":" + min + ":" + sec;
            quantityShow.textContent = "Уведомления: " + "(" + quantity + ")";
        } catch (e) {
            console.log("Exception:", e);
        }
    }, 1000);
};

const divv = document.getElementById('hide');

function toHide() {
    divv.setAttribute('id', 'hidden')
}


// Для получения текста и вывода его в Окно Уведомлений

function getText() {
    let textarea = document.getElementById('areatext');
    let texta = textarea.value;
    const hiddd = document.getElementById('not1');
   
    if(quantity == 0){
        areat1.textContent = texta;
        title1.textContent = "Уведомление №" + "1";
        quantity = quantity + 1;
        hiddd.classList.remove('hidden');
    }
    else if(quantity > 0){
        let newDiv = document.createElement("div");
        let textarea = document.getElementById('areatext');
        let texta = textarea.value;

        let container = document.getElementById('container0');
        container.appendChild(newDiv);
        newDiv.setAttribute('class', 'nots');

        let container1 = newDiv;
        let newdiv1 = document.createElement("span");
        container1.appendChild(newdiv1);
        newdiv1.setAttribute('class', 'titles');
        newdiv1.textContent = "Уведомление №" + (quantity + 1);

        let br = document.createElement("br");
        container1.appendChild(br);

        let newdiv2 = document.createElement("span");
        container1.appendChild(newdiv2);
        newdiv2.setAttribute('class', 'areats');
        newdiv2.textContent = texta;

        quantity = quantity + 1;
    }
}
