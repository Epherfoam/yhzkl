import * as React from "react"

const Emphasize = ({children, type}) => {
    if (type == 1){
        return (<span class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-sky-400">{children}</span>)
    } else if (type == 2){
        return (<span class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-400">{children}</span>)
    }

    return (<span class="font-bold text-amber-400">{children}</span>)
}

export default Emphasize