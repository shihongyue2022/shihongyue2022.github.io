import type { Locale } from '../i18n';
import type { Project } from '../types';

const copy = {
  zh: {
    researchName: '修士研究 — 条件去噪得分匹配（CDSM）',
    researchDescription: '研究时域与傅里叶域条件扩散模型，用于金融时间序列的滑动窗口协方差估计与预测。',
    researchHighlights: ['独立完成文献调研、模型设计与 Python 实现。', '使用多组金融数据与经典统计基线比较，建立可复现的数据处理、训练与评估流程。'],
    poeDescription: '以 AI 辅助开发的游戏配装工具，整合伤害分析、装备检索与换装比较。',
    poeImpact: '串联计算与交易流程，减少跨工具重复录入。',
    voiceDescription: '以 AI 辅助开发的变声工具，支持实时语音转换与模型管理。',
    voiceImpact: '完成桌面界面、应用打包、授权管理与交付流程。',
    eimsDescription: '设备点检管理应用，支持设备、人员与点检记录管理。',
    eimsImpact: '实现用户权限、数据管理、部署与自动化测试。',
  },
  en: {
    researchName: 'Master’s Research — Conditional Denoising Score Matching (CDSM)',
    researchDescription: 'Studied time- and Fourier-domain conditional diffusion models for rolling-window covariance estimation and forecasting in financial time series.',
    researchHighlights: ['Independently conducted the literature review, model design, and Python implementation.', 'Compared with classical statistical baselines across financial datasets using reproducible data preparation, training, and evaluation workflows.'],
    poeDescription: 'An AI-assisted game build planner integrating damage analysis, equipment search, and upgrade comparisons.',
    poeImpact: 'Connected calculation and trade workflows to reduce repeated input across tools.',
    voiceDescription: 'An AI-assisted voice conversion tool supporting real-time audio and model management.',
    voiceImpact: 'Implemented the desktop interface, application packaging, licensing, and delivery workflows.',
    eimsDescription: 'An equipment inspection application for managing equipment, personnel, and inspection records.',
    eimsImpact: 'Implemented user permissions, data management, deployment, and automated testing.',
  },
  ja: {
    researchName: '修士研究 — 条件付きデノイジングスコアマッチング（CDSM）',
    researchDescription: '金融時系列の移動窓共分散推定・予測に向け、時間領域とフーリエ領域の条件付き拡散モデルを研究。',
    researchHighlights: ['文献調査、モデル設計、Pythonによる実装を独力で担当。', '複数の金融データで従来の統計手法と比較し、データ処理・学習・評価の再現可能な実験フローを構築。'],
    poeDescription: 'AI支援で開発したゲームの装備構成ツール。ダメージ分析、装備検索、装備変更の比較を統合。',
    poeImpact: '計算と取引の操作フローをつなぎ、ツール間の重複入力を削減。',
    voiceDescription: 'AI支援で開発した音声変換ツール。リアルタイム音声変換とモデル管理に対応。',
    voiceImpact: 'デスクトップ画面、アプリの配布、ライセンス管理、納品フローを実装。',
    eimsDescription: '設備・担当者・点検記録を管理する設備点検アプリ。',
    eimsImpact: 'ユーザー権限、データ管理、デプロイ、自動テストを実装。',
  },
} satisfies Record<Locale, unknown>;

export function resumeProjects(projects: Project[], locale: Locale): Project[] {
  const text = copy[locale];
  const research = projects.find((project) => project.repoUrl === 'https://github.com/TEST-TEAM-CDSM/CDSM');
  const ordered = research ? [research, ...projects.filter((project) => project !== research)] : projects;
  return ordered.map((project) => {
    if (project === research) {
      return { ...project, name: text.researchName, description: text.researchDescription, highlights: text.researchHighlights, tags: ['Python'] };
    }
    if (project.repoUrl === 'https://github.com/shihongyue2022/PoE2-Build-Atlas') {
      return { ...project, description: text.poeDescription, impact: text.poeImpact, highlights: [], tags: ['TypeScript', 'Lua'] };
    }
    if (project.repoUrl === 'https://github.com/shihongyue2022/VoiceCraft-Community') {
      return { ...project, description: text.voiceDescription, impact: text.voiceImpact, highlights: [], tags: ['C#', 'Python', 'SQL'] };
    }
    if (project.repoUrl === 'https://github.com/shihongyue2022/Equipment-Inspection-Management-System-EIMS-') {
      return { ...project, description: text.eimsDescription, impact: text.eimsImpact, highlights: [], tags: ['Python', 'SQL'] };
    }
    return project;
  });
}
