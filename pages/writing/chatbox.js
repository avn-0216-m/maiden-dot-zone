var input = null;
var text = null;
var maidenTimer = null;

var maidenMessages = ["hey. sorry, only just saw this lol", "i'll have the story posted here in a sec", "just sit tight"]

var messagesSent = 0;

const init = () => {
    input = document.getElementById("chatbox-input");
    input.addEventListener('keydown', keystroke);
    text = document.getElementById("chatbox-text");
}

const keystroke = (e) => {
    if(e == undefined || e.key != "Enter"){
        return;
    }

    console.log("sending message");

    messagesSent++;

    sendMessage("user", input.value);
    input.value = "";
    if(maidenTimer == null){
        maidenTimer = setInterval(respond, 10000)
    }
    if(messagesSent > 3){
        setTimeout(block, 3000);
    }
    
}

const block = () => {
    clearInterval(maidenTimer);
    input.disabled = true;
    input.value = "";
    input.placeholder = "You cannot send messages to this user.";
}

const sendMessage = (name, msg) => {
    text.innerText += `\n${name}: ${msg}`
}

const respond = () => {
    response = maidenMessages.shift();
    if(response == undefined){
        setTimeout(block, 10000);
        return;
    }

    sendMessage("maiden", response);
    sfx.play();
}