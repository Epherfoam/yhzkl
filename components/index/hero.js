import Emphasize from "../emphasize";

const Hero = () => {
  return (
    <div class="flex flex-col-reverse text-center md:flex-row md:justify-between md:text-left w-full">
      <div class="flex flex-col space-y-4 content-center w-full md:w-4/5">
        <Emphasize customClass="text-4xl">こんにちは!</Emphasize>
        <h1 class="w-full">
          I'm <Emphasize type="1">Yehezkiel</Emphasize>👌🏻
        </h1>
        <p class="md:max-w-lg">
          I’m a highly curious 🤔 software developer 😳 that’s highly passionate
          about ✨ latest and upcoming tech ✨ in web 🌎 and mobile 🤳
          development.
        </p>
        <div>
          <a
            href="https://www.linkedin.com/in/yehezkiel-andrean-a32147193/"
            target="_blank"
          >
            LinkedIn
          </a>{" "}
          / <a target="_blank">Twitter</a> / <a target="_blank">GitHub</a>
        </div>
      </div>
      <div class="flex justify-center max-h-48 md:max-h-full mb-4 md:mb-0">
        <img class="object-scale-down p-4" src="../cheems.svg" />
      </div>
    </div>
  );
};

export default Hero
