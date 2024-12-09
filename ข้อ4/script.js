const items = [
    { id: 1, name: "รายการ 1" },
    { id: 2, name: "รายการ 2" },
    { id: 3, name: "รายการ 3" }
];

const myList = document.getElementById("myList");

items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.name;
    
    li.addEventListener('click', function() {
        alert(`คุณคลิกที่: ${item.name}`);
    });
    
    li.style.cursor = 'pointer';
    
    myList.appendChild(li);
});