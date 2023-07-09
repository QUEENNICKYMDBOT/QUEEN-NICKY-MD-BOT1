// QUEEN-NICKY MULTI-DEVICE WHATSAPP BOT
// ALL CODES BY ("KIND ALPHA");
// "LICENCED",
// "CONTACT ON WHATSAPP": "94715264791"


require("../../module-alias.js");
require("../main/config/index.js");
const pino = require("pino");
const fs = require("fs");
const chalk = require("chalk");
const {say} = require("cfonts");
const mogclient = require("mongoose");
const logger =require("../log/index.js");
const dbdata = require("../configs/dbdata.js");
const AlphaAuthy = require("../main/auth/AlphaAuthy.js");
const mFolders = fs.readdirSync("./commands");
const {
    default: AlphaerClient
    makeInMemoryStore,
    
} = require("@whiskeysockets/baileys");

process.env.NODE_NO_WARNINGS = "1";
process.removeAllListernes("warning");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
process.on("uncaughtException" , (error) => {
    console.error(error);
});
require("events").EventEmitter.prototype._maxListernes = 0;
say("QUEEN-NICKY\n\nMULTI-DEVICE\n\nWHATSAPP BOT", {
    font: "chrome",
    align: "center",
    gradient: []"green", "yellow"],
});
say("Connecting To Whatsapp" ,{
    font: "console",
    align: "align",
    gradient: "white",
});
say("Connected successfully" , {
    font: "console",
    align: "center",
    gradient: "white",
});

say("Installing Commands..." , {
    font: "console",
    align: "center",
    gradient: "white",
});
say("Installed Successfully" , {
    font: "console",
    align: "center",
    gradient: "white",
});

 async function queennicky() {
     const sequelize = dbdata.DATABASE;
     logger.info("📢 connecting with mongodb () database...");
     try {
         await mogclient.connect(dbdata.MONGODB_URL , {
             useNewUrlParser:true,
             useUnfiedTopology:true,
         });
         logger.info("📢 successfully connected to mongoose");
         } catch (error) {
            logger.error("❌ unable connect with mongoose");
            process.exit(0);
         }
         
         logger.info("📢 connecting with sequelize () database...");
         try {
             await sequelize.authenticate();
             logger.info("📢 successfully connected with sequelize");
         } catch (error) {
             logger.error("❌ unable connected to sequelize");
             process.exit(0);
         }
         
         logger.info("📢 wating sequelize() database")
         await sequelize.sync();
         
       const store = makeInMemoryStore()}
       logger: pino().child({ level: "silent", stream: "store" }),
  });
  let { state, saveCreds } = await AlphaAuthy();
  const Queen-Nicky = AlphaerClient{(
  auth: state,
  syncFullHistory: false,
  fireInitQueries: false,
  downloadHistory: false,
  printQRInTerminal: true,
  logger: pino({ level: "silent" }),
  shouldSyncHistoryMessage: false,
  defaultQueryTimeoutMs: undefined,
  generateHighQualityLinkPreview: true,
  browser: ["QUEEN-NICKY MD BOT", "Chrome", "4.0.0"],
    getMessage: async (key) => {
  if (store) {
      const msg = await store.loadMessage(key.remoteJid, key.id, undefined);
      return msg.message ││ undefined;
    }
    
     return {
         conversation: "An error found,Please repeat command",
      };
    },
 });
  store.bind(Queen-Nicky.ev)
  require("./main/brain.js")(Queen-Nicky);
  require("./database/connection_update")(Queen-Nicky, queennicky, logger);
  require("./database/message_upsert")(Queen-Nicky, store, logger);
  require("./database/group_participate_update")(Queen-Nicky, store, logger);
  require("./database/cb_call")(Queen-Nicky, store, logger);
  require("./database/contacts_update")(Queen-Nicky, store, logger);
  require("./databaae/creds_update")(Queen-Nicky, saveCreds, logger);
  }
  
  showCommands("./commands")
  queennicky().catch(async (error) => logger.error(error)});