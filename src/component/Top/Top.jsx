import React, { Component } from 'react'
import {IoMdArrowDropdown} from "react-icons/io"

export class Top extends Component {
  render() {
    return (
      <div class="static bg-black gap-8 justify-around text-white flex font-20xl">
            <h2>
                Summer Sale For All Swim Suits And Free Express Delivery Off 50%
            <b class='m-1 p-1'>ShopNow</b>
        </h2>
        <div class='flex'>
          <h2>English</h2>
          <IoMdArrowDropdown className='mt-1' />
          </div>
        </div>
    )
  }
}

export default Top