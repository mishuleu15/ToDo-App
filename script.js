const enterButton = document.getElementById("enter");
const input = document.getElementById("userInput");
let ul = document.querySelector("ul");
let item = document.getElementsByTagName("li");

const inputLength = () => input.value.length;

const listLength = () => item.length;

const createListElement = () => {
    let li = document.createElement("li"); // create an element li
    li.appendChild(document.createTextNode(input.value)); //makes text from input field the li text
    ul.appendChild(li);
    input.value = ""; // reset text input field


    //START STRIKETHROUGH
    // because it's in the function, it only adds it for new items
    const crossOut = () => li.classList.toggle("done");

    li.addEventListener("click", crossOut);
    //END STRIKETHROUGH

    // START ADD DELETE BUTTON
    let delBtn = document.createElement("button");
    delBtn.appendChild(document.createTextNode("X"));
    li.appendChild(delBtn);
    delBtn.addEventListener("click", deleteListItem);
    // END ADD DELETE BUTTON

    //Add class delete (Display: none)
    function deleteListItem() {
		li.classList.add("delete")
	}
}

const addListAfterClick = () => {
    if(inputLength() > 0) {  //makes sure that an empty input field doesn't create a li
        createListElement();
    }
}

const addListAfterKeypress = (event) => {
    if(inputLength() > 0 && event.which === 13) { //this now looks to see if you hit "enter"/"return"
        //the 13 is the enter key's keycode, this could also be display by event.keyCode === 13
		createListElement();
    }
}

enterButton.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);