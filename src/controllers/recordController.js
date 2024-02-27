const recordService = require("../services/recordServices");

//alvaro
const getRecordForWorkout = (req, res)=> {
    const {params:{workoutId}, } = req;
    try {
        const records = recordService.getRecordForWorkout(workoutId);
        res.send({status: 'OK', data: records});
        console.log(records);
    } catch (error) {
        res.status( error?.status || 500).send({status: 'FAILED', data: error?.message || error});
    }
}
module.exports = {getRecordForWorkout}