import ConstructivistChar from '../components/ConstructivistChar';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col items-center font-sen">
      <div className="max-w-2xl w-full px-4 sm:px-6 md:px-8 lg:px-24">
        <h1 className="font-major-mono text-4xl sm:text-5xl md:text-6xl mb-6 text-center">
          <ConstructivistChar>H</ConstructivistChar>UMAYUN
          <ConstructivistChar>K</ConstructivistChar>.
        </h1>

        <section className="mb-8">
          <h2 className="font-major-mono text-3xl sm:text-4xl mb-4">
            <ConstructivistChar>A</ConstructivistChar>BOUT
          </h2>
          <p className="text-lg">
            {/* Your content here */}
          </p>
        </section>

        {/* ... other sections ... */}
      </div>
    </main>
  );
}
