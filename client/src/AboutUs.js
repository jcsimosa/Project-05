import React from "react";

function AboutUs(){
    return (
        <div>
            <div className="grid grid-rows-3 grid-flow-col gap-4">
                <div className="row-start-2 row-span-2 ...">
                    <p className="text-xl font-semibold text-black-600/100 dark:text-black-500/100text-xl font-semibold text-black-600/100 dark:text-black-500/100">We are looking to support users to keep control over what 
                they should watch and be more organized about the different genres among such a vast universe as anime is, 
                thank you all for all the support and help you provide, im going to miss every one of your faces around my screen every morning, hopefully we will keep in contact and wish you all the best</p>
                </div>
                <div className="row-end-3 row-span-2 ...">
                    <img src="https://m.media-amazon.com/images/M/MV5BNzc5MTczNDQtNDFjNi00ZDU5LWFkNzItOTE1NzQzMzdhNzMxXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_QL75_UX190_CR0,2,190,281_.jpg" alt="img"></img>
                </div>
            </div>


            {/* <p className="text-xl font-semibold text-black-600/100 dark:text-black-500/100text-xl font-semibold text-black-600/100 dark:text-black-500/100">We are looking to support users to keep control over what 
            they should watch and be more organized about the different genres among such a vast universe as anime is, 
            thank you all for all the support and help you provide, im going to miss every one of your faces around my screen every morning, hopefully we will keep in contact and wish you all the best</p> */}
        </div>
    )
}
export default AboutUs