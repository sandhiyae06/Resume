const chatMessages = document.getElementById('chat-messages');
const messageBox = document.getElementById('message-box');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', () => {
    const message = messageBox.value;

    // Create a new message element
    const messageElement = document.createElement('div');
    messageElement.classList.add('message',   
 'user-message');
    messageElement.textContent = message;   


    // Append the message to the chat messages container
    chatMessages.appendChild(messageElement);

    // Send the message to your email (replace 'your_email@example.com' with your actual email address)
    const emailSubject = 'Chat Message from Website Visitor';
    const emailBody = `Message:\n${message}`;

    const mailtoLink = `mailto:esandhiyaa2000@gmail.com?subject=${emailSubject}&body=${emailBody}`;

    window.location.href = mailtoLink;

    // Clear the message box
    messageBox.value = '';

    // Simulate a bot response (replace with your actual bot logic)
    const botResponse = "Thanks for your message!!";
    const botMessageElement = document.createElement('div');
    botMessageElement.classList.add('message', 'bot-message');
    botMessageElement.textContent   
 = botResponse;
    chatMessages.appendChild(botMessageElement);

    // Scroll the chat messages to the bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
});

const thankYouMessage = document.getElementById('thank-you-message');

window.addEventListener('scroll', () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;

    if (scrollTop + window.innerHeight >= scrollHeight) {
        thankYouMessage.classList.remove('hidden');
    }
});