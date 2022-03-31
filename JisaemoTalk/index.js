let index1;
let index2;
const messagesContainer = document.getElementById("messages");

function show () {
  document.querySelector(".background").className = "background show";
}
function close () {
  document.querySelector(".background").className = "background";
}
document.querySelector("#show").addEventListener('click', show);
document.querySelector("#close").addEventListener('click', close);


function colorChange() {
  index1 = Math.floor(Math.random() * userTexts.length);
  index2 = Math.floor(Math.random() * userTexts[index1].length);
  document.getElementById('result').innerHTML=userTexts[index1][index2];
}
function colorChange2() {
  input = userTexts[index1][index2];
  addToChat(input);
}

  function addToChat(input) {
    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.className = "response";
    userDiv.innerHTML = `<span>${input}어때?</span><img src="https://res.cloudinary.com/ugwutotheeshoes/image/upload/v1625055846/Movie%20booth/download_cwsons.png" alt="Robot cartoon" height="20px" width="20px"S>`;
    messagesContainer.appendChild(userDiv);

    let jiDiv = document.createElement("div");
    let jiImg = document.createElement("img");
    let jiText = document.createElement("span");
    jiDiv.id = "ji";
    jiImg.src = "https://res.cloudinary.com/dkqhugcpp/image/upload/v1648751513/13_2_fkcs3x.jpg";
    jiImg.className = "avatar";
    jiDiv.className = "ji response";
    jiText.innerText = "Typing...";
    jiDiv.appendChild(jiImg);
    jiDiv.appendChild(jiText);
    messagesContainer.appendChild(jiDiv);

    messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;


    i = Math.floor(Math.random() * jiReplies[index1].length);
    setTimeout(() => {
      jiText.innerHTML = jiReplies[index1][i];
    }, 2000
    )
  }
