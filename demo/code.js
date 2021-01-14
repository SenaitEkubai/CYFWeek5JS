// fetch a node by its ID
let article1 = document.getElementById("article-1");
console.log(article1);
let mainHeader = document.getElementById("mainHeader");
console.log(mainHeader);

// fetch a list of nodes based on HTML tag name
let articles = document.getElementsByTagName("article");
console.log(`There are ${articles.length} articles`);

// fetch a list of nodes based on their CSS class name
let paras = document.getElementsByClassName("articleP");
console.log(`There are ${paras.length} paragraphs in all`);

// fetch a node using a query selector giving the ID of the node
let article2 = document.querySelector("#article-2");
console.log(article2);

// fetch a list of nodes using a query selector based on HTML tag name
let newsHeadlines = document.querySelectorAll("h2");
console.log(`There are ${newsHeadlines.length} headlines in all`);

console.log("Lets look at article-1...");
console.log("Parent is: ");
console.log(article1.parentNode);
console.log("Previous element is ");
console.log(article1.previousElementSibling);
console.log("Next element is ");
console.log(article1.nextElementSibling);
console.log(`There are ${article1.childNodes.length} child nodes`);
console.log("The first child node is:");
console.log(article1.childNodes[0]);
console.log("The second child node is:");
console.log(article1.childNodes[1]);
console.log(`The inner HTML of the main header is:\n${mainHeader.innerHTML}`);

let updateBtn = document.getElementById("updateButton");
// the event parameter is optional
updateButton.addEventListener("click", function (event) {
  alert("You clicked " + event.target.innerHTML);
  createNewItem();
});
// updateBtn.onclick = function () {
//   alert("You clicked the update button!");
// };
// or use updateButton.addEventListener("mouseover", function...)
updateButton.onmouseover = function (event) {
  event.target.style.backgroundColor = "red";
};
updateButton.addEventListener("mouseout", function (event) {
  event.target.style.backgroundColor = "";
});
// updateButton.onmouseout = function (event) {
//   event.target.style.backgroundColor = "";
// };

function createNewItem() {
  let newArticle = document.createElement("article"); // Create a <li> node
  let h2 = document.createElement("h2"); // Create a <h2> node
  let headline = document.createTextNode("News Header"); // Create a text node
  h2.appendChild(headline);
  newArticle.appendChild(h2);
  let section = document.createElement("section"); // Create a <section> element
  let contentP = document.createElement("p"); // Create a <p> node
  let contentText = document.createTextNode(
    "This is a new article.  Bit boring, nothing here!"
  ); // Create a text node
  contentP.appendChild(contentText);
  section.appendChild(contentP);
  newArticle.appendChild(section);
  document.getElementById("body").appendChild(newArticle); // Append <li> to <ul> with id="myList"
}
