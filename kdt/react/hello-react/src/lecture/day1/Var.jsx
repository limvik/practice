function Hello5 () {
    const name = "홍길동";
    const age = 30;
    function inner() { return '이너함수';};
    return (
        <div>
            <h1>{name} 회원님 내년에는 {age + 1} 살 입니다. {inner()}</h1>
        </div>
    );
}

export default Hello5;