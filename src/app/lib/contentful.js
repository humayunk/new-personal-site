import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  environment: process.env.CONTENTFUL_ENVIRONMENT || 'master',
});

export async function getBlogPost(slug) {
  try {
    const entries = await client.getEntries({
      content_type: 'blogPage', // Updated to use the correct content type
      'fields.slug': slug,
      include: 10,
    });

    if (entries.items.length > 0) {
      return entries.items[0];
    }
    console.log('No matching entries found for slug:', slug);
    return null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    console.error('Error details:', error.response?.data);
    console.error('Request config:', error.config);
    throw new Error(`Failed to fetch blog post: ${error.message}`);
  }
}

export default client;
