import express from "express";
import {insertOneData,insertManyData,getAllData,getFilteredData,getOneData,updateOneData,updateManyData,deleteOneData,deleteManyData} from '../controller/operations.js';
const dbrouter = express.Router();

dbrouter.route('/insert-one')
.post(insertOneData);

dbrouter.route('/insert-many')
.post(insertManyData);

dbrouter.route('/read-all')
.get(getAllData);

dbrouter.route('/read-filter')
.post(getFilteredData);

dbrouter.route('/read-one')
.get(getOneData);

dbrouter.route('/update-one')
.patch(updateOneData);

dbrouter.route('/update-many')
.patch(updateManyData);

dbrouter.route('/delete-one')
.delete(deleteOneData);

dbrouter.route('/delete-many')
.delete(deleteManyData);



export default dbrouter;