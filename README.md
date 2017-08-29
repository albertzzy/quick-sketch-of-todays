## 8-23
react   - context (父子组件通信)
        - two-way binding
        - stateless component (不能设ref)
        - lift state up (比two-way binding 多了一些代码，但遵循top-down data flow原则)

react-router - ssr

yarn
log4js
algrithmn 
css - 双飞翼布局


## 8-25
react  - life hook 各情况下触发顺序
webpack - code split(优化使用缓存，减小文件大小)
         -- HashedModuleIdsPlugin
axios - 相比于fetch更方便的http库

## 8-26
commonChunkPlugin 
                -- webpack(parent -> son)   chunk -> module
                -- minchunk 限制哪些module/包含这个module的最小chunk数量   可以提取到 common chunk里面
                -- common chunk 可以是async 和 非 async的
                        

## 8-27
facade 模式 - node 里面的api(创建服务) / jquery里的ajax (将复杂的逻辑隐藏在api后面)

任务队列 - 异步任务会放在里面，等到主线程同步任务执行完才开始
        - js event loop (setTimeout 是在任务队列尾部添加事件)
        - node event loop
                -- process.nextTick 发生在执行栈尾部，在任何异步任务之前，因此嵌套递归process.nextTick 的话任务队列永远不会执行
                -- setImmediate 是将事件放在下次loop 的尾部 类似setTimeout(fn,0)
Promise 实现
        - Symbol
        - MutationObserver (监视dom变动)[http://www.cnblogs.com/jscode/p/3600060.html]
        - [https://segmentfault.com/a/1190000009478377#articleHeader7]
compiler 实现
        - 递归


## 8-28
react top level api
        - React.Children.toArray/map/forEach/count/only
        - spread(将数组转为用逗号分隔的参数序列) / rest (把多余变量放在一个数组中)
        - window online offline 事件