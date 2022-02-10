const navButton = document.querySelector("button[aria-expanded]")
const main = document.querySelector(".aside-wrapper")

function toogle(){
    navButton.setAttribute("aria-expanded","false");
    console.log(navButton)
}
main.addEventListener("click",toogle)
function toogleNav(){
    const expanded = navButton.getAttribute("aria-expanded") === "true" || false;
    navButton.setAttribute("aria-expanded",!expanded);
    console.log(navButton)
}

navButton.addEventListener("click",toogleNav)


const element = document.querySelector(".copy")
const newElement = document.querySelector(".copy2")

console.log(String(element.outerHTML.split(" ")).split(""))
function addElementFunction(element){
    let array  = String(element.outerHTML.split(" ")).split("");
    let newArray =  array.map(x => x == ">" || x=="<"? `<span class="red">${x}</span>`:x);
    let arr = newArray.join("").split("\n").join("<br>").replace(/,/g,"&nbsp");
    return arr
}
function addElement(newNode,element){
     newNode.innerHTML = addElementFunction(element)
}

function elementADD(element){
for(let i = 0 ; i < element.childElementCount ;i++){
     if(i%2 == 0){
     let newelement = document.querySelector(`.${element.children[i].classList[1]}`)
     let parent = document.querySelector(`.${element.children[i+1].classList[1]}`)
     addElement(parent,newelement)}
}
}
 function addCodeSnippets(element){
        if(element !== null ){
            elementADD(element)
        }
 }

 addCodeSnippets(element)
 addCodeSnippets(newElement)
 