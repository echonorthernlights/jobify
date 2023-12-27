import { Router } from "express";
import {
  getAllJobs,
  getJob,
  addJob,
  updateJob,
  deleteJob,
} from "../controllers/jobController.js";
const router = Router();

router.route("/").get(getAllJobs).post(addJob);
router.route("/:id").get(getJob).patch(updateJob).delete(deleteJob);

export default router;
