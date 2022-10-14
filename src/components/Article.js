const Article = (props) => {
    return (
        <article>
            <h3>{props.post.title}</h3>
            <small>{props.post.date ? props.post.date : "January 1, 1970"}</small>
            <p>{props.post.preview}</p>
        </article>
    )
}

export default Article