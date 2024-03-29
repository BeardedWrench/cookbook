const { writeFile, existsSync, mkdirSync } = require("fs");
const { argv } = require("yargs");

require("dotenv").config();
const environment = argv.environment;

function writeFileUsingFS(targetPath, environmentFileContent) {
  writeFile(targetPath, environmentFileContent, function (err) {
    if (err) {
      console.log(err);
    }
    if (environmentFileContent !== "") {
      console.log(`wrote variables to ${targetPath}`);
    }
  });
}

const envDirectory = "./src/environments";

if (!existsSync(envDirectory)) {
  mkdirSync(envDirectory);
}

writeFileUsingFS("./src/environments/environment.prod.ts", "");
writeFileUsingFS("./src/environments/environment.ts", "");

const isProduction = environment === "prod";

const targetPath = isProduction
  ? "./src/environments/environment.prod.ts"
  : "./src/environments/environment.ts";

const environmentFileContent = `
  export const environment = {
    production: ${isProduction},
    firebase: {
        apiKey: '${process.env.apiKey}',
        authDomain: '${process.env.authDomain}',
        projectId: '${process.env.projectId}',
        storageBucket: '${process.env.storageBucket}',
        messagingSenderId: '${process.env.messagingSenderId}',
        appId: '${process.env.appId}',
        measurementId: '${process.env.measurementId}',
      },
  };
`;

writeFileUsingFS(targetPath, environmentFileContent);
