import type { Locale } from '../i18n';
import type { Project } from '../types';

const copy = {
  zh: {
    researchName: '修士研究 — 条件去噪得分匹配（CDSM）',
    researchDescription: '研究时域与傅里叶域条件扩散模型，用于金融时间序列的滑动窗口协方差估计与预测。',
    researchHighlights: ['独立完成文献调研、模型设计与 Python / PyTorch 实现。', '在 FX29、Industry49 和 iShares14 数据集上与经典统计基线比较，建立可复现的数据处理、训练与评估流程。'],
    poeDescription: '以 AI 辅助开发的配装工具，整合 PoB2 伤害分析、装备检索与换装比较。',
    poeImpact: '使用 TypeScript、React 和 Node.js 串联计算与交易流程，减少跨工具重复录入。',
  },
  en: {
    researchName: 'Master’s Research — Conditional Denoising Score Matching (CDSM)',
    researchDescription: 'Studied time- and Fourier-domain conditional diffusion models for rolling-window covariance estimation and forecasting in financial time series.',
    researchHighlights: ['Independently conducted the literature review, model design, and Python / PyTorch implementation.', 'Compared with classical statistical baselines on FX29, Industry49, and iShares14 using reproducible data preparation, training, and evaluation workflows.'],
    poeDescription: 'An AI-assisted build planning tool integrating PoB2 damage analysis, equipment search, and upgrade comparisons.',
    poeImpact: 'Connected calculation and trade workflows with TypeScript, React, and Node.js to reduce repeated input across tools.',
  },
  ja: {
    researchName: '修士研究 — 条件付きデノイジングスコアマッチング（CDSM）',
    researchDescription: '金融時系列の移動窓共分散推定・予測に向け、時間領域とフーリエ領域の条件付き拡散モデルを研究。',
    researchHighlights: ['文献調査、モデル設計、Python / PyTorchによる実装を独力で担当。', 'FX29・Industry49・iShares14で従来の統計手法と比較し、データ処理・学習・評価の再現可能な実験フローを構築。'],
    poeDescription: 'AI支援で開発した装備構成ツール。PoB2のダメージ分析、装備検索、装備変更の比較を統合。',
    poeImpact: 'TypeScript・React・Node.jsで計算と取引の操作フローをつなぎ、ツール間の重複入力を削減。',
  },
} satisfies Record<Locale, unknown>;

export function resumeProjects(projects: Project[], locale: Locale): Project[] {
  const text = copy[locale];
  const research = projects.find((project) => project.repoUrl === 'https://github.com/TEST-TEAM-CDSM/CDSM');
  const ordered = research ? [research, ...projects.filter((project) => project !== research)] : projects;
  return ordered.map((project) => {
    if (project === research) {
      return { ...project, name: text.researchName, description: text.researchDescription, highlights: text.researchHighlights };
    }
    if (project.repoUrl === 'https://github.com/shihongyue2022/PoE2-Build-Atlas') {
      return { ...project, description: text.poeDescription, impact: text.poeImpact, highlights: [], tags: ['TypeScript', 'React', 'Node.js', 'PoB2 / Lua'] };
    }
    return project;
  });
}
