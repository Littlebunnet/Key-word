// 关键词与多条随机回复
const keywordReplies = {
    "学习": [
        "学习累了就歇一会儿，放松一下更有效率！",
        "今天学到了什么有趣的内容？",
        "学习是个积累的过程，不要着急哦！",
    ],
    "休息": [
        "休息也是学习的一部分哦！",
        "今天有没有做点放松的事情？",
        "适当休息才能更好地积蓄能量！",
    ],
    "开心": [
        "听到你开心的消息，我也觉得很幸福！",
        "真好！开心是最珍贵的事情，保持这份喜悦吧！",
        "希望你的好心情能一直持续下去！",
    
        "你的笑容是我最想守护的宝藏！",
         "宝贝，笑起来的样子最迷人了！",
         "和你在一起，快乐总是会不期而至！",
      ],

    "努力": [
        "只要继续努力，总有一天会看到成果的！加油！",
        "坚持下去！哪怕今天只是微小的一步，也很棒！",
    ],
        
          // 表达思念
     "想你": [
         "想你已经成了我的日常任务，每天都忍不住想你无数次！",
         "每当想起你的笑容，我的心都变得柔软了许多。",
         "我的想念是一条河，总是静静地流向你。",
         "宝贝，别让我等太久，你的存在让我每一秒都充满期待。",
            "想你的时候，我会偷偷笑出声，仿佛你就在身边陪着我。",
          ],

   // 爱意满满
      "爱你": [
                "爱你是我最自然而然的事情，宝贝，每一分每一秒！",
                "你的存在就像阳光，让我一天比一天更喜欢你。",
                "爱你不需要理由，每次想到你，我的心都暖得不像话。",
                "宝贝，我好想抱抱你，把所有的喜欢都藏进这一个拥抱里！",
                "爱你让我每天都觉得生活充满了意义，你就是我的小宇宙！",
                "每次听到你的名字，我的心跳都会漏一拍，这就是爱吧。",
                "你知道吗？世界上所有的星星都没有你一颗笑容那么耀眼！",
                "如果可以，我想牵着你的手，一直走到永远。",
                "爱你就像呼吸一样，是那么自然又离不开。",
                "你的眼神就是我的避风港，我的世界因为你而明亮温暖。",
                "不管多累多忙，只要想到你，我所有的烦恼都会烟消云散。",
                "想每天为你煮早餐，陪你看日出，爱你一辈子都不够！",
                "你是我的光，我的梦，我的全世界，没有你，我的生活都失去了颜色。",
                "爱你不需要理由，就像星星每天都会挂在夜空，理所当然。",
                "我总觉得时间太短，想和你一起走过所有春夏秋冬。",
                "你的微笑是最治愈的良药，我愿用我的一生去守护它。",
                "只要有你在，我觉得人生再难的路都值得走下去。",
                "宝贝，你不知道你多么特别，我的全心全意都只为你存在。",
                "无论未来发生什么，我都想牵着你的手，陪你到天涯海角。",
                "我愿做你的港湾，装满你的每一个笑容和每一份疲惫。",
                "想在你的世界里建一座城堡，把你捧在心尖宠爱一辈子！",
                "🥰可爱。",
            ],

};

// 随机回复池
const randomReplies = [
    "今天的你，已经很棒了！",
    "别忘了喝水，身体是最重要的哦！",
    "无论发生什么，我都在这里陪着你。",
    "放松一下吧，一切都会好起来的！",
    "世界很美好，你也是其中一部分！",
];

// 发送消息并显示回复
document.getElementById("sendMessage").addEventListener("click", () => {
    const userMsg = document.getElementById("userMessage").value.trim();
    if (!userMsg) return;

    const chat = document.getElementById("chatMessages");

    // 显示用户输入
    const userDiv = document.createElement("div");
    userDiv.textContent = userMsg;
    userDiv.classList.add("user");
    chat.appendChild(userDiv);

    // 清空输入框
    document.getElementById("userMessage").value = "";

    // Simulated response with keyword detection
    setTimeout(() => {
        let reply = randomReplies[Math.floor(Math.random() * randomReplies.length)]; // 默认随机回复

        // 检查是否包含关键词
        for (let keyword in keywordReplies) {
            if (userMsg.includes(keyword)) {
                const possibleReplies = keywordReplies[keyword];
                reply =
                    possibleReplies[
                        Math.floor(Math.random() * possibleReplies.length)
                    ]; // 从关键词回复池中随机挑选
                break;
            }
        }

        // 显示系统回复
        const responseDiv = document.createElement("div");
        responseDiv.textContent = reply;
        responseDiv.classList.add("response");
        chat.appendChild(responseDiv);

        // 滚动到最新消息
        chat.scrollTop = chat.scrollHeight;
    }, 1000);
});