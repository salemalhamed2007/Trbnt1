const Discord = require('discord.js');
const client = new Discord.Client();
const convert = require("hh-mm-ss")
const ytdl = require("ytdl-core");
const { Client, Util } = require('discord.js');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const queue = new Map();
const dateFormat = require('dateformat');
const fs = require('fs');
const pretty = require('pretty-ms');
const rn = require('random-number');
const userData = JSON.parse(fs.readFileSync('./userData.json', 'utf8'));
const moment = require('moment');
var Canvas = require('canvas')
var jimp = require('jimp')
const prefix = "=";
let done = {};





client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pong');
      }
});





client.on('ready', () => {                           
client.user.setGame(`Prefix-> =`,'https://www.youtube.com/gg');                                                                                                                                                                                                                                                                                                                                                                                                                            
});



client.on('message', msg => {
        if (msg.content.startsWith(`=warn`)) {
           let args = msg.content.split(" ").slice(1);
          if (!msg.mentions.members.first()) return msg.reply('منشن الشخص المحدد')
          if (!args[1]) return msg.reply('``اكتب السبب``')
          //غير اسم الروم او سوي روم بذا الاسم
          if (msg.guild.channels.find('name', 'warns')) {
            //اذا غيرت فوق غير هنا كمان
            msg.guild.channels.find('name', 'warns').send(`
          تم اعطائك تنبيه : ${msg.mentions.members.first()}
          لأنك قمت بما يلي
          ${args.join(" ").split(msg.mentions.members.first()).slice(' ')}
          `)
          }
        }
})


  client.on('message', message => {
     if(message.content.startsWith(prefix +"bans")) {
        message.guild.fetchBans()
        .then(bans => message.channel.send(`The ban count **${bans.size}** Person`))
  .catch(console.error);
}
});


client.on('message', message => {
    if(message.content.includes('discord.gg')){
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? ??   **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** ممنوع نشر الروابط :angry: ! **`)
    }
}
});




client.on('message', message => {
       if (message.content.startsWith(prefix + 'users1')) {
     let msg =  client.guilds.map(guild => `**${guild.name}** عدد الاعضاء: ${guild.memberCount}`).join('\n');
  let embed = new Discord.RichEmbed()
  .setTitle(`${client.guilds.size}سيرفرات `)
  .setDescription(`${msg}`)
  .setColor("#00ff47");
  message.channel.send(embed);
}
});





client.on('message', function(message) {
    if(message.content.startsWith(prefix + "report")) {
        let messageArgs = message.content.split(" ").slice(1).join(" ");
        let messageReason = message.content.split(" ").slice(2).join(" ");
        if(!messageReason) return message.reply("**# Specify a reason!**");
    let mUser = message.mentions.users.first();
    if(!mUser) return message.channel.send("Couldn't find user.");
    let Rembed = new Discord.RichEmbed()
    .setTitle("`New Report!`")
    .setThumbnail(message.author.avatarURL)
    .addField("**# - Reported User:**",mUser,true)
    .addField("**# - Reported User ID:**",mUser.id,true)
    .addField("**# - Reason:**",messageReason,true)
    .addField("**# - Channel:**",message.channel,true)
    .addField("**# - Time:**",message.createdAt,true)
    .setFooter("لو ان الابلاغ فيه مزح راح يتعرض صاحب الابلاغ لقوبات")
message.channel.send(Rembed)
message.channel.send("__Are you sure you want to send this to the Server owner??__").then(msg => {
    msg.react("?")
    msg.react("?")
.then(() => msg.react('?'))
.then(() =>msg.react('?'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
    message.guild.owner.send(Rembed)
    message.reply("**# - Done! ??**");
})
reaction2.on("collect", r => {
    message.reply("**# - Canceled!**");
})
})
}
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

if (command == "embed") {
    let say = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)
  .setAuthor(message.author.username)
    .setDescription(args.join("  "))
    .setColor(0x06DF00)
    message.channel.sendEmbed(say);
    message.delete();
  }
  });


client.on("message", message => {
 if (message.content === "=help-admin") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription('??أوامر الأدمن??')
	  .addField('?-|=msgserver', `??لخاصية البرودكستات??`)
  	  .addField('?-|=ping', `??يقلك كم بنق البوت??`)
	  .addField('?-|=kick', `??لخاصية طرد??`)
	  .addField('?-|=ban', `?عشان تعطي احد حظر من سيرفر للابد?`)
                .addField('?-=tempban', `??عشان تعطي احد حظر من السيرفر بمدة??`)
	  .addField('?-|=unban', `?لفك الحظر من احد?`)
	  .addField('?-|=bans', `?عشان تشوف عدد المبندين في السيرفر?`)
	  .addField('?-|=clear', `?لخاصية حذف شات?`)
          .addField('?-|=mute', `?لاعطاء احد ميوت يعني تجعله ما يقدر يرسل ولا شئ للابد??`)
       .addField('?-|=tempmute', `?لاعطاء احد ميوت يعني تجعله ما يقدر يرسل ولا شئ لمدة محددة??`)
          .addField('?-|=unmute', `??لفك الميوت عن شخص??`)
          .addField('?-|=untempmute', `??لفك الميوت عن شخص?`)
          .addField('?-|=report', `?عشان تبلغ عن شخص??`)
          .addField('?-|=setchannel', `?لأنشاء روم كتابي?`)
          .addField('?-|=setvoice', `?لأنشاء روم صوتي?`)
	  .addField('?-|=warn', `?عشان تعطي احد انظار و لكي يشتغل الامر سوي روم اسمه warns?`)
          .addField('?-|=autorole toggle', `??عشان تفعل الautorole??`)
          .addField('?-|=autorole set', `??عشان تحط الرتبة الي اول ما احد يدخل ياخذها??`)
                .addField('?-|=info', `??عشان تشوف الرتبة الموضوعة في الAutorole??`)
                .addField('?-|=mutechannel', `??عشان تخلي ما فيه احد يقدر يكتب في الروم المحدد??`)
                .addField('?-|=unmutechannel', `?عشان ترجع الناس تقدر تكتب في الروم الي كتمته?`)
  message.author.send({embed});
      message.channel.send(":white_check_mark: | Check Your DM تم الأرسال بلخاص")
 }
});


client.on("message", message => {
 if (message.content === "=help-public") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription('??أوامر الأعضاء??')
          .addField('?-|=invite', `??لاضافة البوت الى سيرفرك??`)
          .addField('?-|=profile', `?لتشوف ملفك الشخصي??`)
  	  .addField('?-|=bot', `??لمعرفة معلومات البوت??`)
	  .addField('?-|=roles', `??لمعرفة الرتب الي في السيرفر??`)
          .addField('?-|=avatar', `??يجبلك الافتار حقك يعني صورة حسابك??`)
	  .addField('?-|=id', `??يجبلك الملف الشخصي حقك??`)
  	  .addField('?-|=channelinfo', `?ليعطيك معلومات الغرفة??`)
  	  .addField('?-|=say', `??البوت يكرر الكلام الي انت تقوله بدون امبد??`)
  	  .addField('?-|=userinfo', `?لمعرفة معلوماتك بلكامل??`)
          .addField('?-|=servers', `?يجبلك عدد السيرفرات التي البوت داخله?`)
          .addField('?-|=roomsall', `??ليقلك اسماء الرومات الموجودة بسيرفر كلها??`)
	  .addField('?-|=embed', `??البوت يكرر الكلام الي انت تقوله بامبد??`)
	  .addField('?-|=say', `??البوت يكرر الكلام الي انت تقوله بدون امبد??`)
          .addField('?-|=support', `??سيرفر الدعم حق البوت??`)
  	  .addField('?-|=users1', `??يعرض لك جميع السيرفراا الموجودة بلبوت??`)
	  .addField('?-|=image', `??يعرض صورة سيرفر?`)
          .addField('?-|=credits', `??عشان تشوف الكردتس الخاصة بك??`)
          .addField('?-|=daily', `??عشان تاخذ الكردتس اليومية الخاصة بك??`)
          .addField('?-|=trans', `??عشان تعطي لاحد مبلغ من الكردتس الخاصة بك??`)
          .addField('?-|=cal', `??لاستخدام الالة الحاسبة + للجمع - للطرح * للضرب / للقسمة??`)
          .addField('?-|=owner', `??لارسال رسالة لاونر سيرفر??`)
          .addField('?-|=suggest', `??لاقتراح شئ و لازم يكون فيه روم اسمه suggestions??`)
          .addField('?-|=uptime', `??عشان تشوف البوت شغال من متى??`)
          .addField('?-|=botinfo', `??عشان تعرف معلومات البوت??`)
          .addField('?-|=cat', `??يجبلك صورة قطة??`)
  message.author.send({embed});
      message.channel.send(":white_check_mark: | Check Your DM تم الأرسال بلخاص")
 }
});





client.on("message", message => {
 if (message.content === "=help-color") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription('??أوامر الأعضاء??')
      .addField('?-|=color', `??لعرض قائمة الألوان??`)
      .addField('?-|=createcolors', `?لأنشاء 50 لون??`)
      .addField('?-|=setcolor', `??لتحط ايا لون من هول الالوان اكتب الأمر و الرقم من 1 ل50 انت اختر??`)
  message.author.send({embed});
      message.channel.send(":white_check_mark: | Check Your DM تم الأرسال بلخاص")
 }
});




client.on("message", message => {
 if (message.content === "=help-games") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription('??اوامر الألعاب??')
          .addField('?-|=صراحة??', `لعبة صراحه??`)
          .addField('?-|=عواصم??', `لعبة عواصم??`)
	  .addField('?-|=عقاب??', `لعبة عقاب??`)
          .addField('?-|=خواطر??', `لعبة خواط??`)
          .addField('?-|=حجرة أو ورقة أو مقص??', `لعبة حجرة ورقة مقص??`)
          .addField('?-|=حب??', `لعبة الحب??`)
	  .addField('?-|=كت تويت??', `لعبة كت تويت??`)
	  .addField('?-|=لو خيروك??', `لعبة لو خيروك??`)
          .addField('?-|=قرعة??', `لاستعمال القرعة??`)
          .addField('?-|=فكك??', `لعبة فكك??`)
          .addField('?-|=لغز??', `لعبة لغز??`)
          .addField('?-|=شقلب??', `لعبة شقلب??`)
          .addField('?-|=كتابة??', `لعبة كتابة??`)
          .addField('?-|=ركب??', `لعبة ركب??`)
          .addField('?-|=رياضيات??', `لعبة الرياضيات??`)
          .addField('?-|=solts??', `لعبة الإيموجي??`)
  message.author.send({embed});
      message.channel.send(":white_check_mark: | Check Your DM تم الأرسال بلخاص")
 }
});


   client.on('message', message => {
	   if(message.content.startsWith(`${prefix}invite`)){
		   if(!message.channel.guild) return message.channel.send("This Command is Just For Servers!")
		   var embed = new Discord.RichEmbed()
		   .setTitle(">> ClickHere To Add" + `${client.user.username}` + " <<")
		   .setURL("https://discordapp.com/oauth2/authorize?client_id=" + `${client.user.id}` + "&scope=bot&permissions=8")
		   .setTimestamp()
		   .setFooter(`Requested By | ${message.author.username}`)
		   .setColor("RANDOM")
		   message.channel.send(":white_check_mark: | Check Your DM! تم الأرسال بلخاص")
		   message.author.send({embed})
	   }
   });




 client.on("message", message => {
    var prefix = "=";
 if (message.content === "=help-use") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`
????????????? {?TrbntBot??} ?????????????
?-|welcome|??لتفعيل أمر الترحيب أنشاء غرفة أسمها welcome??
?-|welcomeleft|??لتفيل امر المغادرة أنشاء غرفة أسمها welcome??
?-|warn|??لتفعيل أمر الأنذار أنشأ غرفة أسمها warns??
?-|suggest|??لتفعيل الريبورت أنشاء غرفة أسمها suggestions??
?-|log|??لوق لحماية سيرفرك من تهكير اذا حد طرد شخص يظهر لك مين هو وأشياذ كثيرة??
????????????? {?TrbntBot??} ?????????????
      `)
   message.channel.sendEmbed(embed)
    }
   });





client.on("message", message => {
 if (message.content === "=support") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setFooter('© Trbntbot جميع الحقوق محفوظة 2018 لــبوت')
      .addField('**سفواً ولاكن لا يتواجد حلياً سيرفر سبورت**')
  message.author.send({embed});
      message.channel.send(":white_check_mark: | Check Your DM تم الأرسال بلخاص")
 }
});




const TOKEN = "";

function commandIs(str, msg){
    return msg.content.toLowerCase().startsWith('.' + str);
}

function pluck(array) {
    return array.map(function(item) { return item["name"]; });
}

function hasRole(mem, role) {
    if(pluck(mem.roles).includes(role)){
        return true;
    } else {
        return false;
    }

  }











client.on('message', message => {
     if (message.content === "=servers") {
		 if(!message.channel.guild) return;
     let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField("**Servers: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }
});









client.on('message', message => {
     if (message.content === "=ping") {
      const embed = new Discord.RichEmbed()

  .setColor("#FF0000")
  .addField('``سرعة أتصال الــبوت`` ' , `${Date.now() - message.createdTimestamp}` + ' ms`')
 
  message.channel.sendEmbed(embed);
    }
});



