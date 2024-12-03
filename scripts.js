// Funcionalidad para el botón de "Explora más"
const ctaBtn = document.querySelector('.cta-btn');
ctaBtn.addEventListener('click', function () {
    window.scrollTo({
        top: document.querySelector('.experiencias').offsetTop,
        behavior: 'smooth'
    });
});

// Funcionalidad para el formulario de comentarios
const commentForm = document.querySelector('.comment-form');
commentForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const commentText = commentForm.querySelector('textarea').value;
    if (commentText) {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        commentDiv.innerHTML = `<p>${commentText}</p>`;
        document.querySelector('.comments').appendChild(commentDiv);
        commentForm.querySelector('textarea').value = ''; // Limpiar el campo
    }
});

// Funcionalidad para el chatbot IA
const chatInput = document.querySelector('.chat-input input');
const chatButton = document.querySelector('.chat-input button');
const chatContent = document.querySelector('.chat-content');

chatButton.addEventListener('click', function () {
    const userMessage = chatInput.value.trim();
    if (userMessage) {
        // Mostrar el mensaje del usuario
        chatContent.innerHTML += `<div class="message user-message">${userMessage}</div>`;
        
        // Responder automáticamente con una respuesta predeterminada
        setTimeout(() => {
            const botResponse = document.createElement('div');
            botResponse.classList.add('message', 'bot-message');
            botResponse.innerHTML = `¡Hola! ¿Cómo puedo ayudarte con tus cultivos hoy?`;
            chatContent.appendChild(botResponse);
            chatContent.scrollTop = chatContent.scrollHeight; // Desplazar al final del chat
        }, 1000);
        
        chatInput.value = ''; // Limpiar el campo
        chatContent.scrollTop = chatContent.scrollHeight; // Desplazar al final
    }
});

// Funcionalidad para mostrar productos en el carrito (básico)
const productButtons = document.querySelectorAll('.product-card button');
const cart = [];

productButtons.forEach(button => {
    button.addEventListener('click', function () {
        const productName = this.parentElement.querySelector('h3').textContent;
        const productPrice = this.parentElement.querySelector('.price').textContent;
        
        // Agregar el producto al carrito
        cart.push({ name: productName, price: productPrice });
        
        alert(`Producto añadido: ${productName} por ${productPrice}`);
    });
});
