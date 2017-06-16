var pos = 0 , question, quest, option1, option2, option3, option4, optionText;
var questArr = [
				["Di bawah ini yang merupakan KELEMAHAN anda !", "Suka pamer", "Suka memerintah", "Menghindar menjadi pusat perhatian", "Minim expresi"],
				["Di bawah ini yang merupakan KELEMAHAN anda !", "Tidak Disiplin", "Tidak Peka", "Sulit Memaafkan", "Negativ Thinking"],
				["Di bawah ini yang merupakan KELEMAHAN anda !", "Ingatan lemah","Blak-blakan","Membesar-besarkan Masalah", "Khawatir berlebihan"],
				["Di bawah ini yang merupakan KELEMAHAN anda !", "Cerewet", "Cepat putus asa", "kurang pede", "Sulit membuat keputusan"],
				["Di bawah ini yang merupakan KELEMAHAN anda !", "Pendongeng kisah sama berulang kali", "Tidak mau kalah", "Mudah tersinggung", "Mudah menyerah"]
			   ];

function cow(x){
	return document.getElementById(x);
}

// div question
// p quest

function renderQuest(){
	quest = cow("quest");
	cow("question").innerHTML = "" +(pos+1)+ "" + questArr.length;
	question= questArr[pos][0];
	option1.innerHTML = questArr[pos][1];
	option2.innerHTML = questArr[pos][2];
	option3.innerHTML = questArr[pos][3];
	option4.innerHTML = questArr[pos][4];
}