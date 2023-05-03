import React from 'react'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.loginText = "로그인";
        this.state = {
            id: '',
            pw: '',
            isLogin: false,
        };
    }

    // 이벤트 처리 핸들러
    inputForm = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    loginForm = (e) => {
        if (this.state.isLogin) {
            alert("로그아웃 되었습니다.")
            this.loginText = "로그인";
        } else {
            // alert(this.state.id + " 회원님 " + this.state.pw + " 암호를 입력했습니다.");
            alert(this.state.id + " 회원님 환영합니다.");
            this.loginText = "로그아웃";
        }
        
        this.setState({isLogin: !this.state.isLogin});
    }
    

    render() {
        const text = "text";
        const pass = "password";
        const btn = "button";
        return (
            <div>
                아이디입력<input type={text} name='id' value={this.state.id} onChange={this.inputForm}/> <br />
                암호입력<input type={pass} name='pw' onChange={this.inputForm}/> <br />
                <input type={btn} name='login' value={this.loginText} onClick={this.loginForm}/>
            </div>
        );
    }
}

export default LoginForm;