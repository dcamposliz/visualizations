d3.text("nasdaq.csv", function(data) {

    // parsing row data and assigning it to parsedCSV
    var rows = d3.csv.parseRows(data);

    // selecting element where we create stuff
    // and appending table
    var nasdaqTable = d3.select("#dataHere")
        
        .append("table");

        // handling table headers
        nasdaqTable.append("thead").append("tr")
                .attr("id", "headers")
            .selectAll("th")
            .data(rows[0])
            .enter().append("th")
                .attr("class", "x-column-header-text")
            .text(function(d) {
                return d;
            });

        // handling table body
        nasdaqTable.append("tbody")
            .selectAll("tr").data(rows.slice(1))
            .enter().append("tr")
                .attr("class", "x-grid-row")
            .selectAll("td")
            .data(function(d){return d;})
            .enter().append("td")
                .attr("class", "x-grid-cell-inner")
            .text(function(d){return d;})
});