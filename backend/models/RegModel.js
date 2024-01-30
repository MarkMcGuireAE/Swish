const mongoose = require ("mongoose")

const Schema = mongoose.Schema

const RegSchema = new Schema ({
    
    firstName: { type: String },
    lastName: { type: String},
    dob: {type: Date},
    skillLevel: {type: Number},
    cell: {type: String},
    email: {type: String},
    eContactCell: {type: String},
    eContactName: {type: String},
    release: {type: Boolean},

})

const Reg = mongoose.model("regs", RegSchema)

module.exports = Reg