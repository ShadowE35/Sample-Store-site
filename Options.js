"Use strict"

var item = [
    {
        "option" : "#1",
        "tag" : "Description"
    },

    {
        "option" : "#2",
        "tag" : "Description"
    },

    {
        "option" : "#3",
        "tag" : "Description"
    },

    {
        "option" : "#4",
        "tag" : "Description"
    },

    {
        "option" : "#5",
        "tag" : "Description"
    },

    {
        "option" : "#6",
        "tag" : "Description"
    },

    {
        "option" : "#7",
        "tag" : "Description"
    },

    {
        "option" : "#8",
        "tag" : "Description"
    }

]; 

//Options
const OptionsFill = document.getElementById("Variety");

item.forEach(item =>
{
    var fill = document.createElement("div");

    fill.innerHTML = `<h1> ${item.option} </h1>
    <p> ${item.tag}</p>`;

    OptionsFill.appendChild(fill);
}    
)