//window.localStorage.setItem('balance', 0)
//window.localStorage.setItem('miner-per-sec', 0)

function set_miner(amount) {
    var totalProfit = amount * 1.3
    var profitPerSec = (((totalProfit / 14) / 24) / 60) / 60 // profit per 1 sec

    profitPerSec = profitPerSec.toFixed(6) // округлим до 0.000001

    newprofit = Number(profitPerSec) + Number(window.localStorage.getItem('miner-per-sec'))

    window.localStorage.setItem('miner-per-sec', newprofit)
}

setInterval(() => {
    var miner = window.localStorage.getItem('miner-per-sec')

    // если майнер куплен
    if (miner != null) { 
        var balanceAfter = Number(window.localStorage.getItem('balance')) + Number(miner); // баланс + сила майнера в сек.
        window.localStorage.setItem('balance', balanceAfter.toFixed(6));

        let htmlBalance = document.getElementById('balance');
        htmlBalance.innerHTML = balanceAfter.toFixed(6)

        
        console.log('Balance: ', window.localStorage.getItem('balance'))
        
    } 
    // если майнера нет
    else {
        console.log('No mine power.')
    }
}, 1000)