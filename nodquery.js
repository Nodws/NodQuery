/* 
	NodQuery v0.3 
	https://github.com/Nodws/NodQuery 
*/
(function (global) {
    function $(selector) {
        const elements = typeof selector === 'string' ? document.querySelectorAll(selector) : [selector];
        
        const obj = {
            html(content) {
                elements.forEach(el => el.innerHTML = content);
                return this;
            },
            text(content) {
                elements.forEach(el => el.textContent = content);
                return this;
            },
            hide() {
                elements.forEach(el => el.style.display = 'none');
                return this;
            },
            show() {
                elements.forEach(el => el.style.display = '');
                return this;
            },
            addClass(className) {
                elements.forEach(el => el.classList.add(className));
                return this;
            },
            removeClass(className) {
                elements.forEach(el => el.classList.remove(className));
                return this;
            },
            toggleClass(className) {
                elements.forEach(el => el.classList.toggle(className));
                return this;
            },
            hasClass(className) {
                return Array.from(elements).some(el => el.classList.contains(className));
            },
            append(content) {
                elements.forEach(el => el.insertAdjacentHTML('beforeend', content));
                return this;
            },
            prepend(content) {
                elements.forEach(el => el.insertAdjacentHTML('afterbegin', content));
                return this;
            },
            before(content) {
                elements.forEach(el => el.insertAdjacentHTML('beforebegin', content));
                return this;
            },
            after(content) {
                elements.forEach(el => el.insertAdjacentHTML('afterend', content));
                return this;
            },
            next() {
                return $(elements[0]?.nextElementSibling);
            },
            previous() {
                return $(elements[0]?.previousElementSibling);
            },
            parent() {
                return $(elements[0]?.parentElement);
            },
            val(value) {
                if (value === undefined) {
                    return elements[0]?.value;
                } else {
                    elements.forEach(el => el.value = value);
                    return this;
                }
            },
            remove() {
                elements.forEach(el => el.remove());
                return this;
            },
            attr(name, value) {
                if (value === undefined) {
                    return elements[0]?.getAttribute(name);
                } else {
                    elements.forEach(el => el.setAttribute(name, value));
                    return this;
                }
            },
            on(event, callback) {
                elements.forEach(el => el.addEventListener(event, callback));
                return this;
            },
            each(callback) {
                elements.forEach((el, idx) => callback.call(el, idx, el));
                return this;
            },
            find(selector) {
                return $(elements[0]?.querySelectorAll(selector));
            },
            get(url, callback) {
                fetch(url)
                    .then(response => response.text())
                    .then(data => callback(data));
            },
            post(url, data, callback) {
                fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                })
                .then(response => response.text())
                .then(data => callback(data));
            }
        };
        
        return obj;
    }

    global.$ = $;
})(window);
 
