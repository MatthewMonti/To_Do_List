
//function newItem(){

//javascript
//1. Adding a new item to the list of items: 
//   let li = document.createElement("li");
//   let inputValue = document.getElementById("input").value;
 //  let text = document.createTextNode(inputValue);
//   li.appendChild(text);

 //  if (inputValue === '') {
  //   alert("You must write something!");
 //  } else {
 //    let list = document.querySelector('#list');
 //    list.appendChild(li);
 //  }

 //2. Crossing out an item from the list of items:
  // function crossOut() {
 	//	li.classList.toggle("strike");
 //	}

 	li.addEventListener("dblclick",crossOut);

 //3(i). Adding the delete button "X": 
   //let crossOutButton = document.createElement("crossOutButton");
 //	crossOutButton.appendChild(document.createTextNode("X"));
 	//li.appendChild(crossOutButton);

 	//crossOutButton.addEventListener("click", deleteListItem);
 //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
  // function deleteListItem(){
 	//	li.classList.add("delete")
 	//}
 // 4. Reordering the items: 
   $('#list').sortable();

//}


 //JAVASCRIPT WITH JQUERY 
//  STEP 1 ADDING NEW ITEM TO LIST OF ITEMS:
//  $ &or jQuery is variable assigned a function 

//Create List
 let li = $('<li></li>');

 //.val() for adding a value = # of items on list
 let inputValue = $('#input').val();
//append value to input
  li.append(inputValue);
//Message alerts
//if message is NOT complete message user
if(inputValue === '') {
  alert("Message is incomplete");
} else {
  $('#list').append(li);
}

//BONUS PRACICING jQUERY code 
//DMV says 30 max characters for a full name given 
$('input').each(function(i){
if(inputValue().length<=30){
  alert('Name must be 30 characters or less');
}
});

//STEP 2 CROSSING AN ITEM OUT 
//add event listener in jQuery format 
//on is equivalent to addEventListener
//dblclick = double click 
 li.on("dblclick",function(){
  li.addClass("strike");
 });

 
//STEP 3 DELETE BUTTON 
let x = $('<x></x>');
x.append(document.createTextNode('X'));
li.append(x);

 x.on("click", deleteListItem);
  function deleteListItem(){
    li.addClass("delete")
 }
  $('#list').sortable();


// If you get stuck, you can look below for the jQuery code. However, try yourself to convert the vanilla JS code provided to jQuery first.

  /*
// jQuery Code
//1. Adding a new item to the list:

  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    $('#list').append(li);
  }
//2. Crossing an item out:
  function crossOut() {
		li.toggleClass("strike");
	}

	li.on("dblclick", function crossOut() {
		li.toggleClass("strike");
	});
//3. Adding a delete button
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

//   crossOutButton.on("click", deleteListItem);
//   function deleteListItem(){
// 		li.addClass("delete")
// 	}
   $('#list').sortable();
*/










