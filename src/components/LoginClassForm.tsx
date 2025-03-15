import React, { SyntheticEvent } from "react";

class LoginClassForm  extends React.Component {
    state = {email:"", password:""};
    
    submitForm(event:SyntheticEvent) {
            event.preventDefault();
            const target = event.target as HTMLFormElement;    
            console.log(target, this.state);
            
        }
    
        render(): React.ReactNode {
            return(
                <form className="mb-16 flex flex-col gap-4" onSubmit={this.submitForm.bind(this)}>
                    <h1>Class Component Form</h1>
                    <input onChange={(e) => this.setState({email: e.target.value})} type="email" placeholder="Enter email" className="border-1"/>
                    <input onChange={e => this.setState({password: e.target.value})} type="password" placeholder="Enter password" className="border-1"/>
                    <button>Submit</button>
                </form>
            );
        }
}

export default LoginClassForm;