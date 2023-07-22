const moment = require('moment');
const {
  Telegraf
} = require('telegraf');
let now = moment();

const bot = new Telegraf('6170577600:AAHuR4w5sEbEW3UBiw7Wq2AIcrb8bVsEfvc');

bot.start((ctx) => {
  bot.catch((err, ctx) => {
    console.log(err);
  })
  ctx.reply('hey boyo yoyo')
  ctx.state.nigga = "nigga";
  console.log(ctx.update.message.chat);
  console.log("----------------------------------------------------------------");
  console.log(ctx.chatMember);
  console.log("----------------------------------------------------------------");
  console.log(ctx.update.message.from);
  console.log("----------------------------------------------------------------");
  console.log(ctx.update.message.entities);
  console.log("----------------------------------------------------------------");
  console.log(ctx.telegram.options.agent);

});
bot.command('weekoftheyear_progress', (ctx) => {
  const now = moment();
  const startOfWeek = moment().startOf('isoWeek');
  const endOfWeek = moment().endOf('isoWeek');
  
  const weekProgress = now.diff(startOfWeek, 'minutes') / endOfWeek.diff(startOfWeek, 'minutes') * 100;

  const message = `
    This week's progress: ${weekProgress.toFixed(0)}%
  `;
  
  ctx.reply(message);
});


bot.command('weekoftheyear', (ctx) => {
  const now = moment();
  const weekOfYear = now.week();
  
  const message = `The current week of the year is ${weekOfYear}.`;
  
  ctx.reply(message);
});


// /progress_day command
bot.command('progress_day', (ctx) => {
  const now = moment();
  const startOfDay = moment().startOf('day');
  
  const dayProgress = now.diff(startOfDay, 'minutes') / 1440 * 100;
  const dayStatus = `${now.diff(startOfDay, 'hours') + 1}/${24}`;

  const message = `Today's progress: ${dayProgress.toFixed(0)}% (${dayStatus})`;
  
  ctx.reply(message);
});

// /progress_week command
bot.command('progress_week', (ctx) => {
  const now = moment();
  const startOfWeek = moment().startOf('isoWeek');
  
  const weekProgress = now.diff(startOfWeek, 'minutes') / 10080 * 100;
  const weekStatus = `${now.diff(startOfWeek, 'days') + 1}/${7}`;

  const message = `This week's progress: ${weekProgress.toFixed(0)}% (${weekStatus})`;
  
  ctx.reply(message);
});

// /progress_month command
bot.command('progress_month', (ctx) => {
  const now = moment();
  const startOfMonth = moment().startOf('month');
  
  const monthProgress = now.diff(startOfMonth, 'minutes') / moment().daysInMonth() / 1440 * 100;
  const monthStatus = `${now.diff(startOfMonth, 'days') + 1}/${moment().daysInMonth()}`;

  const message = `This month's progress: ${monthProgress.toFixed(0)}% (${monthStatus})`;
  
  ctx.reply(message);
});

// /progress_year command
bot.command('progress_year', (ctx) => {
  const now = moment();
  const startOfYear = moment().startOf('year');
  
  const yearProgress = now.diff(startOfYear, 'minutes') / 525600 * 100;
  const yearStatus = `${now.diff(startOfYear, 'days') + 1}/${365}`;

  const message = `This year's progress: ${yearProgress.toFixed(0)}% (${yearStatus})`;
  
  ctx.reply(message);
});


bot.command('countdown', (ctx) => {
  const eventDate = moment(ctx.message.text.slice(10), 'DD/MM/YYYY');
  const currentDate = moment();
  const daysLeft = eventDate.diff(currentDate, 'days');

  if (!eventDate.isValid()) {
    ctx.reply('Invalid date format. Please use DD/MM/YYYY.');
  } else if (daysLeft < 0) {
    ctx.reply('The event has already passed.');
  } else {
    const formattedDate = eventDate.format('DD/MM/YYYY');
    ctx.replyWithHTML(`There are <i>${daysLeft}</i> days left until ${formattedDate}.`);
  }
});

