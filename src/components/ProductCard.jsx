import { Link } from "react-router-dom";
import { useState } from "react";


function ProductCard({ product }) {


  const [colorQty, setColorQty] = useState(
    product.colors?.reduce((a, c) => {
      a[c] = 0;
      return a;
    }, {})
  );


  const [bulkOpen, setBulkOpen] = useState(false);



  const updateQty = (c, v) => {

    setColorQty({
      ...colorQty,
      [c]: v < 0 ? 0 : v
    });

  }




  const handleBulkOrder = () => {


    let order =
      Object.entries(colorQty)
        .filter(([c, q]) => q > 0)
        .map(([c, q]) => `${c}: ${q} pcs`)
        .join("\n");


    let msg = `

🧵 BULK ORDER

${product.title}

Code: ${product.code}

${order}

`;

    window.open(
      `https://wa.me/919054981808?text=${encodeURIComponent(msg)}`,
      "_blank"
    )

  }




  return (

    <div className="
border
bg-white
shadow-sm
hover:shadow-lg
transition
overflow-hidden
">



      <img

        src={product.image}

        className="
w-full
h-64
object-cover
"/>



      <div className="p-4">


        <h3 className="font-semibold">
          {product.title}
        </h3>


        <p className="text-sm text-gray-500">
          {product.code}
        </p>


        <p className="text-[#8B0A13] text-sm mt-2">
          MOQ : {product.moq}
        </p>




        {/* COLOR */}

        <div className="mt-4">


          {
            product.colors?.map(c => (


              <div

                key={c}

                className="
flex
justify-between
items-center
py-1
">


                <span className="capitalize">
                  {c}
                </span>



                <div>


                  <button

                    onClick={() => updateQty(c, colorQty[c] - 1)}

                    className="border px-2"
                  >
                    -
                  </button>



                  <span className="px-2">
                    {colorQty[c]}
                  </span>



                  <button

                    onClick={() => updateQty(c, colorQty[c] + 1)}

                    className="border px-2"
                  >
                    +
                  </button>


                </div>


              </div>


            ))

          }


        </div>





        <div className="
grid
grid-cols-2
gap-2
mt-4
">


          <Link

            to={`/product/${product.id}`}

            className="
bg-[#8B0A13]
text-white
text-center
py-2
text-sm
">

            View

          </Link>




          <button

            onClick={() => setBulkOpen(true)}

            className="
border
border-[#8B0A13]
text-[#8B0A13]
text-sm
">

            Bulk

          </button>



        </div>



      </div>







      {
        bulkOpen &&


        <div className="
fixed
inset-0
bg-black/50
z-50
flex
items-center
justify-center
p-4
">


          <div className="
bg-white
w-full
max-w-sm
p-5
">


            <h2 className="font-semibold text-lg">
              Order Summary
            </h2>


            <p className="text-sm mt-3">
              {product.title}
            </p>



            {
              Object.entries(colorQty)
                .filter(([c, q]) => q > 0)
                .map(([c, q]) => (

                  <p
                    key={c}
                    className="capitalize text-sm"
                  >

                    {c} : {q} pcs

                  </p>

                ))

            }




            <button

              onClick={handleBulkOrder}

              className="
mt-4
w-full
bg-green-600
text-white
py-2
">

              WhatsApp Order

            </button>



            <button

              onClick={() => setBulkOpen(false)}

              className="
mt-2
w-full
border
py-2
">

              Close

            </button>



          </div>

        </div>


      }



    </div>

  )

}


export default ProductCard;