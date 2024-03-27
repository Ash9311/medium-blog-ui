import { BlogCards } from "../components/BlogCard"

export const Blogs = () => {
    return (
        <div className="flex justify-center max-w-lg">
            <BlogCards authorName={"ash"}
                title={"How an ungly frontend page makes 5000 dollars a month"}
                content={"content of blog"}
                publishedDate={"2nd feb 2024"}
            />
        </div>
    )
}