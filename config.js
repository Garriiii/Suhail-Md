const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_21_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTk1LFxuICAgICAgICA0NixcbiAgICAgICAgNTksXG4gICAgICAgIDIzMCxcbiAgICAgICAgNCxcbiAgICAgICAgMjUyLFxuICAgICAgICA3NixcbiAgICAgICAgMjQ1LFxuICAgICAgICA5NixcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDcyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTg3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgNyxcbiAgICAgICAgMjM5LFxuICAgICAgICA0NixcbiAgICAgICAgMjQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU0LFxuICAgICAgICAxLFxuICAgICAgICA0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDQ4LFxuICAgICAgICA5NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDk1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDksXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzksXG4gICAgICAgIDU2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTE1LFxuICAgICAgICA4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTQzLFxuICAgICAgICA2MSxcbiAgICAgICAgNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODksXG4gICAgICAgIDY3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTQxLFxuICAgICAgICA2NixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTIzLFxuICAgICAgICAxODEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzEsXG4gICAgICAgIDIwLFxuICAgICAgICA3NixcbiAgICAgICAgNDYsXG4gICAgICAgIDcwLFxuICAgICAgICA0NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzksXG4gICAgICAgIDExLFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDExNCxcbiAgICAgICAgODcsXG4gICAgICAgIDc1LFxuICAgICAgICA5OCxcbiAgICAgICAgNjksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDczLFxuICAgICAgICAxMjksXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjE2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzLFxuICAgICAgICAxODUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODYsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDk5LFxuICAgICAgICAxODIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjE0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2MixcbiAgICAgICAgODYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDU2LFxuICAgICAgICA0MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTAwLFxuICAgICAgICA1MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDk1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxODcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzksXG4gICAgICAgIDIwNCxcbiAgICAgICAgODMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTM0LFxuICAgICAgICA1NSxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAzOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDc0LFxuICAgICAgICAzNixcbiAgICAgICAgNzgsXG4gICAgICAgIDI4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODksXG4gICAgICAgIDg3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDExMixcbiAgICAgICAgNjUsXG4gICAgICAgIDY5LFxuICAgICAgICAxMzksXG4gICAgICAgIDgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTE0LFxuICAgICAgICA4MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTE0LFxuICAgICAgICA5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAzMixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZFhHMHRRVW9nRHNrb0ZKNkYvUE1peWxVK012aStlMWVvY2RPQjdNZmZMOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MDYwNjcxNjUyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGOTI2RDQwRThCMjg3MjExODhGOEE4MTVEMEZGOTBEQVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA0NjI5MTVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQ3pzdzlkOXNSRk82cDFYNDZSdzc5UVwiLFxuICBcInBob25lSWRcIjogXCI3ODAwNTIwMi0yYmM4LTQ2MTUtYTg0OC0yMmQwMTc1NTY4MGZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM5LFxuICAgICAgNDAsXG4gICAgICA0NCxcbiAgICAgIDEwNCxcbiAgICAgIDIzMyxcbiAgICAgIDIxMSxcbiAgICAgIDM0LFxuICAgICAgMjI4LFxuICAgICAgNCxcbiAgICAgIDI0NSxcbiAgICAgIDAsXG4gICAgICAyMjUsXG4gICAgICAyMzksXG4gICAgICA1NyxcbiAgICAgIDQ5LFxuICAgICAgMzcsXG4gICAgICAxNDQsXG4gICAgICAxMDgsXG4gICAgICAxNjcsXG4gICAgICAxNTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTcxLFxuICAgICAgOSxcbiAgICAgIDIwOCxcbiAgICAgIDc4LFxuICAgICAgMjQ5LFxuICAgICAgMjYsXG4gICAgICA4OSxcbiAgICAgIDE1OCxcbiAgICAgIDg5LFxuICAgICAgMTk5LFxuICAgICAgMjM2LFxuICAgICAgMTQsXG4gICAgICAzOCxcbiAgICAgIDIwNyxcbiAgICAgIDMsXG4gICAgICAxNDcsXG4gICAgICAyMzgsXG4gICAgICAyMCxcbiAgICAgIDE2NyxcbiAgICAgIDYxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjhQOEFSRURZXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDYwNjcxNjUyOjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTIzNjc2OTI4Nzc4OTg6MjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSUg5bmEwRkVMcmNzTFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJzZzRiRUxKRk1ScmhsT3NlY0Y1bzZwNmh2a0xGd2paQ1pUdzlpS3hTK3k4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInN1Umg4TG5xYy9QTzlGNU1pYmtuK2dJWmpXU1dPTFpmcWQwUW9JQVRTbnY5Mk41Q3EwbHdoeE1HL0pNQ3dHeWRCbWkvTi9jV2YzTFNaaWJ3bEVEMkFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImxhcExiTGltWU42WGRJRXFUejZsVHNENkRLckRqZUtFdWt6aUNQbzZvaExxVUtLN1V0aWl0Z1IzaWQwNGphZk5RTWxJenJtWXU2dzFXaG5lbzU1VmhnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwNjA2NzE2NTI6MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDQ3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA0NjI5MTAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNZzJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1nMi5qc29uIjogIntcImtleURhdGFcIjpcIldHb0h1a0ZxSzBEOVJqbnJ3NnkrcENTRlJkMU5BVFNFWkp5TDlDWkdXS009XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQzNzA0MDI1NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
