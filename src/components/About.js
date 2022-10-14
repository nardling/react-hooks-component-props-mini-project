const About = (props) => {
    return (
        <aside>
            <img src={props.imgSrc ? props.imgSrc : "https://via.placeholder.com/215"}
                alt = "blog logo"
                />
            <p>
                {props.about}
            </p>
        </aside>
    )
}

export default About