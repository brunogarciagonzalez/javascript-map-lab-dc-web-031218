const knownDecepticons = ['Megatron', 'Skywarp', 'Laserbeak', 'Barricade'];

const robots = [
  { name: 'Bumblebee', alliance: null },
  { name: 'Laserbeak', alliance: null },
  { name: 'Barricade', alliance: null },
  { name: 'Optimus Prime', alliance: null },
  { name: 'Skywarp', alliance: null },
  { name: 'Megatron', alliance: null },
  { name: 'Ironhide', alliance: null },
  { name: 'Ratchet', alliance: null }
];

const zebraStripes = [
  { width: 9.12, color: null },
  { width: 5.71, color: null },
  { width: 6.01, color: null },
  { width: 1.54, color: null },
  { width: 8.34, color: null },
  { width: 7.77, color: null },
  { width: 0.59, color: null },
  { width: 7.31, color: null }
];

function allegiance (x) {
  if (knownDecepticons.includes(x.name)) {
    let a = {};
    for (const key in x) {
      a[key] = x[key];
    }
    a["alliance"] = "decepticon";
    return a;
  } else {
    let a = {};
    for (const key in x) {
      a[key] = x[key];
    }
    a["alliance"] = "autobot";
    return a;
  };
}

const sortedRobots = robots.map(allegiance);

function zebraColor (x, i) {
  // A stripe is black when the stripe's index is even, and it's white if a stripe's index is odd
  let a = {};
  for (const key in x) {
    a[key] = x[key];
  }
  if (i % 2 === 0) {
    a.color = "black";
  } else {
    a.color = "white";
  }
  return a;
}

const coloredZebraStripes = zebraStripes.map(zebraColor);
