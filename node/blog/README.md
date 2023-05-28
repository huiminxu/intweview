# 后端开发考虑
1. 数据存储 mysql
2. 接口设计（接口描述，接口，参数，方法，备注）
    https://hellosean1025.github.io/yapi/
3. nodemon  监测文件变化，自动重启 node
4. cross-env 设置环境变量 

## mysql 使用  关系型数据库
mysql workbench   （mysql 客户端）
SQl Server Client(mssql)  --vscode 插件

navicat for postgreSQL（postgresal 客户端）


### mysql crud 增删改查

```mysql
use myblog; // 使用指定数据库
show tables; // 展示该数据的表

INSERT INTO user(username,`password`,realname) VALUES(
"zhangsan","123","张三" 
);
INSERT INTO user(username,`password`,realname) VALUES(
"lisi","123","李四"
);
INSERT INTO user(username,`password`,realname) VALUES(
"lisi","456","李四"
);
INSERT INTO user(username,`password`,realname) VALUES(
"zlisi","456","李四"
);
select * from user;

select id, realname from user;

select * from user where `password`=123 and username!='zhangsan'
select * from user where `password`='123' or username='lisi'

select * from user where username  like'%lisi%' 
select * from user where username  like'%lisi%' ORDER BY id desc;

-- SET SQL_SAFE_UPDATES=0;
update user set realname='李4' WHERE username='zlisi';
update user set realname='李四' WHERE username='zlisi';

delete from user where username='zlisi' 

update user set is_delete=1 where id=5
 
 
select * from user where is_delete<>'0'  
select * from user where is_delete=0  
-- 软删除
```

# redis
新老版本语法不同
## redis 缓存数据库
session 访问频繁，对性能要求极高，可以不考虑断电丢失数据问题（内存的硬伤），session 数据量不会太大   --- 适用于 redis
操作频率不是太高，断电不能丢失，必须保留，数据量大 ---  适合使用 mysql

### 安装 brew
brew install redis

redis-server  启动服务端 

redis-cli 启动客户端
set myname shuangyuelaosihi
get myname
keys *
del myname
set mycity beijing
get mycity
 



# nginx
## 安装 nginx
 brew install nginx
##  配置文件
 sudo vi /usr/local/etc/nginx/nginx.conf

server{
    listen 8080;
    location / {
        proxy_pass http://localhost:8001;
    }
    location /api/ {
        proxy_pass http://localhost:8000;
        proxy_set_header Host $host;
    }
}


测试配置文件是否正确
 nginx -t 
 启动
 nginx
 重启
 nginx -s reload
 停止
 nginx -s


 # 日志
 访问日志 access log （请求时间、请求方式、user agent、浏览器、请求地址）
 自定义日志 （自定义事件、错误记录）

nodejs 文件操作 nodejs stream

日志文件拆分，日志内容分析

## 日志拆分
日志拆分：按照时间日期拆分： eg: 2019-02-10.access.log
crontab 命令，即定时任务 ***** command
crontab 
    * 0 * * * sh /Users/xuhuimin/workspace/handover/node/blog/src/utils/copy.sh
    每天凌晨执行一下这个文件

    crontab -e 编辑
    crontab -l 查看当前定制任务

## 分析日志
nodejs readline  进行分析



# 安全

sql 注入： 窃取数据库内容
    mysql  escape 解决
xss 攻击： 窃取前端的 cookie 内容
    转符号 >

    npm i xss 解决
    xss(blog.title); 解决
密码加密：保障用户信息安全（重要！ ）
    nodejs crypto 库


# express
简化登录： express-session & connect-redis
日志： morgan