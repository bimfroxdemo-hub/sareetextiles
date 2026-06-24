function About() {
  return (
    <div className="bg-white">

      {/* HERO */}
      <div className="bg-gradient-to-r from-[#fff5f6] via-white to-[#fff5f6] py-24">
        <div className="max-w-6xl mx-auto text-center px-5">

          <p className="text-sm tracking-[6px] uppercase text-[#8B0A13]">
            About Our Company
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold text-[#8B0A13] mt-4">
            Premium Saree Wholesaler in India
          </h1>

          <div className="flex justify-center items-center gap-3 mt-6">
            <span className="w-20 h-[2px] bg-[#8B0A13]"></span>
            <span className="text-[#8B0A13] text-xl">❦</span>
            <span className="w-20 h-[2px] bg-[#8B0A13]"></span>
          </div>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-sm md:text-base">
            We are a trusted saree wholesaler providing premium quality sarees
            for retailers, boutiques, and resellers across India.
          </p>

        </div>
      </div>

      {/* STORY SECTION */}
      <div className="max-w-6xl mx-auto px-5 py-20 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h2 className="text-3xl font-semibold text-[#8B0A13] mb-4">
            Our Story
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Our journey started with a simple vision — to bring high-quality
            sarees at wholesale prices directly to retailers without middlemen.
            Over the years, we have built strong relationships with textile
            manufacturers and designers to ensure premium quality at the best price.
          </p>

          <p className="text-gray-600 mt-4 leading-relaxed">
            Today, we supply sarees across India including Banarasi, Silk,
            Wedding, Designer and Daily Wear collections. Our goal is to support
            small and medium businesses to grow in the fashion industry.
          </p>
        </div>

        <img
          src="https://i.pinimg.com/1200x/29/fa/42/29fa42f18726b403c71739dfa8b0254f.jpg"
          className="w-full h-[450px] object-cover shadow-lg"
        />
      </div>

      {/* MISSION SECTION */}
      <div className="bg-[#faf7f7] py-20">
        <div className="max-w-6xl mx-auto px-5 text-center">

          <h2 className="text-3xl md:text-4xl font-semibold text-[#8B0A13]">
            Our Mission
          </h2>

          <p className="text-gray-600 mt-5 max-w-3xl mx-auto">
            Our mission is to empower retailers and boutique owners by providing
            affordable, high-quality sarees with consistent designs, fast delivery,
            and reliable wholesale service.
          </p>

        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="max-w-6xl mx-auto px-5 py-20">

        <h2 className="text-3xl text-center font-semibold text-[#8B0A13] mb-12">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="border p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-[#8B0A13]">
              Premium Quality
            </h3>
            <p className="text-gray-600 mt-2">
              We ensure every saree is checked for fabric quality, stitching,
              and design perfection before dispatch.
            </p>
          </div>

          <div className="border p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-[#8B0A13]">
              Wholesale Pricing
            </h3>
            <p className="text-gray-600 mt-2">
              Direct factory pricing with no middlemen, giving you maximum profit margin.
            </p>
          </div>

          <div className="border p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-[#8B0A13]">
              Fast Delivery
            </h3>
            <p className="text-gray-600 mt-2">
              We ship across India with fast and safe packaging for bulk orders.
            </p>
          </div>

        </div>
      </div>

      

      {/* CTA */}
      <div className="py-20 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-[#8B0A13]">
          Let’s Grow Your Business Together
        </h2>

        <p className="text-gray-600 mt-3">
          Join hundreds of retailers who trust us for wholesale sarees
        </p>

        <a
          href="https://wa.me/919054981808"
          target="_blank"
          className="inline-block mt-8 bg-[#8B0A13] text-white px-10 py-3 hover:bg-[#6d0810]"
        >
          Contact on WhatsApp
        </a>

      </div>

    </div>
  );
}

export default About;