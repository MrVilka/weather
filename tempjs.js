const sCity = "Karagandy,KZ";
let cityId = 0;
const appid = "70005441284456af362e05cc61f4296d";

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
        xhr.send();
    });
}

window.onload = function() {
    window.setInterval(async function() {
        try {
            const data = await httpRequest(`https://api.openweathermap.org/data/2.5/weather?q=${sCity}&units=metric&lang=ru&APPID=${appid}`);
            
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
        } catch (e) {
            console.log("Exception:", e);
        }
    }, 1000);
};

const divv = document.getElementById('hide');

function toHide() {
    divv.setAttribute('id', 'hidden')
}
