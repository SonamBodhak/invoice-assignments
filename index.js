var express = require('express');
var cors = require('cors');
var ngrok = require('ngrok');

// Start Express server with CORS
var app = express();
app.use(cors());
app.use(express.static('./SubmittedAssignments'));

const port = 8080;
app.listen(port, async function () {
    console.log('Server running on http://localhost:' + port);

    // Start ngrok tunnel if --dev flag is present
    if (process.argv.includes('--dev')) {
        try {
            const url = await ngrok.connect(port);
            console.log('ngrok tunnel running at:', url);
        } catch (ngrokErr) {
            console.error('Failed to start ngrok:', ngrokErr);
        }
    }
});