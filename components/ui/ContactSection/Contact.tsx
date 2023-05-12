import Container from "../Container/Container"
import H2 from "../Typo/H2"

function Contact() {
    return (
        <div className="my-10 relative">
            <Container>
                <div className="mb-6">
                    <H2>Let's talk about...</H2>
                </div>
                <ul className="flex flex-wrap gap-2">
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
                <p className="my-6 relative float-right w-[60%] sm:w-[30%]">There is so much to talk about but i don’t know who you are so..<span className="font-bold">Let’s Know each other...</span></p>
                <H2><input type="submit" value="hello@hellojicky.com" className="border-b-2 border-current" /></H2>
            </Container>
        </div>
    )
}

export default Contact