import Container from "../container"

const ProjectCard = () => {
    return (
        <div class="bg-neutral-800 w-full">
            <Container>
                <div class="flex justify-between flex-col px-6 md:px-0 md:flex-row">
                    <span>
                        <img src="/images/MbakkuLogo.svg" class="py-10 pb-4" />
                        <p>Mbakku is a mobile app solution that ease out to find a maid assistant.</p>
                        <div class="py-4">
                            <h6 class="text-amber-400">Role:</h6>
                            <p>Frontend engineer</p>
                        </div>
                        <div class="pb-10">
                            <h6 class="text-amber-400">Tech Stacks:</h6>
                            <p>IONIC framework with React</p>
                        </div>
                    </span>
                    <div class="flex flex-wrap-reverse justify-center">
                        <img src="/images/MbakkuPhone.png" class="h-80 md:w-full md:h-80" />
                    </div>
                </div>
        </Container>
        </div>
    )
}

export default ProjectCard