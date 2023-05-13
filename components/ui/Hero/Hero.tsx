import Image from "next/image"
import Container from "../Container/Container"
import H1 from "../Typo/H1"
import wave from "../../../public/wave.png"
import Link from "next/link"
import { Instagram, Github, Twitter, LinkedinIcon } from "lucide-react"
import H3 from "../Typo/H3"

function Hero() {
    return (
        <div className="mt-8">
            <Container>
                <div className="flex flex-col sm:flex-row">
                    <div className="w-1/3 max-w-[9rem] relative mb-6 sm:m-0 aspect-square rounded-full bg-slate-400 before:absolute before:w-[95%] before: before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-[#030711] before:aspect-square before:rounded-full">
                        {/* after:w-[40%] after:aspect-square after:absolute after:bottom-0 after:right-0 after:bg-[#030711] after:rounded-full */}
                        <Image alt="" src={""} />
                        <div className="w-[40%] aspect-square rounded-full absolute bottom-0 right-0 bg-[#030711]">
                            <div className="p-3 border-[3px] border-slate-400 rounded-full">
                                <Image alt="" src={wave} id="wave"></Image>
                            </div>
                        </div>
                    </div>
                    <div className="sm:py-1 sm:pl-12 flex flex-col justify-between">
                        <H1>Hey, I'm Ashirvad. I'm a <br className="sm:hidden" />Full-Stack Developer and Architect</H1>
                        <ul className="sm:flex my-4 sm:my-0 gap-3 sm:gap-5 hidden">
                            <li>
                                <Link href={""} className="flex gap-2 socialUnderline"><Twitter className="socialIcon" /> <span className="hidden sm:block socialText">Twitter</span></Link>
                            </li>
                            <li>
                                <Link href={""} className="flex gap-2 socialUnderline"><Github className="socialIcon" /> <span className="hidden sm:block socialText">Github</span></Link>
                            </li>
                            <li>
                                <Link href={""} className="flex gap-2 socialUnderline"><LinkedinIcon className="socialIcon" /> <span className="hidden sm:block socialText">Linkedin</span></Link>
                            </li>
                            <li>
                                <Link href={""} className="flex gap-2 socialUnderline"><Instagram className="socialIcon" /> <span className="hidden sm:block socialText">Instagram</span></Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-4 mb-8 sm:my-10 flex justify-between">
                    <div className="sm:w-[72%]">
                        <H3>A <span className="scroll-m-20 text-xl font-semibold text-white tracking-tight">Full-stack developer 👨‍💻</span> based out in Bhubaneswar, India. <span className="scroll-m-20 text-xl text-white font-semibold tracking-tight">Experienced in building optimized and highly performant 🚀 Web Applications.</span> Skilled in design and engineering of websites with <span className="scroll-m-20 text-xl font-semibold text-white tracking-tight">JavaScript, Next, Firebase, SQL, Figma and AWS.</span></H3>
                    </div>
                    <p className="hidden sm:block sm:w-[20%] text-sm leading-tight">My adaptive learning and curiosity about technology positioned me unique in IT sector.</p>
                </div>
            </Container>
        </div>
    )
}

export default Hero