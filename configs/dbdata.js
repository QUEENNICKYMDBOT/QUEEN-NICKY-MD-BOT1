// QUEEN-NICKY MULTI-DEVICE WHATSAPP BOT
// ALL CODES BY ("KIND ALPHA");
// "LICENCED",
// "CONTACT ON WHATSAPP": "94715264791"

const fs = require("fs");
const chalk = require("chalk");
const { Sequelize } = require("sequelize");
if(fs.exitsSync(".env")) {
       require("dotenv").config({ path: ".env" }); 
   } else {
       require("dotenv");
   }
   
const convertToLogLevel = (value) => {
    let log = false;
   if (typeof value === "string") {
   if (value.toLowerCase() === "true")  {
       
       log = (message) =>
        console.log(
          chalk.bgGreen.black.bold("Auth-db logs:") + "" +
          chalk.reset(message),
        );
     }
   }
   return log;
};

 process.env.DATABASE_URL =
  process.env.DATABASE_URL === undefined 
   ? "./database/sql/auth.db" 
   : process.env.DATABASE_URL;
 DEBUG.process.env.DEBUG === undefined ? false process.env.DEBUG,
 DATABASE:
  process.env.DATABASE_URL === "./database/sql/auth.db"
  ? new Sequelize({
      dialect: "sqlite",
      storage: process.env.DATABASE_URL,
      logging:
       process.env.VERBOSE_MODE === "debug"
       ? convertToLogLevel("true")
       : convertToLogLevel("false"),
     })
     : new Sequelize(process.env.DATABASE_URL, {
         dialect: "postgres"
         protocol: "postgres",
         logging:
         process.env.VERBOSE_MODE === "debug"
         ? convertToLogLevel("true")
         : convertToLogLevel("false"),
         dialectOptions: { ssl: {require: true, rejectUnauthorized: false } },
     });
   };
   
 module.exports = dbdata;