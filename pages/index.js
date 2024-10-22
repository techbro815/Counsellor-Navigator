import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="h-[80vh] bg-[#893ae9] flex items-center justify-center font-sans">
        <div className="text-white max-w-2xl p-8">
          <h1 className="text-[3rem] text-white font-bold mb-4">
            Join College Dost, India’s Leading Community for 12th class
            graduates
          </h1>
          <p className="mb-6 text-lg">
            Get up-to-date information on JEE, EAMCET, exam tips, engineering
            counselling, branch selection, cutoffs, results, etc.
          </p>
          <div className="flex gap-8 mb-8">
            <div>
              <p className="text-2xl font-semibold">3,00,000+</p>
              <p>Students</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">3,000+</p>
              <p>College Covered</p>
            </div>
          </div>
          <Link href="/" passHref>
            <span className="bg-white text-purple-500 font-semibold py-3 px-16 rounded-[5px] hover:bg-gray-100 transition">
              Join WhatsApp
            </span>
          </Link>
          <p className="mt-6 text-sm">
            Receive Career Guidance from the team behind College Dost
          </p>
        </div>
        <div className="hidden sm:block">
          <Image
            src="/images/student-dost-landing-page.webp"
            alt="Hero"
            width={500}
            height={800}
            className="object-cover"
          />
        </div>
      </div>

      <div className="py-16 flex flex-col md:flex-row justify-between items-center max-w-[68rem] mx-auto space-y-8 md:space-y-0 md:space-x-8">
        <div className="text-center md:text-left max-w-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Get Trustworthy Information and Career Guidance
          </h2>
          <p className="text-gray-600 text-[1.1rem] mb-6">
            After completing intermediate/12th class, you’re in one of the most
            crucial stages of your life. You've to make important decisions
            while dealing with many confusions. And, it’s hard to know who to
            trust for information with 1000s of websites available.
          </p>
          <p className="text-gray-600 text-[1.1rem] mb-6">
            College Dost is here to help you make the right choices for your
            future!
          </p>
          <Link href="/" passHref>
            <span className="bg-purple-600 text-white font-semibold py-3 px-16 rounded-[5px] hover:bg-purple-700 transition">
              Join WhatsApp
            </span>
          </Link>
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/images/trust.webp"
            alt="Career Guidance"
            width={400}
            height={300}
          />
        </div>
      </div>

      <div className="bg-[#f2f5fa] py-16">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-[68rem] mx-auto space-y-8 md:space-y-0 md:space-x-8">
          <div className="flex-shrink-0">
            <Image
              src="/images/support.webp"
              alt="Career Guidance"
              width={500}
              height={500}
            />
          </div>
          <div className="text-center md:text-left max-w-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Receive Complete Support Until You Join the Best College
            </h2>
            <ul className="list-none space-y-4 text-[1.1rem] text-gray-600 mb-6">
              <li className="flex items-start">
                <span className="text-purple-600 font-semibold mr-2">✓</span>
                Mentorship by seniors in college and industry experts
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 font-semibold mr-2">✓</span>
                Exclusive access to events and webinars conducted by College
                Dost
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 font-semibold mr-2">✓</span>
                Live Q&A Sessions
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 font-semibold mr-2">✓</span>
                Latest updates related to counselling
              </li>
            </ul>
            <Link href="/" passHref>
              <span className="bg-purple-600 text-white font-semibold py-3 px-16 rounded-[5px] hover:bg-purple-700 transition">
                Join WhatsApp
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
