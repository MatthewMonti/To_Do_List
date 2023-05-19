
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

 	//li.addEventListener("dblclick",crossOut);

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
// ONLY SECTION THAT MAKES SENSE TO ME 

function newItem(){

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


//STEP 2 CROSSING AN ITEM OUT MY VERSION WON'T WORK 
//WAS IN MATERIAL
//add event listener in jQuery format 
//on is equivalent to addEventListener
//dblclick = double click 
// WHY DOES THIS VERSION OF MY CODE NOT WORK?
// li.on("dblclick",function(){
//  li.addClass("strike");
// });

//STEP 2 AS DEMONSTRATED IN "ANSWERS"
//2. Crossing an item out:
function crossOut() {
  li.toggleClass("strike");
}



 
//STEP 3 DELETE BUTTON 


//I CAN'T GET THE CODE BELOW TO WORK WITH NEW NAME FOR BUTTON I DON'T UNDERSTAND WHY ? X CLOSE BUTTON JUST ASKS AS X LETTER & WHY SORTABLE NOT COME UP AS A FUNCTION?
/*
  let x = $('<x></x>');
  x.append(document.createTextNode('X'));
  li.append(x);

  x.on("click", deleteListItem);
    function deleteListItem(){
      li.addClass("delete")
  }

  //STEP 4 SORT OUT GUEST LIST
    $('#list').sortable();
}
*/

//3. Adding a delete button
let crossOutButton = $('<crossOutButton></crossOutButton>');
crossOutButton.append(document.createTextNode('X'));
li.append(crossOutButton);

crossOutButton.on("click", deleteListItem);
function deleteListItem(){ 
	li.addClass("delete")	
	}
 $('#list').sortable();
}

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




