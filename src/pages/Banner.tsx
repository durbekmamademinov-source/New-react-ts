import future from "../assets/future.png"
function Banner() {
  return (
    <div>
          <section className="bg-gray-500 text-white">
              <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between">

                  {/* Left side */}
                  <div className="max-w-xl">
                      <h1 className="text-4xl md:text-5xl font-bold mb-4">
                          Build Your Future 🚀
                      </h1>
                      <p className="text-gray-400 mb-6">
                          Zamonaviy web saytlar yaratish uchun eng yaxshi joy. Biz bilan o‘rgan va rivojlan!
                      </p>

                      <div className="flex gap-4">
                          <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg hover:bg-yellow-300 transition">
                              Boshlash
                          </button>
                          <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
                              Batafsil
                          </button>
                      </div>
                  </div>

                  {/* Right side (image) */}
                  <div className="mt-10 md:mt-0">
                      <img
                          src={future}
                          alt="banner"
                          className="rounded-2xl shadow-lg h-110 w-md"
                      />
                  </div>

              </div>
          </section>
    </div>
  )
}

export default Banner
