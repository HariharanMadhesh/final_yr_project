// message.js

const moment = require('moment');

function replyWithTime(ctx) {
  const now = moment();
  ctx.reply(now.format('hh:mm:ss'));
}

function replyWithGreeting(ctx) {
  ctx.sendChatAction('typing');
  setTimeout(() => {
    ctx.reply(`Yo wassup ${ctx.from.first_name}!`);
  }, 3000);
}

function sendMenu(ctx) {
  ctx.telegram.sendMessage(ctx.chat.id, 'hello', {
    reply_markup: {
      one_time_keyboard: true,
      inline_keyboard: [
        [
          {
            text: 'dog',
            callback_data: 'dog',
          },
          {
            text: 'cat',
            callback_data: 'cat',
          },
        ],
      ],
    },
  });
}

function handleDogAction(ctx) {
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
}

function handleCatAction(ctx) {
  ctx.answerCbQuery();
  ctx.telegram.sendMessage(ctx.chat.id, 'cat');
}

function handleCloseAction(ctx) {
  ctx.answerCbQuery();
  ctx.deleteMessage();
}

function handleWowAction(ctx) {
  ctx.sendMessage('wowowo im dog!');
  ctx.deleteMessage();
}

function sendDayMenu(ctx) {
  ctx.sendMessage(ctx.chat.id, 'choose one:', {
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
}

function handleDayOfYearAction(ctx) {
  ctx.sendMessage(moment().format('DDD'));
}

module.exports = {
  replyWithTime,
  replyWithGreeting,
  sendMenu,
  handleDogAction,
  handleCatAction,
  handleCloseAction,
  handleWowAction,
  sendDayMenu,
  handleDayOfYearAction,
};
