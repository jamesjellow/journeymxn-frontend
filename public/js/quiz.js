// function getCurrentPage() {
// 	let page = $("#quiz-page").text().trim().slice(0, 2);
// 	page = parseInt(page);
// 	return page;
// }

// function changePage() {
// 	$.getJSON('../json/quiz.json', (data) => {
// 		let page = getCurrentPage();
// 		let startIndex = page * 5;
// 		let endIndex = startIndex + 5;

// 		console.log(data)
// 	})	
// }

// $(document).ready(() => {
// 	changePage();
// });