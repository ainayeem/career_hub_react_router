import { useEffect, useState } from "react";
import EachJob from "../EachJob/EachJob";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  //   show four data
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      <div className="text-center">
        <h2 className="text-3xl text-center">Featured Jobs: {jobs.length}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quo.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {jobs.slice(0, dataLength).map((job) => (
          <EachJob key={job.id} job={job}></EachJob>
        ))}
      </div>
      <div className={dataLength === jobs.length && "hidden"}>
        <div className="flex justify-center items-center mt-4">
          <button
            onClick={() => setDataLength(jobs.length)}
            className="btn btn-primary"
          >
            Show All Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
