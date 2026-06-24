import Hero from "../components/Hero";
import CategorySection from "../components/CategorySection";
import WhatsAppButton from "../components/WhatsAppButton";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import { useEffect, useRef } from "react";
import Delivery from "../components/Delivery"
function Home() {
    const productdata = [
        {
            img: "https://i.pinimg.com/1200x/d1/90/12/d1901254f800a7d96b1f0bac7e5d47df.jpg",
            title: "Cherry Pink Saree",
            price: "₹8,399",
            save: "₹8,400"
        },
        {
            img: "https://i.pinimg.com/736x/24/e8/d1/24e8d1ff1457479b87314bedc552ac21.jpg",
            title: "Plum Saree",
            price: "₹9,249",
            save: "₹9,250"
        },
        {
            img: "https://i.pinimg.com/736x/70/dd/0a/70dd0aa1853a4bc75a4fa3ca86465f66.jpg",
            title: "Sea Green Saree",
            price: "₹8,799",
            save: "₹8,800"
        },
        {
            img: "https://i.pinimg.com/1200x/3e/69/24/3e6924d78e693f67082d4492ed01a010.jpg",
            title: "Olive Green Saree",
            price: "₹7,349",
            save: "₹7,350"
        }
    ];
    const items = [
        {
            id: 1,
            name: "Royal Banarasi Bridal Saree",
            image: "https://i.pinimg.com/1200x/29/fa/42/29fa42f18726b403c71739dfa8b0254f.jpg",
            price: "₹850 (Wholesale)",
        },
        {
            id: 2,
            name: "Designer Wedding Silk Saree",
            image: "https://i.pinimg.com/736x/88/1f/ba/881fba13d3c7c76328fff8ec0e9d36bb.jpg",
            price: "₹1200 (Wholesale)",
        },
        {
            id: 3,
            name: "Premium Red Bridal Saree",
            image: "https://i.pinimg.com/736x/e6/f5/d7/e6f5d7f6793eb65dc7df990061dff308.jpg",
            price: "₹999 (Wholesale)",
        },
        {
            id: 4,
            name: "Premium Red Bridal Saree",
            image: "https://i.pinimg.com/736x/27/40/38/274038d869be589edfe90d6a6d44ed00.jpg",
            price: "₹999 (Wholesale)",
        },
    ];

    const scrollRef = useRef();
    useEffect(() => {
        let speed = 0.8; // control smoothness
        let frame;

        const animate = () => {
            if (scrollRef.current) {
                scrollRef.current.scrollLeft += speed;

                // reset smoothly (no jump feel)
                if (
                    scrollRef.current.scrollLeft >=
                    scrollRef.current.scrollWidth / 2
                ) {
                    scrollRef.current.scrollLeft = 0;
                }
            }

            frame = requestAnimationFrame(animate);
        };

        frame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(frame);
    }, []);
    return (
        <>
            <Hero />

            <CategorySection />


            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-5">

                    {/* Heading */}
                    <div className="text-center mb-14">
                        <p className="text-[#8B0A13] uppercase tracking-[4px] text-sm">
                            Our Collection
                        </p>

                        <h2
                            className="text-4xl md:text-6xl text-[#8B0A13]"
                            style={{ fontFamily: "Cormorant Garamond, serif" }}
                        >
                            Featured Sarees
                        </h2>
                    </div>

                    {/* Products */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

                        {products.slice(0, 4).map((item) => (
                            <div
                                key={item.id}
                                className="group bg-white  overflow-hidden border border-gray-100 hover:shadow-xl transition duration-300"
                            >
                                <div className="overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-[320px] object-cover group-hover:scale-105 transition duration-500"
                                    />
                                </div>

                                <div className="p-4">
                                    <p className="text-xs text-[#8B0A13] uppercase tracking-wider">
                                        {item.category}
                                    </p>

                                    <h3 className="font-semibold text-gray-800 mt-2 line-clamp-2">
                                        {item.title}
                                    </h3>

                                    <p className="text-sm text-gray-500 mt-2">
                                        Fabric: {item.fabric}
                                    </p>

                                    <p className="text-sm font-medium text-[#8B0A13] mt-1">
                                        MOQ: {item.moq}
                                    </p>
                                </div>
                            </div>
                        ))}

                    </div>

                    {/* Button */}
                    <div className="text-center mt-12">
                        <Link
                            to="/collections"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-[#8B0A13] text-white  font-medium hover:bg-[#6d0810] transition"
                        >
                            View All Collection →
                        </Link>
                    </div>

                </div>
            </section>
            <section className="py-20 bg-gradient-to-r from-pink-50 via-white to-yellow-50">

                <div className="text-center mb-10">

                    {/* top line design */}
                    <div className="flex items-center justify-center gap-3 mb-3">
                        <span className="w-12 h-[2px] bg-[#8B0A13]"></span>
                        <span className="w-2 h-2 bg-[#8B0A13] rotate-45"></span>
                        <span className="w-12 h-[2px] bg-[#8B0A13]"></span>
                    </div>

                    {/* main heading */}
                    <h2 className="text-4xl md:text-5xl font-semibold text-[#8B0A13] tracking-wide">
                        Wedding Vibes
                    </h2>

                    {/* bottom line design */}
                    <div className="flex items-center justify-center gap-3 mt-3">
                        <span className="w-20 h-[1px] bg-[#8B0A13]"></span>
                        <span className="text-[#8B0A13] text-xl">❦</span>
                        <span className="w-20 h-[1px] bg-[#8B0A13]"></span>
                    </div>

                </div>

                {/* VIEWPORT */}
                <div className="overflow-hidden w-full">

                    {/* TRACK */}
                    <div className="flex w-[200%] animate-marquee gap-6">

                        {[...items, ...items].map((item, i) => (
                            <div key={i} className="w-[300px] flex-shrink-0">
                                <img
                                    src={item.image}
                                    className="h-[350px] w-full object-cover  shadow-lg"
                                />
                            </div>
                        ))}

                    </div>

                </div>

            </section>
            <section className="bg-white">

                {/* SECTION TITLE */}
                <div className="text-center py-12">

                    {/* TOP SMALL DECOR LINE */}
                    <div className="flex items-center justify-center gap-3 mb-3">
                        <span className="w-10 h-[1px] bg-[#8B0A13]"></span>

                        <span className="text-[#8B0A13] text-sm tracking-[3px] uppercase">
                            Premium Collection
                        </span>

                        <span className="w-10 h-[1px] bg-[#8B0A13]"></span>
                    </div>

                    {/* MAIN TITLE */}
                    <h2 className="text-3xl md:text-5xl font-serif font-semibold tracking-widest text-[#8B0A13] uppercase">
                        Ready To Wear Sarees
                    </h2>

                    {/* BOTTOM DECOR LINE */}
                    <div className="flex items-center justify-center mt-4">
                        <span className="w-20 h-[2px] bg-[#8B0A13]"></span>

                        <span className="mx-3 text-[#8B0A13]">❦</span>

                        <span className="w-20 h-[2px] bg-[#8B0A13]"></span>
                    </div>

                </div>

                {/* BIG BANNER */}
                <div className="relative mx-5 md:mx-10  overflow-hidden mb-12">
                    <img
                        src="https://i.pinimg.com/1200x/8b/cc/2d/8bcc2d45d6122fc6421999d9a6eb90ec.jpg"
                        className="w-full h-[300px] md:h-[500px] object-cover"
                    />


                </div>

                {/* PRODUCT GRID */}
                <div className="max-w-7xl mx-auto px-5 pb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

                    {productdata.map((item, index) => (
                        <div
                            key={index}
                            className="group bg-white  overflow-hidden shadow-md hover:shadow-xl transition"
                        >

                            {/* IMAGE */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={item.img}
                                    className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-500"
                                />

                                {/* SAVE BADGE */}
                                <div className="absolute top-3 left-3 bg-red-600 text-white text-xs px-3 py-1 rounded">
                                    SAVE {item.save}
                                </div>
                            </div>

                            {/* DETAILS */}
                            <div className="p-4 text-center">
                                <h3 className="text-sm tracking-wide text-gray-700 uppercase">
                                    {item.title}
                                </h3>

                                <p className="mt-2 text-[#8B0A13] font-semibold text-lg">
                                    {item.price}{" "}
                                    <span className="line-through text-gray-400 text-sm ml-2">
                                        ₹16,999
                                    </span>
                                </p>

                                <p className="text-green-600 text-sm">50% Off</p>
                            </div>

                        </div>
                    ))}

                </div>
            </section>


            {/* Why Choose Us */}
            <section className="py-24 bg-gradient-to-b from-[#fff] via-[#faf7f7] to-white">
                <div className="max-w-7xl mx-auto px-5">

                    {/* Heading */}
                    <div className="text-center mb-16">

                        <p className="uppercase tracking-[6px] text-[#8B0A13] text-sm">
                            Why Choose Us
                        </p>

                        <h2
                            className="text-5xl md:text-6xl mt-4 text-[#8B0A13]"
                            style={{ fontFamily: "Cormorant Garamond, serif" }}
                        >
                            Trusted By Retailers Across India
                        </h2>

                        <div className="flex justify-center items-center gap-3 mt-5">
                            <div className="w-16 h-[1px] bg-[#8B0A13]" />
                            <span className="text-[#8B0A13] text-xl">❦</span>
                            <div className="w-16 h-[1px] bg-[#8B0A13]" />
                        </div>

                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

                        <div className="group bg-white/80 backdrop-blur-xl border border-[#8B0A13]/10 rounded-3xl p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">

                            <h3 className="text-5xl font-bold text-[#8B0A13]">
                                500+
                            </h3>

                            <p className="mt-3 text-gray-600 uppercase tracking-wider">
                                Retail Partners
                            </p>

                        </div>

                        <div className="group bg-white/80 backdrop-blur-xl border border-[#8B0A13]/10 rounded-3xl p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">

                            <h3 className="text-5xl font-bold text-[#8B0A13]">
                                2000+
                            </h3>

                            <p className="mt-3 text-gray-600 uppercase tracking-wider">
                                Saree Designs
                            </p>

                        </div>

                        <div className="group bg-white/80 backdrop-blur-xl border border-[#8B0A13]/10 rounded-3xl p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">

                            <h3 className="text-5xl font-bold text-[#8B0A13]">
                                15+
                            </h3>

                            <p className="mt-3 text-gray-600 uppercase tracking-wider">
                                Years Experience
                            </p>

                        </div>

                        <div className="group bg-white/80 backdrop-blur-xl border border-[#8B0A13]/10 rounded-3xl p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">

                            <h3 className="text-5xl font-bold text-[#8B0A13]">
                                100%
                            </h3>

                            <p className="mt-3 text-gray-600 uppercase tracking-wider">
                                Quality Assurance
                            </p>

                        </div>

                    </div>

                </div>
            </section>

            {/* Featured Collection */}
   <div className="grid md:grid-cols-4 gap-6">

  {products.slice(5, 9).map((item) => (
    <div
      key={item.id}
      className="group bg-white border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition"
    >

      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-[350px] object-cover group-hover:scale-105 transition duration-500"
        />

        <div className="absolute top-3 left-3 bg-[#8B0A13] text-white text-xs px-3 py-1">
          BULK DEAL
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-4 text-center">

        <h3 className="font-semibold text-gray-800 uppercase tracking-wide">
          {item.title}
        </h3>

        <p className="text-[#8B0A13] mt-2 font-medium">
          ₹{item.price || "799"} / piece
        </p>

        <p className="text-green-600 text-sm mt-1">
          MOQ: {item.moq || "5 Pieces"}
        </p>

        <a
          href="https://wa.me/919054981808"
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-4 bg-[#8B0A13] text-white px-6 py-2 text-sm hover:bg-[#6d0810] transition"
        >
          ORDER NOW
        </a>

      </div>

    </div>
  ))}
</div>
           <Delivery/>
            <WhatsAppButton />
        </>
    );
}

export default Home;