const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347061423012";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_14_23_09_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDI3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDU1LFxuICAgICAgICA2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDksXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzksXG4gICAgICAgIDcyLFxuICAgICAgICAzNixcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTgxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTA5LFxuICAgICAgICA5MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDcyLFxuICAgICAgICA4MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDY3LFxuICAgICAgICA1MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDksXG4gICAgICAgIDc5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTksXG4gICAgICAgIDMyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDgxLFxuICAgICAgICA5OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU3LFxuICAgICAgICAxODMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDg3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDAsXG4gICAgICAgIDMsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTksXG4gICAgICAgIDI0LFxuICAgICAgICA2MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAzMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDcwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzNixcbiAgICAgICAgNjIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxODAsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTksXG4gICAgICAgIDc3LFxuICAgICAgICA4NSxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTEsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDksXG4gICAgICAgIDExOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDksXG4gICAgICAgIDEwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTAsXG4gICAgICAgIDQ2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzLFxuICAgICAgICAzMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDk5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTA0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDcxLFxuICAgICAgICA1MyxcbiAgICAgICAgMjE0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTQyLFxuICAgICAgICA2NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMixcbiAgICAgICAgNjEsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTExLFxuICAgICAgICA5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDgwLFxuICAgICAgICAyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMixcbiAgICAgICAgMTEzLFxuICAgICAgICAxLFxuICAgICAgICAxNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjM2LFxuICAgICAgICA4MixcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMDksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkY2dmxJWjY4VE1zdFE5OHk4aloweWorRDRvdXhqanZVUisrOEJveXZNcmM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzA2MTQyMzAxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOTRFQzNFMjg4RTgxNjYxMDZERjg2OUZGNkY0MkUyOTJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI1NzE5MDMzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjdSdGtZcm0zUS02bGtmTUhzZnhWUEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiODliMTUwYTktOGQ2Mi00MDg0LWI2NDgtNzdjY2UxN2JkZWFlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2LFxuICAgICAgMjMxLFxuICAgICAgMTE4LFxuICAgICAgOTUsXG4gICAgICAyMzgsXG4gICAgICAwLFxuICAgICAgMTQwLFxuICAgICAgMzIsXG4gICAgICA3OCxcbiAgICAgIDIwNSxcbiAgICAgIDE5NyxcbiAgICAgIDI0NyxcbiAgICAgIDEzOCxcbiAgICAgIDE1NyxcbiAgICAgIDE3OSxcbiAgICAgIDE0OCxcbiAgICAgIDMyLFxuICAgICAgMzAsXG4gICAgICA1OCxcbiAgICAgIDEzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzMsXG4gICAgICA0MSxcbiAgICAgIDI4LFxuICAgICAgOTksXG4gICAgICAyMTcsXG4gICAgICAxOTIsXG4gICAgICAyNDksXG4gICAgICAxNDQsXG4gICAgICAxMTUsXG4gICAgICAzNixcbiAgICAgIDE2NCxcbiAgICAgIDE3MyxcbiAgICAgIDI0MyxcbiAgICAgIDIyMixcbiAgICAgIDIzNyxcbiAgICAgIDQ2LFxuICAgICAgMTc4LFxuICAgICAgMjQ5LFxuICAgICAgMTM2LFxuICAgICAgMjQ1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjlURUZDQ0hKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDYxNDIzMDEyOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJwb3AgdGFydFwiLFxuICAgIFwibGlkXCI6IFwiMjYwODI0OTU4NTMzODQxOjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUG1XMXFVQkVQSEQ4YllHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI4dEJaK1h1YXJrbHc4SjFzcGJHLzUxWmJ0QVVLY3luWGUwNWgyL3JIWEN3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm5KVnN3d0FEWHZEMjFEb0RzZlVYRGFKTXo0czJ4QmEweWJHL1QyRVpEM1hua1R0NjZ4WnpRUXJDcnU2L1AxOXdVSlEwdm13dkprNWZTQ2ZyTmtqekJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlhsdTRxRVBwdjRlRVpBeHg1Mm1FQzVKTnh2dTRjbndzY1AvRGVBTThQdVRrbXFCSlZUY0c4TFJua0QrY2kxeVhyQ0pNckl3cytrL0pIQkVKNDBsMmlBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNjE0MjMwMTI6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNTcxOTAyOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQURjeVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRGN5Lmpzb24iOiAie1wia2V5RGF0YVwiOlwieC85WUVlaW5WRWQ4NHM4WmhHWXRBdUtLV2FKb3pSOVdkK0dTRHBZSUhKdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozNDc0NDIwNDEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyNTcxOTAzMzA3OFwifSIKfQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
