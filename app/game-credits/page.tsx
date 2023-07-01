import Image from "next/image";
export default function GameCredits() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-4">Game Credits</h1>
      <div className="flex flex-col gap-y-5">
        <div>
          <h1 className="text-2xl mb-4">Game Currencies</h1>
          <div className="flex items-center h-1/3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Service Card 2 */}
              <div className="bg-white h-[193px] w-[347px] border-gray-400 hover:bg-gray-200 border rounded-md shadow-md p-6 flex items-center justify-center">
                <Image
                  src="/cherry.webp"
                  width={347}
                  height={193}
                  alt="Picture of the author"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-2xl mb-4">Game Currency</h1>
          <div className="flex items-center h-1/3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Service Card 2 */}
              <div className="bg-white border-gray-400 hover:bg-gray-200 border rounded-md shadow-md p-6 flex items-center justify-center">
                <Image
                  src="/DragonNestLogo.png"
                  width={300}
                  height={300}
                  alt="Picture of the author"
                />
              </div>

              {/* Service Card 2 */}
              <div className="bg-white border-gray-400 hover:bg-gray-200 border rounded-md shadow-md p-6 flex items-center justify-center">
                <Image
                  src="/DragonNestLogo.png"
                  width={300}
                  height={300}
                  alt="Picture of the author"
                />
              </div>

              {/* Service Card 2 */}
              <div className="bg-white border-gray-400 hover:bg-gray-200 border rounded-md shadow-md p-6 flex items-center justify-center">
                <Image
                  src="/DragonNestLogo.png"
                  width={300}
                  height={300}
                  alt="Picture of the author"
                />
              </div>

              {/* Add more service cards as needed */}
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-2xl mb-4">We Sell Game</h1>
          <div className="flex items-center h-1/3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Service Card 2 */}
              <div className="bg-white border-gray-400 hover:bg-gray-200 border rounded-md shadow-md p-6 flex items-center justify-center">
                <Image
                  src="/DragonNestLogo.png"
                  width={300}
                  height={300}
                  alt="Picture of the author"
                />
              </div>

              {/* Service Card 2 */}
              <div className="bg-white border-gray-400 hover:bg-gray-200 border rounded-md shadow-md p-6 flex items-center justify-center">
                <Image
                  src="/DragonNestLogo.png"
                  width={300}
                  height={300}
                  alt="Picture of the author"
                />
              </div>

              {/* Service Card 2 */}
              <div className="bg-white border-gray-400 hover:bg-gray-200 border rounded-md shadow-md p-6 flex items-center justify-center">
                <Image
                  src="/DragonNestLogo.png"
                  width={300}
                  height={300}
                  alt="Picture of the author"
                />
              </div>

              {/* Add more service cards as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
