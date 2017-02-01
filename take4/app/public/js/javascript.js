var currentURL = window.location.orgin;

console.log(currentURL + "/api");

$.get(currentURL + "/api", function(data) {
	for (var i = 0; i < data.length; i++) {
		console.log(i);
		console.log("---------");
	}
});