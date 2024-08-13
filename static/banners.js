

function delete_banner() {
    var element = document.getElementById('blackscreen')
    var element2 = document.getElementById('withdraw_window')
    element.remove()
    element2.remove()
}

function remove_window() {
    var element = document.getElementById('blackscreen')
    var element2 = document.getElementById('pos_window')

    element.style.animation = 'ablack 0.4s forwards ease'
    element2.style.animation = 'aw 0.4s forwards ease'

    setTimeout(() => {
        element.remove()
        element2.remove()
    }, 400);
}

function set_banner() {
    var element = document.createElement("div");
    document.body.appendChild(element)
    element.setAttribute('id', 'blackscreen');
    element.setAttribute('onclick', 'delete_banner()');
    element.style.animation = 'black 0.4s ease forwards'

    var element2 = document.createElement("div");
    document.body.appendChild(element2);
    element2.setAttribute('id', 'withdraw_window');
    element2.style.animation = 'w 0.4s ease forwards'

    var element3 = document.createElement("button");
    element3.innerHTML = 'Go'
    element3.style.animation = 'w 0.4s ease forwards'
    element2.appendChild(element3);

    var element5 = document.createElement("h2");
    element5.innerHTML = 'Withdraw'
    element2.appendChild(element5);

    var element4 = document.createElement("h5");
    element4.innerHTML = 'For withdraw you need to have more than 1 TON on your balance.'
    element2.appendChild(element4);
}

function banner_1() {
    var element = document.createElement("div");
    document.body.appendChild(element)
    element.setAttribute('id', 'blackscreen');
    element.setAttribute('onclick', 'remove_window()');
    element.style.animation = 'black 0.4s ease forwards'

    var element2 = document.createElement("div");
    document.body.appendChild(element2);
    element2.setAttribute('id', 'pos_window');
    element2.style.animation = 'w 0.4s ease forwards'

    var element3 = document.createElement("h2");
    element2.appendChild(element3);
    element3.innerHTML = 'Gas Fee Master'
    element3.style.animation = 'w 0.4s ease forwards'

    var element4 = document.createElement("button");
    element4.setAttribute('onclick', 'create_pay(1)')
    element2.appendChild(element4);
    element4.innerHTML = 'Buy for 1 TON'
    element4.style.animation = 'w 0.4s ease forwards'

    var element4 = document.createElement("h5");
    element2.appendChild(element4);
    element4.innerHTML = 'You will earn <b>2.3 TON</b> in 14 days.'
    element4.style.animation = 'w 0.4s ease forwards'

    var element5 = document.createElement("h6");
    element2.appendChild(element5);
    element5.setAttribute('id', 'left');
    element5.innerHTML = 'PER SEC'
    element5.style.animation = 'w 0.4s ease forwards'

    var element6 = document.createElement("h6");
    element2.appendChild(element6);
    element6.setAttribute('id', 'right');
    element6.innerHTML = '<b>+0.000001 TON</b>'
    element6.style.animation = 'w 0.4s ease forwards'

    var element7 = document.createElement("h6");
    element2.appendChild(element7);
    element7.setAttribute('id', 'left2');
    element7.innerHTML = 'PER HOUR'
    element7.style.animation = 'w 0.4s ease forwards'

    var element8 = document.createElement("h6");
    element2.appendChild(element8);
    element8.setAttribute('id', 'right2');
    element8.innerHTML = '<b>+0.0036 TON</b>'
    element8.style.animation = 'w 0.4s ease forwards'

    var element9 = document.createElement("h6");
    element2.appendChild(element9);
    element9.setAttribute('id', 'left3');
    element9.innerHTML = 'PER DAY'
    element9.style.animation = 'w 0.4s ease forwards'

    var element11 = document.createElement("h6");
    element2.appendChild(element11);
    element11.setAttribute('id', 'right3');
    element11.innerHTML = '<b>+0.087 TON</b>'
    element11.style.animation = 'w 0.4s ease forwards'

    var element12 = document.createElement("h6");
    element2.appendChild(element12);
    element12.setAttribute('id', 'left4');
    element12.innerHTML = 'TOTAL'
    element12.style.animation = 'w 0.4s ease forwards'

    var element13 = document.createElement("h6");
    element2.appendChild(element13);
    element13.setAttribute('id', 'right4');
    element13.innerHTML = '<b>+2.3 TON</b>'
    element13.style.animation = 'w 0.4s ease forwards'

    var imga = document.createElement("img");
    element2.appendChild(imga);
    imga.setAttribute('src', 'static/gas.PNG');
    imga.style.animation = 'w 0.4s ease forwards'

}

