//加载express
const express = require('express')
//调用express.Router()创建一个路由实例
const router = express.Router()
//加载所有的处理函数模块
const index = require('./controllers/index')
const topic = require('./controllers/topic')
const user = require('./controllers/user')
//配置路由规则
//首页路由
router.get('/',index.showIndex)
//用户路由
router.get('/signin',user.showSignin)
      .post('/signin',user.signin)
      .get('/signup',user.showSignup)
      .post('/signup',user.signup)
      .post('/signout',user.signout)
//话题路由
router.get('/topic/create',topic.showCreate)
router.post('/topic/create',topic.create)
router.get('/topic/:topicID',topic.show)
router.get('/topic/:topicID/edit',topic.showEdit)
router.post('/topic/:topicID/edit',topic.edit)
router.post('/topic/:topicID/delete',topic.delete)
//导出路由对象
module.exports = router