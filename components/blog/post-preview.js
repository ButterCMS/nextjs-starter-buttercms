import Link from "next/link";

export default function PostPreview({
  title,
  coverImage,
  excerpt,
  slug,
}) {
  return (
    <div className="col-lg-4 col-md-8 col-sm-10">
      <div className="single-blog">
        <div className="blog-header">
          <img
            className="img-fluid"
            src={coverImage} alt=""
          />
        </div>
        <div className="blog-body">
          <h5 className="package-name">
            <Link href={`/posts/${slug}`}>
              <a>{title}</a></Link></h5>
          <p>{excerpt}</p>
        </div>
        <div className="blog-footer">
          <Link href={`/posts/${slug}`}>
            <a className="main-btn btn-hover">Read More</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
