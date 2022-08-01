


function key(event) {
    var x = event.key;
    document.getElementById("number").innerHTML = " " + x;
}

function whichKey(event) {
    var x = event.which;
    document.getElementById("which").innerHTML = " " + x;
}

function code(event) {
    var x = event.code;
    document.getElementById("code").innerHTML = " " + x;
}