import React, { useState } from 'react'
import { Carousel, Container } from 'react-bootstrap'

import im from './../../Images/971.jpg'
import { devDetails, suppDetails } from '../../util/content'

function CarouselUtil() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <>      
            <Carousel activeIndex={index} onSelect={handleSelect} className="rounded-2 mt-2">
                { Object.keys(devDetails).map((ele,i) => {
                    return(
                        <Carousel.Item key={i}>
                            <Container fluid className='d-flex justify-content-center align-items-start'>
                            <Container fluid className=''>
                                <img src={im} className='w-100 carousel-image rounded-2' />
                            </Container>
                            <Container fluid className=''>
                                <Container fluid className='ms-0 ps-0 mb-3'>
                                    <h3 className='mb-0'>{devDetails[ele].name}</h3>
                                    <cite className='text-secondary fs-6'>&nbsp;&nbsp;&nbsp;--{devDetails[ele].tag}</cite>
                                </Container>
                                <p>{devDetails[ele].desc}</p>
                            </Container>
                            </Container>
                        </Carousel.Item>
                    )
                })}
                <Carousel.Item>
                    <h4 className='mb-3 text-center'>Supporting Staff</h4>
                    <Container fluid className='d-flex justify-content-center align-items-start'>
                        { Object.keys(suppDetails).map((ele,i) => {
                        return(
                            <Container fluid className='p-0 m-0 d-flex flex-column'>
                                <Container key={i} fluid className=''>
                                    <img src={im} className='w-100 carousel-image rounded-2' />
                                </Container>
                                <Container fluid className=''>
                                    <Container fluid className='ms-0 ps-0 mb-2'>
                                        <h5 className='mb-0'>{suppDetails[ele].name}</h5>
                                        <cite className='text-secondary fs-6'>&nbsp;&nbsp;&nbsp;--{suppDetails[ele].tag}</cite>
                                    </Container>
                                    <p>{suppDetails[ele].desc}</p>
                                </Container>
                            </Container>
                        )})}
                    </Container>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default CarouselUtil