import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import { metadata } from './metadata';

export { metadata };
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-4 sm:p-6 md:p-8 lg:p-12 pb-20 flex flex-col items-center font-sen">
      <div className="max-w-2xl w-full px-4 sm:px-6 md:px-8 lg:px-24">
        <div className="flex justify-center mb-4">
          <Image
            src="/avatar.png"
            alt="Humayun K."
            width={120}
            height={120}
          />
        </div>
        <h1 className="font-major-mono text-4xl tracking-tighter sm:text-4xl md:text-6xl mb-8 text-center">
          Humayun K<span className="tracking-tighter">.</span>
        </h1>

        <div>
          <p className="mb-8 text-lg">
            Hi, I&apos;m Humayun Khan. I&apos;m a designer, builder, and author.
          </p>

          <section className="mb-8">
            <h2 className=" text-xl font-semibold sm:text-2xl mb-4">
              WHAT I&apos;M UP TO
            </h2>
          <p className="mb-4 text-lg">
            I&apos;m currently bootstrapping <a href="https://www.studiomaya.io" className="text-yellow-400 hover:underline" target="_blank" rel="noopener noreferrer">Studio Maya</a>, a product studio, where I&apos;m building an ifs-inspired journaling app while taking on occasional product design and strategy work.
          </p>
          <p className="mb-4 text-lg">
            My first product <a href="https://www.querycat.co" className="text-yellow-400 hover:underline" target="_blank" rel="noopener noreferrer">QueryCat</a> peaked at $300MRR before I called it quits.
          </p>
          <p className="mb-4 text-lg">
            I also built this MVP of <a href="https://www.learnfingo.com" className="text-yellow-400 hover:underline" target="_blank" rel="noopener noreferrer">Fingo</a>, duolingo for finance, which I designed and built alongside four others while completing a <a href="https://www.lewagon.com" className="text-yellow-400 hover:underline" target="_blank" rel="noopener noreferrer">dev bootcamp</a> after a decade of wondering if I could learn to code.
          </p>
          <h2 className=" text-xl font-semibold sm:text-2xl mb-4">
              10 YEARS IN TECH
            </h2>
          <p className="mb-4 text-lg">
            My journey has spanned various roles in tech and product design:
          </p>
          <p className="mb-4 text-lg">
            • Product design consultant through <a href="https://www.toptal.com" className="text-yellow-400 hover:underline" target="_blank" rel="noopener noreferrer">Toptal</a> for startups like <a href="https://www.classdojo.com" className="text-yellow-400 hover:underline" target="_blank" rel="noopener noreferrer">ClassDojo</a> and <a href="https://www.ycombinator.com/companies/ruth-health" className="text-yellow-400 hover:underline" target="_blank" rel="noopener noreferrer">RuthHealth (YC 21)</a> and
            enterprise companies like <a href="https://agorocarbonalliance.com/" className="text-yellow-400 hover:underline" target="_blank" rel="noopener noreferrer">Agoro Carbon Alliance</a>, <a href="https://www.appliedmaterials.com/" className="text-yellow-400 hover:underline" target="_blank" rel="noopener noreferrer">Applied Materials</a>, and <a href="https://www.ambrygen.com/" className="text-yellow-400 hover:underline" target="_blank" rel="noopener noreferrer">Ambry Genetics</a>
          </p>
          <p className="mb-4 text-lg">
            • Product Manager at <a href="https://xello.world" className="text-yellow-400 hover:underline" target="_blank" rel="noopener noreferrer">Xello</a>, focusing on career readiness for students
          </p>
          <p className="mb-4 text-lg">
            • Design Lead at <a href="https://roadmunk.com" className="text-yellow-400 hover:underline" target="_blank" rel="noopener noreferrer">Roadmunk</a> (acquired by Tempo) and Tiny Hearts (acquired by Shopify)
          </p>
          <p className="mb-4 text-lg">
          • Content Marketer at <a href="https://www.shopify.com" className="text-yellow-400 hover:underline" target="_blank" rel="noopener noreferrer">Shopify</a>.
          </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">WRITING</h2>
            <p className="mb-4 text-lg">
              In 2018, I dove into novel writing with no prior training. The result? <a href="https://www.penguinrandomhouse.ca/books/675377/wrong-side-of-the-court-by-h-n-khan/9780735270879" className="text-yellow-400 hover:underline" target="_blank" rel="noopener noreferrer">Wrong Side of the Court</a>, a multi-award nominated book that took me on a wild ride through the publishing industry.
            </p>
            <p className="mb-4 text-lg">
              Now, I&apos;m co-writing its film adaptation with the talented <a href="https://www.arigunnarsson.net/wrongsideofthecourt" className="text-yellow-400 hover:underline" target="_blank" rel="noopener noreferrer">Ari Gunnarsson</a>.
            </p>
            <p className="mb-4 text-lg">
              Lastly, check out my <a href="https://diaryofamaker.substack.com" className="text-yellow-400 hover:underline" target="_blank" rel="noopener noreferrer">newsletter</a>, where I explore the intersections of design, technology, and storytelling.
            </p>
          </section>

          <section>
            <h2 className=" text-xl sm:text-2xl mb-4 font-semibold">GET IN TOUCH</h2>
            <p className="mb-4 text-lg">
              Reach out about product roles, design projects, writing, or
              other interesting ways to work together.
            </p>
            <div className="flex space-x-4 mb-8">
              <Link href="mailto:humayun.n.k@gmail.com" className="text-yellow-400 hover:underline flex items-center" target="_blank" rel="noopener noreferrer">
                Email
                <ArrowUpRightIcon className="w-4 h-4 ml-1" />
              </Link>
              <Link href="https://twitter.com/humayunk_" className="text-yellow-400 hover:underline flex items-center" target="_blank" rel="noopener noreferrer">
                Twitter
                <ArrowUpRightIcon className="w-4 h-4 ml-1" />
              </Link>
              <Link href="https://github.com/humayunk" className="text-yellow-400 hover:underline flex items-center" target="_blank" rel="noopener noreferrer">
                Github
                <ArrowUpRightIcon className="w-4 h-4 ml-1" />
              </Link>

            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
