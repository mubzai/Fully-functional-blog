// lib/models/BlogModel.js
const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

const BlogModel = mongoose.models.Blog || mongoose.model('Blog', BlogSchema);
module.exports = BlogModel;
