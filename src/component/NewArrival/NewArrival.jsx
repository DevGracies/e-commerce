import React from 'react'
import woman from "../images/woman.jpg"
import speaker from "../images/speaker.jpg"
import psgamestation from "../images/psgamestation.png"
import perfume from "../images/perfume.png"
import LastArrival from './LastArrival'

function NewArrival() {
  return (
      <>
          <section className='flex justify-center'>
              <div>
                  <img src={psgamestation} alt="" />
                  <div>
                      <h2>PlayStation 5</h2>
                      <p>Black and White version of the PS5 coming out on sale.</p>
                  </div>
              </div>
              <div>
                  <div>
                      <img src={woman} alt="" />
                      <h2>Women’s Collections</h2>
                      <p>Featured woman collections that give you another vibe.</p>
                      <br />
                      <button>Shop Now</button>
                  </div>
                  <div className='flex m-5'>
                      <div>
                          <img src={speaker} alt="" />
                          <div>
                              <h2>Speakers</h2>
                              <p>Amazon wireless speakers</p>
                              <button>Shop Now</button>
                          </div>
                      </div>
                      <div>
                          <img src={perfume} alt="" />
                          <div>
                              <h2>Perfume</h2>
                              <p>GUCCI INTENSE OUD EDP</p>
                              <button>Shop Now</button>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <LastArrival />
    </>
  )
}

export default NewArrival