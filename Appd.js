import React, { useEffect, useState } from 'react'
import Filters from './Compo/Filters'
import { filterdata, apiURl } from './Compo/Data'
import Spinner from './Compo/Spinner';
import Cards from './Compo/Cards';

const Appd = () => {
    const [courses, setCourses] = useState(null);
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState(filterdata[0].title);

    async function fetchData() {
        setLoading(true);
        try {
            let response = await fetch(apiURl);
            let output = await response.json();
            setCourses(output.data);
        } catch (error) {
            console.log("There is an issue with the API URL");
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <div className="font-bold text-3xl mb-4 py-4 text-center">
                <div className='uppercase tracking-wide'>
                    <span className='text-orange-400 hover:text-blue-400'>Top </span>
                    <span className='text-blue-400 hover:text-orange-400'>Courses</span>
                </div>
            </div>
            <div className="mb-4 space-y-4 text-center">
                <Filters filterdata={filterdata} category={category} setCategory={setCategory} />
            </div>
            <div className='w-11/12 max-w-[1200px] mx-auto flex justify-center flex-wrap items-center min-h-[50vh] gap-4'>
                {loading ? <Spinner /> : <Cards courses={courses} category={category} />}
            </div>
        </div>
    )
}

export default Appd