var cats = [

"https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg",
"https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg",
"http://www.i-love-cats.com/images/2015/04/12/cat-wallpaper-38.jpg",
"https://www.aspca.org/sites/default/files/cat-care_urine-marking_main-image.jpg",
"https://vignette1.wikia.nocookie.net/houseofnight/images/8/8b/Cats.jpg/revision/latest?cb=20130812053537",
"https://s-media-cache-ak0.pinimg.com/originals/f0/3b/76/f03b7614dfadbbe4c2e8f88b69d12e04.jpg",
"http://www.rd.com/wp-content/uploads/sites/2/2016/04/15-cat-wants-to-tell-you-attention.jpg"
]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'cat')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});


client.on('message', message => {
    if (message.content === "=roles") {
		if(!message.channel.guild) return;
        var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('Roles:',`**[${roles}]**`)
        message.channel.sendEmbed(embed);
    }
});



client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');

  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");

  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});


client.on('message', message => {
    var prefix = "="
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');

  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});


	client.on('message', async message =>{
  if (message.author.boss) return;
	var prefix = "=";

if (!message.content.startsWith(prefix)) return;
	let command = message.content.split(" ")[0];
	 command = command.slice(prefix.length);
	let args = message.content.split(" ").slice(1);
	if (command == "mute") {
		if (!message.channel.guild) return;
		if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("انت لا تملك صلاحيات !! ").then(msg => msg.delete(5000));
		if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
		let user = message.mentions.users.first();
		let muteRole = message.guild.roles.find("name", "Muted");
		if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").then(msg => {msg.delete(5000)});
		if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').then(msg => {msg.delete(5000)});
		let reason = message.content.split(" ").slice(2).join(" ");
		message.guild.member(user).addRole(muteRole);
		const muteembed = new Discord.RichEmbed()
		.setColor("RANDOM")
		.setAuthor(`Muted!`, user.displayAvatarURL)
		.setThumbnail(user.displayAvatarURL)
		.addField("**:busts_in_silhouette:  المستخدم**",  '**[ ' + `${user.tag}` + ' ]**',true)
		.addField("**:hammer:  تم بواسطة **", '**[ ' + `${message.author.tag}` + ' ]**',true)
		.addField("**:book:  السبب**", '**[ ' + `${reason}` + ' ]**',true)
		.addField("User", user, true)
		message.channel.send({embed : muteembed});
		var muteembeddm = new Discord.RichEmbed()
		.setAuthor(`Muted!`, user.displayAvatarURL)
		.setDescription(`
${user} انت معاقب بميوت كتابي بسبب مخالفة القوانين
${message.author.tag} تمت معاقبتك بواسطة
[ ${reason} ] : السبب
اذا كانت العقوبة عن طريق الخطأ تكلم مع المسؤلين
`)
		.setFooter(`في سيرفر : ${message.guild.name}`)
		.setColor("RANDOM")
	user.send( muteembeddm);
  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))

  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");

  let role = message.guild.roles.find (r => r.name === "Muted");

  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")

  await toMute.removeRole(role)
  message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");

  return;

  }

});



client.on('message', async message => {
    let args = message.content.split(" ");
    let command = args[0];

    if(command === prefix + 'tempban') {
      if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply('انت لا تملك الصلاحيات اللازمة').then(msg => {
        msg.delete(3500);
        message.delete(3500);
      });

      if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply('انا لا املك الصلاحيات اللازمة. يحب توفر صلاحيات `Ban Members , Embed Links`').then(msg => {
        msg.delete(3500);
        message.delete(3500);
      });
      let mention = message.mentions.members.first();
      if(!mention) return message.reply('**منشن عضو لطرده**').then(msg => {
        msg.delete(3500);
        message.delete(3500);
      });
      if(mention.highestRole.position >= message.guild.member(message.author).highestRole.positon) return message.reply('**لا يمكنك طرد شخص رتبته اعلى منك**').then(msg => {
        msg.delete(3500);
        message.delete(3500);
      });
      if(mention.highestRole.positon >= message.guild.member(client.user).highestRole.positon) return message.reply('**لا يمكنني طرد شخص رتبته اعلى مني**').then(msg => {
        msg.delete(3500);
        message.delete(3500);
      });
      if(mention.id === message.author.id) return message.reply('**لا يمكنك طرد  نفسك**').then(msg => {
        msg.delete(3500);
        message.delete(3500);
      });

       let duration = args[2];
       if(!duration) return message.reply('**حدد وقت زمني لفك البان عن الشخص**').then(msg => {
         msg.delete(3500);
         message.delete(3500);
       });
       if(isNaN(duration)) return message.reply('**حدد وقت زمني صحيح**').then(msg => {
         msg.delete(3500);
         message.delete(3500);
       });

       let reason = message.content.split(" ").slice(3).join(" ");
       if(!reason) reason = 'غير محدد';

       let thisEmbed = new Discord.RichEmbed()
       .setAuthor(mention.user.username , mention.user.avatarURL)
       .setTitle('لقد تبندت من سيرفر')
       .setThumbnail(mention.avatarURL)
       .addField('# - السيرفر:',message.guild.name,true)
       .addField('# - تم طردك بواسطة',message.author,true)
       .addField('# - السبب',reason)
       .setFooter(message.author.tag,message.author.avatarURL);
       mention.send(thisEmbed).then(() => {
       mention.ban({
         reason: reason,
       });
       message.channel.send(`**:white_check_mark: ${mention.user.username} banned from the server ! :airplane: **  `)
       setTimeout(() => {
         if(duration === 0) return;
         message.guild.unban(mention);
       },duration * 60000);
     });
   }
});

client.on('message' , message => {
    var prefix = "=";
    let user = message.mentions.users.first()|| client.users.get(message.content.split(' ')[1])
    if(message.content.startsWith(prefix + 'unban')) {
        if(!user) return  message.channel.send(`Do this ${prefix} <@ID user> \n or \n ${prefix}unban ID user`);
        message.guild.unban(user);
        message.guild.owner.send(`لقد تم فك الباند عن الشخص \n ${user} \n By : <@${message.author.id}>`)
        var embed = new Discord.RichEmbed()
        .setThumbnail(message.author.avatarURl)
        .setColor("RANDOM")
        .setTitle('**?Unban** !')
        .addField('**?User Unban :** ', `${user}` , true)
        .addField('**?By :**' ,       ` <@${message.author.id}> ` , true)
        .setAuthor(message.guild.name)
        message.channel.sendEmbed(embed)
    }
});



