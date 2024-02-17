class Quest {
	constructor(title_en, title_jp, deco_en, deco_jp) {
		this.title_en = title_en;
		this.title_jp = title_jp;
		this.deco_en = deco_en;
		this.deco_jp = deco_jp;
	}
}

const Questlist = [
	[
		new Quest("", "青い鳥竜の衝撃", "Monkeybutt Jewel", ""),
		new Quest("", "白影の衝撃", "Sleepwool Jewel", ""),
		new Quest("", "家具屋と毒怪鳥", "Gallery Atk Deco", ""),
		new Quest("", "幻獣の脈動", "Horsehoof Jewel", ""),
		new Quest("", "青い鳥竜の脈動", "Dogtooth Jewel", ""),
		new Quest("", "氷狐竜の脈動", "Snakeskin Jewel", ""),
		new Quest("", "赤影の衝撃", "Foxtail Jewel", ""),
		new Quest("", "炎王龍の戦慄", "Rhino Horn Jewel", ""),
		new Quest("", "幻獣の戦慄", "Whaletide Jewel", ""),
		new Quest("", "青怪鳥の戦慄", "Sharkjaw Jewel", ""),
		new Quest("", "一角竜の衝撃", "Supple Thread", ""),
		new Quest("", "棘茶竜の戦慄", "Squirrel (Tanuki) Jewel", ""),
		new Quest("", "幻獣の衝撃", "Crowbeak Jewel", ""),
		new Quest("", "角竜の衝撃", "Pignose Jewel", ""),
		new Quest("", "青怪鳥の衝撃", "Cat's Eye Jewel", ""),
		new Quest("", "黒狼鳥の脈動", "Turtleshell Jewel", ""),
		new Quest("", "白影の衝撃", "Horsetail Jewel", "")
	],[
		new Quest("", "毒怪鳥の脈動", "Rattail Jewel", ""),
		new Quest("", "怪鳥の衝撃", "Tigerclaw Jewel", ""),
		new Quest("", "棘竜の脈動", "Chickenwing Jewel", ""),
		new Quest("", "跳緋獣の戦慄", "Rabbitear (Rabittear) Jewel", ""),
		new Quest("", "黒狼鳥の戦慄", "Prowler Jewel", ""),
		new Quest("", "棘竜の衝撃", "Boarcrest Jewel", ""),
		new Quest("", "鎌蟹の衝撃", "Crockjaw Jewel", ""),
		new Quest("", "岩竜の衝撃", "Eaglewing Jewel", ""),
		new Quest("", "潮島への初上陸！", "Swallowtail Jewel", ""),
		new Quest("", "大猪の衝撃", "Ursine Jewel", ""),
		new Quest("", "装飾品大全・弾瓶の章", "Leomane Jewel", ""),
		new Quest("", "鋼龍の戦慄", "Owl Eye Jewel", ""),
		new Quest("", "装飾品大全・氷塊の章", "Stag Antler Jewel", ""),
		new Quest("", "黒角竜の衝撃", "Cranethroat Jewel", ""),
		new Quest("", "桃毛獣の衝撃", "Blackened Jewel", ""),
		new Quest("", "眠鳥の衝撃", "Orange Jewel", "")
	],[
		new Quest("", "霞龍の脈動", "Moonlit Jewel", ""),
		new Quest("", "雌火竜の衝撃", "Beige Jewel", ""),
		new Quest("", "水竜の衝撃", "Iris Jewel", ""),
		new Quest("", "炎王龍の衝撃", "Shion Jewel", ""),
		new Quest("", "毒怪鳥の戦慄", "Budding Jewel", ""),
		new Quest("", "蛮竜の戦慄", "Willow Jewel", ""),
		new Quest("", "雌響狼の衝撃", "Speckled Jewel", ""),
		new Quest("", "覇竜の戦慄", "Dry Tea Jewel", ""),
		new Quest("", "雪獅子の戦慄", "Linseed Jewel", ""),
		new Quest("", "一角竜の脈動", "Bullhorn Jewel", ""),
		new Quest("", "鎌蟹の脈動", "Sparrowdance Jewel", ""),
		new Quest("", "響狼の衝撃", "Yellow Jewel", ""),
		new Quest("", "桜火竜の衝撃", "Purple Jewel", ""),
		new Quest("", "風翔龍の衝撃", "Rust Jewel", ""),
		new Quest("", "蒼火竜の衝撃", "Wet Crow Jewel", ""),
		new Quest("", "金獅子の脈動", "Realgar Jewel")
	],[
		new Quest("", "金獅子の衝撃", "Pewter Jewel", ""),
		new Quest("", "呑竜の衝撃", "Cream Jewel", ""),
		new Quest("", "霞龍の衝撃", "Storage Jewel", ""),
		new Quest("", "黒狼鳥の衝撃", "Pink Jewel", ""),
		new Quest("", "金獅子の戦慄", "Floral Jewel", ""),
		new Quest("", "溶岩竜の戦慄", "Alabaster Jewel", ""),
		new Quest("", "盾蟹の衝撃", "White Tea Jewel", ""),
		new Quest("", "火竜の戦慄", "Golden Jewel", ""),
		new Quest("", "蒼火竜の脈動", "Dragoneye Jewel", ""),
		new Quest("", "風翔龍の戦慄", "Wolffang Jewel", ""),
		new Quest("", "装飾品大全・水流の章", "Weaselscythe Jewel", ""),
		new Quest("", "水竜の戦慄", "Scarlet Jewel", ""),
		new Quest("", "呑竜の戦慄", "Indigo Jewel", ""),
		new Quest("", "桃毛獣の戦慄", "Lime Jewel", ""),
		new Quest("", "火竜の衝撃", "Orchid Jewel", ""),
		new Quest("", "霞龍の戦慄", "Deep Blue Jewel", "")
	]
];

function validate() {
	
	var errMsg = "";								/* stores the error message */
	var result = true;								/* assumes no errors */


	return result;    //if false the information will not be sent to the server
}

// get current JST in milliseconds
function calcJST() {
	let d = new Date();
	let utc = d.getTime() + (d.getTimezoneOffset() * 60000);
	return utc + (3600000 * 9);
}

function calcFactor() {
	let d = new Date("2024-01-20");
	let jst = calcJST();

	let deltaTime = jst - d;
	let deltaDays = Math.round(deltaTime / (1000 * 3600 * 24));

	let days = 0;
	let hours = new Date(jst).getHours();
	if (hours >= 12) {
		days = deltaDays;
	} else  {
		days = deltaDays - 1;
	}
	let factor = days % 4;
	return factor;
}

function init() {
	
	//var bookForm = document.getElementById("bookform");// link the variable to the HTML element
	//bookForm.onsubmit = validate;          /* assigns functions to corresponding events */

	const factor = calcFactor();
	for (let i = 0; i < 4; i++) {
		let offset = (factor+i)%4;
		for (let j = 0; j < Questlist[offset].length; j++) {
			document.getElementById("demo"+i).innerHTML += "Quest: " + Questlist[offset][j].title_jp + " Deco: " + Questlist[offset][j].deco_en + "<br>";
		}
	}
	document.getElementById("date").innerHTML = new Date(calcJST()).toLocaleString() + " JST (Server time)";
}

window.onload = init;
