const getAllJobs = (req, res) => {
  //throw new Error("from jobs controller");
  res.send("All jobs list");
};

const getJob = (req, res) => {
  res.send("single job");
};

const addJob = (req, res) => {
  res.send("add job");
};

const updateJob = (req, res) => {
  res.send("updateJob");
};

const deleteJob = (req, res) => {
  res.send("deleteJob");
};

export { getAllJobs, getJob, addJob, deleteJob, updateJob };