client.on('message', async message => {
  let args = message.content.split(" ");
  if(message.content.startsWith(prefix + "tempmute")) {
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply('**أنت لا تملك الخصائص اللازمة . يجب توفر خاصية `Manage Roles`**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply('**أنا لا املك الخصائص الكافية . يلزم خصائص `Manage Roles` للقيام بهذا الامر**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    let mention = message.mentions.members.first();
    if(!mention) return message.reply('**منشن عضو لأسكاته ( لأعطائة ميوت ) كتابي**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(mention.highestRole.position >= message.guild.member(message.author).highestRole.positon) return message.reply('**لا يمكنك اعطاء لميوت شخص رتبته اعلى منك**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
    if(mention.highestRole.positon >= message.guild.member(client.user).highestRole.positon) return message.reply('**لا يمكنني اعطاء ميوت لشخص رتبته اعلى مني**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
    if(mention.id === message.author.id) return message.reply('**لا يمكنك اعطاء ميوت  لنفسك**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    let duration = args[2];
    if(!duration) return message.reply('**حدد وقت زمني لفك الميوت عن الشخص**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(isNaN(duration)) return message.reply('**حدد وقت زمني صحيح**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    let reason = message.content.split(" ").slice(3).join(" ");
    if(!reason) reason = "غير محدد";

    let thisEmbed = new Discord.RichEmbed()
    .setAuthor(mention.user.username, mention.user.avatarURL)
    .setTitle('تم اغطائك ميوت بسيرفر')
    .setThumbnail(mention.user.avatarURL)
    .addField('# - السيرفر',message.guild.name,true)
    .addField('# - تم اعطائك ميوت بواسطة',message.author,true)
    .addField('# - السبب',reason)

    let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
    if(!role) try {
      message.guild.createRole({
        name: "Muted",
        permissions: 0
      }).then(r => {
        message.guild.channels.forEach(c => {
          c.overwritePermissions(r , {
            SEND_MESSAGES: false,
            READ_MESSAGES_HISTORY: false,
            ADD_REACTIONS: false
          });
        });
      });
    } catch(e) {
      console.log(e.stack);
    }
    mention.addRole(role).then(() => {
      mention.send(thisEmbed);
      message.channel.send(`**:white_check_mark: ${mention.user.username} muted in the server ! :zipper_mouth:  **  `);
      mention.setMute(true);
    });
    setTimeout(() => {
      if(duration === 0) return;
      mention.setMute(false);
      mention.removeRole(role);
      message.channel.send(`**:white_check_mark: ${mention.user.username} unmuted in the server ! :neutral_face:  **  `);
    },duration * 60000);
  } else if(message.content.startsWith(prefix + "untempmute")) {
    let mention = message.mentions.members.first();
    let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply('**أنت لا تملك الخصائص اللازمة . يجب توفر خاصية `Manage Roles`**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply('**أنا لا املك الخصائص الكافية . يلزم خصائص `Manage Roles` للقيام بهذا الامر**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(!mention) return message.reply('**منشن الشخص لفك الميوت عنه**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

      mention.removeRole(role);
      mention.setMute(false);
      message.channel.send(`**:white_check_mark: ${mention.user.username} unmuted in the server ! :neutral_face:  **  `);
  }
});




client.on('message', message => {
  if(!message.channel.guild) return;
if(message.content.startsWith('=msgserver')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let copy = "BomBot";
let request = `Requested By ${message.author.username}`;
if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
msg.react('?')
.then(() => msg.react('?'))
.then(() =>msg.react('?'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`? | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('برودكاست')
.addField('??السيرفر??', message.guild.name)
.addField('??المرسل??', message.author.username)
.addField('??الرسالة??', args)
.setThumbnail(message.author.avatarURL)
.setFooter(copy, client.user.avatarURL);
m.send({ embed: bc })
msg.delete();
})
})
reaction2.on("collect", r => {
message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});


const Sra7a = [
     'صراحه  |  صوتك حلوة؟',
     'صراحه  |  التقيت الناس مع وجوهين؟',
     'صراحه  |  شيء وكنت تحقق اللسان؟',
     'صراحه  |  أنا شخص ضعيف عندما؟',
     'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
     'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
     'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
     'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
     'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
     'صراحه  |  أشجع شيء حلو في حياتك؟',
     'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
     'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
     'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
     'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
     'صراحه  |  نظرة و يفسد الصداقة؟',
     'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
     'صراحه  |  شخص معك بالحلوه والمُره؟',
     'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',
     'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
     'صراحه  |  وش تتمنى الناس تعرف عليك؟',
     'صراحه  |  ابيع المجرة عشان؟',
     'صراحه  |  أحيانا احس ان الناس ، كمل؟',
     'صراحه  |  مع مين ودك تنام اليوم؟',
     'صراحه  |  صدفة العمر الحلوة هي اني؟',
     'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
     'صراحه  |  صفة تحبها في نفسك؟',
     'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
     'صراحه  |  تصلي صلواتك الخمس كلها؟',
     'صراحه  |  ‏تجامل أحد على راحتك؟',
     'صراحه  |  اشجع شيء سويتة بحياتك؟',
     'صراحه  |  وش ناوي تسوي اليوم؟',
     'صراحه  |  وش شعورك لما تشوف المطر؟',
     'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
     'صراحه  |  ما اكثر شي ندمن عليه؟',
     'صراحه  |  اي الدول تتمنى ان تزورها؟',
     'صراحه  |  متى اخر مره بكيت؟',
     'صراحه  |  تقيم حظك ؟ من عشره؟',
     'صراحه  |  هل تعتقد ان حظك سيئ؟',
     'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
     'صراحه  |  كلمة تود سماعها كل يوم؟',
     'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
     'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
     'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
     'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
     '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
     'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
     '‏صراحه | هل تحب عائلتك ام تكرههم؟',
     '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
     '‏صراحه  |  هل خجلت من نفسك من قبل؟',
     '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
     '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
     '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
	 '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
     '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
     '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
     'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
     '‏صراحه  |  ما هو عمرك الحقيقي؟',
     '‏صراحه  |  ما اكثر شي ندمن عليه؟',
	 'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
]
   client.on('message', message => {
 if (message.content.startsWith('=صراحه')) {
     if(!message.channel.guild) return message.reply('** This command only for servers **');
  var client= new Discord.RichEmbed()
  .setTitle("لعبة صراحة ..")
  .setColor('RANDOM')
  .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
  .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                  .setTimestamp()

   message.channel.sendEmbed(client);
   message.react("??")
 }
});

const Za7f = [
    "**صورة وجهك او رجلك او خشمك او يدك**.",
    "**اصدر اي صوت يطلبه منك الاعبين**.",
    "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
    "**روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل**.",
    "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
    "**سمعنا صوتك و غن اي اغنية من اختيار الاعبين الي معك**.",
    "**ذي المرة لك لا تعيدها**.",
    "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
    "**صور اي شيء يطلبه منك الاعبين**.",
    "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
    "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
    "**سو مشهد تمثيلي عن مصرية بتولد**.",
    "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
    "**ذي المرة لك لا تعيدها**.",
    "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
    "**روح عند اي احد بالخاص و قول له انك تحبه و الخ**.",
    "**اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص**.",
    "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
    "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
    "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
    "**غير اسمك الى اسم من اختيار الاعبين الي معك**.",
    "**اتصل على امك و قول لها انك تحبها :heart:**.",
    "**لا يوجد سؤال لك سامحتك :slight_smile:**.",
    "**قل لواحد ماتعرفه عطني كف**.",
    "**منشن الجميع وقل انا اكرهكم**.",
    "**اتصل لاخوك و قول له انك سويت حادث و الخ....**.",
    "**روح المطبخ و اكسر صحن او كوب**.",
    "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
    "**قول لاي بنت موجود في الروم كلمة حلوه**.",
    "**تكلم باللغة الانجليزية الين يجي دورك مرة ثانية لازم تتكلم اذا ما تكلمت تنفذ عقاب ثاني**.",
    "**لا تتكلم ولا كلمة الين يجي دورك مرة ثانية و اذا تكلمت يجيك باند لمدة يوم كامل من السيرفر**.",
    "**قول قصيدة **.",
    "**تكلم باللهجة السودانية الين يجي دورك مرة ثانية**.",
    "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
    "**اول واحد تشوفه عطه كف**.",
    "**سو مشهد تمثيلي عن اي شيء يطلبه منك الاعبين**.",
    "**سامحتك خلاص مافيه عقاب لك**.",
    "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
    "**روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك**.",
    "**تاخذ عقابين**.",
    "**قول اسم امك افتخر بأسم امك**.",
    "**ارمي اي شيء قدامك على اي احد موجود او على نفسك**.",
    "**اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك**.",
    "**اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه**.",
    "**تتصل على الوالده  و تقول لها خطفت شخص**.",
    "** تتصل على الوالده  و تقول لها تزوجت با سر**.",
    "**????تصل على الوالده  و تقول لها  احب وحده**.",
      "**تتصل على شرطي تقول له عندكم مطافي**.",
      "**خلاص سامحتك**.",
      "** تصيح في الشارع انا  مجنوون**.",
      "** تروح عند شخص تقول له احبك**.",

]


 client.on('message', message => {
   if (message.content.startsWith("=عقاب")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL)
 .addField('Bom Bot ?' ,
  `${Za7f[Math.floor(Math.random() * Za7f.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[38ab] Send By: ' + message.author.username)
    }
});

var rebel = ["https://f.top4top.net/p_682it2tg6.png","https://e.top4top.net/p_682a1cus5.png","https://d.top4top.net/p_682pycol4.png","https://c.top4top.net/p_682vqehy3.png","https://b.top4top.net/p_682mlf9d2.png","https://a.top4top.net/p_6827dule1.png","https://b.top4top.net/p_682g1meb10.png","https://a.top4top.net/p_682jgp4v9.png","https://f.top4top.net/p_682d4joq8.png","https://e.top4top.net/p_6828o0e47.png","https://d.top4top.net/p_6824x7sy6.png","https://c.top4top.net/p_682gzo2l5.png","https://b.top4top.net/p_68295qg04.png","https://a.top4top.net/p_682zrz6h3.png","https://f.top4top.net/p_6828vkzc2.png","https://e.top4top.net/p_682i8tb11.png"]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'لو خيروك')) {
         var cat = new Discord.RichEmbed()
.setImage(rebel[Math.floor(Math.random() * rebel.length)])
message.channel.sendEmbed(cat);
    }
});


 const cuttweet = [
     'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
     'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
     'كت تويت | الحرية لـ ... ؟',
     'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
     'كت تويت ‏| كلمة للصُداع؟',
     'كت تويت ‏| ما الشيء الذي يُفارقك؟',
     'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
     'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
     'كت تويت | بعد 10 سنين ايش بتكون ؟',
     'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
     '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
     'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
     '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
     '‏كت تويت | وش يفسد الصداقة؟',
     '‏كت تويت | شخص لاترفض له طلبا ؟',
     '‏كت تويت | كم مره خسرت شخص تحبه؟.',
     '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
     '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
     '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
     '‏كت تويت |أقوى كذبة مشت عليك ؟',
     '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
     'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
     '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
     '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
     '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
     '‏كت تويت | مطلبك الوحيد الحين ؟',
     '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
     '‏كت تويت | هل تفضل الافلام ولا المسلسلات ؟',
     '‏كت تويت | وش افضل قناة تتابعها في اليوتيوب ؟',
     '‏كت تويت | وش افضل لعبة ممكن تلعبها  ؟',
     '‏كت تويت | وش تتباع اكثر افلام اجنبي ام عربي ؟',
     '‏كت تويت | مو لاقي سؤال اسئله لك :joy:',
]

 client.on('message', message => {
   if (message.content.startsWith("=كت تويت")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL)
 .addField('لعبه كت تويت' ,
  `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});

const secreT = [
  "**الحياة بكل ما فيها تقف دائمًا على حد الوسطية بين اتزان المعنى وضده من حب وكره وحق وباطل وعدل وظلم**.",
  "**كى تعيش عليك ان تتقن فن التجاهل باحتراف**.",
  "**لا تحزن على من اشعرك بان طيبتك غباء امام وقاحته**.",
  "**هناك من يحلم بالنجاح وهناك من يستيقظ باكرا لتحقيقه**.",
  "**ان تعالج ألمك بنفسك تلك هى القوة**.",
  "**الجميع يسمع ما تقول والاصدقاء ينصتون لما تقول وافضل الاصدقاء ينصتون لما اخفاه سكوتك**.",
  "**انتهى زمن الفروسية ، لم تنقرض الخيول بل انقرض الفرسان**.",
  "**ان تكون اخرسا عاقلا خير من ان تكون نطوقا جهولا**.",
  "**المناقشات العقيمة لا تنجب افكارا**.",
  "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.",
  "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.",
]


 client.on('message', message => {
   if (message.content.startsWith("=خواطر")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')

   .setThumbnail(message.author.avatarURL)
 .addField('لعبه خواطر' ,
  `${secreT[Math.floor(Math.random() * secreT.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});




const Love = [  "**احبك / عدد قطرات المـــطر والشجر وامواج البحر والنجوم الي تتزاحم مبهورة في جمال القمر**.",  "**ساعزفك وساجعلك لحنا تغني عليه جميع قصائد العشــق**.",  "**احبك موت... لاتسألني ما الدليل ارأيت رصاصه تسأل القتيل؟**.",  "**ربما يبيع الانسان شيئا قد شراه لاكن لا يبيع قلبا قد هواه**.",  "**و ما عجبي موت المحبين في الهوى ........... و لكن بقاء العاشقين عجيب**.",   "**حلفت / لاحشـــد جيوش الحب واحتلك مسكين ربي بلاك بعـــاشق ارهـــابي**.",   "**العيــن تعشق صورتك ... والقلب يجري فيه دمك وكل مااسمع صوتك ...شفايفي تقول احبك**.",   "**ياحظ المكان فيك..ياحظ من هم حواليك ...ياحظ الناس تشوفك ... وانا مشتاق اليك**.",   "**لو كنت دمعة داخل عيوني بغمض عليك وصدقي ما راح افتح...ولو كان الثمن عيوني**.",   "**سهل اموت عشانك لكن الصعب اعيش بدونك سهل احبك لكن صعب انساك**.",   "**أخشى ان انظر لعيناك وأنا فى شوق ولهيب لرؤياك**.",   "**أتمنى ان اكون دمعة تولد بعينيك واعيش على خديك واموت عند شفتيك**.",   "**أحياناً أرى الحياة لا تساوى إبتسامة لكن دائماً إبتسامتك هى كيانى**.",   "**من السهل أن ينسى الانسان نفسه .. لكن من الصعب ان ينسى نفساً سكنت نفسه !**.",   "**نفسى أكون نجمة سماك .. همسة شفاك .. شمعة مساك .. بس تبقى معايا وانا معاك**.",   "**أهنئ قلبى بحبك وصبر عينى فى بعدك وأقول إنك نور عينى يجعل روحى فدى قلبك**.", ]


 client.on('message', message => {
   if (message.content.startsWith("=حب")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL)
 .addField('BomBot' ,
  `${Love[Math.floor(Math.random() * Love.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});













   client.on("message", message => {
    const prefix = "="

          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "image"){
          const embed = new Discord.RichEmbed()

      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });

  client.on('message', message => {
    if (message.content.startsWith("=avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;

      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
	     }
  });



  client.on('message', message => {
      if (message.content.startsWith(prefix + 'clear')) {
    if(!message.channel.guild) return;
let args = message.content.split(" ").slice(1);

  const messagecount = parseInt(args.join(' '));

  message.channel.fetchMessages({

    limit: messagecount

}).then(messages => message.channel.bulkDelete(messages));

   var embed = new Discord.RichEmbed()
        .setTitle('تم مسح الشات بنجاح|?')
        .setColor('RED')
       message.channel.sendEmbed(embed)

};

});









client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('=bcall')){
 if (message.author.id !== '382889731316514826') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
 if(!message.author.id === '382889731316514826') return;
message.channel.sendMessage('جار ارسال الرسالة |?')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});




let ar = JSON.parse(fs.readFileSync(`./Data/AutoRole.json`, `utf8`))


client.on('guildMemberAdd', member => {
  if(!ar[member.guild.id]) ar[member.guild.id] = {
  onoff: 'Off',
  role: 'Member'
  }
  if(ar[member.guild.id].onoff === 'Off') return;
member.addRole(member.guild.roles.find(`name`, ar[member.guild.id].role)).catch(console.error)
})

client.on('message', message => {

if(!message.guild) return
  if(!ar[message.guild.id]) ar[message.guild.id] = {
  onoff: 'Off',
  role: 'Member'
  }

if(message.content.startsWith(prefix + `autorole`)) {
  let perms = message.member.hasPermission(`MANAGE_ROLES`)

  if(!perms) return message.reply(`You don't have permissions, required permission : Manage Roles.`)
  let args = message.content.split(" ").slice(1)
  if(!args.join(" ")) return message.reply(`${prefix}autorle toggle/setrole [ROLE NAME]`)
  let state = args[0]
  if(!state.trim().toLowerCase() == 'toggle' || !state.trim().toLowerCase() == 'setrole') return message.reply(`Please type a right state, ${prefix}modlogs toggle/setrole [ROLE NAME]`)
    if(state.trim().toLowerCase() == 'toggle') {
     if(ar[message.guild.id].onoff === 'Off') return [message.channel.send(`**The Autorole Is __????__ !**`), ar[message.guild.id].onoff = 'On']
     if(ar[message.guild.id].onoff === 'On') return [message.channel.send(`**The Autorole Is __??????__ !**`), ar[message.guild.id].onoff = 'Off']
    }
   if(state.trim().toLowerCase() == 'set') {
   let newRole = message.content.split(" ").slice(2).join(" ")
   if(!newRole) return message.reply(`${prefix}autorole setrole [ROLE NAME]`)
     if(!message.guild.roles.find(`name`,newRole)) return message.reply(`I Cant Find This Role.`)
    ar[message.guild.id].role = newRole
     message.channel.send(`**The AutoRole Has Been Changed to ${newRole}.**`)
   }
         }

if(message.content === prefix + 'info') {
    let perms = message.member.hasPermission(`MANAGE_GUILD`)
    if(!perms) return message.reply(`You don't have permissions.`)
    var embed = new Discord.RichEmbed()

.addField(`Autorole : :sparkles:  `, `

State : __${ar[message.guild.id].onoff}__
Role : __${ar[message.guild.id].role}__`)


    .setColor(`BLUE`)
    message.channel.send({embed})
  }


    fs.writeFile("./Data/AutoRole.json", JSON.stringify(ar), (err) => {
    if (err) console.error(err)
  });


})



client.on('ready', () => {
  console.log(`AutoRole Code Started By Friends Team`);
    client.user.setStatus("dnd")
});


  const math = require('math-expression-evaluator');
const stripIndents = require('common-tags').stripIndents;

client.on('message', msg => {
if (msg.content.startsWith(prefix + 'cal')) {
  let args = msg.content.split(" ").slice(1);
      const question = args.join(' ');
  if (args.length < 1) {
      msg.reply('**من فضلك .. قم بكتابة سؤال **.');
} else {    let answer;
  try {
      answer = math.eval(question);
  } catch (err) {
      return msg.reply(`Error: ${err}`);
  }

  const embed = new Discord.RichEmbed()
  .setThumbnail('https://banner2.kisspng.com/20180215/ade/kisspng-office-supplies-animation-calculator-5a85e764e3aa68.4914103215187249649325.jpg')
.setDescription(`**
 السؤال يقولك :thinking:  : ${question}

 طبعا الاجابة :writing_hand: : ${answer}**
`)
  msg.channel.send(embed)
  }
};
});





client.on('message', message => {
    if (message.content.startsWith("=botinfo")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``INFO  Trbnt`` ')
            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``servers``', [client.guilds.size], true)
            .addField('``channels``' , `[ ${client.channels.size} ]` , true)
            .addField('``Users``' ,`[ ${client.users.size} ]` , true)
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``My ID``' , `[ ${client.user.id} ]` , true)
                  .addField('``My Prefix``' , `=` , true)
                  .addField('``My Language``' , `[ Java Script ]` , true)
                  .setFooter('By |IISLooMz_')
    })
}
});


client.on('message', message => {
     var prefix = "="
     if (message.author.bot) return;
if (message.content.startsWith(prefix + "uptime")) {
    let uptime = client.uptime;

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let notCompleted = true;

    while (notCompleted) {

        if (uptime >= 8.64e+7) {

            days++;
            uptime -= 8.64e+7;

        } else if (uptime >= 3.6e+6) {

            hours++;
            uptime -= 3.6e+6;

        } else if (uptime >= 60000) {

            minutes++;
            uptime -= 60000;

        } else if (uptime >= 1000) {
            seconds++;
            uptime -= 1000;

        }

        if (uptime < 1000)  notCompleted = false;

    }

    message.channel.send("`" + `${days} days, ${hours} hrs, ${minutes} , ${seconds} sec` + "`");


}
});

client.on('ready', () => {
  console.log('?[??????????????????????????????????]?');
  console.log('')
  console.log('            ?[????????????]?')
  console.log('              Bot Is Online')
  console.log('            ?[????????????]?')
  console.log('')
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('')
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('')
  console.log('?[????????????????????????????????????]?')
});


client.on('message', message => {


if (message.content === prefix + "mutechannel") {
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("Channel Muted ? ")
           });
}
  if (message.content === prefix + "unmutechannel") {
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("Channel UnMuted ? ")
           });
}


});

client.on('guildCreate', guild => {
  client.channels.get("477437791702220803").send(`:white_check_mark: **تم اضافة البوت في سيرفر جديد مبروكك
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`)
});
client.on('guildDelete', guild => {
  client.channels.get("477437886275387392").send(`:negative_squared_cross_mark: **طردوني حرام والله ايش سويت انا
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`)
});

  client.on('message', ReBeeL => {
  var prefix = "=";
    if(ReBeeL.author.bot) return;
      if(ReBeeL.content.startsWith(prefix + "owner")) {
        let args = ReBeeL.content.split(" ").slice(1);
           if(!args[0]) {
              ReBeeL.channel.send("** =owner <message> **")
                return;
                  }
                   var rebel = new Discord.RichEmbed()
                      .setColor("RANDOM")
                        .setDescription(`
تم إرسآل لك رسآلة من السيرفر الخاص بك
${ReBeeL.guild.name}
الرسآلة
${args}
        `)
        .setFooter(` بوآسطة ${ReBeeL.author.username}#${ReBeeL.author.discriminator}`)
       ReBeeL.guild.owner.send(rebel);
      ReBeeL.channel.send("**تم إرسآل الرسآلة إلى أونر السيرفر**")
     }
    }
  );

client.on("message", message => {
    var prefix = "=";
 if (message.content === "=help") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`

??Commands TrbutBot?|أوامر البوت الأسطورية??

????????????? {?TrbutBot?} ?????????????
? =help-admin ? ??اوامر الادارة??

? =help-public ? ??اوامر العامة??

? =help-games ? ??اوامر الالعاب??

? =help-welcome ? ??معلومات الترحيب في البوت??

? =help-color ? ?أوامر الألوان??

? =help-use ???للمزيد من المعلومات للبوت??
????????????? {?TrbutBot?} ?????????????
      `)
   message.channel.sendEmbed(embed)

   }
   });









   client.on('message', msg => {
  //Code By : ‡ ? ?????? ‡#2026
  if(msg.content.startsWith('=suggest')) {
    if(!msg.channel.guild) return msg.reply('** هاذا الامر فقط للسيرفرات**');
    if(!msg.guild.channels.find('name', 'suggestions')) return msg.reply('**الرجاء إضافة روم بإسم (suggestions)**');
    let args = msg.content.split(" ").slice(1);
    if(!args[1]) return msg.reply(`**الرجاء كتابة اقتراح**`)
    //غيره على حسب اسم روم الاقتراحات او سوي مثل اسم الروم الموجود هنا
    if(msg.guild.channels.find('name', 'suggestions')) {
      //غيره هنا كمان اذا غيرت فوق
      msg.guild.channels.find('name', 'suggestions').send(`
    **New Suggestion By** : ${msg.member}

      **The Suggestion** :
      ${args.join(" ").split(msg.mentions.members.first()).slice(' ')}
      `)
      .then(function (message) {
        message.react('?')
        message.react('?')
      })
      }
    }

});





e.content === "=help-welcome") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
        .setDescription('??أوامر الترحيب??')
	.addField('?-|=wlc 1', `??يخلي البوت يرسل لك ترحيب بشكل حلو??`)
	  .addField('?-|=wlc 2', `??يخلي البوت يرسل لك ترحيب بشكل تاني خورافي??`)
	  .addField('?-|=wlc 3', `??يخلي البوت يرسل لك ترحيب بشكل غير الي فاتوا??`)
	  .addField('?-|=wlc 4', `??يخلي البوت يرسل لك ترحيب بشكل اخر و خورافي مرة??`)
          .addField('?-|=wlc 5', `??يخلي البوت يرحب بك بشكل حلو??`)
          .addField('?-|=wlc 6', `??يخلي البوت يرحب بك بطريقة خورافية??`)
          .addField('?-|=wlc 7', `??يخلي البوت يرحب بك بطريقة حلوة??`)
          .addField('?-|=wlc 8', `??يخلي البوت يرحب بك مثل الباقي??`)
          .addField('?-|=wlc 9', `??يخلي البوت يرحب بك مثل الباقي??`)
          .addField('?-|=wlc 10', `??يخلي البوت يرحب بك مثل الباقي??`)
  message.author.send({embed});
      message.channel.send(":white_check_mark: | Check Your DM تم الأرسال بلخاص")

 }
});


  

