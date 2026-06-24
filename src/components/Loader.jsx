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
px-5
">



{/* Logo */}

<h1 className="
text-3xl
sm:text-4xl
md:text-5xl
font-serif
font-bold
text-red-700
tracking-widest
animate-pulse
text-center
">

Surat Textiles

</h1>





<p className="
mt-3
sm:mt-4
text-red-500
tracking-[3px]
sm:tracking-[6px]
text-xs
sm:text-sm
font-medium
text-center
">

SAREE WHOLESALER

</p>







{/* Saree line */}

<div className="
mt-8
w-48
sm:w-64
h-1
bg-red-700
rounded-full
relative
overflow-hidden
">


<div className="
absolute
h-full
w-16
sm:w-20
bg-red-300
animate-[loading_1.5s_infinite]
">

</div>


</div>








{/* Dots */}

<div className="
flex
gap-2
sm:gap-3
mt-7
">


<span className="
w-2.5
h-2.5
sm:w-3
sm:h-3
bg-red-700
rounded-full
animate-bounce
">
</span>



<span className="
w-2.5
h-2.5
sm:w-3
sm:h-3
bg-red-500
rounded-full
animate-bounce
[animation-delay:0.2s]
">
</span>



<span className="
w-2.5
h-2.5
sm:w-3
sm:h-3
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