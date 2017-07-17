NodQuery
========

Small and personal jquery-like selector library 

Setup
====
Just include the script on header or footer<br>
<script src="nodquery.js"></script>


Usage
===
$(".test") // class selector<br>
$("#test") // id selector<br>
$("#test").html() // html content selector<br>
$("#test").html('works') // html content replace<br>
$("#test").html().length // now shows 5
$("#select").on("change",function(e){ $("#test").html('Selected:' this.val())  });

Event methods
===
click,	keypress,	submit,
dblclick,	keydown,	change,
mouseenter,	keyup,	focus
mouseleave,	 	blur
