window.onkeydown = pressedKey;

function pressedKey(x) {
  x.preventDefault();

  $('#keyCode').text(x.keyCode) // display keyCode
  $('#keyName').text(x.key)     // display the actual key text or name

  // console.log(x.keyCode);
  // console.log(x.key);
}


document.addEventListener("keydown", function(event) {

  console.log(event); // testing keydown events

  // replaces existing body content with updated content.
  document.body.innerHTML = `
  <h1>You Pressed: ${event.key}</h1> 
  <br> 
  <h2>The Code is: ${event.keyCode}</h2>
  <button><a href="/">Go Back</a></button>
  `;
  
})





// var results = document.createElement("P");
// var text = document.createTextNode(
//   `You Pressed: ${event.key} & The Code Is: ${event.keyCode}`
// );

// results.appendChild(text);
// document.body.appendChild(results);

// this works but i cant figure out how to remove the previous element after creating a new one.