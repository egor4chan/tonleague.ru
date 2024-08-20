// начисление энергии, пока юзер не в сети

var energy_html = document.getElementById('myenergy')
var seconds_left


if (window.localStorage.getItem('offlineTime') == null) {
    console.log('EVENT ENERGY-HANDLER // 6')
}
else {
    seconds_left = Math.floor((Date.now() - window.localStorage.getItem('offlineTime')) / 1000);
    console.log('EVENT ENERGY-HANDLER // 10')
    console.log(seconds_left)

}

setInterval(() => {
    var now = Date.now()

    window.localStorage.setItem('offlineTime', now)
}, 1000)

// seconds_left - время в сек. сколько нас не было в сети

if (Number(seconds_left) < 10) {
    console.log('EVENT ENERGY-HANDLER // 23')
}

else {
    if (Number(energy_html.innerHTML) + Number(seconds_left) >= 1000) { // если сумма жнергии больше или равно 1000
        window.localStorage.setItem('energy', 1000);
        energy_html.innerHTML = '1000'

        

        // test
        if (window.localStorage.getItem('miner-per-sec') != null) {
            if (seconds_left > 30) {
                
                var balanceAfter2 = Number(window.localStorage.getItem('balance')) + (Number(window.localStorage.getItem('miner-per-sec')) * Number(seconds_left));

                var offline_income = Number(window.localStorage.getItem('total_income')) + (Number(window.localStorage.getItem('miner-per-sec')) * Number(seconds_left)) // доход + старое значение

                

                window.localStorage.setItem('balance', balanceAfter2.toFixed(6));
                window.localStorage.setItem('total_income', offline_income)

                // new 

                httpRequest = new XMLHttpRequest();
                httpRequest.open('POST', 'set_reward');
                var data = JSON.stringify({"reward": Number(window.localStorage.getItem('miner-per-sec')) * Number(seconds_left), "user_id": document.getElementById('id').innerHTML});
                httpRequest.send(data);
                
                // endnew

                clicker.onclick = hello_message(Number(window.localStorage.getItem('miner-per-sec')) * Number(seconds_left))
                clicker.onclick = click;
            }
            else {
                clicker.onclick = click;
            }
        }
        else {
            clicker.onclick = click;
        }
        
    }
    else {
        window.localStorage.setItem('energy', Number(energy_html.innerHTML) + Number(seconds_left));
        seconds_left = 0
        clicker.onclick = click;
    }
    clicker.onclick = click;
}