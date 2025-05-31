const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
})
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
})
}

   


    function toggleChatbot() {
        const chatbot = document.getElementById("chatbot-box");
        chatbot.style.display = chatbot.style.display === "flex" ? "none" : "flex";
    }

    function sendMessage(e) {
        if (e.key === "Enter") {
            const input = document.getElementById("chatbot-input");
            const msg = input.value.trim();
            if (msg) {
                addMessage("user", msg);
                input.value = "";

                // Simple bot reply
                setTimeout(() => {
                    addMessage("bot", "Thanks for your message! We’ll get back to you soon.");
                }, 500);
            }
        }
    }

    function addMessage(sender, text) {
        const msgBox = document.getElementById("chatbot-messages");
        const div = document.createElement("div");
        div.className = "message " + sender;
        div.innerText = text;
        msgBox.appendChild(div);
        msgBox.scrollTop = msgBox.scrollHeight;
    }

    


    function toggleChatbot() {
        const chatbot = document.getElementById("chatbot-box");
        chatbot.style.display = chatbot.style.display === "flex" ? "none" : "flex";
    }

    function sendMessage(e) {
        if (e.key === "Enter") {
            const input = document.getElementById("chatbot-input");
            const msg = input.value.trim();
            if (msg) {
                addMessage("user", msg);
                input.value = "";

                // Bot replies based on keywords
                setTimeout(() => {
                    const reply = getBotReply(msg);
                    addMessage("bot", reply);
                }, 500);
            }
        }
    }

    function addMessage(sender, text) {
        const msgBox = document.getElementById("chatbot-messages");
        const div = document.createElement("div");
        div.className = "message " + sender;
        div.innerText = text;
        msgBox.appendChild(div);
        msgBox.scrollTop = msgBox.scrollHeight;
    }

    function getBotReply(userMsg) {
        const msg = userMsg.toLowerCase();

        if (msg.includes("working hours") || msg.includes("time")) {
            return "Our working hours are 24/7 ✅";
        } else if (msg.includes("delivery") || msg.includes("days")) {
            return "We deliver within 3-4 working days 🚚";
        } else if (msg.includes("return")) {
            return "You can return items within 7 days 🛍️";
        } else if (msg.includes("payment")) {
            return "We accept Cash on Delivery, JazzCash, and Easypaisa 💸";
        } else if (msg.includes("contact")) {
            return "You can contact us at cara@gmail.com 📧";
        } else {
            return "Kindly ask relevant question 😊";
        }
    }



    