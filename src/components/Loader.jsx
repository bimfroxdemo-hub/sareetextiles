import logo from "../assets/logo.png";   // apne logo ka path


function Loader() {

return (

<div className="
fixed
inset-0
w-full
h-screen
bg-[#fff7f5]
flex
items-center
justify-center
z-[9999]
">


<div className="
flex
flex-col
items-center
justify-center
w-full
px-6
">





{/* LOGO */}

<img

src={logo}

alt="Shree Ganesh Sarees"

className="
w-32
md:w-44
object-contain
mb-5
animate-pulse
"

/>





<h1 className="
text-3xl
md:text-5xl
font-serif
font-bold
text-[#8B0A13]
tracking-wide
text-center
">

Shree Ganesh Sarees

</h1>





<p className="
mt-3
text-[#8B0A13]
tracking-[5px]
text-xs
md:text-sm
text-center
uppercase
">

Premium Saree Collection

</p>







<div className="
relative
mt-10
w-56
md:w-72
h-2
bg-[#f3cdd0]
rounded-full
overflow-hidden
">



<div className="
absolute
top-0
left-0
h-full
w-24
bg-[#8B0A13]
rounded-full
animate-[slide_1.5s_ease-in-out_infinite]
">

</div>



</div>








<div className="
flex
gap-3
mt-8
">



<div className="
w-3
h-3
bg-[#8B0A13]
rounded-full
animate-bounce
">
</div>





<div className="
w-3
h-3
bg-[#b83245]
rounded-full
animate-bounce
[animation-delay:200ms]
">
</div>





<div className="
w-3
h-3
bg-[#e6a6ad]
rounded-full
animate-bounce
[animation-delay:400ms]
">
</div>




</div>





</div>


</div>


)

}


export default Loader;