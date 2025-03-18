import { SyntheticEvent, useState } from "react";
// import { Button } from "./Button";
import Button from '@mui/material/Button';
import styled from "styled-components";

const StyledInput = styled.input`
    padding: 4px 12px;
    border-radius: 4px;
`


const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitForm = (event:SyntheticEvent) => {
        event.preventDefault();

        const target = event.target as HTMLFormElement;

        console.log(target, {email, password});
        
    }

    return(
        <form className="mb-16 flex flex-col gap-4" onSubmit={submitForm}>
            <h1>Functional Component Form</h1>
            <StyledInput onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Enter email" className="border-1"/>
            <StyledInput onChange={e => setPassword(e.target.value)} value={password} type="password" placeholder="Enter password" className="border-1"/>
            {/* <button>Submit</button> */}
            <Button>Submit</Button>
        </form>
    );
}

export default LoginForm;