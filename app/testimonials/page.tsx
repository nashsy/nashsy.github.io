export default function Testimonials() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-4">Testimonials</h1>

      <div className="flex justify-center space-x-4">
        {/* Discord Testimonials */}
        <a
          href="https://discord.com/testimonials"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600"
        >
          Discord Testimonials
        </a>

        {/* Facebook Testimonials */}
        <a
          href="https://facebook.com/testimonials"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600"
        >
          Facebook Testimonials
        </a>
      </div>
    </div>
  );
}
