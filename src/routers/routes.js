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

dbrouter.route('/read-one/:id')
.get(getOneData);

dbrouter.route('/update-one/:id')
.patch(updateOneData);

dbrouter.route('/update-many/:id')
.patch(updateManyData);

dbrouter.route('/delete-one/:id')
.delete(deleteOneData);

dbrouter.route('/delete-many')
.delete(deleteManyData);



export default dbrouter;