let newMap = new Map (
    [
        ['fname', 'Sudarshan'],
        ['lname', 'Karanth']
    ]
);
for (let key of newMap.keys()) {
    console.log (`key -> ${key}`);
}
for (let value of newMap.values ()) {
    console.log (`value -> ${value}`);
}
for (let entry of newMap.entries ()) {
    console.log (`${entry[0]} -> ${entry[1]}`);
}
for (let [key, value] of newMap.entries ()) {
    console.log (`${key} -> ${value}`);
}