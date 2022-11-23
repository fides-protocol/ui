import Head from "next/head";
import Navbar from "@components/Navbar";
import Section from "@components/Section";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fides</title>
        <meta
          name="description"
          content="What happens in blockchain, stays in blockchain"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <main className="flex min-h-screen w-screen flex-col items-center justify-center bg-brown-paper bg-cover">
        <img
          className="absolute top-0 mt-8 w-full"
          src="assets/greek_pattern.jpg"
          alt="Greek Pattern"
        />

        <Navbar />
        <Section>
          <div className="grid h-full grid-cols-1 md:grid-cols-2">
            <aside className="flex h-screen w-screen flex-col items-end justify-center text-white md:h-full md:w-auto">
              <div className="w-full p-10 md:w-[70%] md:p-0">
                <h1 className="mb-20 w-full text-center font-roman-regular text-4xl md:text-6xl">
                  WHAT HAPPENS IN BLOCKCHAIN. STAYS IN BLOCKCHAIN.
                </h1>

                <div className="flex flex-col items-center font-roman-regular">
                  <p className="text-center">Receive updates instantly</p>
                  <h2 className="mb-4 text-center text-2xl md:text-3xl">
                    JOIN OUR NEWSLETTER
                  </h2>

                  <form
                    action="https://formsubmit.co/optimusupperman@gmail.com"
                    method="POST"
                  >
                    <div className="flex h-12 flex-col font-chant-regular text-xl md:flex-row">
                      <input
                        className="mb-4 border-2 border-gold bg-transparent p-4 text-center outline-none md:mb-0"
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                      />
                      <button
                        type="submit"
                        className="flex items-center justify-center bg-gold p-4 font-chant-bold"
                      >
                        <span className="text-brown">Subscribe Now</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </aside>

            <aside className="flex justify-center md:justify-start">
              <img
                className="relative md:absolute md:bottom-0 md:h-[80vh]"
                src="assets/hero.png"
                alt="Hero Woman"
              />
            </aside>
          </div>
        </Section>

        <img
          className="absolute bottom-0 z-20 mb-8 w-full"
          src="assets/greek_pattern.jpg"
          alt="Greek Pattern"
        />
      </main>
    </div>
  );
}
