
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    用户: 进程.环境.DB_USER || 'root',
    密码: 进程.环境.DB_PASSWORD || '',
    数据库: 进程.环境.DB_NAME || '律师应用',
    等待连接: true,
    connectionLimit: 10,
    queueLimit: 0
});

模块.导出 = 池;
