export default function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-[2.5rem]" src="https://www.apple.com/v/apple-watch-hermes/ag/images/hardware/blending__bzq4ywds3z36_large_2x.jpg" alt="product_image1" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="mb-3 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Apple Watch Hermès</h5>
                </a>
                <div className="flex items-center justify-between">
                    <span className="text-xl text-gray-900 dark:text-white">$1349</span>
                    <a href="/" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                </div>
            </div>
        </div>
    );
}
