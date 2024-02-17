/**
*/




function validate(){
	
	var errMsg = "";								/* stores the error message */
	var result = true;								/* assumes no errors */


	return result;    //if false the information will not be sent to the server
}

function calcjst(){
	const d = new Date();
	const localTime = d.getTime();
	const localOffset = d.getTimezoneOffset() * 60000;
	const utc = localTime + localOffset;
	const offset = +9;
	const jst = utc + (3600000 * offset);
	const jstTimeNow = new Date(jst).toLocaleString();
	const jst2 = new Date(jst);
	return jstTimeNow + " Jst (Server time)";
}

function calcfactor(){
	let d2 = new Date("2024-01-20");
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
	let factor = days % 4;
	return factor;
	}
	else 
	{
	const days = Difference_In_Days - 1; 
	let factor = days % 4;
	return factor;
	}
	
}


function calcquest(factor){
	const quest = "Quest: 青い鳥竜の衝撃 Deco: Monkeybutt Jewel " + "\xa0|\xa0" + "Quest: 白影の衝撃 Deco: Sleepwool Jewel  " + "\xa0|\xa0" + "Quest: 家具屋と毒怪鳥 Deco: Gallery Atk Deco " + "\xa0|\xa0" + "Quest: 幻獣の脈動 Deco: Horsehoof Jewel  " + "\xa0|\xa0" + "Quest: 青い鳥竜の脈動 Deco: Dogtooth Jewel  " + "\xa0|\xa0" + 
	"Quest: 氷狐竜の脈動 Deco: Snakeskin Jewel  "  + "\xa0|\xa0" + "Quest: 赤影の衝撃 Deco: Foxtail Jewel  " + "\xa0|\xa0" + "<br>" + "Quest: 炎王龍の戦慄 Deco: Rhino Horn Jewel  " + "\xa0|\xa0" + "Quest: 幻獣の戦慄 Deco: Whaletide Jewel  " + "\xa0|\xa0" + "Quest: 青怪鳥の戦慄 Deco: Sharkjaw Jewel  " + "\xa0|\xa0" + 
	"Quest: 一角竜の衝撃 Deco: Supple Thread " + "\xa0|\xa0" + "Quest: 棘茶竜の戦慄 Deco: Squirrel (Tanuki) Jewel  " + "\xa0|\xa0" + "Quest: 幻獣の衝撃 Deco: Crowbeak Jewel  " + "\xa0|\xa0" + "Quest: 角竜の衝撃 Deco: Pignose Jewel  " + "\xa0|\xa0" + "<br>" + "Quest: 青怪鳥の衝撃 Deco: Cat's Eye Jewel  " + "\xa0|\xa0" + 
	"Quest: 黒狼鳥の脈動 Deco: Turtleshell Jewel  " + "\xa0|\xa0" + "Quest: 白影の衝撃 Deco: Horsetail Jewel  "
;
	const quest2 = "Quest: 毒怪鳥の脈動 Deco: Rattail Jewel  " + "\xa0|\xa0" + "Quest: 怪鳥の衝撃 Deco: Tigerclaw Jewel  " + "\xa0|\xa0" + "Quest: 棘竜の脈動 Deco: Chickenwing Jewel  " + "\xa0|\xa0" + "Quest: 跳緋獣の戦慄 Deco: Rabbitear (Rabittear) Jewel  " + "\xa0|\xa0" + 
	"Quest: 黒狼鳥の戦慄 Deco: Prowler Jewel  " + "\xa0|\xa0" + "Quest: 棘竜の衝撃 Deco: Boarcrest Jewel  " + "\xa0|\xa0" +  "<br>" + "Quest: 鎌蟹の衝撃 Deco: Crockjaw Jewel  " + "\xa0|\xa0" + "Quest: 岩竜の衝撃 Deco: Eaglewing Jewel  " + "\xa0|\xa0" + 
	"Quest: 潮島への初上陸！ Deco: Swallowtail Jewel  " + "\xa0|\xa0" + "Quest: 大猪の衝撃 Deco: Ursine Jewel  " + "\xa0|\xa0" + "Quest: 装飾品大全・弾瓶の章 Deco: Leomane Jewel  " + "\xa0|\xa0" +  "Quest: 鋼龍の戦慄 Deco: Owl Eye Jewel  " + "\xa0|\xa0" + "<br>" + "Quest: 装飾品大全・氷塊の章 Deco: Stag Antler Jewel  " + "\xa0|\xa0" + 
	"Quest: 黒角竜の衝撃 Deco: Cranethroat Jewel  " + "\xa0|\xa0" +  "Quest: 桃毛獣の衝撃 Deco: Blackened Jewel  " + "\xa0|\xa0" + "Quest: 眠鳥の衝撃 Deco: Orange Jewel  "
;
	const quest3 = "Quest: 霞龍の脈動 Deco: Moonlit Jewel  " + "\xa0|\xa0" + "Quest: 雌火竜の衝撃 Deco: Beige Jewel  " + "\xa0|\xa0" + "Quest: 水竜の衝撃 Deco: Iris Jewel  " + "\xa0|\xa0" + "Quest: 炎王龍の衝撃 Deco: Shion Jewel  " + "\xa0|\xa0" + "Quest: 毒怪鳥の戦慄 Deco: Budding Jewel  " + "\xa0|\xa0" + 
	"Quest: 蛮竜の戦慄 Deco: Willow Jewel  " + "\xa0|\xa0" + "Quest: 雌響狼の衝撃 Deco: Speckled Jewel  " + "\xa0|\xa0" + "<br>" + "Quest: 覇竜の戦慄 Deco: Dry Tea Jewel  " + "\xa0|\xa0" + "Quest: 雪獅子の戦慄 Deco: Linseed Jewel  " + "\xa0|\xa0" + "Quest: 一角竜の脈動 Deco: Bullhorn Jewel  " + "\xa0|\xa0" + 
	"Quest: 鎌蟹の脈動 Deco: Sparrowdance Jewel  " + "\xa0|\xa0" + "Quest: 響狼の衝撃 Deco: Yellow Jewel  " + "\xa0|\xa0" + "Quest: 桜火竜の衝撃 Deco: Purple Jewel  " + "\xa0|\xa0" + "Quest: 風翔龍の衝撃 Deco: Rust Jewel  " + "\xa0|\xa0" + "<br>" +  "Quest: 蒼火竜の衝撃 Deco: Wet Crow Jewel  " + "\xa0|\xa0" + 
	"Quest: 金獅子の脈動 Deco: Realgar Jewel  "
;
	const quest4 = "Quest: 金獅子の衝撃 Deco: Pewter Jewel  " + "\xa0|\xa0" + "Quest: 呑竜の衝撃 Deco: Cream Jewel  " + "\xa0|\xa0" + "Quest: 霞龍の衝撃 Deco: Storage Jewel  " + "\xa0|\xa0" + "Quest: 黒狼鳥の衝撃 Deco: Pink Jewel  " + "\xa0|\xa0" + "Quest: 金獅子の戦慄 Deco: Floral Jewel  " + "\xa0|\xa0" + 
	"Quest: 溶岩竜の戦慄 Deco: Alabaster Jewel  " + "\xa0|\xa0" + "Quest: 盾蟹の衝撃 Deco: White Tea Jewel  " + "\xa0|\xa0" + "<br>" + "Quest: 火竜の戦慄 Deco: Golden Jewel  " + "\xa0|\xa0" + "Quest: 蒼火竜の脈動 Deco: Dragoneye Jewel  " + "\xa0|\xa0" + 
	"Quest: 風翔龍の戦慄 Deco: Wolffang Jewel  " + "\xa0|\xa0" + "Quest: 装飾品大全・水流の章 Deco: Weaselscythe Jewel  " + "\xa0|\xa0" + "Quest: 水竜の戦慄 Deco: Scarlet Jewel  " + "\xa0|\xa0" + 
	"Quest: 呑竜の戦慄 Deco: Indigo Jewel  " + "\xa0|\xa0" + "Quest: 桃毛獣の戦慄 Deco: Lime Jewel  " + "\xa0|\xa0" + "<br>" + "Quest: 火竜の衝撃 Deco: Orchid Jewel  " + "\xa0|\xa0" + "Quest: 霞龍の戦慄 Deco: Deep Blue Jewel  "
;
	
	



if (factor = 0) {
	const questlist = [quest, quest2, quest3, quest4]
	return questlist
}
else if (factor = 1) {
	return [quest2, quest3, quest4, quest]
}
else if (factor = 2) {
	const questlist = [quest3, quest4, quest, quest2]
	return questlist
}
else {
	const questlist = [quest4, quest, quest2, quest3]
	return questlist 
}


}

function init () {
	
	//var bookForm = document.getElementById("bookform");// link the variable to the HTML element
	//bookForm.onsubmit = validate;          /* assigns functions to corresponding events */
	
	const factor = calcfactor()
	const [today, tomorrow, dayafter, forthday] = calcquest(factor);
	document.getElementById("demo").innerHTML = today + "\n";
	document.getElementById("demo2").innerHTML = tomorrow + "\n";
	document.getElementById("demo3").innerHTML = dayafter + "\n";
	document.getElementById("demo4").innerHTML = forthday + "\n";
	const dtoday = calcjst();
	document.getElementById("date").innerHTML = dtoday;
 }

window.onload = init;
