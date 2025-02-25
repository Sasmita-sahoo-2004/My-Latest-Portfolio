const layers = document.querySelectorAll(".layer");
const container = document.querySelector(".container");
const nav = document.querySelector(".navigation");
const tabs = nav.querySelectorAll("ul li a");
const hamburger = document.querySelector(".hamburger");
const buttons = document.querySelectorAll("button, .btn, input[type='button'], input[type='submit']");
let revealText1 = container?.querySelector(".layer5 .testimonial h1");

// The column transition animation.
function collapse() {
    layers.forEach((layer) => {
        if (layer.classList.contains("active")) {
            layer.classList.remove("active");
        }
    });
    revealText1?.classList.remove("reveal");
}

function home() {
    collapse();
    layers[0]?.classList.add("active");
}

function about() {
    collapse();
    layers[1]?.classList.add("active");
}

function services() {
    collapse();
    layers[2]?.classList.add("active");
}

function portfolio() {
    collapse();
    layers[3]?.classList.add("active");
}

function comments() {
    collapse();
    layers[4]?.classList.add("active");
    revealText1?.classList.add("reveal");
}

function contact() {
    collapse();
    layers[5]?.classList.add("active");
}

// The hamburger animation:
hamburger?.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav?.classList.toggle("active");
});

// HOME
let content = document.querySelector(".content");

// Check if content and required paragraphs exist
if (content && content.querySelectorAll("p").length > 1) {
    content.querySelectorAll("p")[1].innerHTML = content
        .querySelectorAll("p")[1]
        .textContent.replace(/\S/g, `<span>$&</span>`);
}

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        tabs.forEach((tab) => {
            tab.classList.remove("active");
        });
        tab.classList.add("active");
    });
});

// Add CSS for proper z-index stacking
function addResponsiveCSS() {
    // Check if our style element already exists
    let styleElement = document.getElementById("responsive-fixes-style");
    if (!styleElement) {
        // Create style element if it doesn't exist
        styleElement = document.createElement("style");
        styleElement.id = "responsive-fixes-style";
        document.head.appendChild(styleElement);
    }
    
    // Add all our CSS fixes
    styleElement.textContent = `
        /* Z-index stacking context fixes */
        .hamburger {
            position: relative;
            z-index: 1000 !important;
        }
        
        .navigation, .navigation.active {
            position: fixed;
            z-index: 999 !important;
        }
        
        .container {
            position: relative;
            z-index: 10;
        }
        
        /* Mobile nav styles */
        @media (max-width: 768px) {
            .navigation.active {
                display: block !important;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100vh;
                background-color: rgba(0, 0, 0, 0.9);
                z-index: 999 !important;
                padding-top: 60px;
            }
            
            .navigation.active ul {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            
            .navigation.active ul li {
                margin: 15px 0;
            }
        }
        
        /* Responsive button styles */
        .btn-xs, button.btn-xs, input[type="button"].btn-xs, input[type="submit"].btn-xs {
            padding: 6px 12px;
            font-size: 12px;
        }
        
        .btn-sm, button.btn-sm, input[type="button"].btn-sm, input[type="submit"].btn-sm {
            padding: 8px 16px;
            font-size: 14px;
        }
        
        .btn-md, button.btn-md, input[type="button"].btn-md, input[type="submit"].btn-md {
            padding: 10px 20px;
            font-size: 16px;
        }
        
        .btn-lg, button.btn-lg, input[type="button"].btn-lg, input[type="submit"].btn-lg {
            padding: 12px 24px;
            font-size: 18px;
        }
        
        /* Chatbot fixed positioning with z-index */
        #chatbot {
            position: fixed;
            z-index: 1001 !important;
            box-shadow: 0 5px 25px rgba(0, 0, 0, 0.3);
        }
        
        /* Screen size specific styles */
        .screen-xs .container {
            padding: 10px;
        }
        
        .screen-sm .container {
            padding: 15px;
        }
        
        .screen-md .container, .screen-lg .container, .screen-xl .container {
            padding: 20px;
        }
    `;
}

