import Container from "../Container/Container"
import { Button } from "../button"
import { AlignJustify } from "lucide-react"

function Header() {
    return (
        <header className="relative bg-inherit z-10 top-[-100%] w-full">
            <Container>
                <div className="flex items-center justify-between py-6 sm:py-8">
                    <div>
                        <h1 className="scroll-m-20 mb-1 text-xl font-semibold tracking-tight">
                            Ashirvad Satapathy
                        </h1>
                        <h3 className="text-sm font-medium leading-none">DevOps Enthusiast</h3>
                    </div>
                    <div className="items-center hidden gap-4 sm:flex">
                        <Button variant="link">Resume</Button>
                        <Button variant="link" className="p-0">Contact</Button>
                    </div>
                    <div className="cursor-pointer p-2 rounded-xl border-2 sm:hidden">
                        <AlignJustify />
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header