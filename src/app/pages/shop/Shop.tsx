import React, { useState } from 'react'

// Components
import Background from '../../../components/bg/Background'
import Footer from '../../../components/Footer'

// Items
import Nayeon from '../../../assets/images/items/twice/nayeon.jpeg'
import Jeongyeon from '../../../assets/images/items/twice/jeongyeon.jpeg'
import Momo from '../../../assets/images/items/twice/momo.jpeg'
import Sana from '../../../assets/images/items/twice/sana.jpeg'
import Jihyo from '../../../assets/images/items/twice/jihyo.jpeg'
import Mina from '../../../assets/images/items/twice/mina.jpeg'
import Dahyun from '../../../assets/images/items/twice/dahyun.jpeg'
import Chaeyoung from '../../../assets/images/items/twice/chaeyoung.jpeg'
import Tzuyu from '../../../assets/images/items/twice/tzuyu.jpeg'

import one from '../../../assets/images/items/nmixx/1.jpeg'
import two from '../../../assets/images/items/nmixx/2.jpeg'
import three from '../../../assets/images/items/nmixx/3.jpeg'
import four from '../../../assets/images/items/nmixx/4.jpeg'
import five from '../../../assets/images/items/nmixx/5.jpeg'
import six from '../../../assets/images/items/nmixx/6.jpeg'

import minji from '../../../assets/images/items/newjeans/minji.jpg'
import hanni from '../../../assets/images/items/newjeans/hanni.jpg'
import danielle from '../../../assets/images/items/newjeans/danielle.jpg'
import haerin from '../../../assets/images/items/newjeans/haerin.jpg'
import hyein from '../../../assets/images/items/newjeans/hyein.jpg'

import aespaone from '../../../assets/images/items/aespa/1.jpg'
import aespatwo from '../../../assets/images/items/aespa/2.jpg'
import aespathree from '../../../assets/images/items/aespa/3.jpg'
import aespafour from '../../../assets/images/items/aespa/4.jpg'

import leone from '../../../assets/images/items/leseraffim/1.jpg'
import letwo from '../../../assets/images/items/leseraffim/2.jpg'
import lethree from '../../../assets/images/items/leseraffim/3.jpg'
import lefour from '../../../assets/images/items/leseraffim/4.jpg'
import lefive from '../../../assets/images/items/leseraffim/5.jpg'

type Props = {}

