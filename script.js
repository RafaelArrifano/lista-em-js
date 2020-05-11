var elLista = document.querySelector("#app ul");
var elButton = document.querySelector("#app button");
var elInput = document.querySelector("#app input");
var itens = ['banana'];

function renderItens() {

    elLista.innerHTML = '';

    for (item of itens) {
        var elItem = document.createElement('li'); 
        var nomeItem = document.createTextNode(item);

        var delItem = document.createElement('a');
        delItem.setAttribute('href', '#');
        var delText = document.createTextNode(' x');

        var pos = itens.indexOf(item);
        delItem.setAttribute('onclick', 'delItem(' + pos + ')');

        delItem.appendChild(delText);
        elItem.appendChild(nomeItem);
        elItem.appendChild(delItem);
        elLista.appendChild(elItem);

    }
}

renderItens();

function addItem() {
    var nomeItem = elInput.value;

    itens.push(nomeItem);
    elInput.value = '';
    renderItens();
}

elButton.onclick = addItem;

function delItem(pos){
    itens.splice(pos, 1);
    renderItens();    
}