const moment = require('moment');
const { reply } = require('telegraf');

module.exports = {
  start(ctx) {
    ctx.reply('hey boyo');
  },

  help(ctx) {
    ctx.reply('Send me a sticker');
  },

  oldschool(ctx) {
    ctx.reply('Hello');
  },

  hipster: ctx.reply('λ'),

  main(ctx) {
    ctx.reply('yeah im gucci main!');
  },

  dayof(ctx) {
    ctx.reply('Choose one:', {
      reply_markup: {
        one_time_keyboard: true,
        inline_keyboard: [
          [
            {
              text: 'Day of the year',
              callback_data: 'DDD',
            },
            {
              text: 'Day of the month',
              callback_data: 'Do',
            },
          ],
        ],
      },
    });
  },
};
