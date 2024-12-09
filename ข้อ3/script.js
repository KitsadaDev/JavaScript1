const newElementInfo = {
    id: "myDiv",
    className: "myClass",
    content: "นี่คือ Element ที่สร้างจาก Object"
};

const createButton = document.getElementById('createButton');
const container = document.getElementById('container');

createButton.addEventListener('click', function() {
    const newElement = document.createElement('div');
    
    newElement.id = newElementInfo.id;
    newElement.className = newElementInfo.className;
    newElement.textContent = newElementInfo.content;
    
    container.appendChild(newElement);
});