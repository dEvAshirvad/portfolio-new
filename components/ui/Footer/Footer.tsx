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
                        <Github className="w-5 cursor-pointer" />
                        <Twitter className="w-5 cursor-pointer" />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer