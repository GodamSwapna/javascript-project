// function changeColor(){
//     let container=document.getElementById("container1");
//     console.log(container.value);
//     let input=document.getElementById("input1");

//     document.getElementById("container1").style.backgroundColor=container;
// }
// changeColor();


// Change color in javascript

var quotes = [
	{
		"quote": "Be the change you wish to see.",
		"author": "Mahatma Gandhi",
		"link": "https://en.wikipedia.org/wiki/Mahatma_Gandhi"
	},
	{
		"quote": "Social progress can be measured by the social position of the female sex.",
		"author": "Karl Marx",
		"link": "https://en.wikipedia.org/wiki/Karl_Marx"
	},
	{
		"quote": "I like the religion that teaches liberty, equality and fraternity.",
		"author": "B. R. Ambedkar",
		"link": "https://en.wikipedia.org/wiki/B._R._Ambedkar"
	},
	{
		"quote": "If you tremble with indignation at every injustice then you are a comrade of mine.",
		"author": "Ernesto Che Guevara",
		"link": "https://en.wikipedia.org/wiki/Che_Guevara"
	},
	{
		"quote": "Teaching is a very noble profession that shapes the character, caliber, and future of an individual. If the people remember me as a good teacher, that will be the biggest honour for me.",
		"author": "Abdul Kalam",
		"link": "https://en.wikipedia.org/wiki/A._P._J._Abdul_Kalam"
	}
];

// list of colors to show as background colors
var bgColors = ["red", "pink", "yellow", "green", "white", "darkcyan", "silver", "BlanchedAlmond", "chocolate", "darkorchid"];

// const quote=document.querySelector("#quote");
// const author=document.querySelector("#author");
// const btn=document.querySelector("#btn");

// btn.addEventListener("click",getQuote);
function getQuote(){
	for( let i=0;i<bgColors.length;i++){
		console.log(i)
	}
// 	quote.innerHtml ='"${data.content}"';
// 	author.innerHTML=data.author;
// })
}
// window.onload = function start(){
//     // write code here
//     document.getElementById("quote").innerHTML=quotes[i].changeQuote;
//     document.getElementById("author").innerHTML=quotes[i].author;
//     document.getElementById("link").innerHTML=quotes[i].link;
//     document.getElementById("slideso").innerHTML=bgColors[i];

//     }

// function changeQuote() {
//         for(let i=0;i<quotes.length;i++){
// document.getElementById("quote").innerHTML=quotes[0].changeQuote;
// document.getElementById("author").innerHTML=quotes[0].author;
// document.getElementById("link").innerHTML=quotes[0].link;
// document.getElementById("slideso").innerHTML=bgColors[0];

    //     }
    // }
// changeQuote();
