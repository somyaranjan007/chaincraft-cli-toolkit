import { program } from "commander";
import inquirer from "inquirer";

// Function to collect answers from the user
const createContractCommand = async () => {
    // Ask questions
    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'chain',
            message: 'Choose the blockchain to deploy the contract:',
            choices: ['Ethereum', 'Solana', 'Stellar', 'Custom'],
            default: 'Ethereum' // Default value if no selection is made
        },
        {
            type: 'list',
            name: 'language',
            message: 'Choose your contract programming language:',
            choices: ['Solidity', 'Rust', 'Go', 'Vyper'],
            default: 'Solidity' // Default value if no selection is made
        },
        {
            type: 'input',
            name: 'contractName',
            message: 'What is the name of your contract? (Optional)',
            default: 'MyContract' // Optional question with a default value
        }
    ]);

    // Log the collected answers
    console.log(`Selected Blockchain: ${answers.chain}`);
    console.log(`Selected Language: ${answers.language}`);
    console.log(`Contract Name: ${answers.contractName}`);
};

// Define the program without chaining
const cli = program
    .name("chaincraft")
    .version("1.0.0");

// Add the create command separately
cli
    .command("create")
    .description("Choose your perfect blockchain")
    .action(createContractCommand);

// Main function
async function main() {
    try {
        await cli.parseAsync(process.argv);
    } catch (error) {
        console.error('An error occurred:', error);
        process.exit(1);
    }
}

// Call the main function
main();
