
const express = require('express');
const router = express.Router();

// 请求日志记录中间件
const requestLogger = (req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
    下一个();
};

router.use(requestLogger);

// 导入路由
const homeRoutes = require('./homeRoutes');

// 注册路由
router.use('/', homeRoutes);

module.exports = router;
