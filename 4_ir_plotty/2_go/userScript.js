// ==UserScript==
// @name          nasdaq scrape and plot
// @namespace     http://www.davidacampos.com
// @description   something
// @match         http://localhost:8080/*
// @version       1
// @require       http://cdn.plot.ly/plotly-latest.min.js
// @require       https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js
// ==/UserScript==
// do it

console.log("test");
var headers = $("#dataHere").find(".x-column-header-text");
var rez = $("#dataHere").find(".x-column-header-text").map(
  function(i, v) {
      console.log(i);
      console.log($(v).text());
    return (i, $(v).text());
  });
// console.log(rez);
// feels ugly and bad
var d = new Array();
for (i = 0; i < headers.size(); i++) {
  d[i] = new Array();
}
var rowData = $("#dataHere").find(".x-grid-row");

var w = $("#dataHere").find(".x-grid-row").map(
  function(i, v) {
    // console.log('i:' +  i);
    return $(v).find(".x-grid-cell-inner").map(
      function(x, y) {
        // console.log('x:' + x);
        // console.log('y:' + $(y).text());
        d[Number(x)].push($(y).text());
        return (x, $(y).text().toString());
      });
    //      console.log($(v).text());
  }
);
// console.log(w);
//          .find(".x-grid-cell-inner");

$('#OpenPlotly').click(function() {
  TESTER = document.getElementById('results');
  Plotly.plot(TESTER, [{
    x: d[0], //[1, 2, 3, 4, 5],
    y: d[1]
  }], { //[1, 2, 4, 8, 16] }], {
    margin: {
      t: 0
    }
  });
  /* Current Plotly.js version */
  console.log(Plotly.BUILD);
});
$('#data-size').text(rowData.size());
var z = rowData.map(function() {
  return $(this).show().text();
});
var y = z.map(function() {
  // alert(this);
});
$('#data').text(d);
