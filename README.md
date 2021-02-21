# clz-forum  
[原网站](https://www.arduino.cn/)使用的是Discuz，太过陈旧，这几年一直在寻找一个能够替换的方案，但市面上的社区软件总是不尽人意，所以最终还是只有自己动手写个，名字随便了，就叫clz-forum吧......  

[演示站点](https://c.arduino.cn/)  

**无缝迁移**  

为了不影响原有网站的运行，本项目计划，且长期保持和Discuz程序的共存。  
当前版本直接使用Discuz的数据库结构。  

**参考借鉴**  
本项目设计过程中参考了如下项目：  
[简书](https://www.jianshu.com/)  本项目大量参考了简书的设计逻辑  
[discuzX](https://www.discuz.net/library/library/database/x3/x3_index.htm)  本项目计划前期直接使用Discuz数据库
v2ex  
flarum  
discuzQ   
掘金  

## 项目构成

* [clz-forum-frontend](https://github.com/coloz/clz-forum-frontend)  

这是社区的前端，使用Angular开发。  

* [clz-forum-server](https://github.com/coloz/clz-forum-server)  

这是社区的服务器端，使用NestJs、Prisma开发。

# clz-forum-frontend

## 安装部署  

```
```

## URL设计  

所有列表  /  
分类列表  cat/:id  
标签列表  tag/:id  
帖子  t/:id  
文章  a/:id  
用户  u/:id  
