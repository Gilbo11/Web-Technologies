document.getElementById("places").addEventListener("click", e=>{
    const xhttp = new XMLHttpRequest();

    xhttp.addEventListener("load", e => {
        const modules = JSON.parse(e.target.responseText);
    
        let output = "";
        modules.forEach(module => {
            output += "<p>Name: " + module.name + ", Location: " + module.location + "</p>";
        });
    
        document.getElementById("result").innerHTML = output;
    });
    
    xhttp.open("GET", "Data/Places.json");
    xhttp.send();
});


ocument.getElementById("creatures").addEventListener("click", e=>{
    
    fetch("Data/Creatures.json")
    .then(response => response.json())
    .then(modules => {
    document.getElementById("result").innerHTML ="";
    creatures.forEach(c=>{
        let resultContainer
    })


    
        let output = "";
    modules.forEach(module => {
        output += "<p>Name: " + module.name + ", Description: " + module.description + "</p>";
    });

    document.getElementById("result").innerHTML = output;
});
});


ocument.getElementById("")