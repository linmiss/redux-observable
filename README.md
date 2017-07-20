# this is reudx middleware redux-observable RxJS + Redux + React = Amazing

1. npm i or yarn
2. npm start or yarn start

# Redux-Saga V.S. Redux-Observable

## Metal Model
+ Saga = Worker + Watcher
```
import API from '...'

function* Watcher(){
    yield takeEvery('do_thing', Worker)
}

function* Worker() { 
    const users = yield API.get('/api/users')
    yield put({type:'done', users})
}
```
+ Rxjs = Epic( Type + Operators )
```
import API from '...'

const Epic = action$ => 
    action$
        .ofType('do_thing')
        .flatMap(()=>API.get('/api/users'))
        .map(users=>({type:'done', users}))
```
## Side by side Comparison

+ Fetch User from /api/users/1

+ Saga
```
import axios from 'axios' 

function* watchSaga(){
  yield takeEvery('fetch_user', fetchUser) // waiting for action (fetch_user)
}

function* fetchUser(action){
    try {
        yield put({type:'fetch_user_ing'})
        const response = yield call(axios.get,'/api/users/1')
        yield put({type:'fetch_user_done',user:response.data})
  } catch (error) {
        yield put({type:'fetch_user_error',error})
  }
}
```

+ Rxjs
```
import axios from 'axios'

const fetchUserEpic = action$ => 
    action$
        .ofType('fetch_user')
        .map(()=>({type:'fetch_user_ing'}))
        .flatMap(()=>axios.get('/api/users/1'))
        .map(response=>response.data)
        .map(user=>({type:'fetch_user_done', user}))
```

# Code Style:
## Saga
1. Effects as data
2. (Imperative style)   
   Tell Program HOW to do things    
    Take time to reason about code

## Rxjs
1. Events as data
2. (Declarative Style)  
    Tell Program WHAT things to do  
    Easy to reason about code

# Function Reusability

## Saga
 **Low**

## Rxjs
 **High**

# Test

## Saga
+ Unit Test(easy)
+ Intergration Test(easy)
+ Test might fail if the order change

## Rxjs
+ Unit Test(Very easy)
+ Intergration Test(Require Mocking)
+ Test will not fail(same end result)
