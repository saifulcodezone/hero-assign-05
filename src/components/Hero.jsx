import bannerImg from "../assets/banner-stack.png";

function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Build Your Ideal{" "}
            <span className="font-inter font-extrabold brand-gradient-text">
              Development Stack
            </span>
          </h1>

          <p className="mt-5 text-gray-600 text-lg max-w-xl">
            Curate the technologies you love, compare difficulty and ratings,
            and design a stack that matches your project needs — all in one
            place.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <a
              href="#technologies"
              className="brand-gradient-bg text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:opacity-90 transition"
            >
              Explore Technologies
            </a>
            <button className="px-6 py-3 rounded-lg font-semibold border-2 border-gray-300 text-gray-800 hover:border-pink-500 hover:text-pink-600 transition">
              Learn More
            </button>
          </div>

          <div className="mt-8 flex items-center gap-6 text-sm text-gray-500"></div>
        </div>

        <div className="flex justify-center">
          <img
            src={bannerImg}
            alt="Developer workspace"
            className="w-full max-w-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
