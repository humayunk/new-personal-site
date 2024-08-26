import Image from 'next/image';
import { getBlogPost } from '../../lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import ReactMarkdown from 'react-markdown';

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p className="mb-4 text-lg">{children}</p>,
    [BLOCKS.HEADING_1]: (node, children) => <h2 className="text-3xl font-bold mb-4">{children}</h2>,
    [BLOCKS.HEADING_2]: (node, children) => <h2 className="text-2xl font-bold mb-3">{children}</h2>,
    [BLOCKS.HEADING_3]: (node, children) => <h3 className="text-xl font-bold mb-2">{children}</h3>,
    [BLOCKS.UL_LIST]: (node, children) => <ul className="list-disc pl-8 mb-4 space-y-2">{children}</ul>,
    [BLOCKS.OL_LIST]: (node, children) => <ol className="list-decimal pl-8 mb-4 space-y-2">{children}</ol>,
    [BLOCKS.LIST_ITEM]: (node, children) => {
      if (node.content.length === 1 && node.content[0].nodeType === 'paragraph') {
        return <li className="pl-1 text-lg">{node.content[0].content[0].value}</li>;
      }
      return <li className="pl-1 text-lg">{children}</li>;
    },
    [INLINES.HYPERLINK]: (node, children) => (
      <a href={node.data.uri} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { url, fileName } = node.data.target.fields.file;
      return (
        <Image
          src={`https:${url}`}
          alt={fileName}
          width={800}
          height={400}
          className="mb-4"
        />
      );
    },
  },
  renderMark: {
    [MARKS.BOLD]: text => <strong>{text}</strong>,
    [MARKS.ITALIC]: text => <em>{text}</em>,
    [MARKS.UNDERLINE]: text => <u>{text}</u>,
  },
  renderText: text => <ReactMarkdown>{text}</ReactMarkdown>,
};

export default async function BlogPostPage({ params }) {
  try {
    const post = await getBlogPost(params.slug);

    if (!post) {
      return <div>Post not found</div>;
    }

    console.log('post.fields.body:', JSON.stringify(post.fields.body, null, 2));

    return (
      <main className="min-h-screen bg-black text-white p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col items-center font-sen">
        <div className="max-w-2xl w-full px-4 sm:px-6 md:px-8 lg:px-24">
          <h1 className="font-major-mono text-4xl tracking-tighter sm:text-5xl md:text-6xl mb-4 text-center ">{post.fields.title}</h1>
          <p className="text-md text-gray-400 mb-8 text-center">
            {new Date(post.fields.date).toLocaleDateString()}
          </p>
          {post.fields.image && (
            <Image
              src={`https:${post.fields.image.fields.file.url}`}
              alt={post.fields.title}
              width={800}
              height={400}
              className="mb-8"
            />
          )}
          <div className="mb-4">
            {/* {post.fields.tags && post.fields.tags.map((tag) => (
              <span key={tag} className="mr-2 bg-gray-700 px-2 py-1 rounded">
                {tag}
              </span>
            ))} */}
          </div>
          <div className="prose prose-invert max-w-none">
            {documentToReactComponents(post.fields.body, options)}
          </div>
        </div>
      </main>
    );
  } catch (error) {
    console.error('Error in BlogPostPage:', error);
    return <div>Error loading blog post: {error.message}</div>;
  }
}
