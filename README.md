# Movie App 2020

React JS 연습을 위한 프로젝트

---
## PropTypes 사용

어떤 속성의 type을 검토할 때 사용한다.
```
npm i props-type
```
npm으로 props-type을 install하여 사용할 수 있다.

[이곳](https://ko.reactjs.org/docs/typechecking-with-proptypes.html) 에서 다양한 방법들을 확인할 수 있다.

네이밍은 propTypes로해야만 react에서 인식한다.

---

## Render Method

React는 class component의 render method를 자동으로 실행한다.

React는 render function을 refresh하지 않는다.

따라서 JS코드를 통해 직접 State라는 Object를 수정하려고 하면 되지 않는다.

이럴 때 사용하는것이 setState이다. setState를 사용하게 되면 react에서는 자동으로 state를 refresh 해주고 render function을 호출하게 된다.

즉, 매 순간 setState를 호출할 때 마다 react는 새로운 state와 함께 render function을 호출하게 된다.

---

## Component Life Cycle
[참고](https://ko.reactjs.org/docs/react-component.html#the-component-lifecycle)

### Mounting 
컴포넌트가 생성될 때 순서
Constructor -> render -> componentDidMount

### Update
컴포넌트가 업데이트 될 때 순서 (주로 사용자가 어떤 행위를 취할때 발생)
render -> componentDidUpdate

### Unmount
컴포넌트가 사라질 때 순서 (주로 다른페이지로 이동하거나..)
componentWillUnmount()

---

## Axios

http 통신 라이브러리이다.
```
npm i axios
```

---

## githun에 페이지 올리기

```
npm i gh-pages
```
웹 사이트를 github의 gibhub page 도메인에 나타나게 해준다.

package.json에 homepage, deploy, predeploy에 대한 설정을 해주고 npm run deploy를 통해 배포한다.
자세한 내용은 코드참조
