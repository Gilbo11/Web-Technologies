
document.getElementById("nope_btn").addEventListener("click", e=>{
    document.getElementById("banner").style.display = "none";
});

document.getElementById("yes_btn").addEventListener("click", e=>{
    document.getElementById("hey_msg").innerHTML = "Congratulations"
    document.getElementById("banner_question").innerHTML = "Visit Skyrim now and we will set a dragon on you free of charge!"
    document.getElementById("yes_btn").style.display = "none";
    document.getElementById("nope_btn").innerHTML = "Yay!"
});
