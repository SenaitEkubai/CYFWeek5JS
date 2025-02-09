let mydocument = document;

/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
let listOfPElements = document.getElementsByTagName("p");
console.log(`Number of p tags is: ${listOfPElements.length}`);

let firstDivElement = document.querySelector("div");
console.log(firstDivElement);

let jumboText = document.getElementById("jumbotron-text");
console.log(jumboText);

let nestedPElementsInPrimary = document.querySelectorAll(".primary-content p");
console.log(nestedPElementsInPrimary.length);
/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
let alertText = document.getElementById("alertBtn");
alertText.addEventListener("click", function () {
  console.log("Thanks for visiting Bikes for Refugees!");
});
/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
let buttonBackgroundColorChange = document.getElementById("bgrChangeBtn");
buttonBackgroundColorChange.addEventListener("click", function () {
  document.body.style.backgroundColor = "yellow";
});
/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
let;
/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
let links = document.getElementById("largerLinksBtn");
links.addEventListener("click", function () {
  let all = document.querySelectorAll("a");
});
