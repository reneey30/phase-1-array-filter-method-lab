const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']
function findMatching(driver1, param){
    let driveList = [];

    driver1.forEach(name => {
        if(name.toUpperCase() == param.toUpperCase()){
            driveList.push(name)
        }
    });

    return driveList;
}

function fuzzyMatch(param1, param2){
    let fuzzyDrivers = [];
    param1.forEach(name => {
        if(name.charAt(0) === param2.charAt(0)){
            fuzzyDrivers.push(name);
        }
    })
    return fuzzyDrivers
}

function matchName(param1, param2){
    let driver = [];
    for(let names of param1){
        if(names.name === param2){
            driver.push(names);
        }
    }
    return driver;
}

console.log(fuzzyMatch(drivers, "San"))