function Contact() {

  return (
    <div className="bg-white">


      {/* HEADER */}

      <div className="bg-gradient-to-r from-[#fff5f6] via-white to-[#fff5f6] py-20">


        <div className="max-w-6xl mx-auto text-center px-5">


          <p className="
          text-sm
          tracking-[6px]
          uppercase
          text-[#8B0A13]
          ">

            Shree Ganesh Sarees

          </p>



          <h1 className="
          text-4xl
          md:text-6xl
          font-semibold
          text-[#8B0A13]
          mt-4
          ">

            Wholesale Contact

          </h1>




          <div className="flex justify-center items-center gap-3 mt-5">

            <span className="w-16 h-[2px] bg-[#8B0A13]"></span>

            <span className="text-[#8B0A13] text-xl">
              ❦
            </span>

            <span className="w-16 h-[2px] bg-[#8B0A13]"></span>

          </div>




          <p className="text-gray-500 mt-4">

            Bulk Orders • Retailers • Resellers • Wholesale Sarees

          </p>



        </div>

      </div>






      {/* CONTENT */}



      <div className="
      max-w-6xl
      mx-auto
      px-5
      py-16
      grid
      md:grid-cols-2
      gap-10
      ">





        {/* INFO */}



        <div className="space-y-6">



          <h2 className="
          text-2xl
          font-semibold
          text-[#8B0A13]
          ">

            Contact Information

          </h2>





          <div className="
          border
          p-6
          shadow-sm
          space-y-4
          ">



            <p>
              📞 <b>Phone:</b> 9727133484
            </p>



            <p>
              📷 <b>Instagram:</b> shree_ganesh_sarees__
            </p>



            <p>
              🏢 <b>Business:</b> Saree Wholesale Collection
            </p>



            <p>
              📍 <b>Address:</b> Surat, Gujarat
            </p>




          </div>






          {/* WHATSAPP */}



          <div className="
          bg-[#8B0A13]
          text-white
          p-7
          ">



            <h3 className="text-2xl font-semibold">

              Bulk Order?

            </h3>




            <p className="mt-2 text-white/80">

              Get latest saree collection & wholesale rates on WhatsApp

            </p>





            <a

              href="https://wa.me/919727133484"

              target="_blank"

              rel="noreferrer"

              className="
              inline-block
              mt-5
              bg-white
              text-[#8B0A13]
              px-8
              py-3
              font-semibold
              rounded
              "

            >

              WhatsApp Now

            </a>



          </div>




        </div>







        {/* FORM */}




        <div className="
        border
        p-6
        shadow-sm
        ">




          <h2 className="
          text-2xl
          font-semibold
          text-[#8B0A13]
          mb-6
          ">

            Bulk Enquiry

          </h2>






          <form className="space-y-4">



            <input

              className="
              w-full
              border
              p-3
              "

              placeholder="Your Name"

            />




            <input

              className="
              w-full
              border
              p-3
              "

              placeholder="Mobile Number"

            />




            <input

              className="
              w-full
              border
              p-3
              "

              placeholder="Saree Quantity"

            />





            <textarea

              rows="5"

              className="
              w-full
              border
              p-3
              "

              placeholder="Tell your requirement"

            />






            <button

              className="
              w-full
              bg-[#8B0A13]
              text-white
              py-3
              "

            >

              Send Enquiry

            </button>




          </form>



        </div>




      </div>







      {/* TRUST */}




      <div className="
      bg-[#faf7f7]
      py-16
      text-center
      ">




        <h2 className="
        text-3xl
        font-bold
        text-[#8B0A13]
        ">

          Trusted Saree Wholesale Partner

        </h2>





        <p className="
        mt-3
        text-gray-600
        ">

          Premium Quality • Latest Designs • Best Wholesale Prices

        </p>




      </div>




    </div>
  );
}


export default Contact;