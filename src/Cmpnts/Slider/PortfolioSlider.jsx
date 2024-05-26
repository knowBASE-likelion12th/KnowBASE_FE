import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import testImg from '../../assets/testImg.png'


import Block from '../Model/Block'

export default function CareerSlider({name}){


    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
            className={className}
            style={{
                display: "block",
                backgroundColor: "rgba(0, 0, 0, 0.20)",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                zIndex: 3,
                top: "35%",
                left: "3px"
            }}
            onClick={onClick}
          />
        );
      }

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{
                display: "block",
                backgroundColor: "rgba(0, 0, 0, 0.20)",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                zIndex: 3,
                top: "35%",
                right: "3px"
            }}
            onClick={onClick}
          />
        );
      }
      
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    let careerObject = [{
        img: testImg,
        name: name,
        score: 5.0,
        count: 10,
        content: '모던한 인테리어,,,',
        tag1:'모던',
        tag2:'앤티크',
    },
    {
        img: testImg,
        name: name,
        score: 5.0,
        count: 10,
        content: '모던한 인테리어,,,',
        tag1:'모던',
        tag2:'앤티크',
    },
    {
        img: testImg,
        name: name,
        score: 5.0,
        count: 10,
        content: '모던한 인테리어,,,',
        tag1:'모던',
        tag2:'앤티크',
    },
    {
        img: testImg,
        name: name,
        score: 5.0,
        count: 10,
        content: '모던한 인테리어,,,',
        tag1:'모던',
        tag2:'앤티크',
    }
];
    return(
        <Slider {...settings}>
            {careerObject.map((elem)=>(
                <div style={{
                    width: "380px",
                    height: "470px",
                    margin: "auto",
                    borderRadius: "10px"
                    }}>
            <img src={elem.img}></img>
            </div>
            ))}
            
        </Slider>
    )
}