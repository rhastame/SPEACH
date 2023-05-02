function openQ(evt, q) {
    var i, questions;
    questions = document.getElementsByClassName("question");
    for (i = 0; i < questions.length; i++){
        questions[i].style.display = "none";
    }

    document.getElementById(q).style.display = "block";
    console.log("tes")
}
document.getElementById("first").click();

function changeColor(evt) {
    evt.currentTarget.className += " benar";
}
function changeColor2(evt) {
	evt.currentTarget.className += " benar";
}
function changeColor3(evt) {
	evt.currentTarget.className += " benar";
}


if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
	console.info("This page is reloaded");
	window.location.href = "#";
} else {
	console.info("This page is not reloaded");
}
