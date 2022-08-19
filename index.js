$(document).ready(function () {
    
    $("#warn").hide();
    $("#clear").click(function (e) { 
        $("#result").val("");
        $("#warn").hide();
        
    });

    $("#erase").click(function (e) { 
        
        var oldval = $("#result").val();
        

        var newval = oldval.substring(0,oldval.length -1);

        $("#result").val(newval);
        $("#warn").hide();


    });
    
});

$("body").keypress(function (e) { 
    var keycode = (e.keyCode ? e.keyCode : e.which);
    
    if(keycode == "99" ){
        $("#result").val("");
        $("#warn").hide();
    }
        

    if(keycode == '48' || keycode == '49' || keycode == '50' || keycode == '51' || keycode == '52' || keycode == '53' || keycode == '54' || keycode == '55' || keycode == '56' || keycode == '57' || keycode == '42' || keycode == '43' || keycode == '45'|| keycode == '46'|| keycode == '47'   ){
        
        

        const result = String.fromCharCode(keycode);

       $("#warn").hide();

           document.getElementById("result").value += result
    }
    
    if(keycode == "13"){
        try {
        
            var p = $("#result").val();
        
            var q = eval(p);
        
            $("#result").val(q);
    
            $("#warn").hide();
        } catch (error) {
          
            $("#warn").show();
        }
    }

});
document.addEventListener("keydown", KeyCheck);  //or however you are calling your method
    function KeyCheck(event)
    {
       var KeyID = event.keyCode;
       switch(KeyID)
       {
          case 8:
             
            var oldval = $("#result").val();
        

            var newval = oldval.substring(0,oldval.length -1);
    
            $("#result").val(newval);
            $("#warn").hide();
          break;
          default:
          break;
       }
    }
function btnclick(val){ 

        $("#warn").hide();

           document.getElementById("result").value += val
        
}

$("#equal").click(function (e) { 
   
    try {
        
        var p = $("#result").val();
    
        var q = eval(p);
    
        $("#result").val(q);

        $("#warn").hide();
    } catch (error) {
      
        $("#warn").show();
    }
    
});
