let resource = 0;
let productionAmount = 0;

let berryGatherer = {
    name: "berryGatherer",
    amount: 0,
    cost: 10,
    costIncrease: 1.2,
    production: 0,
    productionIncrease: 2
};

let berryGathererMk2 = {
    name: "berryGathererMk2",
    amount: 0,
    cost: 20,
    costIncrease: 1.3,
    production: 0,
    productionIncrease: 4
};

const manualGather = document.getElementById('gatherButton');
const buildBerryGatherer = document.getElementById('buildBerryGatherer');
const buildBerryGathererMk2 = document.getElementById('buildBerryGathererMk2');

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
    if (resource >= building.cost) {
        resourceUpdater(-building.cost);
        buildAmountUpdater(building);
        costUpdater(building);
        productionUpdater(building);
        increaseProductionAmount(building.productionIncrease);
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