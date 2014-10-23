/**
 * Created by Órion on 21/10/2014.
 */

function adicionarAListaParaAprender(){
    item = $("#input_assunto").val();
    mover = "<button onclick='moverParaAprendidos()' class='btn btn-warning mover'> Mover para aprendidos</button>";
    remover = "<button onclick='removerDaPagina()' class='btn btn-danger remover'> Remover</button>";
    $("#listaDeTemasAAprender").append("<li class='list-group-item'>"+item+mover+remover+"</li>");
    limpaCampoInput();
    return false;
}

function moverParaAprendidos(){
    $(".mover").click(function(){
        $parent = $(this).parent("li");
        tema = $parent[0].childNodes[0].data;
        $("#listaDeTemasJaAprendido").append("<li class='list-group-item'>" +tema+ "</li>");
        $parent.remove();
    });
}

function removerDaPagina(){
    $(".remover").click(function(){
        $(this).parent("li").remove();
    });
}

function limpaCampoInput(){
    $("#input_assunto").val("");
}