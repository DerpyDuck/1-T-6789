const Discord = module.require("discord.js");
const helplist = {
    "Generic":["avatar","userinfo","ping","say","weather"],
    "Random":["coinflip","dieroll","diceroll","randnum"],
    "Moderation":["purge","striproles","mute","unmute","kick"],
    "Music":["music"]
}

var cmds = [];
Object.keys(helplist).forEach(function(key) {
    let val = helplist[key];
    let subcmd = [];
    val.forEach(function(v,k) {
        subcmd.push(`\`${val[k]}\``)
    });
    let template = {
        name: `**${key}**`,
        value: subcmd.join(", ")
      }
    cmds.push(template)
});

module.exports.run = async (bot,message,args) => {
    message.channel.send({embed: {
        title:"Available Commands",
        description:"Now THIS is de wey!",
        color:0x9B59B6,
        fields: cmds
    }});
}

module.exports.help = {
    name: "help"
}
