import React from 'react';

import img4 from '../assets/IMG4.jpg'
//product
import tea1 from '../assets/tea products/p3.png'
import tea2 from '../assets/tea products/tea2.jpg'
import tea4 from '../assets/tea products/tea12.jpg'
import tea6 from '../assets/tea products/p13.png'
import tea7 from '../assets/tea products/p7.png'
import tea8 from '../assets/tea01.jpg'


//customer
import cus1 from '../assets/cust/cu6.jpeg'
import cus2 from '../assets/cust/cu4.jpg'
import cus3 from '../assets/cust/c2.jpg'
import cus4 from '../assets/customer2.jpg'
import cus5 from '../assets/cust/cu8.jpeg'
import cus6 from '../assets/cust/cu5.jpg'

//Staff
import staff1 from '../assets/work 1.jpg';
import staff2 from '../assets/work (2).jpg';
import staff3 from '../assets/work 2.jpg';
import staff4 from '../assets/workers/worker3.jpeg';
import staff5 from '../assets/workers/worker4.jpeg';
import staff6 from '../assets/workers/worker5.jpeg'


// machines

import ma1 from '../assets/ma2.jpg';
import ma2 from '../assets/ma01.jpg';
import ma3 from '../assets/ma3.jpg';
import ma4 from '../assets/ma4.jpg';
import ma5 from '../assets/ma5.jpg';
import ma6 from '../assets/ma11.jpg';


