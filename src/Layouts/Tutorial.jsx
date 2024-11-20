import React from 'react';
import { Link } from 'react-router-dom';

const Tutorial = () => {
    return (
        <div className='bg-base-200 pb-6'>
            <div className='py-7 flex flex-col items-center  bg-gradient-to-b from-cyan-500 to-blue-500   justify-center mb-10'><p className='inline-block text-[1.6rem] font-extrabold text-white  text-center mb-2 '>All Tutorials</p>
                    <p className='text-[#ffffffeb]  text-[0.9rem] w-[50%] mx-auto text-center'>Watch these videos and try to read and write All the alphabets and then words. Try to do your best , hopefully gradually you will learn it. </p>

                </div>

                <div className='grid grid-cols-2
                 w-11/12 mx-auto gap-8'>
                    <div className=' bg-white p-3'>
                    <h2 className='mb-4 flex  mx-auto text-[#054c97c5] font-bold text-[1.4rem] mt-3'>Introduction: </h2>
                        <iframe width="535" height="315" src="https://www.youtube.com/embed/rGrBHiuPlT0?si=heWeLEYsosBhX7pW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

               

                <div className=' bg-white p-3'>
                <h2 className='mb-4 flex  mx-auto text-[#054c97c5]  font-bold text-[1.4rem] mt-3'>Count: </h2>
                    <iframe width="535" height="315" src="https://www.youtube.com/embed/bOUqVC4XkOY?si=XxHSYl-GwV2RDB60" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>


                <div className=' bg-white p-3'>
                <h2 className='mb-4 flex  mx-auto text-[#054c97c5] font-bold text-[1.4rem] mt-3'>Week & Days: </h2>
                <iframe width="535" height="315" src="https://www.youtube.com/embed/JnoZE51WZg4?si=XQgntVE6ZGV4-nCT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

                <div className=' bg-white p-3'>
                <h2 className='mb-4 flex  mx-auto text-[#054c97c5] font-bold text-[1.4rem] mt-3'>Destination: </h2>
                <iframe width="535" height="315" src="https://www.youtube.com/embed/k74yjmfFb_A?si=4TTg1-qfuVRdYypC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

                <div className=' bg-white p-3'>
                <h2 className='mb-4 flex  mx-auto text-[#054c97c5] font-bold text-[1.4rem] mt-3'>Verbs : </h2>
                <iframe width="535" height="315" src="https://www.youtube.com/embed/KUIWRsVZZZA?si=WILWtI5rtrP-l6tz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

                <div className=' bg-white p-3'>
                <h2 className='mb-4 flex  mx-auto text-[#054c97c5] font-bold text-[1.4rem] mt-3'>To Do Verbs: </h2>
                <iframe width="535" height="315" src="https://www.youtube.com/embed/ZGGufccTLso?si=Q4qRwymMTtV2NN2T" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

                <div className=' bg-white p-3'>
                <h2 className='mb-4 flex  mx-auto text-[#054c97c5] font-bold text-[1.4rem] mt-3'>Give & Receive: </h2>
                <iframe width="535" height="315" src="https://www.youtube.com/embed/W0n-ODPwtzA?si=UXMRLX92rG93j986" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>

                <div className=' bg-white p-3'>
                <h2 className='mb-4 flex  mx-auto text-[#054c97c5] font-bold text-[1.4rem] mt-3'>Family: </h2>
                <iframe width="535" height="315" src="https://www.youtube.com/embed/p9PEIsOzJ5E?si=r8WtzAoSQ28ve0Cw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                </div>

                <div className='flex justify-center mt-5'>
            <Link to={'/learning'} className='py-2 rounded-lg px-[4rem] bg-gradient-to-b from-cyan-500 to-blue-500    text-white '>Learn Vocabularies</Link>
            </div>
        </div>
    );
};

export default Tutorial;