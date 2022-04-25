import Link from '../link'
import { useState } from 'react'

const MobileHeader = ({minimizeMenu}) => {
    return (
        <div className="flex flex-col bg-neutral-900 h-screen my-10 space-y-4" >
            <div onClick={() => minimizeMenu(false)}>
                <Link href="/" customClass={"text-3xl"} >
                    Home
                </Link>
            </div>

            <div onClick={() => minimizeMenu(false)}>
                <Link href="/about" customClass={"text-3xl"}>
                    About
                </Link>
            </div>

            <div onClick={() => minimizeMenu(false)}>
                <Link href="/projects" customClass={"text-3xl"}>
                    Projects
                </Link>
            </div>
        </div>
    )
}

export default MobileHeader