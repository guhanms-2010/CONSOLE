var Guest_names_array = [];
function submit_name(){
 var Guest_name = document.getElementById("names").value;
 Guest_names_array.push(Guest_name);
 document.getElementById("submitted_names").innerHTML = Guest_names_array;
 console.log(Guest_names_array);
 var check_lenghth = Guest_names_array.length;
 console.log(check_lenghth);
}
function show_name(){
    var a = Guest_names_array.join("<br>");
    console.log(Guest_names_array);
    document.getElementById("Show_names").innerHTML = a;

}
function sort_names(){
    Guest_names_array.sort();
    var b = Guest_names_array.join("<br>");
    console.log(Guest_names_array);
    document.getElementById("sorted_names").innerHTML = b;
}

function search_names(){
    var y = document.getElementById("search").value;
    var found = 0;
    var l;
    for(l=0;l<Guest_names_array.length; l++){
        if(y==Guest_names_array[l]){
            found = found+1;
        }
    }   
    document.getElementById("searched_name").innerHTML = "name found"+found+"time/s";
    console.log("found name"+found+"time/s")
}