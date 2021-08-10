var x = document.getElementsByClassName("firstdiv");
var y = document.getElementsByClassName("divsec");
var c = document.getElementsByTagName("button")[0];
var adaaa;

var count = 0;
c.onclick = function () {
    var number = parseInt(document.getElementById("getval").value);

    function reset(li) {
        for (var i = 0; i < li; i++) {
            x[i].innerText = 0;
            y[i].innerText = 1;
        }
    }
    reset(3);
    clearInterval(adaaa);
    if (number < 1 || number > 999) {
        alert("Range out of bounds");
        clearInterval(adaaa)
        return;
    }

    adaaa = setInterval(function () {
        if (count === number) {
            clearInterval(adaaa);
            return;
        }
        count++;
        adaa(2);
        count++;
    }, 1000);
}

function adaa(place) {
    var current = x[place];
    var next = y[place];
    if (current.innerHTML == 9) {
        adaa(place - 1);
    }
    next.classList.add('animat');
    setTimeout(function () {
        current.innerHTML = next.innerHTML;
        next.classList.remove('animat');
        next.innerHTML = parseInt(next.innerHTML) + 1;
        if (next.innerText > 9) {
            next.innerHTML = 0;
        }
    }, 500)

    console.log(count);


}
