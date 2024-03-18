import { useEffect, useState } from "react"

//UseEffectEx 함수형 컴포넌트
const UseEffectEx = () => {
    let[count, setCount] = useState(0);
    let [mode, setMode] = useState('true');
    let [countVal, setCountVal] = useState(0);

    console.log(`렌더링 --> count : ${count}, mode : ${mode} `);

    //useEffect() 훅스를 이용해서, 렌더링 시에 처리
    useEffect(()=> {
        console.log('useEffect() 처리 중 ');
    })
    return (
        //jsx 문법
        <>
            <h2> UseEffect() 연습 </h2>
            <p> countVal(let) : {countVal} </p>
            <p> count : {count} </p>
            <p> mode : {mode} </p>

            <button onClick={() => {
                count ++;
                console.log(`countVal : ${countVal}`)
            }}> countVal Inc(let) </button>

            <button onClick={() => {
                setCount(count +1);
            }}> count Inc(useState) </button>

            <button onClick={() => {
                mode =='true' ? setMode('false'):setMode('true');
            }}> Mode Change(useState) </button>
        </>
    )
}

export default UseEffectEx;