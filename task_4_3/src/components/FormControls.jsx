import React from "react";
import '../style/style.css';

export const TextArea = ({input, meta, ...props}) => {
    return (
        <div className={"formControl"}>
            <div>
            <textarea className={(meta.error === 'Max lenght is 30 symbols') ? "error" : ""} {...input} {...props} />
            </div>
            { meta.error === 'Max lenght is 30 symbols' && <span className="error">{meta.error}</span>}
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    return (
        <div className={"formControl"}>
            <div>
            <input className={(meta.error === 'Max lenght is 10 symbols') ? "error" : ""} {...input} {...props} />
            </div>
            { meta.error === 'Max lenght is 10 symbols' && <span className="error">{meta.error}</span>}
        </div>
    )
}