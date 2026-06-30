function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-white mt-16">

      <div className="max-w-7xl mx-auto px-5 py-14 grid md:grid-cols-4 gap-10">


        {/* Brand */}

        <div>

          <h2 className="text-2xl font-semibold text-[#8B0A13]">
            Shree Ganesh Sarees
          </h2>


          <p className="text-gray-400 mt-3 text-sm leading-relaxed">

            Premium saree wholesale collection with
            latest designs, quality fabrics and best
            wholesale prices for retailers across India.

          </p>

        </div>





        {/* Quick Links */}

        <div>

          <h3 className="font-semibold mb-4">
            Quick Links
          </h3>


          <ul className="space-y-2 text-gray-400 text-sm">

            <li>Home</li>
            <li>Collections</li>
            <li>Wholesale</li>
            <li>Contact</li>

          </ul>

        </div>






        {/* Categories */}

        <div>

          <h3 className="font-semibold mb-4">
            Categories
          </h3>


          <ul className="space-y-2 text-gray-400 text-sm">

            <li>Sarees</li>
            <li>Designer Sarees</li>
            <li>Wedding Collection</li>
            <li>New Arrivals</li>

          </ul>


        </div>







        {/* Contact */}

        <div>


          <h3 className="font-semibold mb-4">
            Contact
          </h3>



          <p className="text-gray-400 text-sm">
            📍 Surat, Gujarat
          </p>



          <p className="text-gray-400 text-sm mt-2">
            📞 9727133484
          </p>




          <p className="text-gray-400 text-sm mt-2">
            📷 shree_ganesh_sarees__
          </p>





          <a
            href="https://wa.me/919727133484"
            target="_blank"
            rel="noreferrer"
            className="
            inline-block
            mt-4
            bg-[#8B0A13]
            px-5
            py-2
            text-sm
            hover:bg-[#6d0810]
            transition
            rounded
            "
          >

            WhatsApp Us

          </a>



        </div>



      </div>






      {/* Bottom */}

      <div className="
      border-t
      border-gray-800
      py-4
      text-center
      text-gray-500
      text-sm
      ">


        © {new Date().getFullYear()} Shree Ganesh Sarees.
        All Rights Reserved.


      </div>



    </footer>
  );
}


export default Footer;