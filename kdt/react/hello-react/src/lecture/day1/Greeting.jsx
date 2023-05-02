function Greeting() {
    // let greet1 = "오늘도 즐거운 하루되세요!";
    // let greet2 = "안녕하세요 리액트";
    // let greet3 = "오늘 날씨 어때요?";
    // let random = parseInt(Math.random() * 3);
    // let greet = "";
    // switch (random) {
    //     case 0:
    //         greet = greet1;
    //         break;
    //     case 1:
    //         greet = greet2;
    //         break;
    //     case 2:
    //         greet = greet3;
    //         break;
    //     default:
    //         break;
    // }

    // return (
    //     <div>
    //         <h1>{greet}</h1>
    //     </div>
    // );

    let greet = ["Hello", "Hi", "Good Morning"];
    return (
        <div>
            <h1>{greet[parseInt(Math.random() * 3)]}</h1>
        </div>
    );
}

export default Greeting;