# MediOdyssey Website

基于 Vite + React + TypeScript + Tailwind CSS 构建的现代化医疗旅游网站。

## 技术栈

- **Vite** - 构建工具
- **React 18** - UI 框架
- **TypeScript** - 类型安全
- **Tailwind CSS** - 样式框架
- **Lucide React** - 图标库

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

## 部署到 Vercel

### 方法一：GitHub 集成（推荐）

1. 在 GitHub 上创建新仓库
2. 将本文件夹推送到 GitHub：
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/你的用户名/仓库名.git
   git push -u origin main
   ```
3. 访问 https://vercel.com/new
4. 选择你的 GitHub 仓库
5. 点击 Deploy

### 方法二：Vercel CLI

```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录
vercel login

# 部署
vercel --prod
```

## 项目结构

```
├── index.html          # 入口 HTML
├── package.json        # 依赖配置
├── tsconfig.json       # TypeScript 配置
├── tailwind.config.js  # Tailwind 配置
├── vite.config.ts      # Vite 配置
├── vercel.json         # Vercel 路由配置
└── src/
    ├── main.tsx        # 应用入口
    ├── App.tsx         # 主组件
    └── index.css       # 全局样式
```

## 自定义配置

- 修改颜色：编辑 `tailwind.config.js`
- 修改内容：编辑 `src/App.tsx`
- 添加组件：在 `src/components/` 创建新文件
