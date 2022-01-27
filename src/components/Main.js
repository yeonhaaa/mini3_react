import axios from "axios";
import { useEffect, useState } from "react";

const Main = () => {
    // const [testStr, setTestStr] = useState('');

    // useEffect(() => {
    //     axios({
    //         url: "http://localhost:3000/home",
    //         method: 'GET'
    //     }).then((res) => {
    //         console.log(res.data);
    //         setTestStr(res.data);
    //     });
    // }, []);
    return (
    //     <header className='App-header'>
    //     {testStr}
    //   </header>



        <div>
            <label>이름 </label>
            <input type="text" name="name" id="name" required></input>
            <br></br>
            <label>이메일 </label>
            <input type="email" name="email" id="email" required></input>
            <br></br>
            <label>비밀번호 </label>
            <input type="password" name="pwd" id="pwd" required></input>
            <br></br>
            <button onClick={(e) => {
                e.preventDefault();
                const formData = new FormData();

                formData.append('name', document.getElementById("name").value);
                formData.append('email', document.getElementById("email").value);
                formData.append('pwd', document.getElementById("pwd").value);

                axios({
                    url: "http://localhost:8080/signup",
                    method: 'post',
                    data: formData
                }).then((res) => console.log(res.data));

            }}>회원가입</button>
        </div>
    )
}

export default Main;