import Link from "next/link"
import Container from "../Container/Container"
import { Github, Twitter } from "lucide-react"

function Footer() {
    return (
        <div className="my-6">
            <Container>
                <div className="flex justify-between items-center">
                    <p>Developed with Love@2023</p>
                    <hr className="w-[20%] sm:w-[60%]" />
                    <div className="flex items-center gap-4">
                        <Link target="_blank" href="https://github.com/dEvAshirvad" >
                            <Github className="w-5 cursor-pointer socialIconn" />
                        </Link>
                        <Link target="_blank" href="https://twitter.com/dEvAshirvad">
                            <Twitter className="w-5 cursor-pointer socialIconn" />
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer