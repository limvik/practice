import React, { useMemo, useRef, useState } from 'react';

const NumberSum = () => {
    const [number, setNumber] = useState(''); // 입력하는 숫자 저장
    // 총합 저장 배열
    const [list, setList] = useState([]);

    const onChange = (e) => { 
        console.log("onchange 발생");
        setNumber(e.target.value);
    };

    const inputElement = useRef(null);
    
    const onClick = () => {
        console.log("onclick 발생");
        setList(list.concat(parseInt(number)));
        setNumber('');
        inputElement.current.focus();
    };

    const getAverage = (numbers) => {
        console.log("평균값 계산");
        if (numbers.length === 0) return 0;

        return numbers.reduce((a, b) => a + b, 0) / numbers.length;
    }

    const avg = useMemo(() => getAverage(list), [list]);
    // const avg = getAverage(list);

    return (
        <div>
            <input value={number} onChange={onChange} ref={inputElement}/>
            <button onClick={onClick}>계산</button>
            <ul>
                {list.map((v, i) => (<li key={i}>{v}</li>))}
            </ul>
            <b>평균값 : {avg}</b>
        </div>
    );
}

export default NumberSum;