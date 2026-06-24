import { useState } from "react";
import { products } from "../data/products";


const BulkOrder = () => {


  const [cart, setCart] = useState([]);
  const [note, setNote] = useState("");



  const addProduct = (product) => {


    const exist = cart.find(
      (item) => item.id === product.id
    );


    if (exist) {

      setCart(
        cart.map(item =>

          item.id === product.id
            ?
            {
              ...item,
              qty: item.qty + 1
            }
            :
            item

        )

      )

    } else {


      setCart([
        ...cart,
        {
          ...product,
          qty: 1
        }
      ])

    }


  }



  const updateQty = (id, value) => {


    setCart(

      cart.map(item =>

        item.id === id
          ?
          {
            ...item,
            qty: Number(value)
          }
          :
          item

      )

    )

  }




  const removeItem = (id) => {

    setCart(
      cart.filter(item => item.id !== id)
    )

  }




  const sendWhatsApp = () => {


    let msg = `
🧵 WHOLESALE SAREE ORDER

`;


    cart.forEach((item, i) => {

      msg += `

${i + 1}. ${item.title}

Code: ${item.code}
Qty: ${item.qty} pcs
MOQ: ${item.moq}

`;

    });


    if (note) {

      msg += `
Note:
${note}
`;

    }



    msg += `

Please share wholesale price & availability.
`;



    window.open(
      `https://wa.me/919999999999?text=${encodeURIComponent(msg)}`,
      "_blank"
    );


  }




  return (

    <div className="
max-w-6xl
mx-auto
px-5
py-12
">



      <h1 className="
text-3xl
md:text-5xl
text-center
text-[#8B0A13]
mb-10
">

        Bulk Saree Order

      </h1>





      {/* PRODUCTS */}


      <div className="
grid
grid-cols-2
md:grid-cols-4
gap-5
mb-10
">


        {

          products.map(product => (


            <div

              key={product.id}

              className="
border
bg-white
">


              <img

                src={product.image}

                className="
h-52
w-full
object-cover
"

              />


              <div className="p-3">


                <h3 className="font-semibold text-sm">

                  {product.title}

                </h3>


                <p className="text-xs text-gray-500">

                  {product.code}

                </p>


                <button

                  onClick={() => addProduct(product)}

                  className="
mt-3
w-full
bg-[#8B0A13]
text-white
py-2
text-sm
">

                  Add Bulk

                </button>



              </div>


            </div>


          ))


        }


      </div>





      {/* CART */}


      {

        cart.length > 0 &&


        <div>


          <h2 className="
text-xl
font-semibold
mb-4
">

            Selected Items

          </h2>




          {

            cart.map(item => (


              <div

                key={item.id}

                className="
border
p-4
mb-3
flex
justify-between
items-center
">


                <div>

                  <p className="font-medium">
                    {item.title}
                  </p>


                  <p className="text-sm text-gray-500">
                    {item.code}
                  </p>

                </div>




                <input

                  type="number"

                  min="1"

                  value={item.qty}

                  onChange={(e) =>
                    updateQty(item.id, e.target.value)
                  }

                  className="
w-20
border
p-2
text-center
"

                />




                <button

                  onClick={() => removeItem(item.id)}

                  className="
text-red-600
text-sm
">

                  Remove

                </button>



              </div>


            ))


          }



          <textarea

            placeholder="Special requirement"

            value={note}

            onChange={(e) => setNote(e.target.value)}

            className="
w-full
border
p-3
mt-5
"
          />





          <button

            onClick={sendWhatsApp}

            className="
mt-5
w-full
bg-green-600
text-white
py-3
">

            Send Bulk Order WhatsApp

          </button>



        </div>


      }



    </div>

  )

}


export default BulkOrder;