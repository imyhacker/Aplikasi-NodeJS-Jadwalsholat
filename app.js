const https = require('https');
const chalk = require('chalk');
const moment = require('moment');
const yargs = require('yargs');
const fetch = require('node-fetch');
const main = require('./main');


/*
    Coded By RiiHaxor | Arikun @ IndoSec - 2021 
    =================================================
    > Aplikasi Sederhana Kapan Waktu Sholat (ASKWS) <
    =================================================

    
*/

yargs.command({
    command: 'loc',
    describe: 'Cari Lokasi Dimana Kamu Berada!',
    builder:{
        search:{
        demandOption: true,
        describe: "Mencari Lokasi Kamu Sekarang!",
        type: 'string'
        }
    },
    handler(argv){
        main.mainTime(argv.search);
    }
}).demandCommand();

yargs.command({
    command: 'about',
    describe: 'Tentang App Ini',
    builder:{},
    handler(){
        main.aboutMe();
    }
});

yargs.command({
    command: 'htu',
    describe: 'How To Use This App',
    builder:{},
    handler(){
        main.HTU();
    }
});

yargs.parse();
