
setInterval(test, 1000);

function test() {
    resourceUpdater(buildings.productionAmount);
}

manualGather.addEventListener('click', function() {
    resourceUpdater(1);
});

buildBerryGatherer.addEventListener('click', function() {
    buildFunction(buildings.berryGatherer);
});

buildBerryGathererMk2.addEventListener('click', function() {
    buildFunction(buildings.berryGathererMk2);
});

function buildFunction(building) {
    if (buildings.resource >= building.cost) {
        resourceUpdater(-building.cost);
        buildAmountUpdater(building);
        costUpdater(building);
        productionUpdater(building);
        increaseProductionAmount(building.productionIncrease);
    }
}

function increaseProductionAmount(value) {
    buildings.productionAmount = Math.round(buildings.productionAmount + value);
    document.getElementById('productionPerSecond').innerHTML = buildings.productionAmount
}

function resourceUpdater(change) {
    buildings.resource = buildings.resource + change;
    document.getElementById("resourceValue").innerHTML = buildings.resource;
}

function costUpdater(cost) {
    cost.cost = Math.round(cost.cost * cost.costIncrease); // Make a function to calculate costs based on increase-value; building[1][2]
    document.getElementById(cost.name+"Cost").innerHTML = cost.cost
}

function productionUpdater(production) {
    production.production = production.production + production.productionIncrease
    document.getElementById(production.name+"Production").innerHTML = production.production
}

function buildAmountUpdater(building) {
    building.amount++;
    document.getElementById(building.name+"Amount").innerHTML = building.amount;
}