function banner_2() {
    var element = document.createElement("div");
    document.body.appendChild(element)
    element.setAttribute('id', 'blackscreen');
    element.setAttribute('onclick', 'remove_window()');
    element.style.animation = 'black 0.4s ease forwards'

    var element2 = document.createElement("div");
    document.body.appendChild(element2);
    element2.setAttribute('id', 'pos_window');
    element2.style.animation = 'w 0.4s ease forwards'

    var element3 = document.createElement("h2");
    element2.appendChild(element3);
    element3.innerHTML = 'Contact Auditor'; //                               NAME
    element3.style.animation = 'w 0.4s ease forwards'

    var element4 = document.createElement("button");
    element4.setAttribute('onclick', 'create_pay(3)')
    element2.appendChild(element4);
    element4.innerHTML = 'Buy for 3 TON' //                                 BUTTON
    element4.style.animation = 'w 0.4s ease forwards'

    var element4 = document.createElement("h5");
    element2.appendChild(element4);
    element4.innerHTML = 'You will earn <b>6.7 TON</b> in 14 days.'
    element4.style.animation = 'w 0.4s ease forwards'

    var element5 = document.createElement("h6");
    element2.appendChild(element5);
    element5.setAttribute('id', 'left');
    element5.innerHTML = 'PER SEC'
    element5.style.animation = 'w 0.4s ease forwards'

    var element6 = document.createElement("h6");
    element2.appendChild(element6);
    element6.setAttribute('id', 'right');
    element6.innerHTML = '<b>+0.000003 TON</b>'
    element6.style.animation = 'w 0.4s ease forwards'

    var element7 = document.createElement("h6");
    element2.appendChild(element7);
    element7.setAttribute('id', 'left2');
    element7.innerHTML = 'PER HOUR'
    element7.style.animation = 'w 0.4s ease forwards'

    var element8 = document.createElement("h6");
    element2.appendChild(element8);
    element8.setAttribute('id', 'right2');
    element8.innerHTML = '<b>+0.00138 TON</b>'
    element8.style.animation = 'w 0.4s ease forwards'

    var element9 = document.createElement("h6");
    element2.appendChild(element9);
    element9.setAttribute('id', 'left3');
    element9.innerHTML = 'PER DAY'
    element9.style.animation = 'w 0.4s ease forwards'

    var element11 = document.createElement("h6");
    element2.appendChild(element11);
    element11.setAttribute('id', 'right3');
    element11.innerHTML = '<b>+0.3312 TON</b>'
    element11.style.animation = 'w 0.4s ease forwards'

    var element12 = document.createElement("h6");
    element2.appendChild(element12);
    element12.setAttribute('id', 'left4');
    element12.innerHTML = 'TOTAL'
    element12.style.animation = 'w 0.4s ease forwards'

    var element13 = document.createElement("h6");
    element2.appendChild(element13);
    element13.setAttribute('id', 'right4');
    element13.innerHTML = '<b>+6.7 TON</b>'
    element13.style.animation = 'w 0.4s ease forwards'

    var imga = document.createElement("img");
    element2.appendChild(imga);
    imga.setAttribute('src', 'static/coder.PNG');
    imga.style.animation = 'w 0.4s ease forwards'

}

