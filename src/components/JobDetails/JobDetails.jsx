import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../../utility/localstorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  //   console.log(job);
  const handleApplyJob = () => {
    saveJobApplication(idInt);
    toast("Applied successfully!");
  };

  return (
    <div>
      <div className="grid gap-4 md:grid-cols-4">
        <div className="border md:col-span-3">
          <h2>Details Coming</h2>
          <h2>Job Details of: {job.job_title}</h2>
          <p>{job.company_name}</p>
        </div>
        <div className="border">
          <h2>Side things</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            aperiam laborum iure impedit nam corrupti dolore dicta sint dolorum
            vero!
          </p>
          <button onClick={handleApplyJob} className="btn btn-primary w-full">
            Apply Now
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
