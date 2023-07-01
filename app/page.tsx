import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <div className="flex items-center h-5/6 justify-evenly">
        <div className="w-1/3">
          <Image
            src="/nash.png"
            width={10000}
            height={10000}
            alt="Picture of the author"
          />
        </div>
        <div className="w-1/3 bg-red">
          <div className="text-7xl font-bold">
            Nash Sy Middleman Service & Game Credits
          </div>
          <div className="py-5 text-xl">
            Transact in Any Game and Any Currency
          </div>
          <a
            href="/services"
            className="bg-fuchsia-600 text-white px-6 py-3 rounded-md hover:bg-fuchsia-700"
          >
            Explore Our Services
          </a>
        </div>
      </div>
    </div>
  );
}
