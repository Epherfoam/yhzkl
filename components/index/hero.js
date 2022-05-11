import Emphasize from "../emphasize";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse text-center h-screen justify-center md:flex-row md:justify-between md:text-left w-full">
      <div className="flex flex-col space-y-4 justify-center content-center w-full md:w-4/5">
        <Emphasize customClass={"text-4xl"}>こんにちわssup!</Emphasize>
        <h1 className="w-full">
          I&apos;m <Emphasize type="1">Yehezkiel</Emphasize>👌🏻
        </h1>
        <p className="md:max-w-lg">
          I&apos;m a highly curious 🤔 software developer 😳 that&apos;s highly passionate
          about ✨ latest and upcoming tech ✨ in web 🌎 and mobile 🤳
          development.
        </p>
        <div>
          <a
            href="https://www.linkedin.com/in/yehezkiel-andrean-a32147193/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{" "}
          / <a 
              href="https://twitter.com/yhzkl_a"
              target="_blank"
              rel="noopener noreferrer"
          >
                Twitter
          </a>{" "}
          / <a
              href="https://github.com/Epherfoam/"
              target="_blank"
              rel="noopener noreferrer"
          >
                GitHub
          </a>
        </div>
      </div>
      <div className="flex justify-center max-h-48 md:max-h-full mb-4 md:mb-0">
        <img className="object-scale-down p-4" src="/images/cheems.svg" />
      </div>
    </div>
  );
};

export default Hero
