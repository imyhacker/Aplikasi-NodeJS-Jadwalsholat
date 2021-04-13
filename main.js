const https = require('https');
const chalk = require('chalk');
const moment = require('moment');
const fetch = require('node-fetch');

// MAIN TIME
const mainTime = (location) => {
    const url = 'https://api.pray.zone/v2/times/day.json?city='+location+'&date='+moment().format('YYYY-MM-DD');

let settings = { method: "Get" };
fetch(url, settings)
   .then(res => res.json())
   .then((json) => {
       
        const data = json.results.datetime;
        data.map(item => item.times)
        for(let item of data) {
            const Imsak = item.times.Imsak;
            const Sunrise = item.times.Sunrise;
            const Fajr = item.times.Fajr;
            const Duhur = item.times.Dhuhr;
            const Ashar = item.times.Asr;
            const Maghrib = item.times.Maghrib;
            const Isha = item.times.Isha;
            const Sunset = item.times.Sunset;
            const Mid = item.times.Midnight;
            console.clear();
            
            console.log(`Selamat Kota ${location}, Berhasil Di Temukan`);
            console.log(chalk.white(`Crafted By RiiHaxor@Indosec`));
            console.log(`===============`);
            console.log(`Imsak   : ${Imsak}`);
            console.log(`Fajr    : ${Fajr}`);
            console.log(`Dhuhur  : ${Duhur}`);
            console.log(`Ashar   : ${Ashar}`);
            console.log(`Maghrib : ${Maghrib}`);
            console.log(`Isha    : ${Isha}`);
            console.log(`===============`);
            console.log(`Sunrise : ${Sunrise}`);
            console.log(`Sunset  : ${Sunset}`);
            console.log(`Midningt: ${Mid}`);
            console.log(`===============`);
        }
    
   });
  
}





// ABOUT 
const aboutMe = () => {
    console.clear();
    console.log(`
=================================================
> Aplikasi Sederhana Kapan Waktu Sholat (ASKWS) <
=================================================
Aplikasi ini adalah aplikasi sederhana untuk mengetahui kapan Waktu Sholat di Kota anda.
Aplikasi ini adalah aplikasi OpenSource, siapapun dapat mengubah, menambahkan, atau menghapus perintah, 
namun dengan beberapa syarat yaitu tidak boleh merubah Copyright!.

`);
console.log(chalk.bgRed.white(`Dilarang Keras Mengganti Atau Menghapus Copyright!`));
console.log(`\nCopyright (C) Rii Haxor | Arikun @ IndoSec - 2021\n\n\n`);
};

// How To Use 
const HTU = () => {
    console.clear();
    console.log(`
=================================================
> Aplikasi Sederhana Kapan Waktu Sholat (ASKWS) <
=================================================

Cara menggunakan tools ini sangat mudah, siapapun dapat melakukannya\n`);

console.log(chalk.white.bgRed(`1. node app`));
console.log(`Perintah ini akan membuka semua menu yang ada di Aplikasi ini.\n`);

console.log(chalk.white.bgRed(`2. node --help`));
console.log(`Perintah ini akan membuka semua help yang ada di Aplikasi ini.\n`);

console.log(chalk.white.bgRed(`3. node app loc --search="{kota}"`));
console.log(`Perintah ini akan mencari jadwal sholat sesuai dengan daerahnya, 
NB: Jika Aplikasi ini terdapat error maka kota yang kamu cari belum terdaftar pada API server.\n`);

console.log(chalk.white.bgRed(`4. node app about`));
console.log(`Perintah ini akan membuka tentang Aplikasi ini

\n\nCopyright (C) Rii Haxor | Arikun @ IndoSec - 2021,
    `);
};
module.exports = { mainTime, aboutMe, HTU };