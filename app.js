// TODO APP //Muhammad wasi


var list = document.getElementById('list');


firebase.database().ref('todos').on('child_added',function(data){
    //create li tag with text node

  var li = document.createElement('li');
  var li_text = document.createTextNode(data.val().value);
  li.appendChild(li_text);


  //create delete button

  var del_btn = document.createElement('button');
  var del_text = document.createTextNode("REMOVE");
  del_btn.setAttribute("class",'delete');
  del_btn.setAttribute('id',data.val().key)
  del_btn.setAttribute("onclick","deleteItem(this)")
  del_btn.append(del_text);  ////


  //create edit button//

  var edit_btn = document.createElement("button");
  var edit_text = document.createTextNode("EDIT");
  edit_btn.setAttribute("class",'edit');
  edit_btn.setAttribute("onclick",'editItem(this)');
  edit_btn.setAttribute('id',data.val().key)
  edit_btn.appendChild(edit_text);

  li.appendChild(edit_btn)
  
  li.appendChild(del_btn)
 
 
  list.appendChild(li);

  console.log(li);
})

function addTodo(){

  var todo_item = document.getElementById("todo-item");
   
  var key = firebase.database().ref('todos').push().key

  var todo = {
    value: todo_item.value,
    key: key
  }
  console.log(todo)

  firebase.database().ref('todos').child(key).set(todo)

  //create li tag with text node

  // var li = document.createElement('li');
  // var li_text = document.createTextNode(data.val().value);
  // li.appendChild(li_text);


  // //create delete button

  // var del_btn = document.createElement('button');
  // var del_text = document.createTextNode("REMOVE");
  // del_btn.setAttribute("class",'delete');
  // del_btn.setAttribute("onclick","deleteItem(this)")
  // del_btn.append(del_text);  ////


  // //create edit button//

  // var edit_btn = document.createElement("button");
  // var edit_text = document.createTextNode("EDIT");
  // edit_btn.setAttribute("class",'edit');
  // edit_btn.setAttribute("onclick",'editItem(this)');
  // edit_btn.appendChild(edit_text);

  // li.appendChild(edit_btn)
  
  // li.appendChild(del_btn)
 
 
  // list.appendChild(li);

  // console.log(li);

  todo_item.value = ''; //blank box

}


 

//Enter button function

var input = document.getElementById("todo-item");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(enter) {
  // Number 13 is the "Enter" key on the keyboard
  if (enter.keyCode === 13) {
    // Cancel the default action, if needed
    enter.preventDefault();
    // Trigger the button element with a click
    document.getElementById("wasi").click();
  }
});//////


//delete function

function deleteItem(e){
    e.parentNode.remove()
    firebase.database().ref('todos').child(e.id).remove()
   
  
}
//del all

function delAll(){
  firebase.database().ref('todos').remove()
    list.innerHTML = "";
}

//edit Function

function editItem(e){
    var val = prompt("Enter What To Do ", e.parentNode.firstChild.nodeValue)
    var editTodo  = {
      value: val,
      key: e.id  
     }
     firebase.database().ref('todos').child(e.id).set(editTodo)
     e.parentNode.firstChild.nodeValue = val; 
  
}

//===== END OF CODE =====//