function banner_3() {
    var element = document.createElement("div");
    document.body.appendChild(element)
    element.setAttribute('id', 'blackscreen');
    element.setAttribute('onclick', 'remove_window()');
    element.style.animation = 'black 0.4s ease forwards'

    var element2 = document.createElement("div");
    document.body.appendChild(element2);
    element2.setAttribute('id', 'pos_window');
    element2.style.animation = 'w 0.4s ease forwards'

    var element3 = document.createElement("h2");
    element2.appendChild(element3);
    element3.innerHTML = 'Liquidity Hunter'; //                               NAME
    element3.style.animation = 'w 0.4s ease forwards'

    var element4 = document.createElement("button");
    element4.setAttribute('onclick', 'create_pay(10)')
    element2.appendChild(element4);
    element4.innerHTML = 'Buy for 10 TON' //                                 BUTTON
    element4.style.animation = 'w 0.4s ease forwards'

    var element4 = document.createElement("h5");
    element2.appendChild(element4);
    element4.innerHTML = 'You will earn <b>23 TON</b> in 14 days.'
    element4.style.animation = 'w 0.4s ease forwards'

    var element5 = document.createElement("h6");
    element2.appendChild(element5);
    element5.setAttribute('id', 'left');
    element5.innerHTML = 'PER SEC'
    element5.style.animation = 'w 0.4s ease forwards'

    var element6 = document.createElement("h6");
    element2.appendChild(element6);
    element6.setAttribute('id', 'right');
    element6.innerHTML = '<b>+0.000011 TON</b>'//                PER sec
    element6.style.animation = 'w 0.4s ease forwards'

    var element7 = document.createElement("h6");
    element2.appendChild(element7);
    element7.setAttribute('id', 'left2');
    element7.innerHTML = 'PER HOUR'   
    element7.style.animation = 'w 0.4s ease forwards'

    var element8 = document.createElement("h6");
    element2.appendChild(element8);
    element8.setAttribute('id', 'right2');
    element8.innerHTML = '<b>+0.0396 TON</b>'//                     PER HOUR
    element8.style.animation = 'w 0.4s ease forwards'

    var element9 = document.createElement("h6");
    element2.appendChild(element9);
    element9.setAttribute('id', 'left3');
    element9.innerHTML = 'PER DAY'
    element9.style.animation = 'w 0.4s ease forwards'

    var element11 = document.createElement("h6");
    element2.appendChild(element11);
    element11.setAttribute('id', 'right3');
    element11.innerHTML = '<b>+0.9504 TON</b>'
    element11.style.animation = 'w 0.4s ease forwards'

    var element12 = document.createElement("h6");
    element2.appendChild(element12);
    element12.setAttribute('id', 'left4');
    element12.innerHTML = 'TOTAL'
    element12.style.animation = 'w 0.4s ease forwards'

    var element13 = document.createElement("h6");
    element2.appendChild(element13);
    element13.setAttribute('id', 'right4');
    element13.innerHTML = '<b>+23 TON</b>'
    element13.style.animation = 'w 0.4s ease forwards'

    var imga = document.createElement("img");
    element2.appendChild(imga);
    imga.setAttribute('src', 'static/solider.PNG');
    imga.style.animation = 'w 0.4s ease forwards'

}

