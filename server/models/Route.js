const { Schema, model } = require('mongoose');

const routeSchema = new Schema(
    {
        geometry:[
            [{
                type: Number
            }]
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
        title:{
            type: String,
            required: true
        },
        userId:{
            type: Schema.Types.ObjectId,
            required: true
        },
        tags:
            {
                type: String,
            }
        ,
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