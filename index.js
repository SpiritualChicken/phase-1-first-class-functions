function receivesAFunction(callback) {
    return callback();
}


function returnsANamedFunction() {
    return function charlie() {};
    
}

function returnsAnAnonymousFunction() {
    return function () {};
}