import React from 'react'
import { PersonProps } from './Person.type'

const Person = (props: PersonProps) => {
    return (
        <div>{props.name.fName} {props.name.lName}</div>
    )
}

export default Person