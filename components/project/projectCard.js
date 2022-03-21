import Container from "../container"

const ProjectCard = () => {
    return (
        <div className="bg-neutral-800 w-full">
            <Container>
                <div className="flex justify-between flex-col px-6 md:px-0 md:flex-row">
                    <span>
                        <img src="/images/MbakkuLogo.svg" className="py-10 pb-4" />
                        <p>Mbakku is a mobile app solution that ease out to find a maid assistant.</p>
                        <div className="py-4">
                            <h6 className="text-amber-400">Role:</h6>
                            <p>Frontend engineer</p>
                        </div>
                        <div className="pb-10">
                            <h6 className="text-amber-400">Tech Stacks:</h6>
                            <p>IONIC framework with React</p>
                        </div>
                    </span>
                    <div className="flex flex-wrap-reverse justify-center">
                        <img src="/images/MbakkuPhone.png" className="h-80 md:w-full md:h-80" />
                    </div>
                </div>
        </Container>
        </div>
    )
}

export default ProjectCard