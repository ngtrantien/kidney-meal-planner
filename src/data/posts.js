import postContent from "../content/posts.json";

const blogPlaceholder = `${process.env.PUBLIC_URL}/images/blog/placeholder.svg`;

function resolveAssetUrl(value) {
  if (!value) return blogPlaceholder;
  if (/^(https?:)?\/\//.test(value) || value.startsWith("data:")) return value;

  const normalized = value.replace(/^\/+/, "");
  return `${process.env.PUBLIC_URL}/${normalized}`;
}

function normalizePost(post) {
  return {
    ...post,
    image: resolveAssetUrl(post.image),
    relatedSlugs: post.relatedSlugs || [],
    content: post.content || "",
  };
}

export const POSTS = (postContent.posts || []).map(normalizePost);
