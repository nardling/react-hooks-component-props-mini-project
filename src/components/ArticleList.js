import Article from './Article.js'

const ArticleList = (props) => {
    return (
        <main>
            {props.posts.map(post => {return <Article key={post.id} post={post}/>} )}
        </main>
    )
}

export default ArticleList