# 个人简历与作品集

一个零依赖、可直接部署到 GitHub Pages 的个人简历网站。内容与页面分离，支持项目展示、资格证书徽章、证书验证链接、深色模式和打印为 PDF。

## 本地预览

项目无需安装 Node.js。由于浏览器会限制直接读取本地 JSON，请在项目目录启动任意静态服务器：

```powershell
python -m http.server 8080
```

然后打开 <http://localhost:8080>。

## 修改简历

所有简历数据都在 [`data/resume.json`](data/resume.json)：

- `profile`：姓名、职位、简介和联系方式
- `skills`：技能分类
- `experience`：工作或实践经历
- `education`：教育经历
- `projects`：项目作品
- `certificates`：资格证书和徽章

证书图片放在 `assets/certificates/`，PDF 简历放在 `assets/resume/`，然后在 JSON 中填写相对地址。

证书配置示例：

```json
{
  "name": "证书名称",
  "issuer": "发证机构",
  "issuedAt": "2026-06",
  "credentialId": "可选证书编号",
  "image": "assets/certificates/example.png",
  "verifyUrl": "https://证书官方验证地址"
}
```

## 发布

仓库已经配置 GitHub Pages 工作流。推送 `develop` 分支后，在仓库 **Settings → Pages** 中将 Source 设为 **GitHub Actions**，之后每次更新 `develop` 都会自动发布。

## 文件结构

```text
├─ index.html                 # 网站首页
├─ resume.html                # A4 打印简历
├─ data/resume.json           # 简历内容
├─ assets/
│  ├─ css/styles.css          # 页面样式
│  ├─ js/app.js               # 首页渲染逻辑
│  ├─ js/resume.js            # 打印页渲染逻辑
│  ├─ certificates/           # 证书图片
│  └─ resume/                 # PDF 简历
└─ .github/workflows/pages.yml
```
