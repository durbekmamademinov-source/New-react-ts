
function Main() {
    return (
        <main className="bg-gray-100 py-16">
            <div className="max-w-7xl mx-auto px-6">

                {/* Title */}
                <h2 className="text-3xl font-bold text-center mb-12">
                    Bizning xizmatlar
                </h2>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-8">

                    {/* Card 1 */}
                    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold mb-3">Web Development</h3>
                        <p className="text-gray-500">
                            Zamonaviy va tezkor web saytlar yaratamiz.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold mb-3">UI/UX Design</h3>
                        <p className="text-gray-500">
                            Foydalanuvchi uchun qulay dizaynlar qilamiz.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold mb-3">Mobile Apps</h3>
                        <p className="text-gray-500">
                            Android va iOS ilovalar ishlab chiqamiz.
                        </p>
                    </div>

                </div>

            </div>
        </main>
    )
}

export default Main
