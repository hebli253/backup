function Welcome(props) {
    return(
        <>
            <header>
                <h2>{props.title} </h2>
                {props.desc}
            </header>
        </>
    )
}

export default Welcome;