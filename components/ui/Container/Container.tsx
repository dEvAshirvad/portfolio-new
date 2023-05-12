
function Container({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="max-w-[800px] my-0 mx-auto w-[90%]">
            {children}
        </div>
    )
}

export default Container