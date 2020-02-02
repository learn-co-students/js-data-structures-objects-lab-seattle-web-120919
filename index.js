let driver = {};

// nondestructivelyUpdateObject
function updateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign({}, driver, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value; 
    return driver;
}
// nondestructivelyUpdateObject
// delete key/value pair for the key passed in from the driver Object. 
function deleteFromDriverByKey(driver, key) {
    const newObj = Object.assign({}, driver);
    delete newObj[key];
    return newObj;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    // should mutate the driver passed in
    delete driver[key]; 
    return driver;
}