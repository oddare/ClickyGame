// Create a function for saving
// Create a function for loading
// Create a function for exporting the save
// Create a function for importing a save
let savekey;

manualSave.addEventListener('click', function() {
    window.localStorage.setItem('saveKey', JSON.stringify(game));
});

manualLoad.addEventListener('click', function() {
    game = JSON.parse(window.localStorage.getItem('saveKey'));
    console.log(game);
    for (var [key, value] of Object.entries(game)) {;
        console.log(key, value);
        if (game.hasOwnProperty(key)) {
            for (var [key2, value2] of Object.entries(game[key])) {
                console.log(key2, value2);
                if (game[key].hasOwnProperty(key2)) {
                    for (var [key3, value3] of Object.entries(game[key][key2])) {
                        console.log(key3, value3);
                    }
                }
            }
        }
    }
});

function displayChange(building, type, changeTo) {
    document.getElementById(building+type).innerHTML = changeTo;
}