var button = document.getElementById("listbutton");
var input = document.getElementById("listentry");
var ul = document.getElementById("uselesslistentry")

button.addEventListener("click", function() {
    if (input.value.length > 0) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
    }
})
