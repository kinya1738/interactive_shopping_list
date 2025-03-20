const shoppingList = ["Managu", "Mrenda", "Matumbo"]
//utility functions for DOM manipulation

function createAnElement(li){
   return document.createElement(li)
}

function addText(element, text){
    return (element.innerText = "text");
}

function appendChild(parentElement, childElement){
    return parentElement.appendChild(childElement);
}

function select(selector){
    return document.querySelector(selector);
}

function listen(element, event, callback){
    return document.addEventListener(event, callback)
}

function addAttribute(element, attribute, content){
    return element.setAttribute(attribute, content)
}


document.addEventListener("DOMContentLoaded", displayItems)
listen(document, 'DOMcontentloaded', displayItems)
const ol = select("ol");



function displayItems(){
    shoppingList.forEach((item) => {
        const li = document.createAnElement("li")
        li.setAttribute("class", "yooo")
        addText(li, item)
        appendChild(ol,li);
    })
}