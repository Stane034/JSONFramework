const fs = require('fs');

console.log('[c] Node mini JSON framework');
console.log('[i] Usage : \n');
console.log('   [ createJSON ] - Enter the path where you want to create file and data such as tables');
console.log('   [ printdataJSON ] - Enter the path where is your file and function will print data from JSON to Console.');
console.log('   [ readfromJSON ] - Enter the path where is your file and function will return your JSON data.');
console.log('   [ updateJSON ] - Enter the path and new data and the program will enter your data into a specific JSON file')
console.log('\n[>] Follow me on github : https://github.com/Stane034');


function createJSON(path, data) { 
    let finalData = JSON.stringify(data);
    fs.writeFile(path + '.json', finalData, function (err) {
        if (err) throw err;
        console.log('[c] Successfuly craeted file : ' + path + '.json with data : \n' + data)
    });
}

function printdataJSON(path) {
    fs.readFile(path + '.json', (err, data) => {
        if (err) { 
            return console.log('[x] Error: ' + err)
        }
        let finalData = JSON.parse(data);
        for (let i = 0; i < finalData.length; i++) {
            console.log(finalData[i])
        }
    });
}

function readfromJSON(path) {
    let returnableData = {}
    fs.readFile(path + '.json', (err, data) => {
        if (err) { 
            return console.log('[x] Error: ' + err)
        }
        let finalData = JSON.parse(data);
        finalData = returnableData;
    });
    setTimeout(() => {
        console.log(returnableData);
        return returnableData;
    }, 20)
}

function updateJSON(path, newData) { 
    fs.readFile(path + '.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log("[x] Error : " + err)
            return
        } else {

        stariobjekat = JSON.parse(data); 

        stariobjekat.push(newData);

        let jsonObjekt = JSON.stringify(stariobjekat);
        fs.writeFile(path + '.json', jsonObjekt, function (err) {
            if (err){
                console.log('[x] Error : ' + err)
                return
            }
            console.log('[c] Updated Successfully : ' + path + ' with data : \n' + stariobjekat)
        });            
    }});
}
