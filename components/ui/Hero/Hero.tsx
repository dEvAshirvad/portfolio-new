import Image from "next/image"
import Container from "../Container/Container"
import H1 from "../Typo/H1"
import wave from "../../../public/wave.png"

function Hero() {
    return (
        <div className="my-6 sm:my-8">
            <Container>
                <div className="flex flex-col sm:flex-row">
                    <div className="w-1/3 max-w-[10rem] relative mb-6 sm:m-0 aspect-square rounded-full bg-slate-400 before:absolute before:w-[95%] before: before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-[#030711] before:aspect-square before:rounded-full">
                        {/* after:w-[40%] after:aspect-square after:absolute after:bottom-0 after:right-0 after:bg-[#030711] after:rounded-full */}
                        <div className="w-[40%] aspect-square rounded-full absolute bottom-0 right-0 bg-[#030711]">
                            <div className="p-3 border-[3px] border-slate-400 rounded-full">
                                <Image alt="" src={wave} id="wave"></Image>
                            </div>
                        </div>
                    </div>
                    <H1>Hey, I'm Ashirvad. I'm a <br className="sm:hidden" />Full-Stack Developer and Architect</H1>
                </div>
            </Container>
        </div>
    )
}

export default Hero