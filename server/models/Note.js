const { Schema, model } = require('mongoose');
const noteSchema = new Schema(
    {
        notepoints:[
            {
            type: String,
            required: true
            }
        ],
        image:{
            type: String,
        },
        content: {
            type:String
        },
        routeId:{
            type: Schema.Types.ObjectId,
            ref: 'Route',
            required: true
        }
    }
);

const Note = model('Note', noteSchema);

module.exports = Note;