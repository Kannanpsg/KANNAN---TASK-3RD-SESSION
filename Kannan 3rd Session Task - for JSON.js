
// Using for loops - for, forin, for of, for each - kannan - B28

// Using for loop

var p = {
    0: "value1",
    "b": "value2",
    key: "value3"
};

for (var key of Object.keys(p)) {
    console.log(key + " -> " + p[key])
}
 
// Using for in loop

const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// Using for each loop

const data = await response.json();

data.forEach(obj => {
  Object.entries(obj).forEach(([key, value]) => {
    console.log(`${key} ${value}`);
  });
  console.log('-------------------');
});
