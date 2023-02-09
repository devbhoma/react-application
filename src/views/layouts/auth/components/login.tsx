import * as React from "react";
import {useState} from "react";
import {Link} from "react-router-dom";
import {setAuthStore} from "core/utils";
import {useNavigate} from "react-router";

const AuthLogin =function (props: any) {
    const navigate = useNavigate()
    const [state, setState] = useState({
        email: "",
        password: "",
    })


    const email= state.email, password=state.password;

    const login = (e: any) => {
        e.preventDefault()
        setAuthStore(Math.random().toString(36))
        navigate("/dashboard")
    }

    const inputOnChange = (key: string, value: string) => {
        setState(st => {
            return {...st, [key]: value}
        })
    }


    return <React.Fragment>
        <form className={`auth__context`} onSubmit={(e) => login(e)}>
            <input type={"email"} required={true} name={"email"} placeholder={"email"} value={email} onChange={(e: any) => inputOnChange("email", e.target.value)} />
            <input type={"password"} required={true} name={"password"} placeholder={"password"} value={password} onChange={(e: any) => inputOnChange("password", e.target.value)} />
            <button type={"submit"}>Submit</button>


            <Link to={"/auth/register"}>Create an account?</Link>

        </form>
    </React.Fragment>
}


export default AuthLogin
