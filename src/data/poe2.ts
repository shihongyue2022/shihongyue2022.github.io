import type { Locale } from '../i18n';

export const poe2Repository = 'https://github.com/shihongyue2022/PoE2-Companion';
export const poe2Revision = '94c3ef6';
export const poe2Copy = {
  zh: {
    back: '返回项目作品', skip: '跳到主要内容', theme: '切换主题', label: '项目案例 / 本地决策工具',
    title: '从技能出发，配好一整套。',
    intro: 'PoE2 Companion 把角色读取、技能联动研究、词缀检索和换装比较连成一条通路。核心问题不是哪件装备词缀更多，而是它能否服务当前输出技能，并让整套配装满足约束。',
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
      ['有状态的整套方案', '候选自动携带公开报价，枚举一件／两件组合，检查四抗、总成本、重复挂牌及传奇保护；来源变动使旧候选失效。']
    ],
    architecture: '运行架构', layers: [['浏览器工坊', '技能组、联合检索、整套比较'], ['本机 Node.js 接口', 'PoB2 存档、日志、查价请求'], ['数据与同步桥', '规则快照、官方属性、可读成交'], ['浏览器记录', '配装、候选、报价与去重账本']],
    screenshots: '实际界面', screenshotNote: '以下为隔离回归样例的实际工坊界面，数据不是个人角色或真实成交。', skillImage: '紧凑技能组与折叠规则', pairImage: '同一候选池中的单件和两件方案',
    quality: '验证与边界', qualityTitle: '能验证的结果，才写进结论。', tests: '工坊测试通过', files: '个测试文件', verification: '对应源码版本 94c3ef6 的本地验证：类型检查、变更文件 ESLint、生产构建，以及桌面／移动浏览器通路检查通过。此处数字是该版本快照，不代表所有未来提交。',
    evidence: '查看候选组合测试', browserEvidence: '查看浏览器验证脚本',
    limits: ['方向分不是 DPS；完整循环、条件覆盖率与逐词缀伤害敏感度仍需接入 PoB 重算。', 'GitHub Pages 展示此案例和示例；本机文件读取、快捷键、实时查价与成交同步需运行本地工坊。', '官方历史只同步实际可读记录；买入覆盖和历史长度尚需账号验证，缺少支出时不能称为净利润。'],
    attribution: '项目沿用上游制作引擎并保留署名与提交历史，代码采用 AGPL-3.0。技能图像归 Grinding Gear Games 所有；本项目不是官方产品。', upstream: '上游项目', assets: '图像与截图来源', footer: '查看实现与本地启动方式'
  },
  en: {
    back: 'Back to selected work', skip: 'Skip to main content', theme: 'Toggle theme', label: 'CASE STUDY / LOCAL DECISION TOOL',
    title: 'Start with skills. Plan the whole loadout.',
    intro: 'PoE2 Companion connects character imports, skill interactions, modifier research, and equipment comparisons. The question is whether an item serves the actual damage skill while the complete loadout still meets its constraints.',
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
      ['Stateful loadout plans', 'Carry public prices into one- and two-item combinations. Check resistances, cost, duplicate listings, and unique-item protection; invalidate the pool when character evidence changes.']
    ],
    architecture: 'Runtime architecture', layers: [['Browser workbench', 'Skill routines, search, comparisons'], ['Local Node.js API', 'PoB2 files, logs, trade requests'], ['Data and sync bridge', 'Rule snapshots, official stats, readable trades'], ['Browser storage', 'Loadouts, candidates, quotes, deduplicated ledger']],
    screenshots: 'Actual interface', screenshotNote: 'Captured from isolated workbench regression fixtures, not a personal character or real transactions.', skillImage: 'Compact skill routine with folded rules', pairImage: 'Single-item and paired plans from one candidate pool',
    quality: 'VERIFICATION & LIMITS', qualityTitle: 'Make claims that the evidence supports.', tests: 'workbench tests passed', files: 'test files', verification: 'Local verification at revision 94c3ef6: type checking, ESLint on changed files, production build, and desktop/mobile browser flows passed. These figures describe that revision, not every future commit.',
    evidence: 'Inspect plan tests', browserEvidence: 'Inspect browser checks',
    limits: ['Direction scores are not DPS. Full rotation, condition uptime, and per-modifier damage sensitivity still need PoB recalculation.', 'GitHub Pages hosts this case study and example. Local file access, hotkeys, live trade queries, and trade synchronization require the local workbench.', 'Official history covers only readable records. Purchase coverage and history depth need account validation; missing expenses cannot establish net profit.'],
    attribution: 'The project retains the upstream crafting engine, attribution, and commit history under AGPL-3.0. Skill artwork belongs to Grinding Gear Games. This is an unofficial community tool.', upstream: 'Upstream project', assets: 'Artwork and screenshot sources', footer: 'Explore the implementation and local setup'
  },
  ja: {
    back: 'プロジェクト一覧へ', skip: 'メインコンテンツへ移動', theme: 'テーマを切り替える', label: 'CASE STUDY / ローカル意思決定ツール',
    title: 'スキルを起点に、装備全体を組む。',
    intro: 'PoE2 Companion はキャラクター読込、スキル連携の調査、Mod検索、装備比較を一つの流れにまとめます。単品の数値ではなく、主力スキルへの適性と装備全体の制約を確認します。',
    tryDemo: '装備選択を試す', source: 'ソースコード', local: 'ローカル起動ガイド', role: '個人プロジェクト · AI支援開発', base: 'POE2_HTC を基に拡張', stack: 'React / TypeScript / Node.js',
    workflow: ['キャラクター読込', 'スキル構成を定義', '連携・Modを調査', '複数条件で装備検索', '装備全体を確認'],
    demoLabel: '操作サンプル / 合成データ', demoTitle: '1部位で失う耐性を、2部位で補う。',
    demoLead: '攻撃用指輪のみの交換、補完する靴の追加、予算の変更を試せます。4耐性の制約は、各アイテムではなく交換後の装備全体に適用します。',
    demoNote: '合成データを使う簡易サンプルです。実際の出品検索、アカウント接続、工坊全体の実行、スキルDPS計算は行いません。',
    skillsTitle: 'スキルを選んで役割を確認', skillDetail: '選択中のスキルの役割',
    skills: [
      { name: 'Twister', role: '主力火力', text: '実際の主力スキルに適用される攻撃・ダメージ・投射物Modを調査します。投射物速度の火力への寄与は、使用中のサポートによる連携条件を確認します。' },
      { name: 'Explosive Spear', role: '地面効果・補助火力', text: '地面効果、リソース消費、成立条件を調査します。他スキルが供給する効果を常時有効と仮定したり、最終DPSにそのまま乗算したりしません。' },
      { name: 'Whirling Slash', role: '旋風の供給', text: '連携の供給元と火力の主軸を分け、サポートと武器セットを独立して保持します。詳細閲覧だけで主力を変更せず、別スキルの火力も流用しません。' }
    ],
    candidates: '候補の組合せ', current: '現在の装備を維持', ring: '指輪のみ · 6 Divine', pair: '指輪＋靴 · 10 Divine', budget: '購入総予算', currency: 'Divine Orb',
    resists: ['火耐性', '冷気耐性', '雷耐性', '混沌耐性'], resistance: '装備全体の耐性', uncapped: '上限適用前', effective: '実効値 / 上限', total: '購入総額',
    baseline: '現在の基準 · 交換なし', shortfall: '装備全体の耐性が不足', overBudget: '購入予算を超過', passed: '耐性・予算を満たす · PoBで要検証',
    resultNote: '混沌は元素耐性と別に確認。実効値は75%が上限で、超過分は火力点に加算しません。未売却の旧装備は予算から差し引きません。',
    reasons: ['現在の装備を基準に保持し、購入費用は発生しません。', '指輪の攻撃Modは増えますが、耐性が低下します。単品の性能だけではビルド全体の強化を判断できません。', '靴で元素・混沌耐性を補完し、総額は10 Divine。実際の火力向上はPoBでの再計算が必要です。'],
    engineeringLabel: '設計と実装', engineeringTitle: '複雑なルールを、確認できる判断へ。',
    engineering: [
      ['追跡可能な状態管理', 'PoB2の装備・スキル・保存済み火力値を解析し、出典と更新履歴を保持。武器セットを分離し、不明なパネル値をゼロに置換しません。'],
      ['原語IDと表示の分離', '英語スキル名・Mod・公式取引属性IDで照合し、簡体字中国語へ表示を変換。出現部位、接頭辞・接尾辞、Tier、成立条件を検索へ引き継ぎます。'],
      ['重要属性から市場を調べる', '複数の最低条件を同時に満たし、指定属性の降順で性能帯を確認。その範囲の出品を個別比較し、広い安値サンプルの平均を価値とみなしません。'],
      ['状態を持つ装備プラン', '公開価格を候補へ引き継ぎ、1・2部位の組合せを列挙。耐性、総額、重複出品、ユニーク保護を確認し、元の状態が変われば候補を無効化します。']
    ],
    architecture: '実行時アーキテクチャ', layers: [['ブラウザー工坊', 'スキル構成・検索・全体比較'], ['ローカルNode.js API', 'PoB2ファイル・ログ・取引リクエスト'], ['データ・同期ブリッジ', 'ルールスナップショット・公式属性・取得可能な取引'], ['ブラウザー内保存', '装備・候補・価格・重複排除済み台帳']],
    screenshots: '実際の画面', screenshotNote: '隔離された回帰テスト用データの画面です。個人のキャラクターや実取引ではありません。', skillImage: 'コンパクトなスキル構成と折りたたみ設定', pairImage: '同一候補プールの1部位・2部位プラン',
    quality: '検証と制約', qualityTitle: '根拠を確認できる結果を示す。', tests: '工坊テスト通過', files: 'テストファイル', verification: 'リビジョン94c3ef6でのローカル検証：型チェック、変更ファイルのESLint、本番ビルド、PC・モバイルのブラウザー操作を確認済み。この数値は当該版の記録です。',
    evidence: '組合せテストを見る', browserEvidence: 'ブラウザー検証を見る',
    limits: ['方向スコアはDPSではありません。スキル循環、効果の稼働率、Mod別火力感度はPoBによる再計算が必要です。', 'GitHub Pagesには事例とサンプルを公開。ローカルファイル読取、ホットキー、実取引検索、履歴同期にはローカル工坊が必要です。', '公式履歴は取得できる記録のみ。購入履歴の網羅性・保存期間はアカウントでの検証待ちで、支出不明の収入を純利益とは表示しません。'],
    attribution: '上流のクラフトエンジン、著作者表示、コミット履歴を保持し、コードはAGPL-3.0を継承。スキル画像はGrinding Gear Gamesに帰属する非公式コミュニティツールです。', upstream: '上流プロジェクト', assets: '画像・スクリーンショット出典', footer: '実装とローカル起動方法を見る'
  }
} satisfies Record<Locale, unknown>;
