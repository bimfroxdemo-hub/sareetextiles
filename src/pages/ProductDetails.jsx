import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { products } from "../data/products";


function ProductDetails() {


  const { id } = useParams();


  const product = products.find(
    (p) => p.id === Number(id)
  );



  const [qty, setQty] = useState(
    product?.colors?.reduce((a, c) => {
      a[c] = 0;
      return a;
    }, {})
  );


  const [open, setOpen] = useState(false);



  if (!product) {
    return (
      <p className="text-center py-20">
        Product Not Found
      </p>
    )
  }



  const updateQty = (c, v) => {

    setQty({
      ...qty,
      [c]: v < 0 ? 0 : v
    })

  }




  const orderWhatsApp = () => {


    let order =
      Object.entries(qty)
        .filter(([c, q]) => q > 0)
        .map(([c, q]) => `${c}: ${q} pcs`)
        .join("\n");



    let msg = `

🧵 WHOLESALE ORDER

Product: ${product.title}

Code: ${product.code}

${order}

Please share wholesale price.

`;



    window.open(
      `https://wa.me/9199999999999?text=${encodeURIComponent(msg)}`,
      "_blank"
    )


  }




  const similar = products.filter(
    (p) =>
      p.category === product.category &&
      p.id !== product.id
  );




  return (


    <div className="
max-w-7xl
mx-auto
px-4
sm:px-6
py-10
md:py-16
">



      <div className="
grid
grid-cols-1
md:grid-cols-2
gap-10
">





        {/* IMAGE */}


        <div>


          <img

            src={product.image}

            className="
w-full
h-[400px]
sm:h-[500px]
object-cover
border
"

          />


        </div>







        {/* DETAILS */}


        <div>


          <h1 className="
text-2xl
sm:text-4xl
font-semibold
text-[#8B0A13]
">

            {product.title}

          </h1>



          <p className="mt-3 text-gray-600">
            Code : {product.code}
          </p>


          <p className="text-gray-600">
            Fabric : {product.fabric}
          </p>


          <p className="text-gray-600">
            Category : {product.category}
          </p>


          <p className="
mt-3
text-[#8B0A13]
font-medium
">

            MOQ : {product.moq}

          </p>






          {/* COLOR QTY */}


          <div className="
mt-6
border
p-4
">


            <h3 className="font-semibold mb-3">
              Select Quantity
            </h3>



            {
              product.colors.map((c) => (


                <div

                  key={c}

                  className="
flex
justify-between
items-center
border-b
py-2
capitalize
">


                  <span>
                    {c}
                  </span>



                  <div className="flex gap-3 items-center">


                    <button

                      onClick={() => updateQty(c, qty[c] - 1)}

                      className="border px-3">

                      -

                    </button>



                    <span>
                      {qty[c]}
                    </span>



                    <button

                      onClick={() => updateQty(c, qty[c] + 1)}

                      className="border px-3">

                      +

                    </button>


                  </div>



                </div>


              ))


            }



          </div>








          <button

            onClick={() => setOpen(true)}

            className="
mt-6
w-full
bg-[#8B0A13]
text-white
py-3
">

            Bulk Order

          </button>




          <Link

            to="/collections"

            className="
block
mt-5
text-[#8B0A13]
">

            ← Back to Collection

          </Link>



        </div>



      </div>









      {/* POPUP */}



      {
        open &&


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
max-w-md
p-6
">


            <h2 className="
text-xl
font-semibold
mb-5
">

              Order Summary

            </h2>



            <p>
              {product.title}
            </p>



            <div className="mt-4">


              {
                Object.entries(qty)
                  .filter(([c, q]) => q > 0)
                  .map(([c, q]) => (

                    <div
                      key={c}
                      className="
flex
justify-between
capitalize
"
                    >

                      <span>
                        {c}
                      </span>

                      <span>
                        {q} pcs
                      </span>


                    </div>

                  ))

              }


            </div>



            <button

              onClick={orderWhatsApp}

              className="
mt-5
w-full
bg-green-600
text-white
py-3
">

              Send WhatsApp Order

            </button>



            <button

              onClick={() => setOpen(false)}

              className="
mt-3
w-full
border
py-3
">

              Close

            </button>


          </div>


        </div>


      }










      {/* SIMILAR */}



      <div className="
mt-16
">


        <h2 className="
text-2xl
font-semibold
text-[#8B0A13]
mb-6
">

          Similar Sarees

        </h2>




        <div className="
grid
grid-cols-2
sm:grid-cols-3
lg:grid-cols-4
gap-5
">


          {
            similar.map(item => (


              <Link

                key={item.id}

                to={`/product/${item.id}`}

              >


                <div className="
border
hover:shadow-lg
transition
">


                  <img

                    src={item.image}

                    className="
w-full
h-48
sm:h-60
object-cover
"

                  />


                  <div className="p-3">

                    <p className="text-sm">

                      {item.title}

                    </p>


                  </div>


                </div>


              </Link>


            ))

          }


        </div>


      </div>




    </div>


  )

}


export default ProductDetails;