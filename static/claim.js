var claimButton = document.getElementById("d");
var userIdFromHTML = document.getElementById('user_id').innerHTML;
//window.localStorage.setItem('balance', 220);

claimButton.addEventListener('click', () => {
    var rewardFromHTML = document.getElementById('reward').innerHTML;
    if (rewardFromHTML >= 0.000001) {

        // python запрос, чтобы награду обнулили
        httpRequest = new XMLHttpRequest();
        httpRequest.open('POST', 'clean_reward');
        var data = JSON.stringify({'user_id': userIdFromHTML, "reward": rewardFromHTML});
        httpRequest.send(data);

        // visual 
        notify(`Claimed ${rewardFromHTML} TON!`);
        claimButton.innerHTML = 'Success!';

        // обновление баланса юзера
        var old_balance = window.localStorage.getItem('balance');
        var new_balance = Number(old_balance) + Number(rewardFromHTML);
        window.localStorage.setItem('balance', new_balance)
        
    }
    else {
        notify(`Nothing to claim...`)
    }
})
