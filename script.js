// Function to toggle navigation bar visibility
function toggleNavBar() {
    const navBar = document.getElementById('nav-bar');
    if (navBar.style.display === 'none') {
        navBar.style.display = 'block';
    } else {
        navBar.style.display = 'none';
    }
}

// Add event listener to navigation bar toggle button
document.getElementById('nav-toggle').addEventListener('click', toggleNavBar);

document.addEventListener('DOMContentLoaded', function() {
    // Function to toggle chatbot visibility
    function toggleChatbot() {
        const chatbot = document.getElementById('chatbot');
        if (chatbot.style.display === 'none') {
            chatbot.style.display = 'block';
        } else {
            chatbot.style.display = 'none';
        }
    }

    // Add event listener to chatbot button
    document.getElementById('chatbot-button').addEventListener('click', toggleChatbot);

    // Add event listener to close chatbot button
    document.getElementById('close-chatbot').addEventListener('click', toggleChatbot);
});
    // Function to redirect to WhatsApp with a message
    function redirectToWhatsApp() {
        window.location.href = "https://api.whatsapp.com/send?phone=9682959229&text=Hello%2C%20I%20have%20a%20question.";
    }
    
    // Function to send email using EmailJS
    function sendEmail() {
        const templateParams = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        fetch('/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(templateParams)
        })
        .then(response => response.json())
        .then(data => console.log(data));
    }

    // Add event listener to contact form submit
    document.getElementById('contact').addEventListener('submit', function(event) {
        event.preventDefault();
        sendEmail();
    });

    // Add event listener to chat with us button
    document.getElementById('chat-with-us').addEventListener('click', redirectToWhatsApp);
    document.getElementById('contact').addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const subject = 'New Message from Website';
        const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
        window.location.href = `mailto:upadhyayraunak189@gmail.com?subject=${subject}&body=${body}`;
    });
