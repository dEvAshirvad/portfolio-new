import Link from "next/link"
import { Button } from "../button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../card"

function ProjectCard({ title, description, social }: any) {
    return (
        <Card className="sm:h-full flex flex-col justify-between">
            <CardHeader>
                <CardTitle className="mb-2">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardFooter className="gap-4">
                {social.map((e: any) => {
                    return <Link href={e.link}><Button variant="link" className="p-0 h-0">{e.social}</Button></Link>
                })}
            </CardFooter>
        </Card>
    )
}

export default ProjectCard