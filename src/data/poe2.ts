import type { Locale } from '../i18n';

export const poe2Repository = 'https://github.com/shihongyue2022/PoE2-Companion';
export const poe2Revision = '63f116b';
export const poe2Verification = { tests: 592, files: 103, date: '2026-10-25' };
export const poe2Copy = {
  zh: {
    back: '返回项目作品', skip: '跳到主要内容', theme: '切换主题', label: '项目案例 / 本地决策工具',
    title: '从技能出发，配好一整套。',
    intro: 'PoE2 Companion 连接角色读取、技能分析、装备联合检索与整套换装比较。制作时从一件成品参考出发，调查词池和底装，再按实际装备逐步核对并记录成本。',
    hostedNote: '在线与本地版使用相同源码，支持中／英／日界面。PoB2 原生重算、桌面快捷键、自动读档及最新汇率查询需本地运行。',
    tryDemo: '体验换装决策', source: '查看源码', local: '本地运行指南',
    role: '个人项目 · AI 辅助开发', base: '基于 POE2_HTC 扩展', stack: 'React / TypeScript / Node.js',
    workflow: ['读取角色快照', '定义输出技能组', '调查联动与词缀', '联合检索装备', '核对整套换装'],
    demoLabel: '交互示例 / 合成数据', demoTitle: '一件掉抗，两件一起补齐。',
    demoLead: '试着只换增伤戒指，再加入补抗鞋靴，或降低总预算。检查对象始终是最终整套，而不是要求每件装备单独满足四抗。',
    demoNote: '这是无需登录的简化交互示例，数值为合成数据；不查询实时挂牌、不连接账号，也不运行完整工坊或计算技能 DPS。',
    skillsTitle: '点击技能，查看它在组合中的职责', skillDetail: '当前技能职责',
    skills: [
      { name: '旋风', role: '主输出', text: '围绕实际主输出调查适用的攻击、伤害与投射物方向。投射物速度能否增伤取决于已启用辅助，不能无条件当作 DPS。' },
      { name: '爆炸长矛', role: '地面／补伤', text: '调查燃烧地面等联动所需条件与资源消耗。来自另一个技能的条件不会被默认为常驻，更不会直接乘进最终伤害。' },
      { name: '回旋斩', role: '旋风来源', text: '把联动来源与主输出分开记录，保留各自辅助和武器组。查阅技能不会悄悄切换主输出或套用另一技能的伤害快照。' }
    ],
    candidates: '选择候选组合', current: '保持当前装备', ring: '只换戒指 · 6 神圣', pair: '戒指＋鞋靴 · 10 神圣', budget: '总购买预算', currency: '神圣石',
    resists: ['火焰抗性', '冰冷抗性', '闪电抗性', '混沌抗性'], resistance: '整套抗性', uncapped: '未封顶总值', effective: '有效 / 上限', total: '总购买成本',
    baseline: '当前基准 · 无换装', shortfall: '整套抗性未达标', overBudget: '超过购买预算', passed: '四抗与预算通过 · 待 PoB 验证',
    resultNote: '火冰雷与混沌分别核对。有效抗性按 75% 封顶，溢出不计作增伤；不预支旧装出售收入。',
    reasons: ['保留当前装备作为基准，不产生购买成本。', '戒指提供进攻词缀，但移除了部分抗性；不能只凭单件词缀判断升级。', '鞋靴补回火冰雷与混沌缺口，总价 10 神圣；是否增加实际伤害仍需 PoB 重算。'],
    engineeringLabel: '设计与实现', engineeringTitle: '把复杂规则变成可核对的决策。',
    engineering: [
      ['可追溯的角色状态', '解析 PoB2 装备、技能和伤害快照，记录来源、更新时间与变更。两套武器互斥汇总，未知面板不以零值替代。'],
      ['原生标识与中文展示', '使用英文技能名、词缀与官方交易属性 ID 匹配资料，再映射为简体中文。将合法部位、前后缀、阶层及条件带入检索。'],
      ['核心属性驱动的市场检索', '多个数值下限同时满足，指定核心属性降序观察档位，再按价格找候选；逐件比价，不用宽泛低价样本的均价代替价值。'],
      ['有状态的整套方案', '候选自动携带公开报价，枚举一件／两件组合，检查四抗、总成本、重复挂牌及传奇保护；来源变动使旧候选失效。'],
      ['PoB2 原生逐词缀重算', '本地调用 PoB2 引擎，逐条移除词缀并重算指定技能，按伤害损失排序，也独立计算整件装备贡献。技能增益需指定兼容输出，单条损失不相加冒充整套收益。'],
      ['从成品目标到制作账本', '按真实底座词池编辑来源、阶层和目标，与实际底装左右对照；同页锁定和核对每步结果，耗材随所选路线更新，旧用量与买价持续保留。']
    ],
    craftingLabel: '成品目标制作', craftingTitle: '从成品参考，到真实底装上的下一步。',
    craftingLead: '制作规划独立于角色装备。先复制想做的成品，再按词池与规则调整目标；买到的底装经过核对，才成为通货手顺的计算起点。',
    craftingSteps: [
      ['复制成品参考', '读取简体、繁体或英文高级物品文本，保留原始数值、来源与破裂／亵渎标记。'],
      ['调查词池与底装', '按前后缀和属性分类调整目标及阶层，核对范围、物等和互斥条件，生成官网底座或联合词缀购买链接。'],
      ['导入实际底装', '已有词缀与目标左右对照，校正识别并检查槽位；真实破裂强制保留，目标冲突须先解决。'],
      ['同页逐步核对', '通货与预兆以编号图标卡展示，悬停查看游戏原文说明。锁定本步条件后贴回结果，未命中按真实状态重算。'],
      ['记录实际消耗', '耗材按所选路线显示为紧凑条目，手填累计用量、单价和底装买价；统一换算神圣石或混沌石，缺价保留待补齐。']
    ],
    craftingNote: '通货策略与逐步执行目前支持常规戒指／项链；其他可识别装备用于底座与词池研究。通用准备攻略按需展开，求解器期望与实际用量账本分别呈现。',
    comparisonImage: '实际底装与目标词缀左右对照', ledgerImage: '随所选路线更新的紧凑材料账本 · 布局测试样例',
    architecture: '运行架构', layers: [['浏览器工坊', '技能组、检索、换装与制作规划'], ['本机 Node.js 接口', 'PoB2 原生重算、文件、日志与查询'], ['数据与同步桥', '规则快照、官方属性、可读成交'], ['浏览器记录', '配装、候选、报价与制作成本']],
    screenshots: '实际界面', screenshotNote: '以下为隔离回归样例的实际工坊界面，数据不是个人角色或真实成交。', skillImage: '紧凑技能组与折叠规则', pairImage: '同一候选池中的单件和两件方案',
    quality: '验证与边界', qualityTitle: '能验证的结果，才写进结论。', tests: '工坊测试通过', files: '个测试文件', verification: `对应源码版本 ${poe2Revision} 的本地验证：工坊测试、类型检查、变更文件 ESLint、生产构建，以及桌面／移动浏览器通路检查通过。测试数据和固定路线布局样例用于验证界面与状态，不作为制作攻略或实时行情。`,
    evidence: '查看候选组合测试', browserEvidence: '查看浏览器验证脚本',
    craftEvidence: '查看制作流程测试', craftBrowserEvidence: '查看材料账本浏览器验证',
    limits: ['本地已支持 PoB2 逐词缀及整件装备重算；完整技能循环、条件覆盖率与候选换装优化尚未自动重算，市场方向分仍不等于 DPS。', '在线体验版支持手动导入与浏览器内计算，与本地版由同一源码构建；PoB2 原生引擎、自动读档、快捷键、后台查价、成交同步及最新汇率需本地版。两端记录不自动同步。', '制作结果受规则快照、词池和已建模机制限制；阶层目标不保证具体 roll，成本下界和假设权重不作为确定花费。官方历史只覆盖可读记录，缺少支出时不能称为净利润。'],
    attribution: '项目沿用上游制作引擎并保留署名与提交历史，代码采用 AGPL-3.0。技能图像归 Grinding Gear Games 所有；本项目不是官方产品。', upstream: '上游项目', assets: '图像与截图来源', footer: '查看实现与本地启动方式'
  },
  en: {
    back: 'Back to selected work', skip: 'Skip to main content', theme: 'Toggle theme', label: 'CASE STUDY / LOCAL DECISION TOOL',
    title: 'Start with skills. Plan the whole loadout.',
    intro: 'PoE2 Companion connects character imports, skill analysis, joint equipment searches, and whole-loadout comparisons. Crafting starts from a finished-item reference, researches its modifier pool and base, then checks actual item states and tracks costs.',
    hostedNote: 'Online and local editions share the same source revision and Chinese, English, and Japanese interfaces. Native PoB2 recalculation, desktop hotkeys, automatic file access, and fresh exchange-rate queries require local setup.',
    tryDemo: 'Try the decision flow', source: 'View source', local: 'Local setup guide', role: 'Personal project · AI-assisted development', base: 'Extended from POE2_HTC', stack: 'React / TypeScript / Node.js',
    workflow: ['Read a character snapshot', 'Define a skill routine', 'Research modifiers', 'Search joint conditions', 'Check the full loadout'],
    demoLabel: 'INTERACTIVE EXAMPLE / SYNTHETIC DATA', demoTitle: 'One item loses resistance. Two can restore it.',
    demoLead: 'Try the offensive ring alone, add the compensating boots, or lower the total budget. Constraints apply to the resulting loadout, rather than requiring every item to supply all four resistances.',
    demoNote: 'This simplified example uses synthetic values. It does not query live listings, connect an account, run the full workbench, or calculate skill DPS.',
    skillsTitle: 'Select a skill to inspect its role', skillDetail: 'Selected skill role',
    skills: [
      { name: 'Twister', role: 'Primary damage', text: 'Research attack, damage, and projectile modifiers for the actual damage skill. Projectile speed only becomes a damage direction when the enabled support provides that interaction.' },
      { name: 'Explosive Spear', role: 'Ground / secondary', text: 'Inspect ground effects, resource consumption, and their prerequisites. An interaction supplied by another skill is not assumed to be permanent or multiplied into final DPS.' },
      { name: 'Whirling Slash', role: 'Whirlwind source', text: 'Keep the interaction source separate from the damage focus, with its own supports and weapon set. Inspecting a skill does not silently change the main skill or reuse another damage snapshot.' }
    ],
    candidates: 'Choose a candidate combination', current: 'Keep current gear', ring: 'Ring only · 6 Divine', pair: 'Ring + boots · 10 Divine', budget: 'Total purchase budget', currency: 'Divine Orbs',
    resists: ['Fire', 'Cold', 'Lightning', 'Chaos'], resistance: 'Loadout resistance', uncapped: 'Uncapped total', effective: 'Effective / cap', total: 'Total purchase cost',
    baseline: 'Current baseline · no replacement', shortfall: 'Loadout resistances below target', overBudget: 'Purchase budget exceeded', passed: 'Resistance and budget pass · verify in PoB',
    resultNote: 'Chaos is checked separately from elemental resistance. Effective values cap at 75%; excess is not damage. Unsold equipment does not offset purchase cost.',
    reasons: ['Keep the original loadout as the baseline, with no purchase cost.', 'The ring adds offensive modifiers but removes resistance. Its own stats cannot establish a whole-build upgrade.', 'The boots restore elemental and chaos resistance for a combined cost of 10 Divine. Actual damage still requires PoB recalculation.'],
    engineeringLabel: 'DESIGN & IMPLEMENTATION', engineeringTitle: 'Turn complex rules into inspectable decisions.',
    engineering: [
      ['Traceable character state', 'Parse PoB2 equipment, skills, and saved damage values with source and update history. Keep weapon sets separate and preserve unknown panel values.'],
      ['Native IDs, localized display', 'Match English skills, modifiers, and official trade stat IDs, then render Simplified Chinese. Carry legal slots, affix groups, tiers, and conditions into searches.'],
      ['Core-attribute market research', 'Require multiple minimum values together, inspect a chosen attribute in descending order, then compare listing prices within those thresholds rather than a broad cheap-sample average.'],
      ['Stateful loadout plans', 'Carry public prices into one- and two-item combinations. Check resistances, cost, duplicate listings, and unique-item protection; invalidate the pool when character evidence changes.'],
      ['Native PoB2 modifier recalculation', 'Run the local PoB2 engine after removing each modifier, ranking the damage lost for a selected skill. Recalculate whole-item contributions separately, and assign compatible outputs to active buffs; individual losses are not additive.'],
      ['From reference item to crafting ledger', 'Edit modifier sources, tiers, and goals against the real base pool, compare them with an imported base, and check each step on the same page. Materials follow the selected route while recorded quantities and purchase cost persist.']
    ],
    craftingLabel: 'GOAL-DRIVEN CRAFTING', craftingTitle: 'From a finished reference to the next step on your real base.',
    craftingLead: 'Crafting research is independent of equipped gear. Paste a finished item, adjust the goal against the actual pool and rules, then verify a purchased base before calculating currency steps.',
    craftingSteps: [
      ['Paste a finished reference', 'Read advanced item text in English or Simplified/Traditional Chinese, preserving copied values, sources, and fractured or desecrated markers.'],
      ['Research the pool and base', 'Classify prefixes and suffixes, adjust attributes and tiers, check ranges, item levels, and conflicts, then build official base or joint-modifier purchase links.'],
      ['Import the actual base', 'Compare held modifiers and goals side by side, correct recognition, and check slots. Fractures remain protected; conflicting goals must be resolved first.'],
      ['Check steps on the same page', 'Numbered material cards show exact currencies and omens, with native item-text tooltips. Lock step conditions, paste the outcome, and recalculate from the observed state.'],
      ['Record actual consumption', 'Compact material rows follow the selected route. Enter cumulative quantities, prices, and base purchase cost, convert to Divine or Chaos Orbs, and keep missing quotes unresolved.']
    ],
    craftingNote: 'Currency strategies and step checking currently support regular rings and amulets; other recognized equipment supports base and pool research. General preparation guides are optional, and solver expectations remain separate from recorded consumption.',
    comparisonImage: 'Actual base and target modifiers compared side by side', ledgerImage: 'Compact materials for the selected route · layout test fixture',
    architecture: 'Runtime architecture', layers: [['Browser workbench', 'Skills, search, loadouts, crafting plans'], ['Local Node.js API', 'Native PoB2, files, logs, queries'], ['Data and sync bridge', 'Rule snapshots, official stats, readable trades'], ['Browser storage', 'Loadouts, candidates, quotes, crafting costs']],
    screenshots: 'Actual interface', screenshotNote: 'Captured from isolated workbench regression fixtures, not a personal character or real transactions.', skillImage: 'Compact skill routine with folded rules', pairImage: 'Single-item and paired plans from one candidate pool',
    quality: 'VERIFICATION & LIMITS', qualityTitle: 'Make claims that the evidence supports.', tests: 'workbench tests passed', files: 'test files', verification: `Local verification at revision ${poe2Revision}: workbench tests, type checking, ESLint on changed files, production build, and desktop/mobile browser checks passed. Fixtures and fixed-route layout examples verify UI and state handling; they are not crafting recipes or live market quotes.`,
    evidence: 'Inspect plan tests', browserEvidence: 'Inspect browser checks',
    craftEvidence: 'Inspect crafting tests', craftBrowserEvidence: 'Inspect material-ledger browser checks',
    limits: ['The local edition recalculates individual modifiers and whole items with PoB2. Full rotations, condition uptime, and candidate replacement optimization are not automatically recalculated; market direction scores remain distinct from DPS.', 'The online edition, built from the same source revision, supports manual imports and browser calculations. Native PoB2, automatic file access, hotkeys, listing fetches, trade synchronization, and fresh exchange rates require the local edition; records do not automatically sync.', 'Crafting depends on rule snapshots, pools, and modeled mechanics. Tier goals do not guarantee exact rolls; cost lower bounds and assumed weights are not fixed spending estimates. Official history only covers readable records, and missing expenses cannot establish net profit.'],
    attribution: 'The project retains the upstream crafting engine, attribution, and commit history under AGPL-3.0. Skill artwork belongs to Grinding Gear Games. This is an unofficial community tool.', upstream: 'Upstream project', assets: 'Artwork and screenshot sources', footer: 'Explore the implementation and local setup'
  },
  ja: {
    back: 'プロジェクト一覧へ', skip: 'メインコンテンツへ移動', theme: 'テーマを切り替える', label: 'CASE STUDY / ローカル意思決定ツール',
    title: 'スキルを起点に、装備全体を組む。',
    intro: 'PoE2 Companion はキャラクター読込、スキル分析、複数条件の装備検索、装備全体の比較をつなぎます。クラフトでは完成品を参考にモッドプールとベースを調査し、実物の状態を確認しながら手順と費用を管理します。',
    hostedNote: 'オンライン版とローカル版は同じソース版を使用し、中国語・英語・日本語に対応します。PoB2ネイティブ再計算、ホットキー、自動ファイル読込、最新レート取得にはローカル版が必要です。',
    tryDemo: '装備選択を試す', source: 'ソースコード', local: 'ローカル起動ガイド', role: '個人プロジェクト · AI支援開発', base: 'POE2_HTC を基に拡張', stack: 'React / TypeScript / Node.js',
    workflow: ['キャラクター読込', 'スキル構成を定義', '連携・モッドを調査', '複数条件で装備検索', '装備全体を確認'],
    demoLabel: '操作サンプル / 合成データ', demoTitle: '1部位で失う耐性を、2部位で補う。',
    demoLead: '攻撃用指輪のみの交換、補完する靴の追加、予算の変更を試せます。4耐性の制約は、各アイテムではなく交換後の装備全体に適用します。',
    demoNote: '合成データを使う簡易サンプルです。実際の出品検索、アカウント接続、工房全体の実行、スキルDPS計算は行いません。',
    skillsTitle: 'スキルを選んで役割を確認', skillDetail: '選択中のスキルの役割',
    skills: [
      { name: 'ツイスター', role: '主力火力', text: '実際の主力スキルに適用される攻撃・ダメージ・投射物モッドを調査します。投射物速度の火力への寄与は、使用中のサポートによる連携条件を確認します。' },
      { name: 'エクスプローシブスピア', role: '地面効果・補助火力', text: '地面効果、リソース消費、成立条件を調査します。他スキルが供給する効果を常時有効と仮定したり、最終DPSにそのまま乗算したりしません。' },
      { name: 'ワーリングスラッシュ', role: 'ツイスターの供給', text: '連携の供給元と火力の主軸を分け、サポートと武器セットを独立して保持します。詳細閲覧だけで主力を変更せず、別スキルの火力も流用しません。' }
    ],
    candidates: '候補の組合せ', current: '現在の装備を維持', ring: '指輪のみ · 神のオーブ6個', pair: '指輪＋靴 · 神のオーブ10個', budget: '購入総予算', currency: '神のオーブ',
    resists: ['火耐性', '冷気耐性', '雷耐性', '混沌耐性'], resistance: '装備全体の耐性', uncapped: '上限適用前', effective: '実効値 / 上限', total: '購入総額',
    baseline: '現在の基準 · 交換なし', shortfall: '装備全体の耐性が不足', overBudget: '購入予算を超過', passed: '耐性・予算を満たす · PoBで要検証',
    resultNote: '混沌は元素耐性と別に確認。実効値は75%が上限で、超過分は火力点に加算しません。未売却の旧装備は予算から差し引きません。',
    reasons: ['現在の装備を基準に保持し、購入費用は発生しません。', '指輪の攻撃モッドは増えますが、耐性が低下します。単品の性能だけではビルド全体の強化を判断できません。', '靴で元素・混沌耐性を補完し、総額は神のオーブ10個。実際の火力向上はPoBでの再計算が必要です。'],
    engineeringLabel: '設計と実装', engineeringTitle: '複雑なルールを、確認できる判断へ。',
    engineering: [
      ['追跡可能な状態管理', 'PoB2の装備・スキル・保存済み火力値を解析し、出典と更新履歴を保持。武器セットを分離し、不明なパネル値をゼロに置換しません。'],
      ['原語IDと表示の分離', '英語スキル名・モッド・公式取引属性IDで照合し、簡体字中国語へ表示を変換。出現部位、プレフィックス・サフィックス、Tier、成立条件を検索へ引き継ぎます。'],
      ['重要属性から市場を調べる', '複数の最低条件を同時に満たし、指定属性の降順で性能帯を確認。その範囲の出品を個別比較し、広い安値サンプルの平均を価値とみなしません。'],
      ['状態を持つ装備プラン', '公開価格を候補へ引き継ぎ、1・2部位の組合せを列挙。耐性、総額、重複出品、ユニーク保護を確認し、元の状態が変われば候補を無効化します。'],
      ['PoB2によるモッド別再計算', 'ローカルのPoB2エンジンで各モッドを除去して再計算し、選択スキルの火力低下で順位付け。装備単位の寄与は別に計算し、バフには対応する出力スキルを指定します。単独の低下率は加算しません。'],
      ['完成品の目標から費用台帳へ', '実際のベースのモッドプールで出現元・Tier・目標を調整し、購入したベースと左右比較。同じページで手順を固定・検証し、選択ルートの素材と累積使用数・購入費を保持します。']
    ],
    craftingLabel: '完成品を目標にしたクラフト', craftingTitle: '完成品の参考から、実物のベースの次の一手へ。',
    craftingLead: 'クラフト調査はキャラクターの装備と独立しています。完成品を貼り付け、モッドプールと制約に合わせて目標を調整。購入したベースを確認してからカレンシーの手順を計算します。',
    craftingSteps: [
      ['完成品を貼り付ける', '英語・簡体字・繁体字の詳細アイテム文を読み、数値、出現元、フラクチャー・冒涜の表示を保持。'],
      ['モッドプールとベースを調査', 'プレフィックス・サフィックスと属性で分類し、Tier、数値範囲、アイテムレベル、競合を確認。公式市場のベース・複数モッド検索リンクを作成。'],
      ['実物のベースを読み込む', '現在のモッドと目標を左右に比較し、読取結果と枠数を確認。フラクチャーは保護し、目標の競合を解消。'],
      ['同じページで手順を検証', 'カレンシーとお告げを番号付き画像で表示し、ホバーでゲーム原文を確認。条件を固定して結果を貼り付け、実際の状態から再計算。'],
      ['実際の使用量を記録', '選択ルートの素材をコンパクトな行で表示。累積数量、単価、ベース購入費を入力し、神のオーブ／カオスオーブに換算。未取得価格は未確定のまま保持。']
    ],
    craftingNote: 'カレンシーの戦略と手順検証は通常の指輪・アミュレットに対応。他の認識可能な装備はベースとモッドプールの調査に対応します。一般的な準備ガイドは任意で展開し、計算上の期待値と実際の使用量は別に表示します。',
    comparisonImage: '実物のベースと目標モッドの左右比較', ledgerImage: '選択ルートに連動する素材台帳・レイアウト検証用データ',
    architecture: '実行時アーキテクチャ', layers: [['ブラウザー工房', 'スキル・検索・装備比較・クラフト'], ['ローカルNode.js API', 'PoB2再計算・ファイル・ログ・照会'], ['データ・同期ブリッジ', 'ルール・公式属性・取得可能な取引'], ['ブラウザー内保存', '装備・候補・価格・クラフト費用']],
    screenshots: '実際の画面', screenshotNote: '隔離された回帰テスト用データの画面です。個人のキャラクターや実取引ではありません。', skillImage: 'コンパクトなスキル構成と折りたたみ設定', pairImage: '同一候補プールの1部位・2部位プラン',
    quality: '検証と制約', qualityTitle: '根拠を確認できる結果を示す。', tests: '工房テスト通過', files: 'テストファイル', verification: `リビジョン${poe2Revision}で工房テスト、型チェック、変更ファイルのESLint、本番ビルド、PC・モバイル操作を確認。固定ルートのレイアウト例とテストデータは画面・状態管理の検証用で、制作攻略や最新の市場価格ではありません。`,
    evidence: '組合せテストを見る', browserEvidence: 'ブラウザー検証を見る',
    craftEvidence: 'クラフトのテストを見る', craftBrowserEvidence: '素材台帳のブラウザー検証',
    limits: ['ローカル版はPoB2によるモッド別・装備単位の再計算に対応。完全なスキル循環、効果の稼働率、候補装備の最適化は自動再計算の対象外で、市場の方向スコアはDPSと区別します。', 'オンライン体験版は同じソース版から構築し、手動読込とブラウザー内計算に対応。PoB2エンジン、自動読込、ホットキー、出品取得、取引同期、最新レートにはローカル版が必要です。両版の記録は自動同期されません。', 'クラフトはルールのスナップショット、モッドプール、実装済みの仕組みに依存します。Tier目標は特定のrollを保証せず、費用の下界や仮定の重みを確定費用とは扱いません。公式履歴は取得可能分のみで、支出不明なら純利益は算出しません。'],
    attribution: '上流のクラフトエンジン、著作者表示、コミット履歴を保持し、コードはAGPL-3.0を継承。スキル画像はGrinding Gear Gamesに帰属する非公式コミュニティツールです。', upstream: '上流プロジェクト', assets: '画像・スクリーンショット出典', footer: '実装とローカル起動方法を見る'
  }
} satisfies Record<Locale, unknown>;
