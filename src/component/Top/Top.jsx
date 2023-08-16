import React, { Component } from 'react'

export class Top extends Component {
  render() {
    return (
      <div class=" sm:text-0sm sm:justify-center lg:text-1lg md:text-0md 2xl:text-1xl 2xl:justify-between
       text-center tracking-wide justify-between
         bg-black gap-5 text-white flex font-20xl">
            <h2 class='m-1 p-1 text-center justify-center'>
                Summer Sale For All Swim Suits And Free Express Delivery Off 50%
            <b class='m-1 p-1'>ShopNow</b>
        </h2>
        <div  class='m-1 p-1 flex justify-end sm:hidden 2xl:contents'>
          <input list="language" placeholder='English'
                class="bg-black focus:outline-none focus:ring-offset-2 text-white border-none end-0"
                name="browser" id="browser" />
                <datalist id="language" >
                  <option value="English" />
                  <option value="French" />
                  <option value="Spanish" />
                </datalist>               
                        </div>
        </div>
    )
  }
}

export default Top