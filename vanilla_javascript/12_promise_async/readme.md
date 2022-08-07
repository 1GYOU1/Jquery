## __동기처리와 비동기처리__

<br>

__동기__ 방식 - 1인 화장실 사용과 비슷
            
=> 하나의 작업 끝날 때 까지 다른 작업들은 대기(순차적 실행)
```js
console.log('1');
console.log('2');
console.log('3');
console.log('4');
console.log('5');
```

__비동기__ 방식 - 롯데리아 햄버거 주문과 비슷

=> 작업발생시 대기없이 예약을 거는 방식,
예약이 여러개일 경우 어떤 것이 먼저 처리될지는 알 수 없다.(비순차적 실행)

```js
setTimeout(function(){
    console.log('set1')
} ,3000)
```

<br>

----

<br>

## __콜백지옥__

<br>

1초단위로 메세지 출력

```js
//콜백지옥
    //첫번째 예약
    setTimeout(function(){
        const now = new Date();
        document.write(now.toISOString()+'<br>');
        //두번째 예약
        setTimeout(function(){
            const now = new Date();
            document.write(now.toISOString()+'<br>');
            //세번째 예약
            setTimeout(function(){
            const now = new Date();
            document.write(now.toISOString()+'<br>');
            },1000)

        },1000)
        
    },1000)
```
<br>

## __콜백지옥탈출 - promise()__

<br>

__promise()__

- 가독성이 좋지 않다.

Promise 작성법 

1. resolve()를 포함한 Promise객체를 생성하여 리턴하고,
2. then()에서 resolve()로 보낸 결과를 받는다.
3. Promise문법에서는 두 개의 콜백이 필요.
    1) Promise객체 생성시 넘기는 콜백 (resolve, reject)=>{}
    2) then객체 생성 시 넘기는 콜백 (result)=>{}

4. resolve에는 예약성공시 호출하는 함수의 주소값이 할당
5. reject에는 에러가 발생했을 경우 호출하는 함수의 주소값이 할당

```js
function workFn(sec){

    //비동기 작업을 순차적으로 실행시키기 위해 등장 -> 콜백지옥 탈출
    const myPromise = new Promise(function(resolve,reject){

        //우리가 걸 예약코드를 여기에 작성
        setTimeout(function(){
            resolve(new Date().toLocaleString())
        },sec*1000);

    });

    return myPromise;

}

workFn(1)
    .then(function(result){
        console.log('첫번째 작업을 실행한 시간 :', result);

        return workFn(1);

    }).then(function(result){
        console.log('두번째 작업을 실행한 시간 :', result);

        return workFn(1);

    }).then(function(result){
        console.log('세번째 작업을 실행한 시간 :', result);

        return workFn(1);
    })
```


<br>

## __Promise() 리턴하는 함수__

<br>

```js
//1. 기본데이터타입을 리턴하는 함수
function normalFn(){
    return '1.normalFn 일반함수 실행';
}
const msg = normalFn();
console.log(`msg = ${msg}`)
//msg = 1.normalFn 일반함수 실행


//2. Promise 인스턴스를 리턴하는 함수
function workFn(){
    return new Promise((resolve, reject) =>{
        resolve('2022. 8 .7 오전수업 4교시');
    });
}

//만약 resolve에서 넘겨준 값을 받기 ↓↓
workFn().then(time=>{
    console.log(time);
    //2022. 8 .7 오전수업 4교시
});
```

<br>

----

<br>

## __async, await__

<br>

```js
//서버에서 데이터 수신 후, 결과를 리턴하는 함수
function workFn(){
    // return '3초후 서버에서 데이터 수신완료'

    return new Promise((resolve, reject) =>{
        setTimeout(() => resolve('3초후 서버에서 데이터 수신완료'))
    });
}

// console.log(workFn());

//수신한 데이터를 출력
async function printFn(){

    //await 키워드를 사용하려면 반드시 함수 앞에 async 키워드를 명시해야한다.

    //await을 붙이면 workFn()의 비동기처리가 완료될 때 까지 기다렸다가 다음 코드가 실행된다.

    const result = await workFn();
    console.log(result + ' 화면에 출력')
};

printFn();
```
<br>

----

<br>

## __예외오류 발생 - throw__

<br>

__오류의 종류__

1. 문법오류 
- 자동으로 발견되기 때문에 수정이 용이.

2. 논리오류 
- 코드작성자의 잘못된 논리의 흐름으로 발생한 것이기 때문에 자동발견 X, 
가장 발견하기 어렵다.

3. 예외오류 
- 인터넷끊김으로 인한 서버데이터 전송오류, 저장장치에서 파일을 읽어오거나 저장할 때 물리적으로 에러가 발생하는 것처럼 
코드와 관계없이 발생하는 오류
```js
const saveFn = function(coin_1, coin_2){

    //전달받은 데이터에 대한 유효성검사 => 에러 강제 발생
    if(typeof coin_1 !== 'number' || typeof coin_2 !== 'number'){
        //throw 에러메세지 출력과 동시에 정지
        throw('saveFn 함수 호출시 데이터는 반드시 number 타입이어야 합니다.');
        //Uncaught Error: saveFn 함수 호출시 데이터는 반드시 number 타입이어야 합니다.
    }

    let sum = coin_1 + coin_2;
    console.log(sum + '원');
}
saveFn(1000,'이천');
```
<br>

----

<br>

## __예외처리의 정석 try catch finally와 즉시실행함수__

<br>

```js
//실험적으로 에러를 발생시킬 함수
function secretFn(pwd){

    console.log('secretFn() 함수 시작')
    
    if(pwd === undefined){
        // throw '비밀번호를 입력하지 않음. Error'
        
        //조금 더 상세한 에러정보를 보여준다.
        throw new Error('비밀번호를 입력하지 않음. Error');
        //에러가 발생했기때문에 여기서 끝남
    }

    console.log('secretFn() 함수 종료')
}

//메인함수를 즉시실행
(function main(){

    try{
        //에러가 발생할만한 코드를 작성하는 구간
        secretFn();
    }catch(e){
        //에러 발생시에만 실행되는 구간
        console.log(e);
    }finally{
        //에러 발생과 상관없이 무조건 실행되는 구간
        console.log('예외처리 완료')
    }

    console.log('프로그램 종료');

})();

//secretFn() 함수 시작
//Error: 비밀번호를 입력하지 않음. 
//예외처리 완료
//프로그램 종료
```