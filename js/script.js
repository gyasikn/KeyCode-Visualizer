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

  var element = document.getElementById("content");  // changes the innter html of specific DOM elements
  element.innerHTML = `
    <div class="card has-background-dark has-text-warning">
      <div class="card-content">
        <div class="media">
          <div class="media-content has-text-centered">
            <h1>You Pressed: ${event.key}</h1> 
            <br> 
            <h2>The Key Code is: ${event.keyCode}</h2>
            <br>
            <button class="button is-warning is-inverted"><a href="/">Reset</a></button>
          </div>
        </div>
      </div>
    </div>
    `;

})



  // THIS CODE OVERWRITES EVERYTHING ON THE PAGE WITH NEW HTML CONTENT - NO GOOD
  // var element = document.getElementById("content");
  // element.innerHTML = `
  // <h1>You Pressed: ${event.key}</h1> 
  // <br> 
  // <h2>The Code is: ${event.keyCode}</h2>
  // <button><a href="/">Go Back</a></button>
  // `;