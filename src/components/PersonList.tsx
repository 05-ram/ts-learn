import React from 'react';
import { Name } from './Person.type';

type PersonListProps = {
    names: Name[]
}

const PersonList = (props: PersonListProps) => {
    return (
        <div>
            {
                props.names.map((name, index) => (
                    <h2 key={index}>{name.fName} {name.lName}</h2>
                ))
            }
        </div>
    )
}

export default PersonList