// Handle responsive behavior based on screen size
function handleResponsiveLayout() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // Apply responsive class to document for global styling
    document.body.classList.remove("screen-xs", "screen-sm", "screen-md", "screen-lg", "screen-xl");
    
    if (windowWidth < 576) {
        document.body.classList.add("screen-xs");
    } else if (windowWidth < 768) {
        document.body.classList.add("screen-sm");
    } else if (windowWidth < 992) {
        document.body.classList.add("screen-md");
    } else if (windowWidth < 1200) {
        document.body.classList.add("screen-lg");
    } else {
        document.body.classList.add("screen-xl");
    }
    
    // Background and container adjustments
    if (windowWidth < 768) {
        // Mobile view
        container?.classList.remove("desktop", "tablet");
        container?.classList.add("mobile");
        document.body.style.backgroundSize = "cover";
        
        // Set the navigation to appear on top when active
        if (nav) {
            nav.style.zIndex = "999";
        }
        
        // Auto-collapse navigation on mobile after clicking a link
        tabs.forEach(tab => {
            tab.addEventListener("click", () => {
                nav?.classList.remove("active");
                hamburger?.classList.remove("active");
            });
        });
    } else if (windowWidth < 1024) {
        // Tablet view
        container?.classList.remove("desktop", "mobile");
        container?.classList.add("tablet");
        document.body.style.backgroundSize = "cover";
    } else {
        // Desktop view
        container?.classList.remove("mobile", "tablet");
        container?.classList.add("desktop");
        document.body.style.backgroundSize = "cover";
    }
    
    // Responsive button sizing
    buttons.forEach(button => {
        if (windowWidth < 576) {
            // Extra small screens
            button.classList.add("btn-xs");
            button.classList.remove("btn-sm", "btn-md", "btn-lg");
        } else if (windowWidth < 768) {
            // Small screens
            button.classList.add("btn-sm");
            button.classList.remove("btn-xs", "btn-md", "btn-lg");
        } else if (windowWidth < 992) {
            // Medium screens
            button.classList.add("btn-md");
            button.classList.remove("btn-xs", "btn-sm", "btn-lg");
        } else {
            // Large screens
            button.classList.add("btn-lg");
            button.classList.remove("btn-xs", "btn-sm", "btn-md");
        }
    });
    
    // Adjust any fixed size elements to be responsive
    const fixedElements = document.querySelectorAll("[style*='width'][style*='px'], [style*='height'][style*='px']");
    fixedElements.forEach(element => {
        // Remove fixed width/height if they exist
        if (windowWidth < 992) {
            if (element.style.width && element.style.width.includes('px')) {
                element.style.width = "100%";
            }
            if (element.style.height && element.style.height.includes('px')) {
                element.style.height = "auto";
            }
        }
    });
    
    // Adjust chatbot size and ensure it's on top
    const chatbot = document.getElementById("chatbot");
    if (chatbot) {
        // Set high z-index to ensure it's on top
        chatbot.style.zIndex = "1001";
        
        if (windowWidth < 576) {
            chatbot.style.width = "95%";
            chatbot.style.height = "300px";
            chatbot.style.left = "2.5%";
            chatbot.style.bottom = "10px";
            chatbot.style.right = "auto";
        } else if (windowWidth < 768) {
            chatbot.style.width = "90%";
            chatbot.style.height = "400px";
            chatbot.style.left = "5%";
            chatbot.style.bottom = "20px";
            chatbot.style.right = "auto";
        } else {
            chatbot.style.width = "350px";
            chatbot.style.height = "500px";
            chatbot.style.left = "auto";
            chatbot.style.right = "20px";
            chatbot.style.bottom = "20px";
        }
        
        // Make sure position is fixed
        chatbot.style.position = "fixed";
    }
    
    // Adjust layers for responsive design
    layers.forEach(layer => {
        if (windowWidth < 768) {
            layer.style.width = "100%";
            layer.style.maxWidth = "100%";
        } else if (windowWidth < 992) {
            layer.style.width = "80%";
            layer.style.maxWidth = "800px";
        } else {
            layer.style.width = "";
            layer.style.maxWidth = "";
        }
    });
    
    // Ensure the hamburger menu stays on top
    if (hamburger) {
        hamburger.style.zIndex = "1000";
        hamburger.style.position = "relative";
    }
}

// Create a viewport meta tag to ensure proper scaling
function ensureViewportMeta() {
    let viewportMeta = document.querySelector("meta[name='viewport']");
    if (!viewportMeta) {
        viewportMeta = document.createElement("meta");
        viewportMeta.name = "viewport";
        viewportMeta.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no";
        document.head.appendChild(viewportMeta);
    }
}

// Call on page load and whenever window is resized
window.addEventListener("load", function() {
    ensureViewportMeta();
    addResponsiveCSS();
    handleResponsiveLayout();
});
window.addEventListener("resize", handleResponsiveLayout);

// ✅ Load event listeners when the DOM is ready
document.addEventListener("DOMContentLoaded", function () {
    ensureViewportMeta();
    addResponsiveCSS();
    
    const sendBtn = document.getElementById("send-btn");
    const chatInput = document.getElementById("chat-input");
    
    if (sendBtn) {
        sendBtn.addEventListener("click", sendMessage);
    }
    
    if (chatInput) {
        chatInput.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                sendMessage();
            }
        });
    }
    
    // Initialize responsive layout
    handleResponsiveLayout();
});

