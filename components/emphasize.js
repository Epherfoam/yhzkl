const defaultClass = (customClass) => {
    return `${customClass} font-bold text-transparent bg-clip-text bg-gradient-to-r`
}

const Emphasize = ({children, type, customClass}) => {
    if (type == 1){
        return (<span className={`${defaultClass(customClass)} from-emerald-400 to-sky-400`}>{children}</span>)
    } else if (type == 2){
        return (<span className={`${defaultClass(customClass)} from-amber-400 to-rose-400`}>{children}</span>)
    } else if (type == 3){
        return (<span className={`${defaultClass(customClass)} text-emerald-400`}>{children}</span>)
    }

    return (<span className={`${customClass} font-bold text-amber-400`}>{children}</span>)
}

export default Emphasize