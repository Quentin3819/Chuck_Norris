var bouton = document.getElementById("bouton")
bouton.addEventListener("click", function() {facte()} )

function facte (){
    var xhr = new XMLHttpRequest()
    

    xhr.onload = function(){
        var text = document.createElement("p")
        var parent =  document.getElementById('text');
        parent.innerText = ""
        text.innerHTML=JSON.parse(xhr.responseText)[0].fact
        parent.appendChild(text, parent.firstChild)
}

xhr.open ("GET","http://jihane.fr/ajax/chucknorris.php/api/get?data=nb:1;tri:alea")
xhr.send ()
}

