// Create a function for saving
// Create a function for loading
// Create a function for exporting the save
// Create a function for importing a save
let savekey;

const manualSave = document.getElementById('saveButton');
const manualLoad = document.getElementById('loadButton');

manualSave.addEventListener('click', function() {
    window.localStorage.setItem('saveKey', JSON.stringify(berryGatherer));
});

manualLoad.addEventListener('click', function() {
    berryGatherer = JSON.parse(window.localStorage.getItem('saveKey'));
    document.getElementById(berryGatherer.name+"Amount").innerHTML = berryGatherer.amount;
});