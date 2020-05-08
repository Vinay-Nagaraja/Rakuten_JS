// HOF, action is a function
function forEach(elems, action) {
    for(var i = 0; i < elems.length; i++) {
        action (elems[i]);
    }
}

//HOF
// OCP ==> Open close principle
function filter(elems, predicate) {
    var values = []; // empty array
    forEach(elems, function(data) {
        if(predicate(data)) {
            values.push(data);
        }
    });
    return values;
}

// MAP --> Transform the data

function map(elems, mapperFn) {
    var values = []; // empty array
    forEach(elems, function(data) {
        values.push(mapperFn(data));
    });
    return values;
}