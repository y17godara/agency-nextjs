export default function Page({ params }: { params: { slug: string } }) {
  return <div>My Post: {params.slug}</div>;
}
// interface Post {
//     slug: string;
//     title: string;
//     body: string;
//   }
// export async function generateStaticParams() {
//     const posts = await fetch('https://.../posts').then((res) => res.json())
//     return posts.map((post: Post) => ({
//       slug: post.slug,
//     }))
//   }