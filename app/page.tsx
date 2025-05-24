import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="py-16 bg-gradient-to-b from-black to-[#111]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-16 lg:flex-row flex-col">
            <div className="flex-1 max-w-[600px]">
              <h2 className="text-5xl font-semibold mb-8 leading-tight bg-gradient-to-r from-white to-[#aaa] bg-clip-text text-transparent">
                Pop into the moment. Stay curious.
              </h2>
              <ul className="list-none p-0 m-0 mb-8">
                <li className="text-2xl py-3 flex items-center gap-4">🧭 Learn as you go</li>
                <li className="text-2xl py-3 flex items-center gap-4">🫧 Daily bubbles spark curiosity</li>
                <li className="text-2xl py-3 flex items-center gap-4">🚴‍♀️ Discover insights on your route</li>
                <li className="text-2xl py-3 flex items-center gap-4">✈️ Enrich every journey with knowledge</li>
              </ul>
              <p className="text-xl opacity-80 mb-10 leading-relaxed">
                Each day, get a spontaneous notification with a fun or insightful bubble
                tied to your location.
              </p>
              <a
                href="https://apps.apple.com/fr/app/unbubl/id6744279413?l=en-GB"
                className="inline-block transition-transform hover:-translate-y-0.5"
              >
                <Image
                  src="/app-store.svg"
                  alt="Download on the App Store"
                  width={200}
                  height={50}
                  className="h-[50px] w-auto"
                />
              </a>
              <div className="mt-6">
                <a
                  href="https://www.producthunt.com/posts/unbubl?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-unbubl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=964856&theme=light&t=1747231805117"
                    alt="UNBUBL - Discover hidden stories around you | Product Hunt"
                    width={250}
                    height={54}
                  />
                </a>
              </div>
            </div>
            <div className="flex-1 flex justify-center items-center perspective-1000">
              <div className="w-[300px] h-[650px] relative transform rotate-y-[-15deg] transition-transform duration-300 hover:rotate-y-[-5deg] bg-[#1a1a1a] rounded-[45px] shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_0_0_2px_rgba(255,255,255,0.03),0_0_30px_rgba(0,0,0,0.5)] border border-white/10">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[94%] h-[94%] rounded-[38px] object-cover shadow-lg"
                >
                  <source src="/demo.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 