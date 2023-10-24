function openTab(x) {
	let contents = document.querySelectorAll(".tab-content");
	let btns = document.querySelectorAll(".bouton_onglet");
	for (let i = 0; i < contents.length; i++) {
		console.log(i)
		contents[i].style.display = "none";
		btns[i].classList.remove("actif");
		console.log(btns[i]);
	}
	contents[x].style.display = "block";
	btns[x].classList.add("actif");
}

