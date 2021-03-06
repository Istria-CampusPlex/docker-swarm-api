// Required modules
const express = require('express');
const app = express();

// Import Routes
const authRoute = require('./routes/index');

// Middlewares
app.use('/api', authRoute);

app.listen(process.env.PORT || 3000, ()=>console.log('API running'));