var button = document.getElementById("listbutton");
var input = document.getElementById("listentry");
var ul = document.getElementById("uselesslistentry")


function inputlength() {
    return input.value.length;
}

function createListElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addToList() {
    if (inputlength() > 0) {
        createListElement();
    }
}

button.addEventListener("click", addToList)