const Shop = (props: Props) => {
  return (
    <>
      <Background />
      <section id="shop" className="container mx-auto mt-[350px] py-[100px] relative h-full">

        {/* TWICE */}
        <div className="twice-containter px-[15px] sm:px-[25px] md:px-[50px] lg:px-[75px] xl:px-[100px] 2xl:px-[150px] premium:px-[200px]">
          <h1 className="text-[2.5rem] font-[900] mb-4 mt-[50px]">TWICE</h1>
          <hr />
          <div className="items cursor-pointer grid grid-cols-1 gap-[15px] mt-[16px] sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 premium:grid-cols-5">
            <div className="card bg-deep-violet grid pb-2 w-full h-[600px] overflow-hidden hover:bg-electric-pink transition-all">
              <img src={ Nayeon } alt="" className="w-full h-[450px] object-cover" />
              <div className="item-info mx-4">
                <div className="add-to-heart flex items-center justify-between">
                  <h2 className="name text-[1.25rem] font-[700]">Nayeon</h2>
                  <div className="heart-icon text-[1.50rem]">
                      <button >
                        <i className="fa-regular fa-heart"></i>
                      </button>
                  </div>
                </div>
                <p className="theme truncate">PC Theme</p>
                <p className="price mt-4 before:content-['₱'] before:text-[1rem] before:mr-1 text-[1.25rem]">100</p>
              </div>
            </div>

            <div className="card bg-deep-violet grid pb-2 w-full h-[600px] overflow-hidden hover:bg-electric-pink transition-all">
              <img src={ Jeongyeon } alt="" className="w-full h-[450px] object-cover" />
              <div className="item-info mx-4">
                <div className="add-to-heart flex items-center justify-between">
                  <h2 className="name text-[1.25rem] font-[700]">Jeongyeon</h2>
                  <div className="heart-icon text-[1.50rem]">
                      <button >
                        <i className="fa-regular fa-heart"></i>
                      </button>
                  </div>
                </div>
                <p className="theme truncate">PC Theme</p>
                <p className="price mt-4 before:content-['₱'] before:text-[1rem] before:mr-1 text-[1.25rem]">100</p>
              </div>
            </div>

            <div className="card bg-deep-violet grid pb-2 w-full h-[600px] overflow-hidden hover:bg-electric-pink transition-all">
              <img src={ Momo } alt="" className="w-full h-[450px] object-cover" />
              <div className="item-info mx-4">
                <div className="add-to-heart flex items-center justify-between">
                  <h2 className="name text-[1.25rem] font-[700]">Momo</h2>
                  <div className="heart-icon text-[1.50rem]">
                      <button >
                        <i className="fa-regular fa-heart"></i>
                      </button>
                  </div>
                </div>
                <p className="theme truncate">PC Theme</p>
                <p className="price mt-4 before:content-['₱'] before:text-[1rem] before:mr-1 text-[1.25rem]">100</p>
              </div>
            </div>

            <div className="card bg-deep-violet grid pb-2 w-full h-[600px] overflow-hidden hover:bg-electric-pink transition-all">
              <img src={ Sana } alt="" className="w-full h-[450px] object-cover" />
              <div className="item-info mx-4">
                <div className="add-to-heart flex items-center justify-between">
                  <h2 className="name text-[1.25rem] font-[700]">Sana</h2>
                  <div className="heart-icon text-[1.50rem]">
                      <button >
                        <i className="fa-regular fa-heart"></i>
                      </button>
                  </div>
                </div>
                <p className="theme truncate">PC Theme</p>
                <p className="price mt-4 before:content-['₱'] before:text-[1rem] before:mr-1 text-[1.25rem]">100</p>
              </div>
            </div>

            <div className="card bg-deep-violet grid pb-2 w-full h-[600px] overflow-hidden hover:bg-electric-pink transition-all">
              <img src={ Jihyo } alt="" className="w-full h-[450px] object-cover" />
              <div className="item-info mx-4">
                <div className="add-to-heart flex items-center justify-between">
                  <h2 className="name text-[1.25rem] font-[700]">Jihyo</h2>
                  <div className="heart-icon text-[1.50rem]">
                      <button >
                        <i className="fa-regular fa-heart"></i>
                      </button>
                  </div>
                </div>
                <p className="theme truncate">PC Theme</p>
                <p className="price mt-4 before:content-['₱'] before:text-[1rem] before:mr-1 text-[1.25rem]">100</p>
              </div>
            </div>

            <div className="card bg-deep-violet grid pb-2 w-full h-[600px] overflow-hidden hover:bg-electric-pink transition-all">
              <img src={ Mina } alt="" className="w-full h-[450px] object-cover" />
              <div className="item-info mx-4">
                <div className="add-to-heart flex items-center justify-between">
                  <h2 className="name text-[1.25rem] font-[700]">Mina</h2>
                  <div className="heart-icon text-[1.50rem]">
                      <button >
                        <i className="fa-regular fa-heart"></i>
                      </button>
                  </div>
                </div>
                <p className="theme truncate">PC Theme</p>
                <p className="price mt-4 before:content-['₱'] before:text-[1rem] before:mr-1 text-[1.25rem]">100</p>
              </div>
            </div>

            <div className="card bg-deep-violet grid pb-2 w-full h-[600px] overflow-hidden hover:bg-electric-pink transition-all">
              <img src={ Dahyun } alt="" className="w-full h-[450px] object-cover" />
              <div className="item-info mx-4">
                <div className="add-to-heart flex items-center justify-between">
                  <h2 className="name text-[1.25rem] font-[700]">Dahyun</h2>
                  <div className="heart-icon text-[1.50rem]">
                      <button >
                        <i className="fa-regular fa-heart"></i>
                      </button>
                  </div>
                </div>
                <p className="theme truncate">PC Theme</p>
                <p className="price mt-4 before:content-['₱'] before:text-[1rem] before:mr-1 text-[1.25rem]">100</p>
              </div>
            </div>

            <div className="card bg-deep-violet grid pb-2 w-full h-[600px] overflow-hidden hover:bg-electric-pink transition-all">
              <img src={ Chaeyoung } alt="" className="w-full h-[450px] object-cover" />
              <div className="item-info mx-4">
                <div className="add-to-heart flex items-center justify-between">
                  <h2 className="name text-[1.25rem] font-[700]">Chaeyoung</h2>
                  <div className="heart-icon text-[1.50rem]">
                      <button >
                        <i className="fa-regular fa-heart"></i>
                      </button>
                  </div>
                </div>
                <p className="theme truncate">PC Theme</p>
                <p className="price mt-4 before:content-['₱'] before:text-[1rem] before:mr-1 text-[1.25rem]">100</p>
              </div>
            </div>

            <div className="card bg-deep-violet grid pb-2 w-full h-[600px] overflow-hidden hover:bg-electric-pink transition-all">
              <img src={ Tzuyu } alt="" className="w-full h-[450px] object-cover" />
              <div className="item-info mx-4">
                <div className="add-to-heart flex items-center justify-between">
                  <h2 className="name text-[1.25rem] font-[700]">Tzuyu</h2>
                  <div className="heart-icon text-[1.50rem]">
                      <button >
                        <i className="fa-regular fa-heart"></i>
                      </button>
                  </div>
                </div>
                <p className="theme truncate">PC Theme</p>
                <p className="price mt-4 before:content-['₱'] before:text-[1rem] before:mr-1 text-[1.25rem]">100</p>
              </div>
            </div>
            
          </div>
        </div>

        {/* NMIXX */}
        <div className="nmixx-containter px-[15px] sm:px-[25px] md:px-[50px] lg:px-[75px] xl:px-[100px] 2xl:px-[150px] premium:px-[200px]">
          <h1 className="text-[2.5rem] font-[900] mb-4 mt-[50px]">NMIXX</h1>
          <hr />
          <div className="items cursor-pointer grid grid-cols-1 gap-[15px] mt-[16px] sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 premium:grid-cols-5">
            <div className="card bg-deep-violet grid pb-2 w-full h-[600px] overflow-hidden hover:bg-electric-pink transition-all">
              <img src={ one } alt="" className="w-full h-[450px] object-cover" />
              <div className="item-info mx-4">
                <div className="add-to-heart flex items-center justify-between">
                  <h2 className="name text-[1.25rem] font-[700]">Name</h2>
                  <div className="heart-icon text-[1.50rem]">
                      <button >
                        <i className="fa-regular fa-heart"></i>
                      </button>
                  </div>
                </div>
                <p className="theme truncate">PC Theme</p>
                <p className="price mt-4 before:content-['₱'] before:text-[1rem] before:mr-1 text-[1.25rem]">100</p>
              </div>
            </div>
            <div className="card bg-deep-violet grid pb-2 w-full h-[600px] overflow-hidden hover:bg-electric-pink transition-all">
              <img src={ two } alt="" className="w-full h-[450px] object-cover" />
              <div className="item-info mx-4">
                <div className="add-to-heart flex items-center justify-between">
                  <h2 className="name text-[1.25rem] font-[700]">Name</h2>
                  <div className="heart-icon text-[1.50rem]">
                      <button >
                        <i className="fa-regular fa-heart"></i>
                      </button>
                  </div>
                </div>
                <p className="theme truncate">PC Theme</p>
                <p className="price mt-4 before:content-['₱'] before:text-[1rem] before:mr-1 text-[1.25rem]">100</p>
              </div>
            </div>
            <div className="card bg-deep-violet grid pb-2 w-full h-[600px] overflow-hidden hover:bg-electric-pink transition-all">
              <img src={ three } alt="" className="w-full h-[450px] object-cover" />
              <div className="item-info mx-4">
                <div className="add-to-heart flex items-center justify-between">
                  <h2 className="name text-[1.25rem] font-[700]">Name</h2>
                  <div className="heart-icon text-[1.50rem]">
                      <button >
                        <i className="fa-regular fa-heart"></i>
                      </button>
                  </div>
                </div>
                <p className="theme truncate">PC Theme</p>
                <p className="price mt-4 before:content-['₱'] before:text-[1rem] before:mr-1 text-[1.25rem]">100</p>
              </div>
            </div>
            <div className="card bg-deep-violet grid pb-2 w-full h-[600px] overflow-hidden hover:bg-electric-pink transition-all">
              <img src={ four } alt="" className="w-full h-[450px] object-cover" />
              <div className="item-info mx-4">
                <div className="add-to-heart flex items-center justify-between">
                  <h2 className="name text-[1.25rem] font-[700]">Name</h2>
                  <div className="heart-icon text-[1.50rem]">
                      <button >
                        <i className="fa-regular fa-heart"></i>
                      </button>
                  </div>
                </div>
                <p className="theme truncate">PC Theme</p>
                <p className="price mt-4 before:content-['₱'] before:text-[1rem] before:mr-1 text-[1.25rem]">100</p>
              </div>
            </div>
            <div className="card bg-deep-violet grid pb-2 w-full h-[600px] overflow-hidden hover:bg-electric-pink transition-all">
              <img src={ five } alt="" className="w-full h-[450px] object-cover" />
              <div className="item-info mx-4">
                <div className="add-to-heart flex items-center justify-between">
                  <h2 className="name text-[1.25rem] font-[700]">Name</h2>
                  <div className="heart-icon text-[1.50rem]">
                      <button >
                        <i className="fa-regular fa-heart"></i>
                      </button>
                  </div>
                </div>
                <p className="theme truncate">PC Theme</p>
                <p className="price mt-4 before:content-['₱'] before:text-[1rem] before:mr-1 text-[1.25rem]">100</p>
              </div>
            </div>
            <div className="card bg-deep-violet grid pb-2 w-full h-[600px] overflow-hidden hover:bg-electric-pink transition-all">
              <img src={ six } alt="" className="w-full h-[450px] object-cover" />
              <div className="item-info mx-4">
                <div className="add-to-heart flex items-center justify-between">
                  <h2 className="name text-[1.25rem] font-[700]">Name</h2>
                  <div className="heart-icon text-[1.50rem]">
                      <button >
                        <i className="fa-regular fa-heart"></i>
                      </button>
                  </div>
                </div>
                <p className="theme truncate">PC Theme</p>
                <p className="price mt-4 before:content-['₱'] before:text-[1rem] before:mr-1 text-[1.25rem]">100</p>
              </div>
            </div>

            
          </div>
        </div>

        {/* NewJeans */}
        <div className="newjeans-containter px-[15px] sm:px-[25px] md:px-[50px] lg:px-[75px] xl:px-[100px] 2xl:px-[150px] premium:px-[200px]">
          <h1 className="text-[2.5rem] font-[900] mb-4 mt-[50px]">NewJeans</h1>
          <hr />
          <div className="items cursor-pointer grid grid-cols-1 gap-[15px] mt-[16px] sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 premium:grid-cols-5">
            <div className="card bg-deep-violet grid pb-2 w-full h-[600px] overflow-hidden hover:bg-electric-pink transition-all">
              <img src={ minji } alt="" className="w-full h-[450px] object-cover" />
              <div className="item-info mx-4">
                <div className="add-to-heart flex items-center justify-between">
                  <h2 className="name text-[1.25rem] font-[700]">Minji</h2>
                  <div className="heart-icon text-[1.50rem]">
                      <button >
                        <i className="fa-regular fa-heart"></i>
                      </button>
                  </div>
                </div>
                <p className="theme truncate">PC Theme</p>
                <p className="price mt-4 before:content-['₱'] before:text-[1rem] before:mr-1 text-[1.25rem]">100</p>
              </div>
            </div>
            <div className="card bg-deep-violet grid pb-2 w-full h-[600px] overflow-hidden hover:bg-electric-pink transition-all">
              <img src={ hanni } alt="" className="w-full h-[450px] object-cover" />
              <div className="item-info mx-4">
                <div className="add-to-heart flex items-center justify-between">
                  <h2 className="name text-[1.25rem] font-[700]">Hanni</h2>
                  <div className="heart-icon text-[1.50rem]">
                      <button >
                        <i className="fa-regular fa-heart"></i>
                      </button>
                  </div>
                </div>
                <p className="theme truncate">PC Theme</p>
                <p className="price mt-4 before:content-['₱'] before:text-[1rem] before:mr-1 text-[1.25rem]">100</p>
              </div>
            </div>
            <div className="card bg-deep-violet grid pb-2 w-full h-[600px] overflow-hidden hover:bg-electric-pink transition-all">
              <img src={ danielle } alt="" className="w-full h-[450px] object-cover" />
              <div className="item-info mx-4">
                <div className="add-to-heart flex items-center justify-between">
                  <h2 className="name text-[1.25rem] font-[700]">Danielle</h2>
                  <div className="heart-icon text-[1.50rem]">
                      <button >
                        <i className="fa-regular fa-heart"></i>
                      </button>
                  </div>
                </div>
                <p className="theme truncate">PC Theme</p>
                <p className="price mt-4 before:content-['₱'] before:text-[1rem] before:mr-1 text-[1.25rem]">100</p>
              </div>
            </div>
            <div className="card bg-deep-violet grid pb-2 w-full h-[600px] overflow-hidden hover:bg-electric-pink transition-all">
              <img src={ haerin } alt="" className="w-full h-[450px] object-cover" />
              <div className="item-info mx-4">
                <div className="add-to-heart flex items-center justify-between">
                  <h2 className="name text-[1.25rem] font-[700]">Haerin</h2>
                  <div className="heart-icon text-[1.50rem]">
                      <button >
                        <i className="fa-regular fa-heart"></i>
                      </button>
                  </div>
                </div>
                <p className="theme truncate">PC Theme</p>
                <p className="price mt-4 before:content-['₱'] before:text-[1rem] before:mr-1 text-[1.25rem]">100</p>
              </div>
            </div>
            <div className="card bg-deep-violet grid pb-2 w-full h-[600px] overflow-hidden hover:bg-electric-pink transition-all">
              <img src={ hyein } alt="" className="w-full h-[450px] object-cover" />
              <div className="item-info mx-4">
                <div className="add-to-heart flex items-center justify-between">
                  <h2 className="name text-[1.25rem] font-[700]">Hyein</h2>
                  <div className="heart-icon text-[1.50rem]">
                      <button >
                        <i className="fa-regular fa-heart"></i>
                      </button>
                  </div>
                </div>
                <p className="theme truncate">PC Theme</p>
                <p className="price mt-4 before:content-['₱'] before:text-[1rem] before:mr-1 text-[1.25rem]">100</p>
              </div>
            </div>

            
          </div>
        </div>

        {/* aespa */}
        <div className="aespa-containter px-[15px] sm:px-[25px] md:px-[50px] lg:px-[75px] xl:px-[100px] 2xl:px-[150px] premium:px-[200px]">
          <h1 className="text-[2.5rem] font-[900] mb-4 mt-[50px]">aespa</h1>
          <hr />
          <div className="items cursor-pointer grid grid-cols-1 gap-[15px] mt-[16px] sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 premium:grid-cols-5">
            <div className="card bg-deep-violet grid pb-2 w-full h-[600px] overflow-hidden hover:bg-electric-pink transition-all">
              <img src={ aespaone } alt="" className="w-full h-[450px] object-cover" />
              <div className="item-info mx-4">
                <div className="add-to-heart flex items-center justify-between">
                  <h2 className="name text-[1.25rem] font-[700]">Name</h2>
                  <div className="heart-icon text-[1.50rem]">
                      <button >
                        <i className="fa-regular fa-heart"></i>
                      </button>
                  </div>
                </div>
                <p className="theme truncate">PC Theme</p>
                <p className="price mt-4 before:content-['₱'] before:text-[1rem] before:mr-1 text-[1.25rem]">100</p>
              </div>
            </div>
            <div className="card bg-deep-violet grid pb-2 w-full h-[600px] overflow-hidden hover:bg-electric-pink transition-all">
              <img src={ aespatwo } alt="" className="w-full h-[450px] object-cover" />
              <div className="item-info mx-4">
                <div className="add-to-heart flex items-center justify-between">
                  <h2 className="name text-[1.25rem] font-[700]">Name</h2>
                  <div className="heart-icon text-[1.50rem]">
                      <button >
                        <i className="fa-regular fa-heart"></i>
                      </button>
                  </div>
                </div>
                <p className="theme truncate">PC Theme</p>
                <p className="price mt-4 before:content-['₱'] before:text-[1rem] before:mr-1 text-[1.25rem]">100</p>
              </div>
            </div>
            <div className="card bg-deep-violet grid pb-2 w-full h-[600px] overflow-hidden hover:bg-electric-pink transition-all">
              <img src={ aespathree } alt="" className="w-full h-[450px] object-cover" />
              <div className="item-info mx-4">
                <div className="add-to-heart flex items-center justify-between">
                  <h2 className="name text-[1.25rem] font-[700]">Name</h2>
                  <div className="heart-icon text-[1.50rem]">
                      <button >
                        <i className="fa-regular fa-heart"></i>
                      </button>
                  </div>
                </div>
                <p className="theme truncate">PC Theme</p>
                <p className="price mt-4 before:content-['₱'] before:text-[1rem] before:mr-1 text-[1.25rem]">100</p>
              </div>
            </div>
            <div className="card bg-deep-violet grid pb-2 w-full h-[600px] overflow-hidden hover:bg-electric-pink transition-all">
              <img src={ aespafour } alt="" className="w-full h-[450px] object-cover" />
              <div className="item-info mx-4">
                <div className="add-to-heart flex items-center justify-between">
                  <h2 className="name text-[1.25rem] font-[700]">Name</h2>
                  <div className="heart-icon text-[1.50rem]">
                      <button >
                        <i className="fa-regular fa-heart"></i>
                      </button>
                  </div>
                </div>
                <p className="theme truncate">PC Theme</p>
                <p className="price mt-4 before:content-['₱'] before:text-[1rem] before:mr-1 text-[1.25rem]">100</p>
              </div>
            </div>

            
          </div>
        </div>

        {/* LE SERAFFIM */}
        <div className="le-seraffim-containter px-[15px] sm:px-[25px] md:px-[50px] lg:px-[75px] xl:px-[100px] 2xl:px-[150px] premium:px-[200px]">
          <h1 className="text-[2.5rem] font-[900] mb-4 mt-[50px]">LE SERAFFIM</h1>
          <hr />
          <div className="items cursor-pointer grid grid-cols-1 gap-[15px] mt-[16px] sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 premium:grid-cols-5">
            <div className="card bg-deep-violet grid pb-2 w-full h-[600px] overflow-hidden hover:bg-electric-pink transition-all">
              <img src={ leone } alt="" className="w-full h-[450px] object-cover" />
              <div className="item-info mx-4">
                <div className="add-to-heart flex items-center justify-between">
                  <h2 className="name text-[1.25rem] font-[700]">Nayeon</h2>
                  <div className="heart-icon text-[1.50rem]">
                      <button >
                        <i className="fa-regular fa-heart"></i>
                      </button>
                  </div>
                </div>
                <p className="theme truncate">PC Theme</p>
                <p className="price mt-4 before:content-['₱'] before:text-[1rem] before:mr-1 text-[1.25rem]">100</p>
              </div>
            </div>
            <div className="card bg-deep-violet grid pb-2 w-full h-[600px] overflow-hidden hover:bg-electric-pink transition-all">
              <img src={ letwo } alt="" className="w-full h-[450px] object-cover" />
              <div className="item-info mx-4">
                <div className="add-to-heart flex items-center justify-between">
                  <h2 className="name text-[1.25rem] font-[700]">Nayeon</h2>
                  <div className="heart-icon text-[1.50rem]">
                      <button >
                        <i className="fa-regular fa-heart"></i>
                      </button>
                  </div>
                </div>
                <p className="theme truncate">PC Theme</p>
                <p className="price mt-4 before:content-['₱'] before:text-[1rem] before:mr-1 text-[1.25rem]">100</p>
              </div>
            </div>
            <div className="card bg-deep-violet grid pb-2 w-full h-[600px] overflow-hidden hover:bg-electric-pink transition-all">
              <img src={ lethree } alt="" className="w-full h-[450px] object-cover" />
              <div className="item-info mx-4">
                <div className="add-to-heart flex items-center justify-between">
                  <h2 className="name text-[1.25rem] font-[700]">Nayeon</h2>
                  <div className="heart-icon text-[1.50rem]">
                      <button >
                        <i className="fa-regular fa-heart"></i>
                      </button>
                  </div>
                </div>
                <p className="theme truncate">PC Theme</p>
                <p className="price mt-4 before:content-['₱'] before:text-[1rem] before:mr-1 text-[1.25rem]">100</p>
              </div>
            </div>
            <div className="card bg-deep-violet grid pb-2 w-full h-[600px] overflow-hidden hover:bg-electric-pink transition-all">
              <img src={ lefour } alt="" className="w-full h-[450px] object-cover" />
              <div className="item-info mx-4">
                <div className="add-to-heart flex items-center justify-between">
                  <h2 className="name text-[1.25rem] font-[700]">Nayeon</h2>
                  <div className="heart-icon text-[1.50rem]">
                      <button >
                        <i className="fa-regular fa-heart"></i>
                      </button>
                  </div>
                </div>
                <p className="theme truncate">PC Theme</p>
                <p className="price mt-4 before:content-['₱'] before:text-[1rem] before:mr-1 text-[1.25rem]">100</p>
              </div>
            </div>
            <div className="card bg-deep-violet grid pb-2 w-full h-[600px] overflow-hidden hover:bg-electric-pink transition-all">
              <img src={ lefive } alt="" className="w-full h-[450px] object-cover" />
              <div className="item-info mx-4">
                <div className="add-to-heart flex items-center justify-between">
                  <h2 className="name text-[1.25rem] font-[700]">Nayeon</h2>
                  <div className="heart-icon text-[1.50rem]">
                      <button >
                        <i className="fa-regular fa-heart"></i>
                      </button>
                  </div>
                </div>
                <p className="theme truncate">PC Theme</p>
                <p className="price mt-4 before:content-['₱'] before:text-[1rem] before:mr-1 text-[1.25rem]">100</p>
              </div>
            </div>

            
          </div>
        </div>

      </section>
      <Footer />
    </>
  )
}

export default Shop