function banner_4() {
    var element = document.createElement("div");
    document.body.appendChild(element)
    element.setAttribute('id', 'blackscreen');
    element.setAttribute('onclick', 'remove_window()');
    element.style.animation = 'black 0.4s ease forwards'

    var element2 = document.createElement("div");
    document.body.appendChild(element2);
    element2.setAttribute('id', 'pos_window');
    element2.style.animation = 'w 0.4s ease forwards'

    var element3 = document.createElement("h2");
    element2.appendChild(element3);
    element3.innerHTML = 'Yield Farmer'; //                               NAME
    element3.style.animation = 'w 0.4s ease forwards'

    var element4 = document.createElement("button");
    element4.setAttribute('onclick', 'create_pay(20)')
    element2.appendChild(element4);
    element4.innerHTML = 'Buy for 20 TON' //                                 BUTTON
    element4.style.animation = 'w 0.4s ease forwards'

    var element4 = document.createElement("h5");
    element2.appendChild(element4);
    element4.innerHTML = 'You will earn <b>45 TON</b> in 14 days.'
    element4.style.animation = 'w 0.4s ease forwards'

    var element5 = document.createElement("h6");
    element2.appendChild(element5);
    element5.setAttribute('id', 'left');
    element5.innerHTML = 'PER SEC'
    element5.style.animation = 'w 0.4s ease forwards'

    var element6 = document.createElement("h6");
    element2.appendChild(element6);
    element6.setAttribute('id', 'right');
    element6.innerHTML = '<b>+0.000021 TON</b>'
    element6.style.animation = 'w 0.4s ease forwards'

    var element7 = document.createElement("h6");
    element2.appendChild(element7);
    element7.setAttribute('id', 'left2');
    element7.innerHTML = 'PER HOUR'
    element7.style.animation = 'w 0.4s ease forwards'

    var element8 = document.createElement("h6");
    element2.appendChild(element8);
    element8.setAttribute('id', 'right2');
    element8.innerHTML = '<b>+0.0756 TON</b>'
    element8.style.animation = 'w 0.4s ease forwards'

    var element9 = document.createElement("h6");
    element2.appendChild(element9);
    element9.setAttribute('id', 'left3');
    element9.innerHTML = 'PER DAY'
    element9.style.animation = 'w 0.4s ease forwards'

    var element11 = document.createElement("h6");
    element2.appendChild(element11);
    element11.setAttribute('id', 'right3');
    element11.innerHTML = '<b>+1.8144 TON</b>'
    element11.style.animation = 'w 0.4s ease forwards'

    var element12 = document.createElement("h6");
    element2.appendChild(element12);
    element12.setAttribute('id', 'left4');
    element12.innerHTML = 'TOTAL'
    element12.style.animation = 'w 0.4s ease forwards'

    var element13 = document.createElement("h6");
    element2.appendChild(element13);
    element13.setAttribute('id', 'right4');
    element13.innerHTML = '<b>+45 TON</b>'
    element13.style.animation = 'w 0.4s ease forwards'

    var imga = document.createElement("img");
    element2.appendChild(imga);
    imga.setAttribute('src', 'static/farmer.PNG');
    imga.style.animation = 'w 0.4s ease forwards'

}

