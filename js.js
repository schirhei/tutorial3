var chatStr = '';

function replaceEmojis(){
    chatStr = chatStr.replace(">:(", "<img class='emoji' src='img/3.gif' />");
    chatStr = chatStr.replace(":)", "<img class='emoji' src='img/1.jpg' />");
    chatStr = chatStr.replace(":(", "<img class='emoji' src='img/2.png' />");
    
    chatStr = chatStr.replace(":o", "<img class='emoji' src='img/4.gif' />");
    chatStr = chatStr.replace(":U", "<img class='emoji' src='img/5.gif' />");
    chatStr = chatStr.replace(":D", "<img class='emoji' src='img/6.gif' />");
    chatStr = chatStr.replace("booger", "******");
    chatStr = chatStr.replace("frick", "gently caress");
    chatStr = chatStr.replace("fly", "floating speck of dust");
    chatStr = chatStr.replace("Jeff", "Gheff");
    chatStr = chatStr.replace("blackberry", "mostly irrelevant");
}
// p1 chat input //
function changeChatStr(){
    chatStr = document.getElementById("p1input").value;
    document.getElementById("p1input").value = "";
    //if (chatStr == ":)"){
     //   chatStr = "<img class='emoji' src='img/1.jpg' />";
   // } else if (chatStr == ":("){
    //    chatStr = "<img class='emoji' src='img/2.png' />"
   // }
    
    replaceEmojis();
    
}
// p2 chat input //
function changeChatStr2(){
    chatStr = document.getElementById("p2input").value;
    document.getElementById("p2input").value = "";
    
    replaceEmojis();
}

// chat display //
function createChat(chatNum){
    var ndiv = document.createElement('div');
    ndiv.innerHTML = chatStr;
    
    if (chatNum == 1){
        ndiv.style.backgroundColor = "#AFA";
    } else if (chatNum == 2){
        ndiv.style.backgroundColor = "#FAA";
    }
    
    ndiv.style.padding = "10px";
    document.getElementById('chatDisplay').appendChild(ndiv);
    
}

// interactions // 
document.getElementById('p1input').addEventListener("keyup", function(ev){
    if(ev.keyCode == 13){
    changeChatStr();
    createChat(1);
    
}
        
});

document.getElementById('p2input').addEventListener("keyup", function(ev){
    if(ev.keyCode == 13){
    changeChatStr2();
    createChat(2);
    
    }
        
});