client.on('message', function(message) {
    if(message.content.startsWith(prefix + 'قرعة')) {
        let args = message.content.split(" ").slice(1);
        if (!args[0]) {
            message.channel.send('**حط رقم معين يتم السحب منه**');
            return;
            }
    message.channel.send(Math.floor(Math.random() * args.join(' ')));
            if (!args[0]) {
          message.edit('1')
          return;
        }
    }
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

client.on('message', message => {
 if (message.content.startsWith("=wlc 1")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***بكل حب واحترام وشوق نستقبلك ونتمنى لك قضآء أجمل اللحظات ولآوقات معنا***')
  .setImage('http://www.imgion.com/images/01/Welcome-buddy.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});
 
  
client.on('message', message => {
 if (message.content.startsWith("=wlc 2")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***هلا باللي ملك قلبي هلا باللي فداه الروح هلا باللي شغل فكري هلا باللي هواه البوح.***')
  .setImage('https://www.askideas.com/media/13/Welcome-With-Rose-Flowers-Sign.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith("=wlc 3")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***مرحباً بك عدد ما خطته الأقلام من حروف وبعدد ما أزهر بالأرض زهور مرحباً ممزوجة بعطر الورد ورائحة البخور***')
  .setImage('https://www.askideas.com/media/13/Welcome-Signboard-Clipart.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});
  
client.on('message', message => {
 if (message.content.startsWith("=wlc 4")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***مرحبا باللي يجينا هلت الفرحة علينا نشدت الأشواق فينا مرحباً بكم مرحباً.***')
  .setImage('https://www.askideas.com/media/13/Welcome-Sign.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith("=wlc 5")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***لو علمت الدار بمن زارها فرحت وأستبشرت ثم باست موضع القدمين وأنشدت بلسان الحال قائلة أهلاً وسهلاً بأهل الجود والكرم.***')
  .setImage('https://www.askideas.com/media/13/Welcome-Sign-With-Flowers.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith("=wlc 6")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***مرحبا بك كثر النجوم الساطعة وكثر الورود الفائحة التي تفوح بأزكى العطور وكثر ما تكتب الأقلام من الحروف والعبارات. ***')
  .setImage('https://www.askideas.com/media/13/Welcome-Sign-For-Front-Door.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith("=wlc 7")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***حي الله هذه الوجوه رؤيتها تزيد الأفراح، نسماتها تداوي الجروح، وعبيرها فواح، تنثره الرياح، على القمم في الليل في الصباح***')
  .setImage('https://www.askideas.com/media/13/Small-Welcome-Sign-On-Door.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith("=wlc 8")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***مرحبا بكل الضيوف يوم نادى غير عادي مرحبا فوق الألوف ***')
  .setImage('https://www.askideas.com/media/13/Welcome-Colorful-Sign-Picture.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith("=wlc 9")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***يا مرحبا وسهلاً بضيف لفانا، يزهي بك الأدب العربي وينثر لك أزهار يسقيك من نبع المشاعر وفانا، لين الهلا تثمر على غصونك أطيار. ***')
  .setImage('https://www.askideas.com/media/13/Welcome-Deers-Sign.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith("=wlc 10")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***كل شيء يرحب بك كل شيء يتبسم ويتوهج فرحاً بقدومك كل شيء ينمق عبارات الترحيب ويصوغ كلمات الحب لوجودك كل شيء ينتظر مشارك??تك وقلمك الرائع وأبداعاتك كل شيء يردد حياك الله.***')
  .setImage('https://www.askideas.com/media/13/Beautiful-Wooden-Welcome-Sign.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});
		
		




client.on('message', message => {
     if (message.content === "=bot") {
            if(!message.channel.guild) return message.reply('** This command only for servers **');
     let embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .addField("**??عدد السيرفرات الي فيها البوت??:**" , client.guilds.size)
  .addField("**??المستخدمين??:**", client.users.size)
  .addField("**??قنوات??:**", client.channels.size)
  .setTimestamp()
message.channel.sendEmbed(embed);
    }
});





	  



client.on('guildCreate', guild => {
  var embed = new Discord.RichEmbed()
  .setColor(0x5500ff)
  .setDescription('شكراً لك لإضافه البوت الى سيرفرك')
      guild.owner.send(embed)
});






client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`??ولكم نورت السيرفر | Welcome To Server?? 
اسم العضو المحترم |name member??  ${member}
انت العضو الأسطورة رقم |you member number is?? ${member.guild.memberCount}`) 
}).catch(console.error)
})




client.on("message", (message) => {
if (message.content.startsWith("=setchannel")) {
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage('تـم إنـشاء روم كـتابـي بنجاح|?')

}
});





client.on("message", (message) => {
if (message.content.startsWith("=setvoice")) {
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage('تـم إنـشاء روم صـوتي بنجاح|?')

}
});




client.on('message' , message => {
    var prefix = "=";
if(message.content.startsWith(prefix+"userinfo")) {
    let user = message.mentions.users.first() || message.author;
    const joineddiscord = (user.createdAt.getDate() + 1) + '-' + (user.createdAt.getMonth() + 1) + '-' + user.createdAt.getFullYear() + ' | ' + user.createdAt.getHours() + ':' + user.createdAt.getMinutes() + ':' + user.createdAt.getSeconds();
    message.delete();
    let game;
    if (user.presence.game === null) {
        game = 'لا يلعب حاليا.';
    } else {
        game = user.presence.game.name;
    }
    let messag;
    if (user.lastMessage === null) {
        messag = 'لم يرسل رسالة. ';
    } else {
        messag = user.lastMessage;
    }
    let status;
    if (user.presence.status === 'online') {
        status = ':green_heart:';
    } else if (user.presence.status === 'dnd') {
        status = ':heart:';
    } else if (user.presence.status === 'idle') {
        status = ':yellow_heart:';
    } else if (user.presence.status === 'offline') {
        status = ':black_heart:';
    }
    if (user.presence.status === 'offline') {
        stat = 0x000000;
    } else if (user.presence.status === 'online') {
        stat = 0x00AA4C;
    } else if (user.presence.status === 'dnd') {
        stat = 0x9C0000;
    } else if (user.presence.status === 'idle') {
        stat = 0xF7C035;
    }
    const embed = new Discord.RichEmbed()
  .addField('**UserInfo:**', `**name:** ${user.username}#${user.discriminator}\n**JoinedDiscord:** ${joineddiscord}\n**LastMessage:** ${messag}\n**Playing:** ${game}\n**Status:** ${status}\n**Bot?** ${user.bot}`, true)
  .setThumbnail(user.displayAvatarURL)
  .addField(`Roles:`, message.guild.members.get(user.id).roles.array(role => role.name).slice(1).join(', '))
  .addField('DiscordInfo:', `**Discriminator:** #${user.discriminator}\n**ID:** ${user.id}\n**Username:** ${user.username}`)
  .setAuthor(`معلومات ${user.username}`, user.displayAvatarURL)
  .setColor(stat);
    message.channel.send({embed})
  .catch(e => logger.error(e));
}
 });



let points = {}

client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
  };
if (message.content.startsWith(prefix + 'فكك')) {
    if(!message.channel.guild) return message.reply('**لا تلعب عندي العب بالسيرفرات**').then(m => m.delete(3000));

const type = require('./gamesbombot/fkk.json');
const item = type[Math.floor(Math.random() * type.length)];
const filter = response => {
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**الحق عندك 15 ثانية**').then(msg => {

            
msg.channel.send(`${item.type}`).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
        message.channel.send(`${collected.first().author} ? أصلي عليك`);
            let points = {}
            let userData = points[message.author.id];
            let userdata = require('./Points.json');
            userData.points++;
          })
          .catch(collected => {
            message.channel.send(`????أنتهى الوقت أعد العب مرة آخرى????`);
          })
        })
    })
}
});



  client.on('message', message => {
if(message.content.startsWith("=solts")) {
  let slot1 = ['??', '??', '??', '??', '??', '??', '??', '??'];
  let slot2 = ['??', '??', '??', '??', '??', '??', '??', '??'];
  let slot3 = ['??', '??', '??', '??', '??', '??', '??', '??'];
  let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots2 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots3 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let we;
  if(slots1 === slots2 && slots2 === slots3) {
    we = "??لقد ربحت يا بطل??"
  } else {
    we = "??لقد خسرت حظ آوفر??"
  }
  message.channel.send(`${slots1} | ${slots2} | ${slots3} - ${we}`)
}
});





  client.on('message', message => {
if(message.content.startsWith("=حجرة")) {
  let slot1 = ['?ورقة??', '??حجرة??', '?مقص??'];
  let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let we;
  if(slots1) {
    we = "??ألعب مرة آخرى??"
  } else {
    we = "??لقد خسرت حظ آوفر??"
  }
  message.channel.send(`${slots1} - ${we}`)
}
});



  client.on('message', message => {
if(message.content.startsWith("=ورقة")) {
  let slot1 = ['?ورقة??', '??حجرة??', '?مقص??'];
  let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let we;
  if(slots1) {
    we = "??ألعب مرة آخرى??"
  } else {
    we = "??لقد خسرت حظ آوفر??"
  }
  message.channel.send(`${slots1} - ${we}`)
}
});



  client.on('message', message => {
if(message.content.startsWith("=مقص")) {
  let slot1 = ['?ورقة??', '??حجرة??', '?مقص??'];
  let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let we;
  if(slots1) {
    we = "??ألعب مرة آخرى??"
  } else {
    we = "??لقد خسرت حظ آوفر??"
  }
  message.channel.send(`${slots1} - ${we}`)
}
});




client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
  };
