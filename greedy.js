let statesNeeded = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"]);

const stations = {};
stations["kone"] = new Set(["id", "nv", "ut"]);
stations["ktwo"] = new Set(["wa", "id", "mt"]);
stations["kthree"] = new Set(["or", "nv", "ca"]);
stations["kfour"] = new Set(["nv", "ut"]);
stations["kfive"] = new Set(["ca", "az"]);

const finalStations = new Set();

while (statesNeeded.size) {
  let bestStation = null;
  let statesCovered = new Set();
  for (const station in stations) {
    const covered = statesNeeded.intersection(stations[station]);
    if (covered.size > statesCovered.size) {
      bestStation = station;
      statesCovered = covered;
    }
  }
  statesNeeded = statesNeeded.difference(statesCovered);
  finalStations.add(bestStation);
}

console.log(finalStations); // Set { 'kone', 'ktwo', 'kthree', 'kfive' }
