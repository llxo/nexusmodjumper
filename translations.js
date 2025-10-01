/**
 * Nexus Mods 游戏名中英文映射表
 * Game Name Translation Mapping for Nexus Mods
 * 
 * 用于将英文游戏名映射为中文名称
 * Maps English game names to Chinese names
 */

const gameTranslations = {
    // 热门游戏
    "Cyberpunk 2077": "赛博朋克2077",
    "Skyrim Special Edition": "上古卷轴V：天际特别版",
    "Skyrim": "上古卷轴V：天际",
    "Fallout 4": "辐射4",
    "Fallout New Vegas": "辐射：新维加斯",
    "Stardew Valley": "星露谷物语",
    "Baldur's Gate 3": "博德之门3",
    "Oblivion": "上古卷轴IV：湮没",
    "Fallout 3": "辐射3",
    "The Witcher 3": "巫师3：狂猎",
    "Mount & Blade II: Bannerlord": "骑马与砍杀II：领主",
    "Starfield": "星空",
    "Morrowind": "上古卷轴III：晨风",
    "Modding Tools": "Modding Tools",
    "Monster Hunter: World": "怪物猎人：世界",
    "Blade & Sorcery": "剑与魔法",
    "Dragon Age: Origins": "龙腾世纪：起源",
    "Red Dead Redemption 2": "荒野大镖客：救赎2",
    "Elden Ring": "艾尔登法环",
    "Ready or Not": "严阵以待",
    "Dragon Age: Inquisition": "龙腾世纪：审判",
    "Monster Hunter Rise": "怪物猎人：崛起",
    "Subnautica": "深海迷航",
    "Dragon Age 2": "龙腾世纪2",
    "My Summer Car": "我的夏季汽车",
    "7 Days To Die": "七日杀",
    "Resident Evil 4 (2023)": "生化危机4 重制版",
    "Valheim": "英灵神殿",
    "Palworld": "幻兽帕鲁",
    "Mass Effect Legendary Edition": "质量效应：传奇版",
    "Blade & Sorcery: Nomad": "剑与魔法：游牧",
    "Stellar Blade": "剑星",
    "Star Wars: Battlefront II (2017)": "星球大战：前线2",
    "Kingdom Come: Deliverance": "天国：拯救",
    "Oblivion Remastered": "上古卷轴IV：湮没重制版",
    "Monster Hunter Wilds": "怪物猎人：荒野",
    "The Sims 4": "模拟人生4",
    "Darkest Dungeon": "暗黑地牢",
    "Hogwarts Legacy": "霍格沃茨之遗",
    "Resident Evil 2 (2019)": "生化危机2 重制版",
    "Helldivers 2": "绝地潜兵2",
    "Marvel's Spider-Man Remastered": "漫威蜘蛛侠：重制版",
    "No Man's Sky": "无人深空",
    "Sekiro: Shadows Die Twice": "只狼：影逝二度",
    "S.T.A.L.K.E.R. 2: Heart of Chornobyl": "潜行者2：切尔诺贝利之心",
    "Kingdom Come: Deliverance II": "天国：拯救II",
    "Marvel Rivals": "漫威争锋",
    "Dark Souls": "黑暗之魂",
    "Resident Evil 3 (2020)": "生化危机3 重制版",
    "Devil May Cry 5": "鬼泣5",
    "Metal Gear Solid V: The Phantom Pain": "合金装备V：幻痛",
    "Lobotomy Corporation": "脑叶公司",
    "Dark Souls 3": "黑暗之魂3",
    "Mass Effect Andromeda": "质量效应：仙女座",
    "Dragon's Dogma: Dark Arisen": "龙之信条：黑暗觉者",
    "Final Fantasy VII Remake": "最终幻想VII 重制版",
    "Daggerfall Unity": "上古卷轴2：匕首雨 Unity",
    "Street Fighter 6": "街头霸王6",
    "MechWarrior 5: Mercenaries": "机甲战士5：雇佣兵",
    "Fallout 76": "辐射76",
    "Mass Effect 3": "质量效应3",
    "Kenshi": "剑士",
    "TCG Card Shop Simulator": "TCG卡牌商店模拟器",
    "Dragon's Dogma 2": "龙之信条2",
    "Knights of the Old Republic": "星球大战：旧共和国武士",
    "Planet Zoo": "动物园之星",
    "Enderal Special Edition": "恩达瑞尔：被遗忘的故事（特别版）",
    "Supermarket Simulator": "超市模拟器",
    "State of Decay 2": "腐烂国度2",
    "Warhammer 40,000: Darktide": "战锤40000：暗潮",
    "Jurassic World Evolution 2": "侏罗纪世界：进化2",
    "The Witcher 2": "巫师2：国王刺客",
    "Batman: Arkham Knight": "蝙蝠侠：阿卡姆骑士",
    "XCOM 2": "幽浮2",
    "Slime Rancher": "史莱姆牧场",
    "X4: Foundations": "X⁴：基石",
    "Battle Brothers": "战场兄弟",
    "Code Vein": "噬血代码",
    "Mount & Blade: Warband": "骑马与砍杀：战团",
    "Days Gone": "往日不再",
    "Divinity: Original Sin 2 - Definitive Edition": "神界：原罪2 - 决定版",
    "Dying Light": "消逝的光芒",
    "Star Wars Jedi: Fallen Order": "星球大战 绝地：陨落的武士团",
    "Pathfinder: Kingmaker": "开拓者：拥王者",
    "Borderlands 2": "无主之地2",
    "NieR: Automata": "尼尔：自动人形",
    "The Witcher": "巫师",
    "Final Fantasy XIV": "最终幻想14",
    "Pathfinder: Wrath of The Righteous": "开拓者：正义之怒",
    "Subnautica: Below Zero": "深海迷航：零度之下",
    "Anno 1800": "纪元1800",
    "Final Fantasy VII Rebirth": "最终幻想VII 重生",
    "State of Decay": "腐烂国度",
    "Dying Light 2": "消逝的光芒2",
    "XCOM: Enemy Unknown": "幽浮：未知敌人",
    "Dark Souls 2": "黑暗之魂2",
    "Ghost Recon Breakpoint": "幽灵行动：断点",
    "Black Myth: Wukong": "黑神话：悟空",
    "Dark Souls Remastered": "黑暗之魂：重制版",
    "Bloons TD6": "气球塔防6",
    "Resident Evil Village": "生化危机：村庄",
    "Divinity: Original Sin 2": "神界：原罪2",
    "Sifu": "师父",
    "Mass Effect 2": "质量效应2",
    "Assassin's Creed Odyssey": "刺客信条：奥德赛",
    "Diablo II: Resurrected": "暗黑破坏神II：重制版",
    "Yu-Gi-Oh Master Duel": "游戏王：大师决斗",
    "Mass Effect": "质量效应",
    "Knights of the Old Republic II": "星球大战™：旧共和国武士™ 2 - 西斯领主™",
    "Snowbreak: Containment Zone": "尘白禁区",
    "Clair Obscur: Expedition 33": "光与影：33号远征队",
    "Horizon Zero Dawn": "地平线 零之曙光",
    "Star Wars Jedi: Survivor": "星球大战绝地：幸存者",
    "Nioh 2": "仁王2",
    "BattleTech": "机甲战士",
    "Jurassic World Evolution": "侏罗纪世界：进化",
    "Marvel's Spider-Man: Miles Morales": "漫威蜘蛛侠：迈尔斯·莫拉莱斯",
    "Starbound": "星界边境",
    "Kingdom Hearts III": "王国之心III",
    "Marvel's Spider-Man 2": "漫威蜘蛛侠2",
    "Rise Of The Tomb Raider": "古墓丽影：崛起",
    "Ace Combat 7: Skies Unknown": "皇牌空战7：未知空域",
    "Sun Haven": "太阳港",
    "Shadow of the Tomb Raider": "古墓丽影：暗影",
    "Hitman 3": "杀手 3",
    "Dragon Ball Z: Kakarot": "七龙珠Z 卡卡洛特",
    "Dragon Ball: Sparking ZERO": "七龍珠 電光炸裂！ZERO",
    "Grand Theft Auto V Legacy": "侠盗猎车手V",
    "Grand Theft Auto IV": "侠盗猎车手IV",
    "Rimworld": "边缘世界",
    "Neverwinter Nights 2": "无冬之夜2",
    "EA Sports FC 25": "EA Sports FC™ 25",
    "Pillars of Eternity 2: Deadfire": "永恒之柱2：死亡之火",
    "Bloodborne": "血源诅咒",
    "inZOI": "云族裔",
    "Vampire: The Masquerade - Bloodlines": "吸血鬼：避世血族－血脉",
    "Hollow Knight: Silksong": "空洞骑士：丝之歌",
    "Dragon Age: The Veilguard": "龙腾世纪：影障守护者",
    "Borderlands 3": "无主之地3",
    "Marvel's Midnight Suns": "漫威暗夜之子",
    "Cities: Skylines": "都市：天际线",
    "Ghost of Tsushima Director's Cut": "对马岛之魂 导演剪辑版",
    "theHunter: Call of the Wild": "猎人：野性的呼唤",
    "Halo: The Master Chief Collection": "光环：士官长合集",
    "Tales of Arise": "破曉傳奇",
    "Far Cry 3": "孤岛惊魂3",
    "The Elder Scrolls Online": "上古卷轴Online",
    "Fallout 4 London": "辐射：伦敦",
    "Granblue Fantasy: Relink": "碧蓝幻想：Relink",
    "DOOM Eternal": "毁灭战士：永恒",
    "Grim Dawn": "恐怖黎明",
    "Yakuza 0": "人中之龍0 誓約的場所",
    "My Garage": "我的车库",
    "Assassin's Creed Valhalla": "刺客信条：英灵殿",
    "Grand Theft Auto: The Trilogy": "侠盗猎车手：三部曲 – 最终版",
    "Outward": "物质世界",
    "Warhammer 40,000: Rogue Trader": "战锤40K：行商浪人",
    "Elden Ring Nightreign": "艾尔登法环：黑夜君临",
    "Assassin's Creed IV: Black Flag": "刺客信条IV：黑旗",
    "EA Sports FC 24": "EA SPORTS FC™ 24",
    "Watch Dogs": "看门狗",
    "Dinkum": "金垦小镇",
    "Wuchang: Fallen Feathers": "明末：渊虚之羽",
    "The Killing Antidote": "致命解药",
    "Need For Speed: Heat": "极品飞车：热度",
    "Derail Valley": "脱轨山谷",
    "Tekken 8": "铁拳8",
    "Enderal": "恩达瑞尔",
    "Dragon Quest XI S: Definitive Edition": "勇者斗恶龙XI S 寻觅逝去的时光 – Definitive Edition",
    "GreedFall": "贪婪之秋",
    "Guitar Hero World Tour": "吉他英雄：世界巡演",
    "Lethal Company": "致命公司",
    "My Time at Portia": "波西亚时光",
    "Pillars of Eternity": "永恒之柱",
    "Final Fantasy XII: The Zodiac Age": "最终幻想XII 黄道时代",
    "Final Fantasy X/X-2 HD Remaster": "最终幻想X/X-2 HD重制版",
    "Payday 2": "收获日2",
    "Resident Evil 4": "生化危机4",
    "Car Mechanic Simulator 2021": "汽车修理工模拟器2021",
    "Ground Branch": "地面部队",
    "Railroader": "Railroader",
    "Resident Evil 5 Gold Edition": "生化危机5 黄金版",
    "She Will Punish Them": "嗜血印",
    "Divinity: Original Sin": "神界：原罪",
    "Graveyard Keeper": "守墓人",
    "Lies of P": "匹诺曹的谎言",
    "Mortal Kombat 1": "真人快打1",
    "X: Rebirth": "X：重生",
    "Gotham Knights": "哥谭骑士",
    "Red Dead Redemption": "荒野大镖客：救赎",
    "Assassin's Creed Unity": "刺客信条：大革命",
    "Silent Hill 2 (2024)": "寂静岭2：重制版",
    "Hades": "哈迪斯",
    "EDOPro": "EDOPro",
    "Far Cry 5": "孤岛惊魂5",
    "Warhammer 40,000: Space Marine 2": "战锤40K：星际战士2",
    "Bloodstained: Ritual of the Night": "血污：夜之仪式",
    "JoJo's Bizarre Adventure: All-Star Battle R": "JOJO的奇妙冒险群星之战重制版",
    "FIFA 23": "FIFA 23"
};

