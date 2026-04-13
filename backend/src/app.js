const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// 中间件
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 跨域配置
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    下一个();
});

// 错误处理中间件
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        代码: 500,
        message: '内部服务器错误',
        错误: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
});

模块.导出 = 应用;
