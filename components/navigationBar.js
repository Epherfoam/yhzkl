import Container from "./container"
import Link from '../components/link'
import MobileHeader from '../components/header/mobileHeader'
import { useState, useEffect } from 'react'

const NavigationBar = () => {

    const [isExpand, setExpand] = useState(false)

    return (
        <div className="py-8 fixed top-0 w-screen bg-neutral-900">
            <Container>
                <div className="flex justify-between">
                    <h6 className="select-none">
                        Yehezkiel
                    </h6>
                    {/* more than medium (pc / tablet user) */}
                    <div className="space-x-8 hidden md:block">
                        <Link href='/'>
                            Home
                        </Link>
                        <Link href='/about'>
                            About
                        </Link>
                        <Link href='/projects'>
                            Projects
                        </Link>
                    </div>
                    {/* less than medium (mobile user) */}
                    <div className="space-x-8 md:hidden px-10" >
                        <button onClick={() => setExpand(isExpand ? false : true)}>
                            <img src={!isExpand ? "/images/HamburgerMenu.svg" : "/images/CrossingMenu.svg"} className="h-6" />
                        </button>
                    </div>
                </div>
                {/* <MobileHeader /> */}
                { isExpand ? <MobileHeader minimizeMenu={setExpand}/> : null }
            </Container>
        </div>
    )
}

export default NavigationBar