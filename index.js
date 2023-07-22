const { Telegraf } = require('telegraf');

const commands = require('./commands');
const actions = require('./actions');
const messages = require('./messages');
const bot = new Telegraf('6170577600:AAHuR4w5sEbEW3UBiw7Wq2AIcrb8bVsEfvc');

// Register commands
bot.start(commands.start);
bot.help(commands.help);
bot.command('oldschool', commands.oldschool);
bot.command('hipster', commands.hipster);
bot.command('main', commands.main);
bot.command('dayof', commands.dayof);

// Register hears
bot.hears(/hi|hello/i, messages.greeting);
bot.hears(/test/i, messages.test);

// Register actions
bot.action('dog', actions.dog);
bot.action('cat', actions.cat);
bot.action('close', actions.close);
bot.action('wow', actions.wow);
bot.action('DDD', actions.DDD);
bot.action('Do', actions.Do);



// Start the bot
bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

console.log('Bot is alive and listening...');
