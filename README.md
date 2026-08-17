# 辽宁事业编信息站

辽宁事业单位考试信息汇总静态网站，非官方爱好者整理站点。

## 技术栈

- 纯静态 HTML + CSS + JavaScript
- 无需构建工具，直接部署
- 响应式设计，适配手机和桌面

## 目录结构

```
liaoning-sydw/
├── index.html              # 首页
├── faq.html                # FAQ高频问题
├── about.html              # 关于本站
├── disclaimer.html         # 免责声明
├── css/
│   └── style.css           # 全站样式
├── js/
│   └── main.js             # 全站脚本（搜索、导航、回到顶部等）
├── notice/                 # 公告汇总板块
│   ├── index.html
│   ├── liaoning-union-exam.html
│   ├── shenyang.html
│   ├── dalian.html
│   ├── city-other.html
│   ├── medical.html
│   └── teacher.html
├── qa/                     # 报考答疑板块（10篇）
│   ├── index.html
│   ├── graduate-definition.html
│   ├── major-catalog.html
│   ├── hukou-limit.html
│   ├── service-period.html
│   ├── social-security-work-age.html
│   ├── file-archive-place.html
│   ├── qualification-review-material.html
│   ├── qualification-review-risk.html
│   ├── part-time-work-experience.html
│   └── registered-permanent-residence.html
├── written/                # 笔试备考板块
│   ├── index.html
│   ├── syllabus-abcde.html
│   ├── syllabus-law-enforce.html
│   ├── subject-difference.html
│   ├── exam-scope.html
│   └── book-recommend.html
├── interview/              # 面试板块
│   ├── index.html
│   ├── real-question.html
│   ├── process.html
│   └── score-reference.html
└── netlify.toml            # Netlify部署配置
```

## 部署到 Netlify

1. 将整个 `liaoning-sydw` 目录推送到 GitHub
2. 在 Netlify 中 "Add new site" → "Import an existing project"
3. 选择该仓库，Build command 留空，Publish directory 设为根目录 `.`
4. 部署完成

## 本地预览

直接用浏览器打开 `index.html` 即可，或使用任意静态服务器：

```bash
# Python
python -m http.server 8080

# Node.js
npx serve .
```

## 重要声明

- 本站为非官方爱好者整理站点
- 所有政策信息以辽宁人事考试网官方公告为准
- 不收集用户个人信息
- 不售卖内部资料、押题卷
- 面试真题为考生回忆版，非官方原题