// ✅ Function to toggle chatbot visibility
function toggleChatbot() {
    var chatbot = document.getElementById("chatbot");
    if (chatbot) {
        chatbot.style.display = chatbot.style.display === "flex" ? "none" : "flex";
    }
}

function sendMessage() {
    var inputField = document.getElementById("chat-input");
    var chatBody = document.getElementById("chat-body");

    if (!inputField || !chatBody) return;

    var message = inputField.value.trim().toLowerCase();
    if (message === "") return;

    // Append user message
    var userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.innerText = message;
    chatBody.appendChild(userMessage);

    inputField.value = "";
    chatBody.scrollTop = chatBody.scrollHeight;

    // ✅ Basic Greetings & Small Talk
    const basicResponses = {
        "hi": "Hello,! 😊 How can I help you?",
        "hello": "Hey there! 👋 How's your day going?",
        "how are you": "I'm just a chatbot, but thanks for asking! 😊",
        "who are you": "I am Sasmita's personal AI friend! 🤖",
        "what do you do": "I provide information about Sasmita's professional work.",
        "bye": "Goodbye! Have a great day! 👋",
        "who is sasmita?": "Sasmita is a Btech-cse student at cutm",
        "hallo":"hi",
        "hey":"Namaskarm",
        "thank you": "You're welcome! Let me know if you need more help. 😊"
    };

    // ✅ Predefined Questions & Short Answers
    const professionalQuestions = {
        "1": "Sasmita is a student now but also an AI researcher and ML engineer",
        "2": "She specializes in AI, ML, DL, but yeah, she loves all new technologies.. 🚀",
        "3": "Her research focuses on NLP, Digital Twin, and Generative AI.",
        "4": "She is skilled in Data Science, Power BI, Frontend, and ML modelling.",
        "5": "Goodbye! Have a great day! 👋"
    };

    if (basicResponses[message]) {
        displayBotResponse(basicResponses[message]);
    } else if (professionalQuestions[message]) {
        displayBotResponse(professionalQuestions[message]);
    } else {
        fetchChatbotResponse(message); // Process custom questions
    }
}

// ✅ Function to display bot responses
function displayBotResponse(response) {
    const chatBody = document.getElementById("chat-body");
    if (!chatBody) return;

    let botReply = document.createElement("div");
    botReply.className = "bot-message";
    botReply.innerText = response;
    chatBody.appendChild(botReply);
    chatBody.scrollTop = chatBody.scrollHeight;
}

// ✅ Fetch Chatbot Response from LangChain API
const LANGCHAIN_API_KEY = "lsv2_pt_";

async function fetchChatbotResponse(userMessage) {
    const chatBody = document.getElementById("chat-body");
    if (!chatBody) return;

    let botTyping = document.createElement("div");
    botTyping.className = "bot-message";
    botTyping.innerText = "Typing...";
    chatBody.appendChild(botTyping);
    chatBody.scrollTop = chatBody.scrollHeight;

    try {
        const response = await fetch("https://api.langchain.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${LANGCHAIN_API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-4",
                messages: [
                    { role: "system", content: "You are Sasmita's AI assistant. Answer questions about her career, research, and expertise in AI, ML, IoT, and robotics." },
                    { role: "user", content: userMessage }
                ],
                temperature: 0.7,
                max_tokens: 100
            })
        });

        const data = await response.json();
        botTyping.remove();

        let botReply = document.createElement("div");
        botReply.className = "bot-message";
        botReply.innerText = data.choices[0].message.content || "I'm not sure, but I'd love to learn! 🚀";
        chatBody.appendChild(botReply);
        chatBody.scrollTop = chatBody.scrollHeight;

    } catch (error) {
        console.error("Error:", error);
        botTyping.innerText = "Sasmita is currently teaching me. After I learn, I will respond to you. Thank you!";
    }
}

// ✅ Function to show options
function showOptions() {
    const chatBody = document.getElementById("chat-body");
    if (!chatBody) return;

    let botMessage = document.createElement("div");
    botMessage.className = "bot-message";
    botMessage.innerHTML = `
        Choose a question or type your own question:<br>
        1️⃣ Who is Sasmita? <br>
        2️⃣ What is Sasmita's expertise? <br>
        3️⃣ What is Sasmita's research about? <br>
        4️⃣ What skills does Sasmita have? <br>
        5️⃣ Exit chat. <br><br>
        Or just say "Hi" to start a conversation! 😊
    `;
    chatBody.appendChild(botMessage);
    chatBody.scrollTop = chatBody.scrollHeight;
}

// Call function to display options at the start
document.addEventListener("DOMContentLoaded", showOptions);