// 备用游戏数据库（如果API请求失败时使用）
const fallbackGames = Object.keys(gameTranslations).map(englishName => {
    const slug = englishName.toLowerCase().replace(/[^a-z0-9]/g, '');
    return { name: englishName, chinese: gameTranslations[englishName], slug: slug };
});

/**
 * 获取游戏的中文名称
 * @param {string} englishName - 英文游戏名
 * @returns {string} 中文游戏名或原英文名（如果没有映射）
 */
function getChineseName(englishName) {
    return gameTranslations[englishName] || englishName;
}

/**
 * 检查是否有中文翻译
 * @param {string} englishName - 英文游戏名
 * @returns {boolean} 是否有中文翻译
 */
function hasChineseTranslation(englishName) {
    return gameTranslations.hasOwnProperty(englishName);
}

/**
 * 获取所有游戏映射
 * @returns {Object} 完整的游戏映射表
 */
function getAllTranslations() {
    return { ...gameTranslations };
}

/**
 * 添加新的游戏翻译
 * @param {string} englishName - 英文游戏名
 * @param {string} chineseName - 中文游戏名
 */
function addTranslation(englishName, chineseName) {
    if (!gameTranslations.hasOwnProperty(englishName)) {
        gameTranslations[englishName] = chineseName;
        const slug = englishName.toLowerCase().replace(/[^a-z0-9]/g, '');
        fallbackGames.push({ name: englishName, chinese: chineseName, slug: slug });
    }
}

// 如果是在浏览器环境中，将函数添加到全局对象
if (typeof window !== 'undefined') {
    window.gameTranslations = gameTranslations;
    window.fallbackGames = fallbackGames;
    window.getChineseName = getChineseName;
    window.hasChineseTranslation = hasChineseTranslation;
    window.getAllTranslations = getAllTranslations;
    window.addTranslation = addTranslation;
}

// 如果是在Node.js环境中，导出模块
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        gameTranslations,
        fallbackGames,
        getChineseName,
        hasChineseTranslation,
        getAllTranslations,
        addTranslation
    };
}
