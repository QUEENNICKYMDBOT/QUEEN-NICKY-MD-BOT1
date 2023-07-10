const winston = require("winston");
const { combine, timestamp, printf } = winston.format;

const ogger = () => {
  return winston.createLogger({
    level: "silly",
    format: combine(
      winston.format.colorize(),
      timestamp({ format: "HH:mm:ss" }),
      printf(({ level, message, timestamp }) => {
        const boldTimestamp = "\x1b[1m" + timestamp + "\x1b[0m";
        const boldLevel = "\x1b[1m" + level + "\x1b[0m";
        const boldMessage = "\x1b[1m" + message + "\x1b[0m";
        return `${boldTimestamp} ${boldLevel}: ${boldMessage}`;
      })
    ),
    transports: [new winston.transports.Console()],
  });
};

const logger = ogger();
module.exports = logger;