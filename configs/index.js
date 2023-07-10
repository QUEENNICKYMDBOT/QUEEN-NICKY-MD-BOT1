// QUEEN-NICKY MULTI-DEVICE WHATSAPP BOT
// ALL CODES BY ("KIND ALPHA");
// "LICENCED",
// "CONTACT ON WHATSAPP": "94715264791"

require("dotenv");
const fs = require("fs");
if (fs.exitsSync(".env")) {
    require("dotenv").config({path: ".env"});
} else {
    require("dotenv");
}

let sudo = process.env.SUDO;
if (!sudo) sudo = "94715264791,94742443114";
global.sudo = sudo.split(",");
global.ShowInfo = process.env.ShowInfo;
global.upVersion = process.env.upVersion;
global.Showlogger = process.env.Showlogger;
global.REDIS_URL = process.env.REDIS_URL;
global.VERBOSE = process.env.VERBOSE || "0";
global.BOT_MODE = process.env.BOT_MODE || "default";
global.LANG = process.env.LANGUAGE === undefined ? 'SI' : process.env.LANGUAGE.toUpperCase(),
global.MAINTAINANCE_MODE = process.env.MAINTAINANCE_MODE;
global.HUGGING_FACE_API_TOKEN = process.env.HUGGING_FACE_API_TOKEN;
global.PORT = process.env.PORT || Math.floor(Math.random() * 65535) + 10;
global.pgdb = process.env.pgdb;
global.prefix = process.env.prefix || ".";
global.sessionName = process.env.sessionName;
global.timezone = process.env.timezone;
global.upbranch = process.env.upbranch;
global.nameApi = {
  nrtm: "https://nurutomo.herokuapp.com",
  dzx: "https://api.dhamzxploit.my.id",
  xteam: "https://api.xteam.xyz",
  zahir: "https://zahirr-web.herokuapp.com",
  zeks: "https://api.zeks.xyz",
  pencarikode: "https://pencarikode.xyz",
  LeysCoder: "https://leyscoders-api.herokuapp.com",
};
global.keyApi = {
  "api.xteam.xyz": "d90a9e986e18778b",
  "zahirr-web.herokuapp.com": "zahirgans",
  "api.zeks.xyz": "apivinz",
  "pencarikode.xyz": "pais",
  "leyscoders-api.herokuapp.com": "dappakntlll",
};
global.packname = "👩‍🦰 𝚀𝚄𝙴𝙴𝙽-𝙽𝙸𝙲𝙺𝚈 𝙼𝙳 𝙱𝙾𝚃";
global.author = "𝚀𝚄𝙴𝙴𝙽-𝙽𝙸𝙲𝙺𝚈 𝚃𝙴𝙰𝙼™";
global.name = "𝚀𝚄𝙴𝙴𝙽-𝙽𝙸𝙲𝙺𝚈";

global.apiGet = (name, path = "/", query = {}, queryname) =>
  (name in global.nameApi ? global.nameApi[name] : name) +
  path +
  (query || queryname
    ? "?" +
      new URLSearchParams(
        Object.entries({
          ...query,
          ...(queryname
            ? {
                [queryname]:
                  global.keyApi[
                    name in global.nameApi ? global.nameApi[name] : name
                  ],
              }
            : {}),
        }),
      )
    : "");