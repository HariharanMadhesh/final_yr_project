const moment = require('moment');

module.exports = {
  dog(ctx) {
    ctx.answerCbQuery();
    ctx.deleteMessage();

    ctx.telegram.sendMessage(ctx.chat.id, 'dog menu \n 1 \n 2 \n 3', {
      reply_markup: {
        one_time_keyboard: true,
        inline_keyboard: [
          [
            {
              text: 'wowoww',
              callback_data: 'wow',
            },
            {
              text: 'close',
              callback_data: 'close',
            },
          ],
        ],
      },
    });
  },

  cat(ctx) {
    ctx.answerCbQuery();
    bot.telegram.sendMessage(ctx.chat.id, 'cat');
  },

  close(ctx) {
    ctx.answerCbQuery();
    ctx.deleteMessage();
  },

  wow(ctx) {
    ctx.sendMessage('wowowo im dog!');
    ctx.deleteMessage();
  },

  DDD(ctx) {
    ctx.sendMessage(moment().format('DDD'));
  },

  Do(ctx) {
    ctx.sendMessage(moment().format('Do'));
  },
};
