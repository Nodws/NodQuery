window.onload=function(){
	var $ = function(c){
		if(c.indexOf('.') == 0)
			return document.getElementsByClassName(c.substring(1))[0];
		if(c.indexOf('#') == 0)
			return document.getElementById(c.substring(1));
		return false
	}
	Element.prototype.html = function(h){
		if(h)
		return this.innerHTML=h;
		return this.innerHTML;
		
	}
}
