import Link from 'next/link';
import Image from 'next/image';
import client from '../lib/contentful';

async function getBlogPosts() {
  try {
    const response = await client.getEntries({
      content_type: 'blogPage',
      order: '-fields.date',
    });
    console.log('Contentful response:', response);
    return response.items;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    throw error;
  }
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <main className="min-h-screen bg-black text-white p-4 sm:p-6 md:p-8 lg:p-12 pb-20 flex flex-col items-center font-sen">
      <div className="max-w-2xl w-full px-4 sm:px-6 md:px-8 lg:px-24">
        <div className="flex flex-col items-center mb-12">
        <div className="flex justify-center mb-4">
          <Image
            src="/hand.png"
            alt="hand"
            width={175}
            height={175}
          />
        </div>
          <h1 className="font-major-mono text-4xl tracking-tighter sm:text-5xl md:text-6xl mb-8 text-center ">Writing</h1>
        </div>
        <ul className="w-full">
          {posts.map((post) => (
            <li key={post.sys.id} className="mb-8 w-full">
              <Link href={`/blog/${post.fields.slug}`} className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full p-2 rounded">
                <h2 className="text-lg transition-colors duration-200 hover:text-yellow-400 mb-2 sm:mb-0">{post.fields.title}</h2>
                <div className="flex flex-col sm:flex-row items-start sm:items-center text-sm">
                  <span className="text-gray-400 mb-1 sm:mb-0 sm:mr-2">{post.fields.tags[0]}</span>
                  <span className="text-gray-400">{new Date(post.fields.date).getFullYear()}</span>
                </div>
              </Link>
              <div className="border-b border-dotted border-gray-600 mt-4"></div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
