import { default as NextLink } from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Link = ({href, children, customClass}) => {
    const { asPath } = useRouter()
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        setIsActive(asPath === href)
    }, [asPath])

    return ( 
        <NextLink href={`${href}`} >
            <a className={`hover:underline font-bold ${!isActive ? `text-white` : `text-amber-400`} ${customClass}`} >
                {children}
            </a>
        </NextLink>
    )
}

export default Link