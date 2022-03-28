const replace = require('replace-in-file')
const inquirer = require('inquirer')
const fs = require('fs-extra')

async function main() {
  const tokenResponse = await inquirer.prompt([
    {
      name: "ghToken",
      message: "Enter github token",
      type: "password",
    },
  ])

  const content = `export const GCMS_GH_TOKEN = "${tokenResponse.ghToken}";`

  fs.writeFileSync("src/constants.ts", content)
}

main().then(console.log).catch(console.log)
