import React from 'react'
import loadingCss from './Loading.module.css'

const Loading = () => {
    return (
        <div class={loadingCss.loader_container}>
            <div class={loadingCss.loader}></div>
            <div class={loadingCss.loader_text}>Loading...</div>
        </div>
    )
}

export default Loading