function banner_5() {
    var element = document.createElement("div");
    document.body.appendChild(element)
    element.setAttribute('id', 'blackscreen');
    element.setAttribute('onclick', 'remove_window()');
    element.style.animation = 'black 0.4s ease forwards'

    var element2 = document.createElement("div");
    document.body.appendChild(element2);
    element2.setAttribute('id', 'pos_window');
    element2.style.animation = 'w 0.4s ease forwards'

    var element3 = document.createElement("h2");
    element2.appendChild(element3);
    element3.innerHTML = 'Hashrate Hero'; //                               NAME
    element3.style.animation = 'w 0.4s ease forwards'

    var element4 = document.createElement("button");
    element4.setAttribute('onclick', 'create_pay(50)')
    element2.appendChild(element4);
    element4.innerHTML = 'Buy for 50 TON' //                                 BUTTON
    element4.style.animation = 'w 0.4s ease forwards'

    var element4 = document.createElement("h5");
    element2.appendChild(element4);
    element4.innerHTML = 'You will earn <b>111 TON</b> in 14 days.'
    element4.style.animation = 'w 0.4s ease forwards'

    var element5 = document.createElement("h6");
    element2.appendChild(element5);
    element5.setAttribute('id', 'left');
    element5.innerHTML = 'PER SEC'
    element5.style.animation = 'w 0.4s ease forwards'

    var element6 = document.createElement("h6");
    element2.appendChild(element6);
    element6.setAttribute('id', 'right');
    element6.innerHTML = '<b>+0.000054 TON</b>'
    element6.style.animation = 'w 0.4s ease forwards'

    var element7 = document.createElement("h6");
    element2.appendChild(element7);
    element7.setAttribute('id', 'left2');
    element7.innerHTML = 'PER HOUR'
    element7.style.animation = 'w 0.4s ease forwards'

    var element8 = document.createElement("h6");
    element2.appendChild(element8);
    element8.setAttribute('id', 'right2');
    element8.innerHTML = '<b>+0.1944 TON</b>'
    element8.style.animation = 'w 0.4s ease forwards'

    var element9 = document.createElement("h6");
    element2.appendChild(element9);
    element9.setAttribute('id', 'left3');
    element9.innerHTML = 'PER DAY'
    element9.style.animation = 'w 0.4s ease forwards'

    var element11 = document.createElement("h6");
    element2.appendChild(element11);
    element11.setAttribute('id', 'right3');
    element11.innerHTML = '<b>+4.6656 TON</b>'
    element11.style.animation = 'w 0.4s ease forwards'

    var element12 = document.createElement("h6");
    element2.appendChild(element12);
    element12.setAttribute('id', 'left4');
    element12.innerHTML = 'TOTAL'
    element12.style.animation = 'w 0.4s ease forwards'

    var element13 = document.createElement("h6");
    element2.appendChild(element13);
    element13.setAttribute('id', 'right4');
    element13.innerHTML = '<b>+111 TON</b>'
    element13.style.animation = 'w 0.4s ease forwards'

    var imga = document.createElement("img");
    element2.appendChild(imga);
    imga.setAttribute('src', 'static/hero.PNG');
    imga.style.animation = 'w 0.4s ease forwards'

}

function banner_6() {
    var element = document.createElement("div");
    document.body.appendChild(element)
    element.setAttribute('id', 'blackscreen');
    element.setAttribute('onclick', 'remove_window()');
    element.style.animation = 'black 0.4s ease forwards'

    var element2 = document.createElement("div");
    document.body.appendChild(element2);
    element2.setAttribute('id', 'pos_window');
    element2.style.animation = 'w 0.4s ease forwards'

    var element3 = document.createElement("h2");
    element2.appendChild(element3);
    element3.innerHTML = 'Analyst'; //                               NAME
    element3.style.animation = 'w 0.4s ease forwards'

    var element4 = document.createElement("button");
    element4.setAttribute('onclick', 'create_pay(100)')
    element2.appendChild(element4);
    element4.innerHTML = 'Buy for 100 TON' //                                 BUTTON
    element4.style.animation = 'w 0.4s ease forwards'

    var element4 = document.createElement("h5");
    element2.appendChild(element4);
    element4.innerHTML = 'You will earn <b>225 TON</b> in 14 days.'
    element4.style.animation = 'w 0.4s ease forwards'

    var element5 = document.createElement("h6");
    element2.appendChild(element5);
    element5.setAttribute('id', 'left');
    element5.innerHTML = 'PER SEC'
    element5.style.animation = 'w 0.4s ease forwards'

    var element6 = document.createElement("h6");
    element2.appendChild(element6);
    element6.setAttribute('id', 'right');
    element6.innerHTML = '<b>+0.000107 TON</b>'
    element6.style.animation = 'w 0.4s ease forwards'

    var element7 = document.createElement("h6");
    element2.appendChild(element7);
    element7.setAttribute('id', 'left2');
    element7.innerHTML = 'PER HOUR'
    element7.style.animation = 'w 0.4s ease forwards'

    var element8 = document.createElement("h6");
    element2.appendChild(element8);
    element8.setAttribute('id', 'right2');
    element8.innerHTML = '<b>+0.3852 TON</b>'
    element8.style.animation = 'w 0.4s ease forwards'

    var element9 = document.createElement("h6");
    element2.appendChild(element9);
    element9.setAttribute('id', 'left3');
    element9.innerHTML = 'PER DAY'
    element9.style.animation = 'w 0.4s ease forwards'

    var element11 = document.createElement("h6");
    element2.appendChild(element11);
    element11.setAttribute('id', 'right3');
    element11.innerHTML = '<b>+9.2448 TON</b>'
    element11.style.animation = 'w 0.4s ease forwards'

    var element12 = document.createElement("h6");
    element2.appendChild(element12);
    element12.setAttribute('id', 'left4');
    element12.innerHTML = 'TOTAL'
    element12.style.animation = 'w 0.4s ease forwards'

    var element13 = document.createElement("h6");
    element2.appendChild(element13);
    element13.setAttribute('id', 'right4');
    element13.innerHTML = '<b>+225 TON</b>'
    element13.style.animation = 'w 0.4s ease forwards'

    var imga = document.createElement("img");
    element2.appendChild(imga);
    imga.setAttribute('src', 'static/analytics.PNG');
    imga.style.animation = 'w 0.4s ease forwards'

}

