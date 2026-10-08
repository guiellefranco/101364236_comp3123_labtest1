const fs = require("fs");
const path = require("path");

const logsDirectory = path.join(__dirname, "Logs");

// Check if Logs directory exists
if (fs.existsSync(logsDirectory)) {

    // Get all files inside directory
    const files = fs.readdirSync(logsDirectory);

    // Delete each log file
    files.forEach(file => {
        const filePath = path.join(logsDirectory, file);

        if (fs.statSync(filePath).isFile()) {
            fs.unlinkSync(filePath);
            console.log(`Deleted: ${file}`);
        }
    });

    // Remove empty Logs directory
    fs.rmdirSync(logsDirectory);
    console.log("Logs directory removed.");
} else {
    console.log("Logs directory does not exist.");
}