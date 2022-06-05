const { Schema, model } = require('mongoose');

const tagSchema = new Schema(
    {
    tagName: {
        type: String,
        required: true
    }
}
);

const Tag = model('Tag', tagSchema);

module.exports = Tag;