import bgHero from '../assets/img/bg-Hero.jpeg';

const Hero = () => {
  return (
    <div id="home" className="relative flex justify-center flex-col md:h-svh h-[60vh] top-20 mb-30">
      <div style={{ backgroundImage: `url(${bgHero})` }} className="absolute inset-0 z-0 bg-cover bg-center blur-[3px]"></div>

      <div className="relative md:flex-2 justify-center items-center flex flex-col p-10 z-10 ">
        <div className="flex flex-col justify-center items-center bg-backup/70 p-10 rounded-xl">
          <h1 className="text-4xl md:text-8xl font-bold mb-3 drop-shadow-xl text-center">Cookies forever</h1>
          <p className="flex italic text-xl text-center">eat cookies and you will get luckies</p>
        </div>
        <a href="#" className="bg-amber-600 px-4 py-2 mt-10 md:text-xl text-black hover:bg-neutral-300 hover:text-black transition-all shadow-lg rounded-md">
          GET COOKIES
        </a>
      </div>
    </div>
  );
};

export default Hero;
