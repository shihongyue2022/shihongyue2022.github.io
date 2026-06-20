export type Locale = 'en' | 'ja' | 'zh';
export type PageKind = 'home' | 'resume';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  ja: '日本語',
  zh: '中文'
};

export const localePaths: Record<Locale, Record<PageKind, string>> = {
  en: { home: '/', resume: '/resume/' },
  ja: { home: '/ja/', resume: '/ja/resume/' },
  zh: { home: '/zh/', resume: '/zh/resume/' }
};

export const ui = {
  en: {
    skip: 'Skip to main content', backHome: 'Back to home', menu: 'Menu', navigation: 'Main navigation',
    nav: ['About', 'Experience', 'Projects', 'Certifications', 'Contact'], theme: 'Toggle theme', printResume: 'Print Resume',
    hello: "Hello, I'm", viewProjects: 'View Projects', contactMe: 'Contact Me', overview: 'Profile overview',
    facts: ['Location', 'Focus', 'Work style'], aboutIndex: '01 / About', aboutTitle: 'What I bring to the table', skills: 'Skills',
    experienceIndex: '02 / Experience', experienceTitle: 'Experience and growth', work: 'Work & Practice', education: 'Education',
    projectsIndex: '03 / Projects', projectsTitle: 'Selected work', projectsNote: 'A closer look at what I built, why it matters, and how I approached it.',
    certificationsIndex: '04 / Certifications', certificationsTitle: 'Credentials & certifications', certificationsNote: 'Select a credential to verify it with the issuing organization.',
    emptyCertTitle: 'Certification section ready', emptyCertHelp: 'Add badge images to public/assets/certificates and records to the locale data file.',
    contactIndex: '05 / Contact', contactTitle: 'Have an opportunity or an interesting project?', contactLine: "Let's talk.", sendEmail: 'Send an Email', viewGitHub: 'View GitHub',
    footer: 'Built with Astro · Hosted on GitHub Pages', source: 'Source', demo: 'Demo', credentialId: 'Credential ID',
    backWebsite: 'Back to website', printHint: 'For best results, choose A4 and disable browser headers and footers', printAction: 'Print / Save PDF',
    resume: { profile: 'Profile', experience: 'Experience', projects: 'Projects', skills: 'Skills', education: 'Education', certifications: 'Certifications', empty: 'To be added' }
  },
  ja: {
    skip: 'メインコンテンツへ移動', backHome: 'ホームへ戻る', menu: 'メニュー', navigation: 'メインナビゲーション',
    nav: ['概要', '経験', 'プロジェクト', '資格・認定', '連絡先'], theme: 'テーマを切り替える', printResume: '履歴書を印刷',
    hello: 'こんにちは、', viewProjects: 'プロジェクトを見る', contactMe: 'お問い合わせ', overview: 'プロフィール概要',
    facts: ['所在地', '専門分野', '働き方'], aboutIndex: '01 / 概要', aboutTitle: '私が提供できる価値', skills: 'スキル',
    experienceIndex: '02 / 経験', experienceTitle: '経験と成長', work: '実務・個人開発', education: '学歴',
    projectsIndex: '03 / プロジェクト', projectsTitle: '主なプロジェクト', projectsNote: '何を作ったかだけでなく、その目的とアプローチも紹介します。',
    certificationsIndex: '04 / 資格・認定', certificationsTitle: '資格と認定', certificationsNote: '資格を選択すると、発行機関のサイトで確認できます。',
    emptyCertTitle: '資格情報を追加できます', emptyCertHelp: '画像を public/assets/certificates に置き、言語別データファイルに情報を追加してください。',
    contactIndex: '05 / お問い合わせ', contactTitle: '新しい機会や面白いプロジェクトはありますか？', contactLine: 'ぜひお話ししましょう。', sendEmail: 'メールを送る', viewGitHub: 'GitHubを見る',
    footer: 'Astroで構築 · GitHub Pagesで公開', source: 'ソース', demo: 'デモ', credentialId: '認定ID',
    backWebsite: 'サイトへ戻る', printHint: 'A4を選択し、ブラウザのヘッダーとフッターを無効にしてください', printAction: '印刷 / PDF保存',
    resume: { profile: 'プロフィール', experience: '経験', projects: 'プロジェクト', skills: 'スキル', education: '学歴', certifications: '資格・認定', empty: '追加予定' }
  },
  zh: {
    skip: '跳到主要内容', backHome: '返回首页', menu: '菜单', navigation: '主导航',
    nav: ['关于', '经历', '项目', '证书', '联系'], theme: '切换主题', printResume: '打印简历',
    hello: '你好，我是', viewProjects: '查看项目', contactMe: '联系我', overview: '个人概览',
    facts: ['所在地', '专业方向', '工作方式'], aboutIndex: '01 / 关于', aboutTitle: '我能带来的价值', skills: '技能',
    experienceIndex: '02 / 经历', experienceTitle: '经验与成长路径', work: '工作与实践', education: '教育经历',
    projectsIndex: '03 / 项目', projectsTitle: '精选项目作品', projectsNote: '不仅展示做了什么，也说明为什么这样做。',
    certificationsIndex: '04 / 证书', certificationsTitle: '资格证书与认证', certificationsNote: '点击证书可前往发证机构验证。',
    emptyCertTitle: '证书区域已经准备好', emptyCertHelp: '将图片放入 public/assets/certificates，并在对应语言数据文件中添加记录。',
    contactIndex: '05 / 联系', contactTitle: '有合适的机会或有趣的项目？', contactLine: '我们聊聊。', sendEmail: '发送邮件', viewGitHub: '查看 GitHub',
    footer: '使用 Astro 构建 · 托管于 GitHub Pages', source: '源码', demo: '演示', credentialId: '证书编号',
    backWebsite: '返回网站', printHint: '建议在打印设置中选择 A4，并关闭页眉和页脚', printAction: '打印 / 保存 PDF',
    resume: { profile: '个人简介', experience: '工作与实践经历', projects: '项目经历', skills: '专业技能', education: '教育经历', certifications: '资格证书', empty: '待补充' }
  }
} satisfies Record<Locale, Record<string, unknown>>;
