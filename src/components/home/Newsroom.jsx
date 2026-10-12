import { Link } from 'react-router-dom';
import { blog } from '../../content/site';
import SectionIntro from '../common/SectionIntro';
import Reveal from '../common/Reveal';

/**
 * Three newsroom pieces, on the same media-card shape as the platforms grid.
 *
 * The mono index is each piece's category (HEALTHTECH, EDTECH, WELLNESS) — not
 * a date and not a comment count. The content layer has no publish dates for
 * these, and printing a date on a post would fabricate a publishing record;
 * the category is a fact we actually have.
 *
 * All three link to `/news-room` rather than to individual articles, because
 * individual articles are what the content layer has: a title and a category.
 */
export default function Newsroom() {
  return (
    <section className="ls-section ls-section--smoke">
      <div className="ls-container">
        <SectionIntro eyebrow={blog.subTitle} title={blog.title} />

        <div className="ls-grid ls-grid--3">
          {blog.posts.map((post, i) => (
            <Reveal key={post.title} effect="fadeInUp" delay={i * 80}>
              <Link className="ls-mediacard" to={post.link}>
                <div className="ls-media ls-media--3x2">
                  <img src={post.img} alt="" aria-hidden="true" />
                </div>
                <span className="ls-index">{post.category}</span>
                <h3 className="ls-mediacard__title">{post.title}</h3>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
