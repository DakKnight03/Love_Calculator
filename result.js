let result = sessionStorage.getItem('result');
// const resultEl = document.getElementById('result');
// resultEl.textContent = result;

let limit = document.getElementById("limit");

let conclusion = document.getElementById("conclusion");
limit.style.color = "lightgray";
limit.addEventListener("click", function() {
alert("You can't unlock this feature yet.")
});
// if (String(result) == "bad") {
//     conclusion.textContent = "You seems to be an introvert, the way you express your love towards your partner is rather subtle, may often make people not realizing that you two are in a relationship. But that can be a good as well.";



// } else if (String(result) == "avg") {
//     conclusion.textContent = "You express your love towards to partner in an endearing and humble way: not too expressive but just enough for your partner to know that you still love and care for them.";
//     limit.style.color = "lightgray";
//     limit.addEventListener("click", function() {
//     alert("You can't unlock this feature yet.")
//     });

// } else if (String(result) == "good") {
//     conclusion.textContent = "You are someone who would do ANYTHING for your partner and you two's relationship. You are very expressive, you always show how much you love your partner through actions that even you are unaware of.";
    
//     limit.style.color = "lightgray";
//     limit.addEventListener("click", function() {
//     alert("You can't unlock this feature yet.")
//     });
    
// } else {
//     conclusion.textContent = "You express your love towards to partner in an endearing and humble way: not too expressive but just enough for your partner to know that you still love and care for them.";
//     limit.style.color = "lightgray";
//     limit.addEventListener("click", function() {
//     alert("You can't unlock this feature yet.")
//     });
// }

let retake = document.getElementById("retake");
retake.addEventListener("click", function(e) {
    sessionStorage.clear();
});