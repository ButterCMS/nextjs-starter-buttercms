export default function AuthorCard({ author }) {
    const authorAvatar = '/images/team/team-1.png'
    return (
        <a>
            {author.first_name} {author.last_name}
        </a>
    )
}