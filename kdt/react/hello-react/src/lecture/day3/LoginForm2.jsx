import { useState } from 'react'

function LoginForm2() {
    
    const [form, setForm] = useState({
            id: '',
            pw: '',
            isLogin: false,
            loginText: "로그인",
    });


    // 이벤트 처리 핸들러
    let inputForm = (e) => {
        // 기존 form 객체를 복사하고, 두번째 인수 값으로 덮어씌워 전달한다.
        setForm({...form, [e.target.name]: e.target.value});
    }

    let loginForm = (e) => {
        if (form.isLogin) {
            alert("로그아웃 되었습니다.")
        } else {
            alert(form.id + " 회원님 환영합니다.");
        }

        setForm({...form, isLogin: !form.isLogin, loginText: form.isLogin ? "로그인" : "로그아웃"});
    }

    const text = "text";
    const pass = "password";
    const btn = "button";

    return (
        <div>
            아이디입력<input type={text} name='id' value={form.id} onChange={inputForm}/> <br />
            암호입력<input type={pass} name='pw' onChange={inputForm}/> <br />
            <input type={btn} name='login' value={form.loginText} onClick={loginForm}/>
        </div>
        );
}

export default LoginForm2;