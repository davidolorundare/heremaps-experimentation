var platform = new H.service.Platform({ app_id: 'avtYhQpLdMWucRoHrQyO', app_code: '3fJ3dzihIBjmmFQjRdk0ng'});

var defaultLayers = platform.createDefaultLayers();
var mapPlaceholder = document.getElementById('map-container');

var map = new H.Map(mapContainer, defaultLayers.normal.map);

window.addEventListener('resize', function(){ map.getViewPort().resize();});