
setInterval(test, 1000);

function test() {
    resourceUpdater(game.productionAmount);
}

manualGather.addEventListener('click', function() {
    resourceUpdater(1);
});

buildBerryGatherer.addEventListener('click', function() {
    buildFunction(game.machines.berryGatherer);
});

buildBerryGathererMk2.addEventListener('click', function() {
    buildFunction(game.machines.berryGathererMk2);
});

function buildFunction(building) {
    if (game.resource >= building.cost) {
        resourceUpdater(-building.cost);
        buildAmountUpdater(building);
        costUpdater(building);
        productionUpdater(building);
        increaseProductionAmount(building.productionIncrease);
    }
}

function increaseProductionAmount(value) {
    game.productionAmount = Math.round(game.productionAmount + value);
    document.getElementById('productionPerSecond').innerHTML = game.productionAmount
}

function resourceUpdater(change) {
    game.resource = game.resource + change;
    document.getElementById("resourceValue").innerHTML = game.resource;
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