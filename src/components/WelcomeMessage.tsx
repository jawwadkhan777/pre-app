import { FC } from "react";

type WelcomeMessageProps = {
    isLoggedIn: boolean,
    user?: {
        name: string,
        type: 'admin' | 'moderator' | 'guest'
    }
}

const WelcomeMessage: FC<WelcomeMessageProps> = ({isLoggedIn, user}) => {
    //  early return in conditional rendering
    if(user?.type=='moderator') return <p className="mb-16">Ask admin for access!</p>
    else if(user?.type=='guest') return <p className="mb-16">no access!</p>

    return (
        <div className="mb-16 flex flex-col gap-2">
            <h1>Conditional Rendring Concept</h1>
            {isLoggedIn ? <h3>Welcome back!</h3> : <h3>Welcome guest!</h3>}
            {user && <h3>Hi, {user.name}</h3>}
        </div>
    );

    // if else conditional rendering
    // if(user && user.type !== 'admin') {
    //     if(user.type == 'moderator') return <p className="mb-16">Ask admin for access!</p>
    //     else return <p className="mb-16">no access!</p>
    // }
    // else {
    //     return (
    //         <div className="mb-16 gap-2">
    //             <h1>Conditional Rendring Concept</h1>
    //             {isLoggedIn ? <h3>Welcome back!</h3> : <h3>Welcome guest!</h3>}
    //             {user && <h3>Hi, {user.name}</h3>}
    //         </div>
    //         );
    // }
}

export default WelcomeMessage;