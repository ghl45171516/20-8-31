## 接口文档

Base 地址：http://localhost:3000

版本v1

## 用户创建

1. 简单描述

   - 增加用户接口

2. 请求路径

   - /users

3. 请求方法

   - POST

4. 请求参数

   | 名称       | 必选 | 类型             | 说明     |
   | :--------- | :--- | ---------------- | -------- |
   | username | 是   | String     | 账号 |
   | password | 是   | String     | 密码 |
   | nickname | 是   | String     | 用户昵称         |
   | createTime | 否   | String：Date.now | 创建日期 |
   | role       | 否   | [admin,user]    | 角色类型 |
   | status | 否 | Number:1 | 1:激活 0：未激活 |
   | avatar | 否 | String | 头像静态地址 |

   

5. 返回数据

```
{
	status:0,
	msg:'增加用户成功'
}
```

```
{
	status:-1,
	msg:'增加用户失败'
}
```

## 用户列表