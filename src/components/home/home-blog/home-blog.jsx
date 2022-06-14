import { Button } from '@mui/material'
import React from 'react'
import './home-blog.scss'

function HomeBlog() {
  return (
    <div id='blog'>

<div className="container-fluid">
 
 <div className="row boxmargin ">
     <h3 className="text-center mb-5">
         المدونة
        </h3>
      <div className="col-md-1"></div>
     <div className="col-md-3 introbox mb-2 text-center">
        

             <img src="../../assets/jason-goodman-Oalh2MojUuk-unsplash.png" className="img-fluid"/>
             
             <div className="row">
                 <div className="col-md-6">
                     <img className="ico" src="../../assets/ic_perm_identity_24px.png" alt="" /> <span>Ahmed</span>
                 </div>
                 <div className="col-md-6">
                     <img className="ico" src="../../assets/ic_loyalty_24px.png" alt="" /> <span>التسويق</span>
                 </div>
             </div>
             <div className="row">
                 <div className="col-md-12">
                     <p className="ps-4 pe-4 pt-2 text-center">
                         هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. 
                         ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام
                     </p>
                 </div>
                 
             </div>
             <Button variant='contained' className="btnlogin mb-5">  المزيد</Button>

     </div>
     <div className="col-md-3 introbox mb-2 text-center">
        

         <img src="../../assets/jason-goodman-Oalh2MojUuk-unsplash.png" className="img-fluid"/>
         
         <div className="row">
             <div className="col-md-6">
                 <img className="ico" src="../../assets/ic_perm_identity_24px.png" alt="" /> <span>Ahmed</span>
             </div>
             <div className="col-md-6">
                 <img className="ico" src="../../assets/ic_loyalty_24px.png" alt="" /> <span>البرمجة</span>
             </div>
         </div>
         <div className="row">
             <div className="col-md-12">
                 <p className="ps-4 pe-4 pt-2 text-center">
                     هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. 
                     ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام
                 </p>
             </div>
             
         </div>
         <Button variant='contained' className="btnlogin mb-5">  المزيد</Button>

 </div>
 <div className="col-md-3 introbox mb-2 text-center">
        

     <img src="../../assets/jason-goodman-Oalh2MojUuk-unsplash.png" className="img-fluid"/>
     
     <div className="row">
         <div className="col-md-6">
             <img className="ico" src="../../assets/ic_perm_identity_24px.png" alt="" /> <span>Ahmed</span>
         </div>
         <div className="col-md-6">
             <img className="ico" src="../../assets/ic_loyalty_24px.png" alt="" /> <span>المبيعات </span>
         </div>
     </div>
     <div className="row">
         <div className="col-md-12">
             <p className="ps-4 pe-4 pt-2 text-center">
                 هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. 
                 ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام
             </p>
         </div>
         
     </div>
     <Button variant='contained' className="btnlogin mb-5">  المزيد</Button>

</div>
   
 
     


 </div>
</div>

    </div>
  )
}

export default HomeBlog