// Respuestas automáticas
const responses = {
    "hola": "¡Hola! ¿En qué puedo ayudarte hoy?",
    "adiós": "¡Hasta luego! Vuelve cuando lo necesites.",
    "¿cómo puedo mejorar mi suelo?": "Puedes mejorar el suelo aplicando compost o rotando cultivos para mantener la fertilidad.",
    "¿qué cultivos son ideales para invierno?": "En invierno, puedes optar por cultivos como la col rizada, zanahorias y espinacas.",
    "¿cómo controlo las plagas de forma natural?": "Usa remedios naturales como ajo, neem o cultivos asociados para evitar plagas.",
    // Más respuestas aquí
};

// Función para enviar mensajes
function sendMessage() {
    const userInput = document.getElementById("userInput").value.trim();
    const chatContent = document.getElementById("chatContent");

    if (!userInput) return; // No enviar mensajes vacíos

    // Mostrar el mensaje del usuario
    const userMessage = document.createElement("div");
    userMessage.style.margin = "10px 0";
    userMessage.style.textAlign = "right";
    userMessage.innerHTML = `<span style="background-color: #d1ecf1; padding: 8px 12px; border-radius: 10px; display: inline-block;">${userInput}</span>`;
    chatContent.appendChild(userMessage);

    // Determinar la respuesta
    const responseMessage = document.createElement("div");
    responseMessage.style.margin = "10px 0";
    responseMessage.style.textAlign = "left";
    const lowerInput = userInput.toLowerCase();

    if (responses[lowerInput]) {
        responseMessage.innerHTML = `<span style="background-color: #f8d7da; padding: 8px 12px; border-radius: 10px; display: inline-block;">${responses[lowerInput]}</span>`;
    } else {
        responseMessage.innerHTML = `<span style="background-color: #f8d7da; padding: 8px 12px; border-radius: 10px; display: inline-block;">No entiendo esa pregunta. Por favor, intenta de nuevo.</span>`;
    }

    chatContent.appendChild(responseMessage);

    // Desplazar al final
    chatContent.scrollTop = chatContent.scrollHeight;

    // Limpiar el campo de entrada
    document.getElementById("userInput").value = "";
}

