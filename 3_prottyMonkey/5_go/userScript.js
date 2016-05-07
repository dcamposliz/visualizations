// ==UserScript==
// @name         Scrape data off IR report
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://demo.impactradius.com/secure/advertiser/Adv_Performance_Report/r21/report/viewReport.report?handle=adv_performance_by_channel
// @grant        none
// ==/UserScript==

var aNode   = document.createElement ('a');
var aText   = document.createTextNode ('Click here to console log things');
aNode.href  = '#';
aNode.appendChild (aText);
document.body.insertBefore (aNode, document.body.firstChild);

aNode.addEventListener ("click", stuff, false);

		function stuff(zEvent) {
            console.log("things");
            var data1 = document.getElementById("gridview-1094");
            console.log(data1);
            var parsedData1 = $(data1),
            data2 = $data1.find('#x-grid-cell-inner');
		}

// Append "RSS Title" to #someElement
$( "#someElement" ).append( $title.text() );
 
// Change the title to "XML Title"
$title.text( "XML Title" );
 
// Append "XML Title" to #anotherElement
$( "#anotherElement" ).append( $title.text() );
</script>