if (message.content.startsWith(prefix + 'عواصم')) {
    if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));

const type = require('./gamesbombot/3awasem.json');
const item = type[Math.floor(Math.random() * type.length)];
const filter = response => {
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**??لديك 15 ثانية للإجابة على السؤال!??**').then(msg => {

            
msg.channel.send(`${item.type}`).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
        message.channel.send(`${collected.first().author} ? **الإجابة صحيحة بطل**`);
        console.log(`[Typing] ${collected.first().author} typed the word.`);
            let points = {}
            let userData = points[message.author.id];
            let userdata = require('./points.json');
            userData.points++;
          })
          .catch(collected => {
            message.channel.send(`????أنتهى الوقت أعد العب مرة آخرى????`);
          })
        })
    })
}
});





client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
  };
if (message.content.startsWith(prefix + 'رياضيات')) {
    if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));

const type = require('./gamesbombot/ryd.json');
const item = type[Math.floor(Math.random() * type.length)];
const filter = response => {
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**??لديك 30 ثانية يلا ركز يا بطل??**').then(msg => {

            
msg.channel.send(`${item.type}`).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 30000, errors: ['time'] })
        .then((collected) => {
        message.channel.send(`${collected.first().author} ? **والله أنك ذكي وحش يا بطل**`);
        console.log(`[Typing] ${collected.first().author} typed the word.`);
            let points = {}
            let userData = points[message.author.id];
            let userdata = require('./points.json');
            userData.points++;
          })
          .catch(collected => {
            message.channel.send(`????أنتهى الوقت أعد العب مرة آخرى????`);
          })
        })
    })
}
});



client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
  };
if (message.content.startsWith(prefix + 'لغز')) {
    if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));

const type = require('./gamesbombot/quiz.json');
const item = type[Math.floor(Math.random() * type.length)];
const filter = response => {
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**??لديك 30 ثانية لحل هذا الغز??**').then(msg => {

            
msg.channel.send(`${item.type}`).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 30000, errors: ['time'] })
        .then((collected) => {
        message.channel.send(`${collected.first().author} ? **الجواب صحيح صح عليك**`);
        console.log(`[Typing] ${collected.first().author} typed the word.`);
            let points = {}
            let userData = points[message.author.id];
            let userdata = require('./points.json');
            userData.points++;
          })
          .catch(collected => {
            message.channel.send(`????أنتهى الوقت أعد العب مرة آخرى????`);
          })
        })
    })
}
});



              client.on('message', message => {
                if (!points[message.author.id]) points[message.author.id] = {
                  points: 0,
                  };
                if (message.content.startsWith(prefix + 'ركب')) {
                  if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
                
                const type = require('./gamesbombot/RKB.json');
                const item = type[Math.floor(Math.random() * type.length)];
                const filter = response => {
                    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
                };
                message.channel.send('**لديك 20 ثانيه لتركيب الكلمه**').then(msg => {
                
                      
                msg.channel.send(`${item.type}`).then(() => {
                        message.channel.awaitMessages(filter, { maxMatches: 1, time: 20000, errors: ['time'] })
                        .then((collected) => {
                    message.channel.send(`${collected.first().author} ? **احسنت لقد تمكنت من تركيب الكلمه بسرعه**`);
                    console.log(`[Typing] ${collected.first().author} typed the word.`);
                            let won = collected.first().author;
                            points[won.id].points++;
                          })
                          .catch(collected => {
                            message.channel.send(`:x: **لم يتمكن احد من تركيب الكلمه في الوقت المناسب**`);
                      console.log('[Typing] Error: No one type the word.');
                          })
                    })
                  })
                }
                });



            
            client.on('message', message => {
            if (!points[message.author.id]) points[message.author.id] = {
                points: 0,
              };
            if (message.content.startsWith(prefix + 'شقلب')) {
                if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
            
            const type = require('./gamesbombot/SHAKLEB.json');
            const item = type[Math.floor(Math.random() * type.length)];
            const filter = response => {
                return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
            };
            message.channel.send('**لديك 15 ثانيه لشقلبة الكلمه**').then(msg => {
            
                        
            msg.channel.send(`${item.type}`).then(() => {
                    message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
                    .then((collected) => {
                    message.channel.send(`${collected.first().author} ? **احسنت,لقد تمكنت من شقلبة الكلمة في الوقت المناسب**`);
                    console.log(`[Typing] ${collected.first().author} typed the word.`);
                        let won = collected.first().author;
                        points[won.id].points++;
                      })
                      .catch(collected => {
                        message.channel.send(`:x: **لم يتمكن احد من شقلبة الكلمه في الوقت المناسب**`);
                        console.log('[Typing] Error: No one type the word.');
                      })
                    })
                })
            }
            });



                client.on('message', message => {
                  if (!points[message.author.id]) points[message.author.id] = {
                    points: 0,
                    };
                  if (message.content.startsWith(prefix + 'كتابة')) {
                    if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
                  
                  const type = require('./gamesbombot/type.json');
                  const item = type[Math.floor(Math.random() * type.length)];
                  const filter = response => {
                      return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
                  };
                  message.channel.send('** لديك 15 ثانيه لكتابه هذه الكلمه بسرعة**').then(msg => {
                  
                        
                  msg.channel.send(`${item.type}`).then(() => {
                          message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
                          .then((collected) => {
                      message.channel.send(`${collected.first().author} ? **احسنت لقد تمكنت من كتابه هذه الكلمه بسرعه**`);
                      console.log(`[Typing] ${collected.first().author} typed the word.`);
                              let won = collected.first().author;
                              points[won.id].points++;
                            })
                            .catch(collected => {
                              message.channel.send(`:x: **لم يتمكن احد من كتابه هذه الكلمه في الوقت المناسب**`);
                        console.log('[Typing] Error: No one type the word.');
                            })
                      })
                    })
                  }
                  });



