const fs = require("fs");
const path = require("path");

const logsDirectory = path.join(__dirname, "Logs");

// Create Logs directory if it doesn't exist
if (!fs.existsSync(logsDirectory)) {
    fs.mkdirSync(logsDirectory);
}

// Change current working directory
process.chdir(logsDirectory);

// Create 10 log files
for (let i = 1; i <= 10; i++) {
    const fileName = `log${i}.txt`;

    fs.writeFileSync(fileName, `This is log file ${i}`);

    console.log(fileName);
}
