
function H1({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <h1 className="scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0">{children}</h1>
    )
}

export default H1