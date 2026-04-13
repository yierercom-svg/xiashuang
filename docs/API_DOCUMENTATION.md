
# API Documentation - Lawyer Personal Business App

## Overview
This document outlines all API endpoints for the Lawyer Personal Business App. 
The API follows RESTful principles and returns JSON responses with status codes.

## Base URL
http://localhost:3000/api

## Response Format

### Success Response
{
  "code": 200,
  "message": "success",
  "data": { }
}

### Error Response
{
  "code": 400,
  "message": "Error description",
  "errors": [ ]
}

## Core Endpoints

### 1. GET /home - Get Homepage Data
Retrieve lawyer info, articles, videos, and consultation stats

GET /api/home

Response (200 OK):
{
  "code": 200,
  "data": {
    "lawyerInfo": {...},
    "articles": [...],
    "videos": [...],
    "stats": {...}
  }
}

### 2. GET /articles/{id} - Get Article Details
GET /api/articles/1

### 3. GET /consult/packages - Get Consultation Packages
GET /api/consult/packages

Packages:
- ¥9.9 - 图文咨询 (引流)
- ¥1,180 - 电话咨询 (主推🔥)
- ¥1,980 - 深度咨询 (高端)

### 4. POST /orders/create - Create Order
POST /api/orders/create
Authorization: Bearer {token}
{
  "userId": 123,
  "packageId": 2,
  "notes": "关于离婚财产分割"
}

###5. POST /payment/pay - 发起支付
POST /api/payment/pay
{
  "orderId": 5001,
  "paymentMethod": "wechat"
}

###6. GET /user/profile - 获取用户个人资料
GET /api/user/profile
Authorization: Bearer {token}

###7. GET /admin/customers - 获取客户列表
GET /api/admin/customers?page=1&limit=20&tag=high_intention
Authorization: Bearer {lawyerToken}

##认证
所有受保护的端点均在Authorization头中使用JWT令牌：
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

##错误码
200 - OK
201 - 已创建
400 - 错误请求
401 - 未授权
403 - 禁止访问
404 - 未找到
500 - 内部服务器错误

##速率限制
每 IP 每分钟 100 个请求
