/* ======================================================================
   全站內容　—— 要改網站上的任何文字、數字、文章，都在這個檔案裡改。
   改完存檔，重新整理頁面就生效（不會動到 index.html）。

   三個小規則，避免改壞：
     1) 每一筆資料用大括號  {  }  包起來
     2) 欄位之間、每一筆之間，都要有逗號  ,
     3) 短文字用半形雙引號  " "  包住；長文章（body）用反引號  ` `（見下方）
   ====================================================================== */

window.SITE_CONTENT = {

  /* 左上角的網站名稱 */
  brand: "Adam",

  /* 外部資料來源：把 Google 試算表「發布為 CSV」的網址貼進來即可啟用；
     留空白＝沿用下方各區的內建資料當後備（就像投資儀表板那樣）。 */
  sources: {
    health: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRo0AWDYEond76mpB2ldmXRFlH5bDXQ7FP9GmOimWExxEYrdeDHDSZZaUobs9WQSKVEbePj-E7NUXc0/pub?gid=1004166115&single=true&output=csv",
    reading: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRo0AWDYEond76mpB2ldmXRFlH5bDXQ7FP9GmOimWExxEYrdeDHDSZZaUobs9WQSKVEbePj-E7NUXc0/pub?gid=1936712676&single=true&output=csv",
    life: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRo0AWDYEond76mpB2ldmXRFlH5bDXQ7FP9GmOimWExxEYrdeDHDSZZaUobs9WQSKVEbePj-E7NUXc0/pub?gid=175264152&single=true&output=csv",
  },

  /* ============ 首頁 ============ */
  home: {
    // 座右銘。想讓某幾個字變斜體強調，用 *星號* 包起來。
    motto: "Slow is smooth, smooth is fast.",
    // 副標。換行用 \n；同樣可用 *星號* 強調。
    subtitle: "Go ahead and enjoy!",
    principles: [
      // —— 指數化投資：算術優勢 ——
      { tag: "INDEX",      title: "直接領取市場報酬。",   note: "超額報酬是零和：扣費前有人贏市場，必有人輸給市場；扣費後，全體主動必然輸給全體被動。指數化就是拒絕參與這場負和遊戲。" },
      { tag: "COST",       title: "成本是唯一事前確定的變數。", note: "報酬無法保證，內扣費用百分之百確定；1% 年費在 30 年複利下，會吃掉約四分之一的終值。把成本壓到最低，是少數穩賺的決定。" },
      // —— 資產配置：持續留在市場 ——
      { tag: "VOLATILITY", title: "波動是複利的稅。",     note: "幾何報酬 ≈ 算術報酬 − 變異數/2；降低波動等於退稅。犧牲一點算術報酬換低波動，實付的代價比表面小。" },
      { tag: "STAY",       title: "持續留在市場裡。",     note: "中斷複利只有兩種死法——自願下車（恐慌、擇時、換策略）與被迫下車（缺現金、槓桿斷頭）。再平衡只為把風險拉回水位；最好的組合，是你抱得住的那一個。" },
      // —— 長期效益 ——
      { tag: "INFINITE",   title: "人生是一場無限賽局。", note: "更像世代接力，而非單局輸贏。把眼光放到夠長，才看得見複利真正的形狀。" },
      { tag: "COMPOUND",   title: "收集正向複利，避開負向複利。", note: "健康（運動、社交、檢查）、成長（認知、知識、技能）、財富（指數化＋配置）、有記憶的日子（旅遊、新體驗）——讓好的東西年復一年疊加。" },
      // —— 心態 ——
      { tag: "EXPERIENCE", title: "萬物皆體驗。",         note: "打電動、讀書、考試、學技能、旅遊、美食、結婚生子，全都是體驗。Go ahead and enjoy——保持好奇心，追求心流。" },
      { tag: "PERSPECTIVE",title: "灰階思考，把視角拉高。", note: "沒有絕對的對錯，只有機會成本；視角拉高拉遠，人生就是一場喜劇。其餘的，交給誠信與負責。" },
    ],
  },

  /* ============ 投資儀表板 ============
     平常只改每行的  value（最新數值）與最上面的 lastUpdated。
     thresholds 是四條門檻，把情緒切成五級：
       < 第1門檻＝極度恐懼、…、≥ 第4門檻＝極度貪婪。
     （門檻等距時，會剛好落在溫度軸的 20 / 40 / 60 / 80%。）  */
  dashboard: {
    lastUpdated: "2026-06-14",
    sheetUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRo0AWDYEond76mpB2ldmXRFlH5bDXQ7FP9GmOimWExxEYrdeDHDSZZaUobs9WQSKVEbePj-E7NUXc0/pub?gid=1072677775&single=true&output=csv",
    indicators: [
      { id: "tw_margin",  label: "台股大盤融資維持率",     short: "融資維持率", tag: "TWSE",      value: 167.32, thresholds: [140, 150, 160, 170], unit: "%", decimals: 0 },
      { id: "tw_breadth", label: "台股 200 日均線之上比例", short: "台股廣度",   tag: ">200MA",    value: 59.33,  thresholds: [20, 40, 60, 80],     unit: "%", decimals: 0 },
      { id: "us_breadth", label: "美股 200 日均線之上比例", short: "美股廣度",   tag: "$SPXA200R", value: 55.38,  thresholds: [20, 40, 60, 80],     unit: "%", decimals: 0 },
      { id: "cnn_fng",    label: "CNN 恐懼貪婪指數",        short: "CNN F&G",    tag: "CNN",       value: 34,  thresholds: [20, 40, 60, 80],     unit: "",  decimals: 0 },
      { id: "bofa",       label: "BofA 牛熊指標",           short: "BofA 牛熊",  tag: "BofA",      value: 8.8, thresholds: [2, 4, 6, 8],         unit: "",  decimals: 1 },
    ],
  },

  /* ============ 健康長壽（可點進去看長文）============
     卡片顯示 title + desc（摘要）。有寫 body 的就能點進去讀全文。
     body 用反引號 ` ` 包起來，可跨多行：
       一段一行，段落之間空一行；
       ## 大標、### 小標、- 項目、**粗體**、*斜體*。
     新增文章＝複製一整段 { } 貼在最前面（最新的放最上面）。  */
  health: [
    {
      title: "ApoB 與 Lp(a)：被低估的心血管風險指標",
      date: "2026·05", read: "8 分鐘", lead: "生物標記",
      desc: "為什麼 ApoB 比 LDL-C 更能反映風險，以及 Lp(a) 這個一生一驗的基因因子。",
      tags: ["ApoB", "Lp(a)", "心血管"],
      body: `血脂報告上最常看的是 LDL-C（低密度脂蛋白膽固醇），但真正驅動動脈粥狀硬化的，是「致動脈硬化脂蛋白顆粒的數目」。而 ApoB 正是這個數目的直接代理指標——每一顆 LDL、VLDL、Lp(a) 顆粒上都帶著一個 ApoB。

當 LDL-C 與 ApoB 不一致時（例如顆粒小而多），ApoB 往往更能反映真實風險。

## 為什麼值得自費驗
在標準血脂看似正常、但 ApoB 偏高的人身上，風險常被低估。把 ApoB 當成主要追蹤指標，比單看 LDL-C 更貼近「顆粒數」這個致病機轉。

## Lp(a)：一生驗一次就夠
Lp(a) 由基因決定、終生相對穩定，一輩子驗一次大致就夠。它偏高的人，即使其他指標漂亮，心血管風險仍顯著上升，需要更積極地控制其他可調整的因子。

- **ApoB**：納入定期追蹤，目標依個人風險分層
- **Lp(a)**：至少驗一次，先了解自己的基因底牌`,
    },
  ],

  /* ============ 閱讀筆記（PDF 心得）============
     做法：把整理好的 PDF 放進與網站同層的  reading/  資料夾，
     然後在這裡每本書填一段，pdf 指向那個檔名。
     卡片顯示書名 + 一句話；點進去會內嵌預覽 PDF，可全螢幕開啟或下載。
     新增一本＝複製一整段 { } 貼上。  */
  reading: [

    /* —— 財經投資 —— */
    { title: "致富心態", cat: "財經投資", author: "摩根．豪瑟",
      note: "投資成績單上寫的不是智商，而是行為——時間、知足與活下來，比聰明更接近財富。",
      tags: ["財經投資", "行為"],
      pdf: "reading/致富心態_讀書心得.pdf" },

    { title: "一如既往", cat: "財經投資", author: "摩根．豪瑟",
      note: "未來無法預測，但人性永遠重演——把賭注下在不變的事物上。",
      tags: ["財經投資", "不確定性"],
      pdf: "reading/一如既往_讀書心得.pdf" },

    { title: "巴菲特寫給股東的信", cat: "財經投資", author: "華倫．巴菲特",
      note: "把股票當成企業的一部分、把市場當僕人、把波動當朋友。",
      tags: ["價值投資", "巴菲特"],
      pdf: "reading/巴菲特寫給股東的信_讀書心得.pdf" },

    { title: "窮查理的普通常識", cat: "財經投資", author: "查理．蒙格",
      note: "這不是投資書，是一座跨學科兵器庫——先避免愚蠢，聰明會自己出現。",
      tags: ["思維模型", "蒙格"],
      pdf: "reading/窮查理的普通常識_讀書心得.pdf" },

    { title: "漫步華爾街", cat: "財經投資", author: "墨基爾",
      note: "蒙眼猴子射飛鏢的組合，足以打敗大多數穿條紋西裝的專家。",
      tags: ["指數投資", "效率市場"],
      pdf: "reading/漫步華爾街_讀書心得.pdf" },

    { title: "投資金律", cat: "財經投資", author: "威廉．伯恩斯坦",
      note: "理論、歷史、心理、產業——四根柱子缺一根，投資組合就會塌。",
      tags: ["資產配置", "指數投資"],
      pdf: "reading/投資金律_讀書心得.pdf" },

    { title: "持續買進", cat: "財經投資", author: "尼克．馬朱利",
      note: "別問「現在該不該買」，答案永遠是：持續買進。",
      tags: ["定期定額", "儲蓄"],
      pdf: "reading/持續買進_讀書心得.pdf" },

    { title: "綠角的基金8堂課", cat: "財經投資", author: "綠角",
      note: "投資的成敗由風險與成本決定，而這兩樣都在你自己手上。",
      tags: ["指數投資", "成本"],
      pdf: "reading/綠角的基金8堂課_讀書心得.pdf" },

    { title: "買下全世界", cat: "財經投資", author: "亞倫．安德森",
      note: "你不需要預測哪個國家是下一個贏家——買下全世界，贏家自動在組合裡。",
      tags: ["全球投資", "分散"],
      pdf: "reading/買下全世界_讀書心得.pdf" },

    { title: "逆向投資策略", cat: "財經投資", author: "大衛．德雷曼",
      note: "市場一貫高估熱門股、低估冷門股——站在掌聲的對面，勝率最高。",
      tags: ["逆向投資", "價值"],
      pdf: "reading/逆向投資策略_讀書心得.pdf" },

    { title: "通膨時代，我選擇穩定致富", cat: "財經投資", author: "理財館長、狂徒",
      note: "市場報酬本身，就是散戶拿得到的最好報酬。",
      tags: ["指數投資", "通膨"],
      pdf: "reading/通膨時代我選擇穩定致富_讀書心得.pdf" },

    { title: "槓桿ETF投資法", cat: "財經投資", author: "大仁",
      note: "真正教的不是槓桿 ETF，而是「曝險」——風險不在工具，在你押了多少。",
      tags: ["槓桿ETF", "曝險"],
      pdf: "reading/槓桿ETF投資法_讀書心得.pdf" },

    { title: "隨機騙局", cat: "財經投資", author: "納西姆．塔雷伯",
      note: "成功者最危險的錯覺，是把運氣記成實力。",
      tags: ["隨機性", "風險"],
      pdf: "reading/隨機騙局_讀書心得.pdf" },

    { title: "圖解貨幣學", cat: "財經投資", author: "林祖儀",
      note: "看懂貨幣的規則，等於拿到解讀利率、匯率、通膨的字典。",
      tags: ["貨幣", "總體經濟"],
      pdf: "reading/圖解貨幣學_讀書心得.pdf" },

    { title: "用生活常識就能看懂財務報表", cat: "財經投資", author: "林明樟",
      note: "財報是一種語言，難的不是英翻中，而是「中翻中」。",
      tags: ["財報", "會計"],
      pdf: "reading/用生活常識就能看懂財務報表_讀書心得.pdf" },

    { title: "別把你的錢留到死", cat: "財經投資", author: "比爾．柏金斯",
      note: "錢是生命活力的兌換券——沒花掉的那部分，等於白白上繳的人生。",
      tags: ["人生規劃", "體驗"],
      pdf: "reading/別把你的錢留到死_讀書心得.pdf" },

    /* —— 心理學與行為科學 —— */
    { title: "快思慢想", cat: "心理學", author: "丹尼爾．康納曼",
      note: "你以為的「我在想」，多數時候只是系統一在替你想。",
      tags: ["認知偏誤", "行為經濟學"],
      pdf: "reading/快思慢想_讀書心得.pdf" },

    { title: "金錢心理學", cat: "心理學", author: "丹．艾瑞利、傑夫．克萊斯勒",
      note: "我們以為自己在計算價值，其實都在使用替代品——而商人比你更懂。",
      tags: ["行為經濟學", "消費"],
      pdf: "reading/金錢心理學_讀書心得.pdf" },

    { title: "贏家的詛咒", cat: "心理學", author: "理查．塞勒",
      note: "每一章都是對標準經濟學的當庭對質——理論說人會這樣，數據說：並沒有。",
      tags: ["行為經濟學", "異例"],
      pdf: "reading/贏家的詛咒_讀書心得.pdf" },

    { title: "人性賽局", cat: "心理學", author: "摩西．霍夫曼、艾瑞茲．尤利",
      note: "你的品味、信念與美德，是看不見的賽局替你算好的最適解。",
      tags: ["賽局理論", "演化"],
      pdf: "reading/人性賽局_讀書心得.pdf" },

    { title: "多巴胺國度", cat: "心理學", author: "安娜．蘭布克",
      note: "爽與痛共用同一座翹翹板，壓下哪端，另一端必然翹起。",
      tags: ["成癮", "多巴胺"],
      pdf: "reading/多巴胺國度_讀書心得.pdf" },

    { title: "拖延心理學", cat: "心理學", author: "珍．博克、萊諾拉．袁",
      note: "拖延不是時間管理問題，是恐懼管理問題。",
      tags: ["拖延", "自我價值"],
      pdf: "reading/拖延心理學_讀書心得.pdf" },

    { title: "蛤蟆先生去看心理師", cat: "心理學", author: "羅伯．狄保德",
      note: "你的感受是你選的——這句話既殘忍又是自由的開端。",
      tags: ["心理諮商", "自我覺察"],
      pdf: "reading/蛤蟆先生去看心理師_讀書心得.pdf" },

    /* —— 歷史、社會與經濟學 —— */
    { title: "人類大歷史", cat: "歷史社會", author: "哈拉瑞",
      note: "智人征服世界靠的是一種天賦——讓幾百萬個陌生人相信同一個故事。",
      tags: ["歷史", "文明"],
      pdf: "reading/人類大歷史_讀書心得.pdf" },

    { title: "真確", cat: "歷史社會", author: "漢斯．羅斯林",
      note: "認識世界這件事，受過高教育的我們輸給隨機亂選的黑猩猩。",
      tags: ["數據思維", "世界觀"],
      pdf: "reading/真確_讀書心得.pdf" },

    { title: "經濟學的思考方式", cat: "歷史社會", author: "湯瑪斯．索維爾",
      note: "一個入口：稀少性；一把鑰匙：誘因；一個禁區：只看目標不看後果。",
      tags: ["經濟學", "誘因"],
      pdf: "reading/經濟學的思考方式_讀書心得.pdf" },

    { title: "二十一世紀資本論", cat: "歷史社會", author: "托瑪．皮凱提",
      note: "只要 r＞g，財富就會自動流向已經有財富的人。",
      tags: ["不平等", "資本"],
      pdf: "reading/二十一世紀資本論_讀書心得.pdf" },

    { title: "如果國家是100人島", cat: "歷史社會", author: "Mugitaro",
      note: "把國家縮成 100 人島，貨幣、稅金與國債的真面目就藏不住了。",
      tags: ["總體經濟", "MMT"],
      pdf: "reading/如果國家是100人島_讀書心得.pdf" },

    /* —— 個人成長與思維方式 —— */
    { title: "原子習慣", cat: "個人成長", author: "詹姆斯．克利爾",
      note: "你不會躍升到目標的高度，只會跌回系統的水準。",
      tags: ["習慣", "系統"],
      pdf: "reading/原子習慣_讀書心得.pdf" },

    { title: "反脆弱", cat: "個人成長", author: "納西姆．塔雷伯",
      note: "有一類東西「靠波動變強」——人生的目標是擠進第三類。",
      tags: ["風險", "凸性"],
      pdf: "reading/反脆弱_讀書心得.pdf" },

    { title: "刻意練習", cat: "個人成長", author: "安德斯．艾瑞克森",
      note: "天才是訓練的產物——但前提是「對的訓練」。",
      tags: ["學習", "技能"],
      pdf: "reading/刻意練習_讀書心得.pdf" },

    { title: "納瓦爾寶典", cat: "個人成長", author: "納瓦爾．拉維肯",
      note: "致富靠獨特知識加槓桿，幸福靠欲望管理——兩者都是技能。",
      tags: ["財富", "槓桿"],
      pdf: "reading/納瓦爾寶典_讀書心得.pdf" },

    { title: "底層邏輯", cat: "個人成長", author: "劉潤",
      note: "方法論會過期，底層邏輯不會——抓住不變的，加上環境變數。",
      tags: ["思維方式", "商業"],
      pdf: "reading/底層邏輯_讀書心得.pdf" },

    { title: "無限賽局", cat: "個人成長", author: "賽門．西奈克",
      note: "無限賽局裡的目標不是贏，是讓自己有資格一直玩下去。",
      tags: ["領導", "長期主義"],
      pdf: "reading/無限賽局_讀書心得.pdf" },

    { title: "大人學選擇", cat: "個人成長", author: "姚詩豪、張國洋",
      note: "把「該不該」的二選一，拆成一整桌可以比較的選項。",
      tags: ["決策", "職涯"],
      pdf: "reading/大人學選擇_讀書心得.pdf" },

    { title: "每日遇見杜拉克", cat: "個人成長", author: "彼得．杜拉克",
      note: "管理是讓平凡人做出不平凡的事——先從管理自己開始。",
      tags: ["管理", "自我管理"],
      pdf: "reading/每日遇見杜拉克_讀書心得.pdf" },

    { title: "人生的五種財富", cat: "個人成長", author: "薩希爾．布魯姆",
      note: "財富有五本存摺：時間、社會、心理、身體、金錢。",
      tags: ["人生規劃", "幸福"],
      pdf: "reading/人生的五種財富_讀書心得.pdf" },

    { title: "我可能錯了", cat: "個人成長", author: "比約恩．納提科．林德布勞",
      note: "衝突開始醞釀時，對自己默念三次——我可能錯了。",
      tags: ["正念", "人生"],
      pdf: "reading/我可能錯了_讀書心得.pdf" },

    { title: "男孩，鼴鼠，狐狸與馬", cat: "個人成長", author: "查理．麥克斯",
      note: "幾十句簡單的對白，把勇氣、脆弱與愛講得比大部頭更透。",
      tags: ["繪本", "療癒"],
      pdf: "reading/男孩鼴鼠狐狸與馬_讀書心得.pdf" },

    /* —— 自然科學與數學 —— */
    { title: "為什麼要睡覺？", cat: "自然科學", author: "馬修．沃克",
      note: "睡眠不是停機，是大腦與身體最忙碌的維修工程。",
      tags: ["睡眠", "健康"],
      pdf: "reading/為什麼要睡覺_讀書心得.pdf" },

    { title: "宇宙必修課", cat: "自然科學", author: "尼爾．德葛拉司．泰森",
      note: "讀完你會同時感覺自己渺小，又和整個宇宙血脈相連。",
      tags: ["天文", "物理"],
      pdf: "reading/宇宙必修課_讀書心得.pdf" },

    { title: "真希望國中數學這樣教", cat: "自然科學", author: "鄉和貴、西成活裕",
      note: "國中數學只有五分之一是真正關鍵——抓住它，數學恐懼症就有解藥。",
      tags: ["數學", "學習"],
      pdf: "reading/真希望國中數學這樣教_讀書心得.pdf" },

    { title: "真希望基礎物理這樣教", cat: "自然科學", author: "拉魯斯視覺學習系列",
      note: "物理是描述「東西為什麼會動、會發光、會發電」的圖像語言。",
      tags: ["物理", "圖解"],
      pdf: "reading/真希望基礎物理這樣教_讀書心得.pdf" },

    { title: "真希望基礎化學這樣教", cat: "自然科學", author: "拉魯斯視覺學習系列",
      note: "把抽象的化學變成看得見的圖——從原子到分子重新理解物質世界。",
      tags: ["化學", "圖解"],
      pdf: "reading/真希望基礎化學這樣教_讀書心得.pdf" },

    { title: "真希望基礎生物這樣教", cat: "自然科學", author: "拉魯斯視覺學習系列",
      note: "從一個細胞到整片生態系，生物學用同一套邏輯講同一個故事。",
      tags: ["生物", "圖解"],
      pdf: "reading/真希望基礎生物這樣教_讀書心得.pdf" },

  ],

  /* ============ 人生高光（時間軸）============
     最上面＝最新，往下變舊；新增就加在最前面。
     now: true 會把節點標成黃銅色（代表「現在」），通常只留一個。
     想附圖：把圖片放進與網站同層的  images/  資料夾，再加一行
        image: "images/檔名.jpg"
     （沒有 image 這行就不顯示圖片）  */
  life: [
    { year: "2026", title: "建立個人網站", desc: "第一次整理個人網站", now: true },
    { year: "2026", title: "下訂 Model Y", desc: "第一台自己買的車" },
    { year: "2024", title: "二女兒出生", desc: "第一次成為二寶爸" },
    { year: "2023", title: "離開CHT", desc: "開始全職投入資產配置與指數化投資" },
     { year: "2019", title: "101登高賽", desc: "第一次完成垂直馬拉松" },
    { year: "2019", title: "鐵人三項", desc: "第一次完成標準鐵人三項" },
     { year: "2019", title: "大女兒出生", desc: "第一次當爸爸" },
  ],

};
