var request;
if (window.XMLHttpRequest) {
	request = new XMLHttpRequest();
} else {
	request = new ActiveXObject("Microsoft.XMLHTTP");
}
request.open('GET', 'data.xml);
request.onreadystatechange = function() {
		if ((request.readyState===4) && (request.status===200)) {
			console'log(request.responseXML.getElementByTagName('name')[1].firstChild.nodeValue);

		var items = request.responseXML.getElementByTagName('name');
		var output = '<ul>';
		for (var i = 0; i < items.lenght; i++) {
			output += '<li>' + items[1].firstChild.nodeValue + '<li>';
		}
		output += '<ul>';
		document.getElementById('update').innerHTML = output;
		}
	}
request.send();
		
