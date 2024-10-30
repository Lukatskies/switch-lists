
function changeLists() {
    const sweetTreats = document.getElementById("sweet-treats");
    const savoryTreats = document.getElementById("savory-treats");
    const ideaMessage = document.getElementById("ideaMessage");

    // Define arrays for sweet and savory ideas
    const sweetIdeas = ['M&Ms', 'Twix', 'Kit-Kat', 'Sour Patch'];
    const savoryIdeas = ['Beef Stew', 'Pot Roast', 'Mac & Cheddar', 'Green Bean Casserole'];                     
        let ideas = []; 

    
    //choose array based on the selected radio button
    if (sweetTreats.checked) {
        ideas = sweetIdeas;
    } else if (savoryTreats.checked) {
        ideas = savoryIdeas;
    } else {
        ideaMessage.textContent = "Please select a recipe type above";
        return;
    }


    //display each idea//
    ideaMessage.textContent = ""; 
    for (let i = 0; i < ideas.length; i++) {
        ideaMessage.textContent += "•" + ideas[i] + "";
    }
}