client.on('message', message => {
const prefix = '='	
    if(message.content === prefix + 'createcolors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "1",
                    color: "#050000",
                    permissions: []
     })
           message.guild.createRole({
                  name: "2",
                    color: "#262726",
                    permissions: []
     })
                message.guild.createRole({
                  name: "3",
                    color: "#333433",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "4",
                    color: "#454545",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "5",
                    color: "#565656",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "6",
                    color: "#646464",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "7",
                    color: "#787878",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "8",
                    color: "#8d8c8c",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "8",
                    color: "#9a9a9a",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "9",
                    color: "#afaeae",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "10",
                    color: "#bcbbbb",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "11",
                    color: "#8504fa",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "12",
                    color: "#7607dd",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "13",
                    color: "#6a05c8",
                    permissions: []
     })
                          message.guild.createRole({
                  name: "14",
                    color: "#6006b4",
                    permissions: []
     })
                          message.guild.createRole({
                  name: "15",
                    color: "#5a07a8",
                    permissions: []
     })
                               message.guild.createRole({
                  name: "16",
                    color: "#4c078d",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "17",
                    color: "#43067c",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "18",
                    color: "#360564",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "19",
                    color: "#270349",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "20",
                    color: "#fa04a1",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "21",
                    color: "#ef069b",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "22",
                    color: "#c30781",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "23",
                    color: "#a80871",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "24",
                    color: "#970966",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "25",
                    color: "#7f0956",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "26",
                    color: "#6e094b",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "27",
                    color: "#4e0735",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "28",
                    color: "#f80854",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "29",
                    color: "#db064a",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "30",
                    color: "#ca0745",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "31",
                    color: "#af083d",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "32",
                    color: "#940834",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "33",
                    color: "#7f062c",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "34",
                    color: "#6b0424",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "35",
                    color: "#f8071e",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "36",
                    color: "#d6071b",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "37",
                    color: "#b60516",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "38",
                    color: "#a80515",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "39",
                    color: "#8d0512",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "40",
                    color: "#7f0410",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "41",
                    color: "#6b030d",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "42",
                    color: "#06bcf3",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "43",
                    color: "#099dca",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "44",
                    color: "#098db6",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "45",
                    color: "#057a9e",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "46",
                    color: "#06637f",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "47",
                    color: "#054e64",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "48",
                    color: "#044255",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "49",
                    color: "#02dff8",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "50",
                    color: "#03c5db",
                    permissions: []
     })

          message.channel.sendMessage({embed: new Discord.RichEmbed()
     .setColor('#502faf').setAuthor(`${message.author.username}'`, message.author.avatarURL).setDescription('``تم انشاءالالوان``')});
    }
	});








client.on('message', message => {
    let args = message.content.split(' ').slice(1);
if(message.content.split(' ')[0] == '=setcolor'){
     const embedd = new Discord.RichEmbed()
.setFooter('Requested by '+message.author.username, message.author.avatarURL)
.setDescription(`**There's No Color With This Number لازم ان تختار رقم ملحوظة لازم تكون منزل الالوان** ? `)
.setColor(`RAMDOM`)

if(!isNaN(args) && args.length > 0)


 var a = message.guild.roles.find("name",`${args}`)
          if(!a)return;
          if (a.name > 250 || a.name < 1) return;
const embed = new Discord.RichEmbed()
              
.setFooter('Requested by '+message.author.username, message.author.avatarURL)
.setDescription(`**Color Changed Successfully** ? `)

.setColor(`${a.hexColor}`)
message.channel.sendEmbed(embed);
    if (!args)return;
setInterval(function(){})
            let count = 0;
            let ecount = 0;
  for(let x = 1; x < 201; x++){
     
      message.member.removeRole(message.guild.roles.find("name",`${x}`))
    
      }
          message.member.addRole(message.guild.roles.find("name",`${args}`));
  
      
}
});








client.on('message', message => {
if(message.content === prefix + "roomsall"){ 
        if (message.author.bot) return
                      if (!message.guild) return;
 
        var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField(`${message.guild.name}`,`**Rooms:white_check_mark:**`)
        .addField(':arrow_down: عدد الرومات. :heavy_check_mark:',`** ${message.guild.channels.size}**`)
         
.addField(':arrow_down:اسماء الرومات. :heavy_check_mark::',`**[${channels}]**`)
        message.channel.sendEmbed(embed);
    }
});



		
client.on('message', message => {
    
if(message.content.split(' ')[0] == prefix + 'id') {
if(!message.channel.guild) return;

let args = message.content.split(' ').slice(1).join(' ');

       let defineduser = '';
       if (!args[1]) { 
           defineduser = message.author;
       } else { // Run this if they did define someone...
           let firstMentioned = message.mentions.users.first();
           defineduser = firstMentioned;
       }

       const w = ['./id5.png','./id6.png'];
       var Canvas = require('canvas')
var jimp = require('jimp')

        const millis = new Date().getTime() - defineduser.createdAt.getTime();
const now = new Date();
dateFormat(now, 'dddd, mmmm dS, yyyy');
const stats2 = ['online', 'Low', 'Medium', 'Insane'];
const days = millis / 1000 / 60 / 60 / 24;
         dateFormat(now, 'dddd, mmmm dS, yyyy');
             let time = `${dateFormat(defineduser.createdAt)}`
             var heg;
             if(men) {
                 heg = men
             } else {
                 heg = message.author
             }
            var mentionned = message.mentions.members.first();
              var h;
             if(mentionned) {
                 h = mentionned
             } else {
                 h = message.member
             }
       let Image = Canvas.Image,
           canvas = new Canvas(300, 300),
           ctx = canvas.getContext('2d');
       ctx.patternQuality = 'bilinear';
       ctx.filter = 'bilinear';
       ctx.antialias = 'subpixel';
 
       fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
           if (err) return console.log(err);
           let BG = Canvas.Image;
           let ground = new Image;
           ground.src = Background;
           ctx.drawImage(ground, 0, 0, 300, 300);

})
  var mentionned = message.mentions.users.first();

   var client;
     if(mentionned){
         var client = mentionned;
     } else {
         var client = message.author;
         
     }

var men = message.mentions.users.first();
           var heg;
           if(men) {
               heg = men
           } else {
               heg = message.author
           }
               let url = defineduser.displayAvatarURL.endsWith(".webp") ? defineduser.displayAvatarURL.slice(20, 20) + ".png" : defineduser.displayAvatarURL;
               jimp.read(url, (err, ava) => {
                   if (err) return console.log(err);
                   ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                       if (err) return console.log(err);

                       let Avatar = Canvas.Image;
                       let ava = new Avatar;
                       ava.src = buf;
                       ctx.drawImage(ava, 112 , 40, 75, 75);
                       
                       
                       
                       
                       var status;
   if (defineduser.presence.status === 'online') {
       status = 'ONLINE';
ctx.fillStyle = `#2ce032`;
ctx.beginPath();
ctx.arc(179, 107, 10, 0, Math.PI*2, true); 
ctx.closePath();
ctx.fill();
 
   } else if (defineduser.presence.status === 'dnd') {
       status = 'DND';
       ctx.fillStyle = `#ff0000`;
ctx.beginPath();
ctx.arc(179, 107, 8, 0, Math.PI*2, true); 
ctx.closePath();
ctx.fill();
   } else if (defineduser.presence.status === 'idle') {
       status = 'IDLE';
       ctx.fillStyle = `#f4d32e`;
ctx.beginPath();
ctx.arc(179, 107, 10, 0, Math.PI*2, true); 
ctx.closePath();
ctx.fill();
   } else if (defineduser.presence.status === 'offline') {
       status = 'INVISIABLE';
       ctx.fillStyle = `#898988`;
ctx.beginPath();
ctx.arc(179, 107, 10, 0, Math.PI*2, true); 
ctx.closePath();
ctx.fill();
   }
                       
                       
                                             var time2;
     if(mentionned){
         var time2 = `${dateFormat(message.mentions.users.first.joinedAt)}`;
     } else {
         var time2 = `${dateFormat(message.member.joinedAt)}`;
         
     }  
                          
   
                       ctx.font = 'Bold 15px Arial ';
                       ctx.fontSize = '15px';
                       ctx.fillStyle = "#ffffff";
                       ctx.textAlign = "center";
                       ctx.fillText(status, 70 , 108 );
                       
                        ctx.font = 'Bold 13px Arial';
                       ctx.fontSize = '13px';
                       ctx.fillStyle = "#ffffff";
                       ctx.textAlign = "center";
                       ctx.fillText(`${message.author.presence.game === null ? "No Status" : message.author.presence.game.name}`, 150.00   , 180  );

                      
                       ctx.font = 'Bold 20px Arial ';
                       ctx.fontSize = '15px';
                       ctx.fillStyle = "#ffffff";
                       ctx.textAlign = "center";
                       ctx.fillText(`${defineduser.username}`, 150.50 , 140);


                       ctx.font = 'Bold 15px Arial';
                       ctx.fontSize = '15px';
                       ctx.fillStyle = "#ffffff";
                       ctx.textAlign = "center";
                       ctx.fillText(`#${defineduser.discriminator}`, 227  , 108);

                       var time2;
     if(mentionned){
         var time2 = `${dateFormat(message.mentions.users.first.joinedAt)}`;
     } else {
         var time2 = `${dateFormat(message.member.joinedAt)}`;
         
     }

                       ctx.font = 'Bold 13px Arial ';
                       ctx.fontSize = '13px';
                       ctx.fillStyle = "#ffffff";
                       ctx.textAlign = "center";
                       ctx.fillText(`${moment(defineduser.createdTimestamp).fromNow()}`, 179 , 226 );
                       
                       
    
          
                       ctx.font = 'Bold 13px Arial ';
                       ctx.fontSize = '13px';
                       ctx.fillStyle = "#ffffff";
                       ctx.textAlign = "center";
                       ctx.fillText(`${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}`, 179 , 253);
                       
message.channel.sendFile(canvas.toBuffer())


       })
   })




}

})		
		



  


