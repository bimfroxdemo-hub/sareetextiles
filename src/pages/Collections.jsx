import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import { useState } from "react";
import hero from "../components/Hero"

function Collections() {


  const [bulk, setBulk] = useState(false);
  const [showFilter,setShowFilter] = useState(false);


  const [category, setCategory] = useState("");
  const [fabric, setFabric] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState(10000);



  const filteredProducts = products.filter((p) => {

    return (

      (p.category.includes(category) || category === "") &&

      (p.fabric.includes(fabric) || fabric === "") &&

      (p.colors.includes(color) || color === "") &&

      p.price <= price

    )

  });



  return (
<>

    <div className="bg-white">


      {/* HEADER */}

      <div className="
      bg-gradient-to-r 
      from-[#fff5f6]
      via-white
      to-[#fff5f6]
      py-16
      ">


        <div className="text-center px-5">


          <p className="tracking-[6px] text-[#8B0A13] text-sm">
            Premium Saree Collection
          </p>


          <h1 className="
          text-3xl
          md:text-5xl
          text-[#8B0A13]
          mt-3
          ">
            Our Exclusive Designs
          </h1>



          <button

            onClick={() => setBulk(true)}

            className="
            mt-8
            bg-[#8B0A13]
            text-white
            px-8 py-3
            rounded-full
            ">

            Bulk Order

          </button>


        </div>

      </div>





      <div className="
      max-w-7xl
      mx-auto
      px-5
      py-14
      flex
      flex-col
      md:flex-row
      gap-10
      ">



        {/* MOBILE FILTER BUTTON */}

        <button

        onClick={()=>setShowFilter(!showFilter)}

        className="
        md:hidden
        bg-[#8B0A13]
        text-white
        py-3
        rounded
        ">

        Filter

        </button>





        {/* FILTER */}

        <aside className={`
        ${showFilter ? "block" : "hidden"}
        md:block
        w-full
        md:w-72
        border-r
        pr-0
        md:pr-8
        `}>


          <h2 className="text-xl mb-5">
            Product Type
          </h2>


          <select

            onChange={(e) => setCategory(e.target.value)}

            className="border p-3 w-full mb-8">

            <option value="">
              All
            </option>

            <option>
              Banarasi
            </option>

            <option>
              Fancy
            </option>

            <option>
              Cotton
            </option>

            <option>
              Wedding
            </option>

            <option>
              Bridal
            </option>

          </select>






          <h2 className="text-xl mb-5">
            Price
          </h2>


          <input

            type="range"

            min="1000"
            max="10000"

            value={price}

            onChange={(e)=>setPrice(e.target.value)}

            className="w-full"

          />


          <p>
            ₹ {price}
          </p>





          <hr className="my-8" />





          <h2 className="text-xl mb-5">
            Color
          </h2>




          <div className="
          grid
          grid-cols-5
          gap-3
          ">


          {
          [
          ["All",""],
          ["Red","bg-red-600"],
          ["Blue","bg-blue-600"],
          ["Green","bg-green-600"],
          ["Pink","bg-pink-400"],
          ["Black","bg-black"],
          ["Yellow","bg-yellow-400"],
          ["Gold","bg-yellow-600"],
          ["White","bg-white border"],
          ["Silver","bg-gray-300"],
          ["Maroon","bg-red-900"],
          ["Brown","bg-amber-900"],
          ["Orange","bg-orange-500"],
          ["Purple","bg-purple-700"],
          ["Magenta","bg-fuchsia-600"],
          ["Cream","bg-orange-100"],
          ["Grey","bg-gray-500"]

          ].map((c)=>(


          <button

          key={c[0]}

          onClick={()=>setColor(
            c[0]=="All" ? "" : c[0].toLowerCase()
          )}

          className={`
          ${c[1]}
          w-10
          h-10
          rounded
          border
          `}

          >

          {
          c[0]=="All" && "All"
          }


          </button>


          ))

          }


          </div>






          <hr className="my-8" />



          <h2 className="text-xl mb-5">
            Fabric
          </h2>



          <select

          onChange={(e)=>setFabric(e.target.value)}

          className="border p-3 w-full">


          <option value="">
          All
          </option>

          <option>
          Silk
          </option>

          <option>
          Cotton
          </option>

          <option>
          Georgette
          </option>

          <option>
          Net
          </option>

          <option>
          Linen
          </option>


          </select>



        </aside>







        {/* PRODUCTS */}


        <div className="flex-1">


        <div className="
        grid
        grid-cols-2
        sm:grid-cols-3
        lg:grid-cols-4
        gap-4
        md:gap-6
        ">


        {
        filteredProducts.map((product)=>(

        <ProductCard

        key={product.id}

        product={product}

        />

        ))
        }


        </div>


        </div>



      </div>







      {/* BULK MODAL */}

      {
      bulk &&

      <div className="
      fixed
      inset-0
      bg-black/40
      flex
      items-center
      justify-center
      px-5
      ">


      <div className="
      bg-white
      p-8
      rounded-xl
      w-full
      max-w-md
      ">


      <h2 className="text-2xl mb-5">
      Bulk Order
      </h2>



      <input

      placeholder="Name"

      className="border p-3 w-full mb-3"

      />



      <input

      placeholder="Quantity"

      className="border p-3 w-full mb-3"

      />



      <button

      className="
      bg-[#8B0A13]
      text-white
      px-6 py-3
      rounded
      ">

      Submit

      </button>




      <button

      onClick={()=>setBulk(false)}

      className="ml-5">

      Close

      </button>




      </div>


      </div>

      }



    </div>
</>
  )

}


export default Collections;