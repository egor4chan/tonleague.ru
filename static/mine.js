var balance = window.localStorage.getItem('balance');
var energy = window.localStorage.getItem('energy');
var total_income_LS = window.localStorage.getItem('total_income')

if (balance != null) {
    var r = document.getElementById('balance').innerHTML = balance;
}
else {
    var r = document.getElementById('balance').innerHTML = 0.000000;
    window.localStorage.setItem('balance', 0.000000);
}

if (energy != null) {
    var r = document.getElementById('myenergy').innerHTML = energy;
}
else {
    var e = document.getElementById('myenergy').innerHTML = 1000;
    window.localStorage.setItem('energy', 1000);
}

if (total_income_LS != null) {
    console.log('Thats okay!')
}
else {
    window.localStorage.setItem('total_income', 0);
}
