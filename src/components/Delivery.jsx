import { Truck, MessageCircle, ShieldCheck } from "lucide-react";

export default function WhyShopSection() {
  const items = [
    {
      icon: <Truck size={45} strokeWidth={1.5} />,
      title: "FREE SHIPPING",
      text: "Free worldwide shipping and returns - customs and duties taxes included",
    },
    {
      icon: <MessageCircle size={45} strokeWidth={1.5} />,
      title: "CUSTOMER SERVICE",
      text: "We are available from monday to friday to answer your questions.",
    },
    {
      icon: <ShieldCheck size={45} strokeWidth={1.5} />,
      title: "SECURE PAYMENT",
      text: "Your payment information is processed securely.",
    },
  ];

  return (
    <section className="bg-white py-20">

      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-4xl tracking-[8px] font-serif">
          WHY SHOP WITH US?
        </h2>

        <div className="flex justify-center items-center gap-4 mt-8">
          <span className="w-14 h-[2px] bg-red-700"></span>
          <span className="text-red-900 text-xl">♥</span>
          <span className="w-14 h-[2px] bg-red-900"></span>
        </div>
      </div>


      {/* Cards */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        {items.map((item,index)=>(
          <div
          key={index}
          className="
          relative
          border border-red-900
        
          h-64
          flex flex-col
          items-center
          justify-center
          text-center
          px-10
          "
          >

            {/* icon circle */}
            <div className="
            absolute -top-12
            w-28 h-28
            rounded-full
            bg-red-700
            flex items-center
            justify-center
            ">
              {item.icon}
            </div>


            <h3 className="
            mt-10
            text-lg
            tracking-[5px]
            mb-5
            ">
              {item.title}
            </h3>


            <p className="
            text-white-700
            leading-8
            ">
              {item.text}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}