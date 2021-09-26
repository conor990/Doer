
$(function() {
    
    $("#add").on("click", function() {
    
        // get input value 
        var val = $("input").val();
        if(val !== '') {
        
            // input not empty create list item 
            var li = $("<li></li>").text(val);            
            
            // create remove button 
            var but = $("<button class='removebtn'>X</button>");
            // append in list remove button
            $(li).append(but);
            // add event to remove button 
            $(but).on("click", function(){ 
            // current object : li .remove() 
                $(li).toggle(1000);
            });
            
            // add item to page 
            $("#mylist").append(li);
            // clear input 
            $("input").val("");
            
        }
    });
});