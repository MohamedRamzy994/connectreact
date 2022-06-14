import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import Button from '@mui/material/Button'
import './home-slider.scss'


function HomeSlider() {


return(
    <div id="slider">
    <Container>
        <Carousel fade>
            <Carousel.Item>
                <Row>
                    <div className="slider-caption col-md-6">
                        <p>
                            ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف.
                            خمسة قرون من الزمن لم تقضي على هذا النص
                        </p>
                        <Button variant='contained' className="btnlogin">تجربة مجانية</Button>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFya2V0aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt='' />
    
                    </div>
    
                </Row>
    
            </Carousel.Item>
            <Carousel.Item>
                <Row>
                    <div className="slider-caption col-md-6">
                        <p>
                            ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف.
                            خمسة قرون من الزمن لم تقضي على هذا النص
                        </p>
                        <Button variant='contained' className="btnlogin">تجربة مجانية</Button>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFya2V0aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt='' />
    
                    </div>
    
                </Row>
            </Carousel.Item>
            <Carousel.Item>
                <Row>
                    <div className="slider-caption col-md-6">
                        <p>
                            ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف.
                            خمسة قرون من الزمن لم تقضي على هذا النص
                        </p>
                        <Button variant='contained' className="btnlogin">تجربة مجانية</Button>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hcmtldGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt='' />
    
                    </div>
    
                </Row>
            </Carousel.Item>
        </Carousel>
    </Container>
    </div>
    
)
}

export default HomeSlider
