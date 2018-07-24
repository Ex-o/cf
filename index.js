$(document).ready(function() {
    $("#discordBtn").submit(function(e) {

        e.preventDefault();
        document.URL = "google.com";
    });

    $(".mdl-button").click(function(){
        //alert("555");
        $(".to-hide").addClass("hidden");
        $("#handleGrid").removeClass("hidden");
     })
});