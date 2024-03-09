const { Telegraf } = require("telegraf");
const { message } = require("telegraf/filters");
require("dotenv").config();

const bot = new Telegraf(process.env.TELE_BOT);
bot.start((ctx) =>
  ctx.reply(
    `Welcome: leme give my indroduction. I am a tele bot created by Abhisek. For now i am in version 1.0.0.
     currently i have 4 commands
     1. /yamini: gives a short description of Yamini. 
     2. /aditya: gives a short description of Aditya.
     3. /king: who is the real king can you guess ?
     4. send me a sticker: i will reply you back
    `
  )
);
try {
  bot.help((ctx) => ctx.reply("Send me a sticker"));
  bot.on(message("sticker"), (ctx) => ctx.reply("👍"));
  bot.hears("hi", (ctx) => ctx.reply("Hey there"));
  bot.command("yamini", (ctx) =>
    ctx.reply(`yamini kanta is a good boy. but loves kunmuni. :-) `)
  );
  bot.command("aditya", (ctx) =>
    ctx.reply(
      `Aditya Narayan Lenka AKA bada is a good boy. but loves adyasha by heartly. :-) `
    )
  );
  bot.command("king", (ctx) =>
    ctx.reply(
      `Abhisek Mishra creator of me. No words for him he is a King. :-) `
    )
  );
  bot.launch();
} catch (error) {
  console.log("------------- UNEXPECTED COMMAND -------------------");
}

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
