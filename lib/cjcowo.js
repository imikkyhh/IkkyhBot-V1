const fs = require('fs');

module.exports = () => {
  const data = fs.readFileSync('./lib/database/cjcowo.json');
  const jsonData = JSON.parse(data);
  const randIndex = Math.floor(Math.random() * jsonData.length);
  const randKey = jsonData[randIndex];
  return `╔══✪〘 *JOMBLO* 〙✪\n║❖ *Cowo jomblo cari pacar ni gaes*\n║❖ *[Nama]: ${randKey.nama}*\n║❖ *[Nomor]: wa.me/${randKey.id.replace('@c.us', '')}*\n║❖ *[Umur]: ${randKey.umur}*\n║ *Yang minat kuy xixixi, gausa mandang fisik goblok*\n╚═〘 *DI SPONSORI OLEH IKKYH BOT* 〙`;
};
