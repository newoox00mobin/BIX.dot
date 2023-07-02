import React, {Component} from "react";
import Slider from "react-slick";
import CardSlider from "../Card/CardSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./slicksliyder.mudele.css";


export default class Slickslider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay:true,
            className: styles.slider
        };
        return (
            <div >
                <Slider {...settings}>
                    <div >
                        <CardSlider
                        title="ali ehtesham"
                        desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
                        name="icon-slider1"
                        iconsrc={require("../../../assets/images/icon-slider1.png")}
                        />
                    </div>
                    <div >
                        <CardSlider
                        title="mohammad mobin behzad"
                        desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
                        name="icon-slider2"
                        iconsrc={require("../../../assets/images/icon-slider2.png")}
                        />
                    </div>
                    <div >
                        <CardSlider
                        title="mohammad hossein imani"
                        desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
                        name="icon-slider3"
                        iconsrc={require("../../../assets/images/icon-slider3.png")}
                        />
                    </div>
                    <div >
                        <CardSlider
                        title="fatmeh akbari"
                        desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
                        name="icon-slider4"
                        iconsrc={require("../../../assets/images/icon-slilder4.png")}
                        />
                    </div>
                    <div >
                        <CardSlider
                        title="ali mahmodi"
                        desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
                        name="icon-slider5"
                        iconsrc={require("../../../assets/images/icon-slider5.png")}
                        />
                    </div>
                    <div >
                        <CardSlider
                        title="zahra heydari"
                        desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
                        name="icon-slider6"
                        iconsrc={require("../../../assets/images/icon-slider6.png")}
                        />
                    </div>
                </Slider>
            </div>
        );
    }
}