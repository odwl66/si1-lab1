/**
 * Created by Órion on 21/10/2014.
 */


function adicionarAListaParaAprender(){
    item = $("#input_assunto").val();
    mover = "<button onclick='moverParaAprendidos()' class='btn btn-warning'> Mover para aprendidos</button>";
    remover = "<button onclick='removerDaPagina()' class='btn btn-danger'> Remover</button>";
    $("#listaDeTemasAAprender").append("<li class='list-group-item'>"+item+mover+remover+"</li>");
    limpaCampoInput();
    return false;
}

function moverParaAprendidos(){
    $( document ).on( "click", function( event ) {
        tema = $( event.target ).closest( "li")[0].childNodes[0].data;
        removerDaPagina();
        $("#listaDeTemasJaAprendido").append("<li class='list-group-item'>" +tema+ "</li>");
    });
}

function removerDaPagina(){
    $( document ).on( "click", function( event ) {
        $( event.target ).closest( "li" ).remove();
    });
}

function limpaCampoInput(){
    $("#input_assunto").val("");
}