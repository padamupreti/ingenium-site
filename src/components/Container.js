function Container({ children }) {
    return (
        <div className="bg-gray-950/60">
            <div className="w-10/12 md:w-8/10 mx-auto">{children}</div>
        </div>
    )
}

export default Container
