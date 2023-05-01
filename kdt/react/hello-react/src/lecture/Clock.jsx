function Clock(props) {

    let value = 0;
    function addValue() {
        ++value;
        console.log(value);
    }

    return (
        <div>
            <h1 onClick={addValue}>안녕 리액트 {value}</h1>
            <h2>현재시간: {new Date().toLocaleTimeString()}</h2>
        </div>
    )
}

export default Clock;