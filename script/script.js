let documentItems = document.querySelectorAll('body a, h2, p, h3, h1')
document.querySelector('.header__right-search-input').oninput = function() {
    let searchValue = this.value.trim();
    if (searchValue != '') {
        documentItems.forEach(function(elem) {
            if (elem.innerText.search(searchValue) == -1) {
                console.log('false')
                elem.innerHTML = elem.innerText
            } else {
                let str = elem.innerText;
                elem.innerHTML = insertMark(str, elem.innerText.search(searchValue), searchValue.length)
                console.log('true')
            }
        })
    } else {
        documentItems.forEach(function(elem) {
            elem.innerHTML = elem.innerText
        });
    }
}

function insertMark(string, position, len) {
    //возвращает строку от начала до совпадения + <mark>Строку от точки совпадения до её длины</mark> + строка от точки совпадения до её длины
    return string.slice(0, position) + '<mark>' + string.slice(position, position + len) + '</mark>' + string.slice(position + len);
}