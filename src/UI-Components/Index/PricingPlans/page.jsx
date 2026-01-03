"use client";

const PricingPlansData = [
  {
    id: 1,
    plan: "Basic Plan",
    desc: "Our Foundation plan offers essential at an affordable price,",
    price: "$99.0",
    planInfo: [
      "Individuals & small projects",
      "Access to design features",
      "Limited library of decoration item",
      "Email support",
      "Monthly updates",
    ],
  },
  {
    id: 2,
    plan: "Premium Plan",
    desc: "Our Foundation plan offers essential at an affordable price,",
    price: "$169.0",
    planInfo: [
      "Individuals & small projects",
      "Access to design features",
      "Limited library of decoration item",
      "Email support",
      "Bi-weekly updates",
    ],
  },
];

export default function PricingPlans() {
  return (
    <>
      <div className="px-[8%] lg:px-[12%] py-20 mt-0 md:mt-[17%]">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-1/3 title pt-8">
            <span className="rounded-full title-span border border-gray-400 px-6 GolosText uppercase font-bold">
              About Olivion
            </span>
          </div>
          <div className="w-full lg:w-2/3">
            <h1 className="CalSans text-5xl md:text-6xl mb-5 w-full lg:w-[60%]">
              We Shape{" "}
              <span className="text-(--prim)">Interior Designs, Crafting</span>{" "}
              Timeless and Inspiring Spaces
            </h1>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-5 h-full mt-10">
          <div className="w-full lg:w-1/2">
            <div className="pricing-wrap h-full rounded-2xl p-5 pt-20">
              <h1 className="CalSans text-4xl md:text-5xl mb-5 w-full text-white">
                We Shape{" "}
                <span className="text-(--prim)">
                  Interior Designs, Crafting
                </span>{" "}
                Timeless and Inspiring Spaces
              </h1>
            </div>
          </div>

          <div className="w-full lg:w-1/1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {PricingPlansData.map((plan, index) => (
                <div
                  key={index}
                  className="pricing-card bg-white shadow p-5 rounded-2xl"
                >
                  <h2 className="GolosText font-semibold text-3xl mb-5">
                    {plan.plan}
                  </h2>
                  <p className="text-gray-500 text-[15px] lg:text-[20px]">
                    {plan.desc}
                  </p>
                  <h1 className="text-6xl lg:text-7xl mt-5 text-(--prim) CalSans flex border-b border-gray-300 p-3">
                    {plan.price}{" "}
                    <span className="text-xl text-gray-600">/ Per Month</span>
                  </h1>
                  <div className="flex flex-col gap-2 my-5">
                    {plan.planInfo.map((info) => (
                      <p key={info} className="text-gray-800 font-semibold text-[15px] GolosText">
                        <i className="bi bi-check-circle-fill text-(--prim)"></i>{" "}
                        {info}
                      </p>
                    ))}
                  </div>

                  <button className="border border-gray-300 GolosText rounded-full px-4 py-2 hover:bg-(--prim) hover:text-white  cursor-pointer hover:border-transparent transition-all duration-300">
                    Get Started Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
