export default function Services() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-4">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Service Card 1 */}
        <div className="bg-white rounded-md shadow-md p-6">
          <h2 className="text-xl font-bold mb-2">Service 1</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            sagittis tristique hendrerit.
          </p>
        </div>

        {/* Service Card 2 */}
        <div className="bg-white rounded-md shadow-md p-6">
          <h2 className="text-xl font-bold mb-2">Service 2</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            sagittis tristique hendrerit.
          </p>
        </div>

        {/* Service Card 3 */}
        <div className="bg-white rounded-md shadow-md p-6">
          <h2 className="text-xl font-bold mb-2">Service 3</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            sagittis tristique hendrerit.
          </p>
        </div>

        {/* Add more service cards as needed */}
      </div>
    </div>
  );
}
