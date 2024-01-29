import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/LocalStorage";


const JobDetails = () => {
    const jobs=useLoaderData();
    const {id}=useParams();
    const idInt=parseInt(id)
    //console.log(id,jobs)
    const job=jobs.find(job=>job.id===idInt);
    //console.log(job)
    const handleApplyJob=()=>{
        saveJobApplication(idInt);
        toast('you have applied successfully');
    }
    return (
        <div className="mb-10">
            
            <div className="grid gap-4 md:grid-cols-4 ">
                <div className=" md:col-span-3 p-3">
                    <h2 className="text-4xl underline text-center mt-5">Details coming soon</h2>

                    <h2 className="text-xl"><span className='text-2xl  underline'>Job Description:</span>{job.job_description}</h2>
                    <p className="text-xl mt-4"><span className='text-2xl  underline'>Job Responsibility:</span>{job.job_responsibility}</p>
                    <p className="text-xl mt-4"><span className='text-2xl underline'>Educational Requirements:</span>{job.educational_requirements}</p>
                    <h2 className="text-xl mt-4"> <span className='text-2xl   underline'>Expericence:</span>{job.experiences}</h2>
                </div>
                <div className=" px-1 bg-gray-100">
                    <div className="space-y-3">
                    <h2 className="text-2xl text-center underline">Job Details</h2>
                    <hr></hr>
                    <h2 className="text-xl"><span className='text-xl '>Salary:</span>{job.salary}(per Month)</h2>
                    <h2 className="text-xl"><span className='text-xl '>Job Title:</span>{job.job_title}</h2>
                    <h2 className='text-xl font-bold text-center'>Contact Information</h2>
                    </div>
                    <hr></hr>
                    <div className="space-y-3 mt-5">
                    <h2 className="text-xl"><span className="">Phone:</span>{job.contact_information.phone}</h2>
                    <h2 className="text-xl"><span className="">Email:</span>{job.contact_information.email}</h2>
                    <h2 className="text-xl"><span className="">Address:</span>{job.contact_information.address}</h2>
                    </div>

                    <div className="mt-10">
                    <button onClick={handleApplyJob} 
                    className="btn bg-gradient-to-r
                     from-indigo-500 via-purple-500
                      to-pink-500 w-full">APPLY NOW</button>
                    </div>

                </div>

            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;