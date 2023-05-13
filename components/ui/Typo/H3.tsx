
function H3({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <h3 className='scroll-m-20 text-xl font-normal text-muted-foreground tracking-tight leading-normal'>{children}</h3>
    )
}

export default H3