const { Schema, model } = require('mongoose');

const routeSchema = new Schema(
    {
        geometry:[
            {
                type: String
            }
        ],
        description:{
            type: String,
            required: true
        },
        difficultyLevel:{
            type:Number,
            required: true
        },
        votes:{
            type:Number,
            required: true,
            default:0
        },
        userId:{
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        tags:[
            {
                type: Schema.Types.ObjectId,
                ref:'Tag'
            }
        ],
        notes:[
            {
                type: Schema.Types.ObjectId,
                ref: 'Note'
            }
        ]
    }
);

const Route = model('Route', routeSchema)

module.exports = Route