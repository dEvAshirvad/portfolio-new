import Container from "../Container/Container"
import { Button } from "../button"
import { AlignJustify } from "lucide-react"
import { SheetTrigger } from "../sheet"
import Link from "next/link"


function Header() {
    return (
        <header className="relative bg-inherit z-10 top-0 w-full">
            <Container>
                <div className="flex relative items-start sm:items-center justify-between py-6 sm:py-8">
                    <Link href={"/"}>
                        <h1 className="scroll-m-20 mb-1 text-xl font-semibold tracking-tight">
                            Ashirvad Satapathy
                        </h1>
                        <h3 className="text-sm font-medium leading-none">DevOps Enthusiast</h3>
                    </Link>
                    <div className="absolute right-0">
                        <div className="items-start sm:items-center gap-3 sm:gap-4 flex flex-col sm:flex-row p-4 px-6 sm:p-0 bg-[#060a15] rounded-lg border sm:border-none sm:bg-none">
                            <Button variant="link" className="p-0 h-auto text-left"><Link href={"/about"}>About</Link></Button>
                            <Button variant="link" className="p-0 h-auto text-left"><a href="/resume.pdf" download>Resume</a></Button>
                            <Button variant="link" className="p-0 h-auto text-left"><Link href="#contactSec">Contact</Link></Button>
                        </div>
                    </div>
                    {/* <SheetTrigger asChild>
                        <div className="cursor-pointer p-2 rounded-xl border-2 sm:hidden">
                            <AlignJustify />
                        </div>
                    </SheetTrigger> */}
                </div>
            </Container>
        </header>
    )
}

export default Header