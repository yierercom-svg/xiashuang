# 律师个人业务APP - 项目文档

## 📋 项目概述

这是一个为个人律师打造的私域流量变现系统，集"内容获客 + 咨询转化 + 案件管理 + 客户沉淀"于一体。

**核心目标**：帮助律师通过线上化、标准化的服务流程，实现咨询转化和稳定收入增长。

## 🎯 功能架构

### 用户端功能
- **首页** - 律师IP展示、热门文章、推荐咨询
- **内容模块** - 图文文章、短视频、分类、互动
- **咨询服务** - 三层套餐（¥9.9 / ¥1,180 / ¥1,980）
- **支付页面** - 微信/支付宝支付
- **用户中心** - 订单、咨询记录、私域导流

### 律师端功能
- **客户管理（CRM）** - 客户分类、咨询记录、跟进提醒
- **订单管理** - 咨询/商品订单、收入统计
- **内容管理** - 发布/编辑、数据分析
- **数据分析** - 转化率、客单价、留存率

## 💼 商业模式

1. 咨询转化（核心收入）
2. 法律文书销售
3. 知识付费课程
4. 高端私教服务
5. 私域裂变

## 🛠 技术架构

**前端**: React Native / Flutter (iOS + Android)
**后端**: Node.js + Express.js / Java Spring Boot
**数据库**: MySQL 8.0 + Redis
**第三方**: 微信支付、支付宝、阿里云存储

## 📁 项目结构

xiashuang/
├── README.md
├── docs/
│   ├── API_DOCUMENTATION.md
│   └── DATABASE_SCHEMA.md
├── backend/
│   ├── src/
│   │   ├── app.js
│   │   ├── server.js
│   │   ├── config/
│   │   │   └── database.js
│   │   ├── routes/
│   │   │   ├── index.js
│   │   │   └── homeRoutes.js
│   │   ├── controllers/
│   │   ├── services/
│ │ ├── 模型/
│ │ └── 中间件/
│   ├── package.json
│   ├── .env.example
│   └── README.md
└── frontend/
    ├── screens/
    ├── components/
    ├── services/
    ├── package.json
    └── README.md

## 🚀 快速开始

### 后端启动
cd backend
npm install
cp .env.example .env
npm run db:migrate
npm run dev

服务运行在 http://localhost:3000

### 前端启动
cd frontend
npm install
npm start

## 📖 核心业务流程

### 用户转化漏斗
首页展示 → 浏览文章 → 点击咨询 → 选择套餐 → 支付订单 → 进入咨询

### 咨询处理流程
订单创建 → 支付成功 → 通知律师 → 律师回复 → 生成记录 → 用户评价

## 🔑 关键设计原则

✅ 转化驱动设计 - 所有页面配置咨询入口
✅ 信任建立 - 展示资历、案例、背书
✅ 紧迫感策略 - "仅剩名额"等提示
✅ 私域运营 - 引导微信沉淀

## 📊 核心表设计

| 表名 | 说明 |
|------|------|
| users | 用户表 |
| articles | 文章表 |
| consultations | 咨询表 |
| orders | 订单表 |
| packages | 套餐表 |

详见: DATABASE_SCHEMA.md

## 🔌 API接口概览

| 方法 | 端点 | 说明 |
|-----|------|------|
| GET | /api/home | 获取首页数据 |
| GET | /api/articles/{id} | 获取文章详情 |
| GET | /api/consult/packages | 获取咨询套餐 |
| POST | /api/orders/create | 创建订单 |
| POST | /api/payment/pay | 发起支付 |
| GET | /api/user/profile | 获取用户信息 |
| GET | /api/admin/customers | 律师端-客户列表 |

详见：API_DOCUMENTATION.md

## 📋 开发清单

### 第一阶段（MVP）
- [ ] 首页展示与导航
- [ ] 文章列表与详情
- [ ] 咨询套餐与下单
- [ ] 支付集成
- [ ] 用户中心

### 第二阶段（优化）
- [ ] 完整CRM后台
- [ ] 数据分析面板
- [ ] 用户评价系统

### 第三阶段（增强）
- [ ] 直播咨询
- [ ] AI法律助手
- [ ] 社区讨论

## ⏱ 开发周期

| 阶段 | 时间 |
|-----|------|
| 需求分析 | 1周 |
| 后端开发 | 3周 |
| 前端开发 | 3周 |
| 测试优化 | 2周 |
| **总计** | **约9周** |

## 📈 核心KPI

- 点击率（CTR）
- 咨询转化率
- 客单价
- 用户留存率
- 月收入

## 📝 文档索引

- 📖 API接口文档: docs/API_DOCUMENTATION.md
- 🗄️ 数据库设计: docs/DATABASE_SCHEMA.md
- 🔧 后端开发指南: backend/README.md
- 📱 前端开发指南: frontend/README.md

---

**最后更新**: 2026-04-13
