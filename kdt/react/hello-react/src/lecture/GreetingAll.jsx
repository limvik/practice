function GreetingAll() {
    let greetings = ["Hello", "Hi", "Good Morning"];
    const resultGreetings = greetings.map(function (value, key) {
        return <h1 key={value}>{key} - {value}</h1>;
    });
    return <div>{resultGreetings}</div>;
}

export default GreetingAll;