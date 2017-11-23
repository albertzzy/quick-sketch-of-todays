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
        模块的上下文是 module.exports === this 甚至可以直接用 this导出对象

        bootstrap_node.js node 最先执行的代码 - 主模块在这里加载执行

        ```js
                function test(){
                   this.xxx = 'xxx';
                   yyy = 'yyy';
                   console.log(this === global);//true
                }
                test();
                console.log(this === global); //false
        ```

        对某个对象动态添加或是删除某个属性就会创建隐藏类（存放了成员名称和偏移量，根据这些信息 利用数组索引的方式查找和存取成员）| 要尽量避免隐藏类的派生，造成优化回退

        垃圾回收算法
           v8 垃圾回收的时候会阻塞javascript运行
           v8 不会自动回收不被引用的对象，采用这种方式降低了垃圾回收的负担，因此设置堆内存大小限制（32位系统0.7G，64位1.4G）
           v8的堆分为 年轻代，老生代，大对象空间

        node 运行中对象不回收的情况
           1.全局变量，或由全局变量访问到的对象
           2.函数中的局部对象，包括这个局部对象可以访问到的对象
           3.一个非全局对象如果被一个闭包引用，则这个对象和闭包一同存在，即使离开了创建他的环境。
           这个对象称为自由变量，他保存这闭包的执行上下文环境。

        ```js
           var col = (function(){
              var name = 'foo'
              return function(){
                  console.log(name)
                  return name;
              }

              console.log(col)
          })()

           setTimeout(col,1000)
           col = null
        ```

        ```js
                var obj = {name:'obj'}
                var foo = function(){
                  var a = {}
                  a.obj = obj;
                  console.log(a)
                  return a;
                }

                setTimeout(foo,1000)
                foo = null;
        ```
        * 函数中的变量引用了函数外的变量，则函数呈现闭包特性，即使函数被设为null,依然存在


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
        使用 react-css-modules 来避免重复输入style.**

        组件跨级通信 --- context - 就像一个全局变量
                                - 父组件里定义 childContextTypes 和 getChildContext,它下面的子组件都可以拿到this.context里的值
                                - 子组件里定义contextTypes
        没有嵌套关系的组件通信 ---  自定义事件机制（eventemitter / 发布订阅单例就行）

        用decorator 提供mixin功能(core-decorator.js 库，getOwnPropertyDiscriptor,defineProperty)，和createClass 的mixin有所区别
        前者不会覆盖原来的方法，后者会。

        高阶组件 - 进一步抽象可以是一个高阶组件工厂方法，return 一个 hoc方法
                属性代理
                        # 控制props
                        # 通过refs 使用引用 - 可以在高阶组件中获取到 wrappedComponent 的实例
                        # 抽象state - 可以将state 设在高阶组件中，以props 形式传给wrappedComponent

                反向继承 (super 作为函数时，super()只能用在子类的构造函数之中，用在其他地方就会报错；super作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类)
                        # 渲染劫持
                        # 控制state


        函数式编程
                - 没有副作用，不会影响函数外面的值； 由于对象为参数是拷贝值引用，所以引入immutable

        pureRender
                - props 不要使用对象字面量，要先付给一个值，然后设置成那个值
                - 为避免事件重复多次绑定，把绑定的事件移到构造器里
                - immutable 结构共享特性，避免深复制带来的性能损耗 内部采用‘trie 树’ （hash树的变种）来存储      
                - key 如果渲染一个列表，key 设为index,只是相当于一个随机键，无论有没有相同的项，页面都会重新渲染。因此，key 应该设为和那一列表项唯一比配的sid,或是其他的，总之要唯一匹配。

        动画
                react-smooth 库
                reactCSSTransitionGroup
                react-motion
                

        测试
                官方utils包 - ReactTestUtils(浅渲染。。。)
                测试框架 - jest(自带mock function等) /Enzyme
                enzyme + sinon(mock function、spy库) 


        持续集成服务器 CI --- 来把整个流程自动化，自动化测试
                有新commit 或是pr 发起后就自动执行测试
                 


        ====生命周期====
        virtual-dom -- ReactElement ReactText ReactFragment
                            |
                             --- ReactComponentElement ReactDOMElement  

        MOUNTING
                getInitialState、componentWillMount、render、componentDidMount
                componentWillMount 中调用 setState 方法是不会触发 re-render的，而是会进行 state 合并
                由于递归渲染，父组件的componentWillMount 在其子组件的 componentWillMount 之前调用，而父组件的 componentDidMount在其子组件的 componentDidMount 之后调用。

        RECEIVE_PROPS
                componentWillReceiveProps、shouldComponentUpdate、componentWillUpdate、render 、componentDidUpdate

                componentDidUpdate 和 componentWillUpdate 里调用setState 导致死循环
                componentWillReceiveProps里拿不到setState 后的最新state,因为setState通常不会触发这个方法
                shouldComponentUpdate 里也拿不到最新的state
        UMOUNTING
                componentWillUnmount


        ====setState===
        当执行 setState 时，会将需要更新的 state 合并后放入状态队列，而不会立刻更新 this.state，队列机制可以高效地批量更新 state
        

        ====diff=======
        前提：跨层级移动节点比较少，忽略不计。
             同一层级的子节点可以通过唯一的id进行区分。
             相同类型组件结构相似，否则不一样。

        tree-diff
                分层比较
        component-diff
                同一类型的component 则按照tree-diff来比较
                非同一类型，则替换组件下所有子节点
        element-diff 
                对同一层级的同组子节点添加key来进行区分



        redux 性能优化
                redux-immutable 来替换redux的combineReducer
                
                代理reducer来实现一些功能，如：统计reducer 执行时间，让action只执行特定的reducer,合并处理action，数据后处理操作

                不同的分片state对应不同的reducer,如果要复用同一个reducer也可以通过代理这个reducer的方式来设置不同的actiontype [6.1.1] 

                reducer 增强  ，redux-undo 原理也是代理reducer

                当store发生改变时，所有的connect都会重新计算一遍，reselect 运用闭包原理，使纯函数的参数和结果缓存在内存中。这个闭包也是个代理。抽象selector避免重复计算。[6.4 281]

        
                
        






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