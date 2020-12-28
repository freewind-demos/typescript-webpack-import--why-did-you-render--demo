TypeScript React "why-did-you-render" Demo
=================================

"why-did-you-render"可以帮我们检查react component有什么意外的re-render.

它的使用有很多坑，文档看起来写得很全，但对于新手重要的点没有强调，浪费了很多时间。

重点：
1. 默认配置下，不会log正常render（比如传入的property值跟前一次不一样）
2. 如果想要log正常的render，需要打开设置：`logOnDifferentValues: true`
3. `trackAllPureComponents: true`只对Pure Component起使用，而我们通常定义的function component(FC)并不是Pure component:
   https://dev.to/sumitkharche/pure-components-in-react-57on
   ```
   We can convert component to pure component as below:
   1. For class components react provides React.PureComponent base class.
   2. For Functional component react provides React.memo HOC (Higher Order Component).
   ```
4. 如果想让我们自己写的function组件被监听，需要做下面两件事之一：
  1. 用`React.memo`包装一下
  2. 给它设置`MyComponent.whyDidYouRender = true`
5. `import './wdyr'`要放在入口文件的第一行
6. 如果我们是通过`import './wdyr'`来使用，而不是直接在webpack里直接插入最前，可以不写
  `/// <reference types="@welldone-software/why-did-you-render" />`

```
npm install
npm run demo
```

It will open page on browser automatically.
