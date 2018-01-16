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

## 9-18
preact (https://zhuanlan.zhihu.com/p/29054761)


## 9-20
algrithm

## 9-23
dom diff

## 9-26
[http://www.cnblogs.com/hyddd/archive/2013/02/06/2908110.html](http://www.cnblogs.com/hyddd/archive/2013/02/06/2908110.html)

[http://www.iteye.com/news/31307](http://www.iteye.com/news/31307)

anujs preact react
[https://segmentfault.com/a/1190000011235844](https://segmentfault.com/a/1190000011235844)

## 9-27
jwt [http://www.cnblogs.com/dinglinyong/p/6611151.html](http://www.cnblogs.com/dinglinyong/p/6611151.html)

mongoose 表关联 [http://www.jianshu.com/p/135c7f843666](http://www.jianshu.com/p/135c7f843666)

## 10-3
npm 配置项参数 [https://zhuanlan.zhihu.com/p/29855253](https://zhuanlan.zhihu.com/p/29855253)

## 10-5
[https://75team.com/post/luckey-draw-in-5-minutes](https://75team.com/post/luckey-draw-in-5-minutes)
genarator
es6值交换

## 10-7
shadow dom
[http://www.cnblogs.com/coco1s/p/5711795.html](http://www.cnblogs.com/coco1s/p/5711795.html)

createShadowRoot --deprecated--> attachShadow({mode:'open/closed'})

viewport
document.body.clientWidth / window.innerWidth 取的是布局视口的宽度

[http://www.css88.com/archives/5975](http://www.css88.com/archives/5975)
[http://www.cnblogs.com/2050/p/3877280.html](http://www.cnblogs.com/2050/p/3877280.html)


## 10-9
react 事件系统
react/src/renderers/dom/shared/eventPlugins/SimpleEventPlugin.js
react/src/renderers/shared/shared/event/EventPluginUtils.js
react/src/renderers/shared/utils/ReactErrorUtils.js
react/src/renderers/shared/shared/event/ReactEventEmitterMixin.js
react/src/renderers/dom/shared/ReactBrowserEventEmitter.js
react/src/renderers/dom/shared/ReactDOMEventListener.js



[https://segmentfault.com/a/1190000008782645](https://segmentfault.com/a/1190000008782645)
SyntheticEvent 等合成事件会被重用，为了性能考虑，因为，原生的事件是浏览器每监听一个事件，就会创建一个事件对象。


## 10-10
pollyfill service[https://philipwalton.com/articles/loading-polyfills-only-when-needed/](https://philipwalton.com/articles/loading-polyfills-only-when-needed/)

document.write
createElement script


style 阻塞渲染
        外部css 加载不会阻塞外部/内联js加载，但会阻塞js执行,但是如果加了async 属性，就不会阻塞js执行

        外部加载css 会阻塞下面的动态加载js---其实也就是阻塞下面的js 执行



[http://blog.csdn.net/code_for_free/article/details/53306975](http://blog.csdn.net/code_for_free/article/details/53306975)

[https://developers.google.com/web/fundamentals/performance/rendering/](https://developers.google.com/web/fundamentals/performance/rendering/)

[http://taobaofed.org/blog/2016/01/20/mobile-wpo-pageshow-async/](http://taobaofed.org/blog/2016/01/20/mobile-wpo-pageshow-async/)

* [http://www.cnblogs.com/zhuzhenwei918/p/6546083.html](http://www.cnblogs.com/zhuzhenwei918/p/6546083.html)




xss htmlencode 的局限性???


## 10-14
d3

## 10-15
canvas style中的宽/高度和 width/height 属性 的区别
[http://www.cnblogs.com/artwl/archive/2012/02/28/2372042.html](http://www.cnblogs.com/artwl/archive/2012/02/28/2372042.html)
[http://blog.csdn.net/chy555chy/article/details/53977575](http://blog.csdn.net/chy555chy/article/details/53977575)

## 10-19
[http://www.plqblog.com/views/article.php?id=29](http://www.plqblog.com/views/article.php?id=29)


## 10-20
flow -type checking

修改ua 和使用代理来绕过 网站反爬虫
[http://blog.csdn.net/c406495762/article/details/60137956](http://blog.csdn.net/c406495762/article/details/60137956)

## 10-25
图像优化 [https://zhuanlan.zhihu.com/p/30362177](https://zhuanlan.zhihu.com/p/30362177)


## 10-27
《node进阶之路》

## 11-1
js 桥接 & 引擎
[https://mp.weixin.qq.com/s/X-xw9DXDilHuVMe35pmfTw](https://mp.weixin.qq.com/s/X-xw9DXDilHuVMe35pmfTw)

## 11-2
莱文斯坦距离
过程：[http://www.bubuko.com/infodetail-2283227.html](http://www.bubuko.com/infodetail-2283227.html)

## 11-5
npm shorthand
[http://blog.csdn.net/wsy526659583/article/details/72829363](http://blog.csdn.net/wsy526659583/article/details/72829363)

ie 兼容html5
http://www.daqianduan.com/2831.html


## 11-7
《深入react 技术栈》





## 11-8
        ReactDOM.render(element, container[, callback]) // 返回的是组件实例
        生命周期render返回的是一个React element 如：createElement,cloneElement 
        super.render() 可以放在 jsx 里  {super.render()}

        react 中react element 与 component instance 不是一个概念




## 11-10
        etag  npm包 
                weak etag:弱匹配的，只能做模糊匹配，在差异达到一定阈值时才起作用
                强etag:

## 11-14 
        要拿到setState调用后的最新的state,可以在 componentDidUpdate / setState callback里拿 
[https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367)

        redux - store  避免全局暴露问题 & 复杂state分片管理  [*subscribe的listener会被任意一个dispatch触发而触发]
        当然，没有这个store,也可以通过dispatch 一个action ，通过reducer 去改变state



## 11-16
沪江node实践
[http://gitbook.cn/books/5a01865997e76d79a271fd3d/index.html](http://gitbook.cn/books/5a01865997e76d79a271fd3d/index.html)


## 11-23
[浏览器端的九种缓存机制介绍](http://www.techweb.com.cn/network/system/2016-01-05/2252395.shtml)



## 11-24
redux-observable

        epic - a function that takes a stream of actions dispatched and return a  stream of new actions to dispatch
```js
        function PingPong(action,store){
                if(action.type === 'PING'){
                        return {type:'PONG'}
                }
        }
        /*
                ||
                \/
              an epic
        */

        const pingPongEpic = (action$,store) =>{
                action$.ofType('PING').map(action => ({type:'PONG'}))
        }


        const incrementEpic = (action$,store) => {
                action$.ofType('INCREMENT_DEBOUNCED')
                .debounceTime(1000)
                .map( () => {type:'INCREMENT'})
        }


        const autoCompleteEpic = (action$,store)=>{
                action$.ofType('QUERY')
                        .debounceTime(500)
                        .switchMap(action => 
                                ajax('http://sdsdfsadjflaksjdf?q='+value)
                                .map(payload => ({
                                        type:'QUERY_FULLFILLED',
                                        payload
                                }))
                                .takeUntil(action$.ofType('CANCEL_QUERY'))
                                .catch(payload =>({
                                        type:'QUERY_REJECT',
                                        error:true,
                                        payload
                                }))
                        )

        }
        


```

一个epic相当于一个action transformer ，把你普通的action,转化为observable action,不可避免的，combineEpic  多个epic为一个epic 的时候，会把每个epic 都执行一遍。最后把结果dispatch出去，让reducer执行。

源代码：
epic$ 相当于一条总的流，而input$ 相当于挂载在这条流上的一条条流，分别处理各种action
  ---------epic$---------
        ==switch==
  ---------input$--------  


好处：
 1.根据输入实时查询 （debouncetime）
 2.不同于callback或promise，可以被取消 （切换路由的时候，用户操作突然想终断，需要取消api请求）
 3.统一数据源 （不管是ajax,websockets,webworker）




## 11-25
middleware 
        数据预处理操作 - redux-observable  redux-thunk
        数据后处理操作 - redux-undo


websocket / eventsource
websocket 可以发送二进制文件，es不行
[https://stackoverflow.com/questions/5195452/websockets-vs-server-sent-events-eventsource](https://stackoverflow.com/questions/5195452/websockets-vs-server-sent-events-eventsource)
[https://zhuanlan.zhihu.com/p/23467317](https://zhuanlan.zhihu.com/p/23467317)

koa -stream
[http://taobaofed.org/blog/2016/03/25/seller-bigpipe-coding/](http://taobaofed.org/blog/2016/03/25/seller-bigpipe-coding/)
[http://taobaofed.org/blog/2017/08/31/nodejs-stream/](http://taobaofed.org/blog/2017/08/31/nodejs-stream/)


## 11-27
复杂应用数据层设计
[https://zhuanlan.zhihu.com/p/24677176](https://zhuanlan.zhihu.com/p/24677176)



## 11-29
h5-native 通信
[http://blog.csdn.net/wuyajun1124/article/details/41622977](http://blog.csdn.net/wuyajun1124/article/details/41622977)


## 12-5
chrome  debugger
[http://wiki.jikexueyuan.com/project/chrome-devtools/debugging-javascript.html](http://wiki.jikexueyuan.com/project/chrome-devtools/debugging-javascript.html)
[https://segmentfault.com/a/1190000008396389](https://segmentfault.com/a/1190000008396389)


## 12-7
pageshow pagehide
[https://www.cnblogs.com/milo-wjh/p/6811868.html](https://www.cnblogs.com/milo-wjh/p/6811868.html)

## 12-8
http keep-alive  &  http2 多路复用
[http://www.blogjava.net/yongboy/archive/2015/03/19/423611.aspx](http://www.blogjava.net/yongboy/archive/2015/03/19/423611.aspx)
[http://www.nowamagic.net/academy/detail/23350305](http://www.nowamagic.net/academy/detail/23350305)

## 12-13
import、require、export、module.exports 混合使用详解
[https://juejin.im/post/5a2e5f0851882575d42f5609?utm_medium=fe&utm_source=weixinqun&from=timeline](https://juejin.im/post/5a2e5f0851882575d42f5609?utm_medium=fe&utm_source=weixinqun&from=timeline)

## 12-18
利用typescript 精确获取函数返回值
[https://zhuanlan.zhihu.com/p/32112508?utm_source=wechat_session&utm_medium=social&from=singlemessage](https://zhuanlan.zhihu.com/p/32112508?utm_source=wechat_session&utm_medium=social&from=singlemessage)


## 12-21
trim = (arg)=>arg.replace(/^\s+|\s+$/g,'')
trim = (arg)=>arg.replace(/^\s*(?<=\s|^)(?!\s)(.+)(?<!\s)(?=\s|$)\s*$/,'$1')

## 12-25
302,301
[http://blog.csdn.net/qmhball/article/details/7838989](http://blog.csdn.net/qmhball/article/details/7838989)

## 12-26
react 组件设计
[https://zhuanlan.zhihu.com/p/25976396](https://zhuanlan.zhihu.com/p/25976396)
[https://zhuanlan.zhihu.com/p/27727292](https://zhuanlan.zhihu.com/p/27727292)


# 2018

## 1-4 
import() ,require.ensure()
[https://zhuanlan.zhihu.com/p/29954035](https://zhuanlan.zhihu.com/p/29954035)


## 1-9
eleme pwa
[https://zhuanlan.zhihu.com/p/27853228](https://zhuanlan.zhihu.com/p/27853228)
sw-precache
[https://medium.com/@Huxpro/how-does-sw-precache-works-2d99c3d3c725](https://medium.com/@Huxpro/how-does-sw-precache-works-2d99c3d3c725)
[http://www.zhangxinxu.com/wordpress/2017/07/service-worker-cachestorage-offline-develop/](http://www.zhangxinxu.com/wordpress/2017/07/service-worker-cachestorage-offline-develop/)


## 1-11
[http://div.io/topic/836](http://div.io/topic/836)


## 1-16
travis
```keep moving,man!```