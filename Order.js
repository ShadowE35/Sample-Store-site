"use strict"

var Litem = [
    {
        "option" : "1",
        "tag" : "2"
    },

    {
        "option" : "2",
        "tag" : "4"
    },

    {
        "option" : "3",
        "tag" : "8"
    },

    {
        "option" : "4",
        "tag" : "10"
    },

    {
        "option" : "5",
        "tag" : "1"
    },

    {
        "option" : "6",
        "tag" : "2"
    },

    {
        "option" : "7",
        "tag" : "3"
    },

    {
        "option" : "8",
        "tag" : "4"
    }

]; 

//Options
const OptionsFill = document.getElementById("Calculator");

Litem.forEach((item, index) =>
{
    var fill = document.createElement("div");

    fill.innerHTML = `<h1> ${item.option} </h1>
    <p> $${item.tag}</p>
    <input type = "number" min = "0" id = "qty${index}" </input>`;

    OptionsFill.appendChild(fill);
}    
)

function buy()
{
    let total = 0;

    const tax = 0.0825; //local tax

    Litem.forEach((item, index) =>
    {
        const qty = parseInt(document.getElementById(`qty${index}`).value) || 0;
        total += qty * item.tag;
    });

    total += total * tax;
    alert(`Your total (including taxes) is: $${total}`);
}