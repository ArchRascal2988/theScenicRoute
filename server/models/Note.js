const { Schema, model } = require('mongoose');
const noteSchema = new Schema(
    {
        routePoints:
            {
            type: [Number],
            required: true
            }
        ,
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