import BlogCard from "../BlogCard/BlogCard"
import Container from "../Container/Container"
import ProjectCard from "../ProjectCard/ProjectCard"
import { TabsContent, TabsList, TabsTrigger, Tabs } from "../tabs"

function TabMenu() {
    return (
        <Container>
            <Tabs defaultValue="account" className="w-full">
                <TabsList className="mb-4">
                    <TabsTrigger value="account">Projects</TabsTrigger>
                    <TabsTrigger value="password">Blogs</TabsTrigger>
                    <TabsTrigger value="snippets">Snippets</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                    <ul className="flex flex-col gap-4 sm:flex-wrap  sm:gap-4">
                        <li><ProjectCard title="PortFolio" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et earum illum quae vero libero officiis molestiae corporis error nemo quasi tempora pariatur modi qui iure, eos expedita praesentium, molestias debitis." social={[{ social: "Github", link: "" }, { social: "Website", link: "" }]} /></li>
                        <li><ProjectCard title="PortFolio" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et earum illum quae vero libero officiis molestiae corporis error nemo quasi tempora pariatur modi qui iure, eos expedita praesentium, molestias debitis." social={[{ social: "Github", link: "" }, { social: "Website", link: "" }]} /></li>
                    </ul>
                </TabsContent>
                <TabsContent value="password">
                    <ul className="flex flex-col gap-4 sm:flex-wrap sm:gap-4">
                        <li><BlogCard title="Blog" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et earum illum quae vero libero officiis molestiae corporis error nemo quasi tempora pariatur modi qui iure, eos expedita praesentium, molestias debitis." social={[{ social: "Github", link: "" }, { social: "Website", link: "" }]} /></li>
                        <li><BlogCard title="Blog" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et earum illum quae vero libero officiis molestiae corporis error nemo quasi tempora pariatur modi qui iure, eos expedita praesentium, molestias debitis." social={[{ social: "Github", link: "" }, { social: "Website", link: "" }]} /></li>
                    </ul>
                </TabsContent>
                <TabsContent value="snippets">
                    <ul className="flex flex-col gap-4 sm:flex-wrap sm:gap-4">
                        <li><BlogCard title="PortFolio" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et earum illum quae vero libero officiis molestiae corporis error nemo quasi tempora pariatur modi qui iure, eos expedita praesentium, molestias debitis." social={[{ social: "Github", link: "" }, { social: "Website", link: "" }]} /></li>
                        <li><BlogCard title="PortFolio" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et earum illum quae vero libero officiis molestiae corporis error nemo quasi tempora pariatur modi qui iure, eos expedita praesentium, molestias debitis." social={[{ social: "Github", link: "" }, { social: "Website", link: "" }]} /></li>
                    </ul>
                </TabsContent>
            </Tabs>
        </Container>
    )
}

export default TabMenu