function banner_7() {
    var element = document.createElement("div");
    document.body.appendChild(element)
    element.setAttribute('id', 'blackscreen');
    element.setAttribute('onclick', 'remove_window()');
    element.style.animation = 'black 0.4s ease forwards'

    var element2 = document.createElement("div");
    document.body.appendChild(element2);
    element2.setAttribute('id', 'pos_window');
    element2.style.animation = 'w 0.4s ease forwards'

    var element3 = document.createElement("h2");
    element2.appendChild(element3);
    element3.innerHTML = 'Market Battler'; //                               NAME
    element3.style.animation = 'w 0.4s ease forwards'

    var element4 = document.createElement("button");
    element4.setAttribute('onclick', 'create_pay(250)')
    element2.appendChild(element4);
    element4.innerHTML = 'Buy for 250 TON' //                                 BUTTON
    element4.style.animation = 'w 0.4s ease forwards'

    var element4 = document.createElement("h5");
    element2.appendChild(element4);
    element4.innerHTML = 'You will earn <b>555 TON</b> in 14 days.'
    element4.style.animation = 'w 0.4s ease forwards'

    var element5 = document.createElement("h6");
    element2.appendChild(element5);
    element5.setAttribute('id', 'left');
    element5.innerHTML = 'PER SEC'
    element5.style.animation = 'w 0.4s ease forwards'

    var element6 = document.createElement("h6");
    element2.appendChild(element6);
    element6.setAttribute('id', 'right');
    element6.innerHTML = '<b>+0.000269 TON</b>'
    element6.style.animation = 'w 0.4s ease forwards'

    var element7 = document.createElement("h6");
    element2.appendChild(element7);
    element7.setAttribute('id', 'left2');
    element7.innerHTML = 'PER HOUR'
    element7.style.animation = 'w 0.4s ease forwards'

    var element8 = document.createElement("h6");
    element2.appendChild(element8);
    element8.setAttribute('id', 'right2');
    element8.innerHTML = '<b>+0.9684 TON</b>'
    element8.style.animation = 'w 0.4s ease forwards'

    var element9 = document.createElement("h6");
    element2.appendChild(element9);
    element9.setAttribute('id', 'left3');
    element9.innerHTML = 'PER DAY'
    element9.style.animation = 'w 0.4s ease forwards'

    var element11 = document.createElement("h6");
    element2.appendChild(element11);
    element11.setAttribute('id', 'right3');
    element11.innerHTML = '<b>+23.2416 TON</b>'
    element11.style.animation = 'w 0.4s ease forwards'

    var element12 = document.createElement("h6");
    element2.appendChild(element12);
    element12.setAttribute('id', 'left4');
    element12.innerHTML = 'TOTAL'
    element12.style.animation = 'w 0.4s ease forwards'

    var element13 = document.createElement("h6");
    element2.appendChild(element13);
    element13.setAttribute('id', 'right4');
    element13.innerHTML = '<b>+555 TON</b>'
    element13.style.animation = 'w 0.4s ease forwards'

    var imga = document.createElement("img");
    element2.appendChild(imga);
    imga.setAttribute('src', 'static/box.PNG');
    imga.style.animation = 'w 0.4s ease forwards'

}

function banner_8() {
    var element = document.createElement("div");
    document.body.appendChild(element)
    element.setAttribute('id', 'blackscreen');
    element.setAttribute('onclick', 'remove_window()');
    element.style.animation = 'black 0.4s ease forwards'

    var element2 = document.createElement("div");
    document.body.appendChild(element2);
    element2.setAttribute('id', 'pos_window');
    element2.style.animation = 'w 0.4s ease forwards'

    var element3 = document.createElement("h2");
    element2.appendChild(element3);
    element3.innerHTML = 'Crypto News'; //                               NAME
    element3.style.animation = 'w 0.4s ease forwards'

    var element4 = document.createElement("button");
    element4.setAttribute('onclick', 'create_pay(500)')
    element2.appendChild(element4);
    element4.innerHTML = 'Buy for 500 TON' //                                 BUTTON
    element4.style.animation = 'w 0.4s ease forwards'

    var element4 = document.createElement("h5");
    element2.appendChild(element4);
    element4.innerHTML = 'You will earn <b>1111 TON</b> in 14 days.'
    element4.style.animation = 'w 0.4s ease forwards'

    var element5 = document.createElement("h6");
    element2.appendChild(element5);
    element5.setAttribute('id', 'left');
    element5.innerHTML = 'PER SEC'
    element5.style.animation = 'w 0.4s ease forwards'

    var element6 = document.createElement("h6");
    element2.appendChild(element6);
    element6.setAttribute('id', 'right');
    element6.innerHTML = '<b>+0.000537 TON</b>'
    element6.style.animation = 'w 0.4s ease forwards'

    var element7 = document.createElement("h6");
    element2.appendChild(element7);
    element7.setAttribute('id', 'left2');
    element7.innerHTML = 'PER HOUR'
    element7.style.animation = 'w 0.4s ease forwards'

    var element8 = document.createElement("h6");
    element2.appendChild(element8);
    element8.setAttribute('id', 'right2');
    element8.innerHTML = '<b>+1.9332 TON</b>'
    element8.style.animation = 'w 0.4s ease forwards'

    var element9 = document.createElement("h6");
    element2.appendChild(element9);
    element9.setAttribute('id', 'left3');
    element9.innerHTML = 'PER DAY'
    element9.style.animation = 'w 0.4s ease forwards'

    var element11 = document.createElement("h6");
    element2.appendChild(element11);
    element11.setAttribute('id', 'right3');
    element11.innerHTML = '<b>+46.3968 TON</b>'
    element11.style.animation = 'w 0.4s ease forwards'

    var element12 = document.createElement("h6");
    element2.appendChild(element12);
    element12.setAttribute('id', 'left4');
    element12.innerHTML = 'TOTAL'
    element12.style.animation = 'w 0.4s ease forwards'

    var element13 = document.createElement("h6");
    element2.appendChild(element13);
    element13.setAttribute('id', 'right4');
    element13.innerHTML = '<b>+1111 TON</b>'
    element13.style.animation = 'w 0.4s ease forwards'

    var imga = document.createElement("img");
    element2.appendChild(imga);
    imga.setAttribute('src', 'static/news.PNG');
    imga.style.animation = 'w 0.4s ease forwards'

}