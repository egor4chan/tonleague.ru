var pph = window.localStorage.getItem('miner-per-sec')

if (pph != null) {
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAA')
    var a = document.getElementById('mypph').innerHTML = (Number(pph) * 60 * 60).toFixed(4);
    
}
else {
    console.log('RRRRRRRRRRRRRRRRRRRRRRRRRR')
    var t = document.getElementById('mypph').innerHTML = 0;
    window.localStorage.setItem('miner-per-sec', 0); // errr
}