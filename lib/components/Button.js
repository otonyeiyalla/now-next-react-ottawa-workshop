// lib/components/Button.js
import React from 'react';

export default function Button(props){
    return (
        <button 
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}