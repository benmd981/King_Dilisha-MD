const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID||"Nj8CHYrJ#VXFx9sg5sWlNoXVXAkjJOxO3d5GYe3VRN2iQCyaek4c",
ALIVE_MSG: process.env.ALIVE_MSG || "Hi iam back now",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/cad7038fe82e47f79c609.jpg",
};
