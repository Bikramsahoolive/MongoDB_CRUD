import { ObjectId } from 'mongodb';
import {client} from '../config/database.js';

const db = client.db('applicants');

  export async function insertOneData(req,res) {
      const data = req.body;
      //const data = {name:"test Name1",phone:9998887770,email:"test@test.com"};
    try {
      await client.connect();
      const collection = db.collection('user');
  
      // Find the first document in the collection
      // const first = await collection.findOne();
      const result = await collection.insertOne(data);
  
      console.log(result);
      res.send(result);
    }catch(err){
      console.log(err);
    }finally {
      // Close the database connection when finished or an error occurs
      await client.close();
    }
  }

  export async function insertManyData(req,res) {
    const data = req.body;
    //const data = [
      //   {name:"test Name1",phone:9998887770,email:"test@test.com"},
      //   {name:"test Name2",phone:9998887770,email:"test@test.com"},
      //   {name:"test Name3",phone:9998887770,email:"test@test.com"},
      // ]
    try {
      await client.connect();
      const collection = db.collection('user');
  
      // Find the first document in the collection
      // const first = await collection.findOne();
      const result = await collection.insertMany(data);
  
      console.log(result);
      res.send(result);
    }catch(err){
      console.log(err);
    }finally {
      // Close the database connection when finished or an error occurs
      await client.close();
    }
  }

  export async function getAllData(req,res) {

    try {
      await client.connect();
      const collection = db.collection('user');
      const result = await collection.find({}).toArray();
  
      // console.log(result);
      res.send(result);
    }catch(err){
      console.log(err);
    }finally {
      await client.close();
    }
  }

  export async function getFilteredData(req,res) {
      const data = req.body;
      //const data = {name:"Demo Name"};
    try {
      await client.connect();
      const collection = db.collection('user');
      const result = await collection.find(data).toArray();
  
      // console.log(result);
      res.send(result);
    }catch(err){
      console.log(err);
    }finally {
      await client.close();
    }
  }

  export async function getOneData(req,res) {
    const id = req.params.id;
    //const data = id or if name then => {name:'Test Name'};
    try {
      await client.connect();
      const collection = db.collection('user');
      const result = await collection.findOne({ _id: ObjectId(id)});
  
      // console.log(result);
      res.send(result);
    }catch(err){
      console.log(err);
    }finally {
      await client.close();
    }
  }

  export async function updateOneData(req,res) {
    const id = req.params.id;
    //const id = id or if name then => {name:'Test Name'};
    const data = req.body;
    try {
      await client.connect();
      const collection = db.collection('user');
      const result = await collection.updateOne({ _id: ObjectId(id)},{$set:data});
  
      // console.log(result);
      res.send(result);
    }catch(err){
      console.log(err);
    }finally {
      await client.close();
    }
  }

  export async function updateManyData(req,res) {

    try {
      await client.connect();
      const collection = db.collection('user');
      const filter = {phone:9998887770}; 
      const update = {$set:{phone:'9776999501'}};
      const result = await collection.updateMany(filter,update);
  
      // console.log(result);
      res.send(result);
    }catch(err){
      console.log(err);
    }finally {
      await client.close();
    }
  }

  export async function deleteOneData(req,res) {
    const id = req.params.id;
    //const data = id or if name then => {name:'Test Name'};
    try {
      await client.connect();
      const collection = db.collection('user');
      const result = await collection.deleteOne({ _id: ObjectId(id)});
  
      // console.log(result);
      res.send(result);
    }catch(err){
      console.log(err);
    }finally {
      await client.close();
    }
  }

  export async function deleteManyData(req,res) {
    const filter = req.body;
    //const filter = {phone:"9776999501"};
    try {
      await client.connect();
      const collection = db.collection('user');
      const result = await collection.deleteMany(filter);
  
      // console.log(result);
      res.send(result);
    }catch(err){
      console.log(err);
    }finally {
      await client.close();
    }
  }


