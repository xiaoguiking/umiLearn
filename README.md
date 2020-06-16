# umiLearn

umi 学习

## Dva 概念

```
数据的改变通常发生在通过用户交互行为或者浏览器触发，当交互行为改变数据的时候触发dispatch，发起一个action，如果是同步行为
直接通过reducer改变State，如果是异步行为副作用先触发Effects流向Reducers最终改变state
```

- State
  `type State = any`

```js
State表示Modal的状态数据，通常是js对象（或者是任何值）
const app = dva();
console.log(app._store); // 顶部的 state 数据
```

- Action
  `type AsyncAction = any`

  ```js
    Action 是一个普通 javascript 对象，它是改变 State 的唯一途径。无论是从 UI 事件、网络回调，还是 WebSocket 等数据源所获得的数据，最终都会通过 dispatch 函数调用一个 action，从而改变对应的数据。action 必须带有 type 属性指明具体的行为，其它字段可以自定义，如果要发起一个 action 需要使用 dispatch 函数；需要注意的是 dispatch 是在组件 connect Models以后，通过 props 传入的
    dispatch({
  type: 'add',
  });

  ```

- dispatch 函数
  `type dispatch = (a: Action) => Action`

  ```js
  dispatching function 是一个用于触发 action 的函数，action 是改变 State 的唯一途径，但是它只描述了一个行为，而 dipatch 可以看作是触发这个行为的方式，而 Reducer 则是描述如何改变数据的

  dispatch({
      type: 'user/add', // 如果在modal外调用，需要添加namespace
      payload: {},   // 需要传递的信息
  })
  ```

- Reducer
  `type Reducer<S, A> = (state: S, action: A) => S`

  ```js
  Reducer（也称为 reducing function）函数接受两个参数：之前已经累积运算的结果和当前要被累积的值，返回的是一个新的累积结果。该函数把一个集合归并成一个单值。
  [{x:1},{y:2},{z:3}].reduce(function(prev, next){
    return Object.assign(prev, next);
  })
  //return {x:1, y:2, z:3}
  ```

  - Effect
    ```
    副作用，引入redux-sagas做异步流程控制
    ```

官方数据流向图： https://dvajs.com/guide/introduce-class.html#%E6%95%B0%E6%8D%AE%E6%B5%81%E5%9B%BE

### dva 最简结构

```react
<!-- 创建应用 -->
const app = dva();

<!-- 注册Modal -->
app.modal({
    namespace: 'count',
    state: 0,
    reducers: {
        add(state){return state + 1}
    },
    Effects: {
            *addAfter1Second(action, { call, put }) {
      yield call(delay, 1000);
      yield put({ type: 'add' });
    },
    }
})

// 注册视图
app.router(() => <ConnectedApp />);

// 启动应用
app.start('#root');
```

### 异步相关

1. Promise.resolve();

2.yield

```js
function* fun(name){
  yield ...异步动作
}
```

3.async

```js
async function fun(name){
  await ...异步动作
}
```
