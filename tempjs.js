const sCity = "Karagandy,KZ";
let cityId = 0;
const appid = "03371846c9b571d1a49cbb42d28b2da3";

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
            const data = await httpRequest(`http://api.openweathermap.org/data/2.5/weather?q=${sCity}&units=metric&lang=ru&APPID=${appid}`);


            // Время получить
            let date = new Date();
            let hou = date.getHours();
            let min = date.getMinutes();
            let sec = date.getSeconds();
            // Если время меньше 0:
            if(hou < 10){
                hou = "0" + hou;
            }
            if(min < 10){
                min = "0" + min;
            }
            if(sec < 10){
                sec = "0" + sec;
            }

            
            info.textContent = "Температура: " + Math.round(data.main.temp) + "℃";
            feels_like.textContent = " * Чувствуется как: " + Math.round(data.main.feels_like) + "℃";
            clouds.textContent = " * Состояние: " + (data.weather[0].description)[0].toUpperCase() + (data.weather[0].description).slice(1);
            datee.textContent = hou + ":" + min + ":" + sec;
            // document.getElementById('info').style.color="red";
        } catch (e) {
            console.log("Exception:", e);
        }
    }, 1000);
};
