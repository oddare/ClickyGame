let resource = 0;
let productionAmount = 0;
let berryGatherer = [['berryGathererAmount', 0],['berryGathererCost', 10, 1.2],['berryGathererProduction', 0, 2]];
let berryGathererMk2 = [['berryGathererMk2Amount', 0],['berryGathererMk2Cost', 10, 1.3],['berryGathererMk2Production', 0, 4]];

const manualGather = document.getElementById('gatherButton');
const buildBerryGatherer = document.getElementById('buildBerryGatherer');

setInterval(test, 1000);

function test() {
    resourceUpdater(productionAmount);
}

manualGather.addEventListener('click', function() {
    resourceUpdater(1);
});

buildBerryGatherer.addEventListener('click', function() {
    buildFunction(berryGatherer);
})

buildBerryGathererMk2.addEventListener('click', function() {
    buildFunction(berryGathererMk2);
})

function buildFunction(building) {
    if (resource >= building[1][1]) {
        resourceUpdater(-building[1][1]);
        buildAmountUpdater(building);
        costUpdater(building);
        productionUpdater(building);
        increaseProductionAmount(building[2][2]);
    }
}

function increaseProductionAmount(value) {
    productionAmount = Math.round(productionAmount + value);
    document.getElementById('productionPerSecond').innerHTML = productionAmount
}

function resourceUpdater(change) {
    resource = resource + change;
    document.getElementById("resourceValue").innerHTML = resource;
}

function costUpdater(cost) {
    cost[1][1] = Math.round(cost[1][1] * cost[1][2]); // Make a function to calculate costs based on increase-value; building[1][2]
    document.getElementById(cost[1][0]).innerHTML = cost[1][1]
}

function productionUpdater(production) {
    production[2][1] = production[2][1] + production[2][2]
    document.getElementById(production[2][0]).innerHTML = production[2][1]
}

function buildAmountUpdater(building) {
    building[0][1]++;
    document.getElementById(building[0][0]).innerHTML = building[0][1];
}