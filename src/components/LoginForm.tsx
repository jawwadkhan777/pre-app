import { SyntheticEvent, useState } from "react";

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
            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Enter email" className="border-1"/>
            <input onChange={e => setPassword(e.target.value)} value={password} type="password" placeholder="Enter password" className="border-1"/>
            <button>Submit</button>
        </form>
    );
}

export default LoginForm;