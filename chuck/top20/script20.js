var bouton = document.getElementById("top")
bouton.addEventListener("click", function() {fact()} )
var page = 1
var visi = document.getElementById("precedent")
var invisi = document.getElementById("suivant")

function fact(){
    if (page == 1) {
        visi.className = "invisible"
        invisi.className = "visible"
    }else if (page >1){
        visi.className = "visible"
        invisi.className = "visible"
    }

fetch("http://jihane.fr/ajax/chucknorris.php/api/get?data=tri:first;nb:20;page:"+page)
.then (
    function(response){
        return response.json()
    }
)
.then (
    function (data){
        var parent =  document.getElementById('divtop10');
        parent.innerText = ""         

        for (i = 0; i <= 19; i++) {
            var text = document.createElement("p")
            document.getElementById("divtop10").innerHTML += data[i].fact
            parent.appendChild(text, parent.firstChild)


        }
    }
)
}

var bouton = document.getElementById("precedent")
bouton.addEventListener("click", function() {precedent()} )
function precedent(){
    page --
    if (page == 1) {
        visi.className = "invisible"
        invisi.className = "visible"
    }else if (page >1){
        visi.className = "visible"
        invisi.className = "visible"
    }

    fetch("http://jihane.fr/ajax/chucknorris.php/api/get?data=tri:first;nb:20;page:"+page)
    .then (
        function(response){
            return response.json()
        }
    )
    .then (
        function (data){
            var parent =  document.getElementById('divtop10');
            parent.innerText = ""         
            for (i = 0; i <= 19; i++) {
                var text = document.createElement("p")
                document.getElementById("divtop10").innerHTML += data[i].fact
                parent.appendChild(text, parent.firstChild)
    
    
            }
        }
    )
    }

var bouton = document.getElementById("suivant")
bouton.addEventListener("click", function() {suivant()} )
function suivant(){
    page++

    if (page == 1) {
        visi.className = "invisible"
        invisi.className = "visible"
    }else if (page >1){
        visi.className = "visible"
        invisi.className = "visible"
    }

    fetch("http://jihane.fr/ajax/chucknorris.php/api/get?data=tri:first;nb:20;page:"+page)
    .then (
        function(response){
            return response.json()
        }
    )
    .then (
        function (data){
            var parent =  document.getElementById('divtop10');
            parent.innerText = ""
            for (i = 0; i <= 19; i++) {
                var text = document.createElement("p")
                document.getElementById("divtop10").innerHTML += data[i].fact
                parent.appendChild(text, parent.firstChild)
            }
        }
    )
    }