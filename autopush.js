const util = require('util');
const fs = require('fs');

const exec = util.promisify(require('child_process').exec);

let count = 1;

appendFile = util.promisify(fs.appendFile);


async function rand(){
    try{

        await appendFile('./README.md',Array(count).fill(' ').reduce((c,append)=> c+append));

    }catch(e){

        console.log(e);
    }

}


async function  autoPush(){
    
    try{

        await rand();

        const add_std = await exec('git add .');
        
        console.log(`add----${add_std.stdout}`);
        console.log(`add----${add_std.stderr}`);



        const com_std = await exec('git commit -m "doc update"');
        
        console.log(`commit----${com_std.stdout}`);
        console.log(`commit----${com_std.stderr}`);


        const push_std = await exec("git push");
        console.log(`push-----${push_std.stdout}`);
        console.log(`push-----${push_std.stderr}`); 


    }catch(e){
        console.log(e);

    }

}


setTimeout( () => {

    count ++;

    autoPush();

},5000)
