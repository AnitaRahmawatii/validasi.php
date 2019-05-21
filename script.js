
<button type="button"
onclick="document.getElementById('demo').innerHTML = Date()">
Click me to display Date and Time.</button>

<p id="demo"></p>

function cari() {
    var kata=document.formcari.keyword.value;
    var hasil="http://www.google.com/search?q="+ kata;
    window.open(hasil, 'google', config='height=500', 'width=750')
}
