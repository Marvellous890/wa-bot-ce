const dir = [
  'https://telegra.ph/file/fb1b448248dd79068f5e3.jpg',
  'https://telegra.ph/file/4dadc56e01cee6d228af8.jpg',
  'https://telegra.ph/file/4bfc1608ca26a93664313.jpg',
  'https://telegra.ph/file/568c14be8dc877e25747b.jpg',
  'https://telegra.ph/file/483f70459d59a5d70120d.jpg',
  'https://telegra.ph/file/f69b062ffd4b5d8207c54.jpg',
  'https://telegra.ph/file/8ed15349ae10f3b919e54.jpg',
  'https://telegra.ph/file/b71dbcec81d46629da26f.jpg',
  'https://telegra.ph/file/2873e87e68d57802b21de.jpg',
  'https://telegra.ph/file/d214b8c897ade803f805d.jpg',
  'https://telegra.ph/file/b2020b37cd0864c44ebfb.jpg',
  'https://telegra.ph/file/e40a41748c67a74f6bb2d.jpg',
  'https://telegra.ph/file/69c6fc6c96dbb7723a181.jpg',
  'https://telegra.ph/file/c2ca832a3498909ed496e.jpg',
  'https://telegra.ph/file/ececc305a6447ab6e8104.jpg',
  'https://telegra.ph/file/e588d7cbc1530edb027b8.jpg',
  'https://telegra.ph/file/5c353e3e088c0fc448030.jpg',
  'https://telegra.ph/file/e51152c98e5d30af840a9.jpg',
  'https://telegra.ph/file/881a422d300588e3bc560.jpg',
  'https://telegra.ph/file/7589a136518182d3c4ba4.jpg',
  'https://telegra.ph/file/9bcac89c6a34060c5eb1b.jpg',
  'https://telegra.ph/file/4ff50fd61d0cf5701cbc2.jpg',
  'https://telegra.ph/file/debd1b69491458e78cb1a.jpg',
  'https://telegra.ph/file/673bd4b1d7f9e42650ad6.jpg',
  'https://telegra.ph/file/0a9d9d2364b53f00f24fc.jpg',
  'https://telegra.ph/file/de048c33691b87772945d.jpg',
  'https://telegra.ph/file/d5f37f2bd581075b3cfcd.jpg',
  'https://telegra.ph/file/3312d8e2f6f8127da13a9.jpg',
  'https://telegra.ph/file/ddb33ce23c23b8035954b.jpg',
  'https://telegra.ph/file/d87cc777821ba5478804c.jpg',
  'https://telegra.ph/file/d8e28b9cbdbaced72abcb.jpg',
  'https://telegra.ph/file/4489c3c90d6656706ef93.jpg',
  'https://telegra.ph/file/ed145e0e3c8fd3c179ea0.jpg',
  'https://telegra.ph/file/d0f5bb0517ac716f2feb9.jpg',
  'https://telegra.ph/file/480e2479bf7f81b5f0b6b.jpg',
  'https://telegra.ph/file/1a2eff99a0d258de4f47e.jpg',
  'https://telegra.ph/file/c831b41b141bf86ba0431.jpg',
  'https://telegra.ph/file/eea1647722e68d16e558d.jpg',
  'https://telegra.ph/file/d3dab66acce218324073f.jpg',
  'https://telegra.ph/file/19e73add363964e73431c.jpg',
  'https://telegra.ph/file/56438ed30360d9befe89c.jpg',
  'https://telegra.ph/file/b2466fa85bfaa33cf0816.jpg',
  'https://telegra.ph/file/a41dcbd2dde315d6e6f7e.jpg',
  'https://telegra.ph/file/dc39e037580f0cec61140.jpg',
  'https://telegra.ph/file/1ab3ae0bb32eb36e95c62.jpg',
  'https://telegra.ph/file/5197f6f2db3d2320575d4.jpg',
  'https://telegra.ph/file/1d8a5deefb1721a469b1e.jpg',
  'https://telegra.ph/file/89a70582dffd34ca508b3.jpg',
  'https://telegra.ph/file/e0ec0740c6ec46556b2fd.jpg',
  'https://telegra.ph/file/14e7ab234f6599312f754.jpg',
  'https://telegra.ph/file/e9702df2cc16cbb4d0751.jpg',
  'https://telegra.ph/file/031e84d4ea1c874e9c413.jpg',
  'https://telegra.ph/file/1d8a5deefb1721a469b1e.jpg',
  'https://telegra.ph/file/5c9e716171b5e672c2ea5.jpg',
  'https://telegra.ph/file/cb6b3b3032910d298e06a.jpg',
  'https://telegra.ph/file/9f6aebfe569a6e0e7dc32.jpg',
  'https://telegra.ph/file/b630ea2150db5605dcbe0.jpg',
  'https://telegra.ph/file/ffc96f44604acf07210d0.jpg',
  'https://telegra.ph/file/5c9e716171b5e672c2ea5.jpg',
  'https://telegra.ph/file/5cc71adc674723e9881ad.jpg',
  'https://telegra.ph/file/f82cefd2e123b17eeaaed.jpg',
  ];
  let handler = async (m, { conn }) => {
    conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dado.webp', '⏜៶ ⸙ ៸⏜︵\n\n*•اكتشـف اسـم الشخـصية🔎: ⤳*\n\n*•المـستـوى 📊 : ⤳*\n\n*•الـمدة ⏳ :  ⤳1دقيقه*\n\n*•المكــافـئة💎:  ⤳10k*\n\n⟮ *•المــقـدم🎙: miku⤳*\n\n︶⏝៶ ⸙ ៸⏝︶\n\n*₊·🎌੭.*\n\n*「𝑀𝑖𝑘𝑢-𝐵𝑜」*', m)
  }
  handler.help = ['dado']
  handler.tags = ['game']
  handler.command = ['شادو', 'dado'] 
  
  export default handler