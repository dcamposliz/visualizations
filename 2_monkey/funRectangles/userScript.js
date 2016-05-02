// ==UserScript==
// @name          WhateverDoer
// @namespace     http://www.davidacampos.com
// @description   dont know
// @match         http://localhost:8888/monkey/little_jQuery/index.html
// @match         http://*
// @match         https://*
// @version       1
// @require       https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js
// ==/UserScript==
// let's do whatever


//    THIS CODE IS INTENDED FOR BROWSER EXTENSIONS SUCH AS
//    TAMPERMONKEY AND/OR GREASEMONKEY


window.setTimeout(function(){
  location.reload();
}, 10000);

$(document).ready(function() {
   $('div').mouseenter(function() {
       $(this).animate({
           height: '+=10px',
       });
   });
   $('div').mouseleave(function() {
       $(this).animate({
           height: '-=10px'
       });
   });
   $('div').click(function() {
       $(this).animate({
           height: '+=50px',
           width: '+=50px',
       });
   });
});