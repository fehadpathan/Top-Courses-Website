import React, { useState } from 'react'
import Card from './Card';

const Cards = (props) => {
    let courses=props.courses;
    let category=props.category;
    const [likecourses,setlikecourses]=useState([]);
    //all cources into single array
    function getcourses(){
       if(category ==="All")
        {
            let allcourse=[];
            Object.values(courses).forEach(array => 
            {
                    array.forEach(coursesdata => 
                        {
                          allcourse.push(coursesdata);
                        })
            })
            return allcourse;
       }
       else {
           return courses[category];
       }
    }
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
    {getcourses().map((course) => (
      <Card
        key={course.id}
        course={course}
        likecourses={likecourses}
        setlikecourses={setlikecourses}
      />
    ))}
  </div>
  )
}

export default Cards
