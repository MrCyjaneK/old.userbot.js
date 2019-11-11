/*
    Purpose: set/get things in database
*/
const fs = require("fs");
module.exports = {
    get: async function (file = 'db.json') {
        return new Promise ((resolve,reject) => {
            createFile("data/"+file).then(async () => {
                let rawdata = await fs.readFileSync("data/"+file);
                let objdata = await JSON.parse(rawdata);
                //console.log(objdata);
                return resolve(objdata);
            })
        })
    },
    set: function (content,file = 'db.json') {
        return new Promise ((resolve, reject) => {
            createFile(file).then(async () => {
                fs.writeFileSync("data/"+file,JSON.stringify(content));
                resolve(1);
            })
        })
    }
};
async function createFile(filename) {
    await fs.open(filename,'r',function(err, fd){
        if (err) {
            fs.writeFile(filename, '{}', function(err) {
                if(err) {
                    console.log(err);
                }
            });
        } else {

        }
    });
    return 0;
}