bot.command('time', (ctx) => {
  const now = moment();

  const fmts = [
    'h:mm:ss a',
    'H:mm:ss',
    'h:mm:ss A',
    'HH:mm:ss',
    'h:mm a',
    'H:mm',
    'h:mm A',
    'HH:mm',
    'LT',
    'LTS',
    'L',
    'LL',
    'LLL',
    'LLLL',
    'l',
    'll',
    'lll',
    'llll'
  ];

  const timeStrings = fmts.map(fmt => now.format(fmt));

  ctx.reply(`Current time in different formats:\n\n${timeStrings.join('\n')}`);
});


bot.command('format', (ctx) => {
  const fmt = ctx.message.text.slice(13); // Extract the desired format from the command argument
  const currentTime = moment().format(fmt); // Get the current date and time in the desired format
  ctx.reply(`The current time is: ${currentTime}`);
});

bot.command('age', (ctx) => {
  const dateOfBirth = ctx.message.text.slice(5); // Extract the date of birth from the command argument
  const now = moment(); // Get the current date and time
  const dob = moment(dateOfBirth, 'DD/MM/YYYY'); // Create a moment object from the date of birth

  if (!dob.isValid()) { // Check if the date of birth is valid
    ctx.reply(`Invalid date of birth: ${dateOfBirth}`);
    return;
  }

  const ageInDays = now.diff(dob, 'days');
  const age = moment.duration(ageInDays, 'days');
  const years = age.years();
  const months = age.months();
  const days = age.days();

  ctx.reply(`Total number of days: ${ageInDays}\nAge: ${years} years, ${months} months, ${days} days`);
});


// bot.on('text', (ctx) => {
//   const dateOfBirth = moment(ctx.message.text, 'MM/DD/YYYY');
//   if (dateOfBirth.isValid()) {
//     const ageInDays = moment().diff(dateOfBirth, 'days');
//     ctx.reply(`You are ${ageInDays} days old.`);
//   } else {
//     ctx.reply('Invalid date format. Please enter your date of birth in the format MM/DD/YYYY.');
//   }
// });


bot.command('converttime', (ctx) => {
  const timeStr = ctx.message.text.slice(13); // Extract the time string from the command argument
  const regex = /^(\d+)hrs$/; // Regular expression to match "Xhrs" format
  const match = regex.exec(timeStr); // Match the regular expression with the time string

  if (!match) { // Check if the time string matches the format
    ctx.reply(`Invalid time format: ${timeStr}`);
    return;
  }

  const hours = parseInt(match[1]); // Extract the number of hours
  const minutes = hours * 60; // Convert to minutes
  const seconds = minutes * 60; // Convert to seconds

  // Reply with the conversions
  ctx.reply(`In ${hours} hours:\n${minutes} minutes\n${seconds} seconds`);
});

// Command for checking if a given date is past, present or future
bot.command('checkdate', (ctx) => {
  const dateString = ctx.message.text.slice(11); // Extract the date from the command argument
  const now = moment(); // Get the current date and time

  // Check if the date is valid
  if (!moment(dateString, 'DD/MM/YYYY', true).isValid()) {
    ctx.reply(`Invalid date: ${dateString}`);
    return;
  }

  const date = moment(dateString, 'DD/MM/YYYY'); // Parse the date string into a moment object

  // Check if the date is before, same as or after the current date
  if (date.isBefore(now, 'day')) {
    ctx.reply(`${dateString} is in the past.`);
  } else if (date.isSame(now, 'day')) {
    ctx.reply(`${dateString} is today.`);
  } else {
    ctx.reply(`${dateString} is in the future.`);
  }
});

bot.command('to12', (ctx) => {
  const time24 = ctx.message.text.slice(5); // Extract the time from the command argument
  const time12 = moment(time24, 'HH:mm').format('h:mm A'); // Convert the time to 12-hour format
  ctx.reply(`${time24} in 12-hour format is ${time12}`);
});

// 12-hour format to 24-hour format conversion
bot.command('to24', (ctx) => {
  const time12 = ctx.message.text.slice(5); // Extract the time from the command argument
  const time24 = moment(time12, 'h:mm A').format('HH:mm'); // Convert the time to 24-hour format
  ctx.reply(`${time12} in 24-hour format is ${time24}`);
});

bot.command('currenttime', (ctx) => {
  const currentTime = moment().format('HH:mm:ss'); // Get the current time in 24-hour format
  ctx.reply(`The current time is ${currentTime}.`);
});

bot.command('dayOfMonth', (ctx) => {
  const currentDate = moment();
  const dayOfMonth = currentDate.date();
  ctx.reply(`Today is the ${dayOfMonth}${getDayOfMonthSuffix(dayOfMonth)} day of the month.`);
});

