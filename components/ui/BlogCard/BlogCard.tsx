import Link from "next/link"
import { Button } from "../button"
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "../card"

function BlogCard({ title, description, social }: any) {
    return (
        <Card className="">
            <CardHeader>
                <CardTitle className="mb-2">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            {/* <CardContent>
                <p>Card Content</p>
            </CardContent> */}
            <CardFooter className="gap-4">
                {/* <Button variant="link" className="p-0">Github</Button>
                <Button variant="link" className="p-0">Website</Button> */}
                {social.map((e: any) => {
                    return <Link href={e.link}><Button variant="link" className="p-0 h-0">{e.social}</Button></Link>
                })}
            </CardFooter>
        </Card>
    )
}

export default BlogCard