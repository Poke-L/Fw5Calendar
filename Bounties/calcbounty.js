function validate() {
	
	var errMsg = "";								
	var result = true;								


	return result;    
}

// get current JST in milliseconds
function calcJST() {
	let d = new Date();
	let utc = d.getTime() + (d.getTimezoneOffset() * 60000);
	return utc + (3600000 * 9);
}

function calcFactor() {
let d = new Date("2024-03-17");
	d.setHours(13);
	let jst = calcJST();

	let deltaTime = jst - d;
	let deltaDays = Math.round(deltaTime / (1000 * 3600 * 24));

	let days = 0;
	let hour = new Date();
	let h2 = hour.getUTCHours();
	let hours = ((h2 + 9)%24)
	if (hours >= 12) {
		days = deltaDays;
	} else  {
		days = deltaDays - 1;
	}
	let factor = days;
	return factor;
}




function calcbounties(factor) {
	const lowbounty = ["Kirin", "Red Khezu", "Gypceros", "Blangonga", "Shogun", "Pink Rathian", "Dyura", "Blue Kut-Ku", "Basarios", "Congalala", "Hypnoc", "Azure Rathalos", "Lavasioth", "Chameleos", "Black Diablos"];
	const midbounty = [ "Gravios", "Kushala", "Tigrex", "Black Diablos", "Akantor", "Nono", "Espinas", "Teostra", "Bright Hypnoc", "Red Khezu", "Dora", "Rajang", "Pink Rathian", "Blue Kut-Ku", "F. Espi", "Kamu"];
	const highbounty = [ "Hypnoc", "Khezu", "Congalala", "Kut-Ku", "Lavasioth", "Gravios", "Shogun", "Diablos", "Espinas", "Akantor", "Tigrex", "Basarios", "Rajang"];
	const topbounty = [  "Dyura", "Teostra", "Dora", "Rusted Kush", "Kamu", "Kirin", "Guren", "Kushala"];
	let low = lowbounty[(factor%15)];
	let mid = midbounty[(factor%16)];
	let high = highbounty[(factor%13)];
	let top = topbounty[(factor%8)];
	const bounties = [low, mid, high, top];
	return bounties;
	//return "test";
}

function init() {

	const factor = calcFactor();
	const bounties = calcbounties(factor);
	document.getElementById("demo").innerHTML = bounties[0]	
	document.getElementById("demo2").innerHTML = bounties[1]	
	document.getElementById("demo3").innerHTML = bounties[2]	
	document.getElementById("demo4").innerHTML = bounties[3]	
	document.getElementById("date").innerHTML = new Date(calcJST()).toLocaleString() + " JST (Server time)";
}

window.onload = init;
