# MediOdyssey Website

一个为医疗旅游服务设计的现代化网站。

## 部署到 Vercel

### 方法一：直接上传（最简单）

1. 访问 https://vercel.com/new
2. 选择 "Import Git Repository" 或直接用 "Upload" 功能
3. 上传本文件夹
4. 点击 Deploy

### 方法二：使用 Git

```bash
# 初始化 git 仓库
git init
git add .
git commit -m "Initial commit"

# 推送到 GitHub/GitLab
# 然后在 Vercel 中导入该仓库
```

### 方法三：使用 Vercel CLI

```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录
vercel login

# 部署
vercel --prod
```

## 文件结构

```
├── index.html          # 主页面
├── package.json        # Vercel 配置文件
└── README.md          # 本文件
```

## 技术栈

- HTML5
- Tailwind CSS (CDN)
- Font Awesome Icons
- Google Fonts

## 自定义配置

如需修改，编辑 `index.html` 中的内容即可。
