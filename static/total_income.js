// total income => ajax 
// working when user open /home 

user_id_from_id = Number(document.getElementById('id').innerHTML);
total_income_local = Number(window.localStorage.getItem('total_income'));

httpRequest = new XMLHttpRequest();

httpRequest.open('POST', 'total_income');
var newdata = JSON.stringify({"ti": total_income_local.toFixed(6), "user_id": user_id_from_id});

httpRequest.send(newdata);
