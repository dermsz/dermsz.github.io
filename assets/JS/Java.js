var button = document.getElementById("listbutton");
var input = document.getElementById("listentry");
var ul = document.getElementById("uselesslistentry")

button.addEventListener("click", function() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("testing"));
    ul.appendChild(li)
})
