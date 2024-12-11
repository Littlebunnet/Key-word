// script.js
const keywordResponses = {
    "学习": [
        "学习累了就歇一会儿，放松一下更有效率！",
        "今天学到了什么有趣的内容？",
        "学习是个积累的过程，不要着急哦！"
    ],
    "开心": [
        "听到你开心的消息，我也觉得很幸福！",
        "真好！开心是最珍贵的事情，保持这份喜悦吧！",
        "希望你的好心情能一直持续下去！"
    ]
};

const randomResponses = [
    "今天的你，已经很棒了！",
    "别忘了喝水，身体是最重要的哦！",
    "无论发生什么，我都在这里陪着你。",
    "放松一下吧，一切都会好起来的！",
    "世界很美好，你也是其中一部分！"
];

const messagesContainer = document.getElementById('messages');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');

function scrollToBottom() {
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function showUserMessage(msg) {
    const div = document.createElement('div');
    div.className = 'user-msg';
    div.textContent = msg;
    messagesContainer.appendChild(div);
    scrollToBottom();
}

function showSystemMessage(msg) {
    const div = document.createElement('div');
    div.className = 'system-msg';
    div.textContent = msg;
    messagesContainer.appendChild(div);
    scrollToBottom();
}

function getResponseFromKeywords(inputText) {
    for (let keyword in keywordResponses) {
        if (inputText.includes(keyword)) {
            const possibleResponses = keywordResponses[keyword];
            return possibleResponses[Math.floor(Math.random() * possibleResponses.length)];
        }
    }
    return randomResponses[Math.floor(Math.random() * randomResponses.length)];
}

function sendMessage() {
    const text = userInput.value.trim();
    if (text !== "") {
        showUserMessage(text);
        userInput.value = "";
        setTimeout(() => {
            const response = getResponseFromKeywords(text);
            showSystemMessage(response);
        }, 1000);
    }
}

sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') sendMessage();
});