
function Login() {
  return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
          <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

              <h2 className="text-2xl font-bold text-center mb-5">
                  Login
              </h2>

              <form className="flex flex-col gap-4">

                  <input
                      type="email"
                      placeholder="Email kiriting"
                      className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      required
                  />

                  <input
                      type="password"
                      placeholder="Parol kiriting"
                      className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      required
                  />

                  <button
                      type="submit"
                      className="bg-yellow-400 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition"
                  >
                      Kirish
                  </button>

              </form>

          </div>
      </div>
  )
}

export default Login
