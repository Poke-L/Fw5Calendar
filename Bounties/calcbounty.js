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
	let d2 = new Date("2024-03-17");
	const d = new Date();
	const localTime = d.getTime();
	const localOffset = d.getTimezoneOffset() * 60000;
	const utc = localTime + localOffset;
	const offset = +9;
	const jst = utc + (3600000 * offset);
	const jstTimeNow = new Date(jst).toLocaleString();
	const jst2 = new Date(jst);
	const hours = jst2.getHours();


	const jstTimeNow2 = new Date(jst);

	let Difference_In_Time = jst - d2;
	let Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));
	
	if (hours >= 12) { 
	const days = Difference_In_Days;
	let factor = days;
	return factor;
	}
	else 
	{
	const days = Difference_In_Days - 1; 
	let factor = days;
	return factor;
	}
}




function calcbounties(factor) {
	const lowbounty = ["Kirin", "Red Khezu", "Gypceros", "Blangonga", "Shogun", "Pink Rathian", "Dyura", "Blue Kut-Ku", "Basarios", "Congalala", "Hypnoc", "Azure Rathalos", "Lavasioth", "Chameleos", "Black Diablos"];
	const midbounty = [ "Gravios", "Kushala", "Tigrex", "Black Diablos", "Akantor", "Nono", "Espinas", "Teostra", "Bright Hypnoc", "Red Khezu", "Dora", "Rajang", "Pink Rathian", "Blue Kut-Ku", "F. Espi", "Kamu"];
	const highbounty = [ "Hypnoc", "Khezu", "Congalala", "Kut-Ku", "Lavasioth", "Gravios", "Shogun", "Diablos", "Espinas", "Akantor", "Tigrex", "Basarios", "Rajang"];
	const topbounty = [ "Teostra", "Dora", "Rusted Kush", "Kamu", "Kirin", "Guren", "Kushala", "Dyura"];
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
