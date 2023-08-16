import React from "react"; 
// import Cart from "./Cart"; 
// import Account from "./Account";

function Nav() {
    return (
        <div class="bg-blue-200 p-4 flex justify-between " >
            <h1 class=" m-1 text-3xl p-0 text-black font-bold">Exclusive</h1>
            <div className=" font-black md:hidden text-4xl">&#9776;</div>
            <ul class="flex 2xl:contents md:contents xl:contents list-none cursor-pointer sm:hidden">
                <li class=" m-3 text-lg p-0 text-black font-medium">Home</li>
                <li class=" m-3 text-lg p-0 text-black font-medium">Contact</li>
                <li class=" m-3 text-lg p-0 text-black font-medium">About</li>
                <li class=" m-3 text-lg p-0 text-black font-medium">Sign up</li>
            </ul>
            <div></div>
            <div class='flex sm:hidden text-lg font-medium text-black '>  
                <div class=" m-3 ">
                    <input class='border-r-5 focus:outline-none '
                        type="text" placeholder="What are you looking for? " name="" id="" />
                </div>
                <div class="flex sm:hidden md:contents xl:contents 2xl:contents">
                    <div class=" m-3 ml-2 ">
                    love
                    </div>
                    <div class=" m-3 ml-2 ">
                    Cart
                    </div>
                    <div class=" m-3 ml-2 ">
                    Account
                    </div>
                
                {/* <Cart /> */}
                {/* <Account /> */}
                </div>
            </div>
        </div>
    )
}

export default Nav 