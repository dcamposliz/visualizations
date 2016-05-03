// ==UserScript==
// @name          let's make a graph appear in the page
// @namespace     http://www.davidacampos.com
// @description   something
// @match         http://localhost:8080/*
// @version       1
// @require       https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js
// ==/UserScript==
// do it


	// THIS IS MEANT TO BE RUN ON TAMPERMONKEY BROWSER EXTENSION FOR CHROME

		function makeplot() {
		    Plotly.d3.csv("nasdaq.csv", function(data){ processData(data); } );
		}
		function processData(allRows) {

		    console.log(allRows);
		    var x = [], y = [], standard_deviation = [];

		    for (var i=0; i<allRows.length; i++) {
		        row = allRows[i];
		        x.push( row['date'] );
		        y.push( row['close'] );
		    }
		    console.log( 'X',x, 'Y',y, 'SD',standard_deviation );
		    makePlotly( x, y, standard_deviation );
		}

		function makePlotly( x, y, standard_deviation ){
		    var plotDiv = document.getElementById("plot");
		    var traces = [{
		        x: x,
		        y: y
		    }];

		    Plotly.newPlot('myDiv', traces,
		        {title: 'Plotting CSV data from AJAX call'});
		}
		  makeplot();