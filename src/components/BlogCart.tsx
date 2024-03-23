interface BlogCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string
}

export const BlogCards = ({
    authorName,
    title,
    content,
    publishedDate
}: BlogCardProps) => {
    return <>
        <div>
            {authorName}.{publishedDate}
        </div>
        <div>
            {title}
        </div>
        <div>
            {content.slice(0, 100) + "..."}
        </div>
        <div>
            {`${Math.ceil(content / 100)} minutes`}
        </div>
    </>
}