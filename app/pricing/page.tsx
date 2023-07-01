export default function Pricing() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-4">Pricing/Plans</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {/* Philippines */}
        <div className="bg-white rounded-md shadow-md p-6">
          <h2 className="text-xl font-bold mb-2">Philippines</h2>
          <p className="text-gray-600">Price: $19.99/month</p>
          <p className="text-gray-600">Lorem ipsum dolor sit amet.</p>
        </div>

        {/* Indonesia */}
        <div className="bg-white rounded-md shadow-md p-6">
          <h2 className="text-xl font-bold mb-2">Indonesia</h2>
          <p className="text-gray-600">Price: $14.99/month</p>
          <p className="text-gray-600">Lorem ipsum dolor sit amet.</p>
        </div>

        {/* Malaysia */}
        <div className="bg-white rounded-md shadow-md p-6">
          <h2 className="text-xl font-bold mb-2">Malaysia</h2>
          <p className="text-gray-600">Price: $17.99/month</p>
          <p className="text-gray-600">Lorem ipsum dolor sit amet.</p>
        </div>

        {/* Singapore */}
        <div className="bg-white rounded-md shadow-md p-6">
          <h2 className="text-xl font-bold mb-2">Singapore</h2>
          <p className="text-gray-600">Price: $24.99/month</p>
          <p className="text-gray-600">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
  );
}
