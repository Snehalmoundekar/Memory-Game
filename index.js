let gameBox = document.querySelector(".container .game");
let popup = document.getElementById("winnerPopup"); 

const emojis = ["😁", "😁", "😆", "😆", "😊", "😊", "😇", "😇", "🙃", "🙃", "🥲", "🥲", "😍", "😍", "🥰", "🥰"];

let shuffledEmojis = emojis.sort(() => (Math.random() > .5) ? 2 : -1);
let selectedEmoji = [];

for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.classList.add("item");

    box.onclick = (e) => {
        e.target.classList.add("boxOpen");
        let boxes = document.querySelectorAll(".boxOpen");
        setTimeout(() => {
            if (boxes.length > 1) {
                if (boxes[0].innerHTML === boxes[1].innerHTML) {
                    boxes[0].classList.add("boxMatch");
                    boxes[1].classList.add("boxMatch");
                    boxes[1].classList.remove("boxOpen");
                    boxes[0].classList.remove("boxOpen");

                    if (document.querySelectorAll(".boxMatch").length === emojis.length) {
                        popup.style.display = "flex";
                    }
                } else {
                    boxes[1].classList.remove("boxOpen");
                    boxes[0].classList.remove("boxOpen");
                }
            }
        }, 500);
    };
    box.innerHTML = shuffledEmojis[i];
    gameBox.appendChild(box);
}