bot.command('checkdatetime', (ctx) => {
  const datetimeString = ctx.message.text.split(' ')[1];
  const datetime = moment(datetimeString, 'DD/MM/YYYY', true);

  if (datetime.isValid()) {
    ctx.reply(`${datetimeString} is a valid date and time.`);
  } else {
    ctx.reply(`${datetimeString} is not a valid date and time.`);
  }
});


// Function to get the suffix for the day of the month
function getDayOfMonthSuffix(day) {
  if (day >= 11 && day <= 13) {
    return 'th';
  }
  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}

bot.hears('todaydate', (ctx) => {
  fmt = ctx.message.text;


  console.log(fmt);
  ctx.reply(now.format("hh:mm:ss"));
});


bot.command("main", (ctx) => {
  ctx.reply("yeah im gucci main!");
  ctx.telegram.sendMessage("1693198431", "im from another world!");
});

bot.hears(/hi|hello/i, (ctx) => {
  ctx.sendChatAction("typing");

  setTimeout(() => {
    ctx.reply("Yo wassup " + ctx.from.first_name + "!");
  }, 3000);
});

bot.hears(/test/i, (ctx) => {
  ctx.telegram.sendMessage(ctx.chat.id, "hello", {
    reply_markup: {
      one_time_keyboard: true,

      inline_keyboard: [
        [{
            text: "dog",
            callback_data: "dog",
          },
          {
            text: "cat",
            callback_data: "cat",
          },
        ],
      ],
    },
  });
});

bot.action("dog", (ctx) => {
  ctx.answerCbQuery();
  ctx.deleteMessage();

  bot.telegram.sendMessage(ctx.chat.id, "dog menu \n 1 \n 2 \n 3", {
    reply_markup: {
      one_time_keyboard: true,

      inline_keyboard: [
        [{
            text: "wowoww",
            callback_data: "wow",
          },
          {
            text: "close",
            callback_data: "close",
          },
        ],
      ],
    },
  });
});

bot.action("cat", (ctx) => {
  ctx.answerCbQuery();
  bot.telegram.sendMessage(ctx.chat.id, "cat");
});

bot.action("close", (ctx) => {
  ctx.answerCbQuery();
  ctx.deleteMessage();
});

bot.action("wow", (ctx) => {
  ctx.sendMessage("wowowo im dog!");
  ctx.deleteMessage();
})

bot.command("dayof", (ctx) => {
  ctx.telegram.sendMessage(ctx.chat.id, "choose one:", {
    reply_markup: {
      one_time_keyboard: true,

      inline_keyboard: [
        [{
            text: "Day of the year",
            callback_data: "DDD",
          },
          {
            text: "Day of the month",
            callback_data: "D",
          },
        ],
        [{
            text: "Day of Week",
            callback_data: "dddd",
          },
          {
            text: "Day of Week (ISO)",
            callback_data: "E",
          },


        ],
      ],
    },
  })
})

bot.action(["DDD", "D", "dddd", "E"], ctx => {
  ctx.deleteMessage();
  cbdata = ctx.update.callback_query.data;
  ctx.sendMessage(moment().format(cbdata));
  console.log(ctx);
})

bot.command("today", ctx => {
  ctx.reply(`Today's date is ${moment().format("LL")}.`);
})

bot.command("myage", ctx => {
  ctx.reply(`you were born ${moment([2002,1,19]).fromNow()}.`);
})

bot.command('forceReply', (ctx) => {
  ctx.replyWithHTML(
    'This is a <b>forced reply</b>. Please reply to this message.', {
      reply_markup: {
        force_reply: true
      }
    }
  );
});

bot.on('message', (ctx) => {
  if (ctx.message.reply_to_message) {
    ctx.replyWithHTML(
      `You replied: <b>${ctx.message.text}</b>`, {
        reply_markup: {
          remove_keyboard: true
        }
      }
    );
  }
});


bot.hears("text", ctx => {
  ctx.reply(ctx.chatMember);
})


// Command to get profile settings
bot.command('yoyoyo', async (ctx) => {


  ctx.reply("hello boyo, i dont know why i wont work");
});

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));

process.once('SIGTERM', () => bot.stop('SIGTERM'));

console.log("bot is alive and listening...");