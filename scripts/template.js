//var template = document.('sitetemplate.html').import;
//var template = document.querySelector('link[rel="import"]').import;
//document.body.appendChild(template.content.cloneNode(true));
document.write('\
<html>\
    <head>\
	<link rel="stylesheet" href="newcss.css">\
    </head>\
	<style>\
		/* Add a black background color to the top navigation */\
		.topnav {\
			background-color: #333;\
			overflow: hidden;\
		}\
\
		/* Style the links inside the navigation bar */\
		.topnav a {\
			float: left;\
			color: #f2f2f2;\
			text-align: center;\
			padding: 14px 16px;\
			text-decoration: none;\
			font-size: 17px;\
		}\
\
		/* Change the color of links on hover */\
		.topnav a:hover {\
		background-color: #ddd;\
		color: black;\
		}\
\
		/* Add a color to the active/current link */\
		.topnav a.active {\
			background-color: #4CAF50;\
			color: white;\
		}\
\
		.center {\
			display: block;\
			margin-left: auto;\
			margin-right: auto;\
		}\
\
		.tab {\
		text-indent: 40px;\
		margin-left: 2%;\
		margin-right: 2%;\
		}\
\
		/* Footer */\
		footer {\
		background-color: #333;\
		background-position: fixed;\
		position: fixed;\
		width: 100%;\
		margin: 0 auto;\
		letf: 0;\
		right: 0;\
		bottom: 0;\
		box-shadow: 10px 10px 5px #888888;\
		z-index: 950;\
		border-top: 1px solid black;\
		}\
\
		body {\
		/*background-color: #f9e79f;*/\
		font-family: sans-serif;\
		}\
\
		h2 {\
		text-align: center;\
		font-size: 35px;\
		-webkit-text-stroke-color: black;\
		}\
\
	</style>\
\
	<body>\
	<div class="topnav">\
		<a href="index.html">Home</a>\
		<a href="about.html">About</a>\
		<a href="education.html">Education</a>\
		<a href="blogindex.html">Personal</a>\
		<a href="firstrobotics.html">First Robotics</a>\
		<a href="volunteer.html">Volunteer Experience</a>\
		<a href="contact.html">Contact</a>\
	</div>\
\
	<footer>Website by Zachary Quay</footer>\
\
	</body>\
</html>\
');