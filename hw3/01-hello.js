// Add your code here

//fetch main element
const main = document.querySelector("main");

//create section element as child node for main
const sectionElement = document.createElement("div");
sectionElement.className = "container";

//create image element as child node for section element
const createImgElement = document.createElement("img");
createImgElement.className = "img";
createImgElement.src = "../images/vipulp.png";
createImgElement.alt = "vipul smiling for the camera";
createImgElement.width = "200";
sectionElement.appendChild(createImgElement);

//create a para element
const createParaElement = document.createElement("p");

//create a span element to separate first sentence with the rest
const firstSentence = document.createElement("span");
const restSentence = document.createElement("span");

firstSentence.textContent = `Hey 👋, My name is Vipul, and I `;
restSentence.textContent = `am currently pursuing my master's in
computer science. I am more inclined towards web development and would
like to explore new web development frameworks and libraries.
Previously, I worked as a software engineer at The Modern Data
Company, where we developed data platforms. I am still learning how to
craft beer, and my hobbies include going on trails and road trips with
friends.
`;

createParaElement.className = "bio";

//add style to the first sentence
firstSentence.style.fontWeight = 600;

//append the span elements to the p element
createParaElement.appendChild(firstSentence);
createParaElement.appendChild(restSentence);

//append the p element to the section element
sectionElement.appendChild(createParaElement);

//append the section element to the main element;
main.appendChild(sectionElement);
