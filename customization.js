const os = require("os");
const packageJson = require("./package.json"); // Get package details

module.exports = {
  BOTNAME: "© 𝙿𝙾𝙳𝙸𝚈𝙰 𝚇ᵖʳᵒ ✌︎",
  OWNERNAME: "MR.PEKSHA",
  OWNERNUMBER: "94740707157",
  FOOTER: `
> 𝐏𝐎𝐃𝐈𝐘𝐀 𝐗^𝐏𝐑𝐎
> Developed by Mr. Peksha
> GitHub Repository: github.com/Mrpeksha/PODIYA_xPro
    `.trim(),
  //====================menu=================================
  MENUMSG: function (pushname, runtime, config) {
    return `
🧚‍♂️⃟💞 © 𝙿𝙾𝙳𝙸𝚈𝙰 𝕏ᴾᴿᴼ  🧚‍♂️⃟💞
☔︎◍ ꜱᴇʟᴇᴛᴇ ʏᴏᴜʀ ᴀᴅᴠᴇɴᴛᴜʀᴛ. 
ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʙᴏᴛ.

┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━
┃
┃ 📅 Date Today : ${new Date().toLocaleDateString("en-GB", {
      timeZone: "Asia/Colombo",
    })}
┃ ⌚ Time Now : ${new Date().toLocaleTimeString("en-GB", {
      timeZone: "Asia/Colombo",
    })}
┃
┗━━━━━━━━━━━━━━━
┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━
┃🗣️ 𝚄𝚜𝚎𝚛 : ${pushname}
┃🤖 𝙱𝚘𝚝 : © 𝙿𝙾𝙳𝙸𝚈𝙰 𝕏ᵖʳᵒ V${packageJson.version}
┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${packageJson.version}
┃📝 𝙿𝚕𝚊𝚝𝚏𝚘𝚛𝚖 : ${os.platform()}
┃📟 𝙷𝚘𝚜𝚝 : ${os.hostname()}
┃🤴𝙾𝚠𝚗𝚎𝚛 : ${config.OWNER_NAME}
┃🔊 𝙼𝚘𝚍𝚎 : ${config.MODE}
┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
┃✨𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
      2
    )}MB / ${Math.round(os.totalmem() / 1024 / 1024)}MB
┗━━━━━━━━━━━━━━━
> 𝙿𝙾𝙳𝙸𝚈𝙰 ᴍᴅ ᴄᴛᴇᴀᴛᴇ ʙʏ ᴍʀ ᴘᴇᴋsʜᴀ.....
> © 𝐌𝐑 𝐏𝐄𝐊𝐒𝐇𝐀 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐌𝐄𝐍𝐓. 💗
        `.trim();
  },
  REACTMENU: "🧚‍♂️⃟❤️‍🔥 © 𝙿𝙾𝙳𝙸𝚈𝙰 𝗑ᴾᴿᴼ 𝗥𝗘𝗔𝗖𝗧𝗜𝗢𝗡 𝗠𝗘𝗡𝗨 🧚‍♂️⃟❤️‍🔥",
  SEARCHMENU: "🧚‍♂️⃟❤️‍🔥 © 𝙿𝙾𝙳𝙸𝚈𝙰 𝗑ᴾᴿᴼ 𝗦𝗘𝗔𝗥𝗖𝗛 𝗠𝗘𝗡𝗨 🧚‍♂️⃟❤️‍🔥",
  HENTAIMENU: "🧚‍♂️⃟❤️‍🔥 © 𝙿𝙾𝙳𝙸𝚈𝙰 𝗑ᴾᴿᴼ 𝗛𝗘𝗡𝗧𝗔𝗜 𝗠𝗘𝗡𝗨 🧚‍♂️⃟❤️‍🔥",
  DOWNLOADMENU: "🧚‍♂️⃟❤️‍🔥 © 𝙿𝙾𝙳𝙸𝚈𝙰 𝗑ᴾᴿᴼ 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗠𝗘𝗡𝗨 🧚‍♂️⃟❤️‍🔥",
  MOVIEMENU: "🧚‍♂️❤️‍🔥 © 𝙿𝙾𝙳𝙸𝚈𝙰 𝗑ᴾᴿᴼ 𝗠𝗢𝗩𝗜𝗘 𝗠𝗘𝗡𝗨 🧚‍♂️⃟❤️‍🔥",
  GROUPMENU: "🧚‍♂️⃟❤️‍🔥 © 𝙿𝙾𝙳𝙸𝚈𝙰 𝗑ᴾᴿᴼ 𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨 🧚‍♂️⃟❤️‍🔥",
  OWNERMENU: "🧚‍♂️⃟❤️‍🔥 © 𝙿𝙾𝙳𝙸𝚈𝙰 𝗑ᴾᴿᴼ 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨 🧚‍♂️⃟❤️‍🔥",
  CONVERTMENU: "🧚‍♂️⃟❤️‍🔥 © 𝙿𝙾𝙳𝙸𝚈𝙰 𝗑ᴾᴿᴼ 𝗖𝗢𝗡𝗩𝗘𝗥𝗧 𝗠𝗘𝗡𝗨 🧚‍♂️⃟❤️‍🔥",
  SETTINGSMENU: "🧚‍♂️⃟❤️‍🔥 © 𝙿𝙾𝙳𝙸𝚈𝙰 𝗑ᴾᴿᴼ 𝗦𝗘𝗧𝗧𝗜𝗡𝗚𝗦 𝗠𝗘𝗡𝗨 🧚‍♂️⃟❤️‍🔥",
  NSFWMENU: "🧚‍♂️⃟❤️‍🔥 © 𝙿𝙾𝙳𝙸𝚈𝙰 𝗑ᴾᴿᴼ 𝗡𝗦𝗙𝗪 𝗠𝗘𝗡𝗨 🧚‍♂️⃟❤️‍🔥",
  MAINMENU: "🧚‍♂️⃟❤️‍🔥 © 𝙿𝙾𝙳𝙸𝚈𝙰 𝗑ᴾᴿᴼ 𝗠𝗔𝗜𝗡 𝗛𝗨𝗕 🧚‍♂️⃟❤️‍🔥",
  FUNMENU: "🧚‍♂️⃟❤️‍🔥 © 𝙿𝙾𝙳𝙸𝚈𝙰 𝗑ᴾᴿᴼ 𝗙𝗨𝗡 𝗠𝗘𝗡𝗨 🧚‍♂️⃟❤️‍🔥",
  AIMENU: "🧚‍♂️⃟❤️‍🔥 © 𝙿𝙾𝙳𝙸𝚈𝙰 𝗑ᴾᴿᴼ 𝗔𝗜 𝗠𝗘𝗡𝗨 🧚‍♂️⃟❤️‍🔥",
  LOGOMENU: "🧚‍♂️⃟❤️‍🔥 © 𝙿𝙾𝙳𝙸𝚈𝙰 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 𝗟𝗢𝗚𝗢 𝗠𝗘𝗡𝗨 🧚‍♂️⃟❤️‍🔥",
  USEFULLMENU: "🧚‍♂️⃟❤️‍🔥 © 𝙿𝙾𝙳𝙸𝚈𝙰 𝗑ᴾᴿᴼ 𝗧𝗢𝗢𝗟𝗦 𝗠𝗘𝗡𝗨 🧚‍♂️⃟❤️‍🔥",
  //=====================menu-img's================================
  ALLMENUIMG: "https://i.ibb.co/cKPJPQN1/Rashmika-Ofc.jpg",
  REACTMENUIMG: "https://i.ibb.co/cKPJPQN1/Rashmika-Ofc.jpg",
  SEARCHMENUIMG: "https://i.ibb.co/cKPJPQN1/Rashmika-Ofc.jpg",
  HENTAIMENUIMG: "https://i.ibb.co/cKPJPQN1/Rashmika-Ofc.jpg",
  DOWNLOADMENUIMG: "https://i.ibb.co/cKPJPQN1/Rashmika-Ofc.jpg",
  MOVIEMENUIMG: "https://i.ibb.co/cKPJPQN1/Rashmika-Ofc.jpg",
  GROUPMENUIMG: "https://i.ibb.co/cKPJPQN1/Rashmika-Ofc.jpg",
  OWNERMENUIMG: "https://i.ibb.co/cKPJPQN1/Rashmika-Ofc.jpg",
  CONVERTMENUIMG: "https://i.ibb.co/cKPJPQN1/Rashmika-Ofc.jpg",
  SETTINGSMENUIMG: "https://i.ibb.co/cKPJPQN1/Rashmika-Ofc.jpg",
  NSFWMENUIMG: "https://i.ibb.co/cKPJPQN1/Rashmika-Ofc.jpg",
  MAINMENUIMG: "https://i.ibb.co/cKPJPQN1/Rashmika-Ofc.jpg",
  FUNMENUIMG: "https://i.ibb.co/cKPJPQN1/Rashmika-Ofc.jpg",
  AIMENUIMG: "https://i.ibb.co/cKPJPQN1/Rashmika-Ofc.jpg",
  LOGOMENUIMG: "https://i.ibb.co/cKPJPQN1/Rashmika-Ofc.jpg",
  USEFULLMENUIMG: "https://i.ibb.co/cKPJPQN1/Rashmika-Ofc.jpg",
  //======================download============================
  TIKTOK: function (title, author, q) {
    return `
🎟️ *PODIYA✓XR-MD TIKTOK DOWNLOADER* 🎟️

🔢 *Please reply with the number you want to select:*

Title  * ${title}
Author * ${author}
URL    * ${q}
        `.trim();
  },
  FACEBOOK: function (title, q) {
    return `
💢 PODIYA✓XR-MD FB DOWNLOADER 💢
    
🎞 TITLE 🎞 ${title}

Fb-Url: -=-${q} 
        `.trim();
  },
  TWITTER: function (desc, q) {
    return `
💢 PODIYA✓XR-MD TWITTER DOWNLOADER 💢

📝 Description: ${desc || "No description"}

Twitter URL: ${q}
        `.trim();
  },
  //=================main==================================
  ALIVEIMG: "https://i.ibb.co/cKPJPQN1/Rashmika-Ofc.jpg",
  ALIVEVOICE: "https://youtu.be/jMSXem_bUFc?si=cBNhBpgfn63Lu1El",
  ALIVEMSG: function (hostname, config, pushname, runtime) {
    return `
☞︎︎︎❤️‍🔥 𝐏𝐎𝐃𝐈𝐘𝐀✓𝐗𝐑 𝐌𝐃 𝐀𝐋𝐈𝐕𝐄 𝐒𝐓𝐀𝐓𝐔𝐒 ❤️‍🔥☜︎︎︎

✘◍ 𝗜'𝗺 𝗔𝗹𝗶𝘃𝗲, 𝗧𝗵𝗮𝗻𝗸𝘀 𝗳𝗼𝗿 𝗔𝘀𝗸𝗶𝗻𝗴!

┏━━━━❮ 📅 𝑻𝑶𝑫𝑎𝒚 📅❯━━━━
┃
┃ 📅 Date Today: ${new Date().toLocaleDateString("en-GB", {
      timeZone: "Asia/Colombo",
    })}
┃ ⌚ Time Now: ${new Date().toLocaleTimeString("en-GB", {
      timeZone: "Asia/Colombo",
    })}
┃
┗━━━━━━━━━━━━━━━
┏━━━━❮📝 𝗦𝘁𝗮𝘁𝘂𝘀 𝗗𝗲𝘁𝗮𝗶𝗹𝘀 📝❯━━━
┃🗣️ 𝚄𝚜𝚎𝚛 : ${pushname}
┃🤖 𝙱𝚘𝚝 : © 𝙿𝙾𝙳𝙸𝚈𝙰 𝚇-𝙿𝚁𝙾 V${packageJson.version}
┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${packageJson.version}
┃📝 𝙿𝚕𝚊𝚝𝚏𝚘𝚛𝚖 : ${hostname}
┃📟 𝙷𝚘𝚜𝚝 : ${os.hostname()}
┃⚙️ 𝙼𝚘𝚍𝚎 : ${config.MODE}
┃💻 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
┃✨𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
      2
    )}MB / ${Math.round(require("os").totalmem / 1024 / 1024)}MB
┗━━━━━━━━━━━━━━━

✈︎ ᴇɴᴏʏ ᴛʜᴇ 𝗯𝗼𝘁 ᴏ𝗳 𝚙𝚘𝚍𝚒𝚢𝚊 𝚡ᵖʳᵒ! ☘︎
        `.trim();
  },
  //====================movie======================================
  GROUP: function (groupName, conf) {
    return `
📨 *𝙎𝙝𝙖𝙧𝙚𝙙 𝙄𝙣:* ${groupName}
🛡️ *𝘼𝙙𝙢𝙞𝙣:* ${conf.MNAME}
        `.trim();
  },
  SINHALASUB: function (movieData) {
    return `
🎬 *『 𝄟≛⃝ 〽️R.💞𓆩PODIYA𓆪Xᴾᴿᴼ 𝐂𝐈𝐍𝐄𝐌𝐀 』* 🍿

✨ *𝙼𝚘𝚟𝚒𝚎 𝙽𝚊𝚖𝚎:* ${movieData.title}
⭐ *𝙸𝙼𝙳𝙱 𝚁𝚊𝚝𝚒𝚗𝚐:* ${movieData.rating?.value || "𝙽/𝙰"} ★
📆 *𝚁𝚎𝚕𝚎𝚊𝚜𝚎 𝙳𝚊𝚝𝚎:* ${movieData.metadata?.releaseDate || "𝙽/𝙰"}
🌐 *𝙲𝚘𝚞𝚗𝚝𝚛𝚢:* ${movieData.metadata?.country || "𝙽/𝙰"}
⏱️ *𝙳𝚞𝚛𝚊𝚝𝚒𝚘𝚗:* ${movieData.metadata?.runtime || "𝙽/𝙰"}
        `.trim();
  },
  CINESUBZ: function (title, metadata, rating) {
    return `
🎬 *『 𝄟≛⃝ 〽️R.💞𓆩PODIYA𓆪Xᴾᴿᴼ 𝐂𝐈𝐍𝐄𝐌𝐀 』* 🍿

✨ *𝙼𝚘𝚟𝚒𝚎 𝙽𝚊𝚖𝚎:* 𝘾𝙝𝙚𝙘𝙠 𝙞𝙩 𝙤𝙪𝙩 → ${title}
       
⭐ *𝙸𝙼𝙳𝙱 𝚁𝚊𝚝𝚒𝚗𝚐:* ${rating?.value || "𝙽/𝙰"} ★
📆 *𝚁𝚎𝚕𝚎𝚊𝚜𝚎 𝙳𝚊𝚝𝚎:* ${metadata?.releaseDate || "𝙽/𝙰"}
🌐 *𝙲𝚘𝚞𝚗𝚝𝚛𝚢:* ${metadata?.country || "𝙽/𝙰"}
⏱️ *𝙳𝚞𝚛𝚊𝚝𝚒𝚘𝚗:* ${metadata?.runtime || "𝙽/𝙰"}
🎭 *𝙶𝚎𝚗𝚛𝚎𝚜:* ${metadata?.genres.map((g) => `#${g}`).join(" • ") || "𝙽/𝙰"} 
        `.trim();
  },
  CINETVSHOW: function (movieResponse) {
    return `
🎬 *『 𝄟≛⃝ 〽️R.💞𓆩PODIYA𓆪Xᴾᴿᴼ 𝐂𝐈𝐍𝐄𝐌𝐀 』* 🍿

📺 *𝚃𝚅 𝚂𝚑𝚘𝚠:* ${movieResponse.episodeInfo?.title || "𝙽/𝙰"}
🎞️ *𝙴𝚙𝚒𝚜𝚘𝚍𝚎 𝚃𝚒𝚝𝚕𝚎:* ${movieResponse.episodeInfo?.episodeTitle || "𝙽/𝙰"}
📅 *𝙳𝚊𝚝𝚎:* ${movieResponse.episodeInfo?.date || "𝙽/𝙰"}
        `.trim();
  },
  CINETVSHOWALLDL: function (movieData) {
    return `
🎬 *『 𝄟≛⃝ 〽️R.💞𓆩PODIYA𓆪Xᴾᴿᴼ 𝐂𝐈𝐍𝐄𝐌𝐀 』* 🍿

✨ *𝙼𝚘𝚟𝚒𝚎 𝚃𝚒𝚝𝚕𝚎:* ${movieData.data.title}
📆 *𝚁𝚎𝚕𝚎𝚊𝚜𝚎 𝙳𝚊𝚝𝚎:* ${movieData.data.releaseDate}
🌐 *𝙽𝚎𝚝𝚠𝚘𝚛𝚔:* ${movieData.data.network}
        `.trim();
  },
  SIMNHALAMOVIE: function (title) {
    return `
🎬 *『 𝄟≛⃝ 〽️R.💞𓆩PODIYA𓆪Xᴾᴿᴼ 𝐂𝐈𝐍𝐄𝐌𝐀 』* 🍿

🎞️ *𝚃𝚒𝚝𝚕𝚎:* ${title}  
        `.trim();
  },
  AWAMOVIE: function (title, releaseDate, country) {
    return `
🎬 *『 𝄟≛⃝ 〽️R.💞𓆩PODIYA𓆪Xᴾᴿᴼ 𝐂𝐈𝐍𝐄𝐌𝐀 』* 🍿

🎞️ *𝚃𝚒𝚝𝚕𝚎:* ${title}  
📆 *𝚁𝚎𝚕𝚎𝚊𝚜𝚎 𝙳𝚊𝚝𝚎:* ${releaseDate}  
🌐 *𝙲𝚘𝚞𝚗𝚝𝚛𝚢:*  ${country}      
        `.trim();
  },
  ANIMEMOVIE: function (title, releaseDate, country, duration) {
    return `
🎬 *『 𝄟≛⃝ 〽️R.💞𓆩PODIYA𓆪Xᴾᴿᴼ 𝐂𝐈𝐍𝐄𝐌𝐀 』* 🍿

✨ ${title} 
📅 𝗥𝗲𝗹𝗲𝗮𝘀𝗲 𝗗𝗮𝘁𝗲:${releaseDate}  
🌍 𝗖𝗼𝘂𝗻𝘁𝗿𝘆:${country}  
⏳ 𝗗𝘂𝗿𝗮𝘁𝗶𝗼𝗻:${duration}  
        `.trim();
  },
  BAISCOMOVIE: function (title, year, rating, duration) {
    return `
🎬 *『 𝄟≛⃝ 〽️R.💞𓆩PODIYA𓆪Xᴾᴿᴼ 𝐂𝐈𝐍𝐄𝐌𝐀 』* 🍿

🎞️ *𝚃𝚒𝚝𝚕𝚎:*  ${title} 
📅 𝗥𝗲𝗹𝗲𝗮𝘀𝗲 𝗗𝗮𝘁𝗲:${year}  
🌍 RATINGS:${rating}  
⏳ 𝗗𝘂𝗿𝗮𝘁𝗶𝗼𝗻:${duration}  
        `.trim();
  },
  ADULTMOVIE: function (title, rating, description) {
    return `
🎬 *『 𝄟≛⃝ 〽️R.💞𓆩PODIYA𓆪Xᴾᴿᴼ 𝐂𝐈𝐍𝐄𝐌𝐀 』* 🍿
──────────────────
✨ *Title:* ${title}
⭐ *Rating:* ${rating}

🌍 *Description:*  
${description}
──────────────────
📥 *Downloading...*
        `.trim();
  },
  ANIMOMOVIE: function (movieData) {
    return `
🎬 *『 𝄟≛⃝ 〽️R.💞𓆩PODIYA𓆪Xᴾᴿᴼ 𝐂𝐈𝐍𝐄𝐌𝐀 』* 🍿  
        
✨ ${movieData.title}  
⭐ Description:${movieData.description} 
    
🌍  ${movieData.plot} 
        `.trim();
  },
  FILMPOMOVIE: function (title, rating, year, duration) {
    return `
🎬 *『 𝄟≛⃝ 〽️R.💞𓆩PODIYA𓆪Xᴾᴿᴼ 𝐂𝐈𝐍𝐄𝐌𝐀 』* 🍿  

✨ *𝙼𝚘𝚟𝚒𝚎 𝙽𝚊𝚖𝚎:* ${title}
⭐ *𝙸𝙼𝙳𝙱 𝚁𝚊𝚝𝚒𝚗𝚐:* ${rating}
📅 *𝚁𝚎𝚕𝚎𝚊𝚜𝚎 𝙳𝚊𝚝𝚎:* ${year}
⏳ *𝙳𝚞𝚛𝚊𝚝𝚒𝚘𝚗:* ${duration}
        `.trim();
  },
  MVINFOCAPTION: "🎬 *『 𝄟≛⃝ 〽️R.💞𓆩PODIYA𓆪Xᴾᴿᴼ 𝐂𝐈𝐍𝐄𝐌𝐀 』* 🍿\n\n",
  //=====================youtube===========================================
  SONG: function (data) {
    return `
🎵 SONG DOWNLOADER
      
✅ Song Found!
          
• 🎶 *Title:* ${data.title}
• ⏱️ *Duration:* ${data.timestamp}
• 👁️ *Views:* ${data.views}
• 📅 *Uploaded On:* ${data.ago}
• 🔗 *Link:* ${data.url}
          
🎧 Enjoy your music with podiyas Bot  
❤️ Created by peksha rasanjana
        `.trim();
  },
  YTMP3: function (data) {
    return `
🎥 *MP3 Download Found!* 

➥ *Title:* ${data.title} 
➥ *Duration:* ${data.timestamp} 
➥ *Views:* ${data.views} 
➥ *Uploaded On:* ${data.ago} 
➥ *Link:* ${data.url}

🎬 *Enjoy the video brought to you by podiyas Bot!* 
        `.trim();
  },
  VIDEO: function (data) {
    return `
🎵 VIDEO DOWNLOADER
      
✅ VIDEO Found!
          
• 🎶 *Title:* ${data.title}
• ⏱️ *Duration:* ${data.timestamp}
• 👁️ *Views:* ${data.views}
• 📅 *Uploaded On:* ${data.ago}
• 🔗 *Link:* ${data.url}
          
🎧 Enjoy your music with podiyas Bot  
❤️ Created by peksha rasanjana
        `.trim();
  },
  YTMP4: function (data) {
    return `
🎥 *MP4 Download Found!* 

➥ *Title:* ${data.title} 
➥ *Duration:* ${data.timestamp} 
➥ *Views:* ${data.views} 
➥ *Uploaded On:* ${data.ago} 
➥ *Link:* ${data.url} 

🎬 *Enjoy the video brought to you by podiyas Bot!* 
        `.trim();
  },
};
