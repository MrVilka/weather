window.onload = function(){
    window.setInterval(function(){
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
    });
}
