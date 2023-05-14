import Container from "../Container/Container"
import H2 from "../Typo/H2"
import { AlertDialogTrigger } from "../alert-dialog"

function Contact() {
    return (
        <div className="my-16 sm:my-20" id="contactSec">
            <Container>
                <div className="mb-6">
                    <H2>Let's talk about...</H2>
                </div>
                <div className="flex flex-col">
                    <ul className="flex flex-wrap gap-2 sm:w-[80%]">
                        <li className="p-1 border-2 rounded-full">
                            <div className="relative px-3 py-1">
                                <input type="checkbox" name="" className="absolute w-full h-full top-0 left-0" id="" />
                                <p className="z-10 relative">Blockchain</p>
                            </div>
                        </li>
                        <li className="p-1 border-2 rounded-full">
                            <div className="relative px-3 py-1">
                                <input type="checkbox" name="" className="absolute w-full h-full top-0 left-0" id="" />
                                <p className="z-10 relative">Web Development</p>
                            </div>
                        </li>
                        <li className="p-1 border-2 rounded-full">
                            <div className="relative px-3 py-1">
                                <input type="checkbox" name="" className="absolute w-full h-full top-0 left-0" id="" />
                                <p className="z-10 relative">Machine Learning</p>
                            </div>
                        </li>
                        <li className="p-1 border-2 rounded-full">
                            <div className="relative px-3 py-1">
                                <input type="checkbox" name="" className="absolute w-full h-full top-0 left-0" id="" />
                                <p className="z-10 relative">DevOps</p>
                            </div>
                        </li>
                        <li className="p-1 border-2 rounded-full">
                            <div className="relative px-3 py-1">
                                <input type="checkbox" name="" className="absolute w-full h-full top-0 left-0" id="" />
                                <p className="z-10 relative">Edtech</p>
                            </div>
                        </li>
                        <li className="p-1 border-2 rounded-full">
                            <div className="relative px-3 py-1">
                                <input type="checkbox" name="" className="absolute w-full h-full top-0 left-0" id="" />
                                <p className="z-10 relative">Startups</p>
                            </div>
                        </li>
                        <li className="p-1 border-2 rounded-full">
                            <div className="relative px-3 py-1">
                                <input type="checkbox" name="" className="absolute w-full h-full top-0 left-0" id="" />
                                <p className="z-10 relative">Anime</p>
                            </div>
                        </li>
                        <li className="p-1 border-2 rounded-full">
                            <div className="relative px-3 py-1">
                                <input type="checkbox" name="" className="absolute w-full h-full top-0 left-0" id="" />
                                <p className="z-10 relative">Games</p>
                            </div>
                        </li>
                    </ul>
                    <p className="my-8 w-[60%] sm:w-[30%] self-end">There is so much to talk about but i don’t know who you are so..<span className="font-bold">Let’s Know each other...</span></p>
                </div>
                <AlertDialogTrigger><H2><input type="submit" value="hello@hellojicky.com" className="border-b-2 border-current" /></H2></AlertDialogTrigger>
            </Container>
        </div>
    )
}

export default Contact