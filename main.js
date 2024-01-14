// var
var like = Array.from(document.getElementsByClassName('Like'))
console.log(document.getElementsByClassName('Like'))
for (const btnLike of like) {
    btnLike.addEventListener('click', function () {
        if (btnLike.style.color === 'red') {
            btnLike.style.color = 'black'
        } else {
            btnLike.style.color = 'red'
        }
    })
}

var incr = Array.from(document.getElementsByClassName('plus'))
var decr = Array.from(document.getElementsByClassName('moins'))
var cards = Array.from(document.getElementsByClassName('box'))
console.log(incr)

// total price function
function total_Price() {
    var price = Array.from(document.getElementsByClassName('prix'))
    var qte = Array.from(document.getElementsByClassName('nmbr'))
    // console.log(qte)
    var total = 0
    for (var i = 0; i < price.length; i++) {
        total += price[i].innerHTML * qte[i].innerHTML
    }
    document.getElementById('totalPrix').innerHTML = total + '$'
}

// boucle for
for (const btnPlus of incr) {
    btnPlus.addEventListener('click', function () {
        btnPlus.previousElementSibling.innerHTML++
        total_Price()
    })
}

// the click button 
for (const btnMinus of decr) {
    btnMinus.addEventListener('click', function () {
        if (btnMinus.nextElementSibling.innerHTML > 0)
            btnMinus.nextElementSibling.innerHTML--
        total_Price()
    })
}