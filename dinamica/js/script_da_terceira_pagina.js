/**
 * Created by Órion on 21/10/2014.
 */

$( document ).ready(function() {
    $( "form" ).submit(function() {
        item = $("#input_assunto").val();
        if (item == "") {
            return;
        }
        item = "<p>"+item+"</p>";
        mover = "<button class='btn btn-warning mover'> Mover para aprendidos</button>";
        remover = "<button class='btn btn-danger remover'> Remover</button>";
        $("#listaDeTemasAAprender").append("<li class='list-group-item'>" + item + mover + remover + "</li>");
        limpaCampoInput();
        return false;
    });

    function limpaCampoInput(){
        $("#input_assunto").val("");
    }

    $("#listaDeTemasAAprender").on("click", ".mover", function() {
        var parent = $(this).parent();
        var tema = parent.find("p").text();
        $("#listaDeTemasJaAprendido").append("<li class='list-group-item'>" + tema + "</li>");
        parent.remove();
    });

    $("#listaDeTemasAAprender").on("click", ".remover", function(){
        $(this).parent().remove();
    });
});

