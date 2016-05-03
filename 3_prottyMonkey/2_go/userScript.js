// ==UserScript==
// @name         Click to generate a graph
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://localhost:8080/3_prottyMonkey/2_go/
// @grant        none
// ==/UserScript==

var aNode   = document.createElement ('a');
var aText   = document.createTextNode ('Click here to generate a cool NASDAQ graph');
aNode.href  = '#';
aNode.appendChild (aText);
document.body.insertBefore (aNode, document.body.firstChild);

aNode.addEventListener ("click", makeplot, false);

		function makeplot(zEvent) {
		    zEvent.preventDefault ();
    		zEvent.stopPropagation ();
    		alert('it ran!');

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