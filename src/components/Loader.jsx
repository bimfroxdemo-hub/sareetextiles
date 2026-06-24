function Loader() {

return (

<div className="
fixed
inset-0
bg-[#fff7f5]
flex
flex-col
items-center
justify-center
z-50
">



{/* Logo */}

<h1 className="
text-5xl
font-serif
font-bold
text-red-700
tracking-widest
animate-pulse
">

Surat Textiles

</h1>




<p className="
mt-4
text-red-500
tracking-[6px]
text-sm
font-medium
">

SAREE WHOLESALER

</p>





{/* Saree style line */}

<div className="
mt-8
w-64
h-1
bg-red-700
rounded-full
relative
overflow-hidden
">


<div className="
absolute
h-full
w-20
bg-red-300
animate-[loading_1.5s_infinite]
">

</div>


</div>





{/* Dots */}

<div className="
flex
gap-3
mt-8
">


<span className="
w-3
h-3
bg-red-700
rounded-full
animate-bounce
">
</span>


<span className="
w-3
h-3
bg-red-500
rounded-full
animate-bounce
[animation-delay:0.2s]
">
</span>


<span className="
w-3
h-3
bg-red-300
rounded-full
animate-bounce
[animation-delay:0.4s]
">
</span>


</div>



</div>

)

}


export default Loader;