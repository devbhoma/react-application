import * as React from "react";
import {useState} from "react";
import {Link} from "react-router-dom";
import {setAuthStore} from "core/utils";
import {useNavigate} from "react-router";

const AuthRegister = function (props: any) {
    const navigate = useNavigate()
    const [state, setState] = useState({
        full_name: '',
        password: "",
        email: '',
    })

    const inputOnChange = (key: string, value: string) => {
        setState(st => {
            return {...st, [key]: value}
        })
    }


    const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phoneRegEx = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;
    const full_name = state.full_name,
        email = state.email,
        password = state.password;


    const register = (e: any) => {
        e.preventDefault();
        localStorage.setItem("REG_USER__INFO", JSON.stringify({ full_name, email, password }))
        setAuthStore(Math.random().toString(36))
        navigate("/")
    }

    return (<React.Fragment>
        <form className={"auth__context"} onSubmit={(e) => register(e)}>
            <input type={"text"} required={true} name={"name"} placeholder={"full name"} value={full_name} onChange={(e: any) => inputOnChange("full_name", e.target.value)} />
            <input type={"email"} required={true} name={"email"} placeholder={"email"} value={email} onChange={(e: any) => inputOnChange("email", e.target.value)} />
            <input type={"password"} required={true} name={"password"} placeholder={"password"} value={password} onChange={(e: any) => inputOnChange("password", e.target.value)} />
            <button type={"submit"}>Submit</button>

            <Link to={"/auth/login"}>back to login</Link>
        </form>
    </React.Fragment>)
}
export default AuthRegister