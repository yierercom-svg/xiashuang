const express = require('express');
const router = express.Router();

// Dummy data for response
const lawyerInfo = { name: 'John Doe', specialization: 'Family Law' };
const articles = [
    { title: 'Understanding Family Law', url: 'https://example.com/family-law' },
    { title: 'Divorce Process', url: 'https://example.com/divorce-process' }
];
const videos = [
    { title: 'What to Expect in a Divorce', url: 'https://youtube.com/watch?v=abcd1234' },
    { title: 'Family Law Basics', url: 'https://youtube.com/watch?v=efgh5678' }
];
const consultationStats = { available: 5, booked: 15 };

// GET /api/home endpoint
router.get('/api/home', (req, res) => {
    res.json({ lawyerInfo, articles, videos, consultationStats });
});

module.exports = router;