import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Container from "../Container/Container"
import H2 from "../Typo/H2"

function FaqSection() {
    return (
        <div className="my-16 sm:my-20">
            <Container>
                <div className="mb-2 sm:mb-4">
                    <H2>Frequently Asked Question</H2>
                </div>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Who am I ?</AccordionTrigger>
                        <AccordionContent>
                            A Full-stack developer 👨‍💻 based out in Bhubaneswar, India. Experienced in building optimized and highly performant 🚀 Web Applications. Skilled in design and engineering of websites with JavaScript, Next, Firebase, SQL, Figma and AWS.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>What are my specializations ?</AccordionTrigger>
                        <AccordionContent>
                            I specialize in backend development, with expertise in Express, Firebase, and other modern technologies. I am passionate about building scalable systems that can handle high traffic loads and can ensure optimal performance. My focus on backend development allows me to ensure that your application's server-side code is optimized for security, efficiency, and reliability.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </Container>
        </div>
    )
}

export default FaqSection