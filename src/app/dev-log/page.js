import Link from 'next/link';
import client from '../lib/contentful';
import Image from 'next/image';

async function getDevLogEntries() {
  try {
    const response = await client.getEntries({
      content_type: 'devLog',
      order: '-fields.date',
    });
    console.log('Contentful response:', JSON.stringify(response, null, 2));
    return response.items;
  } catch (error) {
    console.error('Error fetching dev log entries:', error);
    throw error;
  }
}

export default async function DevLogPage() {
  const entries = await getDevLogEntries();

  return (
    <main className="min-h-screen bg-black text-white p-4 sm:p-6 md:p-8 lg:p-12 pb-20 flex flex-col items-center font-sen">
      <div className="max-w-2xl w-full px-4 sm:px-6 md:px-8 lg:px-24">
      <div className="flex justify-center mb-4">
          <Image
            src="/dev.png"
            alt="dev"
            width={200}
            height={200}
          />
        </div>
        <h1 className="font-major-mono text-4xl tracking-tighter sm:text-5xl md:text-6xl mb-12 text-center">DevLog</h1>
        <div className="space-y-16 relative">
          <div className="absolute left-2 top-4 bottom-0 w-0.5 bg-yellow-400"></div>
          {entries.map((entry, index) => (
            <div key={entry.sys.id} className="pl-8 relative">
              <div className="absolute left-0 top-1 w-4 h-4 bg-yellow-400 rounded-full z-10" style={{ transform: 'translateX(4%)' }}></div>
              <h2 className="text-xl font-semibold mb-2">{entry.fields.title}</h2>
              <p className="text-sm text-gray-400 mb-2">
                {new Date(entry.fields.date).toLocaleDateString()}
              </p>
              <p className="mb-2">{entry.fields.content}</p>
              {entry.fields.video && (
                <div className="mb-4">
                  <video
                    src={entry.fields.video.fields.file.url}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full rounded-lg"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
              {entry.fields.snippet && (
                <p className="text-sm text-gray-300 mb-4 whitespace-pre-wrap">
                  {entry.fields.snippet}
                </p>
              )}
              <div className="flex flex-wrap gap-2">
                {entry.fields.tag && entry.fields.tag.map((tag) => (
                  <span key={tag} className="bg-gray-700 text-xs px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
