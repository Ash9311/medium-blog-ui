import { BlogCards } from "../components/BlogCard"

export const Blogs = () => {
    return (
        <div>
            <BlogCards authorName={"ash"}
                title={"title of blog"}
                content={"content of blog"}
                publishedDate={"2nd feb 2024"}
            />
        </div>
    )
}