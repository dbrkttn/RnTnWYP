var wms_layers = [];


        var lyr_OpenTopoMap_0 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            //'type': 'base',
            'opacity': 0.700000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_TitikUkurRadonThoroninBqm3_2 = new ol.format.GeoJSON();
var features_TitikUkurRadonThoroninBqm3_2 = format_TitikUkurRadonThoroninBqm3_2.readFeatures(json_TitikUkurRadonThoroninBqm3_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikUkurRadonThoroninBqm3_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikUkurRadonThoroninBqm3_2.addFeatures(features_TitikUkurRadonThoroninBqm3_2);
var lyr_TitikUkurRadonThoroninBqm3_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikUkurRadonThoroninBqm3_2, 
                style: style_TitikUkurRadonThoroninBqm3_2,
                popuplayertitle: "Titik Ukur (Radon;Thoron in Bq/m3)",
                interactive: true,
                    title: '<img src="styles/legend/TitikUkurRadonThoroninBqm3_2.png" /> Titik Ukur (Radon;Thoron in Bq/m3)'
                });

lyr_OpenTopoMap_0.setVisible(true);lyr_GoogleSatelliteHybrid_1.setVisible(false);lyr_TitikUkurRadonThoroninBqm3_2.setVisible(true);
var layersList = [lyr_OpenTopoMap_0,lyr_GoogleSatelliteHybrid_1,lyr_TitikUkurRadonThoroninBqm3_2];
lyr_TitikUkurRadonThoroninBqm3_2.set('fieldAliases', {'Easting': 'Easting', 'Northing': 'Northing', 'Titik': 'Titik', 'Seri 30': 'Seri 30', 'Seri 28': 'Seri 28', });
lyr_TitikUkurRadonThoroninBqm3_2.set('fieldImages', {'Easting': 'TextEdit', 'Northing': 'TextEdit', 'Titik': 'TextEdit', 'Seri 30': 'TextEdit', 'Seri 28': 'TextEdit', });
lyr_TitikUkurRadonThoroninBqm3_2.set('fieldLabels', {'Easting': 'hidden field', 'Northing': 'hidden field', 'Titik': 'hidden field', 'Seri 30': 'header label - always visible', 'Seri 28': 'header label - always visible', });
lyr_TitikUkurRadonThoroninBqm3_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});