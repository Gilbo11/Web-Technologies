document.getElementById("places").addEventListener("click", e=>{
    const xhttp = new XMLHttpRequest();

    xhttp.addEventListener("load", e => {
        const modules = JSON.parse(e.target.responseText);
    
        let output = "";
        modules.forEach(module => {
            output += "<p>Name: " + module.name + ", Leader: " + module.leader + "</p>";
        });
    
        document.getElementById("result").innerHTML = output;
    });
    
    xhttp.open("GET", "modules.json");
    xhttp.send();
});