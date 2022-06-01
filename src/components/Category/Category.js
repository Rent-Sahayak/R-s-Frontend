import React from "react";
import OwlCarousel from 'react-owl-carousel'
import './Category.css'
function Category(){
    return(
        <div>
            <h1>Explore Categories</h1>
            <OwlCarousel
            items="4"
            autoplay
            nav
            dots
            loop

            >
                <div>
                    <img src='/assets/images/image5.png'></img>
                </div>
                <div>
                    <img src='/assets/images/image6.png'></img>
                </div>
                <div>
                    <img src='/assets/images/image7.png'></img>
                </div>
                <div>
                    <img src='/assets/images/image8.png'></img>
                </div>
                <div>
                    <img src='/assets/images/image9.png'></img>
                </div>
            </OwlCarousel>
        </div>
    )

}
export default Category;