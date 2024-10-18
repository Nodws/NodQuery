NodQuery
========

Lightweight, minimal and simple jquery-alternative library 

Setup
====
Just include the script on header or footer
`<script src="./nodquery.js"></script>`


Usage
===
```js
$("#test") // . for class selector # for id

$("[type=submit], #test div:last-of-type") // query selector

$("#test").html() // html content getterr

$("#test").html("<b>okai!</b>") // html content setter

$("#test").html().length // shows 12

$("#test").append("<p>new line</p>").addClass("new") // appends <p> and adds class to #test

$("#test").hasClass("new") // true
```

Event methods
===
```js
// click,	keypress,	submit, dblclick,	keydown,	change, mouseenter,	keyup,	focus, mouseleave, blur
$("#test").on('click',function(){ 
  $(this).addClass('clicked');
});

$("#select").on("change",_=>{ 
  $("#test").html('Selected:'  $("#select").val());  
});


```
