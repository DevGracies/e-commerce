import React, { Component } from 'react'

export class Top extends Component {
  render() {
    return (
      <div class="bg-black gap-8 justify-around text-white flex font-20xl">
            <h2>
                Summer Sale For All Swim Suits And Free Express Delivery Off 50%
            <b class='m-1 p-1'>ShopNow</b>
        </h2>
        
        <div>
          <select name="English" className="bg-black focus:outline-none">
        <option value="English">English</option>
        <option value="French">French</option>
        <option value="Spanish">Spanish</option>
      </select>
          </div>
        </div>
    )
  }
}

export default Top