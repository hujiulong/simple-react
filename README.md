# simple-react

一个极简的React框架，用于说明React实现原理，请不要用于生产环境

实现了JSX，组件，生命周期，diff，setState等核心功能

## 相关文章

* 分支 [chapter-4](https://github.com/hujiulong/simple-react/tree/chapter-4) - 对应文章：[从零开始实现一个React（四）：异步的setState](https://github.com/hujiulong/blog/issues/6)
* 分支 [chapter-3](https://github.com/hujiulong/simple-react/tree/chapter-3) - 对应文章：[从零开始实现一个React（三）：diff算法](https://github.com/hujiulong/blog/issues/6)
* 分支 [chapter-2](https://github.com/hujiulong/simple-react/tree/chapter-2) - 对应文章：[从零开始实现一个React（二）：组件和生命周期](https://github.com/hujiulong/blog/issues/5)
* 分支 [chapter-1](https://github.com/hujiulong/simple-react/tree/chapter-1) - 对应文章：[从零开始实现一个React（一）：JSX和虚拟DOM](https://github.com/hujiulong/blog/issues/4)

## 运行
```bash
git clone https://github.com/hujiulong/simple-react.git
cd simple-react
npm install
npm start
```

## 使用
为了简单起见，并没有分开库代码和应用代码，可以直接修改`src/index.js`来使用
```jsx
// src/index.js
import React from './react'
import ReactDOM from './react-dom'

class App extends React.Component {
    render() {
        return <h1>Hello,World!</h1>;
    }
}

ReactDOM.render(
    <App />,
    document.getElementById( 'root' )
);
```

## LISCENSE
MIT
