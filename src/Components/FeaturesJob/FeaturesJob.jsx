import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturesJob = () => {
    const [jobs,setJobs]=useState([]);
    const [datalength,setDataLength]=useState(4);
    useEffect(()=>{
        fetch('jobs.json')
        .then(response=>response.json())
        .then(data=>setJobs(data)) 
    },[])
    return (
        <div>
             <div className="text-center">
             <h2 className="text-5xl">Featured Jobs{jobs.length}</h2>
             <p className="text-center">Expore Thousands of job opportunities with all the 
                information you need.Its your fature</p>
             </div>
             <div className="grid grid-cols-2 gap-5">
                {
                    jobs.slice(0,datalength).map(job=><Job key={job.id} job={job}></Job>)
                }
             </div>
             <div className={datalength===jobs.length&&'hidden'}>
                <button onClick={()=>setDataLength(jobs.length)}
                 className="btn btn-primary">Show All Jobs</button>
             </div>
        </div>
    );
};

export default FeaturesJob;