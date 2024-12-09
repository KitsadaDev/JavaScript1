let formData = {
    message: '',
    type: ''
};

const form = document.getElementById('messageForm');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    formData.message = document.getElementById('messageInput').value;
    formData.type = document.getElementById('typeSelect').value;
    
    result.textContent = `Message: ${formData.message}, Type: ${formData.type}`;
});