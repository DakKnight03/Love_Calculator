let result = sessionStorage.getItem("result");
let result2 = sessionStorage.getItem("result2");

let point = sessionStorage.getItem("point");
let fun = document.getElementById("fun");
fun.textContent = "Fun fact: based on your name and your partner's name, our 'super advanced Love Calculator' calculated that you two's compatibility is around " + point + ".";

let conclusion = document.getElementById("conclusion");

if (String(result) == "bad" && String(result) == String(result2)) {
    conclusion.textContent = "Based on your answers, we have come to the conclusion that you two are both introverts. You let your partner goes in the top list easily, you prove how much important your partner is to you by being there when they need you without worrying what others might think. You don't fall in love much easily but when you fall, you fall hard. And so is your partner. What a beautiful story.";


} else if (String(result) == "good" && String(result) == String(result2)) {
    conclusion.textContent = "Based on your answer, we can tell that you and your partner are both very extroverts. You two would have no problems seeing others hanging out with people other than yourself, you won't feel lonely when you two are not together and respect others' personal space. Seems like a fun story to take part in.";


} else if (String(result) == "avg" && String(result) == String(result2)) {
    conclusion.textContent = "Although no relationship is perfect, many of us are striving to have a healthy relationship. A healthy relationship is one that involves respect, trust, and, of course, communication at its core, but also other components as well";
    
} else if (String(result) != String(result2)) {
    conclusion.textContent = "From what it seems, you two are two opposite people in terms of personality. In spite of your differences, you two make great romantic partners. Perhaps it's a case of opposites attracting -- what one partner lacks, the other more than makes up for. They balance each other out.";
}

let retake = document.getElementById("retake");
retake.addEventListener("click", function(e) {
    sessionStorage.clear();
});