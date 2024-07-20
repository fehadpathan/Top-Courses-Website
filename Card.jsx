import React from 'react';
import './Card.css';
import { useState } from 'react';

const Card = (props) => {
    let course=props.course;
    let likecourses=props.likecourses;
    let setlikecourses=props.setlikecourses;
    const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };
    function clickhandler(){
        if(likecourses.includes(course.id)){
            setlikecourses((prev)=> prev.filter((cid) => (cid!==course.id)));
        }
        else{
            if(likecourses.length===0){
                setlikecourses([course.id]);

            }
            else{
                setlikecourses((prev)=>[...prev,course.id]);

            }
        }
    }
   return(

    <div className="card_box" onClick={toggleDescription}>
               <div className="image_container">
                   <img src={course.image.url} alt={course.title} />
              </div>
              <div className="content_container">
                      <h3>{course.title}</h3>
                      <p className="description">
                      {showFullDescription ? course.description : (course.description.length > 100 ? `${course.description.substr(0, 100)}....` : course.description)}
                     </p>
             </div>
               <div className="button_container">
                    <button onClick={clickhandler}
                       className='like-me-button'
                     >
                         <div className="yellow-circle"></div>
                         <div className="orange-circle"></div>
                         <div className="pink-circle"></div>
                         <div className="red-circle"></div>
                         <p>Like me</p>
                   </button>
    </div>
  </div>
   )
}

export default Card
