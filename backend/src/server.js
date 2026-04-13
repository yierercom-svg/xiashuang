
require('dotenv').配置();
const app = require('./app');
const routes = require('./routes');

// 注册所有路由
app.use('/api', routes);

// 健康检查端点
app.get('/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// 404 处理程序
app.use((req, res) => {
    res.status(404).json({
        代码: 404,
        消息: '未找到',
        路径: req.路径
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(` 服务器正在 http://localhost:${PORT}`);
    控制台.日志(`API 在 http://localhost:${PORT}/api 上可用`);
    console.log(` 本地服务器健康检查地址：http://localhost:${PORT}/health`);
});
