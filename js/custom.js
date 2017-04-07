 var text = ["<a href='https://github.com/ayushxx7'>I'm Here</a>", "<a href='https://facebook.com/ayush.mandowara'>I'm Also Here</a>", "<a href='https://www.twitter.com/ayushxx7'>And Here</a>","<a href=https://www.google.co.in/search?q=ayushxx7>Because, Why Not?</a>"];
 //var color = ["red","green","orange"]   
    var counter = 0;
    var elem = document.getElementById("here");
    
    
    function change() {    
     //elem.className += " colorlink";   
     //elem.style.color = color[counter];
     elem.innerHTML = text[counter];
        counter++;
        if(counter >= text.length) { counter = 0; }
    }
    setInterval(change, 5000);
    

$("#af").click(function(){
    $("#awhat").toggle();
    $("#ahow").toggle();
});

$("#awhat").click(function(){
    $("#awhat1").toggle();
});

$("#ahow").click(function(){
    $("#ahow1").toggle();
});


$("#fa").click(function(){
    $("#fwhat").toggle();
    $("#fhow").toggle();
});

$("#fwhat").click(function(){
    $("#fwhat1").toggle();
});

$("#fhow").click(function(){
    $("#fhow1").toggle();
});


$("#ww").click(function(){
    $("#cm").toggle();
    $("#ad").toggle();
    $("#adt").toggle();

});

$("#cm").click(function(){
    $("#cwhat").toggle();
    $("#cwhy").toggle();
    $("#chow").toggle();
    //$("#cwhat1").hide();
});


$("#cwhat").click(function(){
    $("#cwhat1").toggle();
});

$("#chow").click(function(){
    $("#chow1").toggle();
});

$("#cwhy").click(function(){
    $("#cwhy1").toggle();
});

