function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center bg-slate-100 px-6">
      <h1 className="text-6xl font-bold text-slate-800">
        AI-Powered Decision Intelligence
      </h1>

      <p className="mt-6 text-xl text-gray-600 max-w-3xl">
        Helping citizens, communities and governments make
        smarter, faster and more transparent decisions using
        Google's Gemini AI.
      </p>

      <button className="mt-10 bg-blue-600 text-white px-8 py-4 rounded-xl text-lg hover:bg-blue-700 transition">
        Explore Dashboard
      </button>
    </section>
  );
}

export default Hero;