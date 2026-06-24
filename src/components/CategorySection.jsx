function CategorySection() {
  const categories = [
    {
      name: "Silk Sarees",
      image: "https://i.pinimg.com/736x/d7/0b/0f/d70b0f386570d054857725bbbc5d9bb5.jpg",
    },
    {
      name: "Banarasi",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c",
    },
    {
      name: "Wedding",
      image: "https://i.pinimg.com/1200x/2c/61/2a/2c612a0bf0016c9499b58346f68c8cf0.jpg",
    },
    {
      name: "Designer",
      image: "https://i.pinimg.com/1200x/b1/93/b6/b193b64d04c4cca884edf3089be413d5.jpg",
    },
    {
      name: "Party Wear",
      image: "https://i.pinimg.com/736x/29/48/aa/2948aa80bef525c2d2eea4ea5f0f9598.jpg",
    },
    {
      name: "New Arrivals",
      image: "https://i.pinimg.com/736x/5c/69/b5/5c69b53ae5a2c6ee83d3d372d57be744.jpg",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        
      <div className="text-center mb-16">
  <span className="text-[#8B0A13] text-3xl">✦ ✦ ✦</span>

  <h2
    className="mt-4 text-5xl md:text-6xl text-[#8B0A13]"
    style={{ fontFamily: "Cormorant Garamond, serif" }}
  >
    SHOP BY CATEGORY
  </h2>

  <div className="flex items-center justify-center gap-4 mt-4">
    <div className="w-20 h-[1px] bg-[#8B0A13]" />
    <span className="text-[#8B0A13] text-xl">❦</span>
    <div className="w-20 h-[1px] bg-[#8B0A13]" />
  </div>
</div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {categories.map((item, index) => (
            <div
              key={index}
              className="group text-center cursor-pointer"
            >
              <div className="relative mx-auto w-40 h-40 overflow-hidden  border-4 border-[#8B0A13]/10 group-hover:border-[#8B0A13] transition-all duration-300">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

              </div>

              <h3 className="mt-4 font-semibold text-gray-800 group-hover:text-[#8B0A13] transition">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategorySection;