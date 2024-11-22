import React from 'react';

interface GreetProps {
    name: string;
    messageCount: number;
    isLoggedIn: boolean;
}

const Greet = (props: GreetProps) => {
    return (
        <>
            {
                props.isLoggedIn ? <div>Hello {props.name}! You have {props.messageCount} messages</div> : 'No Messages'
            }

        </>
    )
}

export default Greet