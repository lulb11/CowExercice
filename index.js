const myInfos = require('./information.js');

var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `slt c ${myInfos.name} de ${myInfos.campusName}`,
    e : "oO",
    T : "U "
}));
