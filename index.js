// $("button").click(function(e) {
//     console.log($(e.target).attr("video"))

// })
let point;
let name1, name2;
name1 = $("#name1").val()
name2 = $("#name2").val()
$("#name1").change(e=>{
	name1 = e.target.value;
})
$("#name2").change(e=>{
	name2 = e.target.value;
})
console.log(name1, name2)






$("#submit").click(function(e) {
	e.preventDefault();
	$.ajax({
		"async": true,
		"crossDomain" : true,
		"url" : `https://love-calculator.p.rapidapi.com/getPercentage?fname=${name1}&sname=${name2}`,
		"headers": {
			"x-rapidapi-host": "love-calculator.p.rapidapi.com",
			"x-rapidapi-key": "cedbb6e127msh6c3f85c77dc22c0p153d51jsn608d2ca695b6"
		}
	}).then((res) => {
		console.log(res)
		point = res.percentage;
		localStorage.point = point;
		if (Number(localStorage.point) > 20) {
			localStorage = 20;
		}
		window.location.href = "./personality.html"
	})
}) 