// the graph
const graph = {};
graph["start"] = {};
graph["start"]["a"] = 6;
graph["start"]["b"] = 2;

graph["a"] = {};
graph["a"]["fin"] = 1;

graph["b"] = {};
graph["b"]["a"] = 3;
graph["b"]["fin"] = 5;

graph["fin"] = {};

// The costs table
const costs = {};
costs["a"] = 6;
costs["b"] = 2;
costs["fin"] = Infinity;

// the parents table
const parents = {};
parents["a"] = "start";
parents["b"] = "start";
parents["fin"] = null;

let processed = [];

function findLowestCostNode(costs) {
  let lowestCost = Infinity;
  let lowestCostNode = null;

  for (let node in costs) {
    const cost = costs[node];
    if (cost < lowestCost && !processed.includes(node)) {
      lowestCost = cost;
      lowestCostNode = node;
    }
  }
  return lowestCostNode;
}

let node = findLowestCostNode(costs);

while (node) {
  const cost = costs[node];
  const neighbors = graph[node];
  for (const n in neighbors) {
    const new_cost = cost + neighbors[n];
    if (costs[n] > new_cost) {
      costs[n] = new_cost;
      parents[n] = node;
    }
  }
  processed.push(node);
  node = findLowestCostNode(costs);
}

console.log("Cost from the start to each node:");
console.log(costs); // { a: 5, b: 2, fin: 6 }
