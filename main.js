// 1. First, find our UL Container

let characters = document.querySelector('.characters')

// 2. Create our Ajax Request
let request = new XMLHttpRequest ();
 request.open("GET", "http://swapi.co/api/people/");
 request.addEventListener("load", requestListener)
 request.send ()

function requestListener(){
	let data = JSON.parse(this.responseText)
	data.results.forEach (function(item){
		let list = ` 
		<li> ${item.name} </li>
		<li> ${item.eye_color } </li>`

		characters.innerHTML += list
	})
}

