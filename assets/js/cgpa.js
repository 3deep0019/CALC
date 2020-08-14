var no_of_inputs;

function input() {
	var message = document.getElementById('the-message');
	no_of_inputs = document.getElementById('input_field').value;
	if (isNaN(no_of_inputs) || no_of_inputs === '') {

		var danger = '<div class="alert alert-danger" role="alert"><strong>Error</strong> Input Field Cannot be Empty.</div>';
		message.innerHTML = danger;
	} else {
		document.getElementById('inputs').style.display = "none";
		create(no_of_inputs);
		message.innerHTML = '';
	}

}

function create(n) {
	var selector = document.getElementById('input-data');
	for (var i = 0; i < n; i++) {

		var element = document.createElement('input');
		element.setAttribute('type', 'text');
		element.setAttribute('placeholder', 'Marks');
		element.setAttribute('oninput', 'getInput(' + i + ');');
		selector.append(element);
	}
	var element = document.createElement('button');
	element.textContent = 'Calculate';
	element.setAttribute('onclick', 'cal()');
	element.setAttribute('class', 'btn btn-primary');
	selector.append(element);
	var element_2 = document.createElement('button');
	element_2.textContent = 'To go to Percentage page';
	element_2.setAttribute('class', 'btn btn-primary');
	element_2.setAttribute('onclick', "location.href = '../html/cgpa.html';");
	selector.append(element_2);
}
var a = [];

function getInput(i) {
	var select = document.getElementById('input-data');
	var selecting = select.getElementsByTagName('input')[i].value;
	var message = document.getElementById('the-message');
	if (selecting > 10) {
		var danger = '<div class="alert alert-danger" role="alert"><strong>Error</strong> Your Point Should not be Greater Than 10.</div>';
		message.innerHTML = danger;
		select.getElementsByTagName('input')[i].value = "";
	} else {
		message.innerHTML = ""
		a[i] = selecting;

	}

}

function cal() {
	var total = 0;
	var message = document.getElementById('the-message');
	var danger = '<div class="alert alert-danger" role="alert"><strong>Error</strong> The Input Field Cannot be Empty.</div>';

	if (checker(a)) {
		message.innerHTML = danger;
	} else {
		for (var i = 0; i < a.length; i++) {
			total += parseFloat(a[i]);
		}

		var average = total / a.length;
		var percentage = (average * 10) - 7.5;
		var success = '<div class="alert alert-success" role="alert">Your Average percentage is <strong>' + percentage.toFixed(2) + '%</strong></div>';
		message.innerHTML = success;
	}

}

function checker(p) {
	var select = no_of_inputs - 1;
	if (p.length < select) {
		return true;

	} else {
		for (var i = 0; i < p.length; i++) {
			if (p[i] == "") {
				return true;
			}
		}
	}
}