$(document).ready(function(){
    $(".btn-output").click(function(){
        var txt = $(".text").val(); 
        var sty = $(".sty-css").val();
        $("style").append(sty);
        $(".output").html(txt);
    });
});