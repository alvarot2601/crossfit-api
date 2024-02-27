// In src/database/Record.js
const DB = require("./db.json");

const getRecordForWorkout = (workoutId) => {
  try {
    const record = DB.records.filter((record) => record.workout === workoutId);
    if (!record) {
      throw {
        status: 400,
        message: `Can't find workout with the id '${workoutId}'`,
      };
    }
    return record;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};
module.exports = { getRecordForWorkout };
/*
const { saveToDatabase } = require("./utils");

const getAllRecords = ()=> DB.records;

const getOneRecord = (recordId)=> {
    const record = DB.records.find((record)=> record.id === recordId );
    if(!record) return;
    return record;
}

const createNewRecord = (newRecord)=> {
    const isAlreadyAdded = DB.records.findIndex(record => record.id === newRecord.id) > -1;
    if(isAlreadyAdded){
        throw {status: 400, message: `Record with id ${newRecord.id} already exists.`};
    }
    try {
        DB.records.push(newRecord);
        saveToDatabase(DB);
        return newRecord;
    } catch (error) {
        throw {status:400, message: error?.message || error}
    }
}*/