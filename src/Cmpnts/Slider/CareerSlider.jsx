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
                // left: "-20px"
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
                // right: "3px"
            }}
            onClick={onClick}
          />
        );
      }
      
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
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
                <div className='cslider'>
            <Block name={elem.name} img={elem.img} score={elem.score} count={elem.count} content={elem.content} tag1={elem.tag1} tag2={elem.tag2}
            />
            </div>
            ))}
            
        </Slider>
    )
}