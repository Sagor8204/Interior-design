

import contactImg from "@/images/contact-image.jpg";
import Image from "next/image";
import Link from 'next/link';

export default function Contact() {
  return (
    <>
      <div className="section-bg text-white flex flex-col">
        <h1 className="text-8xl GolosText mt-15">Contact Us</h1>
        <div className="flex items-center text-xl mt-3">
          <Link
            href="/"
            className="hover:text-(--prim) transition-all duration-300"
          >
            Home
          </Link>
          <i className="ri ri-arrow-right-wide-fill mt-1"></i>
          <h2 className="GolosText">Contact Us</h2>
        </div>
      </div>

      <div className="px-[8%] lg:px-[12%] py-20">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-1/3 title pt-8">
            <span className="rounded-full title-span border border-gray-400 px-6 py-2 GolosText uppercase font-bold">
              get in touch
            </span>
          </div>

          <div className="w-full lg:w-2/3">
            <h1 className="CalSans text-4xl md:text-7xl">
              Have a Project in{" "}
              <span className="text-(--prim)">Mind? Let’s Make</span> It Happen
            </h1>
          </div>
        </div>

        <div className="w-full lg:w-1/2 mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <h2 className="text-gray-400 CalSans tracking-wider">Address:</h2>
              <p className="GolosText text-xl mt-5">
                5609 E Sprague Ave, Spokane Valley, WA 99212, USA
              </p>
            </div>
            <div>
              <h2 className="text-gray-400 mb-5 CalSans tracking-wider">
                Support
              </h2>
              <span className="text-(--prim) font-bold">
                +(91) 123 456 7980
              </span>
              <p className="GolosText text-2xl font-bold">
                support@example.com
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="flex justify-between items-center flex-col lg:flex-row gap-15">
            <div className="w-full lg:w-1/2">
              <Image
                src={contactImg}
                alt="contactImg"
                className="w-full h-full rounded-2xl object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col GolosText">
                  <label className="font-semibold mb-2">Full Name*</label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="bg-white border border-gray-300 font-semibold rounded-lg px-3 py-3 outline-none focus:border-(--prim) transition-all duration-300"
                  />
                </div>
                <div className="flex flex-col GolosText">
                  <label className="font-semibold mb-2">Phone*</label>
                  <input
                    type="number"
                    placeholder="Phone"
                    className="bg-white border border-gray-300 font-semibold rounded-lg px-3 py-3 outline-none focus:border-(--prim) transition-all duration-300"
                  />
                </div>
                <div className="flex flex-col GolosText">
                  <label className="font-semibold mb-2">Email Address*</label>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="bg-white border border-gray-300 font-semibold rounded-lg px-3 py-3 outline-none focus:border-(--prim) transition-all duration-300"
                  />
                </div>
                <div className="flex flex-col GolosText">
                  <label className="font-semibold mb-2">Subject*</label>
                  <input
                    type="text"
                    placeholder="I want to"
                    className="bg-white border border-gray-300 font-semibold rounded-lg px-3 py-3 outline-none focus:border-(--prim) transition-all duration-300"
                  />
                </div>
              </div>
              <div className="flex flex-col GolosText mt-5">
                <label className="font-semibold mb-2">Your Message*</label>
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="bg-white border border-gray-300 font-semibold rounded-lg px-3 py-3 outline-none focus:border-(--prim) transition-all duration-300"
                ></textarea>
              </div>

              <div className="mt-5">
                <button className="px-5 py-3 bg-white border border-gray-300 rounded-lg GolosText transition-all duration-300 hover:bg-(--prim) hover:text-white font-semibold cursor-pointer hover:">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-map h-150">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7498128.352128848!2d85.05332525918655!3d23.41730456294208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1767716075595!5m2!1sen!2sbd"
          className="w-full rounded-2xl brightness-100 grayscale"
          width="100%"
          height="100%"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}
