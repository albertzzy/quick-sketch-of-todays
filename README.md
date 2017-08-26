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
                        

