let good = 0;
let avg = 0;
let bad = 0;
$("#loading").hide();

let button = document.getElementsByClassName("button");
for (i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function(e) {
		e.preventDefault();
		e.target.style.color = "white";
		e.target.style.backgroundColor = "lightcoral";
		e.target.style.borderColor = "lightcoral";
        let getAtt = e.target.getAttribute("att");
		console.log(getAtt);
		
		let parent = e.target.parentNode;
		let buttons = parent.getElementsByTagName("button");
		for (i = 0; i < buttons.length; i++) {
			buttons[i].disabled = true;
		}


        if (getAtt == "good") {
			good += 1;
        } else if (getAtt == "avg") {
			avg += 1;
		} else if (getAtt == "bad") {
			bad += 1;
		}
	
	})
}

$("#finish").click(function(e) {
	e.preventDefault();
	$("#loading").show();
	
	if (good >= 3) {
		sessionStorage.setItem("result2", "good");
	} else if (avg >= 3) {
		sessionStorage.setItem("result2", "avg");
	} else if (bad >= 3) {
		sessionStorage.setItem("result2", "bad");
	}
	
	setTimeout(function() {
	$("#loading").hide();
	window.location.href = "result2.html";
	}, 1500);	
})