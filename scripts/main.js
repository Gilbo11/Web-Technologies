


document.getElementById("wont_look").addEventListener("click", e=>{
    document.getElementById("scrt_element").innerHTML = "You are probably not a Dragonborn";
    document.getElementById("scrt_element").style.display = "block";
    document.getElementById("game_1").style.display = "none";
});

document.getElementById("ignore").addEventListener("click", e=>{
    document.getElementById("game_1").style.display = "none";
    document.getElementById("game_2").style.display = "block";
});

document.getElementById("d_and_s").addEventListener("click", e=>{
    document.getElementById("scrt_element").innerHTML = "You are probably not a Dragonborn";
    document.getElementById("scrt_element").style.display = "block";
    document.getElementById("game_2").style.display = "none";
})