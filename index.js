
function myfunc() {

	// identfying boxes
	var box1, box2, box3, box4, box5, box6, box7, box8, box9;
	box1 = document.getElementById("box1").value;
	box2 = document.getElementById("box2").value;
	box3 = document.getElementById("box3").value;
	box4 = document.getElementById("box4").value;
	box5 = document.getElementById("box5").value;
	box6 = document.getElementById("box6").value;
	box7 = document.getElementById("box7").value;
	box8 = document.getElementById("box8").value;
	box9 = document.getElementById("box9").value;



	if ((box1 == 'x' || box1 == 'X') && (box2 == 'x' ||
		box2 == 'X') && (box3 == 'x' || box3 == 'X')) {
		document.getElementById('finish')
			.innerHTML = "Player X won";
		window.alert('Player X won');
	}


	else if ((box1 == 'x' || box1 == 'X') && (box4 == 'x' ||
		box4 == 'X') && (box7 == 'x' || box7 == 'X')) {
		document.getElementById('finish')
			.innerHTML = "Player X won";
		window.alert('Player X won');
	}


	else if ((box7 == 'x' || box7 == 'X') && (box8 == 'x' ||
		box8 == 'X') && (box9 == 'x' || box9 == 'X')) {
		document.getElementById('finish')
			.innerHTML = "Player X won";
		window.alert('Player X won');
	}


	else if ((box3 == 'x' || box3 == 'X') && (box6 == 'x' ||
		box6 == 'X') && (box9 == 'x' || box9 == 'X')) {
		document.getElementById('finish')
			.innerHTML = "Player X won";
		window.alert('Player X won');
	}


	else if ((box1 == 'x' || box1 == 'X') && (box5 == 'x' ||
		box5 == 'X') && (box9 == 'x' || box9 == 'X')) {
		document.getElementById('finish')
			.innerHTML = "Player X won";
		window.alert('Player X won');
	}


	else if ((box3 == 'x' || box3 == 'X') && (box5 == 'x' ||
		box5 == 'X') && (box7 == 'x' || box7 == 'X')) {
		document.getElementById('finish')
			.innerHTML = "Player X won";
		window.alert('Player X won');
	}


	else if ((box2 == 'x' || box2 == 'X') && (box5 == 'x' ||
		box5 == 'X') && (box8 == 'x' || box8 == 'X')) {
		document.getElementById('finish')
			.innerHTML = "Player X won";
		window.alert('Player X won');
	}


	else if ((box4 == 'x' || box4 == 'X') && (box5 == 'x' ||
		box5 == 'X') && (box6 == 'x' || box6 == 'X')) {
		document.getElementById('finish')
			.innerHTML = "Player X won";
		window.alert('Player X won');
	}



	else if ((box1 == '0' || box1 == '0') && (box2 == '0' ||
		box2 == '0') && (box3 == '0' || box3 == '0')) {
		document.getElementById('finish')
			.innerHTML = "Player 0 won";
		window.alert('Player 0 won');
	}


	else if ((box1 == '0' || box1 == '0') && (box4 == '0' ||
		box4 == '0') && (box7 == '0' || box7 == '0')) {
		document.getElementById('finish')
			.innerHTML = "Player 0 won";
		window.alert('Player 0 won');
	}


	else if ((box7 == '0' || box7 == '0') && (box8 == '0' ||
		box8 == '0') && (box9 == '0' || box9 == '0')) {
		document.getElementById('finish')
			.innerHTML = "Player 0 won";
		window.alert('Player 0 won');
	}


	else if ((box3 == '0' || box3 == '0') && (box6 == '0' ||
		box6 == '0') && (box9 == '0' || box9 == '0')) {
		document.getElementById('finish')
			.innerHTML = "Player 0 won";
		window.alert('Player 0 won');
	}


	else if ((box1 == '0' || box1 == '0') && (box5 == '0' ||
		box5 == '0') && (box9 == '0' || box9 == '0')) {
		document.getElementById('finish')
			.innerHTML = "Player 0 won";
		window.alert('Player 0 won');
	}


	else if ((box3 == '0' || box3 == '0') && (box5 == '0' ||
		box5 == '0') && (box7 == '0' || box7 == '0')) {
		document.getElementById('finish')
			.innerHTML = "Player 0 won";
		window.alert('Player 0 won');
	}


	else if ((box2 == '0' || box2 == '0') && (box5 == '0' ||
		box5 == '0') && (box8 == '0' || box8 == '0')) {
		document.getElementById('finish')
			.innerHTML = "Player 0 won";
		window.alert('Player 0 won');
	}
	else if ((box4 == '0' || box4 == '0') && (box5 == '0' ||
		box5 == '0') && (box6 == '0' || box6 == '0')) {
		document.getElementById('finish')
			.innerHTML = "Player 0 won";

		window.alert('Player 0 won');
	}


	else if ((box1 == 'X' || box1 == '0') && (box2 == 'X'	|| box2 == '0') && (box3 == 'X' || box3 == '0') &&

    (box4 == 'X' || box4 == '0') && (box5 == 'X' ||	box5 == '0') && (box6 == 'X' || box6 == '0') &&

    (box7 == 'X' || box7 == '0') && (box8 == 'X' ||	box8 == '0') && (box9 == 'X' || box9 == '0')) {
			document.getElementById('finish')
				.innerHTML = "Match Tie";
			window.alert('Match Tie');
	}
	else {

		// Prints
		if (Player == 1) {
			document.getElementById('finish')
				.innerHTML = "Player X Turn";
		}
		else {
			document.getElementById('finish')
				.innerHTML = "Player 0 Turn";
		}
	}
}

