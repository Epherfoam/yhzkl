import Container from "./container"
import Emphasize from "./emphasize"
import Link from '../components/link'

const NavigationBar = () => {
    return (
        
        <div className="py-8 fixed top-0 w-screen bg-neutral-900">
            <Container>
                <div className="flex justify-between">
                    <h6 className="select-none">
                        Yehezkiel
                    </h6>
                    <div className="space-x-8">
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
                </div>
            </Container>
        </div>
    )
}

export default NavigationBar