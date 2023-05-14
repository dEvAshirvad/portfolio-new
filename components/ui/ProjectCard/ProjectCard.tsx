import Link from "next/link"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../card"
import { ExternalLink, Github } from "lucide-react"
import { Badge } from "../badge"
import Image from "next/image"
// import swingbanner from ""

const socMap: any = [
    {
        name: "Github",
        comp: <Github className="socialIconn" />
    },
    {
        name: "Website",
        comp: <ExternalLink className="socialIconn" />
    }
]

function ProjectCard({ title, description, social, inprogres, pic }: any) {
    return (
        <Card className="flex flex-col">
            <div className="relative">
                {pic ? <img alt="" src={pic} className="relative w-full aspect-video border-b rounded-t-lg" /> : null}
            </div>
            <CardHeader className={pic ? "p-3.5" : "p-5"}>
                <CardTitle className="mb-1 flex items-center justify-between">
                    <div>{title}</div>
                    <ul className="flex items-center gap-2">
                        {social.map((e: any, key: any) => {
                            return <li key={key}><Link target="_blank" href={e.link} className="flex items-center w-5">{socMap.find((el: any) => el.name === e.social).comp}</Link></li>
                        })}
                    </ul>
                </CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardFooter className={pic ? "p-3.5 pb-5 pt-2" : "p-5 pt-2"}>
                {inprogres ? <Badge className="bg-green-600 text-white">In Progress</Badge> : null}
            </CardFooter>
        </Card>
    )
}

export default ProjectCard