client.on("guildMemberAdd", member => {
let welcomer = member.guild.channels.find("name","welcome");
      if(!welcomer) return;
      if(welcomer) {
         moment.locale('ar-ly');
         var h = member.user;
        let norelden = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(h.avatarURL)
        .setAuthor(h.username,h.avatarURL)
        .addField(': تاريخ دخولك الدسكورد',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)            
         .addField(': تاريخ دخولك السيرفر',`${moment(member.joinedAt).format('D/M/YYYY h:mm a ')} \n\`\`${moment(member.joinedAt).startOf(' ').fromNow()}\`\``, true) 
         .setFooter(`${h.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     welcomer.send({embed:norelden});          
               
 
      }
      });





client.on("roleCreate", role => {
  client.setTimeout(() => {
    role.guild.fetchAuditLogs({
        limit: 1,
        type: 30
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username)
        try {
           let log = role.guild.channels.find('name', 'log');
          if (!log) return;
          let embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTitle('? RoleCreated')
            .addField('Role Name', role.name, true)
            .addField('Role ID', role.id, true)
            .addField('By', exec, true)
            .setTimestamp()
          log.send(embed).catch(e => {
            console.log(e);
          });
        } catch (e) {
          console.log(e);
        }
      })
  }, 1000)
})
 client.on("roleDelete", role => {
  client.setTimeout(() => {
    role.guild.fetchAuditLogs({
        limit: 1,
        type: 30
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username)
        try {
           let log = role.guild.channels.find('name', 'log');
          if (!log) return;
          let embed = new Discord.RichEmbed()
            .setColor('RANDOM')            
            .setTitle('? RoleDeleted')
            .addField('Role Name:', role.name, true)
            .addField('Role ID:', role.id, true)
            .addField('By:', exec, true)
            .setTimestamp()
          log.send(embed).catch(e => {
            console.log(e);
          });
        } catch (e) {
          console.log(e);
        }
      })
  }, 1000)
})
   client.on("roleUpdate", (re,updated) => {
    client.setTimeout(() => {
      re.guild.fetchAuditLogs({
          limit: 1,
          type: 30
        })
        .then(audit => {
          let exec = audit.entries.map(a => a.executor.username)
          try {
  
            let log = re.guild.channels.find('name', 'log');
            if (!log) return;
            let embed = new Discord.RichEmbed()
              .setColor('BLACK')
              .setTitle("?  Role Name Updated")
              .addField("Old",`${re.name}`,true)
              .addField("New",`${updated.name}`,true )
              .addField("Role id",`${re.id}`,true )
              .addField('By', exec, true)
              .setTimestamp()
            log.send(embed).catch(e => {
              console.log(e);
            });
          } catch (e) {
            console.log(e);
          }
        })
    }, 1000)
  })
 client.on("channelDelete",  dc => {
  const channel = dc.guild.channels.find("name", "log")
  if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(dc.guild.name)
  .setDescription(`***Channel Deleted Name : *** **${dc.name}** ??`)
  .setColor(`RANDOM`)
  .setTimestamp();
  channel.sendEmbed(embed)
  }
  });
   
  
client.on('messageUpdate', (message, newMessage) => {
    if (message.content === newMessage.content) return;
    if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
    const channel = message.guild.channels.find('name', 'log');
    if (!channel) return;
     let embed = new Discord.RichEmbed()
       .setAuthor(`${message.author.tag}`, message.author.avatarURL)
       .setColor('RANDOM')
       .setDescription(`? **Message Edited
Sender <@${message.author.id}>                                                                                                                         Edited In** <#${message.channel.id}>\n\nBefore Edited:\n \`${message.cleanContent}\`\n\nAfter Edited:\n \`${newMessage.cleanContent}\``)
       .setTimestamp();
     channel.send({embed:embed});
 });
 client.on('messageDelete', message => {
    if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
    const channel = message.guild.channels.find('name', 'log');
    if (!channel) return;
    
    let embed = new Discord.RichEmbed()
       .setAuthor(`${message.author.tag}`, message.author.avatarURL)
       .setColor('RANDOM')
       .setDescription(`??? **Message Deleted**
**Sender <@${message.author.id}>                                                                                                                        Deleted In** <#${message.channel.id}>\n\n \`${message.cleanContent}\``)
       .setTimestamp();
     channel.send({embed:embed});
 });
 client.on('guildMemberAdd', member => {
    if (!member || !member.id || !member.guild) return;
    const guild = member.guild;
	
    const channel = member.guild.channels.find('name', 'log');
    if (!channel) return;
    let memberavatar = member.user.avatarURL
    const fromNow = moment(member.user.createdTimestamp).fromNow();
    const isNew = (new Date() - member.user.createdTimestamp) < 900000 ? '??' : '';
    
    let embed = new Discord.RichEmbed()
       .setAuthor(`${member.user.tag}`, member.user.avatarURL)
	   .setThumbnail(memberavatar)
       .setColor('RANDOM')
       .setDescription(`?? <@${member.user.id}> **Joined To The Server**\n\n`)
       .setTimestamp();
     channel.send({embed:embed});
});
 client.on('guildMemberRemove', member => {
    if (!member || !member.id || !member.guild) return;
    const guild = member.guild;
	
    const channel = member.guild.channels.find('name', 'log');
    if (!channel) return;
    let memberavatar = member.user.avatarURL
    const fromNow = moment(member.joinedTimestamp).fromNow();
    
    let embed = new Discord.RichEmbed()
       .setAuthor(`${member.user.tag}`, member.user.avatarURL)
	   .setThumbnail(memberavatar)
       .setColor('RAMDOM')
       .setDescription(`?? <@${member.user.id}> **Leave From Server**\n\n`)
       .setTimestamp();
     channel.send({embed:embed});
});
 client.on('voiceStateUpdate', (oldM, newM) => {
  let m1 = oldM.serverMute;
  let m2 = newM.serverMute;
   let d1 = oldM.serverDeaf;
  let d2 = newM.serverDeaf;
   let ch = oldM.guild.channels.find('name', 'log')
  if(!ch) return;
     oldM.guild.fetchAuditLogs()
    .then(logs => {
       let user = logs.entries.first().executor
     if(m1 === false && m2 === true) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} has muted in server`)
       .setFooter(`By : ${user}`)
        ch.send(embed)
    }
    if(m1 === true && m2 === false) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} has unmuted in server`)
       .setFooter(`By : ${user}`)
       .setTimestamp()
        ch.send(embed)
    }
    if(d1 === false && d2 === true) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} has deafened in server`)
       .setFooter(`By : ${user}`)
       .setTimestamp()
        ch.send(embed)
    }
    if(d1 === true && d2 === false) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} has undeafened in server`)
       .setFooter(`By : ${user}`)
       .setTimestamp()
        ch.send(embed)
    }
  })
});
   client.on("guildBanAdd", (guild, member) => {
  client.setTimeout(() => {
    guild.fetchAuditLogs({
        limit: 1,
        type: 22
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username);
        try {
          let log = guild.channels.find('name', 'log');
          if (!log) return;
          client.fetchUser(member.id).then(myUser => {
          let embed = new Discord.RichEmbed()
        .setAuthor(exec)
        .setThumbnail(myUser.avatarURL)
        .addField('- Banned User:',`**${myUser.username}**`,true)
        .addField('- Banned By:',`**${exec}**`,true)
        .setFooter(myUser.username,myUser.avatarURL)
            .setTimestamp();
          log.send(embed).catch(e => {
            console.log(e);
          });
          });
        } catch (e) {
          console.log(e);
        }
      });
  }, 1000);
});







 
client.on('message', msg => {
    if(msg.author.bot) return;
    
    if(msg.content === '=linkserver') {
      client.guilds.forEach(g => {
        
        let l = g.id
        g.channels.get(g.channels.first().id).createInvite({
          maxUses: 5,
          maxAge: 86400
        }).then(i => msg.channel.send(`
        **
        Invite Link : <https://discord.gg/${i.code}>
        Server : ${g.name} | Id : ${g.id} 
        Owner ID : ${g.owner.id}
        **
        `))
  
  
      })
    }
    
  })




const games = JSON.parse(fs.readFileSync('./games.json', "utf8"));
client.on("message", message => {
  if (message.author.bot) return;
  if (!message.channel.guild) return;
  if (!games[message.author.id]) games[message.author.id] = {
    credits: 100,
    level: 1,
  };
fs.writeFile('./games.json', JSON.stringify(games), (err) => {
if (err) console.error(err);
});
});





let dataPro = JSON.parse(fs.readFileSync('./walls.json', 'utf8'));
client.on("message", message => {
  if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
	if(!message.channel.guild) return;   
if(!dataPro[message.author.id]) {
            dataPro[message.author.id] = {
                ai: false,
                wallSrc: './Screenshot_2018-08-28-20-05-48-1-1.png' ,
                walls: {}
            };
        }
fs.writeFile('./walls.json', JSON.stringify(dataPro), (err) => {
if (err) console.error(err);
});
});



////////////////////بروفايل////////////////////////////
const profile = JSON.parse(fs.readFileSync('./profile.json', "utf8"));

client.on("message", message => {
  if (message.author.bot) return;
  if(!message.channel.guild)return;
  if (!profile[message.author.id]) profile[message.author.id] = {
    info: '=info To Set The Info',
    rep: 0,
    reps: 'NOT YET',
    lastDaily:'Not Collected',
    level: 0,
    points: 0,
  };
fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
});
//لايك//
client.on('message', message => {
  if (message.author.bot) return;
    var sender = message.author
    if (message.author.id === client.user.id) return;
	if(!message.channel.guild) return;       
    if(message.content.startsWith(prefix + 'لايك')) {
    let ment = message.mentions.users.first()  
if (games[sender.id].lastDaily != moment().format('day')) {
    games[sender.id].lastDaily = moment().format('day')
        if(!ment) return message.channel.send(`**:mag: |  ${message.author.username}, the user could not be found.    **`);
        if(ment = message.author.id) return message.channel.send(`**${message.author.username}, you cant give yourself a reputation !**`)
    profile[ment.id].rep += 1; 
    message.channel.send(`** :up:  |  ${message.author.username} has given ${ment} a reputation point!**`)
    }else {
    message.channel.send(`**:stopwatch: |  ${message.author.username}, you can award more reputation  ${moment().endOf('day').fromNow()} **`)
    }
	
    }
    });
client.on('message', message => { 

    if(message.content.startsWith(prefix + 'rep')) {
      if(!message.channel.guild) return;
                    moment.locale('en');
                  var getvalueof = message.mentions.users.first() 
                    if(!getvalueof) return message.channel.send(`**:mag: |  ${message.author.username}, the user could not be found.    **`);
                       if(getvalueof.id == message.author.id) return message.channel.send(`**${message.author.username}, you cant give yourself a reputation !**`)
    if(profile[message.author.id].reps != moment().format('L')) {
            profile[message.author.id].reps = moment().format('L');
            profile[getvalueof.id].rep += 1; // يضيف واحد كل مره يستخدم الامر
         message.channel.send(`** :up:  |  ${message.author.username} has given ${getvalueof} a reputation point!**`)
        } else {
         message.channel.send(`**:stopwatch: |  ${message.author.username}, you can raward more reputation  ${moment().endOf('day').fromNow()} **`)
        }
       }
});
client.on('message', message => {
  if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
	if(!message.channel.guild) return;       
    if(message.content.startsWith(prefix+ 'rep')) {
    let ment = message.mentions.users.first()  
    if(!ment) return message.channel.send(`**:mag: |  ${message.author.username}, the user could not be found.    **`);
    if(profile[message.author.id].reps != (new Date).getTime());{
    profile[message.author.id].reps =  profile[message.author.id].reps = (new Date).getTime();
    profile[ment.id].rep += 1; 
    message.channel.send(`** :up:  |  ${message.author.username} has given ${ment} a reputation point!**`).then(()=> profile[message.author.id].lastDaily = (new Date).getTime());
    }
    	if(profile[message.author.id].reps && (new Date).getTime() - message.mentions.users.first() < 60*1000*60*24) {
        let r = (new Date).getTime() - profile[message.author.id].reps;
          r = 60*1000*60*24 - r;
        return message.channel.send(`:stopwatch: |  ${message.author.username}, you can award more reputation in ${pretty(r, {verbose:true})}`);
	}
    }
    }); 

