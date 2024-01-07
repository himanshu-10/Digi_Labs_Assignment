import React from "react";
import './Add.css'; 
import Img1 from '../asset/Angel.jpg';
import Img2 from '../asset/Behance.jpg';
import Img3 from '../asset/Kinsta.jpg';
import Img4 from '../asset/Lotte.png';
import Img5 from '../asset/Nuxt.jpg';
import Img6 from '../asset/dribble.jpg';
import Img7 from '../asset/miro.png';
import Img8 from '../asset/wise.jpg';

function Add(){
    return(
        <div className="Add_section">
            <div className="add_image_section">
                <div className="add_image_section_div">
                <img src={Img5} className="add_image  "></img>
                    <img src={Img7} className="miro"></img>
                    <img src={Img4} className="Lotte"></img>
                    <img src={Img8} className="wise">
                    </img>
                    <img src = {Img6} className="dribble"></img>
                    <img src={Img3} className="kinsta"></img>
                    <img src={Img1} className="Angel"></img>
                    <img src={Img2} className="behance"></img>

                </div>
               
                 

                


            </div>


        </div>
    )
}
export default Add;