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

        const {add_stdout,add_stderr} = await exec("git add .");
        
        console.log(`add----${add_stdout}`);
        console.log(`add----${add_stderr}`);



        const {com_stdout,com_stderr} = await exec("git commit -m 'doc update'");
        
        console.log(`commit----${com_stdout}`);
        console.log(`commit----${com_stderr}`);


        const {push_stdout,push_stderr} = await exec("git push");
        console.log(`push-----${push_stdout}`);
        console.log(`push-----${push_stderr}`);




    }catch(e){
        console.log(e);

    }

}


setTimeout( () => {

    count ++;

    autoPush();

},5000)
