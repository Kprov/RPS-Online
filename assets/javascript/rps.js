$(document).ready(function(){
        var rock = "";
        var paper = "";
        var scissors = "";
        var wins = 0;
        var losses = 0;
        var ties = 0;
        var userChoices = ["Rock", "Paper", "Scissors"];
        var buttonDiv = $("<div>");
        
        userChoices.forEach(display);
        buttonDiv += "</div>";
        document.getElementById("btnz").innerHTML = buttonDiv;

        function display(value) {
            buttonDiv += "<button class='button btn-lg btn-primary buttons text-center'>" + value + "</button>";
        }
        
})