const defaultClass = () => {
    return "font-bold px-6 py-2 rounded drop-shadow-lg hover:drop-shadow-none transition active:scale-95"
}

const Button = ({children, type}) => {
    if (type === 'negative') {      
        return ( <button className={`${defaultClass()} bg-rose-500 hover:bg-rose-600`}>Test</button> )
    } else if (type === 'neutral') {      
        return ( <button className={`${defaultClass()}`}>Test</button> )
    }
    
    return ( <button className={`${defaultClass()} bg-emerald-500 hover:bg-emerald-600`}>Test</button> )
}

export default Button;