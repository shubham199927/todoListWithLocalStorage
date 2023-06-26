function save(){

   var note =   document.getElementById('inputfield').value;
   

   if(note == ""){
    alert("Please Enter a value");
   }
 else{
    
        var leftInLeft = document.createElement('li');
    leftInLeft.innerText = note;
    document.getElementById('myList').appendChild(leftInLeft);


    //Adding Elements to LocalStorage
    var todos =  JSON.parse(localStorage.getItem("todos")) || [];
    todos.push(note);
    localStorage.setItem("todos", JSON.stringify(todos));

 }




 document.getElementById('inputfield').value = "";
}

function show() {
   var todos = JSON.parse(localStorage.getItem("todos")) || [];
   var olElement = document.querySelector("#myList");
 
   // Clearing any existing list items
   olElement.innerHTML = "";
 
   // Looping through the todos array
   for (var i = 0; i < todos.length; i++) {
     // Creating a new list item
     var liElement = document.createElement("li");
     // Setting the text of the list item to the todo item
     liElement.textContent = todos[i];
     // Appending the list item to the ordered list
     olElement.appendChild(liElement);
   }
 }
 