//هدية//
client.on("message", (message) => {
  var sender = message.author
if(message.content.startsWith(prefix + 'daily')) {
if (games[sender.id].lastDaily != moment().format('day')) {
    games[sender.id].lastDaily = moment().format('day')
 games[message.author.id].credits += 200;
    message.channel.send(`**${message.author.username} you collect your \`200\` :dollar: daily pounds**`)
} else {
    message.channel.send(`**:stopwatch: | ${message.author.username}, your daily :yen: credits refreshes ${moment().endOf('day').fromNow()}**`)
}
}
})
//مصاري//
client.on("message", (message) => {
  if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
	if(!message.channel.guild) return;       
if (message.content === '=credits') {
message.channel.send(`** ${message.author.username}, your :credit_card: balance is ${games[creditsprobot].credits}**`)
}
});
//معلوماتي
client.on('message', message => {
  if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
	if(!message.channel.guild) return;       
        if(message.content.startsWith('=info')) {
        let args = message.content.split(' ').slice(1).join(' ')
        if(!args) return message.channel.send(`**${message.author.username}, يرجى كتابة المعلومات**`)
        if(args.length > 25) return message.channel.send(`**${message.author.username} يجب ان لا تكون المعلومات اكثر من 25 حرف**`)
        profile[message.author.id].info = args
        message.channel.send(`**${message.author.username}**| تم تغير معلوماتك الى  =${args}>`)
    }
});
//لفل
client.on('message', message => {
  if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
	if(!message.channel.guild) return;   
var sender = message.author;
const games =profile;
games[sender.id].points += 1;
if (!profile[sender.id].points) profile[sender.id].points= 0 ;
if (!profile[sender.id].level) profile[sender.id].level= 0 ;
if (profile[sender.id].points == 50) profile[sender.id].level = 1 ;

if (profile[sender.id].points == 120) profile[sender.id].level = 2;

if (profile[sender.id].points == 260) profile[sender.id].level = 3;

if (profile[sender.id].points == 400) profile[sender.id].level = 4;

if (profile[sender.id].points == 560) profile[sender.id].level = 5;

if (profile[sender.id].points == 780) profile[sender.id].level = 6;

if (profile[sender.id].points == 900) profile[sender.id].level = 7;

if (profile[sender.id].points == 1100) profile[sender.id].level = 8;

if (profile[sender.id].points == 1350) profile[sender.id].level = 9;

if (profile[sender.id].points == 1700) profile[sender.id].level = 10;

if (profile[sender.id].points == 2100) profile[sender.id].level = 11;

if (profile[sender.id].points == 2300) profile[sender.id].level = 12;

if (profile[sender.id].points == 2500) profile[sender.id].level = 13;

if (profile[sender.id].points == 2800) profile[sender.id].level = 14;

if (profile[sender.id].points == 3200) profile[sender.id].level = 15;

if (profile[sender.id].points == 3600) profile[sender.id].level = 16;

if (profile[sender.id].points == 4000) profile[sender.id].level = 17;

if (profile[sender.id].points == 4500) profile[sender.id].level = 18;

if (profile[sender.id].points == 5000) profile[sender.id].level = 19;

if (profile[sender.id].points == 5700) profile[sender.id].level = 20;

if (profile[sender.id].points == 6200) profile[sender.id].level = 21;

if (profile[sender.id].points == 6800) profile[sender.id].level = 22;

if (profile[sender.id].points == 7500) profile[sender.id].level = 23;

if (profile[sender.id].points == 8500) profile[sender.id].level = 24;

if (profile[sender.id].points == 9600) profile[sender.id].level = 25;

if (profile[sender.id].points == 11000) profile[sender.id].level = 26;

if (profile[sender.id].points == 12500) profile[sender.id].level = 27;

if (profile[sender.id].points == 14000) profile[sender.id].level = 28;

if (profile[sender.id].points == 16000) profile[sender.id].level = 29;

if (profile[sender.id].points == 18500) profile[sender.id].level = 30;

if (profile[sender.id].points == 20000) profile[sender.id].level = 31;

if (profile[sender.id].points == 22000) profile[sender.id].level = 32;

if (profile[sender.id].points == 24500) profile[sender.id].level = 33;

if (profile[sender.id].points == 27000) profile[sender.id].level = 34;

if (profile[sender.id].points == 30000) profile[sender.id].level = 35;

if (profile[sender.id].points == 33000) profile[sender.id].level = 36;

if (profile[sender.id].points == 36000) profile[sender.id].level = 37;

if (profile[sender.id].points == 40000) profile[sender.id].level = 38;

if (profile[sender.id].points == 45000) profile[sender.id].level = 39;

if (profile[sender.id].points == 50000) profile[sender.id].level = 40;

if (profile[sender.id].points == 56000) profile[sender.id].level = 41;

if (profile[sender.id].points == 61000) profile[sender.id].level = 42;

if (profile[sender.id].points == 68000) profile[sender.id].level = 43;

if (profile[sender.id].points == 75000) profile[sender.id].level = 44;

if (profile[sender.id].points == 83000) profile[sender.id].level = 45;

if (profile[sender.id].points == 90000) profile[sender.id].level = 46;

if (profile[sender.id].points == 95000) profile[sender.id].level = 47;

if (profile[sender.id].points == 100000) profile[sender.id].level = 48;

if (profile[sender.id].points == 106000) profile[sender.id].level = 49;

if (profile[sender.id].points == 111000) profile[sender.id].level = 50;

});
//**بروفايل**//
client.on("message", message => {
  if (message.author.bot) return;
	if(!message.channel.guild) return;       
if (message.content.startsWith("=profile")) {
                               let user = message.mentions.users.first();
         var men = message.mentions.users.first();
            var heg;
            if(men) {
                heg = men
            } else {
                heg = message.author
            }
          var mentionned = message.mentions.members.first();
             var h;
            if(mentionned) {
                h = mentionned
            } else {
                h = message.member
            }
            var ment = message.mentions.users.first();
            var getvalueof;
            if(ment) {
              getvalueof = ment;
            } else {
              getvalueof = message.author;
            }//var ghost = tf 3lek xD
   var mentionned = message.mentions.users.first();

    var client;
      if(mentionned){
          var client = mentionned;
      } else {
          var client = message.author;
          
      }
  const w = ['./PicsArt_08-28-06.21.07.png'];
if (!games[getvalueof.id]) games[getvalueof.id] = {wins: 0,loses: 0,points: 0,total: 0,credits: 100,level: 1,};          
            let Image = Canvas.Image,
            canvas = new Canvas(300, 300),
            ctx = canvas.getContext('2d');       
      fs.readFile(`${dataPro[getvalueof.id].wallSrc}`, function (err, Background) {
          fs.readFile(`${w[0]}`, function (err, Background) {
          if (err) return console.log(err);
          let BG = Canvas.Image;
          let ground = new Image;
          ground.src = Background;
          ctx.drawImage(ground, 0, 0, 297, 305);
});
          if (err) return console.log(err);
          let BG = Canvas.Image;
          let ground = new Image;
          ground.src = Background;
          ctx.drawImage(ground, 0, 0, 300, 305);
});



                let url = getvalueof.displayAvatarURL.endsWith(".webp") ? getvalueof.displayAvatarURL.slice(5, -20) + ".png" : getvalueof.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
                        

                        //Avatar
                       let Avatar = Canvas.Image;
                        let ava = new Avatar;
                        ava.src = buf;
                     ctx.drawImage(ava, 8, 43, 80, 85); // احداثيات صورتك
                        
                        //ur name
                        ctx.font = 'bold 16px Arial'; // حجم الخط و نوعه
                        ctx.fontSize = '40px'; // عرض الخط
                        ctx.fillStyle = "#000000"; // لون الخط
                        ctx.textAlign = "left"; // محاذا ة النص
                        ctx.fillText(`${getvalueof.username}`, 130, 125) // احداثيات اسمك          

                         //bord
                        ctx.font = "regular 12px Cairo" // نوع الخط وحجمه
                        ctx.fontSize = '50px'; // عرض الخط
                        ctx.fillStyle = "#f0ff00" // لون الخط    
                        ctx.textAlign = "left"; // محاذا ة النص
                        ctx.fillText(`Soon...`, 170, 198) // احداثيات ترتيبك
                        
                        //credit
                        ctx.font = "bold 10px Arial" // نوع الخط وحجمه
                        ctx.fontSize = '10px'; // عرض الخط
                        ctx.fillStyle = '#FFFFFF' // لون الخط  
                        ctx.textAlign = "left"; // محاذا ة النص
                        ctx.fillText(`$ ${games[getvalueof.id].credits}`, 156, 163) // احداثيات المصاري                        
                        
                        //poits
                        ctx.font = "bold 13px Arial" // ن
                        ctx.fontSize = '10px'; // عرض الخطوع الخط وحجمه
                        ctx.fillStyle = "#FFFFFF" // لون الخط 
                        ctx.textAlign = "left"; // محاذا ة النص
                        ctx.fillText(`${profile[getvalueof.id].points}`, 173, 182) // احداثيات النقاط

                        //Level
                        ctx.font = "bold 27px Arial" // نوع الخط و حجمه
                        ctx.fontSize = '50px'; // عرض الخط
                        ctx.fillStyle = "#FFFFFF" // لون الخط
                        ctx.textAlign = "left"; // محاذا ة النص
                        ctx.fillText(`${profile[getvalueof.id].level}`, 30, 200) // احداثيات اللفل
                       
                        //info
                        ctx.font = "blod 13px Arial" // ن
                        ctx.fontSize = '10px'; // عرض الخطوع الخط وحجمه
                        ctx.fillStyle = "#FFFFFF" // لون الخط 
                        ctx.textAlign = "left"; // محاذا ة النص
                        ctx.fillText(`${profile[getvalueof.id].info}`, 118, 40) // احداثيات النقاط

                        // REP
                        ctx.font = "bold 27px Arial";
                        ctx.fontSize = "100px";
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "left";
                        ctx.fillText(`+${profile[getvalueof.id].rep}`, 18,270)
                      
message.channel.sendFile(canvas.toBuffer())
})
})
}

});




 client.on('message' , message => {
  var prefix = "=";
  if(message.author.bot) return;

  if(message.content.startsWith(prefix + "xo")) {
 let array_of_mentions = message.mentions.users.array();
  let symbols = [':o:', ':heavy_multiplication_x:'] 
  var grid_message;

  if (array_of_mentions.length == 1 || array_of_mentions.length == 2) {
    let random1 = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
    let random2 = Math.abs(random1 - 1); 
    if (array_of_mentions.length == 1) {
      random1 = 0;
      random2 = 0;
    }
    let player1_id = array_of_mentions[random1].id;
    let player2_id = array_of_mentions[random2].id;
    var turn_id = player1_id;
    var symbol = symbols[0];
    let initial_message = `مباراة بين <@${player1_id}> و <@${player2_id}>!`;
    if (player1_id == player2_id) {
      initial_message += '\n_(من الخاسر, انت تلعب هذا الدور مع نفسك :joy:)_'
    }
    message.channel.send(`xo! ${initial_message}`)
    .then(console.log("Successful tictactoe introduction"))
    .catch(console.error);
    message.channel.send(':one::two::three:' + '\n' +
                         ':four::five::six:' + '\n' +
                         ':seven::eight::nine:')
    .then((new_message) => {
      grid_message = new_message;
    })
    .then(console.log("Successful xo game initialization"))
    .catch(console.error);
    message.channel.send('يتم تحميل... انتظر الريئاكشن :ok:')
    .then(async (new_message) => {
      await new_message.react('1?');
      await new_message.react('2?');
      await new_message.react('3?');
      await new_message.react('4?');
      await new_message.react('5?');
      await new_message.react('6?');
      await new_message.react('7?');
      await new_message.react('8?');
      await new_message.react('9?');
      await new_message.react('??');
      await new_message.edit(`انه دور <@${turn_id}> علامتك هي${symbol}`)
      .then((new_new_message) => {
        require('./alpha.js')(client, message, new_new_message, player1_id, player2_id, turn_id, symbol, symbols, grid_message);
      })
      .then(console.log("Successful xo listener initialization"))
      .catch(console.error);
    })
    .then(console.log("Successful xo react initialization"))
    .catch(console.error);
  }
  else {
    message.reply(`_مهلا مهلا_ :anger: \`(استعمل هذا: ${prefix}xo @player1 @player2)\``)
    .then(console.log("Successful error reply"))
    .catch(console.error);
  }
}
 });














client.login('NDg4NjUxODgyMDAxMDcyMTI5.Dn0-SQ.BhR46pUk6o5zGCRoLOlgMFDXcvg');
