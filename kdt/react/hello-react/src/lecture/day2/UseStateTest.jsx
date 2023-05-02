import React, {useEffect, useState} from 'react'

function User2(props) {
    let id = "지역변수 ID";
    const [stateid, setStateId] = useState("STATE ID");
    const [age, setAge] = useState(0);
    let change= () => {
        id = id + "변경";
        console.log(id);
        setStateId(stateid + "변경");
        
    }

    let ageChange = () => {
        setAge(age + 1);
    }

    useEffect(() => {
        console.log("useEffect == " + id);
        console.log("useEffect == " + stateid);
    });

    useEffect(() => { // 컴포넌트 생성시 1번
        console.log("useEffect == mount");
    }, []);

    useEffect(() => { // age 변경될 때만
        console.log("useEffect == " + age);
    }, [age]);

    return (
        <div>
            <h3>props.id = {props.id}는 불변입니다.</h3>
            <h3 onClick={change}>id = {id}</h3>
            <h3>useState:id= {stateid}</h3>
            <h3 onClick={ageChange}>useState:age= {age}</h3>
        </div>
    );

}

export default User2;