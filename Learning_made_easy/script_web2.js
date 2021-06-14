var a = 65;
function Alphabet() {
    var x = String.fromCharCode(a)
    var A = document.getElementById('alphabet')
    if (a <= 90) {
        var str = x + " "
        A.innerHTML = str
        a = a + 1
    }
    else {

    }
}