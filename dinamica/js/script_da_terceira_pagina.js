/**
 * Created by Órion on 21/10/2014.
 */

function adicionarAListaParaAprender(){
    item = $("#input_assunto").val();
    if (item == ""){
        return;
    }
    mover = "<button onclick='moverParaAprendidos(this)' class='btn btn-warning mover'> Mover para aprendidos</button>";
    remover = "<button onclick='removerDaPagina(this)' class='btn btn-danger remover'> Remover</button>";
    $("#listaDeTemasAAprender").append("<li class='list-group-item'>"+item+mover+remover+"</li>");
    limpaCampoInput();
    return false;
}

function moverParaAprendidos(botao){
    parent = botao.parentElement;
    tema = parent.firstChild.textContent;
    $("#listaDeTemasJaAprendido").append("<li class='list-group-item'>" +tema+ "</li>");
    parent.remove();
}

function removerDaPagina(botao){
    botao.parentElement.remove();
}

function limpaCampoInput(){
    $("#input_assunto").val("");
}