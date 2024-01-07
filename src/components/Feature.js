import React from "react";
import './Feature.css';
import Rightarrow from '../asset/Arrow_right.jpg';
import globe from '../asset/globe.jpg';
import lock from '../asset/lock.jpg';
import key from '../asset/key.jpg';

function Feature(){
    return(
        <div className="Feature1">
            <div className="inside_Feature1">
                <div className="feature_div1">
                    <div className="inside_feature_div1">
                    <div className="feature_head_div">
                    Elevating Card Programs with Cutting-Edge Technology
                    <p className="feature_para">
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                    </div>
                    <div className="Action">
                        <p className="Action_para">Compare all pro features <img src={Rightarrow} className="right_arrow"></img></p>

                    </div>

                    </div>
                    <div className="inside_feature_div2">
                        <div className="feature_div2_part1">
                            <div className="part1_one">
                                <div className="icon_div">
                                    <img src={globe} className="icon_img"></img>
                                </div>
                                <div className="para_div">
                                    <div className="para_div_1">
                                    Globally Accepted
                                    </div>
                                    <div className="para_div_2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="feature_div2_part1">
                        <div className="part1_one">
                                <div className="icon_div">
                                    <img src={key} className="icon_img"></img>
                                </div>
                                <div className="para_div">
                                    <div className="para_div_1">
                                    Biometric Integrated
                                    </div>
                                    <div className="para_div_2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="feature_div2_part1">
                        <div className="part1_one">
                                <div className="icon_div">
                                    <img src={lock} className="icon_img"></img>
                                </div>
                                <div className="para_div">
                                    <div className="para_div_1">
                                    Fully Secured
                                    </div>
                                    <div className="para_div_2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                   
                 
                   

                </div>

            </div>

        </div>
    )
}
export default Feature;