export default function Gallery() {



    return (
        <div style={{ overflowY: 'hidden' }} className='bg-color'>
            {/* header image */}
            <div className='h-[500px]'
                style={{ backgroundImage: `url(${img4})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} >
                <h1 className='text-center text-white font-bold text-9xl  pt-52'>Gallery</h1>
            </div>

            {/*Product image*/}
            <h1 className='product-title mt-20 '>Product</h1>

            <div className='flex flex-row my-[10px] justify-center mt-10 items-center'>
                <div className='scroll'>
                    <div className='flex'>
                        <section>
                            <div className='card ml-2'>
                                <img src={tea1} className=' ' />
                                <div className='card-body'>
                                    <h1 className='card-title'>Tea</h1>
                                    <p className='card-sub-title'>Cinnamon,Turmeric,Ginger and Nugmet Tea</p>
                                    <p className='card-info'>Enriched With A Multi Flavoured Taste Which can Boost Our Energy Level</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className='card ml-2'>
                                <img src={tea2} className=' ' />
                                <div className='card-body'>
                                    <h1 className='card-title'>Tea</h1>
                                    <p className='card-sub-title'>Organic Peppermint Tea</p>
                                    <p className='card-info'>Fresh And Natural Peppermint Flavour Will Rule Your Tastebuds</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className='flex'>
                        <section className='[pr-400px] mt-10'>
                            <div className='card ml-2'>
                                <img src={tea6} className='card_img' />
                                <div className='card-body'>
                                    <h1 className='card-title'>Tea</h1>
                                    <p className='card-sub-title'>Organic Green Tea With Ginger</p>
                                    <p className='card-info'>Evolved With A High Standard Taste Now;Boosting Your Happiness</p>
                                </div>
                            </div>
                        </section>

                        <section className='flex mt-10'>
                            <div className='card ml-2'>
                                <img src={tea7} className='card_img' />
                                <div className='card-body'>
                                    <h1 className='card-title'>Tea</h1>
                                    <p className='card-sub-title'>Infused Tea</p>
                                    <p className='card-info'>Filled With Infused Tste And Natural Goodness Allowing You To Enjoy The Wolrd</p>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className='flex'>
                        <section className='[pr-400px] mt-10'>
                            <div className='card ml-2'>
                                <img src={tea8} className='card_img' />
                                <div className='card-body'>
                                    <h1 className='card-title'>Tea</h1>
                                    <p className='card-sub-title'>Specially Prepared Tea</p>
                                    <p className='card-info'>High Standard Tea With Lots Of Flavours And Tastes To Fulfill Your Day</p>
                                </div>
                            </div>
                        </section>

                        <section className='[pr-400px] mt-10'>
                            <div className='card ml-2'>
                                <img src={tea4} className='card_img ' />
                                <div className='card-body'>
                                    <h1 className='card-title'>Tea</h1>
                                    <p className='card-sub-title'>Organic Green Tea Bags</p>
                                    <p className='card-info'>Natural And Healthy Organic Green Tea With A Comfortable Bag-Based Method</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div> 
                
{/*2nd */}
                <h1 className='product-title mt-20 '>Customer</h1>


                <div className='flex flex-row my-[10px] justify-center mt-10 items-center'>
                <div className='scroll'>
                    <div className='flex'>
                        <section>
                            <div className='card ml-2'>
                                <img src={cus1} className=' ' />
                                <div className='card-body'>
                                    <h1 className='card-title'>Mr.Ranasinghe</h1>
                                    <p className='card-sub-title'>Individual Customer</p>
                                    <p className='card-info'>Receives Products From Our Delivery Agent For His Individual Purpose </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className='card ml-2'>
                                <img src={cus2} className=' ' />
                                <div className='card-body'>
                                    <h1 className='card-title'>Mr.Jeyaprakash</h1>
                                    <p className='card-sub-title'>Individual Wholesale Customer</p>
                                    <p className='card-info'>Buys Products From Our Wholesale-Distribution Delivery Person For His Business Needs</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className='flex'>
                        <section className='[pr-400px] mt-10'>
                            <div className='card ml-2'>
                                <img src={cus3} className='card_img' />
                                <div className='card-body'>
                                    <h1 className='card-title'>Mr.Antony</h1>
                                    <p className='card-sub-title'>Wholesale Dealer</p>
                                    <p className='card-info'>Receives Products From Our Wholesale-Distribution Delivery Person Directly </p>
                                </div>
                            </div>
                        </section>

                        <section className='flex mt-10'>
                            <div className='card ml-2'>
                                <img src={cus4} className='card_img' />
                                <div className='card-body'>
                                    <h1 className='card-title'>Mr.Ahmed</h1>
                                    <p className='card-sub-title'>Individual Customer</p>
                                    <p className='card-info'>Buys Products From Our Company For His Own Usage</p>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className='flex'>
                        <section className='[pr-400px] mt-10'>
                            <div className='card ml-2'>
                                <img src={cus5} className='card_img' />
                                <div className='card-body'>
                                    <h1 className='card-title'>Mr.Jeyawardhana</h1>
                                    <p className='card-sub-title'>Individual Customer</p>
                                    <p className='card-info'>Receives Products From Our Delivery Agent For His Individual Purpose</p>
                                </div>
                            </div>
                        </section>

                        <section className='[pr-400px] mt-10'>
                            <div className='card ml-2'>
                                <img src={cus6} className='card_img ' />
                                <div className='card-body'>
                                    <h1 className='card-title'>Ms.Sheela</h1>
                                    <p className='card-sub-title'>Individual Customer</p>
                                    <p className='card-info'>Buys Products From Our Company For Her Own Usage</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <h1 className='product-title mt-20 '>Staff</h1>

<div className='flex flex-row my-[10px] justify-center mt-10 items-center'>
<div className='scroll'>
    <div className='flex'>
        <section>
            <div className='card ml-2'>
                <img src={staff1} className=' ' />
                <div className='card-body'>
                    <h1 className='card-title'>QUALITY CHECK</h1>
                    <p className='card-sub-title'>Quality Checking Officers</p>
                    <p className='card-info'>To Ensure The Quality Of Products With A High Standard Check</p>
                </div>
            </div>
        </section>

        <section>
            <div className='card ml-2'>
                <img src={staff2} className=' ' />
                <div className='card-body'>
                    <h1 className='card-title'>MACHINERY MAINTAINENCE</h1>
                    <p className='card-sub-title'>Machinery Checkers</p>
                    <p className='card-info'>To Look After The Machines Whether They Are Working Properly Or Not</p>
                </div>
            </div>
        </section>
    </div>

    <div className='flex'>
        <section className='[pr-400px] mt-10'>
            <div className='card ml-2'>
                <img src={staff3} className='card_img' />
                <div className='card-body'>
                    <h1 className='card-title'>STOCK MANAGEMENT</h1>
                    <p className='card-sub-title'>Stock Managers </p>
                    <p className='card-info'>To Manage Inventory Activities And Maintaining Proper Stock Management</p>
                </div>
            </div>
        </section>

        <section className='flex mt-10'>
            <div className='card ml-2'>
                <img src={staff4} className='card_img' />
                <div className='card-body'>
                    <h1 className='card-title'>TEA PACKAGING</h1>
                    <p className='card-sub-title'>Packet Tea Packaging Unit</p>
                    <p className='card-info'>To Properly Pack The Tea Packets And Making Sure To Deliver Quality Products</p>
                </div>
            </div>
        </section>
    </div>
    <div className='flex'>
        <section className='[pr-400px] mt-10'>
            <div className='card ml-2'>
                <img src={staff5} className='card_img' />
                <div className='card-body'>
                    <h1 className='card-title'>WORKERS</h1>
                    <p className='card-sub-title'>Machinery Workers</p>
                    <p className='card-info'>To Do The Under Grade Works And Produce A Quality Product</p>
                </div>
            </div>
        </section>

        <section className='[pr-400px] mt-10'>
            <div className='card ml-2'>
                <img src={staff6} className='card_img ' />
                <div className='card-body'>
                    <h1 className='card-title'>INITIAL PROCESS</h1>
                    <p className='card-sub-title'>Tea Dust Separators</p>
                    <p className='card-info'>To Seperate Tea Dusks And Start The Tea Powder Making Process</p>
                </div>
            </div>
        </section>
    </div>
</div>
</div>

        <h1 className='product-title mt-20 '>Machinery</h1>

                <div className='flex flex-row my-[10px] justify-center mt-10 items-center'>
                <div className='scroll mb-14'>
                    <div className='flex'>
                        <section>
                            <div className='card ml-2 '>
                                <img src={ma1} className=' ' />
                                <div className='card-body'>
                                    <h1 className='card-title'>INITIAL PROCESSORS</h1>
                                    <p className='card-sub-title'>Tea Leaf Dryer</p>
                                    <p className='card-info'>Dry The Tea Leaves And Initiates The Process</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className='card ml-2'>
                                <img src={ma6} className=' ' />
                                <div className='card-body'>
                                    <h1 className='card-title'>FINAL PROCESSORS</h1>
                                    <p className='card-sub-title'>Tea Pack Packager</p>
                                    <p className='card-info'>Packs The Bunch Of Tea Packets In A Package</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className='flex'>
                        <section className='[pr-400px] mt-10'>
                            <div className='card ml-2'>
                                <img src={ma3} className='card_img' />
                                <div className='card-body'>
                                    <h1 className='card-title'>Main Machine</h1>
                                    <p className='card-sub-title'>Distillator</p>
                                    <p className='card-info'>Tea Leaves Distillation and Separation Will Be Done By This</p>
                                </div>
                            </div>
                        </section>

                        <section className='flex mt-10'>
                            <div className='card ml-2'>
                                <img src={ma4} className='card_img' />
                                <div className='card-body'>
                                    <h1 className='card-title'>PALLETIZER</h1>
                                    <p className='card-sub-title'>Automatic Tea Palletizing Machine</p>
                                    <p className='card-info'>Produces Dry And Dusky Tea Powder In Order To Start DistillationProduces Dry And Dusky Tea Powder In Order To Start Distillation</p>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className='flex'>
                        <section className='[pr-400px] mt-10'>
                            <div className='card ml-2'>
                                <img src={ma5} className='card_img' />
                                <div className='card-body'>
                                    <h1 className='card-title'>MIXING MACHINE</h1>
                                    <p className='card-sub-title'>Ingredient Mixer</p>
                                    <p className='card-info'>Helps to mix all the ingredients and elements while the making process</p>
                                </div>
                            </div>
                        </section>

                        <section className='[pr-400px] mt-10'>
                            <div className='card ml-2'>
                                <img src={ma2} className='card_img ' />
                                <div className='card-body'>
                                    <h1 className='card-title'>AUTOMATED PROCESSORS</h1>
                                    <p className='card-sub-title'>An Automated Tea Processing System</p>
                                    <p className='card-info'>Performs all the rest jobs and delivers a perfect tea powder to be packed</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

          <hr />
          
</div>

);
}
