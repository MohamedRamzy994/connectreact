import React from 'react'
import { Col, Container, Row  } from 'react-bootstrap'
import Button from '@mui/material/Button'
import './home-intro.scss'

import { color } from '@mui/system'




function HomeIntro() {
  return (
      <div id="intro">
    <Container>
 
    <Row className="mt-5 pe-md-5 me-md-2 mb-5">
        <Col md="5" className="introbox mb-5 m-md-4 m-sm-0  ">
            <h3>التسويق </h3>
            <p>
                هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
                سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع
                الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم
                لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد
            </p>
            <Button variant='contained'>استكشاف</Button>
        </Col>
        <Col md="5" className=" introbox mb-5 m-md-4 m-sm-0 ">
            <h3>المبيعات </h3>
            <p>
                هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
                سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع
                الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم
                لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد
            </p>
            <Button variant='contained'>استكشاف</Button>
        </Col>



    </Row>
  
    <Row className="me-md-5 me-sm-0 pe-md-5 pe-sm-0">
        <div className="introbox text-center col-md-3 mb-3 mb-md-0 m-md-4 m-sm-1 m-0 p-md-5 p-sm-2">
            <img src="../../assets/sms.png" />
            <h5>الرسائل النصية</h5>
        </div>
        <div className="introbox text-center col-md-3 mb-3 mb-md-0 m-md-4 m-sm-1 m-0 p-md-5 p-sm-2">


            <img src="../../assets/email.png" />
            <h5> البريد الإلكترونى</h5>
        </div>
        <div className="introbox text-center  col-md-3 mb-3 mb-md-0 m-md-4 m-sm-1 m-0 p-md-5 p-sm-2">
            <img src="../../assets/social-media.png" />
            <h5> السوشيال ميديا</h5>
        </div>
        </Row>
        <div className="row  me-md-5 me-sm-0 pe-md-5 pe-sm-0">
        <div className="introbox text-center col-md-3 mb-3 mb-md-0 m-md-4 m-sm-1 m-0 p-md-5 p-sm-2">
            <img src="../../assets/content.png" />
            <h5> التسويق الإلكترونى</h5>
        </div>
        <div className="introbox text-center col-md-3 mb-3 mb-md-0 m-md-4 m-sm-1 m-0 p-md-5 p-sm-2">


            <img src="../../assets/web-design.png" />
            <h5> التصميم الفوتوغرافى</h5>
        </div>
        <div className="introbox text-center  col-md-3 mb-3 mb-md-0 m-md-4 m-sm-1 m-0 p-md-5 p-sm-2">
            <img src="../../assets/robot.png" />
            <h5 className="text-center"> التشات بوت </h5>
        </div>




    </div>
   
        <Row className="mt-5 me-0 ms-md-5 introbox">
            <div className="col-md-8 col-sm-12">
                <h5>
                    لوريم إيبسوم
                </h5>
                <p>
                    هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما، عليك أن تتحقق أولاً أن ليس هناك أي كلمات أو عبارات محرجة أو غير لائقة مخبأة في هذا النص
                </p>
                <Button variant='contained'>طلب عرض توضيحى</Button>
               
            </div>
            <div className="col-md-4 col-sm-12">
                <img className="img-fluid mt-3 rounded-3" src="../../assets/marvin-meyer-SYTO3xs06fU-unsplash.png" />
            </div>
        </Row>

    
        </Container>
        </div>
  )
}

export default HomeIntro