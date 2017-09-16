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
                -- minchunk 限制哪些module/我要从那些chunk中提出公共module到一个单独的commonchunk中，chunk的最小数量。 
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

## 8-30
babel [https://excaliburhan.com/post/babel-preset-and-plugins.html?hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io]

## 8-31
hoist-non-react-statics - 拷贝原始component的static方法到Hoc component包裹下生成的component上
react-router 
        - withRouter 在你的wrappedComponent里可以获取到this.props.router对象;当然不用withRouter你也可以用context对象
        - history api ie10+ android 4.3+  / hashchange ie8+
        - history 包 （browserhistory,memoryhistory,hashhistory）
        - hoc
                 - An HOC is a pure function with zero side-effects
                 - Instead of mutation, HOCs should use composition, by wrapping the input component in a container component


## 9-1
react 
        - keys (The key only has to be unique among its siblings, not globally unique.)
        - the diff algorithm
                --Elements Of Different Types
                --DOM Elements Of The Same Type
                --Component Elements Of The Same Type
                --Recursing On Children

        - 整个过程 compare -> update -> render
                     |           |
                    SCU? -------YES
                     |
                     No --> render not called
        - 数组作为state 的时候，要返回新的对象才会更新，push 不返回新的对象


## 9-4
bfc  (http://www.cnblogs.com/lhb25/p/inside-block-formatting-ontext.html)

xss 
csrf 

## 9-5
ssr / prerend

## 9-9
a标签点击 拦截的应用

## 9-10
http micro services

## 9-13
mvvm(http://blog.csdn.net/yczz/article/details/51516498)

## 9-14
blob （http://ccloli.com/201509/bullshit-about-blob-and-object-url/）

## 9-16
