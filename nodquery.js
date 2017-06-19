/* NodQuery v0.2 https://github.com/Nodws/NodQuery */
	var se = '';
	var $ = function(c){
		se = c;
		return document.querySelector(c);
	}
	Element.prototype.html = function(h){
		if(h)
		return this.innerHTML=h;
		return this.innerHTML;		
	}
	Element.prototype.text = function(t){
		if(t)
		return this.textContent =h;
		return this.textContent ;		
	}
	Element.prototype.hide = function(){
		this.style.display = 'none';
	}
	Element.prototype.show = function(){
		this.style.display = '';
	}
	Element.prototype.addClass = function(c){
			var array = c.split(' ');
			var el = this;
		    array.forEach(function(i){
		      el.classList.add(i); });
	}	
	Element.prototype.removeClass = function(c){
		  this.classList.remove(c);
	}	
	Element.prototype.toggleClass = function(c){
		if (this.classList.contains(c))
		return this.classList.remove(c);
		return this.classList.add(c);
	}
	Element.prototype.append = function(c){
		return this.innerHTML += c;
	}	
	Element.prototype.prepend = function(c){
		return this.innerHTML = c + this.innerHTML;
	}
	Element.prototype.before = function(c){
		return this.insertAdjacentHTML('beforebegin', c);
	}	
	Element.prototype.after = function(c){
		return this.insertAdjacentHTML('afterend', c);
	}	
	Element.prototype.next = function(){
		return this.nextElementSibling;
	}	
	Element.prototype.previous = function(){
		return this.previousElementSibling;
	}	
	Element.prototype.parent = function(){
		return this.parentNode;
	}	
	Element.prototype.remove = function(){
		this.parentNode.removeChild(this);
	}	
	Element.prototype.attr = function(a,b){
		if(b)
		return this.setAttribute(a,b);
		return this.getAttribute(a);	
	}
	Element.prototype.on = function(h,f){
		return this.addEventListener(h, f);
	}	
	Element.prototype.each = function(callback){
		var $obj = document.querySelectorAll(se);
		for (var i=0, len=$obj.length; i<len; i++)
    if ( callback.call($obj[i], i, $obj[i]) === false ) break;
	}
	$.ajax = function(o){
		var r = new XMLHttpRequest();
		r.open(o.type, o.url, true);
		r.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
		r.onreadystatechange = function () {
		  if (r.readyState != 4 || r.status != 200)
		   o.success(r.responseText); };
		if(typeof o.data === 'object')
		o.data = Object.keys(o.data).reduce(function(a,k){a.push(k+'='+encodeURIComponent(o.data[k]));return a},[]).join('&')

		r.send(o.data);
	}	
