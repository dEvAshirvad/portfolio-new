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
        <div className="my-10 sm:my-12">
            <Container>
                <div className="mb-2 sm:mb-4">
                    <H2>Frequently Asked Question</H2>
                </div>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Who am I ?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Is it accessible?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </Container>
        </div>
    )
}

export default FaqSection