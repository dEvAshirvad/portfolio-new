import BlogCard from "../BlogCard/BlogCard"
import Container from "../Container/Container"
import ProjectCard from "../ProjectCard/ProjectCard"
import { TabsContent, TabsList, TabsTrigger, Tabs } from "../tabs"

function TabMenu() {
    return (
        <div className="mt-16 sm:mt-20">
            <Container>
                <Tabs defaultValue="account" className="w-full">
                    <div className="flex items-stretch justify-between">
                        <TabsList className="mb-4">
                            <TabsTrigger value="account">Projects</TabsTrigger>
                            <TabsTrigger value="password">Blogs</TabsTrigger>
                            {/* <TabsTrigger value="snippets">Snippets</TabsTrigger> */}
                        </TabsList>
                        {/* <Button className="py-0">See More</Button> */}
                    </div>
                    <TabsContent value="account">
                        <ul className="grid gap-3 sm:grid-cols-3">
                            <li><ProjectCard title="SwingCase Backend" description="An API generates 10 growing stocks for swing trades, helping traders make informed investments." social={[{ social: "Github", link: "https://github.com/dEvAshirvad/Swing-Case-Backend" }]} inprogres={true} pic="/swingcaseBanner.png" /></li>
                            <li><ProjectCard title="Jwt-auth-micro" description="jwt-auth-micro is a microservice that provides secure authentication using JSON Web Tokens (JWT) for modern web applications." social={[{ social: "Github", link: "https://github.com/dEvAshirvad/jwt-auth-node" }]} inprogres={true} /></li>
                            <li><ProjectCard title="Gurukoolclub" description="Gurukoolclub is an ML-based learning and assessment system that personalizes learning paths and assessments for students based on their strengths and weaknesses." social={[{ social: "Github", link: "https://github.com/dEvAshirvad/gurukoolclub" }]} inprogres={true} /></li>
                        </ul>
                    </TabsContent>
                    <TabsContent value="password">
                        <ul className="grid gap-4 sm:grid-cols-3">
                            <li><BlogCard title="How jwt auth works ?" description="In this blog post, we'll explore the basics of JWT authentication and dive into how it works. We'll explain the key concepts of JWTs, how they're used for authentication, and walk through a sample implementation." social={[{ social: "Read More", link: "https://devashirvad.hashnode.dev/" }]} /></li>
                            {/* <li><BlogCard title="Blog" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et earum illum quae vero libero officiis molestiae corporis error" social={[{ social: "Github", link: "" }, { social: "Website", link: "" }]} /></li> */}
                        </ul>
                    </TabsContent>
                    {/* <TabsContent value="snippets">
                        <ul className="grid gap-4 sm:grid-cols-3">
                            <li><BlogCard title="PortFolio" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et earum illum quae vero libero officiis molestiae corporis error" social={[{ social: "Github", link: "" }, { social: "Website", link: "" }]} /></li>
                            <li><BlogCard title="PortFolio" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et earum illum quae vero libero officiis molestiae corporis error" social={[{ social: "Github", link: "" }, { social: "Website", link: "" }]} /></li>
                        </ul>
                    </TabsContent> */}
                </Tabs>
            </Container>
        </div>
    )
}

export default TabMenu