//reset game
function myfunc_2() {
	location.reload();
	document.getElementById('box1').value = '';
	document.getElementById("box2").value = '';
	document.getElementById("box3").value = '';
	document.getElementById("box4").value = '';
	document.getElementById("box5").value = '';
	document.getElementById("box6").value = '';
	document.getElementById("box7").value = '';
	document.getElementById("box8").value = '';
	document.getElementById("box9").value = '';

}

//checks x's or o's
Player = 1;
function myfunc_3() {
	if (Player == 1) {
		document.getElementById("box1").value = "X";
		document.getElementById("box1").disabled = true;
		Player = 0;
	}
	else {
		document.getElementById("box1").value = "0";
		document.getElementById("box1").disabled = true;
		Player = 1;
	}
}

function myfunc_4() {
	if (Player == 1) {
		document.getElementById("box2").value = "X";
		document.getElementById("box2").disabled = true;
		Player = 0;
	}
	else {
		document.getElementById("box2").value = "0";
		document.getElementById("box2").disabled = true;
		Player = 1;
	}
}

function myfunc_5() {
	if (Player == 1) {
		document.getElementById("box3").value = "X";
		document.getElementById("box3").disabled = true;
		Player = 0;
	}
	else {
		document.getElementById("box3").value = "0";
		document.getElementById("box3").disabled = true;
		Player = 1;
	}
}

function myfunc_6() {
	if (Player == 1) {
		document.getElementById("box4").value = "X";
		document.getElementById("box4").disabled = true;
		Player = 0;
	}
	else {
		document.getElementById("box4").value = "0";
		document.getElementById("box4").disabled = true;
		Player = 1;
	}
}

function myfunc_7() {
	if (Player == 1) {
		document.getElementById("box5").value = "X";
		document.getElementById("box5").disabled = true;
		Player = 0;
	}
	else {
		document.getElementById("box5").value = "0";
		document.getElementById("box5").disabled = true;
		Player = 1;
	}
}

function myfunc_8() {
	if (Player == 1) {
		document.getElementById("box6").value = "X";
		document.getElementById("box6").disabled = true;
		Player = 0;
	}
	else {
		document.getElementById("box6").value = "0";
		document.getElementById("box6").disabled = true;
		Player = 1;
	}
}

function myfunc_9() {
	if (Player == 1) {
		document.getElementById("box7").value = "X";
		document.getElementById("box7").disabled = true;
		Player = 0;
	}
	else {
		document.getElementById("box7").value = "0";
		document.getElementById("box7").disabled = true;
		Player = 1;
	}
}

function myfunc_10() {
	if (Player == 1) {
		document.getElementById("box8").value = "X";
		document.getElementById("box8").disabled = true;
		Player = 0;
	}
	else {
		document.getElementById("box8").value = "0";
		document.getElementById("box8").disabled = true;
		Player = 1;
	}
}

function myfunc_11() {
	if (Player == 1) {
		document.getElementById("box9").value = "X";
		document.getElementById("box9").disabled = true;
		Player = 0;
	}
	else {
		document.getElementById("box9").value = "0";
		document.getElementById("box9").disabled = true;
		Player = 1;
	}
}
