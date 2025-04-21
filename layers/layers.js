var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_EGPIP2025_1 = new ol.format.GeoJSON();
var features_EGPIP2025_1 = format_EGPIP2025_1.readFeatures(json_EGPIP2025_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EGPIP2025_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EGPIP2025_1.addFeatures(features_EGPIP2025_1);
var lyr_EGPIP2025_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EGPIP2025_1, 
                style: style_EGPIP2025_1,
                popuplayertitle: 'EGPIP 2025',
                interactive: true,
                title: '<img src="styles/legend/EGPIP2025_1.png" /> EGPIP 2025'
            });

lyr_GoogleTerrain_0.setVisible(true);lyr_EGPIP2025_1.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_EGPIP2025_1];
lyr_EGPIP2025_1.set('fieldAliases', {'PROJECT NAME': 'PROJECT NAME', 'PROVINCE': 'PROVINCE', 'MUNICIPALITY': 'MUNICIPALITY', 'DISTRICT': 'DISTRICT', 'BUDGET': 'BUDGET', 'NEW': 'NEW', 'RESTORE': 'RESTORE', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'PHYSICAL ACCOMPLISHMENT': 'PHYSICAL ACCOMPLISHMENT', });
lyr_EGPIP2025_1.set('fieldImages', {'PROJECT NAME': 'TextEdit', 'PROVINCE': 'TextEdit', 'MUNICIPALITY': 'TextEdit', 'DISTRICT': 'TextEdit', 'BUDGET': 'TextEdit', 'NEW': 'Range', 'RESTORE': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'PHYSICAL ACCOMPLISHMENT': 'TextEdit', });
lyr_EGPIP2025_1.set('fieldLabels', {'PROJECT NAME': 'inline label - always visible', 'PROVINCE': 'inline label - always visible', 'MUNICIPALITY': 'inline label - always visible', 'DISTRICT': 'inline label - always visible', 'BUDGET': 'inline label - always visible', 'NEW': 'inline label - always visible', 'RESTORE': 'inline label - always visible', 'LATITUDE': 'inline label - always visible', 'LONGITUDE': 'inline label - always visible', 'PHYSICAL ACCOMPLISHMENT': 'inline label - always visible', });
lyr_EGPIP2025_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});