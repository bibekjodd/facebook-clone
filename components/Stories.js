import React from 'react'

function Stories() {
    return (
        <div className='h-32 md:h-36 flex flex-wrap overflow-hidden justify-center mt-5'>

            <div className='rounded-xl h-full overflow-hidden relative mx-1 hover:opacity-90 cursor-pointer'>
                <img className='rounded-full w-7 aspect-square object-cover absolute left-3 top-2 ring-2 ring-blue-500'
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg" alt="" />

                <img className='-z-10 h-full object-cover w-full'
                    src="https://cdn.britannica.com/45/223045-050-A6453D5D/Telsa-CEO-Elon-Musk-2014.jpg" alt="" />
                <h1 className='text-center absolute bottom-1 left-1/2 -translate-x-1/2 font-semibold text-xs sm:text-sm text-white w-full'>Elon Musk</h1>
            </div>



            <div className='rounded-xl h-full overflow-hidden relative mx-1 hover:opacity-90 cursor-pointer'>
                <img className='rounded-full w-7 aspect-square object-cover absolute left-3 top-2 ring-2 ring-blue-500'
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/330px-Donald_Trump_official_portrait.jpg" alt="" />

                <img className='-z-10 h-full object-cover w-full'
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/330px-Donald_Trump_official_portrait.jpg" alt="" />
                <h1 className='text-center absolute bottom-1 left-1/2 -translate-x-1/2 font-semibold text-xs sm:text-sm text-white w-full'>Donald Trump</h1>
            </div>



            <div className='rounded-xl h-full overflow-hidden relative mx-1 hover:opacity-90 cursor-pointer'>
                <img className='rounded-full w-7 aspect-square object-cover absolute left-3 top-2 ring-2 ring-blue-500'
                    src="https://www.famousbirthsdeaths.com/wp-content/uploads/2016/09/vladimir-putin-bio-net-worth-facts-300x300.jpg" alt="" />

                <img className='-z-10 h-full object-cover w-full'
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Vladimir_Putin_17-11-2021_%28cropped%29.jpg/330px-Vladimir_Putin_17-11-2021_%28cropped%29.jpg" alt="" />
                <h1 className='text-center absolute bottom-1 left-1/2 -translate-x-1/2 font-semibold text-xs sm:text-sm text-white w-full'>Vladimir Putin</h1>
            </div>



            <div className='rounded-xl h-full overflow-hidden relative mx-1 hover:opacity-90 cursor-pointer'>
                <img className='rounded-full w-7 aspect-square object-cover absolute left-3 top-2 ring-2 ring-blue-500'
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Prime_Minister_of_Nepal%2C_Mr._K.P._Sharma_Oli%2C_at_Hyderabad_House%2C_in_New_Delhi_on_April_07%2C_2018_%281%29.jpg/330px-Prime_Minister_of_Nepal%2C_Mr._K.P._Sharma_Oli%2C_at_Hyderabad_House%2C_in_New_Delhi_on_April_07%2C_2018_%281%29.jpg" alt="" />

                <img className='-z-10 h-full object-cover w-full'
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/KP_Oli.jpeg/255px-KP_Oli.jpeg" alt="" />
                <h1 className='text-center absolute bottom-1 left-1/2 -translate-x-1/2 font-semibold text-xs sm:text-sm text-white w-full'>Kp Oli</h1>
            </div>



            <div className='rounded-xl h-full overflow-hidden relative mx-1 hover:opacity-90 cursor-pointer'>
                <img className='rounded-full w-7 aspect-square object-cover absolute left-3 top-2 ring-2 ring-blue-500'
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c0/Official_Photograph_of_Prime_Minister_Narendra_Modi_Potrait.png" alt="" />

                <img className='-z-10 h-full object-cover w-full'
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Modi_at_GNLU.jpg/270px-Modi_at_GNLU.jpg" alt="" />
                <h1 className='text-center absolute bottom-1 left-1/2 -translate-x-1/2 font-semibold text-xs sm:text-sm text-white w-full'>Narendra Modi</h1>
            </div>



        </div>
    )
}

export default Stories