# 个人简历与作品集

使用 Astro 构建的个人简历网站，支持项目展示、资格证书徽章、证书验证链接、深色模式、A4 PDF 打印和 GitHub Pages 自动发布。

## 开发

需要 Node.js 24 LTS：

```powershell
npm install
npm run dev
```

打开 <http://localhost:4321>。

生产构建：

```powershell
npm run build
npm run preview
```

## 修改简历

所有内容都在 [`src/data/resume.json`](src/data/resume.json)：

- `profile`：姓名、职位、简介和联系方式
- `skills`：技能分类
- `experience`：工作或实践经历
- `education`：教育经历
- `projects`：项目作品
- `certificates`：资格证书和徽章

证书图片放入 `public/assets/certificates/`，然后在 JSON 中添加：

```json
{
  "name": "证书名称",
  "issuer": "发证机构",
  "issuedAt": "2026-06",
  "credentialId": "可选证书编号",
  "image": "/assets/certificates/example.png",
  "verifyUrl": "https://证书官方验证地址"
}
```

## 发布

推送 `develop` 分支后，在仓库 **Settings → Pages** 中将 Source 设为 **GitHub Actions**。工作流会安装依赖、构建 Astro 并发布 `dist/`。

## 项目结构

```text
├─ src/
│  ├─ components/            # 项目、证书等复用组件
│  ├─ data/resume.json       # 简历内容
│  ├─ layouts/               # 页面基础布局
│  ├─ pages/                 # 首页和打印简历
│  ├─ styles/global.css      # 全局视觉样式
│  └─ types.ts               # 数据类型
├─ public/assets/            # 证书、简历和站点图标
├─ astro.config.mjs
└─ .github/workflows/pages.yml
```
