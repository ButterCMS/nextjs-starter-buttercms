import Image from "next/image"
import Link from "next/link";

import HumanDate from "@/components/human-date"

export default function PostsPreview({
  title,
  coverImage,
  coverImageAlt,
  date,
  author,
  tags,
  excerpt,
  slug
}) {
  return (
    <div className="col-12 col-lg-6">
      <div className="blog-roll-card">
        <div className="blog-roll-card-meta">
          <h2 className="blog-roll-card-header"><Link href={`/blog/${slug}`}><a>{title}</a></Link></h2>
          <ul className="blog-roll-card-meta-info">
            <li>
              <a><img src={author.profile_image ? author.profile_image : '/images/team/team-1.png'} alt={`Profile image ${author.first_name} ${author.last_name}`} />{author.first_name} {author.last_name}</a>
            </li>
            <li>
              <i className="lni lni-calendar"></i> <HumanDate dateString={date} />
            </li>
            <li>
              {tags.map(tag =>
              (<Link key={tag.slug} href={`/blog/tag/${tag.slug}`}>
                <a><i className="lni lni-tag"></i> {tag.name}
                </a></Link>)
              )}
            </li>
          </ul>
        </div>
        {coverImage && (
          <div className="single-post-thumbnail">
            <Image
              src={coverImage}
              alt={coverImageAlt}
              layout="fill"
              objectFit="cover"
            />
          </div>
        )}
        <div className="blog-roll-card-body prose" dangerouslySetInnerHTML={{ __html: excerpt }}>
        </div>
        <div className="blog-roll-card-footer text-center">
          <Link href={`/blog/${slug}`}><a className="main-btn btn-hover">Read More</a></Link>
        </div>
      </div>
    </div>
  )
}