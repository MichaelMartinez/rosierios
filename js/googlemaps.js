$(function() {

    var latlng = new google.maps.LatLng(31.808681,-111.019974);
	var settings = {
		zoom: 17,
		scrollwheel: false,
		center: latlng,
		mapTypeControl: true,
		mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
		navigationControl: true,
		navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
		mapTypeId: google.maps.MapTypeId.ROADMAP};
	var map = new google.maps.Map(document.getElementById("map_canvas"), settings);
	var contentString = '<div style="color: black">'+
		'<h4>Rosie Rios Golf Tournament</h4>'+
		'</div>';
	var infowindow = new google.maps.InfoWindow({
		content: contentString
	});

    var companyImage = new google.maps.MarkerImage('http://maps.google.com/mapfiles/ms/icons/pink-dot.png');

    var companyShadow = new google.maps.MarkerImage('http://maps.google.com/mapfiles/ms/icons/shadow.png');

    var companyPos = new google.maps.LatLng(31.808681,-111.019974);

	var companyMarker = new google.maps.Marker({
		position: companyPos,
		map: map,
		icon: companyImage,
		shadow: companyShadow,
		title:"RR Golf Tournament",
		zIndex: 3});

	google.maps.event.addListener(companyMarker, 'click', function() {
		infowindow.open(map,companyMarker);
	});

});
