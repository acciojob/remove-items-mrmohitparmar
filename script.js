let btn = document.getElementById("btn");
let select = document.getElementById("colorSelect");
function rem() {
	let index = select.selectedIndex;
	if(index > (-1)){
		select.remove(index);
	}
	else{
		alert("Please select color");
	}
}
btn.addEventListener("click", rem);