import Link from "next/link";

export default function Banner() {
  return (
    <>
      <div className="px-[8%] lg:px-[12%] py-30 banner md:h-[90vh] flex flex-col items-center justify-center">
        <div className="title flex flex-col items-center justify-center">
          <span className="title-span text-white border border-gray-400 px-6 py-2 mt-4 GolosText uppercase font-bold rounded-2xl">
            Our Services
          </span>
          <h1 className="CalSans text-center text-5xl md:text-8xl w-full lg:w-[70%] my-5 text-white">
            Explore our{" "}
            <span className="text-(--prim)">comprehensive interior design</span>{" "}
            services
          </h1>
          <Link href="/contact">
            <button className="rounded-full cursor-pointer px-10 py-4 GolosText text-white bg-[#5b6063] transition-all text-4xl duration-300 hover:bg-(--prim)">
                Get A Quote
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
