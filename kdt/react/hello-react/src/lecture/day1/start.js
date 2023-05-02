import React from 'react';

function Hello() {
    return (
        <div>
            <h1>Hello</h1>
        </div>
    );
}

const Hello2 = function () {
    return (
        <div>
            <h1>Hello2</h1>
        </div>
    );
}

const Hello3 = () => {
    return (
        <div>
            <h1>Hello3</h1>
        </div>
    );
}

class Hello4 extends React.Component {
    // constructor를 안만들면 알아서 생성해주네?
    render() {
        return (
            <div>
                <h1>Hello4</h1>
            </div>
        );
    }
}

// default 로 가져갈 수 있는 함수는 오직 1개
export default Hello;
export {Hello2, Hello3, Hello4};