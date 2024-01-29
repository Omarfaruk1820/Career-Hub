import { MdAddLocationAlt } from "react-icons/md";
import { HiCurrencyDollar } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Job = ({job}) => {
    const {job_title,logo,id,company_name,remote_or_onsite,
        location,job_type,salary,job_description,job_responsibility,
        educational_requirements,experiences,contact_information,
        phone,email,address}=job;
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img className="w-40 h-16" src={logo} alt="logo" /></figure>
  <div className="card-body">
    <h2 className="card-title">Ttile: {job_title}</h2>
    <p>Company: {company_name}</p>
    <div className="">
        <button className=" text-[#7E90FE] mr-4 border rounded border-green-300 px-5 py-2 font-extrabold">{remote_or_onsite}</button>
        <button className=" mr-4 border rounded border-green-300 px-5 py-2 font-extrabold">{job_type}</button>
    </div>
   <div className=" flex mt-4">
   <h2 className="flex gap-2 text-xl"><MdAddLocationAlt className="text-2xl"></MdAddLocationAlt>{location}</h2>
   <h2 className="flex gap-2 text-xl"><HiCurrencyDollar className="text-2xl"></HiCurrencyDollar>{salary}</h2>
   </div>
    <div className="card-actions">
      <Link to ={`/job/${id}`}>
      <button className="btn bg-gradient-to-r
       from-indigo-500 via-purple-500 to-pink-500 text-xl
        text-white">View Details</button>
      </Link>
    </div>
  </div>
</div>
    );
};

export default Job;