import React from "react";
import s from './InputMyPosts.module.css'

export const Input = ({input,meta, ...props}:any) => {

    const hasError = meta.touched &&  meta.error
    return ( 
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <input {...input} {...props}/>
            { hasError &&  <span className={s.error}>{meta.error}</span>}
        </div>
    )
}