import React from 'react'
import Button  from '@mui/material/Button';
import './home-startnow.scss'

function HomeStartnow() {
  return (
    <div id='startnow'>

<div className="container-fluid">
    
    <div className="row boxmargin ">
        <h3 className="text-center mb-5">
            ابدأ الأن  
           </h3>
         <div className="col-md-1"></div>
        <div className="col-md-3 introbox mb-2 text-center">
            <div className="boxhalf">
                <img src="../../assets/ic_important_devices_24px.png" className="img-fluid"/>
                <h5> طلب عرض توضيحي</h5>
            </div>
           
           
            <p className="p-5">
                تعرّف على ما يمكن أن تقدمه  لك           </p>
                <Button variant='contained' className="mb-5">مشاهدة عرض توضيحى</Button>
   
        </div>
        <div className="col-md-3 introbox mb-2 text-center">
               <div className="boxhalf">
           <img src="../../assets/ic_touch_app_24px.png" className="img-fluid"/>
           <h5> انطلق فى جولة</h5>
           </div>
          
           <p className="p-5">
            تعرّف على ما يمكن أن تقدمه  لك           </p>
            <Button variant='contained'  className="mb-5">  تصفح  فى جولة</Button>
   
       </div>
       <div className="col-md-3 introbox mb-2 text-center">
        <div className="boxhalf">

           <img src="../../assets/ic_chat_24px.png" className="img-fluid"/>
           <h5> اتصل بالمبيعات</h5>
           </div>
        
           <p className="p-5">
    
            تعرّف على ما يمكن أن تقدمه  لك           
        
        </p>
        <Button variant='contained' className="mb-5">  الاتصال بالمبيعات</Button>
   
   
       </div>
    
        
   
   
    </div>
   </div>
   
    </div>
  )
}

export default HomeStartnow