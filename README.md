首先我想跟大家说一句话："国内做开源真的不容易，没有任何受益，纯为爱发电。如果大家觉得这个项目还不错，那么非常希望能够占用你 `10` 秒钟的宝贵时间点上一个免费的 `star` 支持一下开源"

 

# 🎉 ThriveX 现代化博客管理系统

🎉 `ThriveX` 是一个 `Next14` + `Spring Boot` 的产物，该项目专注于分享技术文章和知识，为技术爱好者和从业者提供一个分享、交流和学习的平台。用户可以在平台上发表自己的技术文章，或浏览其他用户分享的文章，并与他们进行讨论和互动。


🗂️ **项目预览：** [https://liuyuyang.net/](https://liuyuyang.net/)



🛠️ **技术架构：**

前端：React、**Nextjs**、TypeScript、Zustand、**TailwindCSS**、Antd、Scss、Echarts


后端：**Spring Boot**、Mybatis Plus、MySQL、Qiniu、Socket.io、Swagger



❤️ **项目初衷：**

一直对网站开发领域很感兴趣，从小就希望有一个属于自己的网站，因此踏上了 `Web` 全栈开发的旅途，立志有朝一日也能开发一款属于自己的网站。如今历时 `2` 年有余，一个人从 `0` 到 `1` 独立完成整个项目的全栈开发，也算是完成了从小的一个心愿



## 项目演示

### 前端

这里只演示部分前端界面，具体大家可以自行查看 **->** [https://liuyuyang.net](https://liuyuyang.net)
![首页](https://bu.dusays.com/2024/10/28/671f7a44631d7.png)
![足迹](https://bu.dusays.com/2024/09/17/66e97036dddcb.png)



### 控制端

![数据分析](https://bu.dusays.com/2024/09/17/66e97035726ae.png)
![文件系统](https://bu.dusays.com/2024/09/17/66e97031cd456.png)



## 项目运行

最近比较忙，过段时间写一篇详细的项目部署教程，这里先简单教大家在本地跑起来

**前端 or 控制端**

环境：Nodejs18 及以上

```
npm i
npm run dev
```

后台账号：`admin`   密码：`123456`



在控制端项目根目录下创建 `.env` 文件，添加如下配置

```bash
# 百度统计相关配置
VITE_BAIDU_TONGJI_KEY=
VITE_BAIDU_TONGJI_SECRET_KEY=
VITE_BAIDU_TONGJI_SITE_ID=
VITE_BAIDU_TONGJI_ACCESS_TOKEN=
VITE_BAIDU_TONGJI_REFRESH_TOKEN=

# 星火AI相关配置
VITE_AI_APIPassword=
VITE_AI_MODEL=
```

百度接口申请地址：[https://tongji.baidu.com/api/manual/Chapter2/openapi.html](https://tongji.baidu.com/api/manual/Chapter2/openapi.html)
星火大模型接口申请地址：[https://www.xfyun.cn/](https://www.xfyun.cn/)



**后端**

环境：Java8 + MySQL8

安装 `maven` 依赖，配置 `application-dev.yml` 相关的信息

```yml
lyy:
  email:
    host: smtp.qq.com
    port: 465
    username: 你的邮箱账号
    password: 你的邮箱授权码

  oss:
    accessKey: 七牛云的accessKey
    secretKey: 七牛云的secretKey
    bucket: thrive
```

导入后端根目录的 `ThriveX.sql` 数据库文件，最后运行项目即可



## 项目结构

```
├── public // 存放公共资源
├── src // 核心源码
│   ├── api // 所有API接口
│   ├── app
│   │   ├── error.tsx // 自定义错误页
│   │   ├── favicon.ico // 项目图标
│   │   ├── layout.tsx // 网站布局
│   │   ├── loading.tsx // 自定义加载页
│   │   ├── not-found.tsx // 自定义404页
│   │   ├── page.tsx // 首页
│   ├── assets // 存放项目所有资源
│   │   ├── font
│   │   ├── image
│   │   └── svg
│   ├── components // 公共组件
│   ├── stores // 数据全局共享
│   ├── styles // 全局样式
│   ├── types // 全局类型
│   └── utils // 通用方法
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```




## 开源地址

### 最新版（Nextjs + Spring Boot）

前端：[LiuYuYang01/ThriveX-Blog (github.com)](https://github.com/LiuYuYang01/ThriveX-Blog)

控制端：[LiuYuYang01/ThriveX-Admin (github.com)](https://github.com/LiuYuYang01/ThriveX-Admin)

后端：[LiuYuYang01/ThriveX-Server (github.com)](https://github.com/LiuYuYang01/ThriveX-Server)



### 旧版（Vue3 + Python Flask）

前端：[LiuYuYang01/Thrive-Blog (github.com)](https://github.com/LiuYuYang01/Thrive-Blog)

控制端：[LiuYuYang01/Thrive-Admin (github.com)](https://github.com/LiuYuYang01/Thrive-Admin)

后端：[LiuYuYang01/Thrive-Server (github.com)](https://github.com/LiuYuYang01/Thrive-Server)

![后台](https://bu.dusays.com/2024/09/17/66e96ca781d49.png)



## 开源协议

该项目仅针对个人或公司使用，请遵守开源协议：**AGPL-3.0 license** 
如果对该项目进行二次开发，需将项目进行开源，禁止任何商业行为

弘扬开源精神，从你我做起！



## 关于项目

这个项目是我一个人从设计 -> 产品 -> 前端 -> 控制端 -> 后端以及数据库从 `0` 到 `1` 创造的，一个人的精力有限在刚开始可能会有很多隐藏的 `BUG`，希望大家能够及时在 `GitHub` 向我反馈，这样我也好加以改正，不断改善，成为最佳！

当然我更希望大家能够提交 `PR` 成为 `ThriveX` 的贡献者，大家一起参与进来，构建一个强大的博客管理系统！

最后我想说该项目的风格借鉴了很多网站的灵感，下面我主要列举几个：

[https://blog.zwying.com/](https://blog.zwying.com/)
[https://www.blatr.cn/](https://www.blatr.cn/)
[https://poetize.cn/](https://poetize.cn/)



# 常见疑惑

下面总结一些大家常问的疑惑



## 为什么会想到开发这个项目？

**问：** 为什么会想到开发这个项目？

**答：** 在开发这个项目之前我也使用了很多流行的博客系统，比如：`WordPress`（使用了两年）、`Emlog`、`Zblog`（一年）、`Typecho`（两年）

这些系统都有一个共同点，它们都是基于 `PHP` 开发的，如果不会 `PHP` 就不好自定义网站主题和功能插件，只能去找别人写好的，如果别人没有写，那么你就没办法用，这样就会有很大的局限性。

关键是 `PHP` 在国内已经被淘汰了，所以没有必要再去刻意学习这门语言。因此我就萌生了自己开发一整个博客系统的想法，从 `22` 年正式落实并开发，目前已经持续完成三大版本，分别是：

1. Vue2 + Express（Nodejs）
2. Vue3 + Flask（Python）
3. Next14 + Spring Boot（Java）

样式借鉴了很多大佬的网站风格，但代码都是自己一行一行敲出来的，目前在 `Github` 已有近 `3000` 次代码提交记录

项目的所有技术栈都是目前最主流的，是一个非常年轻的现代化博客管理系统 🎉



## 为什么不采用纯前端做全栈？

**问：** 为什么技术栈不采用纯前端做全栈？比如 `Nextjs + Prisma`，目前 `Nextjs + Spring Boot` 实在太臃肿了

**答：** 因为我想把前端、控制端、后端全部分离，任何地方都可以相互独立出来。比如你想自己写前端，不管你使用哪些技术栈，只需要调用后端接口就可以自己开发。

如果使用了 `Nextjs` 做全栈，那么前后端就会捆绑起来，这样的话前端就必须使用 `React` 而且如果不懂 `Nextjs` 会加大开发以及学习成本



## 项目后期是否会考虑收费？

**问：** 后期是否会考虑收费

**答：** 有很多跟我一样从 `0` 到 `1` 写博客系统的同行，但他们大多数以盈利为目地而开发，而且更新频率并不高

我可以在此承诺，`ThriveX` 在现在乃至未来不会以任何方式收费，就连赞助二维码都不会有，格局直接拉满 😁

这个项目纯纯为爱发电，这一点是所有博客系统当中比不了的



## 项目会保持长期维护吗？

**问：** 大家可能会觉得我不以盈利为目的最终会丧失热情导致不再维护，其实我想说这个顾虑可以打消

**答：** 在这两年期间内我已经累计提交了近 `3000` 次代码，只要工作之余有时间我都会不断的更新维护



## 项目后续的开发计划

![PixPin_2024-11-11_18-03-02.png](https://bu.dusays.com/2024/11/11/6731d7056b4ee.png)