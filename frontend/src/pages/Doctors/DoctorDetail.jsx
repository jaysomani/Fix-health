import React from 'react';
import doctorImg from '../../assets/images/doctor-img02.png';
import starIcon from'../../assets/images/Star.png';

const DoctorDetails = () => {
    return <section>
        <div className='max-w-[1170px] px-5 mx-auto'>
            <div className='grid md:grid-cols-3 gap-[50px]'>
                <div className='md:col-span-2'>
                    <div className='flex items-center gap-5'>
                        <figure className='max-w-[200px] max-h-[200px]'>
                            <img src={doctorImg} className='w-full'/>
                        </figure>

                    <div>
                    <span className='bg-white text-irisBlueColor py-1 px6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded'>
                        surgeon
                    </span>
                    <h3 className='text-headingColor text-[22px] leading-9 mt-3 font-bold'>Muhibur rahman</h3>
                    <div className='flex items-center gap-[6px]'>
                        <span className='flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor'>
                            <img src={starIcon}/> 4.8
                        </span>

                    </div>
                    <p className='text_para text-[14px] leading-5 md:text-[15px] max-w-[390px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil error molestiae ab tenetur suscipit deleniti, praesentium pariatur, explicabo mollitia veniam ea, possimus vero eveniet assumenda quisquam! Voluptates id mollitia quia! Saepe, nisi?</p>
                </div>
            </div>
            </div>

            </div>
        </div>
    </section>
}

export default DoctorDetails;