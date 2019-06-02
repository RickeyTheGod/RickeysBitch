//CONSTANTS
const Discord = require('discord.js')
const fs      = require('fs')
const version = '1.0.2'
const OwnerID = '405339843334504448'
const OwnerID2 = '428656071113179136'
const OwnerName = '@RickeyTheGod#6675'
const OwnerName2 = '@DarK#8343'
/////////////////////////////////////////////////////////////////////


const config = JSON.parse(fs.readFileSync('config.json', 'utf8'))

var client = new Discord.Client()

client.on('ready', () => {
    console.log(`logged in as ${client.user.username}...`)
    console.log(`Bot version: ${version}`)
    client.user.setActivity('UNDER MAINTENANCE | !!Help')

    
})

client.on('message', (msg) => {

    if(msg.content==='!!Version'){
        msg.reply(`${version}`)
    }

})

//client.on('message', (msg) => {
//    if(msg.author.if != client.user.id){
//var cont = msg.content,
//    author = msg.member,
//    chan = msg.channel,
//    guild = msg.guild
//    console.log(`msg send:
//    MSGcontent: ${cont}
//    MSGauthor: ${author}
//    MSGchannel: ${chan}
//    MSGguild: ${guild}
//    ----------------------------------`)
//    }
//})
client.on('message', (msg) =>{
    if(msg.content==='!!Ping'){
        var ping = client.ping;
        msg.reply(`**Pong!**`)
        msg.reply(`ping = ${ping} ms`)
    }
    


})
client.on('message', (msg) => {
    if(msg.content==='!!Avatar'){
        msg.reply(`${msg.author.avatarURL}`)
        
    }

})
client.on('message', (msg) => {
    if(msg.content==='!!Help'){ 
        if(msg.author.id==OwnerID){
            msg.reply(`**COMMANDS: **
            **FUN STUFF:**
            !!Help = this 
            !!Avatar = gets you avatar
            !!Version = Showns you the Version of the BOT
            !!Ping = Pong!
            👑 = Owners
            
            **MODERATOR STUFF:**
            *comming soon...*
            
            
            **👑OWNER STUFF👑:**
            !!AvatarOVERTAKE = OVERTAKE!!
            !!ClearAll = clears up to 1.000 messages in the current channel
            !!Shutdown = SHUTDOWN`)
        }else if(msg.author.id==OwnerID2){
            msg.reply(`**COMMANDS: **

            **FUN STUFF:**
            !!Help = this 
            !!Avatar = gets you avatar
            !!Version = Showns you the Version of the BOT
            !!Ping = Pong!
                        
            **MODERATOR STUFF:**
            *comming soon...*
            
            **👑OWNER STUFF👑:**
            !!AvatarOVERTAKE = OVERTAKE!!
            !!ClearAll = clears up to 1.000 messages in the current channel
            !!Shutdown = SHUTDOWN`)
        }else{
            msg.reply(`**COMMANDS: **
            **FUN STUFF:**
            !!Help = this 
            !!Avatar = gets you avatar
            !!Version = Showns you the Version of the BOT
            !!Ping = Pong!
                        
            **MODERATOR STUFF:**
            *comming soon...*
            `)
            //            !!Clear <number> = clears <number> messages
        }
    }
})

client.on('message', (msg) => {
    if(msg.content==='!!AvatarOVERTAKE'){
        if(msg.author.id==OwnerID){
        var while22qrdhwoief = 100
        msg.reply(`${msg.author.avatarURL}`)
        msg.reply(`${msg.author.avatarURL}`)
        msg.reply(`${msg.author.avatarURL}`)
        msg.reply(`${msg.author.avatarURL}`)
        msg.reply(`${msg.author.avatarURL}`)
    }else if(msg.author.id==OwnerID2){
        var while22qrdhwoief = 100
        msg.channel.sendMessage(`${msg.author.avatarURL}`)
        
        }else
        msg.reply('pfffff, only for 👑Owners👑 LOOOOOOOSER!!')
    }
            
            })
/*client.on('message', (msg) => {
    if(msg.content=='TEST'){
        msg.guild.createRole(  data= {
            name: 'TEST',
            mentionable: false,
            color: '#ce00ff'
            
       })
    }
})*/

client.on('message', (msg) => {
    if(msg.content==='!!ClearAll'){
        if(msg.author.id=OwnerID){
          var while22qrdhwoief2=10
        while(while22qrdhwoief2>0){
        msg.channel.bulkDelete(100)
        .then
        while22qrdhwoief2=while22qrdhwoief2-1;
        }
    
    }else if(msg.author.id===OwnerID2){
        var while22qrdhwoief2=10
        while(while22qrdhwoief2>0){
        msg.channel.bulkDelete(100)
        .then
        while22qrdhwoief2=while22qrdhwoief2-1;
        }
    }else{
        msg.reply ('*only for cool 👑owners👑*')
    }
}


})

client.on('message', (msg) => {
    if(msg.content==='!!TEST HI'){
        var test=msg.content[1]&msg.content[2]
        msg.author.sendMessage(`${msg.content} || ${msg} -- ${msg.content[1]} -- ${test} --${msg.content[5] & msg.content[6]}`)
    }

})
client.on('message', (msg) => {
    if(msg.content==='!!Shutdown'){
        if(msg.author.id===OwnerID){
            client.user.setActivity('SHUTDOWN') 
            process.exit()
        }else if(msg.author.id===OwnerID2){
            client.user.setActivity('SHUTDOWN')
            process.exit()
        }else{
            msg.author.sendMessage('your not an 👑Owner👑')
        }
    }
})
client.on('message', (msg) => {
    if(msg.content==='👑'){
        msg.reply(`**OWNERS:**
          Dev:    ${OwnerName}
Only an Onwer:    ${OwnerName2}`)
    }
})
 
 client.login(config.token)
 