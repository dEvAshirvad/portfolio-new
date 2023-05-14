import Link from "next/link"
import { Button } from "../button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../card"
import { ExternalLink, Github } from "lucide-react"
import assert from "assert"
import { Badge } from "../badge"

const socMap: any = [
    {
        name: "Github",
        comp: <Github />
    },
    {
        name: "Website",
        comp: <ExternalLink />
    }
]

function ProjectCard({ title, description, social, inprogres }: any) {
    return (
        <Card className="flex flex-col h-full">
            <div className="relative aspect-video border rounded-t-lg">
                {inprogres ? <Badge className="absolute bottom-0 right-0 mx-2 my-3 bg-green-600 text-white">In Progress</Badge> : null}
            </div>
            <CardHeader className="p-3.5">
                <CardTitle className="mb-1 flex items-center justify-between">
                    <div>{title}</div>
                    <ul className="flex items-center gap-2">
                        {social.map((e: any, ind: number) => {
                            return <li><Link key={ind} href={e.link} className="flex items-center w-5">{socMap.find((el: any) => el.name === e.social).comp}</Link></li>
                        })}
                    </ul>
                </CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
        </Card>
    )
}

export default ProjectCard