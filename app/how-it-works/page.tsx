export default function HowItWorks() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-4">How It Works</h1>

      <div className="flex flex-col md:flex-row md:space-x-6">
        {/* Step 1 */}
        <div className="flex flex-col iatems-center">
          <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mb-4">
            1
          </div>
          <h2 className="text-xl font-bold mb-2">Step 1</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            sagittis tristique hendrerit.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center">
          <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mb-4">
            2
          </div>
          <h2 className="text-xl font-bold mb-2">Step 2</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            sagittis tristique hendrerit.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center">
          <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mb-4">
            3
          </div>
          <h2 className="text-xl font-bold mb-2">Step 3</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            sagittis tristique hendrerit.
          </p>
        </div>
      </div>
    </div>
  );
}
