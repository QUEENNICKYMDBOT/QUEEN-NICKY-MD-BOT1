// QUEEN-NICKY MULTI-DEVICE WHATSAPP BOT
// ALL CODES BY ("KIND ALPHA");
// "LICENCED",
// "CONTACT ON WHATSAPP": "94715264791"

require("./configs/index.js");
const { Boom } = require("@hapi/boom");
const { exec } = require("child_process");
const dbdata = require("./configs/dbdata.js")
const purgepg = require("./assets/client/purgepg.js");
const { DisconnectReason } = require("@whiskeysockets/baileys");

module.exports = async(Queen-Nicky,queennicky,logger) => {
    const dbrem = async () => {
        if (dbdata.DATABASE_URL.includes("postgres")) {
            try {
                await purgepg();
            } catch (error) {
                logger.error("❌ Error occurred while purging the database: , error");
            }
            process.exit (0);
        } else {
            exec("rm-rf ./database/sql/auth.db");
            process.exit(0);
        }
    };
    
  Queen-Nicky.ev.on("connection.update" , async (update) => {
      const {
          qr,
          connection,
          isNewLogin,
          lastDisconnect,
          receivedPendingNotifications,
      } = update;
  
  switch (connection) {
      case "connecting":
       logger.info("👩‍🦰 Connecting to Whatsapp...");
       break;
       case "open":
        logger.info("✅ Login successfull");
        break;
        case "close":
         let reason = new Boom(lastDisconnect?..Error)?..output.statusCode;
         logger.info(reason);
        switch(reason) {
            case DisconnectReason.badSession:
            logger.error("❌ Bad session file");
            await dbrem();
            await queennicky();
        break;
        case DisconnectReason.connectionClosed:
        logger.error (
         "❌ connection closed...Reconnecting to whatsapp"
        );
        await queennicky();
        break;
        case DisconnectReason.connectionLost:
        logger.error(
         "❌ connection lost from the the server..Reconnecting to whatsapp"
        );
        break;
        case DisconnectReason.connectionReplaced:
        logger.error(
         "❌ Connection replaced. Another new session is opened. Please close the current session first before establishing a new connection"
        );
        break;
        case DisconnectReason.loggedOut:
        logger.error(
         "❌ Device logged out..please scan again"
        );
        await dbrem();
        await queennicky();
        break;
        case DisconnectReason.restartRequired:
        logger.debug("👩‍🦰 restarting bot");
        await queennicky();
        break;
        case DisconnectReason.timedOut:
        logger.error("❌ connection timed out..reconnecting to whatsapp");
        await queennicky();
        break;
        default:
        logger.error("❌ Unknow DisconnectReason" + reason, connection);
        await dbrem ();
        await queennicky();
        break;
  }
  
  case true:
   logger.debug("User is online..👩‍🦰 Queen-Nicky whatsapp bot active now");
   break;
  case false:
   logger.error("User is offline..👩‍🦰 Queen-Nicky whatsapp bot inactive now");
   break;
  
   if(receivedPendingNotifications === true) {
       logger.debug("📢 received pending notifications...processing");
   } else if (receivedPendingNotifications === false) {
       logger.error("📢 no pending notifications received");
   } else if (isNewLogin === true) {
       logger.debug("👩‍🦰 QUEEN-NICKY MD-VERSION BOT WORKING ON YOUR WHATSAPP ACCOUNT...THANKS FOR USING QUEEN-NICKY");
   } else if (isNewLogin === false) {
          logger.error("📢 User is not performing a new login.");
        } else if (qr) {
          logger.info(
            "QR code received. Please scan the following QR code to log in:"
          );
          console.log(qr);
        } else {
          logger.info("📢 Connection event received:", update);
        }
        break;
    }
  });

  return Queen-Nicky;
};