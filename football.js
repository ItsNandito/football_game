//add event listener for onload event

window.onload = function() {
    //create an array of football teams
    let teams = [ 
        {code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX"},
        {code: "DEN", name: "Denver Broncos", plays: "Denver, CO"},
        {code: "HOU", name: "Houstan Texans", plays: "Houston, TX"},
        {code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO"}]


        //declare the html elements that we need
        let selectMenu = document.getElementById('teams');
        console.log(`the selected menu is ${selectMenu}`);
        let moreInfoBtn = document.getElementById('moreInfo');
        console.log(moreInfoBtn);
}