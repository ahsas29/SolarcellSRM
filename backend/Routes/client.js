import express from "express";
import {updateClient, deleteClient, getAllClient, getSingleClient} from "../Controllers/clientController.js";

const router = express.Router();

router.get('/:id',getSingleClient);
router.get('/',getAllClient);
router.put('/:id',updateClient);
router.delete('/:id',deleteClient);

export default router;