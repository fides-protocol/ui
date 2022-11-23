const SOCIALS = [
  {
    name: "Discord",
    imgPath: "assets/discord_gold.svg",
    url: "https://fidesprotocol.io/",
  },
  {
    name: "Twitter",
    imgPath: "assets/twitter_gold.svg",
    url: "https://fidesprotocol.io/",
  },
];

export default function Navbar() {
  return (
    <nav className="absolute top-[15vh] z-20 flex h-[5vw] w-full max-w-[1800px] flex-col items-center justify-center px-12 md:flex-row md:justify-between">
      <span className="mb-4 flex items-center md:mb-0">
        <img
          className="mr-4 h-[5vh]"
          src="assets/laurel_gold.png"
          alt="Fides Logo"
        />
        <h1 className="font-roman-regular text-2xl text-gold">FIDES</h1>
      </span>

      <span className="flex items-center">
        {SOCIALS.map((e, idx) => (
          <a
            className="ml-8 hover:cursor-pointer"
            key={idx}
            href={e.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={e.imgPath} alt={`${e.name} Logo`} />
          </a>
        ))}
      </span>
    </nav>
  );
}
