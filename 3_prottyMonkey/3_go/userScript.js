// ==UserScript==
// @name         Dynamically Parsing Object Data with TamperMonkey
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://localhost:8080/3_prottyMonkey/2_go/
// @grant        none
// ==/UserScript==

var obj = JSON.parse(text);

document.getElementById("demo").innerHTML =
obj.name + "<br>" +
obj.street + "<br>" +
obj.phone;