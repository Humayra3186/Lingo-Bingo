import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { HiMiniSpeakerWave } from "react-icons/hi2";


const Vocabulary = () => {

    const handlePro =(pronuns)=>{
        const utterance = new SpeechSynthesisUtterance(pronuns);
        utterance.lang = 'ja-JP'; 
        window.speechSynthesis.speak(utterance);
    }
    const data = useLoaderData()
    const { lesson_no } = data[0]
    console.log(data)
    return (
        <div>
            <div className='flex justify-center'>
                <p className='bg-gradient-to-b from-cyan-500 to-blue-500 py-2  px-16  inline-block text-[1.6rem] font-extrabold text-white  text-center mb-2 '>Lesson - {lesson_no}</p>
            </div>

            <div className='grid grid-cols-3 gap-4 mt-6 w-10/12 mx-auto'>
                {
                    data.map(item => <div className={`p-6  rounded-lg ${item.lesson_no == 1 || item.lesson_no == 2 || item.lesson_no == 3 ? "bg-lime-400" : item.lesson_no == 4 || item.lesson_no == 5 || item.lesson_no == 6 ? "bg-amber-300" : "bg-rose-500"}`}>
                        <p className='flex justify-between'>Word : {item.word}
                           <button onClick={()=>handlePro(item.pronunciation)}> <HiMiniSpeakerWave className='text-[1.2rem]'></HiMiniSpeakerWave></button>
                        </p>
                        <p>Meaning : {item.meaning}</p>
                        <p>Pronunciation : {item.pronunciation
                        }</p>
                        <p>part_of_speech : {item.part_of_speech
                        }</p>
                        <div className='flex gap-4 mt-4'><button onClick={() => document.getElementById('my_modal_5').showModal()} className='bg-[#64d1e7f5] py-1 px-4 text-[0.9rem] rounded-md'>When-to-say</button>
                            <Link to={'/learning'} className='bg-[#64d1e7f5] text-[0.9rem] py-1  px-4 rounded-md text-slate-800'>Back to lesson</Link></div>
                            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-[#f8ead9] w-[10rem] ">
                    <p>Word : {item.word}</p>
                    <p>Meaning : {item.meaning}</p>
                    <p>Use : {item.
                        when_to_say

                    }</p>
                    <p>Example : {item.example

                    }</p>
                    <div className="modal-action">
                        <form method="dialog">

                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
                    </div>)
                }
            </div>



           


        </div>
    );
};

export default Vocabulary;