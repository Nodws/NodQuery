/* NodQuery v0.2 https://github.com/Nodws/NodQuery */
	var se = 0;
	var $ = function(c){
		se = c;
		return document.querySelector(c);
	}
	Element.prototype.html = function(h){
		if(h)
		return this.innerHTML=h;
		return this.innerHTML;		
	}
	Element.prototype.hide = function(){
		this.style.display = 'none';
	}
	Element.prototype.show = function(){
		this.style.display = '';
	}
	Element.prototype.addClass = function(c){
		if (this.classList)
		  this.classList.add(c);
		else
		  this.className += ' ' + c;
	}	
	Element.prototype.removeClass = function(c){
		if (this.classList)
		  this.classList.remove(c);
	}
	Element.prototype.append = function(c){
		this.appendChild(c);
	}
	Element.prototype.before = function(c){
		this.insertAdjacentHTML('beforebegin', c);
	}	
	Element.prototype.after = function(c){
		this.insertAdjacentHTML('afterend', c);
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
