
//elements

var sendBtn=document.getElementById('sendBtn');
var textbox=document.getElementById('textbox');
var chatContainer=document.getElementById('chatContainer');
var user={message:"",counter:0};
var arrayOfPossibleMessages=[

    {"message":"how are you?","response":"I am doing great !!"},
    {"message":"hi","response":"Hello"},
    {"message":"who are you?","response":"I am your Buddy !!"},
];

var questionsToAsk=[
    {"question":"what's your name ?","answer":""},
    {"question":"How old are you?","answer":""},
    {"question":"What's your Job Title?","answer":""}
]

function askQuestion(){
    if(questionsToAsk.length>user.counter){
setTimeout(() => {
    chatBotSendMessage(questionsToAsk[user.counter].question);
    user.counter++;
}, 1000);
    }
}

//Buddy Sends
function chatBotSendMessage(messageText){
    var messageElement=document.createElement('div');
    messageElement.classList.add('w-50');
    messageElement.classList.add('float-left');
    messageElement.classList.add('shadow-sm');
    
    messageElement.style.margin="10px";
    messageElement.style.padding="5px";
    messageElement.style.backgroundColor="#5a99ee";
    messageElement.style.borderRadius="40px";
    messageElement.innerHTML="<span> &nbsp;&nbsp;Buddy:</span>"+
    "<span style="+"margin-top: 10px;padding: 10px"+">"+" "+messageText+"</span>"
    messageElement.animate([{easing:"ease-in",opacity:0.4},{opacity:1}],{duration:1000})
    chatContainer.appendChild(messageElement);
    chatContainer.scrollTop=chatContainer.scrollHeight;
}

//User Sends
function sendMessage(messageText){
    var messageElement=document.createElement('div');
    messageElement.classList.add('w-50');
    messageElement.classList.add('float-right');
    messageElement.classList.add('shadow-sm');
    messageElement.style.margin="10px";
    messageElement.style.backgroundColor='#fc6d4c';
    messageElement.style.padding="5px";
    messageElement.style.borderRadius="40px";
    messageElement.innerHTML="<span>&nbsp;&nbsp;You:</span>"+
    "<span style="+"margin-top: 10px;padding: 10px"+">"+" "+messageText+"</span>"
    messageElement.animate([{easing:"ease-in",opacity:0.4},{opacity:1}],{duration:1000})
    chatContainer.appendChild(messageElement);
    //Scroll to last message
    chatContainer.scrollTop=chatContainer.scrollHeight;
}

//Responses
function processMessage(){

    if(user.message.length>5){

    //Array of results
    var result=arrayOfPossibleMessages.filter(val=>val.message.includes(user.message.toLowerCase()))
    if(result.length>0){
    var response=result[0].response;
    setTimeout(() => {
        chatBotSendMessage(response);
    }, 1000);
}else{
    setTimeout(() => {
        chatBotSendMessage("Sorry, I didn't get you "+"&#128528;");
    }, 1000);
}
    }else if(user.message=="how" || user.message=="who"){
        setTimeout(() => {
            chatBotSendMessage("Sorry, can you please type the full sentence ? "+"&#128528;");
        }, 1000);
    }else if(user.message=="Hi" || user.message=="Hello" || user.message=="hi" || user.message=="hello"){
        var result=arrayOfPossibleMessages.filter(val=>val.message.includes(user.message.toLowerCase()))
    if(result.length>0){
    var response=result[0].response;
    setTimeout(() => {
        chatBotSendMessage(response);
    }, 1000);
}
    }
    
    else{
        setTimeout(() => {
            chatBotSendMessage("Please send me a complete sentence. "+"&#128531;");
        }, 1000);
    }
}


// Coversation Start
setTimeout(() => {
    chatBotSendMessage("Hi from your Buddy "+"&#128522;")
}, 1000);

//Event call on Send button press
sendBtn.addEventListener('click',function(e){
    if(textbox.value==""){
        alert("Please type in a message");
    }else{
    let messageText=textbox.value.trim();
    user.message=messageText;
    sendMessage(messageText);
    textbox.value="";
    //questionsToAsk[user.counter-1].answer=user.message;
    //askQuestion();

    processMessage();
    }
})

// Event call on Enter Keypress
textbox.addEventListener('keypress',function(e){

if(e.which==13){
    if(textbox.value==""){
        alert("Please type in a message");
    }else{
    let messageText=textbox.value.trim();
    user.message=messageText;
    sendMessage(messageText);
    textbox.value="";
    //questionsToAsk[user.counter-1].answer=user.message;
    //askQuestion();

    processMessage();
    }
}

})