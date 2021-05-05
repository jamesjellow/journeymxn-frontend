let cardIndex = 0;
let totalCards = 3;


$(document).ready(() => {
	totalCards = $('#quiz li').length;
});


$(document).ready(function() 
{
	let quizWidth= $('#quiz').width();
	let slideCount = $('#quiz li').length;
	let slideWidth = slideCount * quizWidth;

	cardIndex = 0;
	totalCards = slideCount;

	$('#slide').css('width', quizWidth+'px');
	$('#slides').css('width', slideWidth+'px');

	$("#quiz li:nth-child(1)").addClass('visible');

	$('#left-btn').click(() => slideCard('left')); 
	$('#right-btn').click(() => slideCard('right')); 
});

function changeCard(index) {
	let quizWidth = $('#quiz').width();
	var margin = quizWidth * index;

	$(`#quiz li:nth-child(${index + 1})`).addClass('visible');

	$('#quiz').css('transform',`translate3d(-${margin}px, 0px, 0px)`);	

	$('#count').html(index);
}


function slideCard(direction) {
	if (direction == "left") {
		cardIndex -= 1;
		console.log('totalCards: ' + String(totalCards))
		if (cardIndex == -1) {
			cardIndex = totalCards - 1;
		}
	} else if (direction == "right") {
		cardIndex += 1
		if (cardIndex == totalCards) {
			cardIndex = 0;
		}
	}
	console.log(cardIndex)

	changeCard(cardIndex);
}

console.log('hi')