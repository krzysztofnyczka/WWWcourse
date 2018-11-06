//Krzysztof Nyczka
window.onload = function() {
	var content = document.getElementById("content")
	content.style.backgroundColor = 'lightblue';
	content.style.border = "thick solid white";

	var link1 = document.createElement('a');
	link1.setAttribute('href','#');
	link1.setAttribute('onclick',"zmianaRamki('red')");
	link1.innerHTML = "Czerwony";
	
	var link2 = document.createElement('a');
	link2.setAttribute('href','#');
	link2.setAttribute('onclick',"zmianaRamki('black')");
	link2.innerHTML = "Czarny";
	
	var link3 = document.createElement('a');
	link3.setAttribute('href','#');
	link3.setAttribute('onclick',"zmianaRamki('brown')");
	link3.innerHTML = "Brąz";

	
	content.appendChild(link1);
	content.appendChild(document.createElement('br'));
	content.appendChild(link2);
	content.appendChild(document.createElement('br'));
	content.appendChild(link3);
	doctype.body.appendChild(content)
}

	function zmianaRamki(x) {
		content.style.borderColor = x;
	};