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
            Hi, I&apos;m Humayun Khan. I&apos;m a designer who codes, founder, and writer. I&apos;m currently based in
            Montreal.
          </p>

          <section className="mb-8">
            <h2 className=" text-xl font-semibold sm:text-2xl mb-4">
              ABOUT ME
            </h2>
            <p className="mb-4 text-lg">
              For the past ~5 years, I&apos;ve been working as a product +
              design consultant for startups like <a href="https://www.classdojo.com" className="text-yellow-400 hover:underline">ClassDojo</a>,
              <a href="https://www.ycombinator.com/companies/ruth-health" className="text-yellow-400 hover:underline"> RuthHealth (YC 21)</a> and enterprise companies like <a href="https://agorocarbonalliance.com/" className="text-yellow-400 hover:underline"> Agoro
              Carbon Alliance</a>, <a href="https://www.appliedmaterials.com/" className="text-yellow-400 hover:underline">Applied Materials</a>, and <a href="https://www.ambrygen.com/" className="text-yellow-400 hover:underline">Ambry Genetics</a>.
            </p>
            <p className="mb-4 text-lg">
              Alongside my consulting practice, I shipped my first
              Micro-SaaS product, <a href="https://querycat.co" className="text-yellow-400 hover:underline">QueryCat</a>, which at its peak
              generated $300MRR, before deciding to upskill and
              attending a <a href="https://www.lewagon.com/web-development-course" className="text-yellow-400 hover:underline">full-stack web dev bootcamp</a>, where I built
              <a href="https://www.learnfingo.com" className="text-yellow-400 hover:underline"> Fingo</a>, duolingo for finance. I&apos;m currently tinkering on
              products in the mental health, Web3, and FinTech space.
            </p>
            <p className="mb-4 text-lg">
              Previously, I worked as a PM for <a href="https://xello.world" className="text-yellow-400 hover:underline">Xello</a> trying to solve career readiness for students, led design for <a href="https://roadmunk.com" className="text-yellow-400 hover:underline">Roadmunk</a> (acq. by Tempo), and Tiny Hearts (acq. by Shopify).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">WRITING</h2>
            <p className="mb-4 text-lg">
              In 2018, I decided to pursue a life-long dream of writing
              a novel and started working on <a href="https://www.penguinrandomhouse.ca/books/669723/wrong-side-of-the-court-by-hn-khan/9780735270893" className="text-yellow-400 hover:underline">Wrong Side of the
              Court</a>, with no prior training in writing prose. It was an
              arduous process and exposed me to the inner workings
              of the publishing industry. After much perseverance I
              landed an agent, secured a publishing deal, and was
              nominated for numerous awards.
            </p>
            <p className="mb-4 text-lg">
              I&apos;m currently co-writing the film adaptation alongside
              the very talented <a href="https://www.arigunnarsson.net/wrongsideofthecourt" className="text-yellow-400 hover:underline">Ari Gunnarsson</a> who&apos;ll be directing the
              project. I&apos;m also starting a newsletter called Systuhm.
            </p>
          </section>

          <section>
            <h2 className=" text-xl sm:text-2xl mb-4 font-semibold">GET IN TOUCH</h2>
            <p className="mb-4 text-lg">
              Reach out about design projects, writing, or
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
